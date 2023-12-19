import React, { useState } from 'react';
import {
  Col,
  Descriptions,
  Row,
  DatePicker,
  ConfigProvider,
  Modal,
  Button,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { ojtChange } from 'components/common/Common';

import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');
const { RangePicker } = DatePicker;
// SchdlChg
// PrgrmChg
// SchdlChg
// ScpChg
const AgremChangeRcept03 = ({
  saveClick = () => Modal.info({ title: '변경 저장' }),
}) => {
  const [ojtSchdlChg, setOjtSchdlChg] = useState({
    a1: '2020-08-26 ~ 2020-06-30   구축기간 : 2020-08-26 ~ 2020-12-30, 집중AS기간 : 2020-12-31 ~ 2021-06-30',
    a2: '',
    a3: '',
  });

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>변경 전 구축기간</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="기존사업기간" span={3}>
              {ojtSchdlChg?.a1}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>변경 후 구축기간</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          ※ 사업종료일 입력 시 구축기간 종료일자에 +6개월(집중AS기간)을 가산한
          일정으로 계산하여 입력
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="변경사업기간" span={3}>
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

                      ojtChange(dateStrings[0], 'a2', setOjtSchdlChg);
                      ojtChange(dateStrings[1], 'a3', setOjtSchdlChg);
                    } else {
                      console.log('Date Clear');
                    }
                  }}
                />
              </ConfigProvider>
              구축기간 : {ojtSchdlChg.a2 || '없음'} ~ {ojtSchdlChg.a3 || '없음'}{' '}
              , 집중AS기간 : {ojtSchdlChg.a2 || '없음'} ~{' '}
              {ojtSchdlChg.a3 || '없음'}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top"></Row>
      <Row className="eu-row-comp-cont">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button className="eu-btn-crud-fine" size="small" onClick={saveClick}>
            저장
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeRcept03;
