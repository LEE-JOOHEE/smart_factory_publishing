import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';

import ObjcReqst01 from 'pages/usr/bm/or/or/objcReqst/comp/ObjcReqst01';
import ObjcReqst02 from 'pages/usr/bm/or/or/objcReqst/comp/ObjcReqst02';

const ObjcReqstContainer = () => {
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

    let idx = 1;
    tmp.push({
      key: idx,
      a1: idx,
      a2: '사업명' + idx,
      a3: 'AAA1234' + idx,
      a4: '1차_본사업_' + idx,
      a5: '선정평가',
      a6: '탈락',
      a7: '2022-10-0' + idx,
      a8: '신청',
      a9: '2022-11-03',
      a10: '작성중',
    });
    idx = 2;
    tmp.push({
      key: idx,
      a1: idx,
      a2: '사업명' + idx,
      a3: 'AAA1234' + idx,
      a4: '1차_본사업_' + idx,
      a5: '선정평가',
      a6: '탈락',
      a7: '2022-10-0' + idx,
      a8: '신청',
      a9: '2022-11-03',
      a10: '신청완료',
    });
    idx = 3;
    tmp.push({
      key: idx,
      a1: idx,
      a2: '사업명' + idx,
      a3: 'AAA1234' + idx,
      a4: '1차_본사업_' + idx,
      a5: '선정평가',
      a6: '탈락',
      a7: '2022-10-0' + idx,
      a8: '결과확정',
      a9: '2022-11-03',
      a10: '결과확정',
    });

    setArrObjcAply(tmp);
  }, []);

  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <ObjcReqst01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <ObjcReqst02 arrObjcAply={arrObjcAply} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(ObjcReqstContainer);
