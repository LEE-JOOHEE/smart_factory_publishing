import React, { useState } from 'react';
import {
  Col,
  Row,
  Descriptions,
  Input,
  DatePicker,
  ConfigProvider,
  Select,
  Button,
  Modal,
  Table,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR'; // 우린 한국인이니까 ko_KR를 불러옵시다
import CmBaseEditor from 'components/editor/CmBaseEditor';
moment.locale('ko');

const InsttRcritRegist01 = ({ setPageType, arrRcritPbancAtchFile }) => {
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '2022',
    b: '스마트공장 구축 및 고도화 사업(대중소상생형)',
    c: '스마트공장 보급확산사업 공고(대중소 상생형 주관기관 모집)',
    d: '',
    e: '',
  });
  const ojtSrchCndChange = (value, column) => {
    console.log('value: ', value, 'column: ', column);
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const insertClick = () => {
    setPageType('LIST');
    Modal.info({ title: 'insertClick' });
  };

  const columns = [
    { title: '순번', dataIndex: 'a' },
    { title: '문서유형', dataIndex: 'b' },
    { title: '파일명', dataIndex: 'c' },
    { title: '크기(KB)', dataIndex: 'd' },
    { title: '등록일자', dataIndex: 'e' },
    { title: '파일첨부', dataIndex: 'f' },
  ];
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>모집공고 정보</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={insertClick}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="사업연도" span={1.5}>
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
            <Descriptions.Item label="사업분류" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'b');
                }}
                value={ojtSrchCnd?.b}
              />
            </Descriptions.Item>
            <Descriptions.Item label="공고명" span={3}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'c');
                }}
                value={ojtSrchCnd?.c}
              />
            </Descriptions.Item>
            <Descriptions.Item label="공고일자" span={1.5}>
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder={'공고일자'}
                  onChange={(moment, dateString) => {
                    if (moment) {
                      console.log('공고일자: ', dateString);
                    }
                    ojtSrchCndChange(dateString, 'd');
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="게시일자" span={1.5}>
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder={'게시일자'}
                  onChange={(moment, dateString) => {
                    if (moment) {
                      console.log('게시일자: ', dateString);
                    }
                    ojtSrchCndChange(dateString, 'e');
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>모집공고 문안</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          {/* 우측 버튼 */}
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <CmBaseEditor />
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>모집공고 첨부파일</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          {/* 우측 버튼 */}
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrRcritPbancAtchFile'}
            columns={columns}
            dataSource={arrRcritPbancAtchFile}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 200,
            }}
            tableLayout={'auto'}
          />
        </Col>
      </Row>
    </>
  );
};

export default InsttRcritRegist01;
