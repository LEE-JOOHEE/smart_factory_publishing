import React, { useState, useEffect } from 'react';
import { Col, Row, Descriptions } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SptCnfirmRegist01 = () => {
  const [ojtEvlBscInfo, setOjtEvlBscInfo] = useState({});

  useEffect(() => {
    setOjtEvlBscInfo({
      a: '상태',
      b: '현장확인',
      c: '평가TEST과제',
      d: '도입기업명',
    });
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>평가 기본정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="제출상태" span={1.5}>
              {ojtEvlBscInfo?.a}
            </Descriptions.Item>
            <Descriptions.Item label="평가구분" span={1.5}>
              {ojtEvlBscInfo?.b}
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={1.5}>
              {ojtEvlBscInfo?.c}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtEvlBscInfo?.d}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SptCnfirmRegist01;
