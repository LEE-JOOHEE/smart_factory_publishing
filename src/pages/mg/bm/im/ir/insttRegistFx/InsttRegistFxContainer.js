import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  Descriptions,
  Select,
  ConfigProvider,
  DatePicker,
} from 'antd';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR'; // 우린 한국인이니까 ko_KR를 불러옵시다
moment.locale('ko');

const InsttRegistFxContainer = ({ schdlMngInsertClick }) => {
  const [ojtSchdlMng, setOjtSchdlMng] = useState({
    a: '신청',
    b: '',
    c: '09:00:00',
    d: '',
    e: '18:00:00',
    f: '20:00:00',
  });
  const ojtSchdlMngChange = (value, column) => {
    console.log('value: ', value, 'column: ', column);
    setOjtSchdlMng((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}></Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={() => schdlMngInsertClick(ojtSchdlMng)}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Descriptions layout="vertical" bordered column={6}>
            <Descriptions.Item label="접수유형">
              <Select
                onChange={(value) => {
                  ojtSchdlMngChange(value, 'a');
                }}
                options={[
                  {
                    value: '신청',
                    label: '신청',
                  },
                ]}
                value={ojtSchdlMng?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="접수시작일">
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder={'접수시작일'}
                  onChange={(moment, dateString) => {
                    if (moment) {
                      console.log('접수시작일: ', dateString);
                    }
                    ojtSchdlMngChange(dateString, 'b');
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="접수시작시각">
              {ojtSchdlMng?.c}
            </Descriptions.Item>
            <Descriptions.Item label="접수종료일">
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder={'접수종료일'}
                  onChange={(moment, dateString) => {
                    if (moment) {
                      console.log('접수종료일: ', dateString);
                    }
                    ojtSchdlMngChange(dateString, 'd');
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="접수종료시각">
              {ojtSchdlMng?.e}
            </Descriptions.Item>
            <Descriptions.Item label="유예마감시각">
              {ojtSchdlMng?.f}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(InsttRegistFxContainer);
