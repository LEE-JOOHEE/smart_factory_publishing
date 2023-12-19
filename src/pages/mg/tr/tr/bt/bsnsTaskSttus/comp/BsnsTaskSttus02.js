import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Modal, Table } from 'antd/lib';

import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';

import { DownloadOutlined } from '@ant-design/icons';
const BsnsTaskSttus02 = ({ arrTask }) => {
  // 테이블 헤더
  const arrTaskColumns = [
    {
      title: '사업년도',
      dataIndex: 'a1',
      width: '8%',
      align: 'center',
    },
    {
      title: '사업분류',
      dataIndex: 'a2',
      width: '15%',
    },
    {
      title: '세부공고명',
      dataIndex: 'a3',
      width: '15%',
    },
    {
      title: '과제번호',
      dataIndex: 'a4',
      width: '15%',
    },
    {
      title: '과제명',
      dataIndex: 'a5',
      width: '15%',
    },
    {
      title: '도입기업',
      dataIndex: 'a6',
      width: '13%',
    },
    {
      title: '첨부',
      dataIndex: 'a7',
      width: '10%',
      align: 'center',
    },
    {
      title: '제출상태',
      dataIndex: 'a8',
      width: '9%',
      align: 'center',
    },
  ];

  // 엑셀 다운로드
  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  // 엑셀다운로드
  const excelDwnldClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={12} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrTask?.length.toString().padStart(3, '0')}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-excel-download"
            icon={<DownloadOutlined />}
            onClick={excelDwnldClick}
          >
            엑셀다운로드
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 500 }}
            key={'PropseInqire02Table'}
            columns={arrTaskColumns}
            dataSource={arrTask}
            size="small"
            bordered
          />
        </Col>
      </Row>
      <CmAgremExcelDwnld
        cmAgremExcelDwnldOpen={cmAgremExcelDwnldOpen}
        setCmAgremExcelDwnldOpen={setCmAgremExcelDwnldOpen}
      />
    </>
  );
};

export default BsnsTaskSttus02;
