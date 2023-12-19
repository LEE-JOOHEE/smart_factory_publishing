import React, { useState } from 'react';
import {
  Col,
  Row,
  Descriptions,
  Select,
  Input,
  Space,
  Button,
  ConfigProvider,
  DatePicker,
  Modal,
} from 'antd';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';
import TitleComp from 'components/layout/TitleComp';
import { DownloadOutlined } from '@ant-design/icons';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');
const { RangePicker } = DatePicker;

const SuplyEntrprsMtchg01 = ({ searchClick }) => {
  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
    c: '전체',
    d: '전체',
    e: '전체',
    f: '전체',
    g: '전체',
    h: '전체',
    i: '전체',
    j: '',
    k: '전체',
    l: '',
    m: '전체',
    n: '전체',
    o: '전체',
    p: '전체',
  });
  // 검색조건 입력 change 메소드
  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);
  const excelDownloadClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>매칭현황 검색조건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={() => searchClick(ojtSrchCnd)}
          >
            조회
          </Button>
          <Button
            key={'excelDownloadClick'}
            size="small"
            className="eu-btn-excel-download"
            icon={<DownloadOutlined />}
            onClick={excelDownloadClick}
          >
            엑셀다운로드
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
            <Descriptions.Item label="공급기업소재지">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'c');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.c}
              />
            </Descriptions.Item>
            <Descriptions.Item label="솔루션">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'd');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.d}
              />
            </Descriptions.Item>
            <Descriptions.Item label="레벨" span={3}>
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'e');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.e}
              />
            </Descriptions.Item>
            <Descriptions.Item label="업종" span={3}>
              <Space size={'large'}>
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'f');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.f}
                />
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'g');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.g}
                />
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'h');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.h}
                />
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'i');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.i}
                />
                업종코드 :
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'j');
                  }}
                  value={ojtSrchCnd?.j}
                />
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="사업분류">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'k');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.k}
              />
            </Descriptions.Item>
            <Descriptions.Item label="세부공고명" span={2}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'l');
                }}
                value={ojtSrchCnd?.l}
              />
            </Descriptions.Item>
            <Descriptions.Item label="구축결과">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'm');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.m}
              />
            </Descriptions.Item>
            <Descriptions.Item label="종사자규모">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'n');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.n}
              />
            </Descriptions.Item>
            <Descriptions.Item label="매출규모">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'o');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.o}
              />
            </Descriptions.Item>
            <Descriptions.Item label="매칭순위 기준">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'p');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.p}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <CmAgremExcelDwnld
        key={'CmAgremExcelDwnld'}
        cmAgremExcelDwnldOpen={cmAgremExcelDwnldOpen}
        setCmAgremExcelDwnldOpen={setCmAgremExcelDwnldOpen}
      />
    </>
  );
};

export default SuplyEntrprsMtchg01;
