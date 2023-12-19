import React, { useState, useEffect } from 'react';
import { Col, Row, Tabs, Descriptions } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const SignProgrsInstt01 = ({ openClick }) => {
  const [ojtBizInfo, setOjtBizInfo] = useState({
    a: '2022',
    b: '대중소상생형',
    c: '스마트공장 구축 및 고도화 사업(대중소상생)',
  });

  const [ojtAgremInstInfo, setOjtAgremInstInfo] = useState({
    a: '협약기관명1',
    b: '아무개',
    c: '세종특별자치시 중앙집현7로',
  });

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={2}>
          <TitleComp>사업정보</TitleComp>
        </Col>
        <Col span={20}>
          <a onClick={openClick}>{`폐기이력 : 1건`}</a>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="사업연도" span={3}>
              {ojtBizInfo?.a}
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={3}>
              {ojtBizInfo?.b}
            </Descriptions.Item>
            <Descriptions.Item label="사업명">
              {ojtBizInfo?.c}
            </Descriptions.Item>
          </Descriptions>
          <div style={{ color: 'red', marginTop: '20px' }}>
            <span>
              사업정보를 작성 하신 후 저장 버튼을 눌러 저장하시면 전자 서명
              가능합니다.
            </span>
            <br />
            <span>
              사업정보를 변경하신 후 저장버튼을 눌러주셔야 전자협약서 내용에도
              반영이 됩니다.
            </span>
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>협약기관정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <div className="eu-custom-description-table">
            <table
              key={'agremInstInfoTable'}
              // className="eu-custom-description-table"
              summary="협약기관정보"
            >
              <colgroup>
                <col width={'10%'} />
              </colgroup>
              <tbody>
                <tr>
                  <td rowSpan={3} className="header">
                    주관기관
                  </td>
                </tr>
                <tr>
                  <td className="header">협약기관명</td>
                  <td>{ojtAgremInstInfo?.a}</td>
                  <td className="header">대표자</td>
                  <td>{ojtAgremInstInfo?.b}</td>
                </tr>
                <tr>
                  <td className="header">주소</td>
                  <td colspan={3}>{ojtAgremInstInfo?.c}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>전자협약서 서명</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>전자협약서 서명</Col>
      </Row>
    </>
  );
};

export default SignProgrsInstt01;
