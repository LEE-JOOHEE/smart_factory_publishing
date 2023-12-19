import React, { useState, useEffect } from 'react';
import { Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const PrmpcCaclDetail03 = ({
  arrSbmsnDcmntIdnty,
  arrSptEvlAtchFile,
  arrPjtcoDscnt,
  arrPriceComputationDsctn,
}) => {
  // 제출서류 확인
  const sbmsnDcmntIdntyColumns = [
    {
      title: '항목',
      dataIndex: 'a1',
    },
    {
      title: '첨부파일',
      dataIndex: 'a2',
    },
  ];

  // 첨부문서
  const sptEvlAtchFileColumns = [
    {
      title: '순번',
      dataIndex: 'a1',
    },
    {
      title: '구분',
      dataIndex: 'a2',
    },
    {
      title: '파일명',
      dataIndex: 'a3',
    },
    {
      title: '등록일',
      dataIndex: 'a4',
    },
    {
      title: '파일크기',
      dataIndex: 'a5',
    },
  ];

  // 원가계산기관 산출 사업비 내역
  const pjtcoDscntColumns = [
    {
      title: '구분',
      dataIndex: 'a1',
      render: (_, record, index) => {
        console.log(record, index);
        return <>{record.a1}</>;
      },
    },
    {
      title: '금액(단위 : 원)',
      children: [
        {
          title: '도입기업부담금',
          children: [
            {
              title: '현금(중도금 및 잔금)',
              dataIndex: 'a2',
            },
            {
              title: '도입기업 사업관리 인력 인건비',
              dataIndex: 'a3',
            },
            {
              title: '클라우드 서비스 이용료',
              dataIndex: 'a4',
            },
            {
              title: '계',
              render: (_, record) => {
                return record?.a2 + record?.a3 + record?.a4;
              },
            },
          ],
        },
        {
          title: '정부지원금',
          dataIndex: 'a5',
        },
        {
          title: '합계',
          render: (_, record) => {
            return record?.a2 + record?.a3 + record?.a4 + record?.a5;
          },
        },
      ],
    },
  ];

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

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>제출서류 확인</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={sbmsnDcmntIdntyColumns}
            dataSource={arrSbmsnDcmntIdnty}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>첨부문서(현장평가 결과보고서)</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={sptEvlAtchFileColumns}
            dataSource={arrSptEvlAtchFile}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>원가계산기관 산출 사업비 내역</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={pjtcoDscntColumns}
            dataSource={arrPjtcoDscnt}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont" style={{ textAlign: 'right' }}>
        <Col span={24}>※ 신청 사업비 금액 : 1,000원 미만 절삭</Col>
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
    </>
  );
};

export default PrmpcCaclDetail03;
