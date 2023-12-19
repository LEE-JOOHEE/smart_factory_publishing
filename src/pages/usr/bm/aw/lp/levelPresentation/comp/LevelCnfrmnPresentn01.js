import React, { useState } from 'react';
import { Col, Row, Button, Select, Input, Descriptions, Checkbox } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const LevelCnfrmnPresentn01 = ({ searchClick, ojtGroupCodes }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '전체',
    a2: '스마트화 역량강화사업',
    a3: '',
    a4: '',
    a5: '',
    a6: '미등록',
    a7: '',
    a8: '',
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
            <Descriptions.Item label="사업년도" span={1.5}>
              <Select
                placeholder="사업년도 선택"
                onChange={(value) => ojtChange(value, 'a1', setOjtSrchCnd)}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
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
                    value: '스마트화 역량강화사업',
                    label: '스마트화 역량강화사업',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="세부공고명" span={1.5}>
              <Input
                value={ojtSrchCnd?.a3}
                onChange={(e) => ojtChange(e.target.value, 'a3', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={1.5}>
              <Input
                value={ojtSrchCnd?.a4}
                onChange={(e) => ojtChange(e.target.value, 'a4', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              <Input
                value={ojtSrchCnd?.a5}
                onChange={(e) => ojtChange(e.target.value, 'a5', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="제출상태" span={1.5}>
              <Select
                placeholder="제출상태 선택"
                value={ojtSrchCnd?.a6}
                onChange={(value) => ojtChange(value, 'a6', setOjtSrchCnd)}
                options={[
                  {
                    value: '미등록',
                    label: '미등록',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              <Input
                value={ojtSrchCnd?.a7}
                onChange={(e) => ojtChange(e.target.value, 'a7', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="상태" span={1.5}>
              <Checkbox
                onChange={(e) =>
                  ojtChange(e.target.checked, 'a8', setOjtSrchCnd)
                }
                defaultChecked={ojtSrchCnd?.a8}
              >
                확인기관배정(반려)
              </Checkbox>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default LevelCnfrmnPresentn01;
