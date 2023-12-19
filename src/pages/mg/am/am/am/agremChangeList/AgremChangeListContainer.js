import React, { useEffect, useState } from 'react';

import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import AgremChangeList01 from 'pages/mg/am/am/am/agremChangeList/comp/AgremChangeList01';
import AgremChangeList02 from 'pages/mg/am/am/am/agremChangeList/comp/AgremChangeList02';

const AgremChangeListContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //리스트
  const [arrAgremPlan, setArrAgremPlan] = useState([]);

  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));
    setArrAgremPlan(() => {
      const newArr = [...Array(5).keys()].map((i) => ({
        a1: '2021',
        a2: '2021년 스마트공장 기초',
        a3: '유클리드소프트_2021년 스마트공장 기초',
        a4: '유클리드소프트 ',
        a5: '(주)공급기업',
        a6: '',
        a7: '',
        a8: '',
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
          <AgremChangeList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <AgremChangeList02 arrAgremPlan={arrAgremPlan} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(AgremChangeListContainer);
