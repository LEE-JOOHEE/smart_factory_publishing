import React, { useState } from 'react';
import { Col, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Modal, Table } from 'antd/lib';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';

import { DownloadOutlined } from '@ant-design/icons';
const SprvisnResultList02 = ({ arrResult, setOjtKey, setPageType }) => {
  // 테이블 헤더
  const arrResultColumns = [
    {
      title: '....',
      dataIndex: 'a0',
    },
    {
      title: '착수감리',
      dataIndex: 'aa1',
      children: [
        {
          title: '결과서',
          dataIndex: 'a1',
        },
      ],
    },
    {
      title: '중간감리',
      dataIndex: 'aa2',
      children: [
        {
          title: '결과서',
          dataIndex: 'a2',
        },
        {
          title: '시정조치계획서',
          dataIndex: 'a3',
        },
        {
          title: '시정조치결과서',
          dataIndex: 'a4',
        },
        {
          title: '시정조치 결과확인서',
          dataIndex: 'a5',
        },
      ],
    },
    {
      title: '최종감리',
      dataIndex: 'aa3',
      children: [
        {
          title: '결과서',
          dataIndex: 'a6',
          render: (_, record, index) => {
            return (
              <>
                <Button
                  type="default"
                  className="eu-btn-table-fine"
                  size="small"
                  onClick={() => {
                    setOjtKey(record);
                    setPageType('SPRVISN_LAST_RESULT');
                  }}
                >
                  {record?.a6 || '승인'}
                </Button>
              </>
            );
          },
        },
        {
          title: '시정조치계획서',
          dataIndex: 'a7',
          render: (_, record, index) => {
            return (
              <>
                <Button
                  type="default"
                  className="eu-btn-table-fine"
                  size="small"
                  onClick={() => {
                    console.log(record, index);
                    setOjtKey(record);
                    setPageType('SPRVISN_COREC_PLAN');
                  }}
                >
                  {record?.a7 || '조회'}
                </Button>
              </>
            );
          },
        },
        {
          title: '시정조치결과서',
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

                    setOjtKey(record);
                    setPageType('SPRVISN_COREC_RESULT');
                  }}
                >
                  {record?.a8 || '조회'}
                </Button>
              </>
            );
          },
        },
        {
          title: '시정조치 결과확인서',
          dataIndex: 'a9',
          render: (_, record, index) => {
            return (
              <>
                <Button
                  type="default"
                  className="eu-btn-table-fine"
                  size="small"
                  onClick={() => {
                    console.log(record, index);

                    setOjtKey(record);
                    setPageType('SPRVISN_COREC_CNFIRM');
                  }}
                >
                  {record?.a9 || '제출완료'}
                </Button>
              </>
            );
          },
        },
      ],
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
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>
            총 {arrResult?.length.toString().padStart(3, '0')} 건
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
            key={'SprvisnResultList02Table'}
            columns={arrResultColumns}
            dataSource={arrResult}
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

export default SprvisnResultList02;
