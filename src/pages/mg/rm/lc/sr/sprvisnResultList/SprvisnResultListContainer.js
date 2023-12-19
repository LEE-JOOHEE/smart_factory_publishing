import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import SprvisnResultList01 from 'pages/mg/rm/lc/sr/sprvisnResultList/comp/SprvisnResultList01';
import { getListCommonCd } from 'components/common/Common';
import SprvisnResultList02 from 'pages/mg/rm/lc/sr/sprvisnResultList/comp/SprvisnResultList02';

const SprvisnResultListContainer = ({ setOjtKey, setPageType }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  //감리 결과 리스트
  const [arrResult, setArrResult] = useState([
    {
      a1: '승인',
      a2: '승인',
      a3: '승인',
      a4: '',
      a5: '',
      a6: '',
      a7: '',
      a8: '',
      a9: '',
      a10: '',
    },
    {
      a1: '착수계미등록',
      a2: '승인',
      a3: '승인',
      a4: '',
      a5: '',
      a6: '',
      a7: '',
      a8: '',
      a9: '',
      a10: '',
    },
  ]);

  useEffect(() => {
    setOjtKey({});
    setOjtGroupCodes(getListCommonCd({}));
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
          <SprvisnResultList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SprvisnResultList02
            arrResult={arrResult}
            setPageType={setPageType}
            setOjtKey={setOjtKey}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SprvisnResultListContainer);
