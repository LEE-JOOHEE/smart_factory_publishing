import React, { useState, useEffect } from 'react';
import { Col, Row, Table, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const WctReqstDetail04 = ({ arrBizCtAplyDcmntAtch }) => {
  const columns = [
    { title: '항목', dataIndex: 'a1' },
    { title: '샘플양식', dataIndex: 'a2' },
    { title: '허용파일', dataIndex: 'a3' },
    { title: '필수여부', dataIndex: 'a4' },
    { title: '첨부파일', dataIndex: 'a5' },
  ];
  const uploadFileClick = () => {
    Modal.info({ title: '파일업로드' });
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={18}>
          <TitleComp>사업비 신청양식 첨부</TitleComp>
          신청서류 첨부파일은 항목명과 동일한 이름으로 업로드 하시기 바랍니다.{' '}
          <br />
          반드시 신청서 양식을 확인하시고 다운받으신 후 작성하시고 직인날인 된
          스캔본과 필수첨부파일을 함께 첨부파일로 업로드 하시기 바랍니다.
          <br />
          <div style={{ color: 'red' }}>
            사업비 신청상태가 반려일 경우 신청서를 수정하여 재첨부 하신 후 다시
            신청하시기 바랍니다.
          </div>
        </Col>
        <Col span={6} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-warning"
            onClick={uploadFileClick}
          >
            파일업로드
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrBizCtAplyDcmntAtchTable'}
            columns={columns}
            dataSource={arrBizCtAplyDcmntAtch}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 800,
            }}
          />
          <br />
          * 항목별 1개파일 20MB이내의 파일만 첨부가능합니다.
          <br />* 사진등으로 인해 용량이 초과되시는 경우는 한글/워드에서 PDF로
          저장하는 기능을 활용하시면 파일 크기를 줄이실 수 있습니다.
        </Col>
      </Row>
    </>
  );
};

export default WctReqstDetail04;
