import React, { useState, useEffect } from 'react';
import { Col, Row, Tabs, Input, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { PlusOutlined , MinusOutlined } from '@ant-design/icons';

const PblancPvltrtAddpntPage = ({
  strPvltrtAddpntChange,
  srchPvltrtAddpntClick,
  arrPvltrtAddpntLst,
  checkedArrPvltrtAddpntLst,
  setCheckedArrPvltrtAddpntLst,
}) => {
  const pvlTrtLstColumn = [
    {
      title: 'ID',
      dataIndex: 'a',
      width: '11%',
      align: 'center',
    },
    {
      title: '우대가점 그룹명',
      dataIndex: 'b',
      width: '18%',
      align: 'center',
    },
    {
      title: '배점 상환점수',
      dataIndex: 'c',
      width: '13%',
      align: 'center',
    },
    {
      title: '조건유형',
      dataIndex: 'd',
      width: '50%',
    },
    {
      title: '점수',
      dataIndex: 'e',
      width: '8%',
      align: 'center',
    },
  ];

  const pbancPvltrtColumns = [
    {
      title: '우대배점그룹명',
      dataIndex: 'b',
      width: '40%',
    },
    {
      title: 'ID',
      dataIndex: 'a',
      width: '30%',
    },
    {
      title: '배점 상한점수',
      dataIndex: 'c',
      width: '30%',
      align: 'center',
    },
  ];

  const cndTypeColumns = [
    {
      title: '조건유형',
      dataIndex: 'd',
      width: '80%',
    },
    {
      title: '점수',
      dataIndex: 'e',
      width: '20%',
      align: 'center',
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setCheckedArrPvltrtAddpntLst(selectedRows);
      setSelectedRows(selectedRows);
    },
  };

  const insertSameLineClick = () => {
    Modal.info({
      title: 'insertSameLineClick',
    });
  };

  const insertBelowLineClick = () => {
    Modal.info({
      title: 'insertBelowLineClick',
    });
  };

  const deleteLineClick = () => {
    Modal.info({
      title: 'deleteLineClick',
    });
  };

  const insertClick = () => {
    Modal.info({
      title: 'insertClick',
    });
  };

  useEffect(() => {
    console.log('checkedArrPvltrtAddpntLst: ', checkedArrPvltrtAddpntLst);
  }, [checkedArrPvltrtAddpntLst]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={4}>
          <TitleComp>우대가점 목록</TitleComp>
        </Col>
        <Col span={20} style={{ textAlign: 'right' }}>
          <Input.Search
            onChange={(e) => strPvltrtAddpntChange(e.target.value)}
            style={{ width: '450px' }}
            onSearch={srchPvltrtAddpntClick}
          />
          <Button
            className="eu-btn-row-insert"
            icon={<PlusOutlined />}
            onClick={insertSameLineClick}
          >
            동일행추가
          </Button>
          <Button
            className="eu-btn-row-insert"
            icon={<MinusOutlined />}
            onClick={insertBelowLineClick}
          >
            하위행추가
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrPvltrtAddpntLst'}
            columns={pvlTrtLstColumn}
            dataSource={arrPvltrtAddpntLst}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 400,
            }}
          />
        </Col>
      </Row>

      <Row gutter={(0, 20)}>
        <Col span={10}>
          <Row className="eu-row-comp-title margin-top">
            <Col span={12}>
              <TitleComp>공고별 우대배점</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button
                className="eu-btn-crud-fine"
                onClick={insertClick}
              >
                저장
              </Button>
              <Button
                className="eu-btn-row-delete"
                icon={<MinusOutlined />}
                onClick={deleteLineClick}
              >
                행삭제
              </Button>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Table
                key={'pbancPvltrt'}
                columns={pbancPvltrtColumns}
                dataSource={selectedRows}
                pagination={false}
                size={'small'}
                bordered={true}
                sticky={true}
                scroll={{
                  y: 300,
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={14}>
          <Row className="eu-row-comp-title margin-top">
            <Col span={24}>
              <TitleComp><span className="text-color-none">빈공간 확보</span></TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Table
                key={'cndType'}
                columns={cndTypeColumns}
                dataSource={selectedRows}
                pagination={false}
                size={'small'}
                bordered={true}
                sticky={true}
                scroll={{
                  y: 300,
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      
    </>
  );
};

export default PblancPvltrtAddpntPage;
