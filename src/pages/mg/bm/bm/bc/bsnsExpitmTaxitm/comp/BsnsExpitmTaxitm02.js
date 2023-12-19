import React, { useState } from 'react';
import {
  Col,
  Row,
  Tree,
  Table,
  Button,
  Select,
  Card,
  Switch,
  Radio,
  Modal,
} from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { useHistory } from 'react-router-dom';

const BsnsExpitmTaxitm02 = ({
  arrBizClsf,
  selectedExpitmKeys,
  setSelectedExpitmKeys,
  arrExpitm,
  setArrExpitm,
  arrChcExpitmGroupDsctn,
  setArrChcExpitmGroupDsctn,
  path,
}) => {
  const history = useHistory();
  const [expandedKeys, setExpandedKeys] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  // Tree 확장 event
  const onExpand = (expandedKeysValue) => {
    console.log('expandedKeysValue', expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };
  // Tree node 선택 event
  const onSelect = (selectedKeysValue, info) => {
    console.log('selectedKeysValue: ', selectedKeysValue);
    console.log('info: ', info);
    setSelectedExpitmKeys([...selectedExpitmKeys, ...selectedKeysValue]);
  };
  // Tree 전체 open | close event
  const treeExpandAllClick = (checked) => {
    checked ? setExpandedKeys([1, 2, 3, 4, 5, 6, 7, 8]) : setExpandedKeys([]);
  };
  const expitmChange = (text, record, index) => {
    console.log('text: ', text);
    console.log('record: ', record);
    console.log('index: ', index);
  };

  // 비목 테이블 column
  const expitmColumns = [
    {
      title: '사업연도',
      dataIndex: 'a',
      key: 'a',
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'title',
      key: 'title',
      align: 'center',
    },
    {
      title: '비목그룹',
      key: 'b',
      align: 'center',
      render: (_, record, index) => (
        <Select
          style={{
            width: 120,
          }}
          onChange={() => expitmChange(_, record, index)}
          options={[
            {
              value: 'G01',
              label: 'G01',
            },
            {
              value: 'G02',
              label: 'G02',
            },
          ]}
          value={arrExpitm[index].b}
        />
      ),
    },
  ];
  // 선택 비목그룹내역 column
  const chcExpitmGroupDsctnColumn = [
    {
      title: '사업연도',
      dataIndex: 'a',
      key: 'a',
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'title',
      key: 'title',
      align: 'center',
    },
    {
      title: '비목그룹',
      dataIndex: 'b',
      key: 'b',
      align: 'center',
    },
    {
      title: '비목',
      dataIndex: 'c',
      key: 'c',
      align: 'center',
    },
  ];

  // 비목 행추가 메소드
  const insertLineClick = () => {
    Modal.info({
      title: 'insertLineClick',
    });
  };

  // 비목 저장 메소드
  const insertExpitmClick = () => {
    Modal.info({
      title: 'insertExpitmClick',
    });
  };
  // 라디오
  const radioOptions = [
    { label: '예산관리', value: '/mg/bm/bm/bc/bsnsBudgetManage' },
    { label: '비목', value: '/mg/bm/bm/bc/bsnsExpitmTaxitm' },
  ];
  const radioChange = ({ target: { value } }) => {
    if (path !== value) history.push(value);
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>
            년도별 사업분류
            <Switch
              defaultChecked
              onChange={treeExpandAllClick}
              style={{ marginLeft: '20px' }}
            />
          </TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={8}>
          <Card>
            <Tree
              onExpand={onExpand}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              onSelect={onSelect}
              selectedKeys={selectedExpitmKeys}
              treeData={arrBizClsf}
              defaultExpandAll={true}
              defaultExpandParent={true}
              height={880}
            />
          </Card>
        </Col>
        <Col span={1} />
        <Col span={15}>
          <Radio.Group
            options={radioOptions}
            onChange={radioChange}
            optionType="button"
            value={path}
            className={'switch'}
            style={{ marginBottom: '20px' }}
          />
          <TitleComp>
            비목
            <Button
              size="small"
              className="eu-btn-row-insert"
              icon={<PlusSquareOutlined />}
              onClick={insertLineClick}
              style={{ float: 'right' }}
            >
              행추가
            </Button>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              style={{ float: 'right' }}
              onClick={insertExpitmClick}
            >
              저장
            </Button>
          </TitleComp>

          <Table
            columns={expitmColumns}
            dataSource={arrExpitm}
            pagination={false}
            bordered={true}
            size={'small'}
            style={{ marginBottom: '20px' }}
            sticky={true}
            scroll={{
              y: 200,
            }}
          />
          <TitleComp>선택 비목그룹내역</TitleComp>
          <Table
            columns={chcExpitmGroupDsctnColumn}
            dataSource={arrChcExpitmGroupDsctn}
            pagination={false}
            bordered={true}
            size={'small'}
            sticky={true}
            scroll={{
              y: 510,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default BsnsExpitmTaxitm02;
