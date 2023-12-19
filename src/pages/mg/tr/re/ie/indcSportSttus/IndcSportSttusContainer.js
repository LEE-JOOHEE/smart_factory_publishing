import React, { useEffect, useState } from 'react';

import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import IndcSportSttus01 from 'pages/mg/tr/re/ie/indcSportSttus/comp/IndcSportSttus01';
import IndcSportSttus02 from 'pages/mg/tr/re/ie/indcSportSttus/comp/IndcSportSttus02';

const IndcSportSttusContainer = () => {
  //도입기업 지원자 리스트
  const [arrIndcSportSttus, setArrIndcSportSttus] = useState([
    {
      key: '1',
      a1: '2020',
      a2: '2020년 스마트화 역량강화사업 지원기업(기본컨설팅)',
      a3: '협약완료',
      a4: '유클리드소프트',
      a5: '구축중 컨설팅',
      a6: '1234567890',
      a7: '채은경',
      a8: '-',
    },
    {
      key: '2',
      a1: '2020',
      a2: '데이터인프라구축 AI 솔루션 실증 지원사업',
      a3: '사업종료(성공)',
      a4: '유클리드소프트',
      a5: '기초',
      a6: '1234567890',
      a7: '채은경',
      a8: '-',
    },
  ]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('searchClick ojtSrchCnd : ', ojtSrchCnd);
  };

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <IndcSportSttus01 searchClick={searchClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <IndcSportSttus02 arrIndcSportSttus={arrIndcSportSttus} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(IndcSportSttusContainer);
