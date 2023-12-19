import React, { useState } from 'react';
import { Col, Row, Space } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Checkbox, Descriptions, Input, Select } from 'antd/lib';
import { ojtChange } from 'components/common/Common';

const WctReqstList01 = ({ ojtGroupCodes, searchClick }) => {
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
    a9: '',
    a10: '',
    a11: '',
    a12: '',
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
            <Descriptions.Item label="사업분류" span={1.5}>
              <Select
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
            <Descriptions.Item label="세부공고명" span={1.5}>
              <Input
                value={ojtSrchCnd?.a3}
                onChange={(e) => ojtChange(e.target.value, 'a3', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              <Input
                value={ojtSrchCnd?.a4}
                onChange={(e) => ojtChange(e.target.value, 'a4', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={1.5}>
              <Input
                value={ojtSrchCnd?.a5}
                onChange={(e) => ojtChange(e.target.value, 'a5', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="기업명" span={1.5}>
              <Space>
                도입기업
                <Input
                  style={{ width: '100px' }}
                  value={ojtSrchCnd?.a6}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a6', setOjtSrchCnd)
                  }
                />
                공급기업
                <Input
                  style={{ width: '100px' }}
                  value={ojtSrchCnd?.a7}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a7', setOjtSrchCnd)
                  }
                />
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="지역(수행기관)" span={1.5}>
              <Select
                placeholder="지역(수행기관)"
                value={ojtSrchCnd?.a8}
                onChange={(value) => ojtChange(value, 'a8', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="탈락 및 포기과제 조회여부" span={1.5}>
              <Checkbox
                onChange={(e) =>
                  ojtChange(e.target.checked, 'a9', setOjtSrchCnd)
                }
                defaultChecked={ojtSrchCnd?.a9}
              >
                체크 하시면 탈락 및 포기과제도 조회가능 합니다.
              </Checkbox>
            </Descriptions.Item>

            <Descriptions.Item label="제출상태" span={3}>
              선금
              <Select
                placeholder="선금 선택"
                value={ojtSrchCnd?.a10}
                onChange={(value) => ojtChange(value, 'a10', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
              중도금
              <Select
                placeholder="중도금 선택"
                value={ojtSrchCnd?.a11}
                onChange={(value) => ojtChange(value, 'a11', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
              잔금
              <Select
                placeholder="잔금 선택"
                value={ojtSrchCnd?.a12}
                onChange={(value) => ojtChange(value, 'a12', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default WctReqstList01;
