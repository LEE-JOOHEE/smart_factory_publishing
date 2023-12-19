import React, { useEffect, useState } from 'react';
import { Button, Col, Input, Modal, Row, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import { arrChange } from 'components/common/Common';

const SplemntHistPopup = ({
  splemntHistOpen,
  setSplemntHistOpen,
  key = null,
}) => {
  const columnsData = [
    {
      title: '순번',
      dataIndex: 'a1',
      width: '4%',
      align: 'center',
    },
    {
      title: '세부공고명',
      dataIndex: 'a2',
      width: '16%',
    },
    {
      title: '요청구분',
      dataIndex: 'a3',
      width: '15%',
    },
    {
      title: '요청일시',
      dataIndex: 'a4',
      width: '15%',
    },
    {
      title: '보완요청사유',
      dataIndex: 'a5',
      width: '45%',
      render: (_, record, index) => {
        return record?.editable ? (
          <>
            <Input
              value={record?.a5}
              onChange={(e) =>
                arrChange(e.target.value, 'a5', index, setArrSplemntHist)
              }
            />
          </>
        ) : (
          <>{record?.a5}</>
        );
      },
    },
    {
      title: '수정',
      dataIndex: 'a6',
      align: 'center',
      render: (_, record, index) => {
        return record.editable ? (
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-default"
            onClick={(e) => {
              arrChange(false, 'editable', index, setArrSplemntHist);
              Modal.info({
                title: `수정 완료`,
                content: `수정데이터 : ${JSON.stringify(
                  record,
                  undefined,
                  2
                )} index : ${index}`,
              });
            }}
          >
            수정하기
          </Button>
        ) : (
          ''
        );
      },
    },
  ];

  const [splemntHistColumns, setSplemntHistColumns] = useState([]);
  const [arrSplemntHist, setArrSplemntHist] = useState([
    {
      a1: '1',
      a2: '아무개',
      a3: '현장평과 보완제출',
      a4: '2022-08-18 14:58:23.0',
      a5: '보완내용 요청',
      a6: '',
      editable: true,
    },
  ]);

  useEffect(() => {
    if (arrSplemntHist) {
      setSplemntHistColumns(columnsData);
    }
    console.log(arrSplemntHist);
  }, [arrSplemntHist]);
  const confirmClick = () => {
    setSplemntHistOpen(false);
  };
  const closeClick = () => {
    setSplemntHistOpen(false);
  };

  return (
    <>
      <Modal
        open={splemntHistOpen}
        title="보완이력"
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
            type="primary"
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title">보완이력</Row>
          <Col span={24}>
            <Table
              key={'splemntHistPopupTable'}
              columns={splemntHistColumns}
              dataSource={arrSplemntHist}
              size="small"
              bordered
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default SplemntHistPopup;
