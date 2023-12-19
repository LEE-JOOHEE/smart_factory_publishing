import React, { useEffect, useState } from 'react';

import { Col, Row, Tabs } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import { Modal } from 'antd/lib';
import AgremCnclsList01 from 'pages/mg/am/am/ac/agremCnclsList/comp/AgremCnclsList01';
import AgremCnclsList02 from 'pages/mg/am/am/ac/agremCnclsList/comp/AgremCnclsList02';

const AgremCnclsListContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  //사업  리스트
  const [arrTask, setArrTask] = useState([
    {
      key: '1',
      a1: '2022',
      a2: '2021-293X-123',
      a3: '(주)도입기업_스마트\n구축및고도화1',
      a4: '세종',
      a5: '도입기업명1',
      a6: '미대상',
      a7: '접수완료',
      a8: '3/4',
      a9: '미완료',
      a10: '',
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
          <AgremCnclsList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <AgremCnclsList02 arrTask={arrTask} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(AgremCnclsListContainer);
