import React, { useState } from 'react';
import { Button, Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';

import { DownloadOutlined } from '@ant-design/icons';
import BsnsManagePopup from 'pages/mg/tr/tr/bm/bsnsManageInqire/popup/BsnsManagePopup';

const BsnsManageInqire02 = ({ arrBsnsManage }) => {
  // 테이블 헤더
  const bsnsManageColumns = [
    {
      title: '과제선정관리',
      dataIndex: 'a',
      children: [
        {
          title: '연번',
          dataIndex: 'a0',
          width: '4%',
          align: 'center',
        },
        {
          title: '사업년도',
          dataIndex: 'a1',
          width: '6%',
          align: 'center',
        },
        {
          title: '세부공고명',
          dataIndex: 'a2',
          width: '10%',
        },
        {
          title: '과제번호',
          dataIndex: 'a3',
          width: '10%',
          render: (_, record, index) => {
            return (
              <Button
                className="eu-btn-link"
                size="small"
                type="link"
                onClick={rbsnsManageClick}
              >
                {record?.a3}
              </Button>
            );
          },
        },
        {
          title: '과제구분',
          dataIndex: 'a4',
          width: '6%',
        },
        {
          title: '과제번호',
          dataIndex: 'a5',
          width: '6%',
        },
        {
          title: '지역(수행기관)',
          dataIndex: 'a6',
          width: '7%',
        },
        {
          title: '수행기관',
          dataIndex: 'a7',
          width: '7%',
        },
        {
          title: '도입기업명',
          dataIndex: 'a8',
          width: '7%',
        },
        {
          title: '도입기업',
          dataIndex: 'a9',
          width: '7%',
        },
        {
          title: '기업진단',
          dataIndex: 'a10',
          children: [
            {
              title: '기업진단상태',
              dataIndex: 'a101',
              width: '8%',
            },
            {
              title: '기업진단신청일',
              dataIndex: 'a102',
              width: '9%',
              align: 'center',
            },
            {
              title: '기업진단선정일',
              dataIndex: 'a103',
              width: '9%',
              align: 'center',
            },
          ],
        },
        {
          title: 'etc...',
          dataIndex: 'a11',
          render: (_, record, index) => <>...</>,
        },
      ],
    },
  ];
  // 사업관리대장 상세팝업
  const [bsnsManagePopupOpen, setBsnsManagePopupOpen] = useState(false);

  // 엑셀 다운로드
  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  // 엑셀다운로드
  const excelDwnldClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };

  //검토 중
  const rbsnsManageClick = () => {
    setBsnsManagePopupOpen(true);
  };

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={12} className="mt-auto">
          {/* <TitleComp>
            <br />총 002건
          </TitleComp> */}

          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrBsnsManage?.length.toString().padStart(3, '0')}
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
            scroll={{ y: 500, x: 1600 }}
            key={'bsnsManageTable'}
            columns={bsnsManageColumns}
            dataSource={arrBsnsManage}
            size="small"
            bordered
          />
        </Col>
      </Row>

      <CmAgremExcelDwnld
        cmAgremExcelDwnldOpen={cmAgremExcelDwnldOpen}
        setCmAgremExcelDwnldOpen={setCmAgremExcelDwnldOpen}
      />
      <BsnsManagePopup
        bsnsManagePopupOpen={bsnsManagePopupOpen}
        setBsnsManagePopupOpen={setBsnsManagePopupOpen}
      />
    </>
  );
};

export default BsnsManageInqire02;
