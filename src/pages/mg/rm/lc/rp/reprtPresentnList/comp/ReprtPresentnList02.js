import React, { useState } from 'react';
import { Col, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Modal, Table } from 'antd/lib';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';

import { DownloadOutlined } from '@ant-design/icons';
const ReprtPresentnList02 = ({ arrTask, setPageType, ojtKey, setOjtKey }) => {
  // 테이블 헤더
  const arrTaskColumns = [
    {
      title: '사업연도',
      dataIndex: 'a1',
    },
    {
      title: '지역(수행기관)',
      dataIndex: 'a2',
    },
    {
      title: '사업명',
      dataIndex: 'a3',
    },
    {
      title: '과제번호',
      dataIndex: 'a31',
    },
    {
      title: '과제명',
      dataIndex: 'a4',
    },
    {
      title: '도입기업',
      dataIndex: 'a5',
    },
    {
      title: '공급기업',
      dataIndex: 'a6',
    },
    {
      title: '보고서구분',
      dataIndex: 'a7',
    },
    {
      title: '보고서상태',
      dataIndex: 'a8',
      render: (_, record, index) => {
        return (
          <>
            <Button
              type="default"
              className="eu-btn-table-fine"
              size="small"
              onClick={() => {
                console.log(record, index);
                statusClick();
              }}
            >
              {record?.a8 || '임시'}
            </Button>
          </>
        );
      },
    },
    {
      title: '감리결과',
      dataIndex: 'a9',
    },
    {
      title: '점검결과',
      dataIndex: 'a10',
    },
  ];

  const statusClick = () => {
    setPageType('DETAIL');
  };
  // 엑셀 다운로드
  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);
  // 엑셀다운로드
  const excelDwnldClick = () => {
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
            size="small"
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
            scroll={{ y: 600 }}
            key={'ReprtPresentnDetail02Table'}
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

export default ReprtPresentnList02;
