import React, { useState, useEffect } from 'react';
import { Col, Row, Table, Select, Descriptions, Space } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const TaskReqstWct01 = ({
  arrAplyPjtcoDsctn,
  arrPriceComputationDsctn,
  splyEntNm,
  setSplyEntNm,
}) => {
  // 가격산출내역서
  const priceComputationDsctnColums = [
    {
      title: '구분',
      dataIndex: 'a1',
    },
    {
      title: '계 (단위 : 원)',
      dataIndex: 'a2',
    },
  ];

  const [pjtcoSum, setPjtcoSum] = useState(0);
  useEffect(() => {
    const arrPjtco = arrAplyPjtcoDsctn?.map((item) => item.a4);
    setPjtcoSum(arrPjtco?.reduce((a, b) => a + b, 0));
  }, [arrAplyPjtcoDsctn]);

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>가격산출내역서</TitleComp>
          (단위:원/VAT별도)
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrPriceComputationDsctn'}
            columns={priceComputationDsctnColums}
            dataSource={arrPriceComputationDsctn}
            size="small"
            scroll={{ y: 600 }}
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['a2'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell index={0}>합계</Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>공급기업별 사업비내역</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="공급기업명" span={2}>
              <Space>
                <Select
                  onChange={(value) => {
                    setSplyEntNm(value);
                  }}
                  options={[
                    {
                      value: '공급기업 법인명(상호)_1',
                      label: '공급기업 법인명(상호)_1',
                    },
                    {
                      value: '공급기업 법인명(상호)_2',
                      label: '공급기업 법인명(상호)_2',
                    },
                  ]}
                  value={splyEntNm}
                />
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default TaskReqstWct01;
