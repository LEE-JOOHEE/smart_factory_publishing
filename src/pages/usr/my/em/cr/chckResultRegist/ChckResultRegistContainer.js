import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';
import ChckResultRegist01 from 'pages/usr/my/em/cr/chckResultRegist/comp/ChckResultRegist01';
import ChckResultRegist02 from 'pages/usr/my/em/cr/chckResultRegist/comp/ChckResultRegist02';

const ChckResultRegistContainer = ({ setOjtKey, setPageType }) => {
  const [arrChckLst, setArrChckLst] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: '2022',
        b:
          idx % 4 === 1
            ? '중간점검'
            : idx % 4 === 2
            ? '완료점검'
            : idx % 4 === 3
            ? '수시점검'
            : '연차평가',
        c: `평가TEST과제_${idx}`,
        d: '도입기업명',
        e: '2022-10-01 ~ 2022-10-30',
        f:
          idx % 4 === 1
            ? '작성중'
            : idx % 4 === 2
            ? '제출완료'
            : idx % 4 === 3
            ? '승인'
            : '반려',
      });
    }
    setArrChckLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <ChckResultRegist01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <ChckResultRegist02
            arrChckLst={arrChckLst}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(ChckResultRegistContainer);
