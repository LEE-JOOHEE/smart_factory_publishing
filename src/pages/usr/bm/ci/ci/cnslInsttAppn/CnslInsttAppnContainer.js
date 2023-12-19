import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';
import CnslInsttAppn01 from 'pages/usr/bm/ci/ci/cnslInsttAppn/comp/CnslInsttAppn01';
import CnslInsttAppn02 from 'pages/usr/bm/ci/ci/cnslInsttAppn/comp/CnslInsttAppn02';
import { getListCommonCd } from 'components/common/Common';

const CnslInsttAppnContainer = () => {
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
        a2: '스마트화 역량강화사업',
        a3: '스마트화 역량강화사업 지원기업',
        a4: '홍길동',
        a5: '도입기업명',
        a6: '컨설팅기관명',
        a7: '협약완료',
      });
    }
    setArrAsmtLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <CnslInsttAppn01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <CnslInsttAppn02 arrAsmtLst={arrAsmtLst} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(CnslInsttAppnContainer);
