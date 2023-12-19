import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import ObjcProcessSttus01 from 'pages/mg/em/or/op/objcProcessSttus/comp/ObjcProcessSttus01';
import ObjcProcessSttus02 from 'pages/mg/em/or/op/objcProcessSttus/comp/ObjcProcessSttus02';
import ObjcProcessSttus03 from 'pages/mg/em/or/op/objcProcessSttus/comp/ObjcProcessSttus03';
import ObjcProcessSttus04 from 'pages/mg/em/or/op/objcProcessSttus/comp/ObjcProcessSttus04';
import ObjcProcessSttus05 from 'pages/mg/em/or/op/objcProcessSttus/comp/ObjcProcessSttus05';
import ObjcProcessSttus06 from 'pages/mg/em/or/op/objcProcessSttus/comp/ObjcProcessSttus06';

const ObjcProcessSttusContainer = () => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  // 이의신청목록
  const [arrObjcAply, setArrObjcAply] = useState([]);

  //이의신청목록 클릭 시 한행 데이터
  const [ojtSelectedObjcAply, setOjtSelectedObjcAply] = useState({});

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a1', 'a2']));

    let tmp = [];
    for (let idx = 1; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: '2022',
        a2: 'TEST사업' + idx,
        a3: '2021-15R-000-00000' + idx,
        a4: '테스트과제1',
        a5: '공급기업',
        a6: '평가결과 이의신청',
        a7: '2022-09-1' + idx,
        a8: idx === 1 ? '신청' : idx === 2 ? '접수' : '검토결과확정',
        a9: idx > 1 ? '2022-09-1' + idx : '',
        a10: idx === 1 ? '' : idx === 2 ? '' : '불허(원안확정)',
      });
    }
    setArrObjcAply(tmp);
  }, []);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick : ' + JSON.stringify(ojtSrchCnd),
    });
  };

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ObjcProcessSttus01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ObjcProcessSttus02
            arrObjcAply={arrObjcAply}
            setOjtSelectedObjcAply={setOjtSelectedObjcAply}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ObjcProcessSttus03 ojtSelectedObjcAply={ojtSelectedObjcAply} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ObjcProcessSttus04 ojtSelectedObjcAply={ojtSelectedObjcAply} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ObjcProcessSttus05 ojtSelectedObjcAply={ojtSelectedObjcAply} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ObjcProcessSttus06 ojtSelectedObjcAply={ojtSelectedObjcAply} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(ObjcProcessSttusContainer);
