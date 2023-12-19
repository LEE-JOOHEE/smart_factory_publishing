import React, { useState } from 'react';
import { Col, Row, Button, Descriptions, Select, Input, Space } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const SuplyEntrprsInqire01 = ({ searchClick }) => {
  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '전체',
    b: '전체',
    c: '전체',
    d: '전체',
    e: '전체',
    f: '전체',
    g: '전체',
    h: '',
    i: '전체',
    j: '',
    k: '전체',
    l: '전체',
    m: '전체',
  });
  // 검색조건 입력 change 메소드
  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={9}>
          <TitleComp>구축실적 검색 조건</TitleComp>
        </Col>
        <Col span={14}>
          <div style={{ color: 'red', textAlign: 'right' }}>
            * 아래 "구축실적 정렬기준"을 필히 설정해주셔야 최적의 결과물이 조회
            됩니다.
          </div>
        </Col>
        <Col span={1} style={{ textAlign: 'right' }}>
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
            <Descriptions.Item label="공급기업소재지">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'a');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="솔루션">
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
            <Descriptions.Item label="기업제조혁신역량 수준" span={3}>
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'c');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.c}
              />
            </Descriptions.Item>
            <Descriptions.Item label="업종" span={3}>
              <Space size={'large'}>
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'd');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.d}
                />
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'e');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.e}
                />
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
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'g');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.g}
                />
                업종코드 :
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'h');
                  }}
                  value={ojtSrchCnd?.h}
                />
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="사업분류">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'i');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.i}
              />
            </Descriptions.Item>
            <Descriptions.Item label="세부공고명" span={2}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'j');
                }}
                value={ojtSrchCnd?.j}
              />
            </Descriptions.Item>
            <Descriptions.Item label="구축결과">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'k');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.k}
              />
            </Descriptions.Item>
            <Descriptions.Item label="종사자규모">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'l');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.l}
              />
            </Descriptions.Item>
            <Descriptions.Item label="매출규모">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'm');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.m}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SuplyEntrprsInqire01;
