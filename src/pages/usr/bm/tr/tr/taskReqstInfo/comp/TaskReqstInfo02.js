import React, { useState, useEffect } from 'react';
import { Col, Row, Table, Input, Checkbox } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { arrChange } from 'components/common/Common';

const TaskReqstInfo02 = ({ arrIndcEntFnnrStts, setIndcEntFnnrStts }) => {
  const [inputDisabled, setInputDisabled] = useState(false);

  const columns = [
    { title: '연도', dataIndex: 'a' },
    {
      title: '매출액(원)',
      dataIndex: 'b',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="매출액(원)"
            onChange={(e) => {
              arrChange(e.target.value, 'b', index, setIndcEntFnnrStts);
            }}
            value={arrIndcEntFnnrStts[index]['b']}
            disabled={inputDisabled}
          />
        );
      },
    },
    {
      title: '수출액(원)',
      dataIndex: 'c',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="수출액(원)"
            onChange={(e) => {
              arrChange(e.target.value, 'c', index, setIndcEntFnnrStts);
            }}
            value={arrIndcEntFnnrStts[index]['c']}
            disabled={inputDisabled}
          />
        );
      },
    },
    {
      title: '영업이익율(%)',
      dataIndex: 'd',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="영업이익율(%)"
            onChange={(e) => {
              arrChange(e.target.value, 'd', index, setIndcEntFnnrStts);
            }}
            value={arrIndcEntFnnrStts[index]['d']}
            disabled={inputDisabled}
          />
        );
      },
    },
    {
      title: '종업원수(명)',
      dataIndex: 'e',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="종업원수(명)"
            onChange={(e) => {
              arrChange(e.target.value, 'e', index, setIndcEntFnnrStts);
            }}
            value={arrIndcEntFnnrStts[index]['e']}
            disabled={inputDisabled}
          />
        );
      },
    },
    {
      title: '부채비율(%)',
      dataIndex: 'f',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="부채비율(%)"
            onChange={(e) => {
              arrChange(e.target.value, 'f', index, setIndcEntFnnrStts);
            }}
            value={arrIndcEntFnnrStts[index]['f']}
            disabled={inputDisabled}
          />
        );
      },
    },
    {
      title: '자본총계(원)',
      dataIndex: 'g',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="자본총계(원)"
            onChange={(e) => {
              arrChange(e.target.value, 'g', index, setIndcEntFnnrStts);
            }}
            value={arrIndcEntFnnrStts[index]['g']}
            disabled={inputDisabled}
          />
        );
      },
    },
    {
      title: '자산총계(원)',
      dataIndex: 'h',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="자산총계(원)"
            onChange={(e) => {
              arrChange(e.target.value, 'h', index, setIndcEntFnnrStts);
            }}
            value={arrIndcEntFnnrStts[index]['h']}
            disabled={inputDisabled}
          />
        );
      },
    },
  ];

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={9}>
          <TitleComp>도입기업 재무현황(3개년 재무현황이 없는 경우)</TitleComp>
        </Col>
        <Col span={15} style={{ textAlign: 'right' }}>
          <Checkbox
            value={!inputDisabled}
            onChange={(e) => setInputDisabled(e.target.value)}
            checked={inputDisabled}
          >
            <span style={{ color: 'red' }}>
              ※신규법인 또는 3개년 재무현황이 없는 경우 체크해 주세요.
              재무현황이 필수 체크되지 않습니다.
            </span>
          </Checkbox>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrIndcEntFnnrStts'}
            columns={columns}
            dataSource={arrIndcEntFnnrStts}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 300,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default TaskReqstInfo02;
