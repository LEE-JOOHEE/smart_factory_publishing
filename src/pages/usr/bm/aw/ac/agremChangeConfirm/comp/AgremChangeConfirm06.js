import React, { useState } from 'react';
import { Col, Row, Descriptions, Input, Space, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';
import PostSearchPopup from 'pages/usr/bm/tr/tr/taskReqstInfo/popup/PostSearchPopup';

const AgremChangeConfirm06 = () => {
  const [bftFctryAddr, setBftFctryAddr] = useState({
    a1: '12345',
    a2: '세종특별자치시 중앙집현7로',
    a3: '상세주소',
  });
  const [aftFctryAddr, setAftFctryAddr] = useState({
    a1: '12345',
    a2: '세종특별자치시 중앙집현7로',
    a3: '상세주소',
  });
  const [postColumn, setPostColumn] = useState('');
  const [postSearchOpen, setPostSearchOpen] = useState(false);
  const closePostSearchClick = () => {
    setPostSearchOpen(false);
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>변경 전 도입기업 공장 주소 변경</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={3}>
              <Space direction={'vertical'}>
                <Input
                  placeholder="우편번호"
                  onChange={(e) => {
                    ojtChange(e.target.value, 'a1', setBftFctryAddr);
                  }}
                  value={bftFctryAddr?.a1}
                />
                <Input
                  placeholder="주소1"
                  onChange={(e) => {
                    ojtChange(e.target.value, 'a2', setBftFctryAddr);
                  }}
                  value={bftFctryAddr?.a2}
                />
                <Input
                  placeholder="주소2"
                  onChange={(e) => {
                    ojtChange(e.target.value, 'a3', setBftFctryAddr);
                  }}
                  value={bftFctryAddr?.a3}
                />
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>변경 후 도입기업 공장 주소 변경</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={3}>
              <Space direction={'vertical'}>
                <Input
                  placeholder="우편번호"
                  onChange={(e) => {
                    ojtChange(e.target.value, 'a1', setAftFctryAddr);
                  }}
                  value={aftFctryAddr?.a1}
                />
                <Button
                  size="small"
                  className="eu-usr-btn-table-fine"
                  onClick={() => {
                    setPostSearchOpen(true);
                    setPostColumn('a1');
                  }}
                >
                  우편번호찾기
                </Button>
                <Input
                  placeholder="주소1"
                  onChange={(e) => {
                    ojtChange(e.target.value, 'a2', setAftFctryAddr);
                  }}
                  value={aftFctryAddr?.a2}
                />
                <Input
                  placeholder="주소2"
                  onChange={(e) => {
                    ojtChange(e.target.value, 'a3', setAftFctryAddr);
                  }}
                  value={aftFctryAddr?.a3}
                />
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <PostSearchPopup
        open={postSearchOpen}
        closeClick={closePostSearchClick}
        popupSelectClick={ojtChange}
        column={postColumn}
      />
    </>
  );
};

export default AgremChangeConfirm06;
