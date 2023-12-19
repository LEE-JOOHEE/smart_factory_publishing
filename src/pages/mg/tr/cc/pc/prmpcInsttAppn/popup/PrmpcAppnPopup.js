import React from 'react';
import { Col, Row, Table } from 'antd';
import 'css/Common.css';
import { Button, Modal } from 'antd/lib';
import TitleComp from 'components/layout/TitleComp';

const PrmpcAppnPopup = ({
  prmpcAppnPopupOpen,
  setPrmpcAppnPopupOpen,
  arrTask = [],
}) => {
  const arrTaskColumns = [
    {
      title: '원가계신기관명',
      dataIndex: 'a1',
    },
    {
      title: '배정수',
      dataIndex: 'a2',
    },
    {
      title: '사업자번호',
      dataIndex: 'a3',
    },
    {
      title: '주소',
      dataIndex: 'a4',
    },
    {
      title: '대표자명',
      dataIndex: 'a5',
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
    },
  };
  const confirmClick = () => {
    setPrmpcAppnPopupOpen(false);
  };
  const closeClick = () => {
    setPrmpcAppnPopupOpen(false);
  };
  return (
    <Modal
      open={prmpcAppnPopupOpen}
      title="원가 계산기관 조정"
      onOk={confirmClick}
      onCancel={closeClick}
      width={1000}
      footer={[
        <Button
          key={'PrmpcAppnPopup_confirmClick'}
          size="middle"
          className="eu-btn-popup-process-fine"
          onClick={confirmClick}
        >
          확인
        </Button>,
        <Button
          key={'PrmpcAppnPopup_closeClick'}
          type="primary"
          size="middle"
          className="eu-btn-popup-process-default"
          onClick={closeClick}
        >
          취소
        </Button>,
      ]}
    >
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>원가계산기관 지정</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            rowSelection={{ type: 'radio', ...rowSelection }}
            key={'PrmpcAppnPopup01Table'}
            columns={arrTaskColumns}
            dataSource={arrTask}
            size="small"
            bordered
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default PrmpcAppnPopup;
