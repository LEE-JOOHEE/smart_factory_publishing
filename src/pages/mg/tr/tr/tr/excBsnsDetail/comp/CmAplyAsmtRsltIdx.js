import React, { useEffect, useState } from 'react';
import { Button, Col, Descriptions, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const CmAplyAsmtRsltIdx = ({ key, editable = false }) => {
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
      width: '10%',
      align: 'center',
    },
    {
      title: '구분',
      dataIndex: 'a2',
      onCell: sharedOnCell,
      width: '15%',
    },
    {
      title: '성과지표',
      dataIndex: 'a3',
      width: '15%',
    },
    {
      title: '핵심지표여부',
      dataIndex: 'a4',
      width: '10%',
      align: 'center',
    },
    {
      title: '단위',
      dataIndex: 'a5',
      width: '10%',
      align: 'center',
    },
    {
      title: '구축전',
      dataIndex: 'a6',
      width: '10%',
      align: 'center',
    },
    {
      title: '목표',
      dataIndex: 'a7',
      width: '10%',
      align: 'center',
    },
    {
      title: '가중치',
      dataIndex: 'a8',
      width: '10%',
      align: 'center',
    },
    {
      title: '비고',
      dataIndex: 'a9',
      width: '10%',
      align: 'center',
    },
  ];

  //성과지표정보
  const [ojtRsltIdxInfo, setOjtRsltIdxInfo] = useState({
    a1: '2022-12C-018-000000',
    a2: '기업명',
    a3: '2022년 스마트공장 고도화',
    a4: 'ICT연계 간이 생산시스템',
    a5: '공급기업 법인명',
    a6: '2022',
  });

  //성과지표입력
  const [arrRsltIdx, setArrRsltIdx] = useState([
    {
      key: 1,
      a1: '1',
      a2: '생산(P)',
      a3: '시간당생산량',
      a4: 'O',
      a5: 'DAY',
      a6: '0',
      a7: '0',
      a8: '0',
      a9: '0',
      g: 3,
    },
    {
      key: 2,
      a1: '2',
      a2: '생산(P)',
      a3: '시간당생산량',
      a4: 'O',
      a5: 'DAY',
      a6: '0',
      a7: '0',
      a8: '0',
      a9: '0',
      g: 3,
    },
    {
      key: 3,
      a1: '3',
      a2: '생산(P)',
      a3: '시간당생산량',
      a4: 'O',
      a5: 'DAY',
      a6: '70',
      a7: '60',
      a8: '0.5',
      a9: '0',
      g: 3,
    },
    {
      key: 4,
      a1: '4',
      a2: '품질(P)',
      a3: '시간당생산량',
      a4: 'O',
      a5: 'DAY',
      a6: '30',
      a7: '20',
      a8: '0.5',
      a9: '0',
      g: 3,
    },
    {
      key: 5,
      a1: '5',
      a2: '품질(P)',
      a3: '시간당생산량',
      a4: 'O',
      a5: 'DAY',
      a6: '0',
      a7: '0',
      a8: '0',
      a9: '0',
      g: 3,
    },
    {
      key: 6,
      a1: '6',
      a2: '품질(P)',
      a3: '시간당생산량',
      a4: 'O',
      a5: 'DAY',
      a6: '0',
      a7: '0',
      a8: '0',
      a9: '0',
      g: 3,
    },
  ]);

  useEffect(() => {
    if (key) {
      // setOjtRsltIdxInfo()
      // setArrRsltIdx()
    }
  }, [key]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>성과지표정보</TitleComp>
        </Col>
        {editable && (
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button size="small" className="eu-btn-crud-fine">
              수정
            </Button>
          </Col>
        )}
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={2}>
              {ojtRsltIdxInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="기업명">
              {ojtRsltIdxInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={2}>
              {ojtRsltIdxInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="도입시스템">
              {ojtRsltIdxInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업명" span={2}>
              {ojtRsltIdxInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="사업년도">
              {ojtRsltIdxInfo?.a6}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>성과지표 입력</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 600 }}
            columns={rsltIdxColums}
            dataSource={arrRsltIdx}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default CmAplyAsmtRsltIdx;
