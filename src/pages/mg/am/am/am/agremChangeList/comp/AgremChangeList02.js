import React, { useState } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';

import { DownloadOutlined } from '@ant-design/icons';

const AgremChangeList02 = ({ arrAgremChangeList }) => {
  // 테이블 헤더
  const arrAgremChangeListColumns = [
    {
      title: '과제번호',
      dataIndex: 'a1',
    },
    {
      title: '사업연도',
      dataIndex: 'a2',
    },
    {
      title: '사업명',
      dataIndex: 'a3',
    },
    {
      title: '세부공고',
      dataIndex: 'a4',
    },
    {
      title: '과제명',
      dataIndex: 'a5',
    },
    {
      title: '도입기업',
      dataIndex: 'a6',
    },
    {
      title: '공급기업',
      dataIndex: 'a7',
    },
    {
      title: '변경항목',
      dataIndex: 'a8',
    },
    {
      title: '변경구분',
      dataIndex: 'a9',
    },
    {
      title: '변경요청일',
      dataIndex: 'a10',
    },
    {
      title: '상태',
      dataIndex: 'a11',
    },
  ];

  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  const excelDownloadClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };
  const rcptPrcsClick = () => {
    Modal.info({
      title: '협약 변경 상세 팝업 화면 - 신청사업비 변경',
    });
  };
  const chgPrcsClick = () => {
    Modal.info({
      title: '협약 변경 상세 팝업 화면 - 승인사업비 변경',
    });
  };
  const rowSelection = {
    onChange: (_, selectedRows) => {
      console.log('rowSelection : ', selectedRows);
    },
  };

  return (
    <>
      <Row className="eu-row-comp-title" gutter={[16, 16]}>
        <Col span={12}>
          <TitleComp></TitleComp>
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
          <Button
            key={'RcptPrcsClick'}
            size="small"
            className="eu-btn-crud-fine"
            onClick={rcptPrcsClick}
          >
            접수처리
          </Button>
          <Button
            key={'ChgPrcsClick'}
            size="small"
            className="eu-btn-crud-fine"
            onClick={chgPrcsClick}
          >
            변경처리
          </Button>
        </Col>
      </Row>

      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 600 }}
            key={'AgremChangeList02Table'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrAgremChangeListColumns}
            dataSource={arrAgremChangeList}
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

export default AgremChangeList02;
