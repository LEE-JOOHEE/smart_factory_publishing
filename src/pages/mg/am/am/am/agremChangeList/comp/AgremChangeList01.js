import React, { useState } from 'react';
import { Button, Col, Descriptions, Input, Row, Select, Space } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { ojtChange } from 'components/common/Common';

const AgremChangeList01 = ({ ojtGroupCodes, searchClick }) => {
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
            <Descriptions.Item label="사업년도" span={1.5}>
              <Select
                placeholder="사업년도 선택"
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
            <Descriptions.Item label="상태" span={1.5}>
              <Select
                placeholder="상태 선택"
                onChange={(value) => ojtChange(value, 'a8', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  {
                    value: '신청',
                    label: '신청',
                  },
                  {
                    value: '접수',
                    label: '접수',
                  },
                  {
                    value: '반려',
                    label: '반려',
                  },
                  {
                    value: '승인',
                    label: '승인',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
                value={ojtSrchCnd?.a8}
              />
            </Descriptions.Item>
            <Descriptions.Item label="변경항목" span={1.5}>
              <Select
                placeholder="변경항목 선택"
                onChange={(value) => ojtChange(value, 'a9', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
                value={ojtSrchCnd?.a9}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeList01;
