import React from 'react';
import { Col, ConfigProvider, DatePicker, Row, Table } from 'antd';
import 'css/Common.css';
import { Button, Modal } from 'antd/lib';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');
const { RangePicker } = DatePicker;

const AgremEstbsPopup = ({
  agremEstbsPopupOpen,
  setAgremEstbsPopupOpen,
  arrAgremEstbs,
}) => {
  const arrAgremEstbsColumns = [
    {
      title: '구분',
      dataIndex: 'a1',
    },
    {
      title: '일정',
      dataIndex: 'a2',
      render: (_, record, index) => {
        console.log(record);
        return (
          <>
            <ConfigProvider locale={locale}>
              {typeof record?.a2 === 'string' ? (
                <DatePicker
                  // defaultValue={dayjs(record?.a2)}
                  placeholder={record?.a1}
                  onChange={(moment, dateString) => {
                    if (moment) {
                      console.log('일자: ', dateString);
                    }
                  }}
                />
              ) : (
                <RangePicker
                  format="YYYY-MM-DD"
                  // defaultValue={[
                  //   dayjs(record?.a2[0], 'YYYY-MM-DD'),
                  //   dayjs(record?.a2[1], 'YYYY-MM-DD'),
                  // ]}
                  onChange={(dates, dateStrings) => {
                    if (dates) {
                      console.log(
                        'From: ',
                        dateStrings[0],
                        ', to: ',
                        dateStrings[1]
                      );
                    } else {
                      console.log('Date Clear');
                    }
                  }}
                />
              )}
            </ConfigProvider>
          </>
        );
      },
    },
  ];

  const confirmClick = () => {
    setAgremEstbsPopupOpen(false);
  };
  const closeClick = () => {
    setAgremEstbsPopupOpen(false);
  };
  return (
    <Modal
      open={agremEstbsPopupOpen}
      title="협약 계획"
      onOk={confirmClick}
      onCancel={closeClick}
      width={1000}
      footer={[
        <Button
          key={'AgremEstbsPopup_confirmClick'}
          size="middle"
          className="eu-btn-popup-process-fine"
          onClick={confirmClick}
        >
          저장
        </Button>,
        <Button
          key={'AgremEstbsPopup_closeClick'}
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
        <Col span={24}>
          <Table
            scroll={{ y: 500 }}
            key={'AgremEstbsPopup01Table'}
            columns={arrAgremEstbsColumns}
            dataSource={arrAgremEstbs}
            size="small"
            bordered
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default AgremEstbsPopup;
