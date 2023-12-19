import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  Descriptions,
  Select,
  Input,
  Space,
  Checkbox,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const PrmpcCalcPresentn01 = ({ ojtGroupCodes, searchClick }) => {
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
    a11: false,
  });
  return (
    <>
      <Row className="eu-row-comp-title mb-8" gutter={[20, 0]}>
        <Col span={24}>
          {/* <TitleComp>검색조건 입력</TitleComp> */}
          <div className="headline mb-0">검색조건 입력</div>
        </Col>
        <Col span={17} className="mt-auto">
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red">
              ※ 재계산여부 : 현장평가결과 원가 재계산이 필요한 과제 (협약체결 이후 재계산 수행)
            </span>
          </div>
        </Col>
        <Col span={7} style={{ textAlign: 'right' }}>
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
          <Descriptions size="small" bordered column={{ md: 2, sm: 1, xs: 1 }}>
            <Descriptions.Item label="사업연도" span={1}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
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
            <Descriptions.Item label="사업분류" span={2}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
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
            <Descriptions.Item label="세부공고명" span={3}>
              <Input
                value={ojtSrchCnd?.a3}
                onChange={(e) => ojtChange(e.target.value, 'a3', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="지역(수행기관)">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
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
            <Descriptions.Item label="기업명" span={2}>
              <Space className="space-full flex-wrap">
                <div className="font-bold-500">도입기업</div>
                <Input
                  value={ojtSrchCnd?.a5}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a5', setOjtSrchCnd)
                  }
                />
                <div className="font-bold-500 ml-12">공급기업</div>
                <Input
                  value={ojtSrchCnd?.a6}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a6', setOjtSrchCnd)
                  }
                />
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="제출상태">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                placeholder="상태 선택"
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

            <Descriptions.Item label="원가계산기관" span={2}>
              <Space className="space-full flex-1 flex-wrap">
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  // style={{minWidth: "100px"}}
                  placeholder="상태 선택"
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
                <div className="ml-6" style={{minWidth: "130px"}}>
                  <span className="text-red">*</span>
                  <span className="font-16-400 text-gray-500">사업연도 선택필수</span>
                </div>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="원가재계산여부" className="break">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                placeholder="원가재계산여부 선택"
                value={ojtSrchCnd?.a9}
                onChange={(value) => ojtChange(value, 'a9', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="원가재계산제출상태" span={2} className="break">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                placeholder="원가재계산제출상태 선택"
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
            </Descriptions.Item>
            <Descriptions.Item label="탈락 및 포기과제 조회 여부" span={3} className="break">
              <Checkbox
                checked={ojtSrchCnd?.a11}
                value={!ojtSrchCnd?.a11}
                onChange={(e) =>
                  ojtChange(e.target.value, 'a11', setOjtSrchCnd)
                }
              >
                체크하시면 탈락 및 포기과제도 조회가능합니다.
              </Checkbox>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default PrmpcCalcPresentn01;
