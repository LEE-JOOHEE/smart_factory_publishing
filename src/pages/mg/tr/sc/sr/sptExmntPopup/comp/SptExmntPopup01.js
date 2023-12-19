import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Input,
  Row,
  Select,
  DatePicker,
  ConfigProvider,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const { RangePicker } = DatePicker;

const SptExmntPopup01 = () => {
  //검색조건
  const [ojtAsmtBscInfo, setOjtAsmtBscInfo] = useState({
    a: '2022',
    b: '평가TEST사업',
    c: '2022-xx-xxx-xxxx',
    d: '평가TEST과제',
    e: '도입기업명',
    f: '공급기업명',
  });

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
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>과제 기본정보</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}></Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="사업연도">
              {ojtAsmtBscInfo?.a}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={2}>
              {ojtAsmtBscInfo?.b}
            </Descriptions.Item>
            <Descriptions.Item label="과제번호">
              {ojtAsmtBscInfo?.c}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={2}>
              {ojtAsmtBscInfo?.d}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업">
              {ojtAsmtBscInfo?.e}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업" span={2}>
              {ojtAsmtBscInfo?.f}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>평가결과</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
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

export default SptExmntPopup01;
