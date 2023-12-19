import React, { useState } from 'react';
import { Col, Row, Descriptions, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const PrmpcCalcExmnt05 = () => {
  const [ojtPrmpcRqstDscntAmtDsctn, setOjtPrmpcRqstDscntAmtDsctn] = useState({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
  });
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>원가 의뢰 및 할인금액 내역</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions layout="vertical" bordered column={4}>
            <Descriptions.Item label="최초 의뢰 금액">
              <Input
                placeholder="최초 의뢰 금액"
                onChange={(e) => {
                  ojtChange(e.target.value, 'a', setOjtPrmpcRqstDscntAmtDsctn);
                }}
                value={ojtPrmpcRqstDscntAmtDsctn?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="최초 의뢰 할인 금액">
              <Input
                placeholder="최초 의뢰 할인 금액"
                onChange={(e) => {
                  ojtChange(e.target.value, 'b', setOjtPrmpcRqstDscntAmtDsctn);
                }}
                value={ojtPrmpcRqstDscntAmtDsctn?.b}
              />
            </Descriptions.Item>
            <Descriptions.Item label="최종 승인 금액">
              <Input
                placeholder="최종 승인 금액"
                onChange={(e) => {
                  ojtChange(e.target.value, 'c', setOjtPrmpcRqstDscntAmtDsctn);
                }}
                value={ojtPrmpcRqstDscntAmtDsctn?.c}
              />
            </Descriptions.Item>
            <Descriptions.Item label="최종 승인 할인 금액">
              <Input
                placeholder="최종 승인 할인 금액"
                onChange={(e) => {
                  ojtChange(e.target.value, 'd', setOjtPrmpcRqstDscntAmtDsctn);
                }}
                value={ojtPrmpcRqstDscntAmtDsctn?.d}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default PrmpcCalcExmnt05;
