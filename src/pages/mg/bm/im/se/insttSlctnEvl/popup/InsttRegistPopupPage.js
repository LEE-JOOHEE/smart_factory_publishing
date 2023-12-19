import React, { useEffect, useState } from 'react';
import {
  Button,
  Descriptions,
  Input,
  Modal,
  Row,
  Col,
  Select,
  ConfigProvider,
  DatePicker,
  Space,
} from 'antd';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR'; // 우린 한국인이니까 ko_KR를 불러옵시다
moment.locale('ko');

const InsttRegistPopupPage = ({ open, closeClick }) => {
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '2022',
    b: '선택',
    c: '선택',
    d: '',
    e: '',
    f: '담당자',
  });

  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const picRegClick = () => {
    Modal.info({ title: 'picRegClick' });
  };

  const insertClick = () => {
    Modal.info({ title: `${JSON.stringify(ojtSrchCnd)}` });
  };

  const updateClick = () => {
    Modal.info({ title: `${JSON.stringify(ojtSrchCnd)}` });
  };

  const deleteClick = () => {
    Modal.info({ title: 'deleteClick' });
  };

  return (
    <>
      <Modal
        key="InsttRegistPopupPage"
        open={open}
        title="기관선정 평가위원회 등록"
        onCancel={closeClick}
        width={1400}
        footer={[
          <>
            <Button
              type="primary"
              size="middle"
              className="eu-btn-popup-process-fine"
              onClick={insertClick}
            >
              등록
            </Button>
            <Button
              size="middle"
              className="eu-btn-popup-process-warning"
              onClick={updateClick}
            >
              수정
            </Button>
            <Button
              size="middle"
              className="eu-btn-popup-process-error"
              onClick={deleteClick}
            >
              삭제
            </Button>
            <Button
              key={'closeClick'}
              type="primary"
              size="middle"
              className="eu-btn-popup-process-default"
              onClick={closeClick}
            >
              닫기
            </Button>
          </>,
        ]}
      >
        <Row className="eu-row-comp-title"></Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="사업연도" span={1.5}>
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'a');
                  }}
                  options={[
                    {
                      value: '2022',
                      label: '2022',
                    },
                  ]}
                  value={ojtSrchCnd?.a}
                />
              </Descriptions.Item>
              <Descriptions.Item label="사업분류" span={1.5}>
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'b');
                  }}
                  options={[
                    {
                      value: '선택',
                      label: '선택',
                    },
                  ]}
                  value={ojtSrchCnd?.b}
                />
              </Descriptions.Item>
              <Descriptions.Item label="세부공고" span={3}>
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'c');
                  }}
                  options={[
                    {
                      value: '선택',
                      label: '선택',
                    },
                  ]}
                  value={ojtSrchCnd?.c}
                />
              </Descriptions.Item>
              <Descriptions.Item label="평가위원회명" span={3}>
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'd');
                  }}
                  value={ojtSrchCnd?.d}
                />
              </Descriptions.Item>
              <Descriptions.Item label="평가일자" span={3}>
                <ConfigProvider locale={locale}>
                  <DatePicker
                    placeholder={'평가일자'}
                    onChange={(moment, dateString) => {
                      if (moment) {
                        console.log('평가일자: ', dateString);
                      }
                      ojtSrchCndChange(dateString, 'e');
                    }}
                  />
                </ConfigProvider>
              </Descriptions.Item>
              <Descriptions.Item label="담당간사" span={3}>
                <Space>
                  {ojtSrchCnd?.f}
                  <Button
                    size="small"
                    className="eu-btn-table-default"
                    onClick={picRegClick}
                  >
                    담당자 등록
                  </Button>
                </Space>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default InsttRegistPopupPage;
