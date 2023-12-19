import React, { useEffect, useState } from 'react';

import { Col, Row, Tabs } from 'antd';
import 'css/Common.css';
import PrmpcCalcExmnt01 from 'pages/mg/tr/cc/pe/prmpcCalcExmnt/comp/PrmpcCalcExmnt01';
import PrmpcCalcExmnt02 from 'pages/mg/tr/cc/pe/prmpcCalcExmnt/comp/PrmpcCalcExmnt02';
import { getListCommonCd } from 'components/common/Common';
import { Modal } from 'antd/lib';

const PrmpcCalcExmntContainer = ({ setOjtKey, setPageType }) => {
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
      a7: '원가계산기관명1',
      a8: '승인',
      a9: '-',
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
          <PrmpcCalcExmnt01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <PrmpcCalcExmnt02
            arrTask={arrTask}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(PrmpcCalcExmntContainer);
