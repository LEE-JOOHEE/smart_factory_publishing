import React, { useEffect, useState } from 'react';
import {
  Col,
  Row,
  Button,
  Descriptions,
  Select,
  Input,
  Checkbox,
  Space,
} from 'antd';
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

const TaskRceptSttus01 = ({ ojtGroupCodes, searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '2022',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
    g: '',
    h: [''],
    i: '',
    j: '',
    k: '',
    l: '',
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
            <Descriptions.Item label="사업년도">
              <Select
                placeholder="사업년도 선택"
                onChange={(value) => ojtChange(value, 'a', setOjtSrchCnd)}
                options={[
                  {
                    value: '2022',
                    label: '2022',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={2}>
              <Select
                placeholder="사업분류 선택"
                value={ojtSrchCnd?.b}
                onChange={(value) => ojtChange(value, 'b', setOjtSrchCnd)}
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
                value={ojtSrchCnd?.c}
                onChange={(e) => ojtChange(e.target.value, 'c', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="지역(수행기관)">
              <Select
                placeholder="지역(수행기관) 선택"
                onChange={(value) => ojtChange(value, 'd')}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                ]}
                value={ojtSrchCnd?.d}
              />
            </Descriptions.Item>
            <Descriptions.Item label="기업명" span={2}>
              {/* Space 사용법 수정(간격조절가능) - 2022/12/22 */}
              <Space className="space-full">
                <div className="font-bold-500">도입기업</div>
                <Input
                  value={ojtSrchCnd?.e}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'e', setOjtSrchCnd)
                  }
                />
                <div className="font-bold-500 ml-12">공급(컨설팅)기업</div>
                <Input
                  value={ojtSrchCnd?.f}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'f', setOjtSrchCnd)
                  }
                />
              </Space>
              {/* <Space>
                도입기업
                <Input
                  // style={{ width: '100px' }}
                  value={ojtSrchCnd?.e}
                  onChange={(e) => ojtChange(e.target.value, 'e')}
                />
                공급(컨설팅)기업
                <Input
                  // style={{ width: '100px' }}
                  value={ojtSrchCnd?.f}
                  onChange={(e) => ojtChange(e.target.value, 'f')}
                />
              </Space> */}
            </Descriptions.Item>
            <Descriptions.Item label="현장컨설팅 배정" span={1}>
              <Select
                placeholder="현장컨설팅 배정 선택"
                onChange={(value) => ojtChange(value, 'g', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.g ? ojtGroupCodes.g : []),
                ]}
                value={ojtSrchCnd?.g}
              />
            </Descriptions.Item>
            <Descriptions.Item label="컨설팅지원사업" span={2}>
              {/* 체크박스  cnslSprtBiz, setCnslSprtBiz */}
              <Checkbox.Group
                options={[
                  {
                    value: '',
                    label: '없음',
                  },
                  ...(ojtGroupCodes?.h ? ojtGroupCodes.h : []),
                ]}
                value={ojtSrchCnd?.h}
                onChange={(value) => ojtChange(value, 'h', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="접수상태" span={1}>
              <Select
                placeholder="접수상태 선택"
                value={ojtSrchCnd?.i}
                onChange={(value) => ojtChange(value, 'i', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.i ? ojtGroupCodes.i : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제신청자" span={2}>
              <Input
                value={ojtSrchCnd?.j}
                onChange={(e) => ojtChange(e.target.value, 'j', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제번호">
              <Input
                value={ojtSrchCnd?.k}
                onChange={(e) => ojtChange(e.target.value, 'k', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제명">
              <Input
                value={ojtSrchCnd?.l}
                onChange={(e) => ojtChange(e.target.value, 'l', setOjtSrchCnd)}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default TaskRceptSttus01;
