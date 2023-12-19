import React, { useState, useEffect } from 'react';
import { Col, Row, Descriptions, Table, Modal, Input, Button } from 'antd';
import 'css/CommonUsr.css';
import TitleComp from 'components/layout/TitleComp';

const EvlProgrsPopup = ({ open, closeClick, arrAsmtInfo }) => {
  const [arrMfcmEvlScr, setArrMfcmEvlScr] = useState([]);

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: `위원${idx}`,
        b: '80',
        c: '평가의견',
      });
    }
    setArrMfcmEvlScr(tmp1);
  }, []);

  const mfcmEvlScrColumns = [
    {
      title: '위원명',
      dataIndex: 'a',
    },
    { title: '점수', dataIndex: 'b' },
    { title: '평가의견', dataIndex: 'c' },
  ];

  const asmtInfoColumns = [
    { title: '도입기업', dataIndex: 'a' },
    { title: '공급기업', dataIndex: 'b' },
    { title: '과제명', dataIndex: 'c' },
    { title: '평가시간', dataIndex: 'd' },
    { title: '순위', dataIndex: 'e' },
    { title: '총점', dataIndex: 'f' },
    { title: '진행율(%)', dataIndex: 'g' },
  ];

  const refreshClick = () => {
    Modal.info({ title: 'refreshClick' });
  };
  return (
    <>
      <Modal
        key="EvlProgrsPopup"
        title="분과별 평가진행현황"
        open={open}
        onCancel={closeClick}
        width={1200}
        footer={null}
      >
        <Row className="eu-usr-row-comp-title">
          <Col span={12}>
            <TitleComp>과제정보</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              key={'searchClick'}
              size="small"
              className="eu-usr-btn-crud-fine"
              onClick={refreshClick}
            >
              새로고침
            </Button>
          </Col>
        </Row>
        <Row className="eu-usr-row-comp-cont">
          <Col span={24}>
            <Table
              key={'arrAsmtInfo'}
              columns={asmtInfoColumns}
              dataSource={arrAsmtInfo}
              pagination={false}
              size={'small'}
              bordered={true}
              scroll={{
                y: 200,
              }}
            />
          </Col>
        </Row>

        <Row className="eu-usr-row-comp-title margin-top">
          <Col span={24}>
            <TitleComp>위원별 평가점수 및 의견</TitleComp>
          </Col>
        </Row>
        <Row className="eu-usr-row-comp-cont">
          <Col span={24}>
            <Table
              key={'arrMfcmEvlScr'}
              columns={mfcmEvlScrColumns}
              dataSource={arrMfcmEvlScr}
              pagination={false}
              size={'small'}
              bordered={true}
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

export default EvlProgrsPopup;
