import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import EvlIxManage01 from 'pages/smg/sm/em/em/evlIxManage/comp/EvlIxManage01';
import EvlIxManage02 from 'pages/smg/sm/em/em/evlIxManage/comp/EvlIxManage02';

import { getListCommonCd } from 'components/common/Common';

const EvlIxManageContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //평가지표
  const [arrEvlIx, setArrEvlIx] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
    Modal.info({
      title: 'searchClick',
    });
  };

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b']));

    let tmp1 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp1.push({
        key: idx,
        a1: '2022',
        a2: '스마트공장(기초)',
        a3: '평가위원평가',
        a4: 'EI00015' + idx,
        a5: '스마트공장 고도화 사업 평가표',
        a6: '선정평가',
        a7: '대면',
        a8: 'Y',
        a9: '운영자',
      });
    }
    setArrEvlIx(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <EvlIxManage01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <EvlIxManage02 arrEvlIx={arrEvlIx} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(EvlIxManageContainer);
