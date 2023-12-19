import React, { useState } from 'react';
import { Col, Row, Descriptions, Input, Button, Space, Select } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const AgremChangeOnslf04 = () => {
  const [ojtIndcEntRprsv, setOjtIndcEntRprsv] = useState({
    a1: '신한은행',
    a2: '12345678',
    a3: '홍길동',
    b1: '전체',
    b2: '',
    b3: '',
  });
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>변경 전 사업비 계좌</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label={'은행'} span={1}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a1', setOjtIndcEntRprsv);
                }}
                options={[
                  {
                    value: '신한은행',
                    label: '신한은행',
                  },
                ]}
                value={ojtIndcEntRprsv?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item label={'계좌번호'} span={1}>
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'a2', setOjtIndcEntRprsv);
                }}
                value={ojtIndcEntRprsv?.a2}
              />
            </Descriptions.Item>
            <Descriptions.Item label={'예금주'} span={1}>
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'a3', setOjtIndcEntRprsv);
                }}
                value={ojtIndcEntRprsv?.a3}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>변경 후 사업비 계좌</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label={'은행'} span={1}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'b1', setOjtIndcEntRprsv);
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtIndcEntRprsv?.b1}
              />
            </Descriptions.Item>
            <Descriptions.Item label={'계좌번호'} span={1}>
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'b2', setOjtIndcEntRprsv);
                }}
                value={ojtIndcEntRprsv?.b2}
              />
            </Descriptions.Item>
            <Descriptions.Item label={'예금주'} span={1}>
              <Input
                onChange={(e) => {
                  ojtChange(e.target.value, 'b3', setOjtIndcEntRprsv);
                }}
                value={ojtIndcEntRprsv?.b3}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeOnslf04;
