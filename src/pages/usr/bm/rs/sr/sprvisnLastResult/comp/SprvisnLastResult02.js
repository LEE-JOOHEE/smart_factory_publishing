import React, { useState } from 'react';
import { Col, Row, Button, Descriptions, Checkbox, Space } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';
import SprvisnLastResultPopup from 'pages/usr/bm/rs/sr/sprvisnLastResult/popup/SprvisnLastResultPopup';

const SprvisnLastResult02 = ({ ojtLvlIdntyRslt, setOjtLvlIdntyRslt }) => {
  const cnstcSysSmrtLvl = ['기초', '중간1', '중간2', '고도화'];
  const entMnftrLvl = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];
  const [open, setOpen] = useState(false);
  const closeClick = () => {
    setOpen(false);
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>수준확인 결과</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={() => {
              setOpen(true);
            }}
          >
            수준확인 저장 이력 조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="구축시스템 스마트화 수준" span={3}>
              {cnstcSysSmrtLvl.map((item, idx) => {
                return (
                  <Checkbox
                    value={idx}
                    checked={ojtLvlIdntyRslt?.a1 === idx}
                    onChange={() => {
                      ojtChange(idx, 'a1', setOjtLvlIdntyRslt);
                    }}
                  >
                    {item}
                  </Checkbox>
                );
              })}
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 수준" span={3}>
              {entMnftrLvl.map((item, idx) => {
                return (
                  <Checkbox
                    value={idx}
                    checked={ojtLvlIdntyRslt?.a2 === idx}
                    onChange={() => {
                      ojtChange(idx, 'a2', setOjtLvlIdntyRslt);
                    }}
                  >
                    {item}
                  </Checkbox>
                );
              })}
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 총점" span={3}>
              {ojtLvlIdntyRslt?.a3}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <SprvisnLastResultPopup open={open} closeClick={closeClick} />
    </>
  );
};

export default SprvisnLastResult02;
