import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import TaskRceptSttus01 from 'pages/mg/tr/tr/tr/taskRceptSttus/comp/TaskRceptSttus01';
import TaskRceptSttus02 from 'pages/mg/tr/tr/tr/taskRceptSttus/comp/TaskRceptSttus02';

const TaskRceptSttusContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //사업 지원자 리스트
  const [arrTaskRcept, setArrTaskRcept] = useState([
    {
      key: '1',
      a1: '2022',
      a2: '대전',
      a3: '2차 스마트공장 구축 및 고도화 기초',
      a4: '해당없음',
      a5: '도입기업명',
      a6: '공급기업명',
      a7: '아무개',
      a8: '',
    },
    {
      key: '2',
      a1: '2022',
      a2: '울산',
      a3: '스마트 마이스터 활용지원 사업',
      a4: '일터혁신컨설팅',
      a5: '(주)글로맥스',
      a6: '(사)한국스마트',
      a7: '정현준',
      a8: '',
    },
    {
      key: '3',
      a1: '2022',
      a2: '경북',
      a3: '2022 대중소상생형(삼성) 스마트공장 구축 (유형1-A)',
      a4: '해당없음',
      a5: '주식회사 탄탄코어',
      a6: '에스링크비즈니스',
      a7: '박희태',
      a8: '',
    },
    {
      key: '4',
      a1: '2022',
      a2: '강원',
      a3: '22년 K-스마트등대공장(연차별구축)_1년차',
      a4: '해당없음',
      a5: '신한네트웍스(주)',
      a6: '(사)한국스마트컨설팅협회',
      a7: '유영환',
      a8: '',
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
          <TaskRceptSttus01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <TaskRceptSttus02 arrTaskRcept={arrTaskRcept} />
        </Col>
      </Row>
    </>
  );
};

export default TaskRceptSttusContainer;
