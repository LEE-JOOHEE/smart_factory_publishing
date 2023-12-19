import React, { useEffect, useState } from 'react';
import { Button, Col, Descriptions, Modal, Row, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
const arrAgremColums = [
  {
    title: '투입일자',
    dataIndex: 'a1',
  },
  {
    title: '비고',
    dataIndex: 'a2',
  },
];
const AgremInptPopup = ({ agremInptPopupOpen, setAgremInptPopupOpen, key }) => {
  const [ojtInfo, setOjtInfo] = useState({});

  const [arrAgrem, setArrAgrem] = useState({});

  const confirmClick = () => {
    setAgremInptPopupOpen(false);
  };
  const closeClick = () => {
    setAgremInptPopupOpen(false);
  };
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
    },
  };
  return (
    <>
      <Modal
        open={agremInptPopupOpen}
        title="투입일자 확인"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            key={'closeClick'}
            type="primary"
            size="middle"
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-title">
          <Col span={12}>
            <TitleComp>과제기본정보</TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="사업명">
                {ojtInfo?.a1 || '1차_스마트공장 구축 및 고도화'}
              </Descriptions.Item>
              <Descriptions.Item label="과제명" span={2}>
                {ojtInfo?.a2 || '(주)도입기업_스마트공장구축및 고도화'}
              </Descriptions.Item>
              <Descriptions.Item label="도입기업">
                {ojtInfo?.a3 || '(주)도입기업'}
              </Descriptions.Item>
              <Descriptions.Item label="IT공급기업" span={2}>
                {ojtInfo?.a4 || '(주)공급기업'}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>투입인력 정보</TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="성명">
                {ojtInfo?.a5 || '1차_스마트공장 구축 및 고도화'}
              </Descriptions.Item>
              <Descriptions.Item label="소속기관명">
                {ojtInfo?.a6 || '(주)공급기업'}
              </Descriptions.Item>
              <Descriptions.Item label="S/W 기술자 등급">
                {ojtInfo?.a7 || 'SW개발자'}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>투입인력 정보</TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              scroll={{ y: 300 }}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              key={'AgremInptPopup01Table'}
              columns={arrAgremColums}
              dataSource={arrAgrem}
              size="small"
              bordered
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default AgremInptPopup;
