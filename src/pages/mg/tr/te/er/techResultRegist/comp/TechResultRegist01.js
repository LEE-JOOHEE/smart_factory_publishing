import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Descriptions,
  Input,
  Row,
  Select,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';

moment.locale('ko');
const { RangePicker } = DatePicker;

const TechResultRegist01 = ({ ojtGroupCodes, searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '2022',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
    g: '',
    h: '',
    i: '',
  });

  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  useEffect(() => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
  }, [ojtSrchCnd]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>검색조건 입력</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
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
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
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
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={2}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'b');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.b ? ojtGroupCodes.b : []),
                ]}
                value={ojtSrchCnd?.b}
              />
            </Descriptions.Item>
            <Descriptions.Item label="수행기관">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'c');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.c ? ojtGroupCodes.c : []),
                ]}
                value={ojtSrchCnd?.c}
              />
            </Descriptions.Item>
            <Descriptions.Item label="평가위원회명" span={2}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'd');
                }}
                value={ojtGroupCodes?.d}
              />
            </Descriptions.Item>
            <Descriptions.Item label="분과명">
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'e');
                }}
                value={ojtGroupCodes?.e}
              />
            </Descriptions.Item>
            <Descriptions.Item label="평가기간" span={2}>
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

                      ojtSrchCndChange(dateStrings[0], 'f');
                      ojtSrchCndChange(dateStrings[1], 'g');
                    } else {
                      console.log('Date Clear');
                    }
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>

            <Descriptions.Item label="평가상태">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'h');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.h ? ojtGroupCodes.h : []),
                ]}
                value={ojtSrchCnd?.h}
              />
            </Descriptions.Item>
            <Descriptions.Item label="결과확정여부" span={2}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'i');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.i ? ojtGroupCodes.i : []),
                ]}
                value={ojtSrchCnd?.i}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default TechResultRegist01;
