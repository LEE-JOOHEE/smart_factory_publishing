import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import ReprtRceptList01 from 'pages/mg/em/le/rr/reprtRceptList/comp/ReprtRceptList01';
import ReprtRceptList02 from 'pages/mg/em/le/rr/reprtRceptList/comp/ReprtRceptList02';

const ReprtRceptListContainer = ({ setPageType, ojtKey, setOjtKey }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  //사업  리스트
  const [arrTask, setArrTask] = useState([]);

  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));
    let tmp = [];
    for (let idx = 1; idx < 10; idx++) {
      tmp.push({
        key: idx,
        a1: '2021',
        a2: '',
        a3: '',
        a4: '',
        a5: '도입기업',
        a6: '공급기업',
        a7: '홍길동',
        a8: '',
        a9: '도입기업승인',
        a10: '',
        a11: '',
      });
    }
    setArrTask(tmp);
  }, []);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('searchClick ojtSrchCnd : ', ojtSrchCnd);
  };

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ReprtRceptList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ReprtRceptList02
            arrTask={arrTask}
            setPageType={setPageType}
            ojtKey={ojtKey}
            setOjtKey={setOjtKey}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(ReprtRceptListContainer);
