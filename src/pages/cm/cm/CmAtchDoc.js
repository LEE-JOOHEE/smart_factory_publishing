import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
const columns = [
  {
    title: '항목',
    dataIndex: 'itm',
    width: '25%',
  },
  {
    title: '양식',
    dataIndex: 'smpl',
    width: '25%',
  },
  {
    title: '허용파일',
    dataIndex: 'alow',
    width: '25%',
  },
  {
    title: '첨부파일',
    dataIndex: 'fle',
    width: '25%',
  },
];
const data = [
  {
    key: '1',
    itm: '변경신청 첨부문서',
    smpl: '변경신청_첨부문서_양식.hwp',
    alow: '*.hwp, *.pdf, *.png, *.tif',
    fle: '변경신청 첨부문서_회사이름.hwp',
  },
  {
    key: '2',
    itm: '변경신청 첨부문서 2',
    smpl: '변경신청_첨부문서_양식2.hwp',
    alow: '*.hwp, *.pdf, *.png, *.tif',
    fle: '변경신청 첨부문서_회사이름2.hwp',
  },
  {
    key: '3',
    itm: '변경신청 첨부문서 3',
    smpl: '변경신청_첨부문서_양식3.hwp',
    alow: '*.hwp, *.pdf, *.png, *.tif',
    fle: '변경신청 첨부문서_회사이름3.hwp',
  },
];
const CmAtchDoc = ({ title, editable = false }) => {
  const saveButtonclick = () => {
    Modal.info({
      title: 'saveButtonclick',
    });
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>{title}</TitleComp>
        </Col>
        {editable && (
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              onClick={saveButtonclick}
              className="eu-btn-crud-fine"
            >
              저장
            </Button>
          </Col>
        )}
      </Row>
      <Col span={24}>
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          bordered
          pagination={false}
          scroll={{ y: 120 }}
        />
      </Col>
    </>
  );
};

export default CmAtchDoc;
