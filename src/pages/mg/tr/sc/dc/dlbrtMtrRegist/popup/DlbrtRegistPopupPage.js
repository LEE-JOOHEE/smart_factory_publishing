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
const DlbrtRegistPopupPage = ({ sptPlanPopupOpen, setSptPlanPopupOpen }) => {
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
      title: '담당자 조회',
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
        key="DlbrtMrtRegist"
        open={sptPlanPopupOpen}
        title="심의위원회 등록"
        //onOk={handleOk}
        onCancel={closeClick}
        width={800}
        footer={[
          <Button
            key={'insertClick'}
            size="middle"
            className="eu-btn-popup-process-fine"
            onClick={insertClick}
          >
            등록
          </Button>,
          <Button
            key={'updateClick'}
            size="middle"
            className="eu-btn-popup-process-fine"
            onClick={updateClick}
          >
            수정
          </Button>,
          <Button
            key={'deleteClick'}
            size="middle"
            className="eu-btn-popup-process-error"
            onClick={deleteClick}
          >
            삭제
          </Button>,
          <Button
            key={'closeClick'}
            type="primary"
            size="middle"
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Descriptions bordered size="small">
          <Descriptions.Item label="사업연도" span={3}>
            <Select
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
          <Descriptions.Item label="수행기관" span={3}>
            <Select
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
          <Descriptions.Item label="심의위원회명" span={3}>
            <Input
              onChange={(evt) => {
                ojtSptPlanChange(evt.target.value, 'd');
              }}
              value={ojtGroupCodes?.e}
            />
          </Descriptions.Item>
          <Descriptions.Item label="심의일자" span={3}>
            <ConfigProvider locale={locale}>
              <DatePicker
                onChange={(moment, dateString) => {
                  if (moment) {
                    console.log(dateString);
                  }
                  ojtSptPlanChange(dateString, 'e');
                }}
              />
            </ConfigProvider>
          </Descriptions.Item>
          <Descriptions.Item label="담당자" span={3}>
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
                    담당자 조회
                  </Button>
                </Col>
              </Row>
            </Input.Group>
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
};

export default DlbrtRegistPopupPage;
