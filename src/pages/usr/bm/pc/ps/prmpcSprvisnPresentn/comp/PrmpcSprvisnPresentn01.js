import React, { useState } from 'react';
import { Col, Row, Table, Button, Modal } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';

const PrmpcSprvisnPresentn01 = ({ arrAsmtLst, setOjtKey, setPageType }) => {
  const columns = [
    { title: '사업연도', dataIndex: 'a' },
    { title: '지역(수행기관)', dataIndex: 'b' },
    { title: '세부공고명', dataIndex: 'c' },
    {
      title: '과제명',
      dataIndex: 'd',
      render: (_, record) => {
        return (
          <Button
            type="link"
            size="small"
            onClick={() => {
              Modal.info({ title: '과제정보(과제기본정보) 페이지 이동' });
            }}
          >
            {record?.d}
          </Button>
        );
      },
    },
    { title: '도입기업', dataIndex: 'e' },
    { title: '공급기업', dataIndex: 'f' },
    {
      title: '제출상태',
      dataIndex: 'g',
      render: (_, record) => {
        return (
          <Button
            type="link"
            size="small"
            onClick={() => {
              setOjtKey({ key: record.key, status: record.g });
              setPageType('DETAIL');
            }}
          >
            {record?.g}
          </Button>
        );
      },
    },
    { title: '재계산여부', dataIndex: 'h' },
  ];

  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  const excelDownloadClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>과제 목록</TitleComp>
          {`총 ${arrAsmtLst.length}건`}
          <div style={{ color: 'red' }}>
            ※ '과제명'을 누르면 과제신청 당시의 사업비 정보를 확인 할 수있고
            '제출상태' 버튼을 누르면 원가감리에서 수정 된 사업비 정보를 확인 할
            수 있습니다.
          </div>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-excel-download"
            icon={<DownloadOutlined />}
            onClick={excelDownloadClick}
          >
            엑셀다운로드
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'PrmpcCalcPresentn02'}
            columns={columns}
            dataSource={arrAsmtLst}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 800,
            }}
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

export default PrmpcSprvisnPresentn01;
