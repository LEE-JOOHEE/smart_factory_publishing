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

const ComptChckRegist01 = () => {
  const [ojtComptChckRslt, setOjtComptChckRslt] = useState({
    a: '',
    b: '',
    c: '',
    d: '1',
    e: '1',
    f: '1',
    g: '',
    h: '',
  });

  const ojtComptChckRsltChange = (value, column) => {
    setOjtComptChckRslt((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>완료점검 결과</TitleComp>
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
                    ojtComptChckRsltChange(dateString, 'a');
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

                      ojtComptChckRsltChange(timeStrings[0], 'b');
                      ojtComptChckRsltChange(timeStrings[1], 'c');
                    } else {
                      console.log('Time Clear');
                    }
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="최종 점검 결과" span={3}>
              <Space>
                <Checkbox
                  value={'1'}
                  onChange={(e) => ojtComptChckRsltChange(e.target.value, 'd')}
                  checked={ojtComptChckRslt?.d === '1'}
                />
                적정
                <Checkbox
                  value={'2'}
                  onChange={(e) => ojtComptChckRsltChange(e.target.value, 'd')}
                  checked={ojtComptChckRslt?.d === '2'}
                />
                보완
                <Checkbox
                  value={'3'}
                  onChange={(e) => ojtComptChckRsltChange(e.target.value, 'd')}
                  checked={ojtComptChckRslt?.d === '3'}
                />
                미흡
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="구축시스템 스마트화 수준" span={3}>
              <Space>
                <Checkbox
                  value={'1'}
                  onChange={(e) => ojtComptChckRsltChange(e.target.value, 'e')}
                  checked={ojtComptChckRslt?.e === '1'}
                />
                기초
                <Checkbox
                  value={'2'}
                  onChange={(e) => ojtComptChckRsltChange(e.target.value, 'e')}
                  checked={ojtComptChckRslt?.e === '2'}
                />
                중간1
                <Checkbox
                  value={'3'}
                  onChange={(e) => ojtComptChckRsltChange(e.target.value, 'e')}
                  checked={ojtComptChckRslt?.e === '3'}
                />
                중간2
                <Checkbox
                  value={'4'}
                  onChange={(e) => ojtComptChckRsltChange(e.target.value, 'e')}
                  checked={ojtComptChckRslt?.e === '4'}
                />
                고도화
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 수준" span={3}>
              <Space>
                <Checkbox
                  value={'1'}
                  onChange={(e) => ojtComptChckRsltChange(e.target.value, 'f')}
                  checked={ojtComptChckRslt?.f === '1'}
                />
                Level 1
                <Checkbox
                  value={'2'}
                  onChange={(e) => ojtComptChckRsltChange(e.target.value, 'f')}
                  checked={ojtComptChckRslt?.f === '2'}
                />
                Level 2
                <Checkbox
                  value={'3'}
                  onChange={(e) => ojtComptChckRsltChange(e.target.value, 'f')}
                  checked={ojtComptChckRslt?.f === '3'}
                />
                Level 3
                <Checkbox
                  value={'4'}
                  onChange={(e) => ojtComptChckRsltChange(e.target.value, 'f')}
                  checked={ojtComptChckRslt?.f === '4'}
                />
                Level 4
                <Checkbox
                  value={'5'}
                  onChange={(e) => ojtComptChckRsltChange(e.target.value, 'f')}
                  checked={ojtComptChckRslt?.f === '5'}
                />
                Level 5
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 총점" span={3}>
              <Input
                onChange={(evt) => {
                  ojtComptChckRsltChange(evt.target.value, 'g');
                }}
                value={ojtComptChckRslt?.g}
              />
            </Descriptions.Item>

            <Descriptions.Item label="종합의견" span={2}>
              <TextArea
                onChange={(evt) => {
                  ojtComptChckRsltChange(evt.target.value, 'h');
                }}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default ComptChckRegist01;
