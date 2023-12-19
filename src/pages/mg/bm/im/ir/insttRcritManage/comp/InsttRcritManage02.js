import React, { useState } from 'react';
import { Col, Row, Button, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import Modal from 'antd/lib/modal/Modal';

const InsttRcritManage02 = ({
  arrInstRcritMng,
  setArrCheckedInstRcritMng,
  setOjtKey,
  setPageType,
}) => {
  const columns = [
    {
      title: '순번',
      dataIndex: 'a',
      key: 1,
      align: 'center',
    },
    {
      title: '사업연도',
      dataIndex: 'b',
      key: 2,
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'c',
      key: 3,
      align: 'center',
    },
    {
      title: '공고명',
      dataIndex: 'd',
      key: 4,
      align: 'center',
      render: (_, record) => {
        return (
          <Button
            type="default"
            className="eu-btn-table-default"
            size="small"
            onClick={() => {
              setPageType('REGIST');
              setOjtKey(record.key);
            }}
          >
            {record?.d}
          </Button>
        );
      },
    },
    {
      title: '공고일자',
      dataIndex: 'e',
      key: 5,
      align: 'center',
    },
    {
      title: '게시일자',
      dataIndex: 'f',
      key: 6,
      align: 'center',
    },
    {
      title: '접수기간',
      dataIndex: 'g',
      key: 7,
      align: 'center',
    },
    {
      title: '등록자',
      dataIndex: 'h',
      align: 'center',
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
      setArrCheckedInstRcritMng(selectedRows);
    },
  };

  const deleteClick = () => {
    Modal.info({
      title: 'deleteClick',
    });
  };

  const insertClick = () => {
    setPageType('REGIST');
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>모집공고 목록</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={deleteClick}
          >
            삭제
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={insertClick}
          >
            신규공고
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrInstRcritMng'}
            columns={columns}
            dataSource={arrInstRcritMng}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 800,
            }}
            tableLayout={'auto'}
          />
        </Col>
      </Row>
    </>
  );
};

export default InsttRcritManage02;
