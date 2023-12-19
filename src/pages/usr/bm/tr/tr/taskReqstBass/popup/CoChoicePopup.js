import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button, Descriptions, Input, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const CoChoicedPopup = ({ open, closeClick, popupConfimClick }) => {
  const [arrCodiLst, setArrCodiLst] = useState([]);
  const [arrCheckedCodiLst, setArrCheckedCodiLst] = useState([]);

  const columns = [
    { title: '성명', dataIndex: 'a' },
    { title: '배정과제수', dataIndex: 'b' },
    { title: '전문가소재지 지역', dataIndex: 'c' },
    { title: '주요지역 (TP 구분)', dataIndex: 'd' },
    { title: '소속', dataIndex: 'e' },
    { title: '직위', dataIndex: 'f' },
    { title: '추천상태', dataIndex: 'g' },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedCodiLst(selectedRows);
    },
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 10; idx++) {
      tmp1.push({
        key: idx,
        a: '홍길동',
        b: '32',
        c: '세종',
        d: '세종',
        e: `소속명${idx}`,
        f: `직위명${idx}`,
        g: '자동',
      });
    }
    setArrCodiLst(tmp1);
  }, []);

  return (
    <Modal
      key="CoChoicedPopup"
      title={'코디네이터 선택'}
      open={open}
      onCancel={closeClick}
      width={1200}
      footer={[
        <div>
          <Button
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-fine"
            onClick={() => {
              popupConfimClick(arrCheckedCodiLst);
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
          <TitleComp>코디네이터 목록</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrCodiLst'}
            columns={columns}
            dataSource={arrCodiLst}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 400,
            }}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default CoChoicedPopup;
