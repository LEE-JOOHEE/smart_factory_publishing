import React, { useState } from 'react';
import { Col, Row, Space, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Modal, Table } from 'antd/lib';

import { DownloadOutlined } from '@ant-design/icons';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';
const RcmsDtaList02 = ({ arrTask }) => {
  // 테이블 헤더
  const arrTaskColumns = [
    {
      title: '사업명',
      dataIndex: 'a1',
    },
    {
      title: '과제번호',
      dataIndex: 'a2',
    },
    {
      title: '도입기업',
      dataIndex: 'a3',
    },
    {
      title: '공급기업',
      dataIndex: 'a4',
    },
    {
      title: '과제상태',
      dataIndex: 'a5',
    },
  ];

  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  const excelDownloadClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={9}>
          <br />
          <br />
          <TitleComp>
            총 {arrTask?.length.toString().padStart(3, '0')} 건
          </TitleComp>
        </Col>
        <Col span={15} style={{ textAlign: 'right' }}>
          <Row>
            <Col span={8} style={{ textAlign: 'left' }}>
              <Button
                key={'excelDownloadClick'}
                size="small"
                className="eu-btn-excel-download"
                icon={<DownloadOutlined />}
                onClick={excelDownloadClick}
              >
                RCMS과제정보
              </Button>
            </Col>
            <Col span={8} style={{ textAlign: 'left' }}>
              <Button
                key={'excelDownloadClick'}
                size="small"
                className="eu-btn-excel-download"
                icon={<DownloadOutlined />}
                onClick={excelDownloadClick}
              >
                RCMS협약정보
              </Button>
            </Col>
            <Col span={8} style={{ textAlign: 'left' }}>
              <Button
                key={'excelDownloadClick'}
                size="small"
                className="eu-btn-excel-download"
                icon={<DownloadOutlined />}
                onClick={excelDownloadClick}
              >
                RCMS사업정보
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={8} style={{ textAlign: 'left' }}>
              <Button
                key={'excelDownloadClick'}
                size="small"
                className="eu-btn-excel-download"
                icon={<DownloadOutlined />}
                onClick={excelDownloadClick}
              >
                RCMS세목별한도정보
              </Button>
            </Col>
            <Col span={8} style={{ textAlign: 'left' }}>
              <Button
                key={'excelDownloadClick'}
                size="small"
                className="eu-btn-excel-download"
                icon={<DownloadOutlined />}
                onClick={excelDownloadClick}
              >
                RCMS참여연구원정보
              </Button>
            </Col>
            <Col span={8} style={{ textAlign: 'left' }}>
              <Button
                key={'excelDownloadClick'}
                size="small"
                className="eu-btn-excel-download"
                icon={<DownloadOutlined />}
                onClick={excelDownloadClick}
              >
                RCMS협약기관정보
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 600 }}
            key={'RcmsDtaList02Table'}
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

export default RcmsDtaList02;
