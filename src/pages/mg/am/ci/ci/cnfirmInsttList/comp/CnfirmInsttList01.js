import React, { useState } from 'react';
import { Col, Row, Descriptions, Select, Input, Button, Checkbox } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const CnfirmInsttList01 = ({ searchClick }) => {
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '2021',
    b: '스마트화 수준확인',
    c: '스마트화 수준확인',
    d: '',
    e: '',
    f: '',
    g: '',
    h: [],
  });
  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>수준확인관리</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={() => searchClick(ojtSrchCnd)}
          >
            조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="사업연도" span={1.5}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'a');
                }}
                options={[
                  {
                    value: '2020',
                    label: '2020',
                  },
                  {
                    value: '2021',
                    label: '2021',
                  },
                  {
                    value: '2022',
                    label: '2022',
                  },
                ]}
                value={ojtSrchCnd?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={1.5}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'b');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.b}
              />
            </Descriptions.Item>
            <Descriptions.Item label="세부공고명" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'c');
                }}
                value={ojtSrchCnd?.c}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'd');
                }}
                value={ojtSrchCnd?.d}
              />
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'e');
                }}
                value={ojtSrchCnd?.e}
              />
            </Descriptions.Item>
            <Descriptions.Item label="확인기관" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'f');
                }}
                value={ojtSrchCnd?.f}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'g');
                }}
                value={ojtSrchCnd?.g}
              />
            </Descriptions.Item>
            <Descriptions.Item label="상태" span={2}>
              <Checkbox.Group
                onChange={(value) => ojtSrchCndChange(value, 'h')}
              >
                <Checkbox value="1">확인기관배정</Checkbox>
                <Checkbox value="2">기업수준확인(승인)</Checkbox>
                <Checkbox value="3">기업수준확인(반려)</Checkbox>
                <Checkbox value="4">사업종료(성공)</Checkbox>
                <Checkbox value="5">사업종료(실패)</Checkbox>
              </Checkbox.Group>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default CnfirmInsttList01;
