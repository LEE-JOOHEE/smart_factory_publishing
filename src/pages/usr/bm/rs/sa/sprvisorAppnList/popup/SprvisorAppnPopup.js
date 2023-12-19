import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Modal,
  Button,
  Descriptions,
  DatePicker,
  Table,
  ConfigProvider,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import { ojtChange } from 'components/common/Common';
moment.locale('ko');
const { RangePicker } = DatePicker;

const SprvisorAppnPopup = ({ open, closeClick, popupSelectClick }) => {
  const [arrSpvsDsgn, setArrSpvsDsgn] = useState([]);
  const [arrCheckedSpvsDsgn, setArrCheckedSpvsDsgn] = useState([]);
  const [ojtSpvsDsgn, setOjtSpvsDsgn] = useState({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
  });
  const columns = [
    { title: '감리인', dataIndex: 'a1' },
    { title: '소속기관', dataIndex: 'a2' },
    {
      title: '이메일',
      dataIndex: 'a3',
    },
    {
      title: '연락처',
      dataIndex: 'a4',
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedSpvsDsgn(selectedRows);
    },
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a1: '김감리',
        a2: '주(감리기관)',
        a3: 'kim@naver.com',
        a4: '010-1111-2222',
      });
    }
    setArrSpvsDsgn(tmp1);
  }, []);

  return (
    <Modal
      key="SprvisorAppnPopup"
      title={'감리원 지정'}
      open={open}
      onCancel={closeClick}
      width={1200}
      footer={[
        <div>
          <Button
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-warning"
            onClick={() => {
              popupSelectClick(arrCheckedSpvsDsgn, ojtSpvsDsgn);
              closeClick();
            }}
          >
            저장
          </Button>
          <Button
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-warning"
            onClick={closeClick}
          >
            취소
          </Button>
        </div>,
      ]}
    >
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>감리인</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrSpvsDsgn'}
            columns={columns}
            dataSource={arrSpvsDsgn}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 300,
            }}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>감리인</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions layout="vertical" bordered column={3}>
            <Descriptions.Item label="착수감리">
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder={'착수감리'}
                  onChange={(moment, dateString) => {
                    if (moment) {
                      console.log('착수감리: ', dateString);
                    }
                    ojtChange(dateString, 'a1', setOjtSpvsDsgn);
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="중간감리">
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

                      ojtChange(dateStrings[0], 'a2', setOjtSpvsDsgn);
                      ojtChange(dateStrings[1], 'a3', setOjtSpvsDsgn);
                    } else {
                      console.log('Date Clear');
                    }
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="최종감리">
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

                      ojtChange(dateStrings[0], 'a4', setOjtSpvsDsgn);
                      ojtChange(dateStrings[1], 'a5', setOjtSpvsDsgn);
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
  );
};

export default SprvisorAppnPopup;
