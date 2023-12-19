import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal } from 'antd';
import 'css/Common.css';
import InsttAgremDetail01 from 'pages/mg/bm/ia/ia/insttAgremDetail/comp/InsttAgremDetail01';

const InsttAgremDetailContainer = ({ ojtKey, setPageType }) => {
  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
  }, [ojtKey]);
  const [ojtBizInfo, setOjtBizInfo] = useState({
    a: '2022',
    b: '대중소상생형',
    c: '스마트공장 구축 및 고도화 사업(대중소상생)',
  });
  const [arrAtchFile, setArrAtchFile] = useState([
    {
      a: '사업계획서',
      b: 'pdg, jpg',
      c: true,
      d: '사업계획서.pdf(110 KB) icon',
    },
  ]);

  const approveClick = () => {
    Modal.info({
      title: 'approveClick',
    });
  };

  const rejectClick = () => {
    Modal.info({
      title: 'rejectClick',
    });
  };

  const listClick = () => {
    setPageType('LIST');
  };
  const agremPreviewClick = () => {
    Modal.info({
      title: 'agremPreviewClick',
    });
  };
  return (
    <>
      <div style={{ textAlign: 'right' }}>
        <Button onClick={agremPreviewClick}>협약서 미리보기</Button>
      </div>
      <div style={{ textAlign: 'right', color: 'red' }}>
        * "협약서 미리보기"는 협약서 내용을 확인하시는 단계이며, "Null"로
        표시되는 것은 에러가 아닌 정상 출력입니다.
      </div>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttAgremDetail01
            ojtBizInfo={ojtBizInfo}
            arrAtchFile={arrAtchFile}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-btn-process-fine"
            onClick={approveClick}
          >
            승인
          </Button>
          <Button
            size="large"
            className="eu-btn-process-error"
            onClick={rejectClick}
          >
            반려
          </Button>
          <Button
            type="primary"
            size="large"
            className="eu-btn-process-default"
            onClick={() => listClick()}
          >
            목록
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(InsttAgremDetailContainer);
