import React, { useState, useEffect } from 'react';
import { Col, Row, Descriptions, Table, Modal, Input, Button } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const InsttPopupContainer = ({ open, closeClick }) => {
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
    c: '',
    d: '전체',
    e: '전체',
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
        a: '1',
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
    },
    { title: '확인기관명', dataIndex: 'b' },
    { title: '대표자명', dataIndex: 'c' },
    { title: '사업자등록번호', dataIndex: 'd' },
    { title: '주소', dataIndex: 'e' },
    {
      title: '선택',
      dataIndex: 'f',
      render: (_, record) => {
        return (
          <Button
            type="default"
            className="eu-btn-table-default"
            size="small"
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
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        open={open}
        onCancel={closeClick}
        width={1200}
        footer={null}
      >
        <Row className="eu-row-comp-title">
          <Col span={12}>
            <TitleComp>확인기관 검색</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              key={'searchClick'}
              size="small"
              className="eu-btn-crud-fine"
              onClick={() => searchClick(ojtSrchCnd)}
            >
              조회
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions size={'small'} bordered>
              <Descriptions.Item label="답안그룹명" span={3}>
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a');
                  }}
                  value={ojtSrchCnd?.a}
                />
              </Descriptions.Item>
              <Descriptions.Item label="답안그룹ID" span={2}>
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

        <Row className="eu-row-comp-title margin-top">
          <Col span={24}>
            <TitleComp>답안코드정보</TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
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

export default React.memo(InsttPopupContainer);
