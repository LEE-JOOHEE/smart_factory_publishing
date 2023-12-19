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
          <TitleComp>신청 사업비 내역</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <table
            key={'TaskReqstWct01'} // 각 테이블마다 고유 키 입력
            className="eu-usr-custom-description-table" // 고정
            summary="신청 사업비 내역"
          >
            <colgroup>
              <col width={'10%'} />
            </colgroup>
            <tbody>
              <tr>
                <td className="header" colSpan="2" rowSpan="3">
                  구분
                </td>
                <td className="header" colSpan="6">
                  금액(단위 : 원)
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="4">
                  도입기업부담금
                </td>
                <td className="header" rowSpan="2">
                  정부지원금
                </td>
                <td className="header" rowSpan="2">
                  합계
                </td>
              </tr>
              <tr>
                <td className="header">현금(중도금 및 잔금)</td>
                <td className="header">도입기업 사업관리 인력 인건비</td>
                <td className="header">클라우드 서비스 이용료</td>
                <td className="header">계</td>
              </tr>
              {arrAplyPjtcoDsctn?.map((item, index) => {
                if (!index) {
                  return (
                    <tr key={`${item}${index}`}>
                      <td
                        rowSpan={`${arrAplyPjtcoDsctn.length}`}
                        className="header"
                      >
                        신청 사업비 금액
                      </td>
                      <td className="header">{`기관명${index + 1}`}</td>
                      <td>{item.a1}</td>
                      <td>{item.a2}</td>
                      <td>{item.a3}</td>
                      <td>{item.a4}</td>
                      <td>{item.a5}</td>
                      <td rowSpan={`${arrAplyPjtcoDsctn.length}`}>
                        {pjtcoSum}
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={`${item}${index}`}>
                      <td className="header">{`기관명${index + 1}`}</td>
                      <td>{item.a1}</td>
                      <td>{item.a2}</td>
                      <td>{item.a3}</td>
                      <td>{item.a4}</td>
                      <td>{item.a5}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
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
