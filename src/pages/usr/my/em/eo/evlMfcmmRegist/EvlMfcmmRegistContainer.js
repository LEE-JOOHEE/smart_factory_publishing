import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';
import EvlCharmnEvl01 from 'pages/usr/my/em/eo/evlCharmnEvl/comp/EvlCharmnEvl01';
import EvlCharmnEvl02 from 'pages/usr/my/em/eo/evlCharmnEvl/comp/EvlCharmnEvl02';
import EvlCharmnEvl03 from 'pages/usr/my/em/eo/evlCharmnEvl/comp/EvlCharmnEvl03';
import EvlCharmnEvl04 from 'pages/usr/my/em/eo/evlCharmnEvl/comp/EvlCharmnEvl04';

const EvlMfcmmRegistContainer = ({ ojtKey, setPageType }) => {
  const [arrAsmtInfo, setArrAsmtInfo] = useState([]);

  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });

    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: '도입기업명',
        b: '공급기업명',
        c: `과제명${idx}`,
        d: '13:00',
        e: idx,
        f: '80',
        g: '100',
      });
    }
    setArrAsmtInfo(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <EvlCharmnEvl01 setPageType={setPageType} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <EvlCharmnEvl02 arrAsmtInfo={arrAsmtInfo} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <EvlCharmnEvl03 />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <EvlCharmnEvl04 />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(EvlMfcmmRegistContainer);
