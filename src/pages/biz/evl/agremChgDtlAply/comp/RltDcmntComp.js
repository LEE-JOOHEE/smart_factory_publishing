import React, { useState } from 'react';
import {
  Descriptions,
  Input,
  Checkbox,
  Col,
  Row,
  Button,
  Table,
  Modal,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
const columns = [
  {
    title: '항목',
    dataIndex: 'itm',
  },
  {
    title: '양식',
    dataIndex: 'smpl',
  },
  {
    title: '허용파일',
    dataIndex: 'alow',
  },
  {
    title: '첨부파일',
    dataIndex: 'fle',
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
];
const RltDcmntComp = () => {
  const saveButtonclick = () => {
    Modal.info({
      title: 'saveButtonclick',
    });
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>관련서류</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            size="small"
            onClick={saveButtonclick}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table columns={columns} dataSource={data} size="small" bordered />
        </Col>
      </Row>
    </>
  );
};

export default RltDcmntComp;
