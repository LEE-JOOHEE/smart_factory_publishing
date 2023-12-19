import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Descriptions, Select, Input, Space } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { ojtChange } from 'components/common/Common';
/**
 * 과제 접수 현황
 *
 * 검색 조건 입력 컴포넌트
 *
 *
 */

const TaskProgrsSttus01 = ({ ojtGroupCodes, searchClick }) => {
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
                  ...(ojtGroupCodes?.a2 ? ojtGroupCodes.a2 : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="세부공고명" span={3}>
              <Input
                value={ojtSrchCnd?.a3}
                onChange={(e) => ojtChange(e.target.value, 'a3', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="지역(수행기관)" span={1.5}>
              <Select
                placeholder="지역(수행기관) 선택"
                onChange={(value) => ojtChange(value, 'a4', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a4 ? ojtGroupCodes.a4 : []),
                ]}
                value={ojtSrchCnd?.a4}
              />
            </Descriptions.Item>
            <Descriptions.Item label="기업명" span={1.5}>
              <Space className="space-full">
                <div className="font-bold-500">도입기업</div>
                <Input
                  value={ojtSrchCnd?.a5}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a5', setOjtSrchCnd)
                  }
                />
                <div className="font-bold-500 ml-12">공급(컨설팅)기업</div>
                <Input
                  value={ojtSrchCnd?.a6}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a6', setOjtSrchCnd)
                  }
                />
              </Space>
            </Descriptions.Item>

            <Descriptions.Item label="감리기관" span={1.5}>
              <Select
                placeholder="감리기관 선택"
                value={ojtSrchCnd?.a7}
                onChange={(value) => ojtChange(value, 'a7', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a7 ? ojtGroupCodes.a7 : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업포기선택" span={1.5}>
              <Select
                placeholder="사업포기선택"
                value={ojtSrchCnd?.a8}
                onChange={(value) => ojtChange(value, 'a8', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a8 ? ojtGroupCodes.a8 : []),
                ]}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default TaskProgrsSttus01;
