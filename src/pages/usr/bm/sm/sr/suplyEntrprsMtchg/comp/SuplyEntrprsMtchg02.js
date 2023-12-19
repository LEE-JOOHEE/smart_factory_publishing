import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Space, Table } from 'antd';
import 'css/CommonUsr.css';
import TitleComp from 'components/layout/TitleComp';

const SuplyEntrprsMtchg02 = ({ arrSplyEntLst }) => {
  const arrSplyEntLstColumns = [
    {
      title: '사업번호',
      dataIndex: 'a1',
      width: 50,
      align: 'center',
    },
    {
      title: '사업연도',
      dataIndex: 'a2',
      width: 150,
    },
    {
      title: '사업분류',
      dataIndex: 'a3',
      width: 300,
      align: 'center',
    },
    {
      title: '세부공고명',
      dataIndex: 'a4',
      width: 500,
    },
    {
      title: '접수시작일',
      dataIndex: 'a5',
      align: 'center',
      width: 60,
    },
    {
      title: '접수종료일',
      dataIndex: 'a6',
      width: 60,
      align: 'center',
    },
    {
      title: '접수가능',
      dataIndex: 'a7',
      width: 50,
    },
    {
      title: '마감여부',
      dataIndex: 'a8',
      width: 80,
      align: 'center',
    },
  ];

  //테이블 선택
  const [arrCnstcPrfmncChecked, setArrCnstcPrfmncChecked] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCnstcPrfmncChecked(selectedRows);
    },
  };

  const dmndDocTrsmClick = () => {
    Modal.info({
      title: 'arrCnstcPrfmncChecked : ' + JSON.stringify(arrCnstcPrfmncChecked),
    });
  };

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>총 {arrSplyEntLst?.length}건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={dmndDocTrsmClick}
          >
            요청서 송부
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrSplyEntLstTable'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrSplyEntLstColumns}
            dataSource={arrSplyEntLst}
            size="small"
            bordered
            pagination={{ showSizeChanger: false, pageSize: 10 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SuplyEntrprsMtchg02;
