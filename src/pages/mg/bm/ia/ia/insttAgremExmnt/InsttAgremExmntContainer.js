import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import 'css/Common.css';
import InsttAgremExmnt01 from 'pages/mg/bm/ia/ia/insttAgremExmnt/comp/InsttAgremExmnt01';
import InsttAgremExmnt02 from 'pages/mg/bm/ia/ia/insttAgremExmnt/comp/InsttAgremExmnt02';

const InsttAgremExmntContainer = ({ setOjtKey, setPageType }) => {
  //  검색조건 입력 조회 버튼 메소드
  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };

  const [arrInsttAgremExmnt, setArrInsttAgremExmnt] = useState([]);

  useEffect(() => {
    setArrInsttAgremExmnt([
      {
        key: 1,
        a: '2022',
        b: '스마트공장 구축 및 고도화 사업(대중소상생)',
        c: '전남_스마트공장 보급확산',
        d: '전남테크노파크',
        e: '제출완료',
      },
    ]);
  }, []);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttAgremExmnt01 searchClick={searchClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttAgremExmnt02
            arrInsttAgremExmnt={arrInsttAgremExmnt}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(InsttAgremExmntContainer);
