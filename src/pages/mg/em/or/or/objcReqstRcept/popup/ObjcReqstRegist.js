import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  DatePicker,
  Descriptions,
  Input,
  Modal,
  ConfigProvider,
  Row,
  Select,
  Space,
  Tabs,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import ObjcTrgetSearch from 'pages/mg/em/or/or/objcReqstRcept/popup/ObjcTrgetSearch';
import TitleComp from 'components/layout/TitleComp';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';
import { getListCommonCd, ojtChange } from 'components/common/Common';

import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR'; // 우린 한국인이니까 ko_KR를 불러옵시다
moment.locale('ko');
const { TextArea } = Input;

const ObjcReqstRegist = ({ objcReqstRegistOpen, setObjcReqstRegistOpen }) => {
  const confirmClick = () => {};
  const closeClick = () => {
    setObjcReqstRegistOpen(false);
  };

  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //과제정보
  const [asmtInfo, setAsmtInfo] = useState({});

  //이의신청정보
  const [objcAplyInfo, setObjcAplyInfo] = useState({});

  const [objcTrgetSearchOpen, setObjcTrgetSearchOpen] = useState(false);
  const objcTrgetSearchClick = () => {
    setObjcTrgetSearchOpen(true);
  };

  const aplcntInqClick = () => {
    Modal.info({
      title: '신청자 조회 클릭',
    });
  };

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a', 'b']));

    setAsmtInfo({
      a1: '2021',
      a2: '스마트공장구축',
      a3: '2021-I5R-000-000000',
      a4: '(주)도입기업1_스마트공장구축',
      a5: '(주)도입기업1',
      a6: '(주)공급기업1',
      a7: '선정평가',
      a8: '2022-09-30',
      a9: '탈락대상',
      a10: '',
    });
    setObjcAplyInfo({
      a1: '개발자',
      a2: '개발연구원',
      a3: '평가결과 이의신청',
      a4: '',
      a5: '',
      a6: '',
      a7: '',
      a8: '',
    });
  }, []);

  return (
    <>
      <Modal
        open={objcReqstRegistOpen}
        title="이의신청 등록"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1200}
        style={{ height: 'calc(100vh - 100px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        footer={[
          <Button
            key={'confirmClick'}
            size="middle"
            className="eu-btn-popup-process-fine"
            onClick={confirmClick}
          >
            저장
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
        <Row className="eu-row-comp-title">
          <Col span={24}>
            <TitleComp>과제정보</TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="사업연도">
                {asmtInfo?.a1}
              </Descriptions.Item>
              <Descriptions.Item label="사업명" span={2}>
                {asmtInfo?.a2}
              </Descriptions.Item>
              <Descriptions.Item label="과제번호">
                <Space>
                  {asmtInfo?.a3}
                  <Button
                    key={'objcTrgetSearchClick'}
                    size="middle"
                    icon={<SearchOutlined />}
                    className="eu-btn-popup-process-default"
                    onClick={objcTrgetSearchClick}
                  >
                    조회
                  </Button>
                </Space>
              </Descriptions.Item>
              <Descriptions.Item label="과제명" span={2}>
                {asmtInfo?.a4}
              </Descriptions.Item>
              <Descriptions.Item label="도입기업">
                {asmtInfo?.a5}
              </Descriptions.Item>
              <Descriptions.Item label="IT공급기업" span={2}>
                {asmtInfo?.a6}
              </Descriptions.Item>
              <Descriptions.Item label="평가구분">
                {asmtInfo?.a7}
              </Descriptions.Item>
              <Descriptions.Item label="평가일자" span={2}>
                {asmtInfo?.a8}
              </Descriptions.Item>
              <Descriptions.Item label="평가결과">
                {asmtInfo?.a9}
              </Descriptions.Item>
              <Descriptions.Item label="세부평가결과" span={2}>
                {asmtInfo?.a10}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>이의신청정보</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}></Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="신청자">
                <Space>
                  {objcAplyInfo?.a1}
                  <Button
                    key={'aplcntInqClick'}
                    size="middle"
                    icon={<SearchOutlined />}
                    className="eu-btn-popup-process-default"
                    onClick={aplcntInqClick}
                  >
                    조회
                  </Button>
                </Space>
              </Descriptions.Item>
              <Descriptions.Item label="신청자소속기관" span={2}>
                {objcAplyInfo?.a2}
              </Descriptions.Item>
              <Descriptions.Item label="이의신청유형">
                <Select
                  placeholder="평가결과이의신청"
                  onChange={(value) => ojtChange(value, 'a3', setObjcAplyInfo)}
                  options={[
                    {
                      value: '',
                      label: '평가결과이의신청',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={objcAplyInfo?.a3}
                />
              </Descriptions.Item>
              <Descriptions.Item label="신청일자" span={2}>
                <ConfigProvider locale={locale}>
                  <DatePicker
                    onChange={(moment, dateString) => {
                      ojtChange(dateString, 'a4', setObjcAplyInfo);
                    }}
                  />
                </ConfigProvider>
              </Descriptions.Item>
              <Descriptions.Item label="발송공문문서번호">
                <Input
                  value={objcAplyInfo?.a5}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a5', setObjcAplyInfo)
                  }
                />
              </Descriptions.Item>
              <Descriptions.Item label="발송기관명" span={2}>
                <Input
                  value={objcAplyInfo?.a6}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a6', setObjcAplyInfo)
                  }
                />
              </Descriptions.Item>
              <Descriptions.Item label="발송공문제목" span={3}>
                <Input
                  value={objcAplyInfo?.a7}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a7', setObjcAplyInfo)
                  }
                />
              </Descriptions.Item>
              <Descriptions.Item label="신청내용" span={3}>
                <TextArea
                  rows={4}
                  value={objcAplyInfo?.a8}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a8', setObjcAplyInfo)
                  }
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row className="eu-row-comp-title margin-top">
          <Col span={24}>
            <CmAtchDoc title={'제출서류'} />
          </Col>
        </Row>
      </Modal>
      {/* 이의신청 과제검색 */}
      <ObjcTrgetSearch
        key={'ObjcTrgetSearch'}
        objcTrgetSearchOpen={objcTrgetSearchOpen}
        setObjcTrgetSearchOpen={setObjcTrgetSearchOpen}
      />
    </>
  );
};

export default ObjcReqstRegist;
