import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import SprvisnResultList01 from 'pages/usr/bm/rs/sr/sprvisnResultList/comp/SprvisnResultList01';
import SprvisnResultList02 from 'pages/usr/bm/rs/sr/sprvisnResultList/comp/SprvisnResultList02';

const SprvisnResultListContainer = ({ setOjtKey, setPageType }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  // 감리결과목록
  const [arrSpvsRsltLst, setArrSpvsRsltLst] = useState([]);
  const searchClick = (ojtSrchCnd) => {
    Modal.info({ title: `${JSON.stringify(ojtSrchCnd)}` });
  };
  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));

    let tmp1 = [];
    for (let idx = 1; idx <= 50; idx++) {
      tmp1.push({
        key: idx,
        a1: idx,
        a2: '2022',
        a3: '스마트구축및고도화',
        a4: '2022-R210',
        a5: '(주)도입기업 스마트 구축 및 고도화',
        a6: `(주)도입기업${idx}`,
        a7: `(주)공급기업${idx}`,
        a8: `(주)감리기관${idx}`,
        a9: '착수감리',
        b1: '',
        b2: '승인',
        b3: '조회',
        b4: '등록',
        b5: '승인',
      });
    }
    setArrSpvsRsltLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SprvisnResultList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SprvisnResultList02
            arrSpvsRsltLst={arrSpvsRsltLst}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SprvisnResultListContainer);
