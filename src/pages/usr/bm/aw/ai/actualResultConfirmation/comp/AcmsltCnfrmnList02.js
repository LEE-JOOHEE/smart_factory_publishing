import React, { useState } from 'react';
import { Button, Col, Modal, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import AcmsltCnfrmnPopup from 'pages/usr/bm/aw/ai/actualResultConfirmation/popup/AcmsltCnfrmnPopup';

const AcmsltCnfrmnList02 = ({ arrAsmtLst }) => {
  const columns = [
    { title: '사업연도', dataIndex: 'a1' },
    { title: '과제번호', dataIndex: 'a2' },
    { title: '과제명', dataIndex: 'a3' },
    { title: '도입기업', dataIndex: 'a4' },
    { title: '확인기관', dataIndex: 'a5' },
    {
      title: '수준확인서',
      dataIndex: 'a6',
      render: (_, record, index) => {
        return (
          <>
            <Button
              className="eu-usr-btn-table-fine"
              size="small"
              onClick={() => {
                console.log(record, index);
                setAcmsltCnfrmnPopupOpen(true);
              }}
            >
              실적확인서 재발급
            </Button>
          </>
        );
      },
    },
    { title: '발급상태', dataIndex: 'a7' },
    {
      title: '문서조회',
      dataIndex: 'a8',
      render: (_, record, index) => {
        return (
          <>
            <Button
              className="eu-usr-btn-table-fine"
              size="small"
              onClick={() => {
                console.log(record, index);
                Modal.info({ title: '문서조회 출력 클릭' });
              }}
            >
              출력
            </Button>
          </>
        );
      },
    },
  ];

  const [acmsltCnfrmnPopupOpen, setAcmsltCnfrmnPopupOpen] = useState(false);

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>과제 목록</TitleComp>
          {`총 ${arrAsmtLst.length}건`}
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'CnslInsttAppn02'}
            columns={columns}
            dataSource={arrAsmtLst}
            size="small"
            bordered
            scroll={{ y: 700 }}
          />
        </Col>
      </Row>

      <AcmsltCnfrmnPopup
        acmsltCnfrmnPopupOpen={acmsltCnfrmnPopupOpen}
        setAcmsltCnfrmnPopupOpen={setAcmsltCnfrmnPopupOpen}
      />
    </>
  );
};

export default AcmsltCnfrmnList02;
