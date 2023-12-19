import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button, Descriptions, Input, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const AgremChangePartcptn = ({ open, closeClick, popupSelectClick }) => {
  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
  });

  const [arrPtcptHnf, setArrPtcptHnf] = useState([]);

  const columns = [
    { title: '참여인력명', dataIndex: 'a' },
    { title: 'S/W기술자등급', dataIndex: 'b' },
    { title: '생년월일', dataIndex: 'c' },
    { title: '경력', dataIndex: 'd' },
    {
      title: '선택',
      dataIndex: 'e',
      render: (_, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-default"
            onClick={() => {
              popupSelectClick(record.key);
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
        b: `공급기업명${idx}`,
        c: '김철수',
        d: '123-45-67890',
        e: '서울',
      });
    }
    setArrPtcptHnf(tmp1);
  }, []);

  return (
    <Modal
      key="AgremChangePartcptn"
      title={'참여인력 선택'}
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
        <Col span={12}>
          <TitleComp>검색조건 입력</TitleComp>
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
            <Descriptions.Item label="참여인력명">
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
          <TitleComp>참여인력 목록</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrPtcptHnf'}
            columns={columns}
            dataSource={arrPtcptHnf}
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

export default AgremChangePartcptn;
