import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Modal, Table } from 'antd/lib';
import WctReqst from 'pages/mg/am/wr/wr/wctReqstList/popup/WctReqst';

const WctReqstList02 = ({ arrTask }) => {
  // 테이블 헤더
  const arrTaskColumns = [
    {
      title: '순번',
      dataIndex: 'a1',
    },
    {
      title: '사업연도',
      dataIndex: 'a2',
    },
    {
      title: '지역(수행기관)',
      dataIndex: 'a3',
    },
    {
      title: '사업명',
      dataIndex: 'a31',
    },
    {
      title: '과제번호',
      dataIndex: 'a4',
    },
    {
      title: '과제명',
      dataIndex: 'a5',
    },
    {
      title: '도입기업',
      dataIndex: 'a6',
    },
    {
      title: '공급기업',
      dataIndex: 'a7',
    },
    {
      title: '과제진행상태',
      dataIndex: 'a8',
    },
    {
      title: '휴폐업조회',
      dataIndex: 'a9',
    },
    {
      title: '사업비 진행상태',
      dataIndex: 'b',
      children: [
        {
          title: '선금',
          dataIndex: 'a10',

          render: (_, record, index) => {
            return (
              <>
                <Button
                  className="eu-btn-table-fine"
                  size="small"
                  onClick={() => {
                    // 화면이동 구현 필요
                    //('제안요청서조회상세 페이지 이동 구현');
                    console.log(record, index);
                    taskPrssClick();
                  }}
                >
                  {record?.a10}
                </Button>
              </>
            );
          },
        },
        {
          title: '중도금',
          dataIndex: 'a11',

          render: (_, record, index) => {
            return (
              <>
                <Button
                  className="eu-btn-table-fine"
                  size="small"
                  onClick={() => {
                    // 화면이동 구현 필요
                    //('제안요청서조회상세 페이지 이동 구현');
                    console.log(record, index);
                    taskPrssClick();
                  }}
                >
                  {record?.a11}
                </Button>
              </>
            );
          },
        },
        {
          title: '잔금',
          dataIndex: 'a12',

          render: (_, record, index) => {
            return (
              <>
                <Button
                  className="eu-btn-table-fine"
                  size="small"
                  onClick={() => {
                    // 화면이동 구현 필요
                    //('제안요청서조회상세 페이지 이동 구현');
                    console.log(record, index);
                    taskPrssClick();
                  }}
                >
                  {record?.a12}
                </Button>
              </>
            );
          },
        },
      ],
    },
    {
      title: '신청일자',
      dataIndex: 'a13',
    },
  ];

  const [wctReqstOpen, setWctReqstOpen] = useState(false);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
    },
  };

  const taskPrssClick = () => {
    Modal.info({ title: '사업비 진행상태 클릭 / 사업비신청관리상세 화면' });
  };
  const aprvClick = () => {
    Modal.info({ title: '승인 클릭' });
  };
  const rejectClick = () => {
    setWctReqstOpen(true);
  };
  const givePrcsClick = () => {
    Modal.info({ title: '지급처리 클릭' });
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>
            총 {arrTask?.length.toString().padStart(3, '0')} 건
          </TitleComp>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}>
          <Button size="small" className="eu-btn-crud-fine" onClick={aprvClick}>
            승인
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={rejectClick}
          >
            반려
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={givePrcsClick}
          >
            지급처리
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 600 }}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            key={'WctReqstList02Table'}
            columns={arrTaskColumns}
            dataSource={arrTask}
            size="small"
            bordered
          />
        </Col>
      </Row>
      <WctReqst setWctReqstOpen={setWctReqstOpen} wctReqstOpen={wctReqstOpen} />
    </>
  );
};

export default WctReqstList02;
