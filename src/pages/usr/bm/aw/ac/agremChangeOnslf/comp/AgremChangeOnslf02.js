import React, { useState } from 'react';
import { Col, Row, Descriptions, Input, Button, Space, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';
import AgremChangeEmpPopup from 'pages/usr/bm/aw/ac/agremChangeOnslf/popup/AgremChangeEmpPopup';

const AgremChangeOnslf02 = () => {
  const [ojtRbprsn, setOjtRbprsn] = useState({
    a1: '홍길동',
    a2: '강감찬',
  });
  const [open, setOpen] = useState(false);
  const closeClick = () => {
    setOpen(false);
  };
  const popupSelectClick = (checkedValue) => {
    Modal.info({ title: `${JSON.stringify(checkedValue)}` });
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>변경 전 담당 책임자</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label={'담당 책임자'} span={3}>
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'a1', setOjtRbprsn);
                }}
                value={ojtRbprsn?.a1}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>변경 후 담당 책임자</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label={'담당 책임자'} span={3}>
              <Space>
                <Input
                  onChange={(e) => {
                    ojtChange(e.target.value, 'a2', setOjtRbprsn);
                  }}
                  value={ojtRbprsn?.a2}
                />
                <Button
                  size="small"
                  className="eu-usr-btn-table-fine"
                  onClick={() => setOpen(true)}
                >
                  검색
                </Button>
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <AgremChangeEmpPopup
        open={open}
        closeClick={closeClick}
        popupSelectClick={popupSelectClick}
      />
    </>
  );
};

export default AgremChangeOnslf02;
