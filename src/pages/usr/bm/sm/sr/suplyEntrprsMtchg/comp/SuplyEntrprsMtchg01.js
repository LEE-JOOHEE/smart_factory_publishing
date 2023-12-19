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
const { Text } = Typography;

const SuplyEntrprsMtchg01 = ({
  searchClick,
  ojtGroupCodes,
  ojtSrchRslt,
  arrSplyEntLst,
}) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '',
  });

  const smsClick = () => {
    Modal.info({ title: 'smsClick' });
  };

  const cancelSelectClick = () => {
    Modal.info({ title: 'cancelSelectClick' });
    setOjtSrchCnd({ a1: '' });
  };

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>공급기업검색 매칭내역</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={smsClick}
          >
            SMS
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={cancelSelectClick}
          >
            선택취소
          </Button>
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
            <Descriptions.Item label="공급기업" span={2}>
              <Space>
                <Select
                  onChange={(value) => {
                    ojtChange(value, 'a1', setOjtSrchCnd);
                  }}
                  options={[
                    {
                      value: '공급기업1',
                      label: '공급기업1',
                    },
                    {
                      value: '공급기업2',
                      label: '공급기업2',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={ojtSrchCnd?.a1}
                />
                <Text>{`${arrSplyEntLst.length}건`}</Text>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="사업자등록번호">
              {ojtSrchRslt?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="전문분야1" span={1}>
              {ojtSrchRslt?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="전문분야2" span={1}>
              {ojtSrchRslt?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="전문분야3">
              {ojtSrchRslt?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="주소" span={2}>
              {ojtSrchRslt?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="홈페이지">
              {ojtSrchRslt?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="대표자" span={1}>
              {ojtSrchRslt?.a7}
            </Descriptions.Item>
            <Descriptions.Item label="설립일자" span={1}>
              {ojtSrchRslt?.a8}
            </Descriptions.Item>
            <Descriptions.Item label="임직원수">
              {ojtSrchRslt?.a9}
            </Descriptions.Item>
            <Descriptions.Item label="핸드폰" span={1}>
              {ojtSrchRslt?.b1}
            </Descriptions.Item>
            <Descriptions.Item label="전화번호" span={1}>
              {ojtSrchRslt?.b2}
            </Descriptions.Item>
            <Descriptions.Item label="이메일">
              {ojtSrchRslt?.b3}
            </Descriptions.Item>
            <Descriptions.Item label="담당자" span={1}>
              {ojtSrchRslt?.b4}
            </Descriptions.Item>
            <Descriptions.Item label="부서" span={1}>
              {ojtSrchRslt?.b5}
            </Descriptions.Item>
            <Descriptions.Item label="직위">
              {ojtSrchRslt?.b6}
            </Descriptions.Item>
            <Descriptions.Item label="핸드폰" span={1}>
              {ojtSrchRslt?.b7}
            </Descriptions.Item>
            <Descriptions.Item label="전화번호" span={1}>
              {ojtSrchRslt?.b8}
            </Descriptions.Item>
            <Descriptions.Item label="이메일">
              {ojtSrchRslt?.b9}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SuplyEntrprsMtchg01;
