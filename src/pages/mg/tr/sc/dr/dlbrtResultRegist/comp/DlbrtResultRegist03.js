import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal, Select } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import DlbrtResultPopupPage from 'pages/mg/tr/sc/dr/dlbrtResultRegist/popup/DlbrtResultPopupPage';

const DlbrtResultRegist03 = ({ arrAsmtLst }) => {
  const [asmtRegPopupOpen, setAsmtRegPopupOpen] = useState(false);
  const asmtRegClick = () => {
    setAsmtRegPopupOpen(true);
  };

  const arrAsmtLstColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: 50,
      align: 'center',
    },
    {
      title: '과제정보',
      dataIndex: 'b',
    },
    {
      title: '평가위원 만족도조사 제출여부',
      dataIndex: 'c',
    },
    {
      title: '현장평가점수',
      dataIndex: 'd',
    },
    {
      title: '현장평가결과',
      dataIndex: 'e',
    },
    {
      title: '종합점수',
      dataIndex: 'f',
    },
    {
      title: '기술성평가결과',
      dataIndex: 'g',
    },
    {
      title: '현장확인적합성',
      dataIndex: 'h',
    },
    {
      title: '현장확인결과',
      dataIndex: 'i',
    },
    {
      title: '판정상태',
      dataIndex: 'j',
      render: (_, record) => {
        return (
          <Button type="link" size="small" onClick={asmtRegClick}>
            {record?.e}
          </Button>
        );
      },
    },
  ];
  const jgmtClick = () => {
    Modal.info({
      title: 'jgmtClick',
    });
  };
  const smsTrsmClick = () => {
    Modal.info({
      title: 'smsTrsmClick',
    });
  };
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={3}>
          <TitleComp>과제목록</TitleComp>
        </Col>
        <Col span={9}>총 {arrAsmtLst ? arrAsmtLst.length : 0}건</Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Select
            onChange={(value) => {
              setSelectedValue(value);
            }}
            options={[
              {
                value: '선정완료',
                label: '선정완료',
              },
              {
                value: '탈락',
                label: '탈락',
              },
              {
                value: '포기',
                label: '포기',
              },
            ]}
            defaultValue={'선정완료'}
          />
          <Button size="small" className="eu-btn-crud-fine" onClick={jgmtClick}>
            판정
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={smsTrsmClick}
          >
            평가위원 만족도조사 제출요청 SMS전송
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={arrAsmtLstColumns}
            dataSource={arrAsmtLst}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Col>
      </Row>
      <DlbrtResultPopupPage
        key={'DlbrtResultPopupPage'}
        asmtRegPopupOpen={asmtRegPopupOpen}
        setAsmtRegPopupOpen={setAsmtRegPopupOpen}
      />
    </>
  );
};

export default DlbrtResultRegist03;
