import React, { useEffect, useState } from 'react';
import {
  Button,
  Descriptions,
  Input,
  Modal,
  Select,
  DatePicker,
  ConfigProvider,
  Row,
  Col,
} from 'antd';
import { getListCommonCd } from 'components/common/Common';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const { RangePicker } = DatePicker;
const SptPlanPopup = ({ sptPlanPopupOpen, setSptPlanPopupOpen }) => {
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
  const closeClick = () => {
    setSptPlanPopupOpen(false);
  };
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const [ojtSptPlan, setOjtSptPlan] = useState({
    a: '2022',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
    g: '',
    h: '',
  });

  const ojtSptPlanChange = (value, column) => {
    setOjtSptPlan((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const tkcgOrgnzrClick = () => {
    Modal.info({
      title: '담당간사조회',
    });
  };

  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c', 'd']));
  }, []);

  useEffect(() => {
    console.log('ojtSptPlan : ', ojtSptPlan);
  }, [ojtSptPlan]);

  return (
    <>
      <Modal
        key="CmEvlPlanCrtPage"
        open={sptPlanPopupOpen}
        title="평가계획 수립"
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
          <Row className="eu-row-comp-title"></Row>
          <Descriptions bordered size="small">
            <Descriptions.Item label="사업연도" span={3}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSptPlanChange(value, 'a');
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
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSptPlan?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={3}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSptPlanChange(value, 'b');
                }}
                options={[
                  {
                    value: '',
                    label: '선택',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
                value={ojtSptPlan?.b}
              />
            </Descriptions.Item>
            <Descriptions.Item label="수행기관(TP)" span={3}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSptPlanChange(value, 'c');
                }}
                options={[
                  {
                    value: '',
                    label: '선택',
                  },
                  ...(ojtGroupCodes?.c ? ojtGroupCodes.c : []),
                ]}
                value={ojtSptPlan?.c}
              />
            </Descriptions.Item>
            <Descriptions.Item label="지역" span={3}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSptPlanChange(value, 'd');
                }}
                options={[
                  {
                    value: '',
                    label: '선택',
                  },
                  ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                ]}
                value={ojtSptPlan?.d}
              />
            </Descriptions.Item>
            <Descriptions.Item label="계획명" span={3}>
              <Input
                onChange={(evt) => {
                  ojtSptPlanChange(evt.target.value, 'e');
                }}
                value={ojtGroupCodes?.e}
              />
            </Descriptions.Item>
            <Descriptions.Item label="평가기간" span={3}>
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

                      ojtSptPlanChange(dateStrings[0], 'g');
                      ojtSptPlanChange(dateStrings[1], 'h');
                    } else {
                      console.log('Date Clear');
                    }
                  }}
                />
              </ConfigProvider>
            </Descriptions.Item>
            <Descriptions.Item label="담당간사" span={3}>
              <Input.Group size="default">
                <Row gutter={8}>
                  <Col span={5}>
                    <Input
                      onChange={(evt) => {
                        ojtSptPlanChange(evt.target.value, 'f');
                      }}
                      value={ojtGroupCodes?.f}
                    />
                  </Col>
                  <Col span={8}>
                    <Button
                      size="small"
                      className="eu-btn-crud-default"
                      onClick={tkcgOrgnzrClick}
                    >
                      담당간사조회
                    </Button>
                  </Col>
                </Row>
              </Input.Group>
            </Descriptions.Item>
          </Descriptions>
        </Row>
      </Modal>
    </>
  );
};

export default SptPlanPopup;
