import React, { useState, useEffect } from 'react';
import BaseLayout from 'components/layout/BaseLayout';
import { Col, Row, Tabs } from 'antd';
import { FileOutlined } from '@ant-design/icons';
import TitlePage from 'components/layout/TitlePage';
import 'css/Common.css';
import BsnsBudgetManage01 from 'pages/mg/bm/bm/bc/bsnsBudgetManage/comp/BsnsBudgetManage01';
import BsnsBudgetManage02 from 'pages/mg/bm/bm/bc/bsnsBudgetManage/comp/BsnsBudgetManage02';
const BsnsBudgetManageContainer = () => {
  const defaultArrBizClsf = [
    {
      key: 1,
      title: (
        <span className="eu-tree-title">스마트공장지원사업</span>
      ),
      a: '2022',
      b: 'G01',
      children: [
        {
          key: 2,
          title: (
            <span className="eu-tree-title">단독공장 구축(일반형)</span>
          ),
          a: '2022',
          b: 'G01',
          children: [
            {
              key: 4,
              title: (
                <span className="eu-tree-title">스마트공장 구축 및 고도화</span>
              ),
              a: '2022',
              b: 'G01',
              children: [
                {
                  key: 5,
                  title: '스마트공장 구축 및 고도화(신규구축)',
                  icon: <FileOutlined />,
                  a: '2022',
                  b: 'G01',
                },
                {
                  key: 6,
                  title: '스마트공장 구축 및 고도화(고도화)',
                  icon: <FileOutlined />,
                  a: '2022',
                  b: 'G01',
                },
              ],
            },
          ],
        },
        {
          key: 3,
          title: (
            <span className="eu-tree-title">대중소 상생형</span>
          ),
          a: '2022',
          b: 'G01',
          children: [
            {
              key: 7,
              title: '스마트공장 구축(대중소상생형-포스코)',
              icon: <FileOutlined />,
              a: '2022',
              b: 'G01',
            },
            {
              key: 8,
              title: '스마트공장 구축(대중소상생형-한수원)',
              icon: <FileOutlined />,
              a: '2022',
              b: 'G01',
            },
          ],
        },
      ],
    },
  ];

  //  검색조건 입력 조회 버튼 메소드
  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };
  // 년도별 사업분류 array
  const [arrBizClsf, setArrBizClsf] = useState(defaultArrBizClsf);

  // 년도별 사업분류 선택 데이터 key
  const [selectedKeys, setSelectedKeys] = useState([]);
  // 사업예산 테이블 arr
  const [arrBizBgt, setArrBizBgt] = useState([
    {
      key: 1,
      a: '스마트공장사업지원',
      b: '일반예산',
      c: '217,067,000',
      d: '8,947,000',
      e: '12,027,703',
    },
  ]);

  // 비목 테이블 arr
  const [arrExpitm, setArrExpitm] = useState([
    {
      key: 1,
      title: '스마트공장 구축 및 고도화(신규구축)',
      a: '2022',
      b: 'G01',
    },
  ]);
  // 선택 비목그룹내역 테이블 arr
  const [arrChcExpitmGroupDsctn, setArrChcExpitmGroupDsctn] = useState([
    {
      key: 1,
      title: '스마트공장 구축 및 고도화(신규구축)',
      a: '2022',
      b: 'G01',
      c: 'S/W 개발비',
    },
    {
      key: 2,
      title: '스마트공장 구축 및 고도화(신규구축)',
      a: '2022',
      b: 'G01',
      c: 'H/W 개발비',
    },
    {
      key: 3,
      title: '스마트공장 구축 및 고도화(신규구축)',
      a: '2022',
      b: 'G01',
      c: 'S/W 개발비',
    },
    {
      key: 4,
      title: '스마트공장 구축 및 고도화(신규구축)',
      a: '2022',
      b: 'G01',
      c: 'H/W 개발비',
    },
    {
      key: 5,
      title: '스마트공장 구축 및 고도화(신규구축)',
      a: '2022',
      b: 'G01',
      c: '기타(할인)비용',
    },
    {
      key: 6,
      title: '스마트공장 구축 및 고도화(신규구축)',
      a: '2022',
      b: 'G01',
      c: '도입기업의 사업관리 인력 인건비',
    },
  ]);

  // 데이터 테스트
  const test1 = {
    key: 8,
    title: '스마트공장 구축(대중소상생형-한수원)',
    a: '2022',
    b: 'G01',
  };
  const test2 = {
    key: 1,
    a: '스마트공장사업지원',
    b: '일반예산',
    c: '217,067,000',
    d: '8,947,000',
    e: '12,027,703',
  };
  useEffect(() => {
    // let i;
    // for (i = 0; i < 50; i++) {
    //   setArrBizClsf((prev) => [...prev, test1]);
    //   setArrBizBgt((prev) => [...prev, test2]);
    // }
  }, []);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <BsnsBudgetManage01 searchClick={searchClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <BsnsBudgetManage02
            arrBizClsf={arrBizClsf}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            arrBizBgt={arrBizBgt}
            setArrBizBgt={setArrBizBgt}
            path={window.location.pathname}
            arrExpitm={arrExpitm}
            setArrExpitm={setArrExpitm}
            arrChcExpitmGroupDsctn={arrChcExpitmGroupDsctn}
            setArrChcExpitmGroupDsctn={setArrChcExpitmGroupDsctn}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(BsnsBudgetManageContainer);
