import React, { useEffect, useState } from 'react';

import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import AgremPlanList01 from 'pages/mg/am/am/ap/agremPlanList/comp/AgremPlanList01';
import AgremPlanList02 from 'pages/mg/am/am/ap/agremPlanList/comp/AgremPlanList02';

const AgremPlanListContainer = () => {
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
          <AgremPlanList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <AgremPlanList02 arrAgremPlan={arrAgremPlan} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(AgremPlanListContainer);
