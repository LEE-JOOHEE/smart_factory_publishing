import React, { useState } from 'react';
import { Col, Row, Descriptions } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const TaskReqstRslt01 = () => {
  //성과지표정보
  const [ojtRsltIdxInfo, setOjtRsltIdxInfo] = useState({
    a1: '2022-12C-018-000000',
    a2: '기업명',
    a3: '2022년 스마트공장 고도화',
    a4: 'ICT연계 간이 생산시스템',
    a5: '공급기업 법인명',
    a6: '2022',
  });
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>기본정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={2}>
              {ojtRsltIdxInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="기업명">
              {ojtRsltIdxInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={2}>
              {ojtRsltIdxInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="도입시스템">
              {ojtRsltIdxInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업명" span={2}>
              {ojtRsltIdxInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="사업년도">
              {ojtRsltIdxInfo?.a6}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default TaskReqstRslt01;
