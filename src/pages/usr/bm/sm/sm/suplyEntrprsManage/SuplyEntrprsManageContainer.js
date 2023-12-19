import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';

import SuplyEntrprsManage01 from 'pages/usr/bm/sm/sm/suplyEntrprsManage/comp/SuplyEntrprsManage01';
import SuplyEntrprsManage02 from 'pages/usr/bm/sm/sm/suplyEntrprsManage/comp/SuplyEntrprsManage02';

const SuplyEntrprsManageContainer = () => {
  // 검색결과
  const [ojtSrchRslt, setOjtSrchRslt] = useState({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '',
    a9: '',
    a10: '',
  });
  // 구축실적목록
  const [arrCnstcPrfmnc, setArrCnstcPrfmnc] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick : ' + JSON.stringify(ojtSrchCnd),
    });
    setOjtSrchRslt({
      a1: '공급기업소재지',
      a2: '솔루션',
      a3: '레벨',
      a4: '업종',
      a5: '사업분류',
      a6: '세부공고명',
      a7: '구축결과',
      a8: '종사자규모',
      a9: '매출규모',
      a10: '구축건수 기준 0% 이상',
    });
  };

  // Onload
  useEffect(() => {
    let tmp = [];
    for (let idx = 1; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: idx,
        a2: '공급기업명_' + idx,
        a3: '0.0',
        a4: '0.0',
        a5: '0.0',
        a6: '0.0',
        a7: '0.0',
        a8: '0.0',
        a9: '0.0',
        a10: '0.0',
      });
    }
    setArrCnstcPrfmnc(tmp);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SuplyEntrprsManage01
            searchClick={searchClick}
            arrCnstcPrfmnc={arrCnstcPrfmnc}
            ojtSrchRslt={ojtSrchRslt}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SuplyEntrprsManage02 arrCnstcPrfmnc={arrCnstcPrfmnc} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SuplyEntrprsManageContainer);
