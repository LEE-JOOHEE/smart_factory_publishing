import React, { useState, useEffect } from 'react';
import { Col, Modal, Row, Tabs } from 'antd';
import 'css/Common.css';
import PblancChartrManage01 from 'pages/mg/bm/pm/pc/pblancChartrManage/comp/PblancChartrManage01';
import PblancChartrManage02 from 'pages/mg/bm/pm/pc/pblancChartrManage/comp/PblancChartrManage02';
import PblancChartrManagePopup01 from 'pages/mg/bm/pm/pc/pblancChartrManage/popup/PblancChartrManagePopup01';
import PblancChartrManagePopup02 from 'pages/mg/bm/pm/pc/pblancChartrManage/popup/PblancChartrManagePopup02';
import PblancPartcptnTrget from 'pages/mg/bm/pm/pc/pblancPartcptnTrget/PblancPartcptnTrgetPage';
import PblancPvltrtAddpnt from 'pages/mg/bm/pm/pc/pblancPvltrtAddpnt/PblancPvltrtAddpntPage';
import PblancRstrctCnd from 'pages/mg/bm/pm/pc/pblancRstrctCnd/PblancRstrctCndPage';
import PblancFxManage from 'pages/mg/bm/pm/pc/pblancFxManage/PblancFxManagePage';
import PblancJobProcss from 'pages/mg/bm/pm/pc/pblancJobProcss/PblancJobProcssPage';
import PblancFormatDfn from 'pages/mg/bm/pm/pc/pblancFormatDfn/PblancFormatDfnPage';
import PblancRsltIx from 'pages/mg/bm/pm/pc/pblancRsltIx/PblancRsltIxPage';
import PblancAditIem from 'pages/mg/bm/pm/pc/pblancAditIem/PblancAditIemPage';
import DocTyPopupPage from 'pages/mg/bm/pm/pc/pblancChartrManage/popup/DocTyPopupPage';
import FileExtsnPopupPage from 'pages/mg/bm/pm/pc/pblancChartrManage/popup/FileExtsnPopupPage';

