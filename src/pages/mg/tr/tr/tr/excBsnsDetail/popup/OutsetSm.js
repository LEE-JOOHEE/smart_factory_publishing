import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const outsetSmColums = [
  {
    title: '항목',
    dataIndex: 'a1',
    width: '15%',
    align: 'center',
  },
  {
    title: '양식',
    dataIndex: 'a2',
    width: '10%',
  },
  {
    title: '허용파일',
    dataIndex: 'a3',
    width: '35%',
  },
  {
    title: '필수여부',
    dataIndex: 'a4',
    width: '10%',
    align: 'center',
  },
  {
    title: '첨부파일',
    dataIndex: 'a5',
    width: '30%',
  },
];
const OutsetSm = ({ outsetSmOpen, setOutsetSmOpen, key }) => {
  const confirmClick = () => {
    setOutsetSmOpen(false);
  };
  const closeClick = () => {
    setOutsetSmOpen(false);
  };
  const [arrOutsetSm, setArrOutsetSm] = useState([
    {
      a1: '착수계',
      a2: '',
      a3: 'hwp,pdf,docx,\npptx,xlsx,jpg,\njpeg,gif,png,\nzip,egg',
      a4: 'O',
      a5: '착수계.pdf (988.0 kb)',
    },
  ]);

  useEffect(() => {
    if (key) {
      // setArrOutsetSm()
    }
  }, [key]);
  return (
    <>
      <Modal
        open={outsetSmOpen}
        title="착수계"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            className="eu-btn-popup-process-fine"
            onClick={confirmClick}
          >
            확인
          </Button>,
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
          <Row className="eu-row-comp-title">착수계</Row>
          <Col span={24}>
            <Table
              scroll={{ y: 300 }}
              columns={outsetSmColums}
              dataSource={arrOutsetSm}
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

export default OutsetSm;
