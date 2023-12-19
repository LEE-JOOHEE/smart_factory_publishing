import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import RcmsDtaList01 from 'pages/mg/am/wr/rc/rcmsDtaList/comp/RcmsDtaList01';
import RcmsDtaList02 from 'pages/mg/am/wr/rc/rcmsDtaList/comp/RcmsDtaList02';

const RcmsDtaListContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  //사업  리스트
  const [arrTask, setArrTask] = useState([
    {
      key: '1',
      a1: '1차_스마트공장구축및고도화(고도화1)_본사업신청(코디미지원)',
      a2: '2021-I5S-033-000001',
      a3: '유클리드10',
      a4: '유클리드시스',
      a5: '중간점검전문가배정',
    },
  ]);

  //공통코드 초기화
  useEffect(() => {
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
          <RcmsDtaList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <RcmsDtaList02 arrTask={arrTask} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(RcmsDtaListContainer);
