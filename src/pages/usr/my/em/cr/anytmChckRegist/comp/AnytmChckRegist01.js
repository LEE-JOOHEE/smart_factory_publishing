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

const AnytmChckRegist01 = () => {
  const [ojtAnytmChckRslt, setOjtAnytmChckRslt] = useState({
    a: '',
    b: '',
    c: '',
    d: '1',
    e: '1',
    f: '',
  });

  const ojtAnytmChckRsltChange = (value, column) => {
    setOjtAnytmChckRslt((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>수시점검 결과</TitleComp>
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
                    ojtAnytmChckRsltChange(dateString, 'a');
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

                      ojtAnytmChckRsltChange(timeStrings[0], 'b');
                      ojtAnytmChckRsltChange(timeStrings[1], 'c');
                    } else {
                      console.log('Time Clear');
                    }
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="수시 점검 결과">
              <Space>
                <Checkbox
                  value={'1'}
                  onChange={(e) => ojtAnytmChckRsltChange(e.target.value, 'd')}
                  checked={ojtAnytmChckRslt?.d === '1'}
                />
                적정
                <Checkbox
                  value={'2'}
                  onChange={(e) => ojtAnytmChckRsltChange(e.target.value, 'd')}
                  checked={ojtAnytmChckRslt?.d === '2'}
                />
                보완
                <Checkbox
                  value={'3'}
                  onChange={(e) => ojtAnytmChckRsltChange(e.target.value, 'd')}
                  checked={ojtAnytmChckRslt?.d === '3'}
                />
                미흡
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="점검기업" span={2}>
              <Space>
                <Checkbox
                  value={'1'}
                  onChange={(e) => ojtAnytmChckRsltChange(e.target.value, 'e')}
                  checked={ojtAnytmChckRslt?.e === '1'}
                />
                도입기업
                <Checkbox
                  value={'2'}
                  onChange={(e) => ojtAnytmChckRsltChange(e.target.value, 'e')}
                  checked={ojtAnytmChckRslt?.e === '2'}
                />
                공급기업
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="종합의견" span={3}>
              <TextArea
                onChange={(evt) => {
                  ojtAnytmChckRsltChange(evt.target.value, 'f');
                }}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default AnytmChckRegist01;
