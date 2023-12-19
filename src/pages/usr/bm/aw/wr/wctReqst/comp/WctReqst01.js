import React, { useState } from 'react';
import { Col, Row, Select, Input, Descriptions, Space, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const WctReqst01 = ({ ojtGroupCodes, searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '전체',
    a2: '',
    a3: '',
    a4: '전체',
    a5: '전체',
    a6: '전체',
  });
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>검색조건 입력</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-usr-btn-crud-fine"
            size="small"
            onClick={() => {
              searchClick(ojtSrchCnd);
            }}
          >
            조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="사업연도" span={1.5}>
              <Select
                placeholder="사업연도 선택"
                onChange={(value) => ojtChange(value, 'a1', setOjtSrchCnd)}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a1 ? ojtGroupCodes.a1 : []),
                ]}
                value={ojtSrchCnd?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={1.5}>
              <Select
                placeholder="사업분류 선택"
                value={ojtSrchCnd?.a2}
                onChange={(value) => ojtChange(value, 'a2', setOjtSrchCnd)}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a2 ? ojtGroupCodes.a2 : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              <Input
                value={ojtSrchCnd?.a3}
                onChange={(e) => ojtChange(e.target.value, 'a3', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="진행상태" span={1.5}>
              <Space>
                선금
                <Select
                  placeholder="선금"
                  value={ojtSrchCnd?.a4}
                  onChange={(value) => ojtChange(value, 'a4', setOjtSrchCnd)}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.a4 ? ojtGroupCodes.a4 : []),
                  ]}
                />
                중도금
                <Select
                  placeholder="중도금"
                  value={ojtSrchCnd?.a5}
                  onChange={(value) => ojtChange(value, 'a5', setOjtSrchCnd)}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.a5 ? ojtGroupCodes.a5 : []),
                  ]}
                />
                잔금
                <Select
                  placeholder="잔금"
                  value={ojtSrchCnd?.a6}
                  onChange={(value) => ojtChange(value, 'a6', setOjtSrchCnd)}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.a6 ? ojtGroupCodes.a6 : []),
                  ]}
                />
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default WctReqst01;
