import React, { useState } from 'react';
import {
  Col,
  Row,
  Descriptions,
  Select,
  Input,
  DatePicker,
  ConfigProvider,
  Button,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const { RangePicker } = DatePicker;

const DlbrtMtrRegist01 = ({ searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '2022',
    b: '',
    c: '',
    d: '',
    e: '2022-10-01',
    f: '2022-10-31',
    g: '',
  });

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
          <TitleComp>검색조건 입력</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            key={'searchClick'}
            size="small"
            className="eu-btn-crud-fine"
            onClick={() => searchClick(ojtSrchCnd)}
          >
            조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="사업연도">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'a');
                }}
                options={[
                  {
                    value: '2020',
                    label: '2020',
                  },
                  {
                    value: '2021',
                    label: '2021',
                  },
                  {
                    value: '2022',
                    label: '2022',
                  },
                ]}
                value={ojtSrchCnd?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={2}>
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'b');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.b}
              />
            </Descriptions.Item>
            <Descriptions.Item label="수행기관">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'c');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.c}
              />
            </Descriptions.Item>
            <Descriptions.Item label="심의위원회 명" span={2}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'd');
                }}
                value={ojtSrchCnd?.d}
              />
            </Descriptions.Item>
            <Descriptions.Item label="심의일자">
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

                      ojtSrchCndChange(dateStrings[0], 'e');
                      ojtSrchCndChange(dateStrings[1], 'f');
                    } else {
                      console.log('Date Clear');
                    }
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="확정여부" span={2}>
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'g');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.g}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default DlbrtMtrRegist01;
