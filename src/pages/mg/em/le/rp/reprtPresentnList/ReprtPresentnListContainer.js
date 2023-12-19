import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import ReprtPresentnList02 from 'pages/mg/em/le/rp/reprtPresentnList/comp/ReprtPresentnList02';
import ReprtPresentnList01 from 'pages/mg/em/le/rp/reprtPresentnList/comp/ReprtPresentnList01';

const ReprtPresentnListContainer = ({ setPageType, ojtKey, setOjtKey }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  //사업  리스트
  const [arrTask, setArrTask] = useState([]);

  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));

    let tmp = [];
    for (let idx = 1; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: '2021',
        a2: '수행기관',
        a3: '사업명',
        a4: '',
        a5: '',
        a6: '',
        a7: '',
        a8: '',
        a9: '도입기업승인',
        a10: '',
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
          <ReprtPresentnList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ReprtPresentnList02
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

export default React.memo(ReprtPresentnListContainer);
