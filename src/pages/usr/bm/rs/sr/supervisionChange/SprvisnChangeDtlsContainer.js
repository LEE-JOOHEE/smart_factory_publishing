import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import SprvisnChangeDtls01 from 'pages/usr/bm/rs/sr/supervisionChange/comp/SprvisnChangeDtls01';

const SprvisnChangeDtlsContainer = ({ setOjtKey, setPageType }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const [arrAsmtLst, setArrAsmtLst] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('searchClick ojtSrchCnd : ', ojtSrchCnd);
  };

  const lstClick = () => {
    setPageType('SPRVISN_CHANGE_LIST');
  };
  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));
    let tmp1 = [];

    for (let idx = 0; idx < 20; idx++) {
      tmp1.push({
        key: idx,
        a1: '2022',
        a2: '스마트공장구축',
        a3: '(주)도입기업1_스마트공장구축',
        a4: '(주)도입기업1',
        a5: '(주)공급기업1',
        a6: '신청',
        a7: '조회',
      });
    }
    setArrAsmtLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SprvisnChangeDtls01
            setPageType={setPageType}
            setOjtKey={setOjtKey}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          <Button
            type="primary"
            size="large"
            className="eu-btn-process-default"
            onClick={lstClick}
          >
            목록
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SprvisnChangeDtlsContainer);
