import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import LevelCnfrmnList01 from 'pages/usr/bm/aw/lc/levelConfirmation/comp/LevelCnfrmnList01';
import LevelCnfrmnList02 from 'pages/usr/bm/aw/lc/levelConfirmation/comp/LevelCnfrmnList02';

const LevelCnfrmnListContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const [arrAsmtLst, setArrAsmtLst] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('searchClick ojtSrchCnd : ', ojtSrchCnd);
  };

  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a1: '2020',
        a2: '3000090005',
        a3: '스마트공장 수준확인 사업',
        a4: '도입기업',
        a5: '확인기관',
        a6: '재발급',
        a7: '성공',
        a8: '2022-11-24~2025-11-24',
        a9: '출력',
      });
    }
    setArrAsmtLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <LevelCnfrmnList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <LevelCnfrmnList02 arrAsmtLst={arrAsmtLst} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(LevelCnfrmnListContainer);
