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

const LevelCnfrmnPopup = ({
  levelCnfrmnPopupOpen,
  setLevelCnfrmnPopupOpen,
}) => {
  const confirmClick = () => {};
  const closeClick = () => {
    setLevelCnfrmnPopupOpen(false);
  };

  return (
    <>
      <Modal
        open={levelCnfrmnPopupOpen}
        title="수준확인서 발급"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            key={'confirmClick'}
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-fine"
            onClick={confirmClick}
          >
            발급 신청
          </Button>,
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
        <Row className="eu-usr-row-comp-cont">
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="증명서사용도(25자이내)" span={3}>
                <Space>
                  <Input></Input>
                </Space>
              </Descriptions.Item>
              <Descriptions.Item label="제출처(25자이내)" span={3}>
                <Space>
                  <Input></Input>
                </Space>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default LevelCnfrmnPopup;
