import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Descriptions,
  Input,
  DatePicker,
  ConfigProvider,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR'; // 우린 한국인이니까 ko_KR를 불러옵시다
moment.locale('ko');

const PblancUpdt01 = () => {
  const [ojtSptPlan, setOjtSptPlan] = useState({
    a: '2022-N-0374',
    b: '2022년 스마트공장 보급 확산 사업 공고_기초(코디 지원)',
    c: '',
    d: '',
    e: '',
    f: '',
    g: '',
    h: '',
  });
  // 공고 정보 ojt
  const [ojtSrchCnd, setOjtSrchCnd] = useState({});
  const ojtSrchCndChange = (value, column) => {
    console.log('value: ', value, 'column: ', column);
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  const ojtSptPlanChange = (value, column) => {
    setOjtSptPlan((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  useEffect(() => {
    setOjtSrchCnd({
      a: '2022-N-0374',
      b: '2022년 스마트공장 보급 확산 사업 공고_기초(코디 지원)',
    });
  }, []);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>공고 정보</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          {/* 우측 버튼 */}
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="공고번호" span={3}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'a');
                }}
                value={ojtSrchCnd?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="공고명" span={3}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'b');
                }}
                value={ojtSrchCnd?.b}
              />
            </Descriptions.Item>
            <Descriptions.Item label="공고일자">
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder={'공고일자'}
                  onChange={(moment, dateString) => {
                    if (moment) {
                      console.log('공고일자: ', dateString);
                    }
                    ojtSrchCndChange(dateString, 'c');
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default PblancUpdt01;
