import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';

import { getListCommonCd } from 'components/common/Common';
import SuplyEntrprsMtchg01 from 'pages/usr/bm/sm/sr/suplyEntrprsMtchg/comp/SuplyEntrprsMtchg01';
import SuplyEntrprsMtchg02 from 'pages/usr/bm/sm/sr/suplyEntrprsMtchg/comp/SuplyEntrprsMtchg02';

const SuplyEntrprsMtchgContainer = (ojtSrchCnd) => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  // 검색결과
  const [ojtSrchRslt, setOjtSrchRslt] = useState({});
  // 공급기업목록
  const [arrSplyEntLst, setArrSplyEntLst] = useState([]);

  const searchClick = () => {
    Modal.info({
      title: 'searchClick : ' + JSON.stringify(ojtSrchCnd),
    });
    setOjtSrchRslt({
      a1: '123-45-67890',
      a2: 'LC120521',
      a3: 'LC120522',
      a4: 'LC125023',
      a5: '세종특별자치시 중앙집현7로',
      a6: 'www.abc.co.kr',
      a7: '홍길동',
      a8: '1990-08-10',
      a9: '0명',
      b1: '010-1111-1111',
      b2: '02-1111-1111',
      b3: 'abc@naver.com',
      b4: '아무개',
      b5: '스마트공장팀',
      b6: '선임',
      b7: '010-2222-2222',
      b8: '02-2222-2222',
      b9: 'def@naver.com',
    });
  };

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a1', 'a2']));

    let tmp = [];

    for (let idx = 1; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: '2022-12A-01',
        a2: '2022',
        a3: '스마트공장 구축 및 고도화',
        a4: '스마트공장 구축 및 고도화 사업(신규구축)',
        a5: '2022-07-18',
        a6: '2022-10-05',
        a7: 'Y',
        a8: 'N',
      });
    }
    setArrSplyEntLst(tmp);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SuplyEntrprsMtchg01
            searchClick={searchClick}
            ojtGroupCodes={ojtGroupCodes}
            ojtSrchRslt={ojtSrchRslt}
            arrSplyEntLst={arrSplyEntLst}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SuplyEntrprsMtchg02 arrSplyEntLst={arrSplyEntLst} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SuplyEntrprsMtchgContainer);
