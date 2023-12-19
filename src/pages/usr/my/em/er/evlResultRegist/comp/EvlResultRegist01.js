import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  Select,
  Descriptions,
  Input,
  DatePicker,
  ConfigProvider,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const { RangePicker } = DatePicker;

const EvlResultRegist01 = ({ searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
    c: '전체',
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
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>검색조건 입력</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            key={'searchClick'}
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={() => searchClick(ojtSrchCnd)}
          >
            조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="평가희망일자">
              <ConfigProvider locale={locale}>
                <RangePicker
                  format="YYYY-MM-DD"
                  onChange={(dates, dateStrings) => {
                    if (dates) {
                      console.log(
                        'From: ',
                        dateStrings[0],
                        ', to: ',
                        dateStrings[1]
                      );

                      ojtSrchCndChange(dateStrings[0], 'a');
                      ojtSrchCndChange(dateStrings[1], 'b');
                    } else {
                      console.log('Date Clear');
                    }
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="평가구분" span={2}>
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
            <Descriptions.Item label="과제명">
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'd');
                }}
                value={ojtSrchCnd?.d}
              />
            </Descriptions.Item>
            <Descriptions.Item label="도입기업명" span={2}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'e');
                }}
                value={ojtSrchCnd?.e}
              />
            </Descriptions.Item>
            <Descriptions.Item label="제출현황" span={2}>
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

export default EvlResultRegist01;
