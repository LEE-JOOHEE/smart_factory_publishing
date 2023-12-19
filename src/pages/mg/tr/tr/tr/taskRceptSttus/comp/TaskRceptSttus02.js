import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import { Typography } from 'antd';
import 'css/Common.css';
import { DownloadOutlined } from '@ant-design/icons';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';
import TitleComp from 'components/layout/TitleComp';
import RceptPdPopup from 'pages/mg/tr/tr/tr/taskRceptSttus/popup/RceptPdPopup';
import { ojtChange } from 'components/common/Common';
/**
 * 과제 접수 현황
 *
 * 과제 접수 현황 검색 리스트 컴포넌트
 *
 */
const TaskRceptSttus02 = ({ arrTaskRcept }) => {
  // 테이블 헤더
  const arrTaskRceptColumns = [
    {
      title: '사업년도',
      dataIndex: 'a1',
      width: '7%',
      align: 'center',
    },
    {
      title: '지역(수행기관)',
      dataIndex: 'a2',
      width: '10%',
      align: 'center',
    },
    {
      title: '수행사업',
      dataIndex: 'a3',
      width: '25%',
      ellipsis: true,
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link"
            size="small"
            type="link"
            onClick={() => {
              // 화면이동 구현 필요
              //('수행사업상세화면 이동 구현');
              console.log(record, index);
              Modal.info({ title: '수행사업상세화면 이동' });
            }}
          >
            {record?.a3}
          </Button>
        );
      },
    },
    {
      title: '컨설팅지원사업',
      dataIndex: 'a4',
      width: '12%',
      align: 'center',
    },
    {
      title: '도입기업',
      dataIndex: 'a5',
      width: '12%',
    },
    {
      title: '공급(컨설팅)기업',
      dataIndex: 'a6',
      width: '12%',
    },
    {
      title: '과제신청자',
      dataIndex: 'a7',
      width: '10%',
      align: 'center',
    },
    {
      title: '사전사후구분',
      dataIndex: 'a8',
      width: '12%',
      align: 'center',
    },
  ];

  // 지원사업 데이터
  const [ojtTaskReqst, setOjtTaskReqst] = useState({
    key: [], //선택 키 index 목록
    a: '', //접수기간 연장 시작 날짜
    b: '', //접수기간 연장 끝 날짜
    c: '', //엑셀 다운로드 데이터
    d: '', //설문결과 데이터
  });
  // 접수기간 연장 팝업
  const [rceptPdOpen, setRceptPdOpen] = useState(false);
  // 엑셀 다운로드
  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  const rowSelection = {
    onChange: (_, selectedRows) => {
      ojtChange(selectedRows, 'key', setOjtTaskReqst);
    },
  };

  //접수반려
  const rcptRtrcnClick = () => {
    Modal.info({ title: '접수반려' });
  };
  //접수취소
  const rcptRjctClick = () => {
    Modal.info({ title: '접수취소' });
  };
  //접수취소복구
  const rcptRtrcnRecoveryClick = () => {
    Modal.info({ title: '접수취소복구' });
  };
  //접수마감
  const rcptDdlnClick = () => {
    Modal.info({ title: '접수마감' });
  };
  // 접수기간연장
  const rcptPdExtensionClick = () => {
    setRceptPdOpen(true);
  };
  // 엑셀다운로드
  const excelDwnldClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };
  //엑셀(상세)다운로드
  const excelDtlDwnldClick = () => {
    Modal.info({ title: '엑셀(상세)다운로드' });
  };
  //설문결과
  const srvyRsltClick = () => {
    Modal.info({ title: '설문결과' });
  };

  return (
    <>
      <Row className="eu-row-comp-title mb-20">
        <Col span={14}>
          <Button
            className="eu-btn-crud-warning"
            size="small"
            onClick={rcptRtrcnClick}
          >
            접수반려
          </Button>
          <Button
            className="eu-btn-crud-default"
            size="small"
            onClick={rcptRjctClick}
          >
            접수취소
          </Button>
          <Button
            className="eu-btn-crud-fine"
            size="small"
            onClick={rcptRtrcnRecoveryClick}
          >
            접수취소복구
          </Button>
          <Button
            className="eu-btn-crud-error"
            size="small"
            onClick={rcptDdlnClick}
          >
            접수마감
          </Button>
          <Button
            className="eu-btn-crud-warning"
            size="small"
            onClick={rcptPdExtensionClick}
          >
            접수기간연장
          </Button>
        </Col>
        <Col span={10} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-excel-download"
            // icon={<DownloadOutlined />}
            onClick={excelDwnldClick}
          >
            엑셀다운로드
          </Button>
          <Button
            className="eu-btn-excel-download"
            onClick={excelDtlDwnldClick}
            // icon={<DownloadOutlined />}
          >
            엑셀(상세)다운로드
          </Button>
          <Button
            className="eu-btn-crud-warning"
            onClick={srvyRsltClick}
          >
            설문결과
          </Button>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mb-8">
        <Col span={12}>
          {/* <TitleComp>
            총 000건 ※ 컨설팅지원사업(위에서 검색된 지원사업 명칭)
          </TitleComp> */}

          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">8453</span>건
            </div>
            <div className="line"></div>
            <div className="font-bold-500 ml-16">컨설팅지원사업</div>
            <div className="text-blue ml-4">
              (2019년 스마트역량강화과제 자동신청)
            </div>
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 500 }}
            key={'arrTaskRceptTable'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrTaskRceptColumns}
            dataSource={arrTaskRcept}
            size="small"
            bordered
          />
        </Col>
      </Row>
      <RceptPdPopup
        rceptPdOpen={rceptPdOpen}
        setRceptPdOpen={setRceptPdOpen}
        setOjtTaskReqst={setOjtTaskReqst}
      />
      <CmAgremExcelDwnld
        cmAgremExcelDwnldOpen={cmAgremExcelDwnldOpen}
        setCmAgremExcelDwnldOpen={setCmAgremExcelDwnldOpen}
      />
    </>
  );
};

export default TaskRceptSttus02;
