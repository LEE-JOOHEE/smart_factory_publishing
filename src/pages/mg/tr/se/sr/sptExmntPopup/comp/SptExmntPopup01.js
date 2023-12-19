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

const SptExmntPopup01 = () => {
  //검색조건
  const [ojtAsmtBscInfo, setOjtAsmtBscInfo] = useState({
    a: '2022',
    b: '평가TEST사업',
    c: '2022-xx-xxx-xxxx',
    d: '평가TEST과제',
    e: '도입기업명',
    f: '공급기업명',
    g: '도입기업대표기업',
    h: '도입기업대표기업명',
  });

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
            <Descriptions.Item label="기업구분">
              {ojtAsmtBscInfo?.g}
            </Descriptions.Item>
            <Descriptions.Item label="기업명" span={2}>
              {ojtAsmtBscInfo?.h}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SptExmntPopup01;
