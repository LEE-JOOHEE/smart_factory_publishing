import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const columnsData = [
  {
    title: '순번',
    dataIndex: 'a1',
    width: '10%',
    align: 'center',
  },
  {
    title: '반려자',
    dataIndex: 'a2',
    width: '20%',
    align: 'center',
  },
  {
    title: '반려자소속',
    dataIndex: 'a3',
    width: '20%',
    align: 'center',
  },
  {
    title: '반려일시',
    dataIndex: 'a4',
    width: '20%',
    align: 'center',
  },
  {
    title: '반려사유',
    dataIndex: 'a5',
    width: '30%',
    align: 'center',
  },
];
const AgremReturnPopup = ({
  agremReturnPopupOpen,
  setAgremReturnPopupOpen,
  key = null,
}) => {
  const [arrAgremReturn, setArrAgremReturn] = useState([
    {
      a1: '1',
      a2: '아무개',
      a3: '소속기관',
      a4: '20211006',
      a5: '첨부파일미등록',
    },
  ]);
  const confirmClick = () => {
    setAgremReturnPopupOpen(false);
  };
  const closeClick = () => {
    setAgremReturnPopupOpen(false);
  };

  return (
    <>
      <Modal
        open={agremReturnPopupOpen}
        title="반려이력"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title mb-0">
            <Col span={24}>
              <TitleComp>반려이력</TitleComp>
            </Col>
          </Row>
          <Col span={24}>
            <Table
              scroll={{ y: 500 }}
              key={'agremReturnPopupTable'}
              columns={columnsData}
              dataSource={arrAgremReturn}
              size="small"
              bordered
              pagination={false}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default AgremReturnPopup;
