import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import SprvisorAppnList01 from 'pages/usr/bm/rs/sa/sprvisorAppnList/comp/SprvisorAppnList01';
import SprvisorAppnList02 from 'pages/usr/bm/rs/sa/sprvisorAppnList/comp/SprvisorAppnList02';

const SprvisorAppnListContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  // 감리목록
  const [arrSpvsLst, setArrSpvsLst] = useState([]);
  const searchClick = (ojtSrchCnd) => {
    Modal.info({ title: `${JSON.stringify(ojtSrchCnd)}` });
  };
  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));

    let tmp1 = [];
    for (let idx = 0; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a1: '2022',
        a2: '스마트공장구축',
        a3: '2021-I5R-000-000000',
        a4: '세종',
        a5: '상세주소',
        a6: '2021-01-01',
        a7: '2021-12-31',
        a8: '(주)감리기관',
        a9: '김감리',
        a10: '2021-06-30',
      });
    }
    setArrSpvsLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SprvisorAppnList01
            searchClick={searchClick}
            ojtGroupCodes={ojtGroupCodes}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SprvisorAppnList02 arrSpvsLst={arrSpvsLst} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SprvisorAppnListContainer);
