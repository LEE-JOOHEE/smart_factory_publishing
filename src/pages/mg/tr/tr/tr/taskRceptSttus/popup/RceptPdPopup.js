import React from 'react';
import { Button, Descriptions, Modal, DatePicker, ConfigProvider, Row, Col } from 'antd';
import 'css/Common.css';
import { ojtChange } from 'components/common/Common';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');
const { RangePicker } = DatePicker;
const RceptPdPopup = ({ rceptPdOpen, setRceptPdOpen, setOjtTaskReqst }) => {
  const confirmClick = () => {
    setRceptPdOpen(false);
  };
  const closeClick = () => {
    setRceptPdOpen(false);
  };

  return (
    <>
      <Modal
        open={rceptPdOpen}
        title="접수기간 연장"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1200}
        footer={[
          <Button
            key={''}
            size="middle"
            className="eu-btn-popup-process-fine"
            onClick={confirmClick}
          >
            확인
          </Button>,
          <Button
            key={'closeClick'}
            type="primary"
            size="middle"
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            취소
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title"></Row>
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="접수기간" span={3}>
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

                        ojtChange(dateStrings[0], 'a', setOjtTaskReqst);
                        ojtChange(dateStrings[1], 'b', setOjtTaskReqst);
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
      </Modal>
    </>
  );
};

export default RceptPdPopup;
