import React, { useState } from 'react';
import { Col, Row, Modal, Button, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const FileExtsnPopupPage = ({
  fileExtnOpen,
  fileExtnCloseClick,
  setArrCheckedFileExtn,
  fileExtnConfirmClick,
}) => {
  const arrFileExtn = [
    {
      key: 1,
      a: '한글 문서',
      b: 'hwp',
    },
    {
      key: 2,
      a: 'PDF 문서',
      b: 'pdf',
    },
    {
      key: 3,
      a: 'WORD 문서',
      b: 'docx',
    },
    {
      key: 4,
      a: 'PPT 문서',
      b: 'PPTX',
    },
    {
      key: 5,
      a: '엑셀 문서',
      b: 'xlsx',
    },
    {
      key: 6,
      a: '이미지 파일',
      b: 'jpg',
    },
    {
      key: 7,
      a: '이미지 파일',
      b: 'jpeg',
    },
    {
      key: 8,
      a: '이미지 파일',
      b: 'gif',
    },
    {
      key: 9,
      a: '이미지 파일',
      b: 'png',
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedFileExtn(selectedRows);
    },
  };
  const columns = [
    {
      title: '확장자 종류',
      dataIndex: 'a',
    },
    {
      title: '파일 확장자',
      dataIndex: 'b',
    },
  ];
  return (
    <>
      <Modal
        key="PblancRsltIx02"
        title="파일확장자"
        // style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        open={fileExtnOpen}
        onCancel={fileExtnCloseClick}
        width={1200}
        footer={[
          <Button
            className="eu-btn-popup-process-default"
            onClick={fileExtnConfirmClick}
          >
            확인
          </Button>,
          <Button
            className="eu-btn-popup-process-warning"
            onClick={fileExtnCloseClick}
          >
            닫기
          </Button>
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'FileExtsnPopupPage'}
              columns={columns}
              dataSource={arrFileExtn}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              pagination={false}
              size={'small'}
              bordered={true}
              sticky={true}
              scroll={{
                y: 400,
              }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default FileExtsnPopupPage;
