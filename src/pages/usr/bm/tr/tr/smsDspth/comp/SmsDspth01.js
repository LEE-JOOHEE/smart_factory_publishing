import React, { useState } from 'react';
import { Col, Row, Button, Descriptions, Select, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const SmsDspth01 = ({ ojtGroupCodes, searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '전체',
    b: '전체',
    c: '',
  });

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          {/* <TitleComp>검색조건 입력</TitleComp> */}
          <div className="headline mb-10">검색조건 입력</div>
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
            <Descriptions.Item label="사업연도" span={1.5}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                placeholder="사업연도 선택"
                onChange={(value) => ojtChange(value, 'a', setOjtSrchCnd)}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={1.5}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                placeholder="사업분류 선택"
                value={ojtSrchCnd?.b}
                onChange={(value) => ojtChange(value, 'b', setOjtSrchCnd)}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="세부공고명" span={3}>
              <Input
                value={ojtSrchCnd?.c}
                onChange={(e) => ojtChange(e.target.value, 'c', setOjtSrchCnd)}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SmsDspth01;
