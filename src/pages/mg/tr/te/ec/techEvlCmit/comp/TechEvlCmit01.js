import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Input,
  Row,
  Select,
  DatePicker,
  ConfigProvider,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const { RangePicker } = DatePicker;

const TechEvlCmit01 = ({ ojtGroupCodes, searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '2022',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
    g: '2022-10-01',
    h: '2022-10-31',
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
            <Descriptions.Item label="평가구분" span={2}>
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'd');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.d ? ojtGroupCodes.d : []),
                ]}
                value={ojtSrchCnd?.d}
              />
            </Descriptions.Item>

            <Descriptions.Item label="평가방법">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'e');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.e ? ojtGroupCodes.e : []),
                ]}
                value={ojtSrchCnd?.e}
              />
            </Descriptions.Item>
            <Descriptions.Item label="평가위원회명" span={2}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'f');
                }}
                value={ojtGroupCodes?.f}
              />
            </Descriptions.Item>

            <Descriptions.Item label="평가기간">
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

                      ojtSrchCndChange(dateStrings[0], 'g');
                      ojtSrchCndChange(dateStrings[1], 'h');
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
export default TechEvlCmit01;
