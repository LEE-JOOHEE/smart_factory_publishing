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

const MiddleChckRegist02 = () => {
  const [ojtMiddleChckRslt, setOjtMiddleChckRslt] = useState({
    a: '',
    b: '',
    c: '',
    d: '1',
    e: '1',
    f: '1',
    g: '1',
    h: '1',
    i: '',
  });

  const ojtMiddleChckRsltChange = (value, column) => {
    setOjtMiddleChckRslt((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>중간점검 결과</TitleComp>
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
                    ojtMiddleChckRsltChange(dateString, 'a');
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

                      ojtMiddleChckRsltChange(timeStrings[0], 'b');
                      ojtMiddleChckRsltChange(timeStrings[1], 'c');
                    } else {
                      console.log('Time Clear');
                    }
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item
              label="가. 방법론 준수 및 산출물 작성의 적정성"
              span={3}
            >
              <Space>
                <Checkbox
                  value={'1'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'd')}
                  checked={ojtMiddleChckRslt?.d === '1'}
                />
                적정
                <Checkbox
                  value={'2'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'd')}
                  checked={ojtMiddleChckRslt?.d === '2'}
                />
                보완
                <Checkbox
                  value={'3'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'd')}
                  checked={ojtMiddleChckRslt?.d === '3'}
                />
                미흡
              </Space>
            </Descriptions.Item>
            <Descriptions.Item
              label="나. 일정계획 대비 진척관리의 적절성"
              span={3}
            >
              <Space>
                <Checkbox
                  value={'1'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'e')}
                  checked={ojtMiddleChckRslt?.e === '1'}
                />
                적정
                <Checkbox
                  value={'2'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'e')}
                  checked={ojtMiddleChckRslt?.e === '2'}
                />
                보완
                <Checkbox
                  value={'3'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'e')}
                  checked={ojtMiddleChckRslt?.e === '3'}
                />
                미흡
              </Space>
            </Descriptions.Item>
            <Descriptions.Item
              label="다. 인력관리 및 의사소통의 적정성"
              span={3}
            >
              <Space>
                <Checkbox
                  value={'1'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'f')}
                  checked={ojtMiddleChckRslt?.f === '1'}
                />
                적정
                <Checkbox
                  value={'2'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'f')}
                  checked={ojtMiddleChckRslt?.f === '2'}
                />
                보완
                <Checkbox
                  value={'3'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'f')}
                  checked={ojtMiddleChckRslt?.f === '3'}
                />
                미흡
              </Space>
            </Descriptions.Item>
            <Descriptions.Item
              label="라. 변경관리 및 위험관리의 적정성"
              span={3}
            >
              <Space>
                <Checkbox
                  value={'1'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'g')}
                  checked={ojtMiddleChckRslt?.g === '1'}
                />
                적정
                <Checkbox
                  value={'2'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'g')}
                  checked={ojtMiddleChckRslt?.g === '2'}
                />
                보완
                <Checkbox
                  value={'3'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'g')}
                  checked={ojtMiddleChckRslt?.g === '3'}
                />
                미흡
              </Space>
            </Descriptions.Item>
            <Descriptions.Item
              label="마. 성과 측정지표 및 측정방법, 측정계획의 적정성"
              span={3}
            >
              <Space>
                <Checkbox
                  value={'1'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'h')}
                  checked={ojtMiddleChckRslt?.h === '1'}
                />
                적정
                <Checkbox
                  value={'2'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'h')}
                  checked={ojtMiddleChckRslt?.h === '2'}
                />
                보완
                <Checkbox
                  value={'3'}
                  onChange={(e) => ojtMiddleChckRsltChange(e.target.value, 'h')}
                  checked={ojtMiddleChckRslt?.h === '3'}
                />
                미흡
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="종합의견" span={2}>
              <TextArea
                onChange={(evt) => {
                  ojtMiddleChckRsltChange(evt.target.value, 'i');
                }}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default MiddleChckRegist02;
