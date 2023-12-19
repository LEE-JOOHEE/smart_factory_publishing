import React, { useState } from 'react';
import { Col, Row, Button, Table, Select, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import DlbrtTaskPopupPage from 'pages/mg/tr/sc/dr/dlbrtResultRegist/popup/DlbrtTaskPopupPage';

const DlbrtResultRegist04 = ({ arrLvlIdntyBiz }) => {
  const [asmtRegPopupOpen, setAsmtRegPopupOpen] = useState(false);
  const asmtRegClick = () => {
    setAsmtRegPopupOpen(true);
  };
  const [selectedValue, setSelectedValue] = useState('');
  const jgmtClick = () => {
    Modal.info({
      title: 'jgmtClick',
    });
  };
  const arrLvlIdntyBizColumns = [
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
      title: '진단보고서 제출자수',
      dataIndex: 'c',
    },
    {
      title: '판정상태',
      dataIndex: 'd',
      render: (_, record) => {
        return (
          <Button type="link" size="small" onClick={asmtRegClick}>
            {record?.d}
          </Button>
        );
      },
    },
  ];
  const [arrCheckedDlbrCmitRslt, setArrCheckedDlbrCmitRslt] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedDlbrCmitRslt(selectedRows);
    },
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={3}>
          <TitleComp>과제목록</TitleComp>
        </Col>
        <Col span={9}>총 {arrLvlIdntyBiz ? arrLvlIdntyBiz.length : 0}건</Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Select
            onChange={(value) => {
              setSelectedValue(value);
            }}
            options={[
              {
                value: '적정',
                label: '적정',
              },
              {
                value: '보완',
                label: '보완',
              },
            ]}
            defaultValue={'적정'}
          />
          <Button size="small" className="eu-btn-crud-fine" onClick={jgmtClick}>
            판정
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={arrLvlIdntyBizColumns}
            dataSource={arrLvlIdntyBiz}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Col>
      </Row>
      <DlbrtTaskPopupPage
        key={'DlbrtTaskPopupPage'}
        asmtRegPopupOpen={asmtRegPopupOpen}
        setAsmtRegPopupOpen={setAsmtRegPopupOpen}
      />
    </>
  );
};

export default DlbrtResultRegist04;
