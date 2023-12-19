import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'antd';
import 'css/Common.css';
import AgremCnclsPopup from 'pages/mg/am/am/ac/agremCnclsDetail/popup/AgremCnclsPopup';

const AgremCnclsDetail01 = ({}) => {
  const [agremCnclsPopupOpen, setAgremCnclsPopupOpen] = useState(false);

  const agrmtInqClick = () => {
    Modal.info({
      title: 'agrmtInqClick',
    });
  };
  const agrmtIssuClick = () => {
    Modal.info({
      title: 'agrmtIssuClick',
    });
  };
  const agrmtOtptClick = () => {
    Modal.info({
      title: 'agrmtInqClick',
    });
  };
  const prmpcCalcInqClick = () => {
    setAgremCnclsPopupOpen(true);
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={agrmtIssuClick}
          >
            전자협약서 재발급
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={agrmtOtptClick}
          >
            전자협약서 출력
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={agrmtInqClick}
          >
            전자협약서 조회
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={prmpcCalcInqClick}
          >
            원가계산 조회
          </Button>
        </Col>
      </Row>
      <AgremCnclsPopup
        agremCnclsPopupOpen={agremCnclsPopupOpen}
        setAgremCnclsPopupOpen={setAgremCnclsPopupOpen}
      />
    </>
  );
};

export default AgremCnclsDetail01;
