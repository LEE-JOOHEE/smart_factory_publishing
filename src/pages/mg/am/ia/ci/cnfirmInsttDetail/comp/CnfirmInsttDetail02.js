import React, { useState } from 'react';
import {
  Col,
  Row,
  Descriptions,
  Select,
  Input,
  DatePicker,
  ConfigProvider,
  Table,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const { TextArea } = Input;

const CnfirmInsttDetail02 = ({ arrDgnsRptp }) => {
  const [ojtEntLvlIdnty, setOjtEntLvlIdnty] = useState({
    a: '00130',
    b: '기초',
    c: 'Level 1',
    d: '',
    e: '585',
    f: '',
  });
  const ojtEntLvlIdntyChange = (value, column) => {
    setOjtEntLvlIdnty((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const columns = [
    { title: '항목', dataIndex: 'a', width: '30%', },
    { title: '필수여부', dataIndex: 'b', width: '8%', align: 'center', },
    { title: '허용파일', dataIndex: 'c', width: '17%', align: 'center', },
    { title: '첨부파일', dataIndex: 'd', width: '32%', },
    { title: '등록일', dataIndex: 'e', width: '13%', align: 'center', },
  ];
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={24}>
          <TitleComp>기업수준확인</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="수준확인서 일련번호" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtEntLvlIdntyChange(evt.target.value, 'a');
                }}
                value={ojtEntLvlIdnty?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="구축시스템 스마트화 수준" span={1.5}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtEntLvlIdntyChange(value, 'b');
                }}
                options={[
                  {
                    value: '기초',
                    label: '기초',
                  },
                ]}
                value={ojtEntLvlIdnty?.b}
              />
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 수준" span={1.5}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtEntLvlIdntyChange(value, 'c');
                }}
                options={[
                  {
                    value: 'Level 1',
                    label: 'Level 1',
                  },
                ]}
                value={ojtEntLvlIdnty?.c}
              />
            </Descriptions.Item>

            <Descriptions.Item
              label="수준확인서 유효기간 시작일 (종료일 = 시작일 + 3년)"
              span={1.5}
            >
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder={'시작일'}
                  onChange={(moment, dateString) => {
                    if (moment) {
                      console.log('시작일: ', dateString);
                    }
                    ojtEntLvlIdntyChange(dateString, 'd');
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 총점" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtEntLvlIdntyChange(evt.target.value, 'e');
                }}
                value={ojtEntLvlIdnty?.e}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mb-12 margin-top">
        <Col span={24}>
          <TitleComp>진단보고서</TitleComp>
        </Col>
        <Col span={24}>
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red">
              * 항목별 1개파일 20MB이내의 파일만 첨부가능합니다.
              <br/>* 사진등으로 인해 용량이 초과되시는 경우는 한글/워드에서 PDF로
              저장하는 기능을 활용하시면 파일 크기를 줄이실 수 있습니다.
            </span>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrDgnsRptp'}
            columns={columns}
            dataSource={arrDgnsRptp}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 400,
            }}
            tableLayout={'auto'}
          />
        </Col>
      </Row>
      
      <Row className="eu-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>반려의견</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="반려의견" span={3}>
              <TextArea
                value={ojtEntLvlIdnty?.f}
                onChange={(e) => ojtEntLvlIdntyChange(e.target.value, 'f')}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default CnfirmInsttDetail02;
