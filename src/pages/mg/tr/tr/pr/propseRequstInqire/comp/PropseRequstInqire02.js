import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Modal, Table } from 'antd/lib';

const PropseRequstInqire02 = ({ arrTask }) => {
  // 테이블 헤더
  const arrTaskColumns = [
    {
      title: '사업년도',
      dataIndex: 'a1',
      width: '8%',
      align: 'center',
    },
    {
      title: '사업분류',
      dataIndex: 'a2',
      width: '15%',
    },
    {
      title: '세부공고명',
      dataIndex: 'a3',
      width: '17%',
    },
    {
      title: '과제번호',
      dataIndex: 'a4',
      width: '15%',
    },
    {
      title: '과제명',
      dataIndex: 'a5',
      width: '15%',
    },
    {
      title: '도입기업',
      dataIndex: 'a6',
      width: '10%',
    },
    {
      title: '첨부',
      dataIndex: 'a7',
      width: '10%',
    },
    {
      title: '제출상태',
      dataIndex: 'a8',
      width: '10%',
      align: 'center',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-table-default"
            onClick={() => {
              // 화면이동 구현 필요
              //('제안요청서조회상세 페이지 이동 구현');
              console.log(record, index);
              Modal.info({ title: '제안요청서 상세조회 페이지 이동' });
            }}
          >
            {record?.a8}
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={12}>
          {/* <TitleComp>
            총 {arrTask?.length.toString().padStart(3, '0')} 건
          </TitleComp> */}

          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrTask?.length.toString().padStart(3, '0')}
              </span>건
            </div>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 500, x: 1200 }}
            key={'PropseRequstInqire02Table'}
            columns={arrTaskColumns}
            dataSource={arrTask}
            size="small"
            bordered
          />
        </Col>
      </Row>
    </>
  );
};

export default PropseRequstInqire02;
