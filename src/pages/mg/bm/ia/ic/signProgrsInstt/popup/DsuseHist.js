import React, { useState } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Modal, Button, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const DsuseHist = ({ open, closeClick }) => {
  const [arrDscdHstry, setArrDscdHstry] = useState([
    {
      a: '1',
      b: '김철수',
      c: '소속명',
      d: '2022-04-23',
      e: '대표자 성함 오기재',
    },
  ]);
  const columns = [
    {
      title: '순번',
      dataIndex: 'a',
      align: 'center',
    },
    {
      title: '폐기자',
      dataIndex: 'b',
      align: 'center',
    },
    {
      title: '폐기자소속',
      dataIndex: 'c',
      align: 'center',
    },
    {
      title: '폐기일시',
      dataIndex: 'd',
      align: 'center',
    },
    {
      title: '폐기사유',
      dataIndex: 'e',
      align: 'center',
    },
  ];
  return (
    <Modal
      key="PblacnchartrManage04"
      title="기관협약 체결"
      open={open}
      onCancel={closeClick}
      width={1200}
      footer={[
        <div>
          <Button
            type="primary"
            size="middle"
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            확인
          </Button>
          <Button
            type="primary"
            size="middle"
            className="eu-btn-popup-process-warning"
            onClick={closeClick}
          >
            닫기
          </Button>
        </div>,
      ]}
    >
      <Row className="eu-row-comp-title">
        <Col span={24}>
          <TitleComp>폐기이력</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'dscdHstryTable'}
            columns={columns}
            dataSource={arrDscdHstry}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 600,
            }}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default DsuseHist;
