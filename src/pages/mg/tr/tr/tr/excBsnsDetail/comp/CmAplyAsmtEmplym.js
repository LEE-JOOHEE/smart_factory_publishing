import React, { useState } from 'react';
import { Button, Col, Descriptions, Input, Modal, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const CmAplyAsmtEmplym = ({ key, editable = false }) => {
  const [ojtEmplymEvl, setOjtEmplymEvl] = useState({
    a1: '1',
    a2: '3',
    a3: '0.8',
  });
  const ojtEmplymEvlChange = (value, column) => {
    setOjtEmplymEvl((prev) => ({ ...prev, [column]: value }));
  };
  const updateClick = () => {
    Modal.info({
      title: 'update Click',
    });
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>일자리평가</TitleComp>
        </Col>
        {editable && (
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button 
              className="eu-btn-crud-fine"
              onClick={updateClick}
            >
              수정
            </Button>
          </Col>
        )}
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="일자리 질 평가">
              <Input
                disabled={!editable}
                value={ojtEmplymEvl?.a1}
                onChange={(e) => ojtEmplymEvlChange(e.target.value, 'a1')}
                suffix="점"
                type="number"
              />
            </Descriptions.Item>
            <Descriptions.Item label="일자리 양 평가">
              <Input
                disabled={!editable}
                value={ojtEmplymEvl?.a2}
                onChange={(e) => ojtEmplymEvlChange(e.target.value, 'a2')}
                suffix="점"
                type="number"
              />
            </Descriptions.Item>
            <Descriptions.Item label="환산점수">
              {ojtEmplymEvl?.a3} 점
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default CmAplyAsmtEmplym;
