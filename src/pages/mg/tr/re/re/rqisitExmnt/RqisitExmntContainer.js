import React, { useEffect, useState } from 'react';

import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import RqisitExmnt01 from 'pages/mg/tr/re/re/rqisitExmnt/comp/RqisitExmnt01';
import RqisitExmnt02 from 'pages/mg/tr/re/re/rqisitExmnt/comp/RqisitExmnt02';

const RqisitExmntContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //리스트
  const [arrRqisitExmnt, setArrRqisitExmnt] = useState([]);

  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));

    setArrRqisitExmnt(() => {
      const newArr = [...Array(5).keys()].map((i) => ({
        a1: '2022',
        a2: '충북',
        a3: '스마트공장 구축\n및 고도화',
        a4: '스마트공장 구축 및\n고도화 기초(코디지원)',
        a5: '2022-12N-016-000001',
        a6: '스마트공장 구축\n및 고도화 기초(코디지원)',
        a7: 'Y',
        a8: 'N',
        a9: '',
        a10: '',
        a11: '',
        a12: '',
        a13: '',
        a14: '',
        a15: '',
      }));
      return newArr;
    });
  }, []);

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
          <RqisitExmnt01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <RqisitExmnt02 arrRqisitExmnt={arrRqisitExmnt} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(RqisitExmntContainer);
