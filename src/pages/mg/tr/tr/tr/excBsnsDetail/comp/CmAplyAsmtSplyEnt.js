import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

// 컨소시엄 공급기업
const aplyAsmtSplyColums = [
  {
    title: '업체명',
    dataIndex: 'a1',
  },
  {
    title: '사업자등록번호',
    dataIndex: 'a2',
  },
  {
    title: '대표자',
    dataIndex: 'a3',
  },
  {
    title: '연락처',
    dataIndex: 'a4',
  },
  {
    title: '이메일',
    dataIndex: 'a5',
  },
];

// 컨소시엄 도입기업
const aplyAsmtIndcColums = [
  {
    title: '업체명',
    dataIndex: 'a1',
  },
  {
    title: '사업자등록번호',
    dataIndex: 'a2',
  },
  {
    title: '대표자',
    dataIndex: 'a3',
  },
  {
    title: '연락처',
    dataIndex: 'a4',
  },
  {
    title: '이메일',
    dataIndex: 'a5',
  },
  {
    title: '종사업자번호',
    dataIndex: 'a6',
  },
];

const CmAplyAsmtSplyEnt = ({ key, editable = false }) => {
  // 컨소시엄 공급기업
  const [arrAplyAsmtSply, setArrAplyAsmtSply] = useState([
    {
      a1: '',
      a2: '',
      a3: '',
      a4: '',
      a5: '',
      a6: '',
    },
  ]);
  // 컨소시엄 도입기업
  const [arrAplyAsmtIndc, setArrAplyAsmtIndc] = useState([
    {
      a1: '',
      a2: '',
      a3: '',
      a4: '',
      a5: '',
      a6: '',
    },
  ]);

  useEffect(() => {
    if (key) {
      // setArrAplyAsmtSply()
      // setArrAplyAsmtIndc()
    }
  }, [key]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>컨소시엄 공급기업</TitleComp>
        </Col>
        {editable && (
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button size="small" className="eu-btn-crud-fine">
              수정
            </Button>
          </Col>
        )}
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={aplyAsmtSplyColums}
            dataSource={arrAplyAsmtSply}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>컨소시엄 도입기업</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={aplyAsmtIndcColums}
            dataSource={arrAplyAsmtIndc}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default CmAplyAsmtSplyEnt;
