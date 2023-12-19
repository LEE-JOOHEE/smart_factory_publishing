import React, { useState } from 'react';
import { Col, Row, Descriptions, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const InsttAgremDetail01 = ({ ojtBizInfo, arrAtchFile }) => {
  const columns = [
    {
      title: '항목',
      dataIndex: 'a',
      align: 'center',
    },
    {
      title: '허용파일',
      dataIndex: 'b',
      align: 'center',
    },
    {
      title: '필수여부',
      dataIndex: 'c',
      render: (text) => (text ? 'O' : 'X'),
      align: 'center',
    },
    {
      title: '첨부파일',
      dataIndex: 'd',
      align: 'center',
    },
  ];
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={24}>
          <TitleComp>사업정보</TitleComp>
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

            <Descriptions.Item label="사업명" span={3}>
              {ojtBizInfo?.c}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>첨부파일</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'atchFile'}
            columns={columns}
            dataSource={arrAtchFile}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 800,
            }}
            tableLayout={'auto'}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>전자협약서 서명</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>전자협약서 서명</Col>
      </Row>
    </>
  );
};

export default InsttAgremDetail01;
