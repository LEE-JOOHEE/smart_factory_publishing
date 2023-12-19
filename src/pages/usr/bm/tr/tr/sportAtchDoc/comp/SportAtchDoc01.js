import React, { useState } from 'react';
import { Col, Row, Button, Modal, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const SportAtchDoc01 = ({ arrAtchFile }) => {
  const columns = [
    { title: '항목', dataIndex: 'a' },
    {
      title: '양식',
      render: (_, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-fine"
            onClick={() => downloadClick(record.key)}
          >
            다운로드
          </Button>
        );
      },
    },
    { title: '허용파일', dataIndex: 'b' },
    { title: '필수여부', dataIndex: 'c' },
    { title: '첨부파일', dataIndex: 'd' },
  ];
  const downloadClick = (key) => {
    Modal.info({ title: `다운로드: ${JSON.stringify(key)}` });
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>첨부문서</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          {/* 우측 버튼 */}
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrAtchFile'}
            columns={columns}
            dataSource={arrAtchFile}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 300,
            }}
          />
          <div style={{ color: 'red' }}>
            ※ 파일 첨부시 드래그 앤 드롭(Drag-and-Drop) 방식은 지원하지
            않습니다. 반드시 파일첨부버튼을 통해서 첨부문서를 업로드 진행
            부탁드립니다.
            <br />
            {
              '※ PDF문서 업로드시 차단되는 경우에는 차단되는 문서를 "JPG로 변환 -> PDF로 재변환"하신 후 업로드 해주세요.'
            }
            <br />
            ※ 고용보험증명서 : 19.12.31~19.12.31(해당연도 마지막 1일, 1부),
            20.12.31~20.12.31(해당연도 마지막 1일, 1부)를 제출해야 19년도,
            20년도 증감인원 파악이 가능합니다.
            <br />※ 정보활용동의서 : 공고문 첨부파일 양식을 활용하여 제출
            바랍니다.
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SportAtchDoc01;
