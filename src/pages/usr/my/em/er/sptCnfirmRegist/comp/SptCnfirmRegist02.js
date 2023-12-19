import React, { useState, useEffect } from 'react';
import { Col, Row, Descriptions } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SptCnfirmRegist02 = () => {
  const [ojtEvlRslt, setOjtEvlRslt] = useState({});

  useEffect(() => {
    setOjtEvlRslt({
      a: '90',
      b: '50',
      c: '선정예정',
      d: '80',
      e: '50',
      f: '0',
      g: '85',
      h: '3',
      i: '0',
      j: '88',
      k: '선정예정',
    });
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>평가결과</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions layout="vertical" bordered column={11}>
            <Descriptions.Item label="현장평가 점수">
              {ojtEvlRslt?.a}
            </Descriptions.Item>
            <Descriptions.Item label="현장평가 반영">
              {ojtEvlRslt?.b}
            </Descriptions.Item>
            <Descriptions.Item label="현장평가 결과">
              {ojtEvlRslt?.c}
            </Descriptions.Item>
            <Descriptions.Item label="기술설평가 점수">
              {ojtEvlRslt?.d}
            </Descriptions.Item>
            <Descriptions.Item label="기술성평가 반영">
              {ojtEvlRslt?.e}
            </Descriptions.Item>
            <Descriptions.Item label="일자리평가 점수">
              {ojtEvlRslt?.f}
            </Descriptions.Item>
            <Descriptions.Item label="최종 점수">
              {ojtEvlRslt?.g}
            </Descriptions.Item>
            <Descriptions.Item label="최종 가점">
              {ojtEvlRslt?.h}
            </Descriptions.Item>
            <Descriptions.Item label="뿌리 가점">
              {ojtEvlRslt?.i}
            </Descriptions.Item>
            <Descriptions.Item label="종합 점수">
              {ojtEvlRslt?.j}
            </Descriptions.Item>
            <Descriptions.Item label="기술성평가 결과">
              {ojtEvlRslt?.k}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SptCnfirmRegist02;
