import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table, Input, Descriptions } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const { TextArea } = Input;

const PresentnSttus05 = ({ value = '', type = 'calcExmnt' }) => {
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>
            {type === 'calcExmnt' ? '원가계산' : '원가감리'} 검토 의견
          </TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="비고" span={3}>
              <TextArea
                value={value}
                readOnly
                placeholder={'의견을 입력하세요'}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default PresentnSttus05;
