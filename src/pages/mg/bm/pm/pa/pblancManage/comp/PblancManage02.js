import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { useHistory } from 'react-router-dom';

const PblancManage02 = ({
  arrPbancLst,
  setArrCheckedPbancLst,
  setPageType,
}) => {
  const history = useHistory();
  useEffect(() => {
    console.log('arrPbancLst: ', arrPbancLst);
  }, [arrPbancLst]);
  const deleteClick = () => {
    Modal.info({
      title: 'deleteClick',
    });
  };

  const insertClick = () => {
    setPageType('REGIST');
  };
  const dtlPbancStngClick = () => {
    history.push('/mg/bm/pm/pc/pblancChartrManage');
  };

  const columns = [
    {
      title: '순번',
      dataIndex: 'a',
      key: 1,
      align: 'center',
    },
    {
      title: '공고연도',
      dataIndex: 'b',
      key: 2,
      align: 'center',
    },
    {
      title: '사업분류',
      dataIndex: 'c',
      key: 3,
      align: 'center',
    },
    {
      title: '공고번호',
      dataIndex: 'd',
      key: 4,
      align: 'center',
    },
    {
      title: '공고명',
      dataIndex: 'e',
      key: 5,
      render: (_, record) => {
        return (
          <Button
            type="link"
            size="small"
            onClick={() => {
              setPageType('REGIST');
            }}
          >
            {record?.e}
          </Button>
        );
      },
      align: 'center',
    },
    {
      title: '공고일자',
      dataIndex: 'f',
      key: 6,
      align: 'center',
    },
    {
      title: '등록자',
      dataIndex: 'g',
      key: 7,
      align: 'center',
    },
    {
      title: '세부공고 설정',
      dataIndex: 'h',
      render: () => (
        <Button
          type="default"
          className="eu-btn-table-default"
          onClick={dtlPbancStngClick}
        >
          세부공고 설정
        </Button>
      ),
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
      setArrCheckedPbancLst(selectedRows);
    },
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>공고 목록</TitleComp>
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
            columns={columns}
            dataSource={arrPbancLst}
            rowSelection={rowSelection}
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

export default PblancManage02;
