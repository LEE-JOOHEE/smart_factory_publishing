import React, { useState } from 'react';
import {
  Col,
  Row,
  Descriptions,
  ConfigProvider,
  DatePicker,
  TimePicker,
  Input,
  Checkbox,
  Space,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const { TextArea } = Input;

const YrycEvlRegist01 = () => {
  const [ojtYrycEvlRslt, setOjtYrycEvlRslt] = useState({
    a: '',
    b: '',
    c: '',
    d: '1',
    e: '',
  });

  const ojtYrycEvlRsltChange = (value, column) => {
    setOjtYrycEvlRslt((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>연차평가 결과</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="방문일자">
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder={'방문일자'}
                  onChange={(moment, dateString) => {
                    if (moment) {
                      console.log('방문일자: ', dateString);
                    }
                    ojtYrycEvlRsltChange(dateString, 'a');
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="방문시간" span={2}>
              <ConfigProvider locale={locale}>
                <TimePicker.RangePicker
                  onChange={(times, timeStrings) => {
                    if (times) {
                      console.log(
                        'From: ',
                        timeStrings[0],
                        ', to: ',
                        timeStrings[1]
                      );

                      ojtYrycEvlRsltChange(timeStrings[0], 'b');
                      ojtYrycEvlRsltChange(timeStrings[1], 'c');
                    } else {
                      console.log('Time Clear');
                    }
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="연차 평가 결과" span={3}>
              <Space>
                <Checkbox
                  value={'1'}
                  onChange={(e) => ojtYrycEvlRsltChange(e.target.value, 'd')}
                  checked={ojtYrycEvlRslt?.d === '1'}
                />
                적정
                <Checkbox
                  value={'2'}
                  onChange={(e) => ojtYrycEvlRsltChange(e.target.value, 'd')}
                  checked={ojtYrycEvlRslt?.d === '2'}
                />
                보완
                <Checkbox
                  value={'3'}
                  onChange={(e) => ojtYrycEvlRsltChange(e.target.value, 'd')}
                  checked={ojtYrycEvlRslt?.d === '3'}
                />
                미흡
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="종합의견" span={3}>
              <TextArea
                onChange={(evt) => {
                  ojtYrycEvlRsltChange(evt.target.value, 'e');
                }}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default YrycEvlRegist01;
