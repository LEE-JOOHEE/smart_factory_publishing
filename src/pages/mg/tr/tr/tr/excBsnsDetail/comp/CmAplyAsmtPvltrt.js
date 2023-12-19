import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

// 우대사항
const pvltrtMttrColums = [
  {
    title: '우대사항',
    dataIndex: 'a1',
  },
  {
    title: '신청점수',
    dataIndex: 'a2',
  },
];

const CmAplyAsmtPvltrt = ({ key, editable = false }) => {
  // 우대사항
  const [arrPvltrtMttr, setArrPvltrtMttr] = useState([
    {
      a1: '',
      a2: '',
    },
  ]);

  useEffect(() => {
    if (key) {
      // setArrPvltrtMttr()
    }
  }, [key]);
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>우대사항</TitleComp>
        </Col>
        {editable && (
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button className="eu-btn-crud-fine">
              수정
            </Button>
          </Col>
        )}
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 500 }}
            columns={pvltrtMttrColums}
            dataSource={arrPvltrtMttr}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default CmAplyAsmtPvltrt;