const PblancChartrManageContainer = () => {
  // 사업공고 테이블 arr
  const [arrBizPbanc, setArrBizPbanc] = useState([]);
  // 사업세부공고 테이블 arr
  const [arrBizDtlPbanc, setArrBizDtlPbanc] = useState([]);
  // 사업세부공고 테이블 checked arr
  const [arrCheckedBizDtlPbanc, setArrCheckedBizDtlPbanc] = useState([]);
  // 참여대상 탭 테이블 arr
  const [arrPartcptnTrget, setArrPartcptnTrget] = useState([
    {
      a: '전담기관',
      b: false,
      c: false,
      d: '중소기업기술정보진흥원',
      e: '',
    },
    {
      a: '수행기관',
      b: false,
      c: true,
      d: '중소기업기술정보진흥원',
      e: '',
    },
    {
      a: '도입기업',
      b: true,
      c: false,
      d: '',
      e: '',
    },
  ]);

  // 우대가점 탭 search keyword
  const [strPvltrtAddpnt, setStrPvltrtAddpnt] = useState('');
  // 우대가점 탭 목록 테이블 arr
  let tmp1 = [];
  for (let idx = 1; idx <= 5; idx++) {
    tmp1.push({
      key: idx,
      a: 'MD4001',
      b: '선도과제 우대가점',
      c: '2',
      d: '[기술] 벤처기업육성에관한특별조치법 제25조의 규정에 의한 벤처기업(예비포함)',
      e: '2',
      f: 5,
    });
  }
  for (let idx = 1; idx <= 2; idx++) {
    tmp1.push({
      key: idx + tmp1.length,
      a: 'MD4002',
      b: '실용과제',
      c: '2',
      d: '매출액 대비 RnD투자 비율 10% 이상 기업',
      e: '1',
      f: 2,
    });
  }
  const [arrPvltrtAddpntLst, setArrPvltrtAddpntLst] = useState(tmp1);
  // 우대가점 탭 목록 테이블 arr checked
  const [checkedArrPvltrtAddpntLst, setCheckedArrPvltrtAddpntLst] = useState(
    []
  );

  const strPvltrtAddpntChange = (value) => {
    console.log('strPvltrtAddpnt: ', value);
    setStrPvltrtAddpnt(value);
  };
  const srchPvltrtAddpntClick = () => {
    console.log('strPvltrtAddpnt: ', strPvltrtAddpnt);
    Modal.info({
      title: '우대가점 목록 search',
    });
  };

  // 제약조건 탭 search keyword
  const [strRstrctCnd, setStrRstrctCnd] = useState('');
  // 제약조건 탭 테이블 arr
  let tmp2 = [];
  for (let idx = 1; idx <= 5; idx++) {
    tmp2.push({
      key: idx,
      a: '제약항목분류',
      b: '정부출연금',
      c: '금액(단위:원)',
      d: '이하',
      e: '30',
    });
  }
  const [arrRstrctCnd, setArrRstrctCnd] = useState(tmp2);
  // 제약조건 탭 목록 테이블 arr checked
  const [checkedArrRstrctCnd, setCheckedArrRstrctCnd] = useState([]);

  const strRstrctCndChange = (value) => {
    console.log('strRstrctCnd: ', value);
    setStrRstrctCnd(value);
  };

  const srchRstrctCndClick = () => {
    console.log('strRstrctCnd: ', strRstrctCnd);
    Modal.info({
      title: '제약조건 목록 search',
    });
  };

  // 일정관리 탭 테이블 arr checked
  const [checkedArrFxManage, setCheckedArrFxManage] = useState([]);

  // 일정관리 탭 테이블 arr
  let tmp3 = [];
  for (let idx = 1; idx <= 3; idx++) {
    tmp3.push({
      key: idx,
      a: '신청',
      b: '',
      c: '09:00:00',
      d: '',
      e: '18:00:00',
      f: '20:00:00',
    });
  }
  const [arrFxManage, setArrFxManage] = useState(tmp3);
  // 업무절차 탭 테이블 arr
  let tmp4 = [];
  for (let idx = 1; idx <= 5; idx++) {
    tmp4.push({
      key: idx,
      a: '사업관리',
      b: false,
      c: idx,
      d: idx + 1,
      e: idx,
      f: '원가계산 합계 : 1,000원 미만 절삭처리',
    });
  }
  const [arrJobProcss, setArrJobProcss] = useState(tmp4);
  // 성과지표 탭 테이블 arr
  const [arrRsltlx, setArrRsltlx] = useState([]);
  // 서식정의 탭 업무분류별 서식 arr
  let tmp5 = [];
  for (let idx = 1; idx <= 10; idx++) {
    tmp5.push({
      key: idx,
      a: '과제신청',
      b: idx,
      c: idx + 1,
      d: 100,
    });
  }
  const [arrTaskClsfTmplt, setArrTaskClsfTmplt] = useState(tmp5);
  // 서식정의 탭 문서제한용량 arr
  let tmp6 = [];
  for (let idx = 1; idx <= 10; idx++) {
    tmp6.push({
      key: idx,
      a: '사업수행 계획서',
      b: '필수',
      c: '자동',
      d: idx,
      e: 'hwp',
      f: '첨부',
      g: '',
    });
  }
  const [arrDocType, setArrDocType] = useState(tmp6);
  // 서식정의 행추가 모달
  const [docTypeChcOpen, setDocTypeChcOpen] = useState(false);
  const docTypeChcOpenClick = () => {
    setDocTypeChcOpen(true);
  };
  const docTypeChcCloseClick = () => {
    setDocTypeChcOpen(false);
  };
  const srchRsltIxClick = (ojtRsltIxSrchCnd) => {
    console.log('ojtRsltIxSrchCnd: ', ojtRsltIxSrchCnd);
  };
  // 서식정의 행추가 모달 테이블 arr
  const [arrDocTypeLst, setDocTypeLst] = useState([
    {
      key: 1,
      a: '사업신청서',
      children: [
        {
          key: 2,
          a: '사업수행 계획서',
        },
        {
          key: 3,
          a: '중소기업기술개발지원사업 사업계획서',
        },
        {
          key: 4,
          a: '위탁기관 (참여기업) 참여의사확인서',
        },
      ],
    },
  ]);
  // 서식정의 행추가 모달 테이블 checked arr
  const [arrCheckedDocTypeLst, setArrCheckedDocTypeLst] = useState([]);
  // 서식정의 행추가 모달 확인 메소드
  const docTypeChcConfirmClick = () => {
    console.log('arrCheckedDocTypeLst: ', arrCheckedDocTypeLst);
    docTypeChcCloseClick();
  };
  // 서식정의 파일확장자 모달
  const [fileExtnOpen, setFileExtnOpen] = useState(false);
  const openFileExtnClick = () => {
    setFileExtnOpen(true);
  };
  const fileExtnCloseClick = () => {
    setFileExtnOpen(false);
  };

  const [arrCheckedFileExtn, setArrCheckedFileExtn] = useState();
  const fileExtnConfirmClick = () => {
    console.log('checkedFileExtn: ', arrCheckedFileExtn);
    fileExtnCloseClick();
  };

  // 추가항목 탭 표준 추가항목 코드 arr
  const [arrStdArtclCd, setArrStdArtclCd] = useState([
    {
      key: 1,
      a: '도입기업 최근 3년간 참여여부',
      b: '선택 객관식',
      c: 'Y',
      d: '1',
    },
    {
      key: 2,
      a: '도입기업 공장 규모',
      b: '선택 객관식',
      c: 'Y',
      d: '2',
    },
    {
      key: 3,
      a: '연구단지 참여 입주년도',
      b: '날짜형 주관식',
      c: 'N',
      d: '3',
    },
  ]);
  // 추가항목 탭 적용 추가항목 checked arr
  const [arrCheckedAplcnArtclCd, setArrCheckedAplcnArtclCd] = useState([]);

  useEffect(() => {
    // 사업공고 테이블
    setArrBizPbanc([
      {
        a: '2022',
        b: '스마트공장 구축 및 고도화',
        c: '스마트공장 구축 및 고도화 사업(신규구축)',
        d: '스마트공장 보급 확산 사업 공고_기초(코디 지원)',
        e: '2022-10-24',
        f: '홍길동',
      },
    ]);
    // 사업세부공고 테이블
    setArrBizDtlPbanc([
      {
        a: '1',
        b: '1',
        c: '세부공고명1',
        d: '-',
        e: '-',
        f: '-',
        g: '-',
        h: '자유공모',
        i: '',
      },
    ]);
    // 우대가점 목록
    let tmp1 = [];
    for (let idx = 1; idx <= 5; idx++) {
      tmp1.push({
        a: 'MD4001',
        b: '선도과제 우대가점',
        c: '2',
        d: 5,
        e: '[기술] 벤처기업육성에관한특별조치법 제25조의 규정에 의한 벤처기업(예비포함)',
        f: '2',
      });
    }
    for (let idx = 1; idx <= 2; idx++) {
      tmp1.push({
        a: 'MD4002',
        b: '실용과제',
        c: '2',
        d: 2,
        e: '매출액 대비 RnD투자 비율 10% 이상 기업',
        f: '1',
      });
    }
    setArrPvltrtAddpntLst(tmp1);
  }, []);

  //  검색조건 입력 조회 버튼 메소드
  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };
  // 세부설정 모달
  const [open, setOpen] = useState(false);
  const openClick = () => {
    setOpen(true);
  };

  const closeClick = () => {
    setOpen(false);
  };
  const confirmClick = (ojtBizInfo) => {
    console.log('ojtBizInfo: ', ojtBizInfo);
    setOpen(false);
  };

  // 사업 세부공고 설정 모달
  const [upBizPlanStngOpen, setUpBizPlanStngOpen] = useState(false);
  const [arrCheckedUpZiaPlanStng, setArrCheckedUpZiaPlanStng] = useState([]);

  const openUpBizPlanStngOpen = () => {
    setUpBizPlanStngOpen(true);
  };
  const closeUpBizPlanStngOpen = () => {
    setArrCheckedUpZiaPlanStng([]);
    setUpBizPlanStngOpen(false);
  };
  const confirmUpBizPlanStng = () => {
    closeUpBizPlanStngOpen();
  };

  useEffect(() => {
    console.log('arrCheckedUpZiaPlanStng: ', arrCheckedUpZiaPlanStng);
  }, [arrCheckedUpZiaPlanStng]);

  const [tabItems, setTabItems] = useState([
    {
      label: '참여대상',
      key: '참여대상',
      children: (
        <PblancPartcptnTrget
          arrPartcptnTrget={arrPartcptnTrget}
          setArrPartcptnTrget={setArrPartcptnTrget}
        />
      ),
    },
    {
      label: '우대가점',
      key: '우대가점',
      children: (
        <PblancPvltrtAddpnt
          strPvltrtAddpntChange={strPvltrtAddpntChange}
          srchPvltrtAddpntClick={srchPvltrtAddpntClick}
          arrPvltrtAddpntLst={arrPvltrtAddpntLst}
          checkedArrPvltrtAddpntLst={checkedArrPvltrtAddpntLst}
          setCheckedArrPvltrtAddpntLst={setCheckedArrPvltrtAddpntLst}
        />
      ),
    },
    {
      label: '제약조건',
      key: '제약조건',
      children: (
        <PblancRstrctCnd
          strRstrctCndChange={strRstrctCndChange}
          srchRstrctCndClick={srchRstrctCndClick}
          arrRstrctCnd={arrRstrctCnd}
          setCheckedArrRstrctCnd={setCheckedArrRstrctCnd}
          setArrRstrctCnd={setArrRstrctCnd}
        />
      ),
    },
    {
      label: '일정관리',
      key: '일정관리',
      children: (
        <PblancFxManage
          arrFxManage={arrFxManage}
          setArrFxManage={setArrFxManage}
          setCheckedArrFxManage={setCheckedArrFxManage}
        />
      ),
    },
    {
      label: '업무절차',
      key: '업무절차',
      children: (
        <PblancJobProcss
          arrJobProcss={arrJobProcss}
          setArrJobProcss={setArrJobProcss}
        />
      ),
    },
    {
      label: '성과지표',
      key: '성과지표',
      children: (
        <PblancRsltIx
          arrTaskClsfTmplt={arrTaskClsfTmplt}
          arrDocType={arrDocType}
          setArrDocType={setArrDocType}
          rsltIxModalOpenClick={docTypeChcOpenClick}
          openFileExtnClick={openFileExtnClick}
        />
      ),
    },
    {
      label: '서식정의',
      key: '서식정의',
      children: <PblancFormatDfn />,
    },
    {
      label: '추가항목',
      key: '추가항목',
      children: (
        <PblancAditIem
          arrStdArtclCd={arrStdArtclCd}
          setArrCheckedAplcnArtclCd={setArrCheckedAplcnArtclCd}
        />
      ),
    },
  ]);

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <PblancChartrManage01 searchClick={searchClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <PblancChartrManage02
            arrBizPbanc={arrBizPbanc}
            arrBizDtlPbanc={arrBizDtlPbanc}
            setArrBizDtlPbanc={setArrBizDtlPbanc}
            setArrCheckedBizDtlPbanc={setArrCheckedBizDtlPbanc}
            openClick={openClick}
          />
        </Col>
      </Row>
      <PblancChartrManagePopup01
        open={open}
        closeClick={closeClick}
        confirmClick={confirmClick}
        openUpBizPlanStngOpen={openUpBizPlanStngOpen}
      />
      <PblancChartrManagePopup02
        upBizPlanStngOpen={upBizPlanStngOpen}
        closeUpBizPlanStngOpen={closeUpBizPlanStngOpen}
        confirmUpBizPlanStng={confirmUpBizPlanStng}
        setArrCheckedUpZiaPlanStng={setArrCheckedUpZiaPlanStng}
      />
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Tabs items={tabItems} className="eu-content-tab" />
        </Col>
      </Row>

      <DocTyPopupPage
        docTypeChcOpen={docTypeChcOpen}
        rsltIxModalCloseClick={docTypeChcCloseClick}
        searchClick={srchRsltIxClick}
        setArrCheckedDocTypeLst={setArrCheckedDocTypeLst}
        arrDocTypeLst={arrDocTypeLst}
        rsltIxModalConfirmClick={docTypeChcConfirmClick}
      />
      <FileExtsnPopupPage
        fileExtnOpen={fileExtnOpen}
        fileExtnCloseClick={fileExtnCloseClick}
        setArrCheckedFileExtn={setArrCheckedFileExtn}
        fileExtnConfirmClick={fileExtnConfirmClick}
      />
    </>
  );
};

export default React.memo(PblancChartrManageContainer);
