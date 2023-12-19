import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table } from 'antd';
import 'css/CommonUsr.css';
import TitleComp from 'components/layout/TitleComp';

const SuplyEntrprsManage02 = ({ arrCnstcPrfmnc }) => {
  const arrCnstcPrfmncColumns = [
    {
      title: '순위',
      dataIndex: 'a1',
      width: 50,
      align: 'center',
    },
    {
      title: '공급기업명',
      dataIndex: 'a2',
      render: (_, record) => {
        return (
          <Button
            type="link"
            size="small"
            onClick={() => {
              Modal.info({
                title: `공급기업(기본정보) 화면 이동 key: ${record.key}`,
              });
            }}
          >
            {record?.a2}
          </Button>
        );
      },
    },
    {
      title: '구축건수',
      dataIndex: 'a3',
      align: 'center',
    },
    {
      title: '솔루션매칭율',
      dataIndex: 'a4',
      align: 'center',
    },
    {
      title: '레벨매칭율',
      dataIndex: 'a5',
      align: 'center',
    },
    {
      title: '업종매칭율',
      dataIndex: 'a6',
      align: 'center',
    },
    {
      title: '사업구분매칭율',
      dataIndex: 'a7',
    },
    {
      title: '구축결과매칭율',
      dataIndex: 'a8',
      align: 'center',
    },
    {
      title: '종사자규모매칭율',
      dataIndex: 'a9',
      align: 'center',
    },
    {
      title: '매출규모매칭율',
      dataIndex: 'a10',
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

  const selectClick = () => {
    Modal.info({
      title: 'arrCnstcPrfmncChecked : ' + JSON.stringify(arrCnstcPrfmncChecked),
    });
  };

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>총 {arrCnstcPrfmnc?.length}건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={selectClick}
          >
            선택
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrCnstcPrfmncTable'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrCnstcPrfmncColumns}
            dataSource={arrCnstcPrfmnc}
            size="small"
            bordered
            pagination={{ showSizeChanger: false, pageSize: 10 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SuplyEntrprsManage02;
