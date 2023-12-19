import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import BsnsActplnExmnt01 from 'pages/usr/bm/sm/ba/bsnsActplnExmnt/comp/BsnsActplnExmnt01';
import BsnsActplnExmnt02 from 'pages/usr/bm/sm/ba/bsnsActplnExmnt/comp/BsnsActplnExmnt02';

const BsnsActplnExmntContainer = ({ setOjtKey, setPageType }) => {
  // 사업계획서 목록
  const [arrBizPlanDoc, setArrBizPlanDoc] = useState([]);
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick : ' + JSON.stringify(ojtSrchCnd),
    });
  };
  // Onload
  useEffect(() => {
    let tmp = [];

    for (let idx = 1; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: '2022',
        a2: '스마트공장 구축 및 고도화',
        a3: '스마트공장 구축 및 고도화(기초)',
        a4: `공급기업명${idx}`,
        a5: '세종',
        a6:
          idx % 3 === 1
            ? '요청서 등록'
            : idx % 3 === 2
            ? '요청서 송부'
            : '요청서 검토중',
      });
    }
    setArrBizPlanDoc(tmp);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <BsnsActplnExmnt01
            searchClick={searchClick}
            ojtGroupCodes={ojtGroupCodes}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <BsnsActplnExmnt02
            arrBizPlanDoc={arrBizPlanDoc}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(BsnsActplnExmntContainer);
