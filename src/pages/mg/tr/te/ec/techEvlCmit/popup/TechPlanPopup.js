import React, { useEffect, useState } from 'react';
import {
  Button,
  Descriptions,
  Input,
  Modal,
  Select,
  Row,
  Col,
  ConfigProvider,
  DatePicker,
  Space,
} from 'antd';

import { getListCommonCd } from 'components/common/Common';

import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const TechPlanPopup = ({ scmitCmpstnPopupOpen, setScmitCmpstnPopupOpen }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //평가위원회
  const [ojtEvalCmit, setOjtEvalCmit] = useState({
    a: '2022',
    b: '',
    c: '',
    d: '제3평가장',
    e: '간사님',
    f: '2022-10-01',
  });

  // const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  const ojtEvalCmitChange = (value, column) => {
    setOjtEvalCmit((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const closeClick = () => {
    setScmitCmpstnPopupOpen(false);
  };

  const tkcgOrgnzrClick = () => {
    Modal.info({
      title: '담당간사클릭-tkcgOrgnzrClick',
    });
  };
  const insertClick = () => {
    Modal.info({
      title: 'insertClick',
    });
  };
  const updateClick = () => {
    Modal.info({
      title: 'updateClick',
    });
  };
  const deleteClick = () => {
    Modal.info({
      title: 'deleteClick',
    });
  };

  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c']));
  }, []);

  useEffect(() => {
    console.log('ojtEvalCmit : ', ojtEvalCmit);
  }, [ojtEvalCmit]);

  return (
    <>
      <Modal
        key="evlCmitRegPopupOpen"
        open={scmitCmpstnPopupOpen}
        title="평가위원회 분과 계획"
        //onOk={handleOk}
        onCancel={closeClick}
        width={800}
        footer={[
          <Button
            key={'insertClick'}
            className="eu-btn-popup-process-fine"
            onClick={insertClick}
          >
            등록
          </Button>,
          <Button
            key={'updateClick'}
            className="eu-btn-popup-process-fine"
            onClick={updateClick}
          >
            수정
          </Button>,
          <Button
            key={'deleteClick'}
            className="eu-btn-popup-process-error"
            onClick={deleteClick}
          >
            삭제
          </Button>,
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="분과명" span={3}>
                <Input
                  onChange={(evt) => {
                    ojtEvalCmitChange(evt.target.value, 'a');
                  }}
                  value={ojtEvalCmit?.a}
                />
              </Descriptions.Item>
              <Descriptions.Item label="평가장소" span={3}>
                <div className="flex-row gap-8">
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 0] }}
                    onChange={(value) => {
                      ojtEvalCmitChange(value, 'b');
                    }}
                    options={[
                      {
                        value: '',
                        label: '전체',
                      },
                      ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                    ]}
                    value={ojtEvalCmit?.b}
                  />
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 0] }}
                    onChange={(value) => {
                      ojtEvalCmitChange(value, 'c');
                    }}
                    options={[
                      {
                        value: '',
                        label: '전체',
                      },
                      ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                    ]}
                    value={ojtEvalCmit?.c}
                  />
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="평가장소 상세" span={3}>
                <Input
                  onChange={(evt) => {
                    ojtEvalCmitChange(evt.target.value, 'd');
                  }}
                  value={ojtEvalCmit?.d}
                />
              </Descriptions.Item>
              <Descriptions.Item label="담당간사" span={3}>
                <div className="flex-row gap-16 item-center">
                  {ojtEvalCmit?.e}
                  <Button
                    className="eu-btn-crud-fine"
                    onClick={tkcgOrgnzrClick}
                  >
                    담당간사조회
                  </Button>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="분과평가일자" span={3}>
                <ConfigProvider locale={locale}>
                  <DatePicker
                    onChange={(moment, dateString) => {
                      if (moment) {
                        console.log(dateString);
                      }
                      ojtEvalCmitChange(dateString, 'f');
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

export default TechPlanPopup;
