import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal } from 'antd';
import 'css/Common.css';
import SignProgrsInstt01 from 'pages/mg/bm/ia/ic/signProgrsInstt/comp/SignProgrsInstt01';
import DsuseHist from 'pages/mg/bm/ia/ic/signProgrsInstt/popup/DsuseHist';

const SignProgrsInsttContainer = ({ ojtKey, setPageType }) => {
  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
  });
  const listClick = () => {
    setPageType('LIST');
  };
  const agrmtSgnInqClick = () => {
    Modal.info({
      title: 'agrmtSgnInqClick',
    });
  };
  const [open, setOpen] = useState(false);
  const openClick = () => {
    setOpen(true);
  };
  const closeClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div style={{ textAlign: 'right' }}>
        <Button onClick={agrmtSgnInqClick}>전자협약서 조회</Button>
      </div>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SignProgrsInstt01 openClick={openClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-btn-layout">
        <Col span={24}>
          <Button
            type="primary"
            size="large"
            className="eu-btn-process-default"
            onClick={listClick}
          >
            목록
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <DsuseHist open={open} closeClick={closeClick} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SignProgrsInsttContainer);
