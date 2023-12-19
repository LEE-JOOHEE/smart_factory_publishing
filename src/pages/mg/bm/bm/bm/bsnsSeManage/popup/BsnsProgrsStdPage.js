import React, { useState } from 'react';
import {
  Col,
  Row,
  Table,
  Modal,
  Tree,
  Button,
  Space,
  Card,
  Switch,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { FileOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '업무분류명',
    dataIndex: 'title',
    width: '32%',
    align: 'left',
  },
  {
    title: '진행순서',
    dataIndex: 'a',
    width: '17%',
    align: 'center',
  },
  {
    title: '생략가능여부',
    dataIndex: 'b',
    width: '24%',
    align: 'center',
  },
  {
    title: '사용여부',
    dataIndex: 'c',
    width: '22%',
    align: 'center',
  },
];

const BsnsProgrsStdPage = ({ open, closeClick }) => {
  const defaultBizPrgrsStdPcrs = [
    {
      key: 1,
      title: (
        <span className="eu-tree-title">사업관리</span>
      ),
      a: 0,
      b: '필수',
      c: '사용안함',
    },
    {
      key: 2,
      title: (
        <span className="eu-tree-title">과제신청</span>
      ),
      a: 1,
      b: '필수',
      c: '사용',
    },
    {
      key: 3,
      title: (
        <span className="eu-tree-title">요건검토</span>
      ),
      a: 2,
      b: '필수',
      c: '사용',
      children: [
        {
          key: 4,
          title: (
            <span className="eu-tree-title">요건검토</span>
          ),
          a: 3,
          b: '필수',
          c: '사용',
          children: [
            {
              key: 5,
              title: '요건검토 접수',
              icon: <FileOutlined />,
              a: 4,
              b: '필수',
              c: '사용',
            },
            {
              key: 6,
              title: '요건검토 검토중',
              icon: <FileOutlined />,
              a: 5,
              b: '필수',
              c: '사용안함',
            },
          ],
        },
        {
          key: 7,
          title: (
            <span className="eu-tree-title">컨설팅기관 배정</span>
          ),
          a: 6,
          b: '필수',
          c: '사용안함',
        },
      ],
    },
  ];
  const [arrBizPrgrsStdPcrs, setArrBizPrgrsStdPcrs] = useState(
    defaultBizPrgrsStdPcrs
  );
  const [expandedKeys, setExpandedKeys] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = (expandedKeysValue) => {
    console.log('onExpand', expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };
  const onSelect = (selectedKeysValue, info) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };

  const insertBizPrgrsStdPrcs = () => {
    console.log('insertBizPrgrsStdPrcs');
    Modal.info({
      title: 'insertBizPrgrsStdPrcs',
    });
  };
  // Tree 전체 open | close event
  const treeExpandAllClick = (checked) => {
    checked ? setExpandedKeys([1, 2, 3, 4, 5, 6, 7, 8]) : setExpandedKeys([]);
  };

  const [arrCheckedBizPrgrsStdPcrs, setArrCheckedBizPrgrsStdPcrs] = useState(
    []
  );

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedBizPrgrsStdPcrs(selectedRows);
    },
  };

  return (
    <>
      <Modal
        key="BsnsSeManage02"
        // style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        title="사업진행표준절차"
        open={open}
        //onOk={handleOk}
        onCancel={closeClick}
        width={1200}
        footer={[
          <>
            <Button
              className="eu-btn-popup-process-default"
              onClick={() => closeClick()}
            >
              확인
            </Button>
            <Button
              className="eu-btn-popup-process-error"
              onClick={() => closeClick()}
            >
              닫기
            </Button>
          </>,
        ]}
      >

        <Row>
          <Col span={10} className="eu-row-comp-cont">
            <Row className="eu-row-comp-title">
              <Col span={24}>
                <TitleComp>
                  업무분류목록
                  <Switch
                    defaultChecked
                    onChange={treeExpandAllClick}
                    style={{ marginLeft: '20px' }}
                  />
                </TitleComp>
              </Col>
              <Col span={24}>
                <Card className="eu-card-tree">
                  <Tree
                    onExpand={onExpand}
                    expandedKeys={expandedKeys}
                    autoExpandParent={autoExpandParent}
                    onSelect={onSelect}
                    selectedKeys={selectedKeys}
                    treeData={defaultBizPrgrsStdPcrs}
                    defaultExpandAll={true}
                    defaultExpandParent={true}
                    height={200}
                    // Tree 메뉴 디자인 showLine, showIcon 추가
                    showLine={true}
                    showIcon={true}
                  />
                </Card>
              </Col>
            </Row>
          </Col>
          <Col span={2} className="flex-col-center">
            <Button className="eu-btn-crud-fine mb-8">추가</Button>
            <Button className="eu-btn-crud-error ml-0">삭제</Button>
          </Col>
          <Col span={12} className="eu-row-comp-cont">
            <Row className="eu-row-comp-title">
              <Col span={12}>
                <TitleComp>사업 진행 표준 절차</TitleComp>
              </Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Button
                  className="eu-btn-crud-fine"
                  onClick={insertBizPrgrsStdPrcs}
                >
                  저장
                </Button>
              </Col>
              <Col span={24}>
                <Table
                  columns={columns}
                  dataSource={arrBizPrgrsStdPcrs}
                  pagination={false}
                  size={'small'}
                  bordered={true}
                  rowSelection={rowSelection}
                  sticky={true}
                  scroll={{
                    y: 310,
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default BsnsProgrsStdPage;
