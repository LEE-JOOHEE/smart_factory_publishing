import React, { useState } from 'react';
import { Col, Row, Table, Modal, Button, Select } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const InsttResultRegist02 = ({ arrInstSlctnEvlCmit }) => {
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
      title: '판정완료 기관수',
      dataIndex: 'i',
    },
    {
      title: '의견작성여부',
      dataIndex: 'j',
    },
    {
      title: '확정여부',
      dataIndex: 'k',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedInstSlctnEvlCmit(selectedRows);
    },
  };

  const rsltCfmtnClick = () => {
    Modal.info({ title: `${JSON.stringify(arrCheckedInstSlctnEvlCmit)}` });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>기관선정평가위원회</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-default"
            onClick={rsltCfmtnClick}
          >
            결과확정
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
    </>
  );
};

export default InsttResultRegist02;
