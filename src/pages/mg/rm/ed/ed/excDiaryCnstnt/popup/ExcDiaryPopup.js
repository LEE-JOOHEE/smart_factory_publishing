import React, { useState } from 'react';
import {
  Col,
  Row,
  Modal,
  Button,
  Descriptions,
  ConfigProvider,
  DatePicker,
  TimePicker,
  Input,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR'; // 우린 한국인이니까 ko_KR를 불러옵시다
moment.locale('ko');

const { TextArea } = Input;

const ExcDiaryPopup = ({ open, closeClick, type = 'FLFMT' }) => {
  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
  });

  // 검색조건 입력 change 메소드
  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const confirmClick = () => {
    Modal.info({ title: `${JSON.stringify(ojtSrchCnd)}` });
    closeClick();
  };

  return (
    <Modal
      key="ExcDiaryPopup"
      title={type === 'FLFMT' ? '수행일지 확인' : '수시점검 확인'}
      open={open}
      onCancel={closeClick}
      width={1200}
      footer={[
        <div>
          <Button
            type="primary"
            size="middle"
            className="eu-btn-popup-process-default"
            onClick={confirmClick}
          >
            확인
          </Button>
          <Button
            type="primary"
            size="middle"
            className="eu-btn-popup-process-warning"
            onClick={closeClick}
          >
            닫기
          </Button>
        </div>,
      ]}
    >
      <Row className="eu-row-comp-title">
        <Col span={24}>
          <TitleComp>수시점검 확인</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="방문지도일자*" span={3}>
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder={'방문일자'}
                  onChange={(moment, dateString) => {
                    if (moment) {
                      console.log('방문일자: ', dateString);
                    }
                    ojtSrchCndChange(dateString, 'a');
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="지도시간*" span={3}>
              <ConfigProvider locale={locale}>
                <TimePicker.RangePicker
                  onChange={(times, timeStrings) => {
                    if (times) {
                      console.log(
                        'From: ',
                        timeStrings[0],
                        ', to: ',
                        timeStrings[1]
                      );

                      ojtSrchCndChange(timeStrings[0], 'b');
                      ojtSrchCndChange(timeStrings[1], 'c');
                    } else {
                      console.log('Time Clear');
                    }
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="추진내용*" span={3}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'd');
                }}
                value={ojtSrchCnd?.d}
              />
            </Descriptions.Item>
            <Descriptions.Item label="상세추진내용*" span={3}>
              <TextArea
                value={ojtSrchCnd?.e}
                onChange={(e) => ojtSrchCndChange(e.target.value, 'e')}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Modal>
  );
};

export default ExcDiaryPopup;
