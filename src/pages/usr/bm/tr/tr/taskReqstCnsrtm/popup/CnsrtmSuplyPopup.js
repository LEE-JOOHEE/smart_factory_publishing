import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button, Table, Descriptions, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const CnsrtmSuplyPopup = ({
  open,
  closeClick,
  popupSelectClick,
  type = 'suply',
}) => {
  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
  });
  const [arrEntLst, setArrEntLst] = useState([]);

  const columns = [
    { title: '순번', dataIndex: 'a' },
    { title: '기업명', dataIndex: 'b' },
    { title: '대표자명', dataIndex: 'c' },
    { title: '사업자등록번호', dataIndex: 'd' },
    { title: '주소', dataIndex: 'e' },
    {
      title: '선택',
      render: (_, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-default"
            onClick={() => {
              popupSelectClick(record);
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
    Modal.info({ title: JSON.stringify(ojtSrchCnd) });
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: `기업명${idx}`,
        c: '김철수',
        d: '123-45-67890',
        e: '서울',
        f: '010-0000-0000',
        g: 'abc@naver.com',
        h: '123-123-123',
      });
    }
    setArrEntLst(tmp1);
  }, []);

  return (
    <Modal
      key="CnsrtmSuplyPopup"
      title={`컨소시엄 ${type === 'suply' ? '공급' : '도입'}기업 선택`}
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
            <Descriptions.Item label="사업자번호" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'a');
                }}
                value={ojtSrchCnd?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="기업명" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'b');
                }}
                value={ojtSrchCnd?.b}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>기업 목록</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrEntLst'}
            columns={columns}
            dataSource={arrEntLst}
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

export default CnsrtmSuplyPopup;
