import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import EvlProgrsPopup from 'pages/usr/my/em/eo/evlCharmnEvl/popup/EvlProgrsPopup';

const EvlCharmnEvl02 = ({ arrAsmtInfo }) => {
  const columns = [
    { title: '도입기업', dataIndex: 'a' },
    { title: '공급기업명', dataIndex: 'b' },
    { title: '과제명', dataIndex: 'c' },
    { title: '평가시간', dataIndex: 'd' },
    { title: '순위', dataIndex: 'e' },
    { title: '점수', dataIndex: 'f' },
    { title: '진행율(%)', dataIndex: 'g' },
  ];
  const [open, setOpen] = useState(false);
  const closeClick = () => {
    setOpen(false);
  };
  const memoClick = () => {
    Modal.info({ title: 'memoClick' });
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>과제정보</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-default"
            onClick={memoClick}
          >
            메모
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={() => setOpen(true)}
          >
            분과별 평가진행현황
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrAsmtInfo'}
            columns={columns}
            dataSource={arrAsmtInfo}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Col>
      </Row>
      <EvlProgrsPopup
        open={open}
        closeClick={closeClick}
        arrAsmtInfo={arrAsmtInfo}
      />
    </>
  );
};

export default EvlCharmnEvl02;
