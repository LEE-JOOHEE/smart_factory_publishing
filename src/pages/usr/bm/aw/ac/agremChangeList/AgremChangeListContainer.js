import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import AgremChangeList01 from 'pages/usr/bm/aw/ac/agremChangeList/comp/AgremChangeList01';
import AgremChangeList02 from 'pages/usr/bm/aw/ac/agremChangeList/comp/AgremChangeList02';

const AgremChangeListContainer = ({ setOjtKey, setPageType }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  // 사업비 목록
  const [arrAgremTrgtChgAsmt, setArrAgremTrgtChgAsmt] = useState([]);
  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('searchClick ojtSrchCnd : ', ojtSrchCnd);
  };
  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));

    let tmp1 = [];
    for (let idx = 0; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a1: '2022',
        a2: '2022-03x',
        a3: '스마트공장구축고도화',
        a4: '(주)공급기업_스마트공장구축고도화',
        a5: '1',
        a6: '1',
        a7: '0',
        a8: '',
        a9: '4',
      });
    }
    setArrAgremTrgtChgAsmt(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <AgremChangeList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <AgremChangeList02
            setOjtKey={setOjtKey}
            setPageType={setPageType}
            arrAgremTrgtChgAsmt={arrAgremTrgtChgAsmt}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(AgremChangeListContainer);
