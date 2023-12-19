import React, { useState, useEffect } from 'react';
import { Col, Row, Descriptions, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SprvisnLastResult03 = () => {
  //성과지표입력
  const [arrRsltIdx, setArrRsltIdx] = useState([]);

  const [ojtRsltIdxInfo, setOjtRsltIdxInfo] = useState({
    a1: '2021-I2R-023-0000001',
    a2: '2021',
    a3: '2021_스마트공장 구축 및 고도화',
    a4: '(주)도입기업_스마트공장 구축 및 고도화',
    a5: '(주)도입기업',
    a6: '(주)공급기업',
  });

  let arrRowKey = [];
  let arrGroupKey = [];
  const sharedOnCell = (record, index) => {
    if (arrRowKey.includes(record.key)) {
      //Merge row key 가 같으면 무조건 rowspan 지정
      return {
        rowSpan: record.g,
      };
    } else {
      if (record.g > 0) {
        if (arrGroupKey.includes(record.a2)) {
          //Merge row key가 다르고 그룹키가 같으면 rowspan = 0
          return {
            rowSpan: 0,
          };
        } else {
          //그룹키가 없으면 신규 merge row
          arrRowKey.push(record.key);
          arrGroupKey.push(record.a2);
          return {
            rowSpan: record.g,
          };
        }
      }
      return {};
    }
  };
  // 성과지표 테이블 헤더
  const rsltIdxColums = [
    {
      title: '순번',
      dataIndex: 'a1',
    },
    {
      title: '구분',
      dataIndex: 'a2',

      onCell: sharedOnCell,
    },
    {
      title: '성과지표',
      dataIndex: 'a3',
    },
    {
      title: '핵심지표여부',
      dataIndex: 'a4',
    },
    {
      title: '지표특성',
      dataIndex: 'a5',
    },
    {
      title: '단위',
      dataIndex: 'a6',
    },
    {
      title: '구축전',
      dataIndex: 'a7',
    },
    {
      title: '목표',
      dataIndex: 'a8',
    },
    {
      title: '구축후',
      dataIndex: 'a9',
    },
    {
      title: '목표달성률',
      dataIndex: 'a10',
    },
    {
      title: '개선률',
      dataIndex: 'a11',
    },
    {
      title: '가중치',
      dataIndex: 'a12',
    },
    {
      title: '비고',
      dataIndex: 'a13',
    },
  ];

  useEffect(() => {
    let tmp2 = [];
    for (let idx = 1; idx <= 6; idx++) {
      tmp2.push({
        a1: idx,
        a2: '구분1',
        a3: '시간단생산량',
        a4: 'O',
        a5: '증가특성',
        a6: 'm/hr',
        a7: '5.20',
        a8: '6',
        a9: '6.20',
        a10: '1.25',
        a11: '19.2',
        a12: '0.50',
        a13: '',
        g: idx === 1 ? 6 : 0,
      });
    }
    for (let idx = 6; idx <= 11; idx++) {
      tmp2.push({
        a1: idx,
        a2: '구분2',
        a3: '시간단생산량',
        a4: 'O',
        a5: '증가특성',
        a6: 'm/hr',
        a7: '5.20',
        a8: '6',
        a9: '6.20',
        a10: '1.25',
        a11: '19.2',
        a12: '0.50',
        a13: '',
        g: idx === 6 ? 6 : 0,
      });
    }
    setArrRsltIdx(tmp2);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-titl">
        <Col span={12}>
          <TitleComp>성과지표정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={2}>
              {ojtRsltIdxInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="년도">
              {ojtRsltIdxInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={2}>
              {ojtRsltIdxInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="과제명">
              {ojtRsltIdxInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업명" span={2}>
              {ojtRsltIdxInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업명">
              {ojtRsltIdxInfo?.a6}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>성과지표 입력</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 600 }}
            columns={rsltIdxColums}
            dataSource={arrRsltIdx}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum1 = 0;
              data?.forEach((item) => (sum1 += parseFloat(item['a10']) * 100));
              let sum2 = 0;
              data?.forEach((item) => (sum2 += parseFloat(item['a11']) * 100));
              let sum3 = 0;
              data?.forEach((item) => (sum3 += parseFloat(item['a12']) * 100));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={9}>
                      종합달성도
                    </Table.Summary.Cell>
                    <Table.Summary.Cell>{sum1}%</Table.Summary.Cell>
                    <Table.Summary.Cell>{sum2}%</Table.Summary.Cell>
                    <Table.Summary.Cell>{sum3}</Table.Summary.Cell>
                    <Table.Summary.Cell>-</Table.Summary.Cell>
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

export default SprvisnLastResult03;
