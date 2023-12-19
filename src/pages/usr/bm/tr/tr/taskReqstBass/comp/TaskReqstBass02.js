import React, { useState, useEffect } from 'react';
import { Col, Row, Descriptions, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const TaskReqstBass02 = () => {
  const [ojtIndcEntPic, setIndcEntPic] = useState({});
  const ojtIndcEntPicChange = (value, column) => {
    setIndcEntPic((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  useEffect(() => {
    setIndcEntPic({
      a1: '홍길동',
      a2: '경영본부',
      a3: '차장',
      a4: '042-1111-1111',
      a5: '010-1111-1111',
      a6: 'abc@naver.com',
    });
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>도입기업 담당자</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="*성명" span={2}>
              <Input
                placeholder="우편번호"
                onChange={(e) => {
                  ojtIndcEntPicChange(e.target.value, 'a1');
                }}
                value={ojtIndcEntPic?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item label="*부서">
              <Input
                placeholder="우편번호"
                onChange={(e) => {
                  ojtIndcEntPicChange(e.target.value, 'a2');
                }}
                value={ojtIndcEntPic?.a2}
              />
            </Descriptions.Item>
            <Descriptions.Item label="*직위" span={2}>
              <Input
                placeholder="우편번호"
                onChange={(e) => {
                  ojtIndcEntPicChange(e.target.value, 'a3');
                }}
                value={ojtIndcEntPic?.a3}
              />
            </Descriptions.Item>
            <Descriptions.Item label="*전화번호">
              <Input
                placeholder="우편번호"
                onChange={(e) => {
                  ojtIndcEntPicChange(e.target.value, 'a4');
                }}
                value={ojtIndcEntPic?.a4}
              />
            </Descriptions.Item>
            <Descriptions.Item label="*핸드폰" span={2}>
              <Input
                placeholder="우편번호"
                onChange={(e) => {
                  ojtIndcEntPicChange(e.target.value, 'a5');
                }}
                value={ojtIndcEntPic?.a5}
              />
            </Descriptions.Item>
            <Descriptions.Item label="*이메일">
              <Input
                placeholder="우편번호"
                onChange={(e) => {
                  ojtIndcEntPicChange(e.target.value, 'a6');
                }}
                value={ojtIndcEntPic?.a6}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default TaskReqstBass02;
