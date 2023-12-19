import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import WctReqstList01 from 'pages/mg/am/wr/wr/wctReqstList/comp/WctReqstList01';
import { getListCommonCd } from 'components/common/Common';
import WctReqstList02 from 'pages/mg/am/wr/wr/wctReqstList/comp/WctReqstList02';

const WctReqstListContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  //사업  리스트
  const [arrTask, setArrTask] = useState([
    {
      key: '1',
      a1: '1',
      a2: '2021',
      a3: '세종',
      a31: '2021년 스마트공장 고도화',
      a4: '',
      a5: '',
      a6: '',
      a7: '',
      a8: '',
      a9: '',
      a10: '지급완료',
      a11: '승인',
      a12: '반려',
      a13: '2021-06-17',
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
          <WctReqstList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <WctReqstList02 arrTask={arrTask} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(WctReqstListContainer);
