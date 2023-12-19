import React, { useState } from 'react';
import { Col, Row, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const { TextArea } = Input;

const EvlCharmnEvl05 = () => {
  const [evlGnrlzOpnn, setEvlGnrlzOpnn] = useState('');
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>평가위원장 종합의견</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <TextArea
            onChange={(e) => setEvlGnrlzOpnn(e.target.value)}
            placeholder={'평가위원장의 종합의견'}
          />
        </Col>
      </Row>
    </>
  );
};

export default EvlCharmnEvl05;
