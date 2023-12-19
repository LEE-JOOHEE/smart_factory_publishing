import React, { useEffect, useState } from 'react';
import { Button, Col, Descriptions, Modal, Row, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const expertEvlResultColums = [
  {
    title: '순번',
    dataIndex: 'a1',
    width: '10%',
    align: 'center',
  },
  {
    title: '구분',
    dataIndex: 'a2',
    width: '35%',
  },
  {
    title: '파일명',
    dataIndex: 'a3',
    width: '35%',
  },
  {
    title: '등록일',
    dataIndex: 'a4',
    width: '20%',
    align: 'center',
  },
];

const ExpertEvlResult = ({
  expertEvlResultOpen,
  setExpertEvlResultOpen,
  key,
}) => {
  //정의원 평가결과 대상
  const [ojtExpertEvlResult, setOjtExpertEvlResult] = useState({
    a1: '이영수',
    a2: '91.00',
    a3: '미대상',
    a4: '현장평가 결과 내 종합의견 + 보완의견 상세기입으로 참조',
  });

  //정의원 평가결과 table
  const [arrExpertEvlResult, setArrExpertEvlResult] = useState([
    {
      a1: '1',
      a2: '현장평가결과보고서(정)',
      a3: '결과표_(정)_이영수.pdf',
      a4: '2022-05-27',
    },
    {
      a1: '2',
      a2: '우대사항가점증빙서류 (정)',
      a3: '',
      a4: '',
    },
    {
      a1: '3',
      a2: '기타서류 (정)',
      a3: '',
      a4: '',
    },
    {
      a1: '4',
      a2: '기타서류 (부)',
      a3: '현장평가표_(부)_아무개.pdf',
      a4: '2022-05-27',
    },
  ]);

  useEffect(() => {
    if (key) {
      // setOjtExpertEvlResult();
      // setArrExpertEvlResult();
    }
  }, [key]);

  const confirmClick = () => {
    setExpertEvlResultOpen(false);
  };
  const closeClick = () => {
    setExpertEvlResultOpen(false);
  };

  return (
    <>
      <Modal
        open={expertEvlResultOpen}
        title="전문가 평가결과"
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
          <Row className="eu-row-comp-title">정의원 평가결과</Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="전문가명" span={2}>
                {ojtExpertEvlResult?.a1}
              </Descriptions.Item>
              <Descriptions.Item label="평가점수">
                {ojtExpertEvlResult?.a2}
              </Descriptions.Item>
              <Descriptions.Item label="사업비 재검토 대상" span={3}>
                {ojtExpertEvlResult?.a3}
              </Descriptions.Item>
              <Descriptions.Item label="총합의견" span={3}>
                {ojtExpertEvlResult?.a4}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">◎ 정의원 평가결과</Row>
          <Col span={24}>
            <Table
              scroll={{ y: 300 }}
              columns={expertEvlResultColums}
              dataSource={arrExpertEvlResult}
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

export default ExpertEvlResult;
