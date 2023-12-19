import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';

import ObjcReqstRcept01 from 'pages/mg/em/or/or/objcReqstRcept/comp/ObjcReqstRcept01';
import ObjcReqstRcept02 from 'pages/mg/em/or/or/objcReqstRcept/comp/ObjcReqstRcept02';

const ObjcReqstRceptContainer = () => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  // 이의신청목록
  const [arrObjcAply, setArrObjcAply] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick : ' + JSON.stringify(ojtSrchCnd),
    });
  };

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a1', 'a2']));

    let tmp = [];
    for (let idx = 1; idx <= 50; idx++) {
      tmp.push({
        key: idx,
        a1: idx,
        a2: '2022',
        a3: 'TEST사업' + idx,
        a4: '2021-15R-000-00000' + idx,
        a5: '테스트과제1',
        a6: '평가결과 이의신청',
        a7: '신청자' + idx,
        a8: '2022-09-1' + idx,
        a9: idx === 1 ? '신청' : idx === 2 ? '접수' : '검토결과확정',
        a10: idx > 1 ? '2022-09-1' + idx : '',
        a11: idx === 1 ? '접수' : idx === 2 ? '결과등록' : '재평가',
      });
    }
    setArrObjcAply(tmp);
  }, []);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ObjcReqstRcept01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ObjcReqstRcept02 arrObjcAply={arrObjcAply} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(ObjcReqstRceptContainer);
