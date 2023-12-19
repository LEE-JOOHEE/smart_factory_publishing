import React, { useState } from 'react';
import { Col, Row, Table, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import TaskDetailPopup from 'pages/mg/rm/ed/ed/excDiaryCnstnt/popup/TaskDetailPopup';

const AnytmChckDgnss02 = ({ arrFlfmtIdnty }) => {
  const [open, setOpen] = useState(false);
  const closeClick = () => {
    setOpen(false);
  };

  const columns = [
    { title: '사업년도', dataIndex: 'a' },
    { title: '과제번호', dataIndex: 'b' },
    {
      title: '과제명',
      dataIndex: 'c',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link"
            size="small"
            type="link"
            onClick={() => {
              setOpen(true);
            }}
          >
            {record?.c}
          </Button>
        );
      },
    },
    { title: '지역(수행기관)', dataIndex: 'd' },
    { title: '도입기업', dataIndex: 'e' },
    { title: '신청자', dataIndex: 'f' },
    { title: '공급기업', dataIndex: 'g' },
    { title: '등록/요청/확인건수', dataIndex: 'h' },
    { title: '컨설턴트', dataIndex: 'i' },
  ];
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={2}>
          <TitleComp>수행일지 목록</TitleComp>
        </Col>
        <Col span={22}>{`총 ${arrFlfmtIdnty.length}건`}</Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrFlfmtIdnty'}
            columns={columns}
            dataSource={arrFlfmtIdnty}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 750 }}
          />
        </Col>
      </Row>
      <TaskDetailPopup open={open} closeClick={closeClick} type={'CHCK'} />
    </>
  );
};

export default AnytmChckDgnss02;
