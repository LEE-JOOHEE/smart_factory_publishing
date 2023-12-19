import React, { useState } from 'react';
import { Col, Row } from 'antd';
import 'css/Common.css';
import BsnsSeManage01 from 'pages/mg/bm/bm/bm/bsnsSeManage/comp/BsnsSeManage01';
import BsnsProgsStdPage from 'pages/mg/bm/bm/bm/bsnsSeManage/popup/BsnsProgrsStdPage';

const BsnsSeManageContainer = () => {
  const defaultBizSeLst = [
    {
      key: 1,
      a: '스마트공장사업지원',
      b: 'S0001',
      c: '스마트공장사업지원',
      d: '2016',
      children: [
        {
          key: 2,
          a: '단독공장 구축(일반형)',
          b: 'S2000',
          c: '단독공장 구축(일반',
          d: '2016',
          children: [
            {
              key: 3,
              a: '스마트공장 구축 및 고도화',
              b: 'S2010',
              c: '스마트공장 구축 및',
              d: '2016',
              children: [
                {
                  key: 4,
                  a: '스마트공장 구축 및 고도화(신',
                  b: 'S2011',
                  c: '스마트공장 구축 및',
                  d: '2016',
                },
                {
                  key: 5,
                  a: '스마트공장 구축 및 고도화(고',
                  b: 'S2013',
                  c: '스마트공장 구축 및',
                  d: '2016',
                },
                {
                  key: 6,
                  a: '스마트공장 구축 및 고도화(기',
                  b: 'S2015',
                  c: '스마트공장 구축 및',
                  d: '2016',
                },
              ],
            },
          ],
        },
        {
          key: 7,
          a: '대중소 상생형',
          b: 'S2030',
          c: '대중소 상생형',
          d: '2016',
          children: [
            {
              key: 8,
              a: '스마트공장 구축 (대중소상생',
              b: 'S2031',
              c: '스마트공장 구축 및',
              d: '2016',
            },
            {
              key: 9,
              a: '스마트공장 구축 (대중소상생',
              b: 'S2032',
              c: '스마트공장 구축 및',
              d: '2016',
            },
            {
              key: 10,
              a: '스마트공장 구축 (대중소상생',
              b: 'S2033',
              c: '스마트공장 구축 및',
              d: '2016',
            },
            {
              key: 11,
              a: '스마트공장 구축 (대중소상생',
              b: 'S2034',
              c: '스마트공장 구축 및',
              d: '2016',
            },
          ],
        },
      ],
    },
    {
      key: 11,
      a: 'test',
      b: 'test',
      c: 'test',
      d: '2017',
    },
  ];
  const [arrBizSeLst, setArrBizSeLst] = useState(defaultBizSeLst);

  const [open, setOpen] = useState(false);
  const openClick = () => {
    setOpen(true);
  };
  const closeClick = () => {
    setOpen(false);
  };
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <BsnsSeManage01 arrBizSeLst={arrBizSeLst} openClick={openClick} />
        </Col>
      </Row>
      <BsnsProgsStdPage open={open} closeClick={closeClick} />
    </>
  );
};

export default React.memo(BsnsSeManageContainer);
