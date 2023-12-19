import React, { useState } from 'react';
import { Col, Row, Descriptions, Input, Button, Space, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';
import AgremChangeEmpPopup from 'pages/usr/bm/aw/ac/agremChangeOnslf/popup/AgremChangeEmpPopup';

const AgremChangeOnslf03 = () => {
  const [ojtIndcEntRprsv, setOjtIndcEntRprsv] = useState({
    a1: '윤봉길',
    a2: '이순신',
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
          <TitleComp>변경 전 도입기업 대표자</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label={'도입기업 대표자'} span={3}>
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'a1', setOjtIndcEntRprsv);
                }}
                value={ojtIndcEntRprsv?.a1}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>변경 후 도입기업 대표자</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label={'도입기업 대표자'} span={3}>
              <Space>
                <Input
                  onChange={(e) => {
                    ojtChange(e.target.value, 'a2', setOjtIndcEntRprsv);
                  }}
                  value={ojtIndcEntRprsv?.a2}
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

export default AgremChangeOnslf03;
