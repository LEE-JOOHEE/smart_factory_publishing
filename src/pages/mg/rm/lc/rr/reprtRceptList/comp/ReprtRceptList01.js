import React, { useState } from 'react';
import { Col, Row, Space } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Descriptions, Input, Select } from 'antd/lib';
import { ojtChange } from 'components/common/Common';

const ReprtRceptList01 = ({ ojtGroupCodes, searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '2022',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '',
  });

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>검색조건 입력</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            size="small"
            onClick={() => {
              searchClick(ojtSrchCnd);
            }}
          >
            조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
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
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업구분/사업명" span={1.5}>
              <Space>
                <Select
                  placeholder="사업구분 선택"
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
                <Select
                  placeholder="사업명 선택"
                  value={ojtSrchCnd?.a3}
                  onChange={(value) => ojtChange(value, 'a3', setOjtSrchCnd)}
                  options={[
                    {
                      value: '',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                  ]}
                />
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="지역(수행기관)" span={1.5}>
              <Select
                placeholder="지역(수행기관)"
                value={ojtSrchCnd?.a4}
                onChange={(value) => ojtChange(value, 'a4', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="기업명" span={1.5}>
              <Space>
                도입기업
                <Input
                  style={{ width: '100px' }}
                  value={ojtSrchCnd?.a5}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a5', setOjtSrchCnd)
                  }
                />
                공급기업
                <Input
                  style={{ width: '100px' }}
                  value={ojtSrchCnd?.a6}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a6', setOjtSrchCnd)
                  }
                />
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="완료보고서" span={1.5}>
              <Select
                placeholder="완료보고서 선택"
                value={ojtSrchCnd?.a7}
                onChange={(value) => ojtChange(value, 'a7', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              <Input
                value={ojtSrchCnd?.a8}
                onChange={(e) => ojtChange(e.target.value, 'a8', setOjtSrchCnd)}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default ReprtRceptList01;
