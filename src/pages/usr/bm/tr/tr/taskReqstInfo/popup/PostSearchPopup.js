import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button, Descriptions, Input, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const PostSearchPopup = ({ open, closeClick, popupSelectClick, column }) => {
  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
  });

  const [arrZip, setArrZip] = useState([]);

  const columns = [
    { title: '도로명/지번주소', dataIndex: 'a' },
    { title: '우편번호', dataIndex: 'b' },
    {
      title: '선택',
      dataIndex: 'c',
      render: (_, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-default"
            onClick={() => {
              popupSelectClick(record.b, column);
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
        a: '세종특별자치시 호려울로9(보람동)',
        b: `${30150 + idx}`,
      });
    }
    setArrZip(tmp1);
  }, []);

  return (
    <Modal
      key="PostSearchPopup"
      title={'우편번호 검색'}
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
          <TitleComp>우편번호 검색</TitleComp>
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
            <Descriptions.Item label="주소명" span={1.5}>
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
          <TitleComp>우편번호 목록</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrZip'}
            columns={columns}
            dataSource={arrZip}
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

export default PostSearchPopup;
