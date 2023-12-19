import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  Select,
  Input,
  Descriptions,
  DatePicker,
  Modal,
  Table,
  ConfigProvider,
  Radio,
  Space,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');
const { RangePicker } = DatePicker;

const SprvisnChangeReqst01 = ({ ojtSprvisnInfo, setOjtKey, setPageType }) => {
  const columns = [
    {
      title: '항목',
      dataIndex: 'a1',
    },
    {
      title: '첨부파일',
      dataIndex: 'a2',
    },
    {
      title: '추가',
      dataIndex: 'a3',
      render: (_, record, index) => {
        return (
          <>
            <Button
              className="eu-usr-btn-table-fine"
              size="small"
              onClick={(event) => {
                console.log(record, index);
                Modal.info({ title: '첨부파일 추가' });
              }}
            >
              추가
            </Button>
          </>
        );
      },
    },
  ];

  const arrChgDsctn = [
    {
      a1: '공문',
      a2: '',
      a3: '',
    },
  ];

  const [ojtReqstChangeInfo, setOjtReqstChangeInfo] = useState({
    a1: '',
    a2: '일정변경',
    a3: '최종감리',
    a4: ' ~ ',
    a5: '',
    a6: '',
    b1: '감리인변경',
    b2: '감리인 변경',
    b3: '퇴사',
    b4: '김감리',
    b5: '',
  });

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>과제정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="사업연도" span={1.5}>
              {ojtSprvisnInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={1.5}>
              {ojtSprvisnInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={1.5}>
              {ojtSprvisnInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              {ojtSprvisnInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtSprvisnInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="IT공급기업" span={1.5}>
              {ojtSprvisnInfo?.a6}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>변경요청 내용(일정변경 신청)</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="제목" span={1.5}>
              <Input
                value={ojtReqstChangeInfo?.a1}
                onChange={(e) =>
                  ojtChange(e.target.value, 'a1', setOjtReqstChangeInfo)
                }
              />
            </Descriptions.Item>
            <Descriptions.Item label="변경요청항목" span={1.5}>
              <Select
                placeholder="사업년도 선택"
                onChange={(value) =>
                  ojtChange(value, 'a2', setOjtReqstChangeInfo)
                }
                options={[
                  {
                    value: '일정변경',
                    label: '일정변경',
                  },
                ]}
                value={ojtReqstChangeInfo?.a2}
              />
            </Descriptions.Item>
            <Descriptions.Item label="변경요청내용" span={3}>
              <Descriptions size="small" bordered>
                <Descriptions.Item label="감리일정구분" span={3}>
                  <Select
                    placeholder="사업년도 선택"
                    onChange={(value) =>
                      ojtChange(value, 'a3', setOjtReqstChangeInfo)
                    }
                    options={[
                      {
                        value: '최종감리',
                        label: '최종감리',
                      },
                    ]}
                    value={ojtReqstChangeInfo?.a3}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="기존일정" span={3}>
                  {ojtReqstChangeInfo?.a4}
                </Descriptions.Item>
                <Descriptions.Item label="변경일정" span={3}>
                  <ConfigProvider locale={locale}>
                    <RangePicker
                      showTime
                      format="YYYY-MM-DD"
                      onChange={(dates, dateStrings) => {
                        if (dates) {
                          console.log(
                            'From: ',
                            dateStrings[0],
                            ', to: ',
                            dateStrings[1]
                          );

                          ojtChange(
                            dateStrings[0],
                            'a5',
                            setOjtReqstChangeInfo
                          );
                          ojtChange(
                            dateStrings[1],
                            'a6',
                            setOjtReqstChangeInfo
                          );
                        } else {
                          console.log('Date Clear');
                        }
                      }}
                    />
                  </ConfigProvider>
                </Descriptions.Item>
              </Descriptions>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>변경요청 내용(감리인변경 신청)</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="제목" span={1.5}>
              {ojtReqstChangeInfo?.b1}
            </Descriptions.Item>
            <Descriptions.Item label="변경요청항목" span={1.5}>
              <Select
                placeholder="변경요청항목 선택"
                onChange={(value) =>
                  ojtChange(value, 'b2', setOjtReqstChangeInfo)
                }
                options={[
                  {
                    value: '감리인 변경',
                    label: '감리인 변경',
                  },
                ]}
                value={ojtReqstChangeInfo?.b2}
              />
            </Descriptions.Item>
            <Descriptions.Item label="변경요청내용" span={3}>
              <Descriptions size="small" bordered>
                <Descriptions.Item label="변경요청사유" span={3}>
                  <Radio.Group
                    options={[
                      {
                        value: '퇴사',
                        label: '퇴사',
                      },
                      {
                        value: '변가',
                        label: '변가',
                      },
                    ]}
                    onChange={(e) =>
                      ojtChange(e.target.value, 'b3', setOjtReqstChangeInfo)
                    }
                    value={ojtReqstChangeInfo?.b3}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="기존 감리인" span={3}>
                  {ojtReqstChangeInfo?.b4}
                </Descriptions.Item>
                <Descriptions.Item label="변경 감리인" span={3}>
                  <Space>
                    <Select
                      placeholder="감리인 선택"
                      onChange={(value) =>
                        ojtChange(value, 'b5', setOjtReqstChangeInfo)
                      }
                      options={[
                        {
                          value: '이감리',
                          label: '이감리',
                        },
                        {
                          value: '',
                          label: '감리인 선택',
                        },
                      ]}
                      value={ojtReqstChangeInfo?.b5}
                    />
                    <Button
                      className="eu-usr-btn-table-fine"
                      size="small"
                      icon={<SearchOutlined />}
                      onClick={(event) => {
                        Modal.info({
                          title: '감리원선택팝업 빨간색 표시되어있음',
                        });
                      }}
                    >
                      검색
                    </Button>
                  </Space>
                </Descriptions.Item>
              </Descriptions>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>감리변경내역</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrChgDsctn}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 120 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SprvisnChangeReqst01;
