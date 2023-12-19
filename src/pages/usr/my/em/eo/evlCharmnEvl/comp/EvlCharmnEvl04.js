import React, { useState, useEffect } from 'react';
import { Col, Row, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const { TextArea } = Input;

const EvlCharmnEvl04 = () => {
  const [evlOpnn, setEvlOpnn] = useState('');

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>평가의견</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <TextArea
            onChange={(e) => setEvlOpnn(e.target.value)}
            placeholder={'평갸위원의 평가의견'}
          />
        </Col>
      </Row>
    </>
  );
};

export default EvlCharmnEvl04;
