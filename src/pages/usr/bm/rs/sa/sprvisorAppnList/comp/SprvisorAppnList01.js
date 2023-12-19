import React, { useState } from 'react';
import { Col, Row, Select, Input, Descriptions, Space, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const SprvisorAppnList01 = ({ ojtGroupCodes, searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '2022',
    a2: '선택',
    a3: '',
    a4: '선택',
    a5: '',
    a6: '',
  });
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>검색조건</TitleComp>
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
                    value: '2022',
                    label: '2022',
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
                    value: '선택',
                    label: '선택',
                  },
                  ...(ojtGroupCodes?.a2 ? ojtGroupCodes.a2 : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              <Input
                value={ojtSrchCnd?.a3}
                onChange={(e) => ojtChange(e.target.value, 'a3', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="감리원 지정 상태" span={1.5}>
              <Select
                value={ojtSrchCnd?.a4}
                onChange={(value) => ojtChange(value, 'a4', setOjtSrchCnd)}
                options={[
                  {
                    value: '선택',
                    label: '선택',
                  },
                  ...(ojtGroupCodes?.a4 ? ojtGroupCodes.a4 : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              <Input
                value={ojtSrchCnd?.a5}
                onChange={(e) => ojtChange(e.target.value, 'a5', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="공급기업" span={1.5}>
              <Input
                value={ojtSrchCnd?.a6}
                onChange={(e) => ojtChange(e.target.value, 'a6', setOjtSrchCnd)}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SprvisorAppnList01;
