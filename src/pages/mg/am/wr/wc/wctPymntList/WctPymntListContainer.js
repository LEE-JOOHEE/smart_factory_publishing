import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import WctPymntList02 from 'pages/mg/am/wr/wc/wctPymntList/comp/WctPymntList02';
import WctPymntList01 from 'pages/mg/am/wr/wc/wctPymntList/comp/WctPymntList01';

const WctPymntListContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  //사업  리스트
  const [arrTask, setArrTask] = useState([
    {
      key: '1',
      aa1: '...',
      aa2: '...',
      aa3: '...',
      aa4: '...',
      aa5: '...',
      aa6: '...',
      aa7: '...',
      aa8: '...',
      a2: '63,565,534',
      a3: '0',
      a4: '0',
      a5: '63,565,534',
      a6: '신한은행',
      a7: '111-111-111',
      a8: '홍길동',
      a9: '정상',
      a10: '정상',
      a11: '2021-06-17',
      a12: '',
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
          <WctPymntList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <WctPymntList02 arrTask={arrTask} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(WctPymntListContainer);
