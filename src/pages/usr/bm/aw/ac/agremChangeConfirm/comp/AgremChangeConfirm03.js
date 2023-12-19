import React, { useState } from 'react';
import { Col, Row, Descriptions, Checkbox } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const AgremChangeConfirm03 = () => {
  const [ojtChgArtcl, setOjtChgArtcl] = useState({ a1: '0' });
  const chgSe = [
    '사업비 변경',
    '도입기업 공장 주소변경',
    '구축기간 변경(1개월 이외)',
    '공급기업 변경',
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={4}>
          <TitleComp>변경항목</TitleComp>
        </Col>
        <Col span={20} style={{ color: 'red' }}>
          * 주의사항 : 협약변경 승인사항은 1건 이상 동시 처리가 불가하므로
          한번에 하나의 변경건씩 처리 해주시기 바랍니다.
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

export default AgremChangeConfirm03;
