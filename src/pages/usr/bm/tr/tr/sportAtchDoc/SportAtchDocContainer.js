import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import { useHistory } from 'react-router-dom';
import SportAtchDoc01 from 'pages/usr/bm/tr/tr/sportAtchDoc/comp/SportAtchDoc01';
import CmAplyAsmtSrvy from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtSrvy';

const SportAtchDocContainer = () => {
  const history = useHistory();
  const [arrAtchFile, setArrAtchFile] = useState([]);

  const lstClick = () => {
    history.push('/usr/bm/tr/tr/smsDspth');
  };

  const saveClick = () => {
    Modal.info({ title: '저장' });
  };

  const lastSubmitClick = () => {
    Modal.info({ title: '최종제출' });
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 20; idx++) {
      tmp1.push({
        key: idx,
        a: '사업계획서',
        b: '.hwp',
        c: 'O',
        d: '사업계획서.hwp(13KB)',
      });
    }
    setArrAtchFile(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SportAtchDoc01 arrAtchFile={arrAtchFile} />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <CmAplyAsmtSrvy />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-usr-btn-process-default"
            onClick={lstClick}
          >
            목록
          </Button>
          <Button
            size="large"
            className="eu-usr-btn-process-fine"
            onClick={saveClick}
          >
            저장
          </Button>
          <Button
            size="large"
            className="eu-usr-btn-process-error"
            onClick={lastSubmitClick}
          >
            최종제출
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SportAtchDocContainer);
