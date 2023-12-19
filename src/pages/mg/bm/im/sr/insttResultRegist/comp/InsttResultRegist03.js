import React, { useState } from 'react';
import { Col, Row, Table, Modal, Button, Select } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import InsttCmitPopupPage from 'pages/mg/bm/im/sr/insttResultRegist/popup/InsttCmitPopupPage';

const InsttResultRegist03 = ({ arrInstLst }) => {
  const [arrCheckedInstLst, setArrCheckedInstLst] = useState([]);
  const [selectedValue, setSelectedValue] = useState('선정완료');
  const [open, setOpen] = useState(false);
  const openClick = () => {
    setOpen(true);
  };
  const closeClick = () => {
    setOpen(false);
  };
  const columns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: 50,
      align: 'center',
    },
    {
      title: '접수번호',
      dataIndex: 'b',
    },
    {
      title: '제출기관명',
      dataIndex: 'c',
    },
    {
      title: '기관담당자',
      dataIndex: 'd',
    },
    {
      title: '제출일시',
      dataIndex: 'e',
      width: 250,
    },
    {
      title: '의견작성여부',
      dataIndex: 'f',
      width: 180,
      render: (text, record) => (
        <Button
          type="default"
          className="eu-btn-table-default"
          onClick={openClick}
        >
          {record.f}
        </Button>
      ),
    },
    {
      title: '판정상태',
      dataIndex: 'g',
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedInstLst(selectedRows);
    },
  };

  const jgmtClick = () => {
    Modal.info({ title: `${JSON.stringify(arrCheckedInstLst)}` });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>기관목록</TitleComp>
        </Col>
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
            value={selectedValue}
          />
          <Button
            size="small"
            className="eu-btn-crud-default"
            onClick={jgmtClick}
          >
            판정
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrInstLst'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={columns}
            dataSource={arrInstLst}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 350 }}
          />
        </Col>
      </Row>
      <InsttCmitPopupPage open={open} closeClick={closeClick} />
    </>
  );
};

export default InsttResultRegist03;
