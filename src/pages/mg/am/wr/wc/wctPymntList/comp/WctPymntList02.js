import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Modal, Table } from 'antd/lib';

import { DownloadOutlined } from '@ant-design/icons';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';
const WctPymntList02 = ({ arrTask }) => {
  // 테이블 헤더
  const arrTaskColumns = [
    {
      title: '순번',
      dataIndex: 'aa1',
    },
    {
      title: '과제구분',
      dataIndex: 'aa2',
    },
    {
      title: '지역(수행기관)',
      dataIndex: 'aa3',
    },
    {
      title: '사업명',
      dataIndex: 'aa4',
    },
    {
      title: '협약번호',
      dataIndex: 'aa5',
    },
    {
      title: '도입기업',
      dataIndex: 'aa6',
    },
    {
      title: '공급기업',
      dataIndex: 'aa7',
    },
    {
      title: '과제진행상태',
      dataIndex: 'aa8',
    },
    {
      title: '정부지원금',
      dataIndex: 'b1',
      children: [
        {
          title: '선금(지급액)',
          dataIndex: 'a2',
        },
        {
          title: '중도금(지급액)',
          dataIndex: 'a3',
        },
        {
          title: '잔금(지급액)',
          dataIndex: 'a4',
        },
        {
          title: '총액',
          dataIndex: 'a5',
        },
      ],
    },
    {
      title: '입금내역',
      dataIndex: 'b2',
      children: [
        {
          title: '은행',
          dataIndex: 'a6',
        },
        {
          title: '계좌번호',
          dataIndex: 'a7',
        },
        {
          title: '예금주',
          dataIndex: 'a8',
        },
      ],
    },
    {
      title: '휴폐업여부',
      dataIndex: 'b3',
      children: [
        {
          title: '도입기업',
          dataIndex: 'a9',
        },
        {
          title: '공급기업',
          dataIndex: 'a10',
        },
        {
          title: '확인일',
          dataIndex: 'a11',
        },
      ],
    },
    {
      title: '비고',
      dataIndex: 'a12',
    },
  ];

  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  const excelDownloadClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>
            총 {arrTask?.length.toString().padStart(3, '0')} 건
          </TitleComp>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            key={'excelDownloadClick'}
            size="small"
            className="eu-btn-excel-download"
            icon={<DownloadOutlined />}
            onClick={excelDownloadClick}
          >
            엑셀다운로드
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 600 }}
            key={'WctPymntList02Table'}
            columns={arrTaskColumns}
            dataSource={arrTask}
            size="small"
            bordered
          />
        </Col>
      </Row>
      <CmAgremExcelDwnld
        key={'CmAgremExcelDwnld'}
        cmAgremExcelDwnldOpen={cmAgremExcelDwnldOpen}
        setCmAgremExcelDwnldOpen={setCmAgremExcelDwnldOpen}
      />
    </>
  );
};

export default WctPymntList02;
