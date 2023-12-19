import React, { useState } from 'react';
import {
  Col,
  Row,
  DatePicker,
  Descriptions,
  ConfigProvider,
  Space,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import { ojtChange } from 'components/common/Common';
import 'css/CommonUsr.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const { RangePicker } = DatePicker;
const AgremChangeConfirm07 = () => {
  const [ojtCnstcPd, setOjtCnstcPd] = useState({
    a1: '2020-08-26',
    a2: '2020-06-30',
    a3: '2020-08-26',
    a4: '2020-12-30',
    a5: '2020-12-31',
    a6: '2021-06-30',
    b1: '',
    b2: '',
  });
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>변경 전 구축기간</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="기존사업기간" span={3}>
              <Space>
                {ojtCnstcPd?.a1} ~ {ojtCnstcPd?.a2} 구축기간 : {ojtCnstcPd?.a3}~
                {ojtCnstcPd?.a4}, 집중AS기간 : {ojtCnstcPd?.a5} ~
                {ojtCnstcPd?.a6}
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>변경 후 구축기간</TitleComp>
          <div style={{ color: 'red' }}>
            ※ 사업종료일 입력 시 구축기간 종료일자에 +6개월(집중AS기간)을 가산한
            일정으로 계산하여 입력
          </div>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="변경사업기간" span={3}>
              <Space>
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

                        ojtChange(dateStrings[0], 'b1', setOjtCnstcPd);
                        ojtChange(dateStrings[1], 'b2', setOjtCnstcPd);
                      } else {
                        console.log('Date Clear');
                      }
                    }}
                  />
                  구축기간 : {ojtCnstcPd?.a3}~{ojtCnstcPd?.a4}, 집중AS기간 :{' '}
                  {ojtCnstcPd?.a5} ~{ojtCnstcPd?.a6}
                </ConfigProvider>
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeConfirm07;
