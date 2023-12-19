import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import 'css/Common.css';
import BsnsExpitmTaxitm01 from 'pages/mg/bm/bm/bc/bsnsExpitmTaxitm/comp/BsnsExpitmTaxitm01';
import BsnsExpitmTaxitm02 from 'pages/mg/bm/bm/bc/bsnsExpitmTaxitm/comp/BsnsExpitmTaxitm02';

const BsnsExpitmTaxitmContainer = () => {
  const defaultArrBizClsf = [
    {
      key: 1,
      title: '스마트공장지원사업',
      a: '2022',
      b: 'G01',
      children: [
        {
          key: 2,
          title: '단독공장 구축(일반형)',
          a: '2022',
          b: 'G01',
          children: [
            {
              key: 4,
              title: '스마트공장 구축 및 고도화',
              a: '2022',
              b: 'G01',
              children: [
                {
                  key: 5,
                  title: '스마트공장 구축 및 고도화(신규구축)',
                  a: '2022',
                  b: 'G01',
                },
                {
                  key: 6,
                  title: '스마트공장 구축 및 고도화(고도화)',
                  a: '2022',
                  b: 'G01',
                },
              ],
            },
          ],
        },
        {
          key: 3,
          title: '대중소 상생형',
          a: '2022',
          b: 'G01',
          children: [
            {
              key: 7,
              title: '스마트공장 구축(대중소상생형-포스코)',
              a: '2022',
              b: 'G01',
            },
            {
              key: 8,
              title: '스마트공장 구축(대중소상생형-한수원)',
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
  const [selectedExpitmKeys, setSelectedExpitmKeys] = useState([]);
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
    key: 5,
    title: '스마트공장 구축 및 고도화(신규구축)',
    a: '2022',
    b: 'G01',
  };
  const test2 = {
    key: 1,
    title: '스마트공장 구축 및 고도화(신규구축)',
    a: '2022',
    b: 'G01',
  };
  const test3 = {
    key: 6,
    title: '스마트공장 구축 및 고도화(신규구축)',
    a: '2022',
    b: 'G01',
    c: '도입기업의 사업관리 인력 인건비',
  };
  useEffect(() => {
    // let i;
    // for (i = 0; i < 50; i++) {
    //   setArrBizClsf((prev) => [...prev, test1]);
    //   setArrExpitm((prev) => [...prev, test2]);
    //   setArrChcExpitmGroupDsctn((prev) => [...prev, test3]);
    // }
  }, []);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <BsnsExpitmTaxitm01 searchClick={searchClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <BsnsExpitmTaxitm02
            arrBizClsf={arrBizClsf}
            selectedExpitmKeys={selectedExpitmKeys}
            setSelectedExpitmKeys={setSelectedExpitmKeys}
            arrExpitm={arrExpitm}
            setArrExpitm={setArrExpitm}
            arrChcExpitmGroupDsctn={arrChcExpitmGroupDsctn}
            setArrChcExpitmGroupDsctn={setArrChcExpitmGroupDsctn}
            path={window.location.pathname}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(BsnsExpitmTaxitmContainer);
