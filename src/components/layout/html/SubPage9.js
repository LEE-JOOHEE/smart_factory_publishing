import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag, Upload } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

const SubPage9 = ({ children }) => {

  //사업공고
  const columns = [
    {
      title: 'NO',
      dataIndex: 'a1',
      width: '10%',
      align: 'center',
    },
    {
      title: [
        <div className="text-l pl-16">제목</div>
      ],
      dataIndex: 'a2',
      render: (_, record, index) => {
        return (
          <>
            <a href="#/">{record?.a2}</a>
          </>
        );
      },
      width: '50%',
      align: 'left',
    },
    {
      title: '작성자',
      dataIndex: 'a3',
      width: '15%',
      align: 'center',
    },
    {
      title: '첨부',
      dataIndex: 'a4',
      render: (_, record, index) => {
        if(record?.a4 === "1"){
          return (
            <>
              <button className="eu-btn-file"></button>
            </>
          );
        }
      },
      width: '10%',
      align: 'center',
    },
    {
      title: '등록일',
      dataIndex: 'a5',
      width: '15%',
      align: 'center',
    },
  ];

  const dataSource = [];
  for (let i = 0; i < 200; i++) {
    dataSource.push({
      key: i,
      a1: i + 1,
      a2: `221014(KOSMO 보도자료) “2022년 K-인공지능(AI)제조데이터 분석 경진대회 개최” - ${i+1}`,
      a3: '김지현',
      a4: (i % 2 === 1) ? '1' : '0',
      a5: '2022-11-07',
    });
  }

  //업로드
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500',
        // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500',
        // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
    showUploadList: {
      showDownloadIcon: true,
      downloadIcon: 'Download',
      showRemoveIcon: true,
      removeIcon: <StarOutlined onClick={(e) => console.log(e, 'custom removeIcon event')} />,
    },
  };

  return(
    <>
      {/* ============================================================================ */}
      {/* (※게시판 관련 대표화면 퍼블리싱) */}
      {/* (1. 사업안내 - 사업공고 ) */}
      {/* (2. 홍보관 - 보도자료, 홍보자료  ) */}
      {/* (3. 알림/참여마당 - 공지사항, 자료실, 정기간행물, Q&A, 자주묻는질문(FAQ) ) */}
      {/* ============================================================================ */}


      {/* ============================================================================ */}
      {/* 보도자료 */}
      {/* 홍보관 > 보도자료 */}
      {/* ============================================================================ */}
      <Row className="usr-search-form">
        <Col span={24}>
          <Space className="space-full">
            <Select 
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }} 
              style={{ width : "260px" }}
              defaultValue={''} 
              options={[{value: '', label: '제목'},]} 
            />
            <Input placeholder="검색어를 입력해주세요!" />
            <Button className="eu-btn-crud-default plr-44">조회하기</Button>
          </Space>
        </Col>
      </Row>

      <Row className="mt-20">
        <Col span={24} className="mb-10">
          <div className="eu-table-indicator">
            <div className="count">전체
              <span className="text-blue font-bold-500 ml-4">{dataSource.length}</span>건
            </div>
          </div>
        </Col>
        <Col span={24}>
          <Table size="small" bordered 
            className="usr-board-table"
            columns={columns}
            dataSource={dataSource}
            pagination={true}
            scroll={{ y: 417, x: 900 }}
          />
        </Col>
      </Row>
      {/* ============================================================================ */}


      {/* ============================================================================ */}
      {/* 보도자료 view */}
      {/* 홍보관 > 보도자료 상세보기 */}
      {/* ============================================================================ */}
      {/* <div className="usr-board-veiw-wrap">
        <div className="title">“2022년 K-인공지능(AI)제조데이터 분석 경진대회 개최”</div>
        <div className="writer">
          <div className="label">등록자</div>김지현
          <span className="line"></span>
          <div className="label">등록일</div>2022-12-21
        </div>
        <div className="view">
          <div className="bold mb-10">“2022년 K-인공지능(AI)제조데이터 분석 경진대회 개최”</div>
          <div>
            중소기업의 제조 공정에서 발생하는 문제점을 인공지능으로 해결 
            <br/>10월 11일부터 KAMP포털을 통한 온라인 참여, 총 8개 팀 선발·수상
            <br/>중소벤처기업부 주최, 스마트제조혁신추진단-한국과학기술원 주관으로 메타버스 상에서 제조 인공지능 모델 개발 능력을 겨루는「2022년 K인공지능(AI) 제조데이터 분석 경진대회」를 개최한다.
            <br/>「2022년 K-인공지능(AI) 제조데이터 분석 경진대회」는 중소 제조기업의 제조혁신을 위해 중소 제조기업이 직면할 수 있는 공통문제*를 인공지능 분석모델 개발을 통해 해결하고자 개최하는 대회이며, 
            <br/>인공지능 중소벤처 제조플랫폼(이하 ‘KAMP’)을 통해 진행한다.
            <br/>* (예) 장비이상 조기탐지, 품질 이상탐지/진단, 공정운영 최적화 등 ㅇ KAMP는 중소제조기업의 경쟁력 강화를 위해 스마트제조혁신추진단이 한국과학기술원-NHN 등과 협업하여 
            <br/>구축한 민-관 합동 중소제조 클라우드 플랫폼으로, 이들을 위한 다양한 서비스*를 제공하고 있다.
            <br/>* 스마트공장에필요한컴퓨팅인프라, 분석·개발도구, 인공지능데이터셋, 우수사례, 교육자료등 본 대회는 KAMP 포털 알림마당을 통해 참가규모, 시상규모 및 진행방식을 확인할 수 있다.
            <br/>이번달 11일부터 21일까지 인공지능 중소벤처 제조플랫폼(이하 ‘KAMP’)에서참가팀을 모집하며, AI 알고리즘 개발과 데이터 분석에 관심이 있는 사람이라면 
            <br/>개인 또는 3인 이하의 팀을 구성해 누구나 참가할 수 있다. 과제는 KAMP 포털 내 등재된 제조AI데이터셋 24종 중 무작위로 선정하여 출제된 문제를 해결하는 것이며, 
            <br/>1차 서면평가 후, 2차 발표평가를 메타버스 상에서 진행한다.
          </div>
        </div>
        <div className="attach" >
          <div className="label">첨부파일</div>
          <div className="files">
            임시구현(첨부파일 공간구현)
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </div>
        </div>
      </div>
      <Row>
        <Col span={24} className="text-r mt-30">
          <Button className="eu-btn-process-error golist">목록보기</Button>
        </Col>
      </Row> */}
      {/* ============================================================================ */}


      {/* ============================================================================ */}
      {/* 공지사항 */}
      {/* 알림/참여마당 > 공지사항 */}
      {/* ============================================================================ */}
      <h1 className="mt-80">1. 알림/참여마당 - 공지사항</h1>
      <Row className="usr-search-form" gutter={[40, 6]}>
        <Col span={8} md={8} xs={24}>
          <Space className="space-full">
            <div className="label mr-6">사업유형</div>
            <Select 
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }} 
              defaultValue={''} 
              options={[{value: '', label: '선택'},]} 
            />
          </Space>
        </Col>
        <Col span={16} md={16} xs={24}>
          <Space className="space-full search-button">
            <Select 
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }} 
              style={{ width : "130px" }}
              defaultValue={''} 
              options={[{value: '', label: '선택'},
                {value: '제목', label: '제목'},
                {value: '내용', label: '내용'},
                {value: '제목/내용', label: '제목/내용'},
              ]} 
            />
            <Input placeholder="검색어를 입력해주세요!" />
            <Button className="eu-btn-crud-default plr-44 ml-auto">조회하기</Button>
          </Space>
        </Col>
      </Row>
      <Row className="mt-20">
        <Col span={24} className="mb-10">
          <div className="eu-table-indicator">
            <div className="count">전체
              <span className="text-blue font-bold-500 ml-4">{dataSource.length}</span>건
            </div>
          </div>
        </Col>
        <Col span={24}>
          <Table size="small" bordered 
            className="usr-board-table"
            columns={columns}
          />
        </Col>
      </Row>
      {/* ============================================================================ */}


      {/* ============================================================================ */}
      {/* 공지사항 - 상세보기 view */}
      {/* ============================================================================ */}
      {/* <div className="usr-board-veiw-wrap">
        <div className="title">2023년 탄소중립형 스마트공장 보급사업 설명회 관련 공지(4/7)</div>
        <div className="writer">
          <div className="label">등록자</div>***
          <span className="line"></span>
          <div className="label">등록일</div>2023-04-06
        </div>
        <div className="view">
          <div class="article_content_실제_공지사항_게시글_테스트">
            <p>
              <span>안녕하세요. 중소벤처기업진흥공단 류성재 사원입니다.</span>
            </p>
            <p>
              <span>&nbsp;</span>
            </p>
            <p>
              <span>2023년 추진되는 탄소중립형 스마트공장 보급사업 설명회 관련 안내드립니다.</span>
            </p>
            <p>
              &nbsp;
            </p>
            <p>
              <span>저희는 고탄소 배출업종 및 뿌리기술 영위 업종을 대상으로 특화 스마트공장을 바탕으로&nbsp;중소, 중견기업의 저탄소 공정전환을 지원하고 있습니다.</span>
            </p>
            <p>
              &nbsp;
            </p>
            <p>
              <span className="bold">참고 공고 URL</span>
            </p>
            <p>
              <span className="bold">스마트공장 사업관리시스템 :&nbsp;</span>
              <span>&nbsp;</span>
              <a href="/#"><span className="bold">https://smart-factory.kr/pblanc/readUser/2023-N-0022</span></a>
            </p>
            <p>
              &nbsp;
            </p>
            <p>
              <span>또한, 공급기업, 도입기업을 대상으로 사업설명회를 2023.04.07.(금) 10:00 개최하려고 하니, 참여의사가 있으신 기업들의 경우에는&nbsp;</span>
              <span>아래 링크를 접속하여 신청하여 주시기 바랍니다.</span>
            </p>
            <p>
              &nbsp;
            </p>
            <p>
              <span>개최 형태 : ZOOM을 활용한 비대면 화상 설명회</span>
            </p>
            <p>
              &nbsp;
            </p>
            <p>
              <span>개최 일시 : 2023.04.07.(금) 10:00</span>&nbsp;
            </p>
            <p>
              &nbsp;
            </p>
            <p>
              <span>참석 주소 :&nbsp;</span>
              <a href="/#"><span>https://zoom.us/j/94172407442?pwd=WFJNalZ3M1BFVVVRTTExOHp4M0tFdz09</span></a>
            </p>
            <p>
              &nbsp;
            </p>
            <p>
              <span>회의 ID: 941 7240 7442</span>&nbsp;
            </p>
            <p>
              &nbsp;
            </p>
            <p>
              <span>암호: 230407</span>
            </p>
            <p>
              &nbsp;
            </p>
            <p>
              <span className="bold">또한, 참여를 원하시는 공급기업은 아래의 설문조사 링크로 설문조사를 진행하여 주시기 바랍니다.</span>
            </p>
            <p><span>&nbsp;</span></p>
            <p className="bold">
              <span>공급기업 대상 설문조사 링크 :&nbsp;</span>
              <span>&nbsp;</span>
              <a href="/#"><span>https://docs.google.com/forms/d/e/1FAIpQLSc2Jzq1Ot_GFyJ0V_0Ob5d-TBA4FWYRXZazx3Cvw4GkCyhgxw/viewform?usp=sf_link</span></a>
            </p>
            <p>
              &nbsp;
            </p>
            <p>
              <span>감사합니다</span>
            </p>
            <p>
              &nbsp;
            </p>
            <p>
              <span>문의처 : 중소벤처기업진흥공단 류성재 사원: 055-751-9588</span>
            </p>
          </div>
        </div>
        <div className="attach" >
          <div className="label">첨부파일</div>
          <div className="files">
            임시구현(첨부파일 공간구현)
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </div>
        </div>
      </div>
      <Row>
        <Col span={24} className="text-r mt-30">
          <Button className="eu-btn-process-error golist">목록보기</Button>
        </Col>
      </Row> */}
      {/* ============================================================================ */}


      {/* ============================================================================ */}
      {/* 정기간행물 */}
      {/* 알림/참여마당 > 정기간행물 */}
      {/* ============================================================================ */}
      <h1 className="mt-80">2. 알림/참여마당 - 정기간행물</h1>
      <Row className="usr-search-form">
        <Col span={24}>
          <Space className="space-full search-button">
            <Select 
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }} 
              style={{ width : "260px" }}
              defaultValue={''} 
              options={[{value: '', label: '제목'},]} 
            />
            <Input placeholder="검색어를 입력해주세요!" />
            <Button className="eu-btn-crud-default plr-44">조회하기</Button>
          </Space>
        </Col>
      </Row>
      <Row className="mt-20">
        <Col span={24} className="mb-10">
          <div className="eu-table-indicator">
            <div className="count">전체
              <span className="text-blue font-bold-500 ml-4">{dataSource.length}</span>건
            </div>
          </div>
        </Col>
        <Col span={24}>
          <Table size="small" bordered 
            className="usr-board-table"
            columns={columns}
          />
        </Col>
      </Row>
      {/* ============================================================================ */}


      {/* ============================================================================ */}
      {/* 자주묻는질문 */}
      {/* 알림/참여마당 > 자주묻는질문(FAQ) */}
      <h1 className="mt-80">3. 알림/참여마당 - 자주묻는질문(FAQ)</h1>
      <Row className="usr-search-form" gutter={[40, 6]}>
        <Col span={8} md={8} xs={24}>
          <Space className="space-full">
            <div className="label mr-6">FAQ 구분</div>
            <Select 
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }} 
              defaultValue={''} 
              options={[{value: '', label: '선택'},]} 
            />
          </Space>
        </Col>
        <Col span={16} md={16} xs={24}>
          <Space className="space-full">
            <Select 
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }} 
              style={{ width : "130px" }}
              defaultValue={''} 
              options={[{value: '', label: '선택'},
                {value: '', label: '제목'},
                {value: '', label: '내용'},
                {value: '', label: '제목/내용'},
              ]} 
            />
            <Input placeholder="검색어를 입력해주세요!" />
            <Button className="eu-btn-crud-default plr-44">조회하기</Button>
          </Space>
        </Col>
      </Row>
      <Row className="mt-20">
        <Col span={24} className="mb-10">
          <div className="eu-table-indicator">
            <div className="count">전체
              <span className="text-blue font-bold-500 ml-4">{dataSource.length}</span>건
            </div>
          </div>
        </Col>
        <Col span={24}>
          <Table size="small" bordered 
            className="usr-board-table"
            columns={columns}
          />
        </Col>
      </Row>
      {/* ============================================================================ */}




    </>
  )
}

export default SubPage9;