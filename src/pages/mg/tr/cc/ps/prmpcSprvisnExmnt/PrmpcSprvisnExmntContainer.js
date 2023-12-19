import React, { useEffect, useState } from 'react';

import { Col, Row, Tabs } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import { Modal } from 'antd/lib';
import PrmpcSprvisnExmnt01 from 'pages/mg/tr/cc/ps/prmpcSprvisnExmnt/comp/PrmpcSprvisnExmnt01';
import PrmpcSprvisnExmnt02 from 'pages/mg/tr/cc/ps/prmpcSprvisnExmnt/comp/PrmpcSprvisnExmnt02';

const PrmpcSprvisnExmntContainer = ({ setOjtKey, setPageType }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  //사업  리스트
  const [arrTask, setArrTask] = useState([
    {
      key: '1',
      a1: '2022',
      a2: '부산',
      a3: '세부공고명1',
      a4: '과제명1',
      a5: '도입기업명1',
      a6: '공급기업명1',
      a7: '-',
      a8: '2022-07-04',
      a9: '중앙대학교 산학협력단',
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
          <PrmpcSprvisnExmnt01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <PrmpcSprvisnExmnt02
            arrTask={arrTask}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(PrmpcSprvisnExmntContainer);
