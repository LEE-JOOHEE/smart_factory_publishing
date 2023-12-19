import React, { useState } from 'react';
import { Col, Row, Space } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { Button, Checkbox, Descriptions, Input, Select } from 'antd/lib';
import { ojtChange } from 'components/common/Common';

const ObjcReqst01 = ({ ojtGroupCodes, searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '2022',
    a2: '',
    a3: '',
    a4: '',
  });

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>&nbsp;</TitleComp>
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
                size="small"
                placeholder="사업연도 선택"
                onChange={(value) => ojtChange(value, 'a1', setOjtSrchCnd)}
                options={[
                  {
                    value: '2021',
                    label: '2021',
                  },
                  {
                    value: '2022',
                    label: '2022',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={1.5}>
              <Select
                size="small"
                placeholder="사업분류 선택"
                value={ojtSrchCnd?.a2}
                onChange={(value) => ojtChange(value, 'a2', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={1.5}>
              <Input
                size="small"
                value={ojtSrchCnd?.a3}
                onChange={(e) => ojtChange(e.target.value, 'a3', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              <Input
                size="small"
                value={ojtSrchCnd?.a4}
                onChange={(e) => ojtChange(e.target.value, 'a4', setOjtSrchCnd)}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default ObjcReqst01;
