import React, { useEffect, useState } from 'react';
import { Col, Modal, Row, Tabs } from 'antd';
import 'css/Common.css';

import { getListCommonCd } from 'components/common/Common';
import TechResultRegist01 from 'pages/mg/tr/te/er/techResultRegist/comp/TechResultRegist01';
import TechResultRegist02 from 'pages/mg/tr/te/er/techResultRegist/comp/TechResultRegist02';
import TechResultRegist03 from 'pages/mg/tr/te/er/techResultRegist/comp/TechResultRegist03';
import TechResultRegist04 from 'pages/mg/tr/te/er/techResultRegist/comp/TechResultRegist04';
import TechResultRegist05 from 'pages/mg/tr/te/er/techResultRegist/comp/TechResultRegist05';

const TechResultRegistContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //분과구성
  const [arrScmitCmpstn, setArrScmitCmpstn] = useState([]);

  const [activeTabKey, setActiveTabKey] = useState(1);

  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
    Modal.info({
      title: 'searchClick',
    });
  };

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b']));

    let tmp = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp.push({
        key: idx,
        a: idx,
        b: '사업명',
        c: 'TP명',
        d: '위원회명',
        e: '분과1',
        f: '중소기업기술정보진흥원',
        g: '2022-10-01',
        h: '3',
        i: '5',
        j: '0',
        k: '대기',
        l: 'N',
      });
    }
    setArrScmitCmpstn(tmp);
  }, []);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <TechResultRegist01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <TechResultRegist02 arrScmitCmpstn={arrScmitCmpstn} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Tabs
            onChange={onTabChange}
            className="eu-content-tab"
            // type="card"
            activeKey={activeTabKey}
            items={[
              {
                label: '평가시작',
                key: 1,
                children: (
                  <TechResultRegist03 setActiveTabKey={setActiveTabKey} />
                ),
              },
              {
                label: '평가진행현황',
                key: 2,
                children: (
                  <TechResultRegist04 setActiveTabKey={setActiveTabKey} />
                ),
              },
              {
                label: '평가결과등록',
                key: 3,
                children: (
                  <TechResultRegist05 setActiveTabKey={setActiveTabKey} />
                ),
              },
            ]}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(TechResultRegistContainer);
