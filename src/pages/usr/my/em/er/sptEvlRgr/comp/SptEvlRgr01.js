import React, { useState, useEffect } from 'react';
import { Col, Row, Descriptions, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SptEvlRgr01 = ({ arrMfmcInfo }) => {
  const [ojtEvlBscInfo, setOjtEvlBscInfo] = useState({});
  const columns = [
    { title: '위원구분', dataIndex: 'a' },
    { title: '위원명', dataIndex: 'b' },
    { title: '연락처', dataIndex: 'c' },
  ];

  useEffect(() => {
    setOjtEvlBscInfo({
      a: '작성중',
      b: '현장평가',
      c: '2022-XXX-XXX-XXXXXX',
      d: '평가TEST과제',
      e: '도입기업명',
      f: '2022-10-01 종일',
    });
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>평가 기본정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="제출상태" span={1.5}>
              {ojtEvlBscInfo?.a}
            </Descriptions.Item>
            <Descriptions.Item label="평가구분" span={1.5}>
              {ojtEvlBscInfo?.b}
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={1.5}>
              {ojtEvlBscInfo?.c}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              {ojtEvlBscInfo?.d}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtEvlBscInfo?.e}
            </Descriptions.Item>
            <Descriptions.Item label="희망일자" span={1.5}>
              {ojtEvlBscInfo?.f}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>위원정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrMfmcInfo'}
            columns={columns}
            dataSource={arrMfmcInfo}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 120 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SptEvlRgr01;
