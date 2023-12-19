import React, { useState } from 'react';
import { Col, Row, Modal, Button, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const SuplyInfoPopupPage = ({ open, closeClick, arrMtchgSttsSrchCnd }) => {
  const columns = [
    { title: '순위', dataIndex: 'a' },
    { title: '공급기업명', dataIndex: 'b' },
    { title: '구축건수', dataIndex: 'c' },
    { title: '솔루션 매칭율', dataIndex: 'd' },
    { title: '레벨 매칭율', dataIndex: 'e' },
    { title: '업종 매칭율', dataIndex: 'f' },
    { title: '사업분류 매칭현황', dataIndex: 'g' },
    { title: '구축결과 매칭율', dataIndex: 'h' },
    { title: '종사자규모 매칭율', dataIndex: 'i' },
    { title: '매출규모 매칭율', dataIndex: 'j' },
  ];
  return (
    <>
      <Modal
        key="IxAswperInqirePage"
        title="지표답안 관리"
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        open={open}
        onCancel={closeClick}
        width={1200}
        footer={
          <>
            <Button
              type="primary"
              size="middle"
              className="eu-btn-popup-process-default"
              onClick={() => closeClick()}
            >
              확인
            </Button>
            <Button
              size="middle"
              className="eu-btn-popup-process-error"
              onClick={() => closeClick()}
            >
              닫기
            </Button>
          </>
        }
      >
        <Row className="eu-row-comp-title">
          <Col span={12}>
            <TitleComp>매칭현황 검색조건</TitleComp>
            <div>{`총 ${arrMtchgSttsSrchCnd.length}건`}</div>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}></Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'asprCdInfo'}
              columns={columns}
              dataSource={arrMtchgSttsSrchCnd}
              pagination={false}
              size={'small'}
              bordered={true}
              sticky={true}
              scroll={{
                y: 300,
              }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default SuplyInfoPopupPage;
