import React, { useState } from 'react';
import {
  Col,
  Row,
  Descriptions,
  Checkbox,
  DatePicker,
  Input,
  ConfigProvider,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const { RangePicker } = DatePicker;

const SportNeedMatter01 = () => {
  const [ojtAplyType, setOjtAplyType] = useState({
    a1: '1',
    a2: '1',
    a3: '',
    a4: '',
    a5: '0',
    a6: '1',
  });
  const aplyType = [
    '긴급복구형 AS',
    '성장연계형 AS',
    '구독형 AS',
    '긴급복구형+구독형 AS',
    '성장연계형+구독형 AS',
  ];
  const asDmndMttr = [
    '고장 수리',
    '부품교체',
    '기능개선',
    '기능추가',
    '정보보안',
    '업그레이드',
    'H/W',
    'S/W',
    'NetWork',
    '프로그램 수정개선',
    '시스템 유지관리',
    '데이터 관리',
    '사용자 운영 지원',
  ];
  const linkSprtDmnd = [
    '인력역량향상 맞춤형 현장교육',
    '정책자금 융자',
    '기술보호(정보보안) 컨설팅',
    '스마트마이스터 활용지원',
  ];
  const subscribeAs = '3';
  const subscribeTypeAs = ['10', '11', '12', '13'];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>신청유형</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="신청 유형" span={3}>
              {aplyType.map((item, idx) => {
                return (
                  <Checkbox
                    key={`${item}${idx}`}
                    value={`${idx + 1}`}
                    checked={ojtAplyType?.a1 === `${idx + 1}`}
                    onChange={(e) => {
                      if (e.target.value === subscribeAs) {
                        ojtChange(
                          [...ojtAplyType?.a2, ...subscribeTypeAs],
                          'a2',
                          setOjtAplyType
                        );
                      }
                      ojtChange(e.target.value, 'a1', setOjtAplyType);
                    }}
                  >
                    {item}
                  </Checkbox>
                );
              })}
            </Descriptions.Item>
            <Descriptions.Item label="AS 요청사항" span={3}>
              <Checkbox.Group
                value={ojtAplyType?.a2}
                onChange={(value) => ojtChange(value, 'a2', setOjtAplyType)}
              >
                {asDmndMttr.map((item, idx) => {
                  return <Checkbox value={`${idx + 1}`}>{item}</Checkbox>;
                })}
              </Checkbox.Group>
            </Descriptions.Item>
            <Descriptions.Item label="예상 사업기간" span={3}>
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

                      ojtChange(dateStrings[0], 'a3', setOjtAplyType);
                      ojtChange(dateStrings[1], 'a4', setOjtAplyType);
                    } else {
                      console.log('Date Clear');
                    }
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="정부지원 요청금액" span={3}>
              <Input
                style={{ width: '100px' }}
                value={ojtAplyType?.a5}
                onChange={(e) =>
                  ojtChange(e.target.value, 'a5', setOjtAplyType)
                }
              />
            </Descriptions.Item>
            <Descriptions.Item label="연계지원요청" span={3}>
              {linkSprtDmnd.map((item, idx) => {
                return (
                  <Checkbox
                    key={`${item}${idx}`}
                    value={`${idx + 1}`}
                    checked={ojtAplyType?.a6 === `${idx + 1}`}
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a6', setOjtAplyType)
                    }
                  >
                    {item}
                  </Checkbox>
                );
              })}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SportNeedMatter01;
