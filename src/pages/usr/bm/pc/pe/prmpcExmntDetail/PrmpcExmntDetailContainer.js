import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import PrmpcCaclDetail01 from 'pages/usr/bm/pc/pc/prmpcCalcDetail/comp/PrmpcCalcDetail01';
import PrmpcExmntDetail01 from 'pages/usr/bm/pc/pe/prmpcExmntDetail/comp/PrmpcExmntDetail01';
import PrmpcCaclDetail03 from 'pages/usr/bm/pc/pc/prmpcCalcDetail/comp/PrmpcCalcDetail03';
import PrmpcExmntDetail02 from 'pages/usr/bm/pc/pe/prmpcExmntDetail/comp/PrmpcExmntDetail02';
import PrmpcCalcDetail04 from 'pages/usr/bm/pc/pc/prmpcCalcDetail/comp/PrmpcCalcDetail04';

const PrmpcExmntDetailContainer = ({ ojtKey, setPageType }) => {
  // 첨부문서(신청단계)
  const [arrAtchFileAply, setArrAtchFileAply] = useState([
    {
      a1: '사업계획서',
      a2: '2020사업계획서_유형1-B.pdf',
      a3: '2022-02-24',
      a4: '731KB',
    },
  ]);
  // 제출서류 확인
  const [arrSbmsnDcmntIdnty, setArrSbmsnDcmntIdnty] = useState([
    { key: 1, a1: '사업계획서', a2: '2022_사업계획서.pdf(9493.2kb)' },
  ]);
  // 첨부문서(현장평가 결과보고서)
  const [arrSptEvlAtchFile, setArrSptEvlAtchFile] = useState([
    {
      key: 1,
      a1: '1',
      a2: '현장평가결과보고서(정)',
      a3: '현장실사결과.pdf',
      a4: '2022-02-16 10:45:07',
      a5: '113556',
    },
  ]);
  // 원가계산기관 산출 사업비 내역
  const [arrPjtcoDscnt, setArrPjtcoDscnt] = useState([
    {
      key: 1,
      a1: '원가계산 기관 산출 사업비 내역',
      a2: 2200000,
      a3: 0,
      a4: 0,
      a5: 20000000,
    },
  ]);
  // 가격 산출 내역서
  const [arrPriceComputationDsctn, setArrPriceComputationDsctn] = useState([
    {
      a1: 'S/W 개발비',
      a2: 0,
    },
    {
      a1: 'H/W 개발비',
      a2: 37200000,
    },
    {
      a1: 'S/W 구입비',
      a2: 4776583,
    },
    {
      a1: 'N/W 구축비',
      a2: 3300000,
    },
    {
      a1: '기타(할인)비용',
      a2: 456600,
    },
    {
      a1: '도입기업의 사업관리 인력 인건비',
      a2: 8952100,
    },
    {
      a1: '클라우드 기반 서비스 이용료',
      a2: 54718700,
    },
  ]);
  // 첨부파일
  const [arrAtchFile, setArrAtchFile] = useState([
    {
      key: 1,
      a1: '1',
      a2: '2022-02-19',
      a3: '스마트공장 구축 원가계산 결과.pdf',
      a4: '553KB',
    },
  ]);

  const lstClick = () => {
    setPageType('LIST');
  };

  const confirmClick = () => {
    Modal.info({ title: '확인완료' });
  };

  const requestModifyClick = () => {
    Modal.info({ title: '수정요청' });
  };

  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <PrmpcCaclDetail01 />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <PrmpcExmntDetail01 arrAtchFileAply={arrAtchFileAply} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <PrmpcCaclDetail03
            arrSbmsnDcmntIdnty={arrSbmsnDcmntIdnty}
            arrSptEvlAtchFile={arrSptEvlAtchFile}
            arrPjtcoDscnt={arrPjtcoDscnt}
            arrPriceComputationDsctn={arrPriceComputationDsctn}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <PrmpcExmntDetail02 />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <PrmpcCalcDetail04 arrAtchFile={arrAtchFile} />
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
            className="eu-usr-btn-process-warning"
            onClick={confirmClick}
            disabled={ojtKey.status !== '기업확인'}
          >
            확인완료
          </Button>
          <Button
            size="large"
            className="eu-usr-btn-process-warning"
            onClick={requestModifyClick}
            disabled={ojtKey.status !== '기업확인'}
          >
            수정요청
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(PrmpcExmntDetailContainer);
