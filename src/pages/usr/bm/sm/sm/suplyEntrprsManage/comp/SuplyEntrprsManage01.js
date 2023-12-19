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
  Typography,
} from 'antd';
import 'css/CommonUsr.css';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd, ojtChange } from 'components/common/Common';
const { Text, Link } = Typography;

const SuplyEntrprsManage01 = ({ searchClick, arrCnstcPrfmnc, ojtSrchRslt }) => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '',
  });

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a1', 'a2']));
  }, []);
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
            onClick={() => searchClick(ojtSrchCnd)}
          >
            조회
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="공급기업 검색이력" span={3}>
              <Space>
                <Select
                  onChange={(value) => {
                    ojtChange(value, 'a1', setOjtSrchCnd);
                  }}
                  options={[
                    {
                      value: '',
                      label: '2022-08-22 17:24:07',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={ojtSrchCnd?.a1}
                />
                <Text>{`${arrCnstcPrfmnc.length}건`}</Text>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="공급기업소재지" span={1}>
              {ojtSrchRslt?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="솔루션" span={1}>
              {ojtSrchRslt?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="레벨">
              {ojtSrchRslt?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="종사자규모" span={3}>
              {ojtSrchRslt?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="사업분류">
              {ojtSrchRslt?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="세부공고명" span={2}>
              {ojtSrchRslt?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="구축결과" span={3}>
              {ojtSrchRslt?.a7}
            </Descriptions.Item>
          </Descriptions>
          <br />
          <Descriptions bordered size="small">
            <Descriptions.Item label="종사자규모" span={1}>
              {ojtSrchRslt?.a8}
            </Descriptions.Item>
            <Descriptions.Item label="매출규모" span={1}>
              {ojtSrchRslt?.a9}
            </Descriptions.Item>
            <Descriptions.Item label="매칭순위 기준">
              {ojtSrchRslt?.a10}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Text>(2019년 이후 스마트공장 실적 데이터 기준)</Text>
    </>
  );
};

export default SuplyEntrprsManage01;
