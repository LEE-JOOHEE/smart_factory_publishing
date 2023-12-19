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
const { RangePicker } = DatePicker;

const TechCompositionPopup = ({
  evlCmitRegPopupOpen,
  setEvlCmitRegPopupOpen,
}) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //평가위원회
  const [ojtEvalCmit, setOjtEvalCmit] = useState({
    a: '2022',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
    g: '',
    h: '간사님',
    i: '',
    j: '',
  });

  // const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  const ojtEvalCmitChange = (value, column) => {
    setOjtEvalCmit((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const closeClick = () => {
    setEvlCmitRegPopupOpen(false);
  };

  const [evlIdxPopupOpen, setEvalIdxPopupOpen] = useState(false);
  const evlIdxClick = () => {
    setEvalIdxPopupOpen(true);
    Modal.info({
      title: '평가표미리보기클릭',
      content: '평가표보기\nSC_AP_0801P01\n/mg/sm/em/em/EvlTableEx',
    });
  };

  const tkcgOrgnzrClick = () => {
    Modal.info({
      title: '담당간사클릭-tkcgOrgnzrClick',
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
        open={evlCmitRegPopupOpen}
        title="평가위원회 구성"
        //onOk={handleOk}
        onCancel={closeClick}
        width={800}
        footer={[
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
              <Descriptions.Item label="사업연도/사업분류" span={3}>
                <div className="flex-row gap-8">
                  <Select
                    getPopupContainer={trigger => trigger.parentNode} 
                    dropdownAlign={{ offset: [0, 0] }}
                    onChange={(value) => {
                      ojtEvalCmitChange(value, 'a');
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
                    value={ojtEvalCmit?.a}
                  />
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
                      ...(ojtEvalCmit?.b ? ojtGroupCodes.b : []),
                    ]}
                    value={ojtEvalCmit?.b}
                  />
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="평가위원회명" span={3}>
                <Input
                  onChange={(evt) => {
                    ojtEvalCmitChange(evt.target.value, 'c');
                  }}
                  value={ojtEvalCmit?.c}
                />
              </Descriptions.Item>
              <Descriptions.Item label="수행기관" span={3}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode} 
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtEvalCmitChange(value, 'd');
                  }}
                  options={[
                    {
                      value: '',
                      label: '전체',
                    },
                    ...(ojtEvalCmit?.d ? ojtGroupCodes.d : []),
                  ]}
                  value={ojtEvalCmit?.d}
                />
              </Descriptions.Item>
              <Descriptions.Item label="평가방법" span={3}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode} 
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtEvalCmitChange(value, 'e');
                  }}
                  options={[
                    {
                      value: '',
                      label: '전체',
                    },
                    ...(ojtEvalCmit?.e ? ojtGroupCodes.e : []),
                  ]}
                  value={ojtEvalCmit?.e}
                />
              </Descriptions.Item>
              <Descriptions.Item label="평가구분" span={3}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode} 
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtEvalCmitChange(value, 'f');
                  }}
                  options={[
                    {
                      value: '',
                      label: '전체',
                    },
                    ...(ojtEvalCmit?.f ? ojtGroupCodes.f : []),
                  ]}
                  value={ojtEvalCmit?.f}
                />
              </Descriptions.Item>
              <Descriptions.Item label="평가지표" span={3}>
                <div className="flex-row gap-8">
                  {' '}
                  <Select
                    getPopupContainer={trigger => trigger.parentNode} 
                    dropdownAlign={{ offset: [0, 0] }}
                    onChange={(value) => {
                      ojtEvalCmitChange(value, 'g');
                    }}
                    options={[
                      {
                        value: '',
                        label: '전체',
                      },
                      ...(ojtEvalCmit?.g ? ojtGroupCodes.g : []),
                    ]}
                    value={ojtEvalCmit?.g}
                  />
                  <Button
                    className="eu-btn-crud-fine"
                    onClick={evlIdxClick}
                  >
                    미리보기
                  </Button>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="총괄간사" span={3}>
                <div className="flex-row gap-16 item-center">
                  {ojtEvalCmit?.h}
                  <Button
                    className="eu-btn-crud-fine"
                    onClick={tkcgOrgnzrClick}
                  >
                    담당간사조회
                  </Button>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="평가기간" span={3}>
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

                        ojtEvalCmitChange(dateStrings[0], 'i');
                        ojtEvalCmitChange(dateStrings[1], 'j');
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

export default TechCompositionPopup;
