import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import LevelCnfrmnPresentn01 from 'pages/usr/bm/aw/lp/levelPresentation/comp/LevelCnfrmnPresentn01';
import LevelCnfrmnPresentn02 from 'pages/usr/bm/aw/lp/levelPresentation/comp/LevelCnfrmnPresentn02';

const LevelCnfrmnPresentnContainer = ({ setOjtKey, setPageType }) => {
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
        a2: '2021-R213',
        a3: '스마트화수준확인',
        a4: '스마트공장 수준확인-참여기업모집',
        a5: '(주)_도입기업',
        a6: '김심사',
        a7: '미등록',
        a8: '',
      });
    }
    setArrAsmtLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <LevelCnfrmnPresentn01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <LevelCnfrmnPresentn02
            arrAsmtLst={arrAsmtLst}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(LevelCnfrmnPresentnContainer);
