import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import SprvisnChangeDetail01 from 'pages/usr/bm/rs/sr/supervisionChange/comp/SprvisnChangeDetail01';

const SprvisnChangeDetailContainer = ({ setOjtKey, setPageType }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const [ojtSprvisnInfo, setOjtSprvisnInfo] = useState({});

  const [data, setData] = useState();

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('searchClick ojtSrchCnd : ', ojtSrchCnd);
  };
  const test = useRef();

  const saveClick = () => {
    console.log(data);
    // setPageType('SPRVISN_CHANGE_LIST');
  };
  const sbmsnCmptnClick = () => {
    setPageType('SPRVISN_CHANGE_LIST');
  };
  const rtrcnClick = () => {
    setPageType('SPRVISN_CHANGE_DTLS');
  };
  const lstClick = () => {
    setPageType('SPRVISN_CHANGE_LIST');
  };
  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));

    setOjtSprvisnInfo({
      a1: '2021',
      a2: '스마트공장구축',
      a3: '2021-I5R-000-000000',
      a4: '(주)도입기업1_스마트공장구축',
      a5: '(주)도입기업1',
      a6: '(주)공급기업1',
    });
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <SprvisnChangeDetail01
            setData={setData}
            ojtSprvisnInfo={ojtSprvisnInfo}
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
            onClick={saveClick}
          >
            저장
          </Button>
          <Button
            type="primary"
            size="large"
            className="eu-btn-process-default"
            onClick={sbmsnCmptnClick}
          >
            제출완료
          </Button>
          <Button
            type="primary"
            size="large"
            className="eu-btn-process-error"
            onClick={rtrcnClick}
          >
            취소
          </Button>
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

export default React.memo(SprvisnChangeDetailContainer);
