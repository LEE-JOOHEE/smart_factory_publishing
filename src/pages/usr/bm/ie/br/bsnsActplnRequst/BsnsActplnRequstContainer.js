import React, { useState } from 'react';
import { Col, Row } from 'antd';
import 'css/CommonUsr.css';

import BsnsActplnRequst01 from 'pages/usr/bm/ie/br/bsnsActplnRequst/comp/BsnsActplnRequst01';
import BsnsActplnRequst02 from 'pages/usr/bm/ie/br/bsnsActplnRequst/comp/BsnsActplnRequst02';

const BsnsActplnRequstContainer = () => {
  //사업계획서번호
  const [bizPlanNo, setBizPlanNo] = useState('');

  //페이지 구분(LIST, RECP)
  const [pageMode, setPageMode] = useState('LIST');

  return (
    <>
      {pageMode === 'LIST' ? (
        <Row className="eu-usr-row-page-comp-layout">
          <Col span={24}>
            <BsnsActplnRequst01
              setBizPlanNo={setBizPlanNo}
              setPageMode={setPageMode}
            />
          </Col>
        </Row>
      ) : (
        <Row className="eu-usr-row-page-comp-layout">
          <Col span={24}>
            <BsnsActplnRequst02
              bizPlanNo={bizPlanNo}
              setPageMode={setPageMode}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default React.memo(BsnsActplnRequstContainer);
