import React, { useState } from 'react';
import { Col, Row, Table, Modal, Button, Select } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import InsttRegistPopupPage from 'pages/mg/bm/im/se/insttSlctnEvl/popup/InsttRegistPopupPage';

const InsttSlctnEvl02 = ({ arrInstSlctnEvlCmit }) => {
  const [arrCheckedInstSlctnEvlCmit, setArrCheckedInstSlctnEvlCmit] = useState(
    []
  );
  const columns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: 50,
      align: 'center',
    },
    {
      title: '사업연도',
      dataIndex: 'b',
    },
    {
      title: '사업명',
      dataIndex: 'c',
    },
    {
      title: '세부공고명',
      dataIndex: 'd',
    },
    {
      title: '평가위원회명',
      dataIndex: 'e',
      width: 250,
      render: (text) => (
        <Button
          type="default"
          className="eu-btn-table-default"
          onClick={openClick}
        >
          {text}
        </Button>
      ),
    },
    {
      title: '평가일자',
      dataIndex: 'f',
      width: 180,
    },
    {
      title: '담당간사',
      dataIndex: 'g',
    },
    {
      title: '배정기관수',
      dataIndex: 'h',
    },
    {
      title: '확정여부',
      dataIndex: 'i',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedInstSlctnEvlCmit(selectedRows);
    },
  };

  const [open, setOpen] = useState(false);
  const closeClick = () => {
    setOpen(false);
  };
  const openClick = () => {
    setOpen(true);
  };

  const cmitCfmtnClick = () => {
    Modal.info({ title: `${JSON.stringify(arrCheckedInstSlctnEvlCmit)}` });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>기관선정 평가위원회</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-warning"
            onClick={openClick}
          >
            위원회 등록
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={cmitCfmtnClick}
          >
            위원회 확정
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrInstSlctnEvlCmit'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={columns}
            dataSource={arrInstSlctnEvlCmit}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 350 }}
          />
        </Col>
      </Row>
      <InsttRegistPopupPage open={open} closeClick={closeClick} />
    </>
  );
};

export default InsttSlctnEvl02;
