import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import CnsrtmSuplyPopup from 'pages/usr/bm/tr/tr/taskReqstCnsrtm/popup/CnsrtmSuplyPopup';

const TaskReqstCnsrtm02 = () => {
  const [arrIndcEnt, setArrIndcEnt] = useState([]);
  const [arrCheckedIndcEnt, setArrCheckedIndcEnt] = useState([]);
  const columns = [
    { title: '업체명', dataIndex: 'b' },
    { title: '사업자등록번호', dataIndex: 'd' },
    { title: '대표자', dataIndex: 'c' },
    { title: '연락처', dataIndex: 'f' },
    { title: '이메일', dataIndex: 'g' },
    { title: '종사업자번호', dataIndex: 'h' },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedIndcEnt(selectedRows);
    },
  };
  const [open, setOpen] = useState(false);
  const closeClick = () => {
    setOpen(false);
  };

  const popupSelectClick = (value) => {
    const crntKeys = arrIndcEnt.map((item) => item.key);
    if (!crntKeys.includes(value.key)) {
      setArrIndcEnt([...arrIndcEnt, value]);
    }
  };
  const deleteClick = () => {
    const checkedKeys = arrCheckedIndcEnt.map((item) => item.key);
    setArrIndcEnt(arrIndcEnt.filter((item) => !checkedKeys.includes(item.key)));
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>컨소시엄 도입기업</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-warning"
            onClick={() => setOpen(true)}
          >
            추가
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
            key={'arrIndcEnt'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={columns}
            dataSource={arrIndcEnt}
            size="small"
            bordered
            pagination={false}
            scroll={{
              y: 150,
            }}
          />
        </Col>
      </Row>
      <CnsrtmSuplyPopup
        open={open}
        closeClick={closeClick}
        popupSelectClick={popupSelectClick}
        type={'indc'}
      />
    </>
  );
};

export default TaskReqstCnsrtm02;
