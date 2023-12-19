import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/Common.css';
import SuplyEntrprsMtchg01 from 'pages/mg/bm/mm/sm/suplyEntrprsMtchg/comp/SuplyEntrprsMtchg01';
import SuplyEntrprsMtchg02 from 'pages/mg/bm/mm/sm/suplyEntrprsMtchg/comp/SuplyEntrprsMtchg02';
import SuplyInfoPopupPage from 'pages/mg/bm/mm/sm/suplyEntrprsMtchg/popup/SuplyInfoPopupPage';

const SuplyEntrprsMtchgContainer = () => {
  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd: ', ojtSrchCnd);
    Modal.info({
      title: 'searchClick',
    });
  };

  // 공급기업 매칭현황 arr
  const [arrMtchgStts, setArrMtchgStts] = useState([]);
  // 공급기업 정보팝업 arr
  const [arrMtchgSttsSrchCnd, setArrMtchgSttsSrchCnd] = useState([]);

  useEffect(() => {
    let tmp1 = [];
    let tmp2 = [];
    for (let idx = 1; idx <= 50; idx++) {
      tmp1.push({
        key: idx,
        a: '2022-08-05 16:23',
        b: `수요기업명${idx}`,
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        i: '',
        j: '',
        k: '',
        l: '구축건수 기준',
      });
      tmp2.push({
        key: idx,
        a: idx,
        b: '공급기업명',
        c: '324',
        d: '0.0',
        e: '0.0',
        f: '0.0',
        g: '0.0',
        h: '0.0',
        i: '0.0',
        j: '0.0',
      });
    }
    setArrMtchgStts(tmp1);
    setArrMtchgSttsSrchCnd(tmp2);
  }, []);

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
          <SuplyEntrprsMtchg01 searchClick={searchClick} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SuplyEntrprsMtchg02
            arrMtchgStts={arrMtchgStts}
            openClick={openClick}
          />
        </Col>
      </Row>
      <SuplyInfoPopupPage
        open={open}
        closeClick={closeClick}
        arrMtchgSttsSrchCnd={arrMtchgSttsSrchCnd}
      />
    </>
  );
};

export default React.memo(SuplyEntrprsMtchgContainer);
