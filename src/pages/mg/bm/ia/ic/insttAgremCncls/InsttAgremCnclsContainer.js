import React, { useState } from 'react';
import { Col, Row } from 'antd';
import 'css/Common.css';
import InsttAgremCncls01 from 'pages/mg/bm/ia/ic/insttAgremCncls/comp/InsttAgremCncls01';
import InsttAgremCncls02 from 'pages/mg/bm/ia/ic/insttAgremCncls/comp/InsttAgremCncls02';
const InsttAgremCnclsContainer = ({ setOjtKey, setPageType }) => {
  //  검색조건 입력 조회 버튼 메소드
  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };

  const [arrInsttAgremCncls, setArrInsttAgremCncls] = useState([
    {
      key: 1,
      a: '2022',
      b: '전남',
      c: '스마트공장 구축 및 고도화 사업(대중소상생)',
      d: '전남_스마트공장 보급확산',
      e: '승인',
      f: '협약완료',
    },
    {
      key: 2,
      a: '2022',
      b: '충남',
      c: '스마트공장 구축 및 고도화 사업(대중소상생)',
      d: '충남_스마트공장 보급확산',
      e: '미제출',
      f: '협약진행중',
    },
  ]);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttAgremCncls01 searchClick={searchClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttAgremCncls02
            arrInsttAgremCncls={arrInsttAgremCncls}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(InsttAgremCnclsContainer);
