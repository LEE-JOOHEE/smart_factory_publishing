import React, { useState } from 'react';
import { Col, Row, Descriptions, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const CnfirmInsttDetail01 = () => {
  const [ojtPrgrsStps, setOjtPrgrsStps] = useState({ a: '기업수준확인 완료' });
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={24}>
          <TitleComp>진행단계</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="진행단계" span={3}>
              {ojtPrgrsStps.a}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default CnfirmInsttDetail01;
