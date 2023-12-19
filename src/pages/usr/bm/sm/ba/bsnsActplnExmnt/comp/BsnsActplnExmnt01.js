import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from 'antd';
import 'css/CommonUsr.css';
import TitleComp from 'components/layout/TitleComp';
import { ojtChange } from 'components/common/Common';
const { Text, Link } = Typography;

const BsnsActplnExmnt01 = ({ searchClick, ojtGroupCodes }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
  });

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>검색조건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={() => searchClick(ojtSrchCnd)}
          >
            조회
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="사업연도">
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a1', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={2}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a2', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.b ? ojtGroupCodes.b : []),
                ]}
                value={ojtSrchCnd?.a2}
              />
            </Descriptions.Item>
            <Descriptions.Item label="세부공고명">
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a3', setOjtSrchCnd);
                }}
                value={ojtGroupCodes?.a3}
              />
            </Descriptions.Item>
            <Descriptions.Item label="지역" span={2}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a4', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.a4 ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a4}
              />
            </Descriptions.Item>
            <Descriptions.Item label={'진행상태'}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a5', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.a5 ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a5}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Text>(2019년 이후 스마트공장 실적 데이터 기준)</Text>
    </>
  );
};

export default BsnsActplnExmnt01;
