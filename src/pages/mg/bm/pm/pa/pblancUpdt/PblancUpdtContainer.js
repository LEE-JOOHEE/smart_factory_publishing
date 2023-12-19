import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal } from 'antd';
import 'css/Common.css';
import { useHistory } from 'react-router-dom';
import PblancUpdt01 from 'pages/mg/bm/pm/pa/pblancUpdt/comp/PblancUpdt01';
import PblancUpdt02 from 'pages/mg/bm/pm/pa/pblancUpdt/comp/PblancUpdt02';
import PblancUpdt03 from 'pages/mg/bm/pm/pa/pblancUpdt/comp/PblancUpdt03';
import PblancUpdtPopup from 'pages/mg/bm/pm/pa/pblancUpdt/popup/PblancUpdtPopup';

const PblancUpdtContainer = () => {
  const history = useHistory();

  // 공고 문안 데이터
  const [pbancCpy, setPbancCpy] = useState();

  // 공고 첨부파일 테이블 arr
  const [arrPbancAtchFile, setArrPbancAtchFile] = useState([]);
  // 수행사업 테이블 arr
  const [arrFlfmtBiz, setArrFlfmtBiz] = useState([]);
  // 수행사업 테이블 check arr
  const [arrCheckedFlfmtBiz, setArrCheckedFlfmtBiz] = useState([]);
  // 사업목록 테이블 arr
  const bizLst = {
    key: 1,
    a: '2022',
    b: '스마트공장 구축 및 고도화',
    c: '2022 스마트공장 구축 및 고도화 사업(신규구축)',
  };
  const [arrBizLst, setArrBizLst] = useState([]);
  useEffect(() => {
    setArrPbancAtchFile([
      {
        key: 1,
        a: '1',
        b: '공고 관련 첨부파일',
        c: '공고_첨부파일.hwp',
        d: '3.64(KB)',
        e: '등록일자',
      },
    ]);
    setArrFlfmtBiz([
      {
        key: 1,
        a: '2022',
        b: '스마트공장 구축 및 고도화',
        c: '2022 스마트공장 구축 및 고도화 사업(신규구축)',
        d: '2022-10-24 ~ 2023-10-23',
      },
    ]);
    let i;
    for (i = 0; i < 50; i++) {
      let data = {
        key: i,
        a: '2022',
        b: '스마트공장 구축 및 고도화',
        c: '2022 스마트공장 구축 및 고도화 사업(신규구축)',
      };
      setArrBizLst((prev) => [...prev, data]);
    }
  }, []);

  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };

  const searchModalClick = (ojtModalSrchCnd) => {
    console.log('ojtModalSrchCnd: ', ojtModalSrchCnd);
  };

  // 초기화 메소드
  const initializeClick = () => {
    console.log('initializeClick');
    Modal.info({
      title: 'initializeClick',
    });
  };
  // 목록 메소드
  const lstClick = () => {
    history.push('/mg/bm/pm/pa/PblancManage');
  };
  // 수정 메소드
  const insertClick = () => {
    history.push('/mg/bm/pm/pa/PblancManage');
  };

  // 모달
  const [open, setOpen] = useState(false);
  const openClick = () => {
    setOpen(true);
  };
  const closeClick = () => {
    setOpen(false);
  };

  // 수행사업 선택 사업 목록 checked object
  const [arrCheckedBizLst, setArrCheckedBizLst] = useState();
  // 수행사업 선택 사업 목록 선택 메소드
  const checkedBizLstChcClick = () => {
    console.log('arrCheckedBizLst: ', arrCheckedBizLst);
    closeClick();
  };

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <PblancUpdt01 />
        </Col>
      </Row>

      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <PblancUpdt02 pbancCpy={pbancCpy} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <PblancUpdt03
            arrPbancAtchFile={arrPbancAtchFile}
            arrFlfmtBiz={arrFlfmtBiz}
            setArrFlfmtBiz={setArrFlfmtBiz}
            openClick={openClick}
            setArrCheckedFlfmtBiz={setArrCheckedFlfmtBiz}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <PblancUpdtPopup
            open={open}
            closeClick={closeClick}
            searchModalClick={searchModalClick}
            arrBizLst={arrBizLst}
            setArrCheckedBizLst={setArrCheckedBizLst}
            checkedBizLstChcClick={checkedBizLstChcClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-btn-process-error"
            onClick={initializeClick}
          >
            초기화
          </Button>
          <Button
            type="primary"
            size="large"
            className="eu-btn-process-default"
            onClick={lstClick}
          >
            목록
          </Button>
          <Button
            size="large"
            className="eu-btn-process-warning"
            onClick={insertClick}
          >
            수정
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(PblancUpdtContainer);
