import React, { useState } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';
import { DownloadOutlined, CheckOutlined } from '@ant-design/icons';
import { ojtChange } from 'components/common/Common';

const RqisitExmnt02 = ({ arrRqisitExmnt }) => {
  // 테이블 헤더
  const arrTaskRceptColumns = [
    {
      title: '사업년도',
      dataIndex: 'a1',
      width: '5%',
      align: 'center',
    },
    {
      title: '지역(수행기관)',
      dataIndex: 'a2',
      width: '5%',
      align: 'center',
    },
    {
      title: '사업분류',
      dataIndex: 'a3',
      width: '12%',
    },
    {
      title: '세부공고명',
      dataIndex: 'a4',
      width: '11%',
    },
    {
      title: '과제번호',
      dataIndex: 'a5',
      width: '11%',
      align: 'center',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link"
            size="small"
            type="link"
            onClick={rqisitExmntClick}
          >
            {record?.a5}
          </Button>
        );
      },
    },
    {
      title: '코디네이터 사업여부',
      dataIndex: 'a6',
      width: '11%',
    },
    {
      title: '코디네이터 지정여부',
      dataIndex: 'a7',
      width: '5%',
      align: 'center',
    },
    {
      title: '현장평가 희망일자',
      dataIndex: 'a8',
      width: '5%',
      align: 'center',
    },
    {
      title: '도입기업',
      dataIndex: 'a9',
      width: '5%',
    },
    {
      title: '공급(컨설팅)기업',
      dataIndex: 'a10',
      width: '5%',
    },
    {
      title: '과제신청자',
      dataIndex: 'a11',
      width: '5%',
    },
    {
      title: '검토결과',
      dataIndex: 'a12',
      width: '5%',
    },
    {
      title: '과제상태',
      dataIndex: 'a13',
      width: '5%',
    },
    {
      title: '부적합 사유',
      dataIndex: 'a14',
      width: '5%',
    },
    {
      title: '사전사후구분',
      dataIndex: 'a15',
      width: '5%',
    },
  ];
  // 지원사업 데이터
  const [ojtRqisitExmnt, setOjtRqisitExmnt] = useState({});
  // 엑셀 다운로드
  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  const rowSelection = {
    onChange: (_, selectedRows) => {
      ojtChange(selectedRows, 'key', setOjtRqisitExmnt);
    },
  };

  // 엑셀다운로드
  const excelDwnldClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };
  //엑셀(상세)다운로드
  const sendSmsClick = () => {
    Modal.info({ title: 'SMS 보내기' });
  };
  //검토 적합
  const rvwPrgrsClick = () => {
    Modal.info({ title: '검토 적합' });
  };
  //검토 부적합
  const rvwStbltClick = () => {
    Modal.info({ title: '검토 부적합', okText : "확인" });
  };
  //검토 중
  const rvwImproprietyClick = () => {
    Modal.info({ title: '검토 중' });
  };

  //검토 중
  const rqisitExmntClick = () => {
    Modal.info({ title: '요건검토 수행사업상세 페이지 이동' });
  };
  return (
    <>
      <Row className="eu-row-comp-title mb-10">
        <Col span={12}>
          <Button
            className="eu-btn-crud-fine"
            onClick={rvwPrgrsClick}
          >
            검토 적합
          </Button>
          <Button
            className="eu-btn-crud-error"
            onClick={rvwStbltClick}
          >
            검토 부적합
          </Button>
          <Button
            className="eu-btn-crud-warning"
            onClick={rvwImproprietyClick}
          >
            검토중
          </Button>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-excel-download"
            onClick={excelDwnldClick}
          >
            엑셀다운로드
          </Button>
          <Button
            className="eu-btn-crud-warning"
            onClick={sendSmsClick}
          >
            SMS 보내기
          </Button>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mb-8">
        <Col span={6} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrRqisitExmnt?.length.toString().padStart(3, '0')}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={18}>
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red ml-auto pt-6">
              {/* * 참여과제이력 조회시 2019년 이전사업에 대해서는 타 시스템에서 관리되었던 자료로써 개별 항목들 값이 없는 경우도 있습니다. */}
              ※ "현장평가 희망일자"는 2021년 9월 10일부로 받지 않습니다.<br />
              ※ 업종별특화사업 2019년 사업( 대표기업과제 대표기업과제)
            </span>
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrTaskRceptTable'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrTaskRceptColumns}
            dataSource={arrRqisitExmnt}
            size="small"
            bordered
            scroll={{ y: 600, x: 1900 }}
          />
        </Col>
      </Row>

      <CmAgremExcelDwnld
        cmAgremExcelDwnldOpen={cmAgremExcelDwnldOpen}
        setCmAgremExcelDwnldOpen={setCmAgremExcelDwnldOpen}
      />
    </>
  );
};

export default RqisitExmnt02;
