import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Input,
  Modal,
  ConfigProvider,
  Row,
  Select,
  Space,
  DatePicker,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import TitleComp from 'components/layout/TitleComp';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';
import { getListCommonCd } from 'components/common/Common';

import 'css/CommonUsr.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR'; // 우린 한국인이니까 ko_KR를 불러옵시다
moment.locale('ko');
const { TextArea } = Input;

const ChckResultDetailPopup = ({
  chckResultDetailPopupOpen,
  setChckResultDetailPopupOpen,
}) => {
  const confirmClick = () => {};
  const closeClick = () => {
    setChckResultDetailPopupOpen(false);
  };

  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  // 과제정보
  const [asmtInfo, setAsmtInfo] = useState({});

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a', 'b']));

    setAsmtInfo({
      a1: '2021',
      a2: '스마트공장구축',
      a3: '2021-I5R-000-000000',
      a4: '(주)도입기업1_스마트공장구축',
      a5: '수시점검',
      a6: '2022-09-30',
    });
  }, []);

  return (
    <>
      <Modal
        open={chckResultDetailPopupOpen}
        title="점검결과 상세 조회"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            key={'closeClick'}
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-usr-row-comp-title">
          <Col span={24}>
            <TitleComp>과제기본정보</TitleComp>
          </Col>
        </Row>
        <Row className="eu-usr-row-comp-cont">
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="사업연도" span={1.5}>
                {asmtInfo?.a1}
              </Descriptions.Item>
              <Descriptions.Item label="사업명" span={1.5}>
                {asmtInfo?.a2}
              </Descriptions.Item>
              <Descriptions.Item label="과제번호" span={1.5}>
                {asmtInfo?.a3}
              </Descriptions.Item>
              <Descriptions.Item label="과제명" span={1.5}>
                {asmtInfo?.a4}
              </Descriptions.Item>
              <Descriptions.Item label="점검구분" span={1.5}>
                {asmtInfo?.a5}
              </Descriptions.Item>
              <Descriptions.Item label="점검일자" span={1.5}>
                {asmtInfo?.a6}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row className="eu-usr-row-comp-title margin-top">
          <Col span={24}></Col>
        </Row>
        <Row className="eu-usr-row-comp-cont">
          <Col span={24}>
            {' '}
            <CmAtchDoc title={'평가위원 점검 결과'} />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default ChckResultDetailPopup;
