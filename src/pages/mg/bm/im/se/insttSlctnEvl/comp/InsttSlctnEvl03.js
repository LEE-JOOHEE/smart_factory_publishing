import React, { useState } from 'react';
import { Col, Row, Table, Modal, Button, Select } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import InsttAsignPopupPage from 'pages/mg/bm/im/se/insttSlctnEvl/popup/InsttAsignPopupPage';

const InsttSlctnEvl03 = ({ arrAltmntInstLst }) => {
  const columns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: 50,
      align: 'center',
    },
    {
      title: '접수번호',
      dataIndex: 'b',
    },
    {
      title: '제출기관명',
      dataIndex: 'c',
    },
    {
      title: '기관담당자',
      dataIndex: 'd',
    },
    {
      title: '제출일시',
      dataIndex: 'e',
      width: 250,
    },
  ];

  const [open, setOpen] = useState(false);
  const openClick = () => {
    setOpen(true);
  };
  const closeClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>배정 기관 목록</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-default"
            onClick={openClick}
          >
            기관배정
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrAltmntInstLst'}
            columns={columns}
            dataSource={arrAltmntInstLst}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 350 }}
          />
        </Col>
      </Row>
      <InsttAsignPopupPage open={open} closeClick={closeClick} />
    </>
  );
};

export default InsttSlctnEvl03;
