import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button, Descriptions, Input, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const IndutySearchPopup = ({ open, closeClick, popupSelectClick, column }) => {
  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
  });

  const [arrTpbiz, setArrTpbiz] = useState([]);

  const columns = [
    { title: '순번', dataIndex: 'a' },
    { title: '업종코드', dataIndex: 'b' },
    { title: '업종명', dataIndex: 'c' },
    {
      title: '선택',
      dataIndex: 'd',
      render: (_, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-default"
            onClick={() => {
              popupSelectClick(record.c, column);
              closeClick();
            }}
          >
            선택
          </Button>
        );
      },
    },
  ];

  // 검색조건 입력 change 메소드
  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const searchClick = () => {
    Modal.info({ title: `${JSON.stringify(ojtSrchCnd)}` });
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: `G4672${idx}`,
        c: `1차 금속제품 도매업${idx}`,
      });
    }
    setArrTpbiz(tmp1);
  }, []);

  return (
    <Modal
      key="IndutySearchPopup"
      title={'업종 선택'}
      open={open}
      onCancel={closeClick}
      width={1200}
      footer={[
        <div>
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
        <Col span={12}>
          <TitleComp>업종 선택</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={searchClick}
          >
            조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="업종명" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'a');
                }}
                value={ojtSrchCnd?.a}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>업종 목록</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrTpbiz'}
            columns={columns}
            dataSource={arrTpbiz}
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

export default IndutySearchPopup;
