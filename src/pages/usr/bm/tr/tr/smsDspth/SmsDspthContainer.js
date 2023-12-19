import React, { useState, useEffect } from 'react';
import { Col, Row, Modal } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import SmsDspth01 from 'pages/usr/bm/tr/tr/smsDspth/comp/SmsDspth01';
import SmsDspth02 from 'pages/usr/bm/tr/tr/smsDspth/comp/SmsDspth02';

const SmsDspthContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const [arrBizLst, setArrBizLst] = useState([]);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('searchClick ojtSrchCnd : ', ojtSrchCnd);
  };

  const bizClsfLst = [
    { label: '스마트공장 구축 및 고도화', value: 'taskReqstDetail' },
    { label: '스마트공장 수준확인', value: '' },
    { label: '스마트공장 AS 지원', value: '' },
    { label: '로봇활용 제조혁신지원사업', value: '' },
    { label: '스마트공장 역량강화', value: '' },
    { label: '스마트마이스터 활용지원', value: '' },
    { label: '데이터인프라 구축사업', value: '' },
  ];
  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));

    let tmp1 = [];
    for (let idx = 0; idx < bizClsfLst.length; idx++) {
      tmp1.push({
        key: idx,
        a: '2022',
        b: bizClsfLst[idx].label,
        c: bizClsfLst[idx].label,
        d: '2022-10-06 09:00 ~ 2022-12-14 23:50',
        e: idx % 2 ? '작성중' : '신청',
        value: bizClsfLst[idx].value,
      });
    }
    setArrBizLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SmsDspth01 searchClick={searchClick} ojtGroupCodes={ojtGroupCodes} />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SmsDspth02 arrBizLst={arrBizLst} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SmsDspthContainer);
