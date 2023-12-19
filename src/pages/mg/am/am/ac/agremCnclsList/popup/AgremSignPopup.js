import React from 'react';
import 'css/Common.css';
import { Button, Col, Modal, Row, Table } from 'antd/lib';
const arrAgremSignColums = [
  {
    title: '기관역활',
    dataIndex: 'a1',
  },
  {
    title: '기관명',
    dataIndex: 'a2',
  },
  {
    title: '서명일자',
    dataIndex: 'a3',
  },
  {
    title: '서명여부',
    dataIndex: 'a4',
  },
];
const AgremSignPopup = ({
  agremSignPopupOpen,
  setAgremSignPopupOpen,
  arrData,
}) => {
  const closeClick = () => {
    setAgremSignPopupOpen(false);
  };
  return (
    <Modal
      open={agremSignPopupOpen}
      title="기관별 서명현황"
      onCancel={closeClick}
      width={1000}
      footer={[
        <Button
          key={'AgremSignPopup_closeClick'}
          className="eu-btn-popup-process-default"
          onClick={closeClick}
        >
          닫기
        </Button>,
      ]}
    >
      <Row className="eu-row-comp-cont">
        <Row className="eu-row-comp-title"></Row>
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            key={'AgremSignPopup01Table'}
            columns={arrAgremSignColums}
            dataSource={arrData || []}
            size="small"
            bordered
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default AgremSignPopup;
