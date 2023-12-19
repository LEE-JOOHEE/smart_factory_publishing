import React, { useState, useEffect } from 'react';
import { Col, Row, Descriptions, Table, Modal, Input, Button } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const InsttPopupPage = ({ open, closeClick }) => {
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
  });
  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };

  const selectClick = () => {
    Modal.info({ title: 'selectClick' });
  };

  const [arrIdntyInst, setArrIdntyInst] = useState([]);

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: `기관명${idx}`,
        c: '홍길동',
        d: '111-11-11111',
        e: '서울',
        f: '선택',
      });
    }
    setArrIdntyInst(tmp1);
  }, []);

  const columns = [
    {
      title: '순번',
      dataIndex: 'a',
      width: '8%', align: 'center',
    },
    { title: '확인기관명', dataIndex: 'b', width: '15%', align: 'center', },
    { title: '대표자명', dataIndex: 'c', width: '10%', align: 'center', },
    { title: '사업자등록번호', dataIndex: 'd', width: '17%', align: 'center', },
    { title: '주소', dataIndex: 'e', width: '40%', align: 'left', },
    {
      title: '선택',
      dataIndex: 'f',
      width: '10%', 
      align: 'center',
      render: (_, record) => {
        return (
          <Button
            type="default"
            className="eu-btn-table-default"
            onClick={selectClick}
          >
            {record?.f}
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Modal
        key="InsttPopupContainer"
        title="확인기관 선택"
        open={open}
        onCancel={closeClick}
        width={1200}
        footer={[
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>확인기관 검색</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button
                key={'searchClick'}
                className="eu-btn-crud-fine"
                onClick={() => searchClick(ojtSrchCnd)}
              >
                조회
              </Button>
            </Col>
          </Row>
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
              <Descriptions.Item label="기관명" span={1.5}>
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

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title mb-0">
            <Col span={24}>
              <TitleComp>답안코드정보</TitleComp>
            </Col>
          </Row>
          <Col span={24}>
            <Table
              key={'arrIdntyInst'}
              columns={columns}
              dataSource={arrIdntyInst}
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
    </>
  );
};

export default InsttPopupPage;
