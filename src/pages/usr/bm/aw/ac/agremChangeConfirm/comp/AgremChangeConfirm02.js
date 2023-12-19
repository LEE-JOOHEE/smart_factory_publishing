import React, { useState } from 'react';
import { Col, Row, Descriptions, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const { TextArea } = Input;

const AgremChangeConfirm02 = () => {
  const [ojtChgCn, setOjtChgCn] = useState({ a1: '', a2: '', a3: '' });

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>변경내용</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="변경(전)" span={3}>
              <TextArea
                value={ojtChgCn?.a1}
                onChange={(e) => ojtChange(e.target.value, 'a1', setOjtChgCn)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="변경(후)" span={3}>
              <TextArea
                value={ojtChgCn?.a2}
                onChange={(e) => ojtChange(e.target.value, 'a2', setOjtChgCn)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사유" span={2}>
              <TextArea
                value={ojtChgCn?.a3}
                onChange={(e) => ojtChange(e.target.value, 'a3', setOjtChgCn)}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeConfirm02;
