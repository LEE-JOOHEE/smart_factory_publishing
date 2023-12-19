import React, { useState, useEffect } from 'react';
import { Col, Row, Table, Modal, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { arrChange } from 'components/common/Common';

const TaskReqstRslt02 = () => {
  //성과지표입력
  const [arrRsltIdx, setArrRsltIdx] = useState([
    {
      key: 1,
      a1: '1',
      a2: '생산(P)',
      a3: '시간당생산량',
      a4: 'O',
      a5: '감소특성',
      a6: '',
      a7: '0',
      a8: '0',
      a9: '0',
      a10: '',
      g: 3,
    },
    {
      key: 2,
      a1: '2',
      a2: '생산(P)',
      a3: '시간당생산량',
      a4: 'O',
      a5: '증가특성',
      a6: 'sh',
      a7: '70',
      a8: '60',
      a9: '0.5',
      a10: '',
      g: 3,
    },
    {
      key: 3,
      a1: '3',
      a2: '생산(P)',
      a3: '시간당생산량',
      a4: 'O',
      a5: '감소특성',
      a6: 'sh',
      a7: '0',
      a8: '0',
      a9: '0',
      a10: '',
      g: 3,
    },
    {
      key: 4,
      a1: '4',
      a2: '품질(P)',
      a3: '시간당생산량',
      a4: 'O',
      a5: '증가특성',
      a6: '',
      a7: '',
      a8: '',
      a9: '',
      a10: '',
      g: 3,
    },
    {
      key: 5,
      a1: '5',
      a2: '품질(P)',
      a3: '시간당생산량',
      a4: 'O',
      a5: '감소특성',
      a6: '',
      a7: '',
      a8: '',
      a9: '',
      a10: '',
      g: 3,
    },
    {
      key: 6,
      a1: '6',
      a2: '품질(P)',
      a3: '시간당생산량',
      a4: 'O',
      a5: '증가특성',
      a6: '',
      a7: '',
      a8: '',
      a9: '',
      a10: '',
      g: 3,
    },
  ]);
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
      render: (_, __, index) => {
        return (
          <Input
            placeholder="단위"
            onChange={(e) => {
              arrChange(e.target.value, 'a6', index, setArrRsltIdx);
            }}
            value={arrRsltIdx?.a6}
          />
        );
      },
    },
    {
      title: '구축전',
      dataIndex: 'a7',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="구축전"
            onChange={(e) => {
              arrChange(e.target.value, 'a7', index, setArrRsltIdx);
            }}
            value={arrRsltIdx?.a7}
          />
        );
      },
    },
    {
      title: '목표',
      dataIndex: 'a8',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="목표"
            onChange={(e) => {
              arrChange(e.target.value, 'a8', index, setArrRsltIdx);
            }}
            value={arrRsltIdx?.a8}
          />
        );
      },
    },
    {
      title: '가중치',
      dataIndex: 'a9',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="가중치"
            onChange={(e) => {
              arrChange(e.target.value, 'a9', index, setArrRsltIdx);
            }}
            value={arrRsltIdx?.a9}
          />
        );
      },
    },
    {
      title: '비고',
      dataIndex: 'a10',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="비고"
            onChange={(e) => {
              arrChange(e.target.value, 'a10', index, setArrRsltIdx);
            }}
            value={arrRsltIdx?.a10}
          />
        );
      },
    },
  ];

  useEffect(() => {
    console.log('arrRsltIdx: ', arrRsltIdx);
  }, [arrRsltIdx]);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={3}>
          <TitleComp>성과지표입력</TitleComp>
        </Col>
        <Col span={21} style={{ color: 'red' }}>
          ※ 스마트공장 2021년 1차 최초신청시 예상성과지표를 입력하시기
          바랍니다.(최소 1줄 필수)
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'TaskReqstRslt02'}
            scroll={{ y: 900 }}
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

export default TaskReqstRslt02;
