import React, { useState } from 'react';
import { Col, Row, Table, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { DownloadOutlined } from '@ant-design/icons';

const InsttRcritProgrs02 = ({
  arrPbancLst,
  arrCheckedPbancLst,
  setArrCheckedPbancLst,
}) => {
  const columns = [
    {
      title: '사업연도',
      dataIndex: 'a',
      key: 1,
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'b',
      key: 2,
      align: 'center',
    },
    {
      title: '공고명',
      dataIndex: 'c',
      key: 3,
      align: 'center',
    },
    {
      title: '제출담당자',
      dataIndex: 'd',
      key: 4,
      align: 'center',
    },
    {
      title: '접수번호',
      dataIndex: 'e',
      key: 5,
      align: 'center',
    },
    {
      title: '제출기관명',
      dataIndex: 'f',
      key: 6,
      align: 'center',
    },
    {
      title: '제출일시',
      dataIndex: 'g',
      key: 7,
      align: 'center',
    },
    {
      title: '제출상태',
      dataIndex: 'h',
      key: 8,
      align: 'center',
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
      setArrCheckedPbancLst(selectedRows);
    },
  };
  // 일괄다운로드
  const downloadClick = () => {
    Modal.info({ title: 'downloadClick' });
  };
  // 엑셀
  const excelClick = () => {
    Modal.info({ title: 'excelClick' });
  };
  // 접수반려
  const rcptRjctClick = () => {
    Modal.info({
      title: `arrCheckedPbancLst: ${JSON.stringify(arrCheckedPbancLst)}`,
    });
  };
  // 접수취소
  const rcptRtrcnClick = () => {
    Modal.info({
      title: `arrCheckedPbancLst: ${JSON.stringify(arrCheckedPbancLst)}`,
    });
  };
  // 접수취소복구
  const rcptRtcrnRecovry = () => {
    Modal.info({ title: `rcptRtcrnRecovry` });
  };
  // 접수일시조정
  const rcptDtAjmtClick = () => {
    Modal.info({ title: `rcptDtAjmtClick` });
  };
  // 접수마감
  const rcptDdlnClick = () => {
    Modal.info({ title: `rcptDdlnClick` });
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>공고 목록</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-excel-download"
            icon={<DownloadOutlined />}
            onClick={downloadClick}
          >
            일괄다운로드
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-default"
            onClick={excelClick}
          >
            엑셀
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={rcptRjctClick}
          >
            접수반려
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={rcptRtrcnClick}
          >
            접수취소
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={rcptRtcrnRecovry}
          >
            접수취소복구
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={rcptDtAjmtClick}
          >
            접수일시조정
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={rcptDdlnClick}
          >
            접수마감
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrPbancLst'}
            columns={columns}
            dataSource={arrPbancLst}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 800,
            }}
            tableLayout={'auto'}
          />
        </Col>
      </Row>
    </>
  );
};

export default InsttRcritProgrs02;
