import React, { useState } from 'react';
import { Col, Row, Descriptions, Select, Input, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const InsttRcritExmnt01 = ({ searchClick }) => {
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '2022',
    b: '전체',
    c: '',
    d: '',
    e: '',
    f: '전체',
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
          <TitleComp>검색조건 입력</TitleComp>
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
            <Descriptions.Item label="공고명" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'c');
                }}
                value={ojtSrchCnd?.c}
              />
            </Descriptions.Item>
            <Descriptions.Item label="접수번호" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'd');
                }}
                value={ojtSrchCnd?.d}
              />
            </Descriptions.Item>
            <Descriptions.Item label="제출기관명" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'e');
                }}
                value={ojtSrchCnd?.e}
              />
            </Descriptions.Item>
            <Descriptions.Item label="제출상태" span={1.5}>
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'f');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.f}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default InsttRcritExmnt01;
