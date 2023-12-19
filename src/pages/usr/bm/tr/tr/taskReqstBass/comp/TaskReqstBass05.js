import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  Descriptions,
  DatePicker,
  ConfigProvider,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const TaskReqstBass05 = () => {
  const [ojtHopeYmd, setOjtHopeYmd] = useState({ a: '', b: '' });
  const ojtHopeYmdChange = (value, column) => {
    setOjtHopeYmd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>현장 평가/확인 희망일자</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button size="small" className="eu-usr-btn-table-warning">
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="현장평가 희망일자" span={3}>
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder={'현장평가 희망일자'}
                  onChange={(moment, dateString) => {
                    if (moment) {
                      console.log('희망일자: ', dateString);
                    }
                    ojtHopeYmdChange(dateString, 'a');
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="현장확인 희망일자">
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder={'현장확인 희망일자'}
                  onChange={(moment, dateString) => {
                    if (moment) {
                      console.log('희망일자: ', dateString);
                    }
                    ojtHopeYmdChange(dateString, 'b');
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

export default TaskReqstBass05;
