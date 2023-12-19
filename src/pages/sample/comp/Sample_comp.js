import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Input,
  Radio,
  Row,
  Select,
  Table,
  Tabs,
  Modal,
  Space,
  Tag,
  Card,
  Tree,
  Transfer,
  TreeSelect,
  Spin,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { FileOutlined, LoadingOutlined } from '@ant-design/icons';

const Sample_comp = ({ ojtGroupCodes, searchClick, editable = false }) => {

  //트리메뉴
  const arrBizClsf = [
    {
      key: 1,
      title: (
        <span className="eu-tree-title">스마트공장지원사업</span>
      ),
      a: '2022',
      b: 'G01',
      children: [
        {
          key: 2,
          title: (
            <span className="eu-tree-title">단독공장 구축(일반형)</span>
          ),
          a: '2022',
          b: 'G01',
          children: [
            {
              key: 4,
              title: (
                <span className="eu-tree-title">스마트공장 구축 및 고도화</span>
              ),
              a: '2022',
              b: 'G01',
              children: [
                {
                  key: 5,
                  title: '스마트공장 구축 및 고도화(신규구축)',
                  icon: <FileOutlined />,
                  a: '2022',
                  b: 'G01',
                },
                {
                  key: 6,
                  title: '스마트공장 구축 및 고도화(고도화)',
                  icon: <FileOutlined />,
                  a: '2022',
                  b: 'G01',
                },
              ],
            },
          ],
        },
        {
          key: 3,
          title: (
            <span className="eu-tree-title">대중소 상생형</span>
          ),
          a: '2022',
          b: 'G01',
          children: [
            {
              key: 7,
              title: '스마트공장 구축(대중소상생형-포스코)',
              icon: <FileOutlined />,
              a: '2022',
              b: 'G01',
            },
            {
              key: 8,
              title: '스마트공장 구축(대중소상생형-한수원)',
              icon: <FileOutlined />,
              a: '2022',
              b: 'G01',
            },
          ],
        },
      ],
    },
  ];

  const [expandedKeys, setExpandedKeys] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState([]);
  // Tree 확장 event
  const onExpand = (expandedKeys) => {
    console.log('expandedKeys', expandedKeys);
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };
  // Tree node 선택 event
  const onSelect = (selectedKeys, info) => {
    console.log('selectedKeys: ', selectedKeys);
    console.log('info: ', info);
    setSelectedKeys([...selectedKeys, ...selectedKeys]);
  };
  // Tree 전체 open | close event
  const treeExpandAllClick = (checked) => {
    checked ? setExpandedKeys([1, 2, 3, 4, 5, 6, 7, 8]) : setExpandedKeys([]);
  };

  //Transfer
  const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
    <Transfer {...restProps}>
      {({
        direction,
        filteredItems,
        onItemSelect,
        selectedKeys: listSelectedKeys,
      }) => {
        const columns = direction === 'left' ? leftColumns : rightColumns;
        console.log('filteredItems: ', filteredItems);
        return (
          <Table
            columns={columns}
            dataSource={filteredItems}
            size="small"
            bordered={true}
            pagination={false}
            onRow={({ key }) => ({
              onClick: () => {
                onItemSelect(key, !listSelectedKeys.includes(key));
              },
            })}
            sticky={true}
            scroll={{
              y: 800,
            }}
            tableLayout={'auto'}
          />
        );
      }}
    </Transfer>
  );
  const leftTableColumns = [
    {
      dataIndex: 'a',
      title: '사업구분명',
      align: 'center',
    },
    {
      dataIndex: 'b',
      title: '사업구분코드',
      align: 'center',
    },
    {
      dataIndex: 'c',
      title: '사업구분요약명',
      align: 'center',
    },
  ];
  const rightTableColumns = [
    {
      dataIndex: 'a',
      title: '년도별 사업구분명',
      align: 'center',
    },
    {
      dataIndex: 'b',
      title: '사업구분명',
      align: 'center',
    },
  ];

  //treeSelect
  const [treeLine, setTreeLine] = useState(true);
  const [showLeafIcon, setShowLeafIcon] = useState(true);
  //멀티 트리셀렉트
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const treeData = [
    {
      value: 'parent 1',
      title: (
        <span className="eu-tree-title">스마트공장지원사업</span>
      ),
      children: [
        {
          value: 'parent 1-0',
          title: (
            <span className="eu-tree-title">단독공장 구축(일반형)</span>
          ),
          children: [
            {
              value: 'leaf1',
              title: (
                <span className="eu-tree-title">스마트공장 구축 및 고도화</span>
              ),
              children: [
                {
                  value: 'leaf1-1',
                  title: "스마트공장 구축 및 고도화(신규구축)",
                  icon: <FileOutlined />,
                },
                {
                  value: 'leaf1-2',
                  title: "스마트공장 구축 및 고도화(고도화)",
                  icon: <FileOutlined />,
                },
              ],
            },
            {
              value: 'leaf2',
              title: (
                <span className="eu-tree-title">스마트공장 구축 및 고도화2</span>
              ),
              children: [
                {
                  value: 'leaf2-1',
                  title: "스마트공장 구축 및 고도화(신규구축)",
                  icon: <FileOutlined />,
                },
                {
                  value: 'leaf2-2',
                  title: "스마트공장 구축 및 고도화(고도화)",
                  icon: <FileOutlined />,
                },
              ],
            },
            {
              value: 'leaf3',
              title: (
                <span className="eu-tree-title">스마트공장 구축 및 고도화3</span>
              ),
              children: [
                {
                  value: 'leaf3-1',
                  title: "스마트공장 구축 및 고도화(신규구축)",
                  icon: <FileOutlined />,
                },
                {
                  value: 'leaf3-2',
                  title: "스마트공장 구축 및 고도화(고도화)",
                  icon: <FileOutlined />,
                },
              ],
            },
          ],
        },
        {
          value: 'parent 1-1',
          title: (
            <span className="eu-tree-title">대중소 상생형</span>
          ),
          children: [
            {
              value: 'left33',
              title: '스마트공장 구축(대중소상생형-포스코)',
              icon: <FileOutlined />,
            },
            {
              value: 'left44',
              title: '스마트공장 구축(대중소상생형-한수원)',
              icon: <FileOutlined />,
            },
          ],
        },
      ],
    },
  ];

  return(
    <>
      <Row className="eu-row-comp-title mt-20">
        <Col span={24}>
          <TitleComp>컴포넌트 디자인 샘플</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24} className="font-16-400">
          다양한 컴포넌트 태그에 className을 어떻게 적용하는지에 따라
          색상이나 크기와 모양이 다른 샘플들을 제공합니다.
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>1. &nbsp;{ `<Tag />`}&nbsp; 컴포넌트</TitleComp>
          <div className="font-16-400">
            분류 또는 마크업을 위한 태그이며,
            주로 테이블 내에서 상태를 분류할때 사용한다.
            <br/>기본(default)컬러는 #3C61B5(네이비) 컬러입니다.
          </div>
        </Col>
        <Col span={24} className="mtb-20">
          <Space>
            <Tag>제출완료</Tag>
            <Tag className="tag-orange">대기</Tag>
            <Tag className="tag-default">세부공고명</Tag>
            <Tag className="tag-green">접수</Tag>
            <Tag className="tag-blue">요청</Tag>
            <Tag className="tag-navy">협의중</Tag>
            <Tag className="tag-black">견학신청</Tag>
            <Tag className="tag-gray">종료</Tag>
            <div className="sample-area ptb-10 plr-6">
              <Tag className="tag-orange w-full text-c">대기</Tag>
            </div>
          </Space>
        </Col>
        <Col span={24} className="mb-20">
          <Space>
            <Tag className="tag-green-1">상태추가</Tag>
            <Tag className="tag-green-2">상태추가</Tag>
            <Tag className="tag-green-3">상태추가</Tag>
            <Tag className="tag-orange-1">상태추가</Tag>
            <Tag className="tag-brown">상태추가</Tag>
            <Tag className="tag-brown-1">상태추가</Tag>
            <Tag className="tag-pink">상태추가</Tag>
            <Tag className="tag-pink-1">상태추가</Tag>
            <Tag className="tag-purple">상태추가</Tag>
            <Tag className="tag-navy-1">상태추가</Tag>
            <Tag className="tag-disabled">사용불가</Tag>
          </Space>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`1. 기본컬러 : <Tag>제출완료</Tag>`}
            <br/>{`2. <Tag className="`}<span className="text-red">tag-orange</span>{`">대기</Tag>`}
            <br/>{`3. <Tag className="`}<span className="text-red">tag-default</span>{`">세부공고명</Tag>`}
            <br/>{`4. <Tag className="`}<span className="text-red">tag-green</span>{`">접수</Tag>`}
            <br/>{`5. <Tag className="`}<span className="text-red">tag-blue</span>{`">요청</Tag>`}
            <br/>{`6. <Tag className="`}<span className="text-red">tag-navy</span>{`">협의중</Tag>`}
            <br/>{`7. <Tag className="`}<span className="text-red">tag-black</span>{`">견학신청</Tag>`}
            <br/>{`8. <Tag className="`}<span className="text-red">tag-gray</span>{`">종료</Tag>`}
            <br/>9. 전체 영역(width 100%)
            <br/>{`<div className="sample-area ptb-10 plr-6">`}
            <br/>&nbsp;&nbsp;{`<Tag className="`}<span className="text-red">tag-orange w-full text-c</span>{`">대기</Tag>`}
            <br/>{`</div>`}
          </div>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`※ 추가컬러`}
            <br/>{`10. <Tag className="`}<span className="text-red">tag-green-1</span>{`">상태추가</Tag>`}
            <br/>{`11. <Tag className="`}<span className="text-red">tag-green-2</span>{`">상태추가</Tag>`}
            <br/>{`12. <Tag className="`}<span className="text-red">tag-green-3</span>{`">상태추가</Tag>`}
            <br/>{`13. <Tag className="`}<span className="text-red">tag-orange-1</span>{`">상태추가</Tag>`}
            <br/>{`14. <Tag className="`}<span className="text-red">tag-brown</span>{`">상태추가</Tag>`}
            <br/>{`15. <Tag className="`}<span className="text-red">tag-brown-1</span>{`">상태추가</Tag>`}
            <br/>{`16. <Tag className="`}<span className="text-red">tag-pink</span>{`">상태추가</Tag>`}
            <br/>{`17. <Tag className="`}<span className="text-red">tag-pink-1</span>{`">상태추가</Tag>`}
            <br/>{`18. <Tag className="`}<span className="text-red">tag-purple</span>{`">상태추가</Tag>`}
            <br/>{`19. <Tag className="`}<span className="text-red">tag-navy-1</span>{`">상태추가</Tag>`}
            <br/>{`20. <Tag className="`}<span className="text-red">tag-disabled</span>{`">사용불가</Tag>`}
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={12}>
          <TitleComp>2. &nbsp;{ `<Spin />`}&nbsp; 컴포넌트 - 로딩(LOADING)</TitleComp>
          <div className="font-16-400">
            {/* 로딩(LOADING)<br/> */}
            전체 로딩페이지는 <span className="text-red">{`<LoadingPage />`}</span> 컴포넌트로 구성되어 있습니다.
            <br/>뒷배경을 안보이게 하여, Loading 아이콘이 더 잘보이게 하려면
            wrapperClassName="blur" 를 추가한다.
          </div>
        </Col>
        <Col span={24} className="mt-40">
          <Space>
            <Spin tip="Loading" className="loading-page-loading" />
            {/* <Spin className="loading-page-loading" />
            <Spin indicator={<LoadingOutlined spin />} />
            <Spin indicator={<LoadingOutlined spin className="text-icon-30" />} />
            <Spin indicator={<LoadingOutlined spin style={{ fontSize: 50 }} />} />
            <Spin indicator={<LoadingOutlined spin className="text-icon-50" />} /> */}
          </Space>
        </Col>
        <Col span={24} className="mb-20">
          <div className="font-16-400 text-red">
            {`<Spin tip="Loading" className="loading-page-loading" />`}
          </div>
        </Col>
        <Col span={11} className="eu-row-page-comp-layout text-c">
          <Spin tip="Loading" className="loading-page-loading">
            <div className="font-20 text-blue">안녕하세요</div>
            <div className="font-20 text-blue">안녕하세요</div>
            <div className="font-20 text-blue">안녕하세요</div>
            <div className="font-20 text-blue">안녕하세요</div>
          </Spin>
        </Col>
        <Col span={2}></Col>
        <Col span={11} className="eu-row-page-comp-layout text-c">
          <Spin tip="Loading" className="loading-page-loading" wrapperClassName="blur">
            <div className="font-20 text-blue">안녕하세요</div>
            <div className="font-20 text-blue">안녕하세요</div>
            <div className="font-20 text-blue">안녕하세요</div>
            <div className="font-20 text-blue">안녕하세요</div>
          </Spin>
        </Col>
        <Col span={13}>
          <div className="font-16-400">
            {`<Spin tip="Loading" className="loading-page-loading">`}
            <br/>&nbsp;&nbsp;{`<div className="content" />`}
            <br/>{`</Spin>`}
          </div>
        </Col>
        <Col span={11}>
          <div className="font-16-400">
            {`<Spin tip="Loading" className="loading-page-loading"`}
            <br/>&nbsp;&nbsp;<span className="text-red">{`wrapperClassName="blur">`}</span>
            <br/>&nbsp;&nbsp;{`<div className="content" />`}
            <br/>{`</Spin>`}
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>3. &nbsp;{ `<Card /> & <Tree />`}&nbsp; 컴포넌트</TitleComp>
          <div className="font-16-400">
            트리를 감싸주는 테두리 레이아웃 {`<Card>`} 컴포넌트와 {`<Tree>`}를 함께 사용할수있고,
            {/* <br/>카드메뉴는 "treeData" 구조를 잘 구성하여 다양하게 사용합니다. */}
            <br/>우리 디자인에서는 아이콘 + , ㅡ , 파일아이콘 {`<FileOutlined />`} 을 사용하여 커스터마이징 하였습니다.
          </div>
        </Col>
        <Col span={12} className="mtb-20">
          <div className="font-16-400">
            <span className="text-red">{`<Card className="eu-card-tree">`}</span>
            <br/>&nbsp;&nbsp;<span className="text-red">{`<Tree`}</span>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`onExpand={onExpand}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`expandedKeys={expandedKeys}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`autoExpandParent={autoExpandParent}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`onSelect={onSelect}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`selectedKeys={selectedKeys}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue">{`treeData={arrBizClsf}`}</span>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`defaultExpandAll={true}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`defaultExpandParent={true}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red">{`height={880}`}</span>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red">{`showLine={true}`}</span>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red">{`showIcon={true}`}</span>
            <br/>&nbsp;&nbsp;{`/>`}
            <br/><span className="text-red">{`</Card>`}</span>
          </div>
          <div className="font-12-400 mt-16">※ 디자인적으로 설정이 필요할 것 같은 Property 는 붉은색 처리</div>
        </Col>
        <Col span={12} className="mtb-20">
          <Card className="eu-card-tree">
            <Tree
              onExpand={onExpand}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              onSelect={onSelect}
              selectedKeys={selectedKeys}
              treeData={arrBizClsf}
              defaultExpandAll={true}
              defaultExpandParent={true}
              height={880}
              // Tree 메뉴 디자인 showLine, showIcon 추가
              showLine={true}
              showIcon={true}
            />
          </Card>
          <Card className="eu-card-tree mt-20">
            <div className="font-16-400">treeData 구조 구성할때, 마지막 children에 &nbsp;
              <span className="text-blue">아이콘 파일 추가</span>
            </div>
            {`children: [{`}
            <br/>&nbsp;&nbsp;{`value: 'leaf3-1',`}
            <br/>&nbsp;&nbsp;{`title: "스마트공장 구축 및 고도화(신규구축)",`}
            <br/>&nbsp;&nbsp;<span className="text-blue">{`icon: <FileOutlined />,`}</span>
            <br/>{`},{}],`}
          </Card>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>3-1. &nbsp;{ `<TreeSelect />`}&nbsp; 컴포넌트</TitleComp>
          <div className="font-16-400">
            트리셀렉트 컴포넌트를 사용하여 select form 드롭다운 부분을 트리구조로 구현을 할수 있습니다.
          </div>
        </Col>
        <Col span={12} className="mtb-20">
          <div className="font-16-400">
            <span className="text-red">{`<TreeSelect`}</span>
            <br/>&nbsp;&nbsp;{`placeholder="트리 셀렉트 입니다"`}
            <span className="text-red">
            <br/>&nbsp;&nbsp;{`getPopupContainer={trigger => trigger.parentNode}`}
            <br/>&nbsp;&nbsp;{`dropdownAlign={{ offset: [0, 0] }}`}
            <br/>&nbsp;&nbsp;{`style={{ width: 500 }}`}
            <br/>&nbsp;&nbsp;{`treeData={treeData}`}
            <br/>&nbsp;&nbsp;{`treeLine={true}`}
            <br/>&nbsp;&nbsp;{`treeIcon={true}`}
            </span>
            <br/>{`/>`}
          </div>
          <div className="font-12-400 mt-16">※ 디자인적으로 설정이 필요할 것 같은 Property 는 붉은색 처리</div>
        </Col>
        <Col span={12} className="mtb-20">
          <Card className="eu-card-tree h-full">
            <TreeSelect
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }}
              style={{ width: 500 }}
              placeholder="트리 셀렉트 입니다"
              treeData={treeData}
              open={true}
              treeLine={true}
              treeIcon={true}
            />
          </Card>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>3-2. &nbsp;{ `<TreeSelect />`}&nbsp; 컴포넌트 - 체크트리</TitleComp>
          <div className="font-16-400">
            체크 트리셀렉트는 {`treeCheckable={true}`}추가합니다.
          </div>
        </Col>
        <Col span={12} className="mtb-20">
          <div className="font-16-400">
            <span className="text-red">{`<TreeSelect`}</span>
            <br/>&nbsp;&nbsp;{`placeholder="트리 셀렉트 입니다"`}
            <br/>&nbsp;&nbsp;{`getPopupContainer={trigger => trigger.parentNode}`}
            <br/>&nbsp;&nbsp;{`dropdownAlign={{ offset: [0, 0] }}`}
            <br/>&nbsp;&nbsp;{`style={{ width: '100%' }}`}
            <br/>&nbsp;&nbsp;{`treeData={treeData}`}
            <br/>&nbsp;&nbsp;{`treeLine={true}`}
            <br/>&nbsp;&nbsp;{`treeIcon={true}`}
            <span className="text-red">
            <br/>&nbsp;&nbsp;{`treeCheckable={true}`}
            </span>
            <br/>&nbsp;&nbsp;{`allowClear`}
            <br/>&nbsp;&nbsp;{`showArrow`}
            <br/>&nbsp;&nbsp;{`className="eu-multi-tree-select-height-fix"`}
            <br/>{`/>`}
          </div>
          <div className="font-12-400 mt-16">※ 멀티셀렉트의 셀렉트 화살표가 보이기를 원할시 showArrow 추가</div>
        </Col>
        <Col span={12} className="mtb-20">
          <Card className="eu-card-tree h-full">
            <TreeSelect
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }}
              style={{ width: '100%' }}
              placeholder="체크 트리 셀렉트 입니다"
              treeData={treeData}
              open={true}
              treeLine={true}
              treeIcon={true}
              treeCheckable={true}
              allowClear
              showArrow 
              className="eu-multi-tree-select-height-fix"
            />
          </Card>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>3-3. 멀티(Multiple) &nbsp;{ `<TreeSelect />`}&nbsp; 컴포넌트</TitleComp>
          <div className="font-16-400">
            멀티 트리셀렉트 : className에 따라 많은 데이터를 선택했을대 select 높이값이 다른 2가지 스타일
            <br/>- eu-multi-tree-select-<span className="text-blue">height-fix</span> : 고정사이즈
            (많은 데이터를 선택했더라도 select veiw창에서는 특정갯수 이상 넘어가지 않도록 한계를 정할때)
            <br/>- eu-multi-tree-select-<span className="text-blue">height-free</span> : 동적사이즈
          </div>
        </Col>
        <Col span={12} className="mtb-20">
          <div className="font-16-400">
            <span className="text-red">{`<TreeSelect`}</span>
            <br/>&nbsp;&nbsp;{`onChange={onChange}`}
            <br/>&nbsp;&nbsp;{`value={value}`}
            <br/>&nbsp;&nbsp;{`placeholder="멀티 트리 셀렉트(고정사이즈) 입니다"`}
            <br/>&nbsp;&nbsp;{`treeDefaultExpandAll`}
            <span className="text-red">
            <br/>&nbsp;&nbsp;{`className="eu-multi-tree-select-height-fix"`}
            <br/>&nbsp;&nbsp;{`getPopupContainer={trigger => trigger.parentNode}`}
            <br/>&nbsp;&nbsp;{`dropdownAlign={{ offset: [0, 0] }}`}
            <br/>&nbsp;&nbsp;{`style={{ width: '100%' }}`}
            <br/>&nbsp;&nbsp;{`treeData={treeData}`}
            <br/>&nbsp;&nbsp;{`showSearch`}
            <br/>&nbsp;&nbsp;{`showArrow`}
            <br/>&nbsp;&nbsp;{`allowClear`}
            <br/>&nbsp;&nbsp;{`multiple`}
            <br/>&nbsp;&nbsp;{`treeLine={true}`}
            <br/>&nbsp;&nbsp;{`treeIcon={true}`}
            </span>
            <br/>{`/>`}
          </div>
          <div className="font-12-400 mt-16">※ className을 확인하셔서 사용하세요</div>
        </Col>
        <Col span={12} className="mtb-20 eu-row-page-comp-layout">
          {/* <Card className="eu-card-tree h-full"> */}
            <TreeSelect
              className="eu-multi-tree-select-height-fix"
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }}
              style={{ width: '100%' }}
              treeData={treeData}
              showSearch
              showArrow
              allowClear
              multiple
              treeLine={true}
              treeIcon={true}
              onChange={onChange}
              value={value}
              placeholder="멀티 트리 셀렉트(고정사이즈) 입니다"
              treeDefaultExpandAll
            />
          {/* </Card> */}
        </Col>

        <Col span={12} className="mtb-20">
          <div className="font-16-400">
            <span className="text-red">{`<TreeSelect`}</span>
            <br/>&nbsp;&nbsp;{`onChange={onChange}`}
            <br/>&nbsp;&nbsp;{`value={value}`}
            <br/>&nbsp;&nbsp;{`placeholder="멀티 트리 셀렉트(변하는 사이즈) 입니다"`}
            <br/>&nbsp;&nbsp;{`treeDefaultExpandAll`}
            <span className="text-red">
            <br/>&nbsp;&nbsp;{`className="eu-multi-tree-select-height-free"`}
            <br/>&nbsp;&nbsp;{`getPopupContainer={trigger => trigger.parentNode}`}
            <br/>&nbsp;&nbsp;{`dropdownAlign={{ offset: [0, 0] }}`}
            <br/>&nbsp;&nbsp;{`style={{ width: '100%' }}`}
            <br/>&nbsp;&nbsp;{`treeData={treeData}`}
            <br/>&nbsp;&nbsp;{`showSearch`}
            <br/>&nbsp;&nbsp;{`showArrow`}
            <br/>&nbsp;&nbsp;{`allowClear`}
            <br/>&nbsp;&nbsp;{`multiple`}
            <br/>&nbsp;&nbsp;{`treeLine={true}`}
            <br/>&nbsp;&nbsp;{`treeIcon={true}`}
            </span>
            <br/>{`/>`}
          </div>
          <div className="font-12-400 mt-16">※ 디자인적으로 설정이 필요할 것 같은 Property 는 붉은색 처리</div>
        </Col>
        <Col span={12} className="mtb-20 eu-row-page-comp-layout">
          {/* <Card className="eu-card-tree h-full"> */}
            <TreeSelect
              className="eu-multi-tree-select-height-free"
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }}
              style={{ width: '100%' }}
              treeData={treeData}
              showSearch
              showArrow
              allowClear
              multiple
              treeDefaultExpandAll
              value={value}
              placeholder="멀티 트리 셀렉트(변하는 사이즈) 입니다"
              onChange={onChange}
              treeLine={true}
              treeIcon={true}
            />
          {/* </Card> */}
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>4. &nbsp;{ `<Transfer /> or <TableTransfer />`}&nbsp; 컴포넌트</TitleComp>
          <div className="font-16-400">
            트랜스퍼 컴포넌드 - 디자인 및 기능 협의후 수정예정
            <br/>테이블 트랜스퍼 , 트리구조 트랜스터 2종류 존재한다.
            {/* 주로 테이블 내에서 상태를 분류할때 사용한다. */}
          </div>
        </Col>
        <Col span={24} className="mtb-20">
          <TableTransfer
            // dataSource={arrBizSeLst}
            // targetKeys={targetKeys}
            // onChange={onChange}
            showSelectAll={false}
            selectAllLabels={{ style: { display: 'none' } }}
            filterOption={(inputValue, item) =>
              item.title.indexOf(inputValue) !== -1 ||
              item.tag.indexOf(inputValue) !== -1
            }
            leftColumns={leftTableColumns}
            rightColumns={rightTableColumns}
            operations={['이동','이동']}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>5. &nbsp;{ `<무슨 />`}&nbsp; 컴포넌트</TitleComp>
          <div className="font-16-400">
            {/* 분류 또는 마크업을 위한 태그이며, */}
            {/* 주로 테이블 내에서 상태를 분류할때 사용한다. */}
          </div>
        </Col>
      </Row>





    </>
  );
}
  
export default Sample_comp;