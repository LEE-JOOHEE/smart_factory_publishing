import React, { useState } from 'react';
import { Col, Row, Button, Descriptions } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const EvlCharmnEvl01 = ({ setPageType }) => {
  const [ojtScmitInfo, setOjtScmitInfo] = useState({
    key: 1,
    a: '기술성평가',
    b: '2022',
    c: '평가위원회 명',
    d: '분과 명',
    e: '2022-10-01',
    f: 'Y',
    g: '3',
    h: '평가중',
  });
  const evlCmptnClick = () => {
    setPageType('LIST');
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={16}>
          <TitleComp>분과정보</TitleComp>
        </Col>
        <Col span={7}>
          <span style={{ color: 'red' }}>
            ※해당 분과의 모든 과제에 대한 평가를 완료하신 경우, [평가완료]
            버튼을 클릭하여 주시기 바랍니다.
          </span>
        </Col>
        <Col span={1} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-warning"
            onClick={evlCmptnClick}
          >
            평가완료
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions layout="vertical" bordered column={8}>
            <Descriptions.Item label="평가구분">
              {ojtScmitInfo?.a}
            </Descriptions.Item>
            <Descriptions.Item label="사업년도">
              {ojtScmitInfo?.b}
            </Descriptions.Item>
            <Descriptions.Item label="평가위원회">
              {ojtScmitInfo?.c}
            </Descriptions.Item>
            <Descriptions.Item label="분과">
              {ojtScmitInfo?.d}
            </Descriptions.Item>
            <Descriptions.Item label="평가일자">
              {ojtScmitInfo?.e}
            </Descriptions.Item>
            <Descriptions.Item label="평가위원장여부">
              {ojtScmitInfo?.f}
            </Descriptions.Item>
            <Descriptions.Item label="평가대상과제수">
              {ojtScmitInfo?.g}
            </Descriptions.Item>
            <Descriptions.Item label="평가상태">
              {ojtScmitInfo?.h}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default EvlCharmnEvl01;
