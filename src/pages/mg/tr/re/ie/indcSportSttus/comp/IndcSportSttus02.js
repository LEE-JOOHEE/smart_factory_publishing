import React, { useState } from 'react';
import { Col, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const arrIndcSportSttusColumns = [
  {
    title: '순번',
    dataIndex: 'a1',
    width: '5%',
    align: 'center',
  },
  {
    title: '사업년도',
    dataIndex: 'a2',
    width: '25%',
  },
  {
    title: '사업명',
    dataIndex: 'a3',
    width: '11%',
  },
  {
    title: '과제진행상태',
    dataIndex: 'a4',
    width: '11%',
  },
  {
    title: '도입기업명',
    dataIndex: 'a5',
    width: '11%',
  },
  {
    title: '스마트화수준',
    dataIndex: 'a6',
    width: '10%',
  },
  {
    title: '도입기업사업자번호',
    dataIndex: 'a7',
    width: '10%',
  },
  {
    title: '대표자',
    dataIndex: 'a8',
    width: '7%',
    align: 'center',
  },
  {
    title: '주소',
    dataIndex: 'a9',
    width: '10%',
  },
];
const IndcSportSttus02 = ({ arrIndcSportSttus = [] }) => {
  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={6} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrIndcSportSttus?.length.toString().padStart(3, '0')}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={18} style={{ textAlign: 'right' }}>
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red ml-auto">
            * 조회되는 정보는 협약 당시의 정보로서, 현재 정보와 상이할 수 있습니다.<br />
            * "도입기업 지원현황"에서 조회되는 과제들은 협약이 완료된 과제로서, <br />
            "요건검토"- 참여과제이력 조회(신청/접수/선정 등)에서 조회되는 리스트와는 상이할 수 있음.
            </span>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'IndcSportSttusTable'}
            columns={arrIndcSportSttusColumns}
            dataSource={arrIndcSportSttus}
            size="small"
            bordered
          />
        </Col>
      </Row>
    </>
  );
};

export default IndcSportSttus02;
