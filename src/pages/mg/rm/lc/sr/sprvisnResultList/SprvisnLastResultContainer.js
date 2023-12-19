import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from 'antd';
import 'css/Common.css';
import SprvisnLastResult01 from 'pages/mg/rm/lc/sr/sprvisnResultList/comp/SprvisnLastResult01';
import SprvisnLastResult02 from 'pages/mg/rm/lc/sr/sprvisnResultList/comp/SprvisnLastResult02';

const SprvisnLastResultContainer = ({ ojtKey, setPageType }) => {
  const [ojtDetailInfo, setOjtDetailInfo] = useState({
    a1: '없음',
    a2: '2021-I2R-023-000001',
    a3: '2021',
    a4: '2021_스마트공장 구축 및 고도화',
    a5: '(주)도입기업_스마트공장 구축 및 고도화',
    a6: '(주)도입기업',
    a7: '(주)공급기업',

    a10: '최종감리',
    a11: '(주)감리기관',
    a12: '홍길동',
    a13: '2021-03-30 ~ 2022-04-11',
    a14: '필요',
    a15: '',
  });
  const [ojtDetailInfo2, setOjtDetailInfo2] = useState({
    a1: '기초',
    a2: 'Level1',
    a3: '0',
    a4: '2021-I2R-023-000001',
    a5: '2021',
    a6: '2021_스마트공장 구축 및 고도화',
    a7: '(주)도입기업_스마트공장 구축 및 고도화',
    a8: '(주)도입기업',
    a9: '(주)공급기업',
  });

  const [arrAttFpFile, setArrAttFpFile] = useState([
    {
      a1: 'FP(기능점수)산정자료',
      a2: '사업비 산출내역서',
      a3: '2021-07-22',
      a4: '76KB',
    },
  ]);
  const [arrAttFile, setArrAttFile] = useState([
    {
      a1: '완료보고',
      a2: '(주)도입기업 완료보고서',
      a3: '2021-07-22',
      a4: '760KB',
    },
    {
      a1: '완료보고',
      a2: '(주)도입기업_사업비집행보거서',
      a3: '2021-07-22',
      a4: '7KB',
    },
  ]);
  const listClick = () => {
    setPageType('SPRVISN_RESULT_LIST');
  };
  useEffect(() => {
    if (ojtKey) {
    }
  }, [ojtKey]);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SprvisnLastResult01
            ojtDetailInfo={ojtDetailInfo}
            arrAttFpFile={arrAttFpFile}
            arrAttFile={arrAttFile}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SprvisnLastResult02 ojtDetailInfo={ojtDetailInfo2} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button
            type="primary"
            size="large"
            onClick={listClick}
            className="eu-btn-process-default"
          >
            목록
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SprvisnLastResultContainer);
