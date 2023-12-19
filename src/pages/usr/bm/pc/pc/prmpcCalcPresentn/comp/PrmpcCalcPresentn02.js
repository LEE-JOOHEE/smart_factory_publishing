import React, { useState } from 'react';
import { Col, Row, Table, Button, Modal } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';

const PrmpcCalcPresentn02 = ({ arrAsmtLst, setOjtKey, setPageType }) => {
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
            ※ 재계산여부 : 현장평가결과 원가 재계산이 필요한 과제 (협약체결 이후
            재계산 수행)
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

export default PrmpcCalcPresentn02;
