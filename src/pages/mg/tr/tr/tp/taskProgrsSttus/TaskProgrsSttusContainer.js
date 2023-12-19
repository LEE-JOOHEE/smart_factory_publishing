import React, { useEffect, useState } from 'react';

import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import TaskProgrsSttus02 from 'pages/mg/tr/tr/tp/taskProgrsSttus/comp/TaskProgrsSttus02';
import TaskProgrsSttus01 from 'pages/mg/tr/tr/tp/taskProgrsSttus/comp/TaskProgrsSttus01';

const TaskProgrsSttusContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //사업 지원자 리스트
  const [arrTaskProgrs, setArrTaskProgrs] = useState([
    {
      key: '1',
      a1: '2022',
      a2: '세부공고명',
      a3: '작성중',
      a5: '적합',
      a6: '승인',
      a7: '',
      a8: '',
      a9: '제출완료',
      a10: '협약완료',
      a11: '최종보고서',
      a12: '',
      a13: '승인',
      a14: '포기',
      a15: '',
      a16: '',
      a17: '',
      a18: '',
    },
  ]);

  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));
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
          <TaskProgrsSttus01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <TaskProgrsSttus02 arrTaskProgrs={arrTaskProgrs} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(TaskProgrsSttusContainer);
