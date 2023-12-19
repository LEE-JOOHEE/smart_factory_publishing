import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  ConfigProvider,
  DatePicker,
  Modal,
  Descriptions,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import { DownloadOutlined } from '@ant-design/icons';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');
const { RangePicker } = DatePicker;

const SuplyStatsArea01 = () => {
  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
  });
  // 검색조건 입력 change 메소드
  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>매칭통계 검색조건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button size="small" className="eu-btn-crud-default">
            차트보기
          </Button>
          <Button size="small" className="eu-btn-crud-fine">
            조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="매칭일자" span={3}>
              <ConfigProvider locale={locale}>
                <RangePicker
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
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
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SuplyStatsArea01;
