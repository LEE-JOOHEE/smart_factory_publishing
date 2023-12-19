import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from 'antd';
import 'css/CommonUsr.css';
import TitleComp from 'components/layout/TitleComp';
import { ojtChange, getListCommonCd } from 'components/common/Common';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import DescriptionRequired from 'components/layout/DescriptionRequired';
import TextArea from 'antd/lib/input/TextArea';
const { Text, Link } = Typography;

const PrpslManage01 = () => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  // 제안서
  const [ojtPrpsl, setOjtPrpsl] = useState({});

  const saveClick = () => {
    Modal.info({
      title: 'saveClick : ' + JSON.stringify(ojtPrpsl),
    });
  };

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a1', 'a2']));

    setOjtPrpsl({
      a1: '스마트공장 구축 및 고도화 제안서',
      a2: '스마트공장 보급 확산 사업 공고 기초(코디 지원)',
      a3: '기초',
      a4: '6',
      a5: '미적용',
      a6: '54,717,000',
      a7: '0',
      a8: '',
      a9: '',
      a10: '',
      a11: '',
      a12: '공급기업 법인명(상호)',
      a13: '1234567890',
      a14: '김철수',
      a15: '관리부',
      a16: '연구원',
      a17: '042-111-1111',
      a18: '010-1111-1111',
      a19: 'abc@naver.com',
    });
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>제안서 기본정보</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}></Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="제안서 명">
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a1', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a1}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>과제기본정보</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={saveClick}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="세부공고명">
              {ojtPrpsl?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="과제구분" span={2}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a3', setOjtPrpsl);
                }}
                options={[
                  {
                    value: '',
                    label: '기초',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtPrpsl?.a3}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>사업기간</DescriptionRequired>}
            >
              <Space>
                착수일로부터
                <InputNumber
                  onChange={(value) => {
                    ojtChange(value, 'a4', setOjtPrpsl);
                  }}
                  value={ojtPrpsl?.a4}
                />
                개월
              </Space>
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>기 구축 시스템</DescriptionRequired>}
              span={2}
            >
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a5', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a5}
              />
            </Descriptions.Item>

            <Descriptions.Item label={'총사업비(원)'}>
              {ojtPrpsl?.a6}
            </Descriptions.Item>
            <Descriptions.Item label={'지원요청금액(원)'} span={2}>
              {ojtPrpsl?.a7}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <DescriptionRequired>도입(고도화)시스템</DescriptionRequired>
              }
              span={3}
            >
              <Checkbox.Group
                options={[
                  {
                    value: 'ERP',
                    label: 'ERP',
                  },
                  {
                    value: '5G',
                    label: '5G',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
                onChange={(checkedValues) => {
                  ojtChange(checkedValues, 'a8', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a8}
              />
              <br />
              <Text type="warning">
                ※ 공장관리시스템(MES) 기업자원관리시스템(ERP)
                공급사슬관리시스템(SCM) 제품개발지원시스템(PLM)
              </Text>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <DescriptionRequired>목표수준(구축전)</DescriptionRequired>
              }
              span={3}
            >
              <Radio.Group
                options={[
                  {
                    value: '미적용',
                    label: '미적용',
                  },
                  {
                    value: '기초',
                    label: '기초',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a9', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a9}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <DescriptionRequired>목표수준(구축후)</DescriptionRequired>
              }
              span={3}
            >
              <Radio.Group
                options={[
                  {
                    value: '기초',
                    label: '기초',
                  },
                  {
                    value: '중간1',
                    label: '중간1',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a10', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a10}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>사업개요</DescriptionRequired>}
              span={3}
            >
              <TextArea
                value={ojtPrpsl?.a11}
                onChange={(e) => ojtChange(e.target.value, 'a11', setOjtPrpsl)}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>공급기업 담당자</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={saveClick}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item
              label={<DescriptionRequired>법인명(상호)</DescriptionRequired>}
            >
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a12', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a12}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>사업자등록번호</DescriptionRequired>}
              span={2}
            >
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a13', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a13}
              />
            </Descriptions.Item>

            <Descriptions.Item
              label={<DescriptionRequired>성명</DescriptionRequired>}
            >
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a14', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a14}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>부서</DescriptionRequired>}
              span={2}
            >
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a15', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a15}
              />
            </Descriptions.Item>

            <Descriptions.Item
              label={<DescriptionRequired>직위</DescriptionRequired>}
            >
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a16', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a16}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>전화번호</DescriptionRequired>}
              span={2}
            >
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a17', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a17}
              />
            </Descriptions.Item>

            <Descriptions.Item
              label={<DescriptionRequired>핸드폰</DescriptionRequired>}
            >
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a18', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a18}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={<DescriptionRequired>이메일</DescriptionRequired>}
              span={2}
            >
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a19', setOjtPrpsl);
                }}
                value={ojtPrpsl?.a19}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default PrpslManage01;
