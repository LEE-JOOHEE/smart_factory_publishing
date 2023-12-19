import React, { useState } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import AgremInptPopup from 'pages/mg/am/am/ac/agremCnclsDetail/popup/AgremInptPopup';

const AgremCnclsDetail03 = ({ arrBizCt, arrInptHnf }) => {
  //사업비 지급
  const bizCtColums = [
    {
      title: '구분',
      dataIndex: 'a1',
    },
    {
      title: '도입기업',
      dataIndex: 'a2',
      children: [
        {
          title: '기업부담금',
          dataIndex: 'a21',
        },
        {
          title: '소계',
          dataIndex: 'a22',
        },
      ],
    },
    {
      title: '전담기관',
      dataIndex: 'a3',
      children: [
        {
          title: '정부지원금',
          dataIndex: 'a31',
        },
      ],
    },
  ];

  //투입인력 지급
  const inptHnfColums = [
    {
      title: 'S/W기술자(등급/직무)',
      dataIndex: 'a1',
      width: '20%',
    },
    {
      title: '성명',
      dataIndex: 'a2',
      width: '15%',
      align: 'center',
    },
    {
      title: '투입기간',
      dataIndex: 'a3',
      width: '25%',
      align: 'center',
    },
    {
      title: '투입일자\n등록전/등록후',
      dataIndex: 'a4',
      width: '25%',
      align: 'center',
    },
    {
      title: '투입일자등록',
      dataIndex: 'a5',
      width: '15%',
      align: 'center',
      render: (_, record, index) => {
        console.log(record, index);
        return (
          <Button
            className="eu-btn-table-default"
            onClick={inptYmdClick}
          >
            투입일자 확인
          </Button>
        );
      },
    },
  ];

  const [agremInptPopupOpen, setAgremInptPopupOpen] = useState(false);

  const inptYmdClick = () => {
    setAgremInptPopupOpen(true);
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>사업비 지급
            <span className="eu-unit">( 단위 : 원 )</span>
          </TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            className="bizCtTable"
            scroll={{ y: 200 }}
            columns={bizCtColums}
            dataSource={arrBizCt}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title mb-12 margin-top">
        <Col span={24}>
          <TitleComp>투입인력</TitleComp>
        </Col>
        <Col span={24}>
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red">
              * 빨간색 인원은 참여인력에 대해 미승인된 인원입니다. 
              참여인력을 등록 하시려면 변경 또는 참여인력승인 후 진행하시면 됩니다. 
              <br/>공백 인원은 임시인력,탈퇴인력 또는 원가계산에서 변경된 인원입니다. 
              <br/>일정등록은 2021년 10월 29일 지침 변경으로 인하여 등록하지 않아도 됩니다.
            </span>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 200 }}
            columns={inptHnfColums}
            dataSource={arrInptHnf}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>
      <AgremInptPopup
        agremInptPopupOpen={agremInptPopupOpen}
        setAgremInptPopupOpen={setAgremInptPopupOpen}
      />
    </>
  );
};

export default AgremCnclsDetail03;
