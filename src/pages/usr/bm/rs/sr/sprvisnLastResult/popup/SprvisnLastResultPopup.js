import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SprvisnLastResultPopup = ({ open, closeClick }) => {
  const [arrLvlIdntyRsltStrgHstry, setArrLvlIdntyRsltStrgHstry] = useState([]);

  const columns = [
    { title: '순번', dataIndex: 'a1' },
    { title: '업무구분', dataIndex: 'a2' },
    {
      title: '구축시스템 스마트화 수준',
      dataIndex: 'a3',
    },
    {
      title: '기업제조혁신 역량 수준',
      dataIndex: 'a4',
    },
    { title: '기업제조혁신 역량 총점', dataIndex: 'a5' },
    { title: '등록자', dataIndex: 'a6' },
    {
      title: '소속기관',
      dataIndex: 'a7',
    },
    {
      title: '등록일시',
      dataIndex: 'a8',
    },
  ];

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a1: idx,
        a2: '최종감리',
        a3: '기초',
        a4: 'Level2',
        a5: '222.00',
        a6: '홍길동',
        a7: '(주)감리기관',
        a8: '2021-12-07 14:55:33',
      });
    }
    setArrLvlIdntyRsltStrgHstry(tmp1);
  }, []);

  return (
    <Modal
      key="SprvisnLastResultPopup"
      title={'수준확인 결과 저장 이력 조회'}
      open={open}
      onCancel={closeClick}
      width={1200}
      footer={[
        <div>
          <Button
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-warning"
            onClick={closeClick}
          >
            취소
          </Button>
        </div>,
      ]}
    >
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>저장 이력</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrLvlIdntyRsltStrgHstryTable'}
            columns={columns}
            dataSource={arrLvlIdntyRsltStrgHstry}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 300,
            }}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default SprvisnLastResultPopup;
