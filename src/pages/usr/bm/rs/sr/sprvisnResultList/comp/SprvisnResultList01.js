import React, { useState } from 'react';
import { Col, Row, Select, Input, Descriptions, Space, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const SprvisnResultList01 = ({ ojtGroupCodes, searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '전체',
    a2: '전체',
    a3: '전체',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '전체',
    a9: '',
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
            <Descriptions.Item label="시정조치여부" span={1.5}>
              <Select
                value={ojtSrchCnd?.a3}
                onChange={(value) => ojtChange(value, 'a3', setOjtSrchCnd)}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a3 ? ojtGroupCodes.a3 : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="기업명" span={1.5}>
              <Space>
                도입기업
                <Input
                  value={ojtSrchCnd?.a4}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a4', setOjtSrchCnd)
                  }
                />
                공급기업
                <Input
                  value={ojtSrchCnd?.a5}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a5', setOjtSrchCnd)
                  }
                />
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={1.5}>
              <Input
                value={ojtSrchCnd?.a6}
                onChange={(e) => ojtChange(e.target.value, 'a6', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              <Input
                value={ojtSrchCnd?.a7}
                onChange={(e) => ojtChange(e.target.value, 'a7', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="감리구분" span={1.5}>
              <Select
                value={ojtSrchCnd?.a8}
                onChange={(value) => ojtChange(value, 'a8', setOjtSrchCnd)}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a8 ? ojtGroupCodes.a8 : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="감리기관" span={1.5}>
              <Input
                value={ojtSrchCnd?.a9}
                onChange={(e) => ojtChange(e.target.value, 'a9', setOjtSrchCnd)}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SprvisnResultList01;
