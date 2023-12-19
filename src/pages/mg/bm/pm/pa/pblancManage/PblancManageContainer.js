import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import 'css/Common.css';
import PblancManage01 from 'pages/mg/bm/pm/pa/pblancManage/comp/PblancManage01';
import PblancManage02 from 'pages/mg/bm/pm/pa/pblancManage/comp/PblancManage02';

const PblancManageContainer = ({ setPageType }) => {
  //  검색조건 입력 조회 버튼 메소드
  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };

  const [arrPbancLst, setArrPbancLst] = useState([]);
  const [arrCheckedPbancLst, setArrCheckedPbancLst] = useState([]);

  useEffect(() => {
    setArrPbancLst([
      {
        key: 1,
        a: '1',
        b: '2022',
        c: '스마트공장 구축 및 고도화',
        d: '2022-N-0370',
        e: '스마트공장 보급확산 사업 공고 기초(코디 지원)',
        f: '2022-10-24',
        g: '홍길동',
      },
    ]);
  }, []);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <PblancManage01 searchClick={searchClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <PblancManage02
            arrPbancLst={arrPbancLst}
            arrCheckedPbancLst={arrCheckedPbancLst}
            setArrCheckedPbancLst={setArrCheckedPbancLst}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(PblancManageContainer);
