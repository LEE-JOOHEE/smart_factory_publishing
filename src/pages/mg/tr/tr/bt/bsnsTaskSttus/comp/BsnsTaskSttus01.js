import React, { useState } from 'react';
import { Col, Row, Space, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Descriptions, Input, Select } from 'antd/lib';
import { ojtChange } from 'components/common/Common';

const BsnsTaskSttus01 = ({ ojtGroupCodes, searchClick }) => {
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
    a13: '',
    a14: '',
    a15: '',
    a16: '',
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
            <Descriptions.Item label="사업년도" span={1}>
              <Select
                placeholder="사업년도 선택"
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
            <Descriptions.Item label="세부공고명" span={1}>
              <Input
                value={ojtSrchCnd?.a3}
                onChange={(e) => ojtChange(e.target.value, 'a3', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={1}>
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
            
            <Descriptions.Item label="지역(수행기관)" span={1}>
              <Select
                placeholder="지역(수행기관) 선택"
                onChange={(value) => ojtChange(value, 'a4', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                ]}
                value={ojtSrchCnd?.a4}
              />
            </Descriptions.Item>
            <Descriptions.Item label="기업명" span={2}>
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
            <Descriptions.Item label="업무진행현황" span={3}>
              <Row className="mtb-4" gutter={[34, 20]}>
                <Col span={6}>
                  <Row className="item-center" gutter={10}>
                    <Col span={8}>
                      <div className="font-bold-500">접수상태</div>
                    </Col>
                    <Col span={16}>
                      <Select
                        placeholder="접수상태 선택"
                        onChange={(value) => ojtChange(value, 'a7', setOjtSrchCnd)}
                        options={[
                          {
                            value: '',
                            label: '전체',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtSrchCnd?.a7}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row className="item-center" gutter={10}>
                    <Col span={8}>
                      <div className="font-bold-500">요건검토</div>
                    </Col>
                    <Col span={16}>
                      <Select
                        placeholder="요건검토 선택"
                        onChange={(value) => ojtChange(value, 'a8', setOjtSrchCnd)}
                        options={[
                          {
                            value: '',
                            label: '전체',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtSrchCnd?.a8}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row className="item-center" gutter={10}>
                    <Col span={8}>
                      <div className="font-bold-500">현장컨설팅</div>
                    </Col>
                    <Col span={16}>
                      <Select
                        placeholder="현장컨설팅 선택"
                        onChange={(value) => ojtChange(value, 'a9', setOjtSrchCnd)}
                        options={[
                          {
                            value: '',
                            label: '전체',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtSrchCnd?.a9}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row className="item-center" gutter={10}>
                    <Col span={8}>
                      <div className="font-bold-500">컨설팅보고서</div>
                    </Col>
                    <Col span={16}>
                      <Select
                        placeholder="컨설팅보고서 선택"
                        onChange={(value) => ojtChange(value, 'a10', setOjtSrchCnd)}
                        options={[
                          {
                            value: '',
                            label: '전체',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtSrchCnd?.a10}
                      />
                    </Col>
                  </Row>
                </Col>

                <Col span={6}>
                  <Row className="item-center" gutter={10}>
                    <Col span={8}>
                      <div className="font-bold-500">제안요청서</div>
                    </Col>
                    <Col span={16}>
                      <Select
                        placeholder="제안요청서 선택"
                        onChange={(value) => ojtChange(value, 'a11', setOjtSrchCnd)}
                        options={[
                          {
                            value: '',
                            label: '전체',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtSrchCnd?.a11}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row className="item-center" gutter={10}>
                    <Col span={8}>
                      <div className="font-bold-500">제안서</div>
                    </Col>
                    <Col span={16}>
                      <Select
                        placeholder="제안서 선택"
                        onChange={(value) => ojtChange(value, 'a12', setOjtSrchCnd)}
                        options={[
                          {
                            value: '',
                            label: '전체',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtSrchCnd?.a12}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row className="item-center" gutter={10}>
                    <Col span={8}>
                      <div className="font-bold-500">선정여부</div>
                    </Col>
                    <Col span={16}>
                      <Select
                        placeholder="선정여부 선택"
                        onChange={(value) => ojtChange(value, 'a13', setOjtSrchCnd)}
                        options={[
                          {
                            value: '',
                            label: '전체',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtSrchCnd?.a13}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row className="item-center" gutter={10}>
                    <Col span={8}>
                      <div className="font-bold-500">원가계산</div>
                    </Col>
                    <Col span={16}>
                      <Select
                        placeholder="원가계산 선택"
                        onChange={(value) => ojtChange(value, 'a14', setOjtSrchCnd)}
                        options={[
                          {
                            value: '',
                            label: '전체',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtSrchCnd?.a14}
                      />
                    </Col>
                  </Row>
                </Col>

                <Col span={6}>
                  <Row className="item-center" gutter={10}>
                    <Col span={8}>
                      <div className="font-bold-500">협약계획</div>
                    </Col>
                    <Col span={16}>
                      <Select
                        placeholder="협약계획 선택"
                        onChange={(value) => ojtChange(value, 'a15', setOjtSrchCnd)}
                        options={[
                          {
                            value: '',
                            label: '전체',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtSrchCnd?.a15}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={6}>
                  <Row className="item-center" gutter={10}>
                    <Col span={8}>
                      <div className="font-bold-500">협약계결</div>
                    </Col>
                    <Col span={16}>
                      <Select
                        placeholder="협약계결 선택"
                        onChange={(value) => ojtChange(value, 'a16', setOjtSrchCnd)}
                        options={[
                          {
                            value: '',
                            label: '전체',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtSrchCnd?.a16}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default BsnsTaskSttus01;
