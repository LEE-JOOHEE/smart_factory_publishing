import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const sprvisnLevelColums = [
  {
    title: '순번',
    dataIndex: 'a1',
  },
  {
    title: '업무구분',
    dataIndex: 'a2',
  },
  {
    title: '구축시스템 스마트화 수준',
    dataIndex: 'a3',
  },
  {
    title: '기업제조혁신 역량 수준',
    dataIndex: 'a4',
  },
  {
    title: '기업제조혁신 역량 총점',
    dataIndex: 'a5',
  },
  {
    title: '등록자',
    dataIndex: 'a6',
  },
  {
    title: '소속기관',
    dataIndex: 'a7',
  },
  {
    title: '등록일시',
    dataIndex: 'a8',
  },
];
const SprvisnLevelPopup = ({ sprvisnLevelOpen, setSprvisnLevelOpen, key }) => {
  const [arrSprvisnLevel, setArrSprvisnLevel] = useState([
    {
      a1: '1',
      a2: '최종감리',
      a3: '기초',
      a4: 'Level2',
      a5: '222.00',
      a6: '홍길동',
      a7: '(주)감리기관',
      a8: '2021-12-07 14:55:33',
    },
  ]);

  const confirmClick = () => {
    setSprvisnLevelOpen(false);
  };
  const closeClick = () => {
    setSprvisnLevelOpen(false);
  };

  return (
    <>
      <Modal
        open={sprvisnLevelOpen}
        title="수준결과 저장 이력 조회"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            size="middle"
            className="eu-btn-popup-process-fine"
            onClick={confirmClick}
          >
            확인
          </Button>,
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
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              scroll={{ y: 300 }}
              columns={sprvisnLevelColums}
              dataSource={arrSprvisnLevel}
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

export default React.memo(SprvisnLevelPopup);
