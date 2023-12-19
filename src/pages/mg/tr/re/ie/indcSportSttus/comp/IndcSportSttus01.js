import React, { useState } from 'react';
import { Button, Col, Descriptions, Input, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { ojtChange } from 'components/common/Common';

const IndcSportSttus01 = ({ searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '',
    a2: '',
  });

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>검색조건 입력</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            size="small"
            onClick={() => {
              searchClick(ojtSrchCnd);
            }}
          >
            조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="기업명">
              <Input
                value={ojtSrchCnd?.a1}
                onChange={(e) => ojtChange(e.target.value, 'a1', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업자등록번호">
              <Input
                value={ojtSrchCnd?.a2}
                onChange={(e) => ojtChange(e.target.value, 'a2', setOjtSrchCnd)}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default IndcSportSttus01;
