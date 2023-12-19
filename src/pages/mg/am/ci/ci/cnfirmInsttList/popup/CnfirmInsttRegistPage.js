import React, { useState } from 'react';
import TitleComp from 'components/layout/TitleComp';
import { Col, Row, Descriptions, Select, Input, Modal, Button, Space } from 'antd';
import 'css/Common.css';
import InsttPopupPage from 'pages/mg/am/ci/ci/cnfirmInsttList/popup/InsttPopupPage';

const CnfirmInsttRegistPage = ({ registOpen, registCloseClick }) => {
  const [ojtAplyAsmtInfo, setOjtAplyAsmtInfo] = useState({
    a: '2022-I2R-023-000001',
    b: '',
    c: '스마트화 수준확인',
    d: '우상민',
    e: '2021_스마트수준확인',
  });

  const [ojtIdntyInst, setOjtIdntyInst] = useState('대한상공회의소');

  const [open, setOpen] = useState(false);
  const openClick = () => {
    setOpen(true);
  };
  const closeClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        key="CnfirmInsttRegistPage"
        title="확인기관 배정"
        open={registOpen}
        onCancel={registCloseClick}
        width={1200}
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
          <Row className="eu-row-comp-title mb-0">
            <Col span={24}>
              <TitleComp>신청과제 정보</TitleComp>
            </Col>
          </Row>
          <Col span={24}>
            <Descriptions size={'small'} bordered>
              <Descriptions.Item label="과제번호" span={1.5}>
                {ojtAplyAsmtInfo?.a}
              </Descriptions.Item>
              <Descriptions.Item label="과제구분" span={1.5}>
                {ojtAplyAsmtInfo?.b}
              </Descriptions.Item>
              <Descriptions.Item label="사업명" span={1.5}>
                {ojtAplyAsmtInfo?.c}
              </Descriptions.Item>
              <Descriptions.Item label="신청자" span={1.5}>
                {ojtAplyAsmtInfo?.d}
              </Descriptions.Item>
              <Descriptions.Item label="과제명">
                {ojtAplyAsmtInfo?.e}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title mb-0">
            <Col span={24}>
              <TitleComp>확인기관 지정</TitleComp>
            </Col>
          </Row>
          <Col span={24}>
            <Descriptions size={'small'} bordered>
              <Descriptions.Item label="확인기관명" span={3}>
                <Space className="space-full">
                  {ojtIdntyInst}{' '}
                  <Button className="eu-btn-popup-process-fine ml-auto" onClick={openClick}>확인기관 검색</Button>
                </Space>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <InsttPopupPage open={open} closeClick={closeClick} />
      </Modal>
    </>
  );
};

export default CnfirmInsttRegistPage;
