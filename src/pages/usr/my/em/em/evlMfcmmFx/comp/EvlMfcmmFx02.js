import React, { useState } from 'react';
import { Col, Row, Table, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';

const EvlMfcmmFx02 = ({
  arrEvlDtLst,
  arrCheckedEvlDtLst,
  setArrCheckedEvlDtLst,
}) => {
  const columns = [
    { title: '평가희망지역', dataIndex: 'a' },
    { title: '평가희망일자', dataIndex: 'b' },
    { title: '평가희망시각', dataIndex: 'c' },
    { title: '비고', dataIndex: 'd' },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedEvlDtLst(selectedRows);
    },
  };

  const insertRowClick = () => {
    Modal.info({ title: 'insertRowClick' });
  };
  const deleteRowClick = () => {
    Modal.info({ title: 'deleteRowClick' });
  };
  const insertClick = () => {
    Modal.info({ title: `key: ${JSON.stringify(arrCheckedEvlDtLst)}` });
  };

  const deleteClick = () => {
    Modal.info({ title: `key: ${JSON.stringify(arrCheckedEvlDtLst)}` });
  };

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={2}>
          <TitleComp>평가일정목록</TitleComp>
        </Col>
        <Col span={2}>{`총 ${arrEvlDtLst.length}건`}</Col>
        <Col span={8} style={{ color: 'red' }}>
          * (주의사항) 개별 평가가능 일정 및 선호지역 등록은 중복불가임. <br />*
          일정등록은 오늘 날짜부터 최대 3개월입니다.
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-row-insert"
            icon={<PlusSquareOutlined />}
            onClick={insertRowClick}
          >
            행추가
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-row-delete"
            icon={<MinusSquareOutlined />}
            onClick={deleteRowClick}
          >
            행삭제
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-crud-warning"
            onClick={insertClick}
          >
            저장
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-crud-error"
            onClick={deleteClick}
          >
            삭제
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrEvlDtLst'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={columns}
            dataSource={arrEvlDtLst}
            size="small"
            bordered
            pagination={false}
            scroll={{
              y: 900,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default EvlMfcmmFx02;
