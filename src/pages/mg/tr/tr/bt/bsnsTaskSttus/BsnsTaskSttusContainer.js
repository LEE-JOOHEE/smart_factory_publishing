import React, { useEffect, useState } from 'react';

import { Col, Row, Tabs } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import { Modal } from 'antd/lib';
import BsnsTaskSttus01 from 'pages/mg/tr/tr/bt/bsnsTaskSttus/comp/BsnsTaskSttus01';
import BsnsTaskSttus02 from 'pages/mg/tr/tr/bt/bsnsTaskSttus/comp/BsnsTaskSttus02';

const BsnsTaskSttusContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //사업  리스트
  const [arrTask, setArrTask] = useState([
    {
      key: '1',
      a1: '2022',
      a2: '스마트공장 구축 및 고도화',
      a3: '스마트공장 구축 및 고도화',
      a4: '2022-I6F-085-000036',
      a5: '과제명1',
      a6: '도입기업명1',
      a7: '-',
      a8: '미등록',
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
          <BsnsTaskSttus01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <BsnsTaskSttus02 arrTask={arrTask} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(BsnsTaskSttusContainer);
