import React, { useState } from 'react';
import { Col, Row, Tabs, Table, Button, Descriptions, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const PropseRequstDetail02 = () => {
  const columns = [
    {
      title: '항목',
      dataIndex: 'a1',
    },
    {
      title: '허용파일',
      dataIndex: 'a2',
    },
    {
      title: '첨부문서',
      dataIndex: 'a3',
      render: (_, record, index) => {
        return (
          <>
            {record?.a3}
            <Button
              className="eu-btn-table-default"
              onClick={() => {
                // 화면이동 구현 필요
                //('제안요청서조회상세 페이지 이동 구현');
                console.log(record, index);
                Modal.info({ title: '파일 첨부' });
              }}
            >
              첨부
            </Button>
            <Button
              className="eu-btn-table-error"
              onClick={() => {
                // 화면이동 구현 필요
                //('제안요청서조회상세 페이지 이동 구현');
                console.log(record, index);
                Modal.info({ title: '첨부파일 삭제' });
              }}
            >
              삭제
            </Button>
          </>
        );
      },
    },
  ];

  const [docData, setDocData] = useState([
    {
      a1: '파일 항목',
      a2: '허용 파일 명',
      a3: '문서 이름',
    },
  ]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>제안요청서 첨부</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 500 }}
            key={'PropseRequstDetail02Table'}
            columns={columns}
            dataSource={docData}
            size="small"
            bordered
          />
        </Col>
      </Row>
    </>
  );
};
export default PropseRequstDetail02;
