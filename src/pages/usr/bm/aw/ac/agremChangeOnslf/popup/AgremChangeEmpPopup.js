import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button, Descriptions, Input, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const AgremChangeEmpPopup = ({ open, closeClick, popupSelectClick }) => {
  const [arrCmpstnEmp, setArrCmpstnEmp] = useState([]);
  const [arrCheckedCmpstnEmp, setArrCheckedCmpstnEmp] = useState([]);
  const columns = [
    { title: '아이디', dataIndex: 'a1' },
    { title: '성명', dataIndex: 'a2' },
    {
      title: '휴대전화번호',
      dataIndex: 'a3',
    },
    {
      title: '소속기관',
      dataIndex: 'a4',
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedCmpstnEmp(selectedRows);
    },
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a1: 'abc123',
        a2: '홍길동',
        a3: '010-1111-1111',
        a4: '(주)도입기업',
      });
    }
    setArrCmpstnEmp(tmp1);
  }, []);

  return (
    <Modal
      key="AgremChangeEmpPopup"
      title={'구성원 검색'}
      open={open}
      onCancel={closeClick}
      width={1200}
      footer={[
        <div>
          <Button
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-warning"
            onClick={() => {
              popupSelectClick(arrCheckedCmpstnEmp);
              closeClick();
            }}
          >
            확인
          </Button>
          <Button
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-warning"
            onClick={closeClick}
          >
            닫기
          </Button>
        </div>,
      ]}
    >
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>구성원 목록</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrCmpstnEmp'}
            columns={columns}
            dataSource={arrCmpstnEmp}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 300,
            }}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default AgremChangeEmpPopup;
