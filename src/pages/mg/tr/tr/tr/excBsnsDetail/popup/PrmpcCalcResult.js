import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
const prmpcCalcResultColums = [
  {
    title: '구분',
    dataIndex: 'a1',
  },
  {
    title: '금액',
    dataIndex: 'a2',
  },
];
const PrmpcCalcResult = ({
  prmpcCalcResultOpen,
  setPrmpcCalcResultOpen,
  key,
}) => {
  const [arrPrmpcCalcResult, setArrPrmpcCalcResult] = useState([
    {
      a1: 'H/W 개발비',
      a2: '0',
    },
    {
      a1: 'S/W 개발비',
      a2: '20000000',
    },
    {
      a1: '자동화장비',
      a2: '20000000',
    },
    {
      a1: '기타(할인) 비용',
      a2: '-8020000',
    },
    {
      a1: '클라우드 기반 서비스 이용료',
      a2: '0',
    },
    {
      a1: '도입기업의 사업관리 인력 인건비',
      a2: '0',
    },
    {
      a1: '제조현장혁신활동',
      a2: '5250000',
    },
  ]);

  useEffect(() => {
    if (key) {
      // setArrPrmpcCalcResult()
    }
  }, [key]);

  const confirmClick = () => {
    setPrmpcCalcResultOpen(false);
  };
  const closeClick = () => {
    setPrmpcCalcResultOpen(false);
  };

  return (
    <>
      <Modal
        open={prmpcCalcResultOpen}
        title="원가계산/감리 결과"
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
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>원가계산/감리 결과</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              {/* 우측 버튼 */}
            </Col>
          </Row>
          <Col span={24}>
            <Table
              scroll={{ y: 300 }}
              columns={prmpcCalcResultColums}
              dataSource={arrPrmpcCalcResult}
              size="small"
              bordered
              pagination={false}
              summary={(data) => {
                // console.log(data);
                let sum = 0;
                data?.forEach((item) => (sum += Number(item['a2'])));
                return (
                  <Table.Summary fixed>
                    <Table.Summary.Row className="fixed-colum">
                      <Table.Summary.Cell index={0}>합계</Table.Summary.Cell>
                      <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                    </Table.Summary.Row>
                  </Table.Summary>
                );
              }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default PrmpcCalcResult;
