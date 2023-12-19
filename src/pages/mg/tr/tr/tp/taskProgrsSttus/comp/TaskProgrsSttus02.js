import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import { Typography } from 'antd';
import 'css/Common.css';
import BsnsClmpPopup from 'pages/mg/tr/tr/tp/taskProgrsSttus/popup/BsnsClmpPopup';
/**
 * 과제 접수 현황
 *
 * 과제 접수 현황 검색 리스트 컴포넌트
 *
 */
const { Title } = Typography;
const TaskProgrsSttus02 = ({ arrTaskProgrs = [] }) => {
  // 테이블 헤더
  const taskProgrsColumns = [
    {
      title: '사업년도',
      dataIndex: 'a1',
      width: '5%',
      align: 'center',
    },
    {
      title: '세부공고명',
      dataIndex: 'a2',
      width: '7%',
    },
    {
      title: '과제신청',
      dataIndex: 'a3',
      width: '5%',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link text-c"
            type="link"
            onClick={() => {
              Modal.info({
                title: '과제 접수 현황 화면 이동',
              });
              console.log(record, index);
            }}
          >
            {record?.a3}
          </Button>
        );
      },
    },
    {
      title: '자격검토',
      dataIndex: 'a5',
      width: '5%',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link text-c"
            type="link"
            onClick={() => {
              Modal.info({
                title: '요건검토 화면 이동',
              });
              console.log(record, index);
            }}
          >
            {record?.a5}
          </Button>
        );
      },
    },
    {
      title: '현장평가',
      dataIndex: 'a6',
      width: '5%',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link text-c"
            type="link"
            onClick={() => {
              Modal.info({
                title: '현장평가결과등록 화면 이동',
              });
              console.log(record, index);
            }}
          >
            {record?.a6}
          </Button>
        );
      },
    },
    {
      title: '사업수행계획서',
      dataIndex: 'a7',
      width: '7%',
    },
    {
      title: '심사평가',
      dataIndex: 'a8',
      width: '7%',
    },
    {
      title: '원가계산',
      dataIndex: 'a9',
      width: '6%',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link text-c"
            type="link"
            onClick={() => {
              Modal.info({
                title: '원가계산검토 화면 이동',
              });
              console.log(record, index);
            }}
          >
            {record?.a9}
          </Button>
        );
      },
    },
    {
      title: '협약',
      dataIndex: 'a10',
      width: '6%',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link text-c"
            type="link"
            onClick={() => {
              Modal.info({
                title: '협약체결 화면 이동 ',
              });
              console.log(record, index);
            }}
          >
            {record?.a10}
          </Button>
        );
      },
    },
    {
      title: '보고서',
      dataIndex: 'a11',
      width: '7%',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link text-c"
            type="link"
            onClick={() => {
              Modal.info({
                title: '보고서접수(최종보고서검토) 화면 이동 ',
              });
              console.log(record, index);
            }}
          >
            {record?.a11}
          </Button>
        );
      },
    },
    {
      title: '감리',
      dataIndex: 'a12',
      width: '5%',
    },
    {
      title: '사업변경',
      dataIndex: 'a13',
      width: '5%',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link text-c"
            type="link"
            onClick={() => {
              Modal.info({
                title: '지정된 이벤트 구현',
              });
              console.log(record, index);
            }}
          >
            {record?.a13}
          </Button>
        );
      },
    },
    {
      title: '사업포기',
      dataIndex: 'a14',
      width: '5%',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link text-c"
            type="link"
            onClick={() => {
              bsnsClmpClick(record, index);
            }}
          >
            {record?.a14}
          </Button>
        );
      },
    },
    {
      title: '지역(수행기관)',
      dataIndex: 'a15',
    },
    {
      title: '도입기업',
      dataIndex: 'a16',
    },
    {
      title: '공급기업',
      dataIndex: 'a17',
    },
    {
      title: '감리기간',
      dataIndex: 'a18',
    },
  ];

  // 사업포기처리
  const [bsnsClmpOpen, setBsnsClmpOpen] = useState(false);
  const [ojtBsnsClmp, setOjtBsnsClmp] = useState({});

  const bsnsClmpClick = (record, index) => {
    setOjtBsnsClmp(record);
    setBsnsClmpOpen(true);
  };

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={12}>
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrTaskProgrs?.length.toString().padStart(3, '0')}
              </span>건
            </div>
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 500, x: 1900 }}
            key={'arrTaskProgrsTable'}
            columns={taskProgrsColumns}
            dataSource={arrTaskProgrs}
            size="small"
            bordered
          />
        </Col>
      </Row>
      <BsnsClmpPopup
        bsnsClmpOpen={bsnsClmpOpen}
        setBsnsClmpOpen={setBsnsClmpOpen}
        ojtBsnsClmp={ojtBsnsClmp}
      />
    </>
  );
};

export default TaskProgrsSttus02;
