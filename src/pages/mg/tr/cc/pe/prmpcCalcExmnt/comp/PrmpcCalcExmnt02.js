import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Modal, Table } from 'antd/lib';

import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';

import { CheckOutlined, DownloadOutlined } from '@ant-design/icons';
import TaskInfoPopup from 'pages/mg/tr/cc/pe/presentnSttus/popup/TaskInfoPopup';

const PrmpcCalcExmnt02 = ({ arrTask, setOjtKey, setPageType }) => {
  // 테이블 헤더
  const arrTaskColumns = [
    {
      title: '사업연도',
      dataIndex: 'a1',
    },
    {
      title: '지역(수행기관)',
      dataIndex: 'a2',
    },
    {
      title: '세부공고명',
      dataIndex: 'a3',
    },
    {
      title: '과제명',
      dataIndex: 'a4',
      render: (_, record, index) => {
        return (
          <>
            <Button
              className="eu-btn-link"
              size="small"
              type="link"
              onClick={() => {
                // 화면이동 구현 필요
                //('제안요청서조회상세 페이지 이동 구현');
                console.log(record, index);
                setTaskInfoPopupOpen(true);
              }}
            >
              {record?.a4}
            </Button>
          </>
        );
      },
    },
    {
      title: '도입기업',
      dataIndex: 'a5',
    },
    {
      title: '공급기업',
      dataIndex: 'a6',
    },
    {
      title: '원가재계산',
      dataIndex: 'a7',
    },
    {
      title: '제출상태',
      dataIndex: 'a8',
      render: (_, record, index) => {
        return (
          <>
            <Button
              className="eu-btn-link"
              size="small"
              type="link"
              onClick={() => {
                setOjtKey(record.key);
                setPageType('DETAIL');
              }}
            >
              {record?.a8}
            </Button>
          </>
        );
      },
    },
    {
      title: '재계산여부',
      dataIndex: 'a9',
    },
  ];

  // 원가계산검토 과제상세
  const [taskInfoPopupOpen, setTaskInfoPopupOpen] = useState(false);

  // 엑셀 다운로드
  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);
  // 엑셀다운로드
  const excelDwnldClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
    },
  };

  const approveClick = () => {
    Modal.info({ title: '승인 클릭' });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>
            총 {arrTask?.length.toString().padStart(3, '0')} 건<br />※
            '과제명'을 누르면 과제신청 당시의 사업비 정보를 화인 할 수 있고
            '제출상태' 버튼을 누르면 원가계산에서 수정 된 사업비 정보를 확인 할
            수 있습니다.
          </TitleComp>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}>
          <br />
          <Button
            size="small"
            className="eu-btn-crud-fine"
            icon={<CheckOutlined />}
            onClick={approveClick}
          >
            승인
          </Button>
          <Button
            size="small"
            className="eu-btn-excel-download"
            icon={<DownloadOutlined />}
            onClick={excelDwnldClick}
          >
            엑셀다운로드
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 500 }}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            key={'PrmpcCalcExmnt02Table'}
            columns={arrTaskColumns}
            dataSource={arrTask}
            size="small"
            bordered
          />
        </Col>
      </Row>
      <CmAgremExcelDwnld
        cmAgremExcelDwnldOpen={cmAgremExcelDwnldOpen}
        setCmAgremExcelDwnldOpen={setCmAgremExcelDwnldOpen}
      />
      <TaskInfoPopup
        setTaskInfoPopupOpen={setTaskInfoPopupOpen}
        taskInfoPopupOpen={taskInfoPopupOpen}
        taskInfoPopupTitle={'원가계산검토'}
      />
    </>
  );
};

export default PrmpcCalcExmnt02;
