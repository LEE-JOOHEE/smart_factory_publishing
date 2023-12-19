import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Descriptions, Input } from 'antd/lib';

const PropseRequstDetail01 = ({ ojtGroupCodes, searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a3: '미등록',
    a4: '스마트공장 구축 및 고도화 사업(신규구축)',
    a5: '20220601 ~ 20221130',
    a6: '2022-12A-01-000000',
    a7: '도입과제',
    a8: '과제명1',
    a9: '강형구',
    a10: '관리부',
    a11: '과장',
    a12: '032-111-1111',
    a13: '010-1111-1111',
    a14: 'abc@naver.com',
  });

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>검토 정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="검토현황" span={3}>
              {ojtSrchCnd?.a3}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>과제기본정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="세부공고명" span={1.5}>
              {ojtSrchCnd?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="수행기간" span={1.5}>
              {ojtSrchCnd?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={1.5}>
              {ojtSrchCnd?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="과제구분" span={1.5}>
              {ojtSrchCnd?.a7}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={3}>
              {ojtSrchCnd?.a8}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>실무자/담당자</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="성명" span={1.5}>
              {ojtSrchCnd?.a9}
            </Descriptions.Item>
            <Descriptions.Item label="부서" span={1.5}>
              {ojtSrchCnd?.a10}
            </Descriptions.Item>
            <Descriptions.Item label="직위" span={1.5}>
              {ojtSrchCnd?.a11}
            </Descriptions.Item>
            <Descriptions.Item label="전화번호" span={1.5}>
              {ojtSrchCnd?.a12}
            </Descriptions.Item>
            <Descriptions.Item label="핸드폰" span={1.5}>
              {ojtSrchCnd?.a13}
            </Descriptions.Item>
            <Descriptions.Item label="이메일" span={1.5}>
              {ojtSrchCnd?.a14}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};
export default PropseRequstDetail01;
