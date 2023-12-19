import React, { useState, useEffect } from 'react';
import { Col, Row, Descriptions, Select, Input, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const PblancManage01 = ({ searchClick }) => {
  const [ojtSrchCnd, setOjtSrchCnd] = useState({});
  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  useEffect(() => {
    setOjtSrchCnd({
      a: '2020',
      b: '전체',
      c: '스마트공장 보급 확산 사업 공고_기초(코디 지원)',
    });
  }, []);

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
            <Descriptions.Item label="공고연도">
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
            <Descriptions.Item label="사업분류" span={2}>
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'b');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.b}
              />
            </Descriptions.Item>
            <Descriptions.Item label="공고명">
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'c');
                }}
                value={ojtSrchCnd?.c}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default PblancManage01;
