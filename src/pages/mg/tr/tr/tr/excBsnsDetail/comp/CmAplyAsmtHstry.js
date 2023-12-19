import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const aplyAsmtHstryColumns = [
  {
    title: '순번',
    dataIndex: 'a',
    width: '4%',
    align: 'center',
  },
  {
    title: '사업년도',
    dataIndex: 'b',
    width: '6%',
    align: 'center',
  },
  {
    title: '지역(수행기관)',
    dataIndex: 'c',
    width: '6%',
    align: 'center',
  },
  {
    title: '수행사업명',
    dataIndex: 'd',
    width: '20%',
  },
  {
    title: '도입기업',
    dataIndex: 'e',
    width: '7%',
  },
  {
    title: '사업자번호',
    dataIndex: 'f',
    width: '10%',
    align: 'center',
  },
  {
    title: '공급기업',
    dataIndex: 'g',
    width: '7%',
  },
  {
    title: '과제신청일',
    dataIndex: 'h',
    width: '9%',
    align: 'center',
  },
  {
    title: '과제신청자',
    dataIndex: 'i',
    width: '7%',
    align: 'center',
  },
  {
    title: '과제상태',
    dataIndex: 'j',
    width: '9%',
    align: 'center',
  },
  {
    title: '과제코멘트',
    dataIndex: 'k',
    width: '5%',
  },
  {
    title: '기업제조혁신 역량수준',
    dataIndex: 'l',
    width: '5%',
  },
  {
    title: '구축시스템 스마트화 수준',
    dataIndex: 'm',
    width: '5%',
  },
];

const CmAplyAsmtHstry = ({ key }) => {
  const [arrAplyAsmtHstry, setArrAplyAsmtHstry] = useState([
    {
      a: '1',
      b: '2022',
      c: '인천',
      d: '2022년 대중소상생형(삼성) 스마트 공장 구축',
      e: '도입기업명',
      f: '123-45-6789',
      g: '공급기업명',
      h: '2022-05-06',
      i: '아무개',
      j: '요건검토완료(검토부적합)',
      k: '',
      l: '',
      m: '',
    },
  ]);

  useEffect(() => {
    if (key) {
      // 데이터 요청
      setArrAplyAsmtHstry({});
    }
  }, [key]);

  return (
    <>
      <Row className="eu-row-comp-title mb-12">
        <Col span={24}>
          <TitleComp>
            <span className="eu-title-company">
              참여과제이력
              <div className="line"></div>
              <div className="compnm">(주)푸른</div>
            </span>
          </TitleComp>
        </Col>
        <Col span={24}>
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red">
              * 참여과제이력 조회시 2019년 이전사업에 대해서는 타 시스템에서
              관리되었던 자료로써 개별 항목들 값이 없는 경우도 있습니다.
            </span>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={aplyAsmtHstryColumns}
            dataSource={arrAplyAsmtHstry}
            size="small"
            bordered
            scroll={{ y: 600, x: 1500 }}
            pagination={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default CmAplyAsmtHstry;
