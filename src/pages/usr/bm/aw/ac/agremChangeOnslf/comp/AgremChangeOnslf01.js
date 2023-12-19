import React, { useState } from 'react';
import { Col, Row, Descriptions, Checkbox } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const AgremChangeOnslf01 = () => {
  const [ojtChgArtcl, setOjtChgArtcl] = useState({ a1: '0' });
  const chgSe = [
    '담당 책임자 변경',
    '도입기업 대표자 변경',
    '사업비 계좌 변경',
    '구축기간 변경(1개월 이내)',
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>변경항목</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="변경구분" span={3}>
              {chgSe.map((item, idx) => {
                return (
                  <Checkbox
                    value={`${idx}`}
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a1', setOjtChgArtcl);
                    }}
                    checked={ojtChgArtcl?.a1 === `${idx}`}
                  >
                    {item}
                  </Checkbox>
                );
              })}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default AgremChangeOnslf01;
