import React, { useState } from 'react';
import { Col, Row, Tabs, Input, Button, Table, Select, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { arrChange } from 'components/common/Common';

const PblancRstrctCndPage = ({
  strRstrctCndChange,
  srchRstrctCndClick,
  arrRstrctCnd,
  setCheckedArrRstrctCnd,
  setArrRstrctCnd,
}) => {
  const rstrctCndColumns = [
    {
      title: '제약항목분류',
      dataIndex: 'a',
      width: '33%',
      align: 'center',
    },
    {
      title: '제약항목명',
      dataIndex: 'b',
      width: '33%',
      align: 'center',
    },
    {
      title: '제약항목값 영역',
      dataIndex: 'c',
      width: '33%',
      align: 'right',
    },
  ];

  const pblancRstrctCndColumns = [
    {
      title: '제약항목분류',
      dataIndex: 'a',
      align: 'center',
    },
    {
      title: '제약항목명',
      dataIndex: 'b',
      align: 'center',
    },
    {
      title: '제약항목값 영역',
      dataIndex: 'c',
      align: 'center',
    },
    {
      title: '제약조건 유형',
      dataIndex: 'd',
      align: 'center',
      render: (_, record, index) => {
        console.log(record, index);
        return (
          <Select
            placeholder="제약조건 유형"
            onChange={(value) => arrChange(value, 'd', index, setArrRstrctCnd)}
            options={[
              {
                value: '이하',
                label: '이하',
              },
              {
                value: '이상',
                label: '이상',
              },
            ]}
            defaultValue={record?.d}
          />
        );
      },
    },
    {
      title: '제약조건 값',
      dataIndex: 'e',
      align: 'center',
      render: (_, record, index) => {
        console.log(record, index);
        return (
          <Input
            placeholder="제약조건 값"
            onChange={(e) =>
              arrChange(e.target.value, 'e', index, setArrRstrctCnd)
            }
            defaultValue={record?.e}
          />
        );
      },
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);

  const rstrctCndRowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setSelectedRows(selectedRows);
      setCheckedArrRstrctCnd(selectedRows);
    },
  };

  const pblancRstrctCndRowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setCheckedArrRstrctCnd(selectedRows);
    },
  };

  const insertClick = () => {
    Modal.info({
      title: 'insertClick',
    });
  };

  const deleteClick = () => {
    Modal.info({
      title: 'deleteClick',
    });
  };

  const saveClick = () => {
    Modal.info({
      title: 'saveClick',
    });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={4}>
          <TitleComp>제약조건 목록</TitleComp>
        </Col>
        {/* <Col span={9}>
          <Input.Search
            onChange={(e) => strRstrctCndChange(e.target.value)}
            style={{ width: '250px' }}
            onSearch={srchRstrctCndClick}
          />
        </Col> */}
        <Col span={20} style={{ textAlign: 'right' }}>
          <Input.Search
            onChange={(e) => strRstrctCndChange(e.target.value)}
            style={{ width: '450px' }}
            onSearch={srchRstrctCndClick}
          />
          <Button
            className="eu-btn-crud-fine"
            onClick={insertClick}
          >
            추가
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'rstrctCndColumns'}
            columns={rstrctCndColumns}
            dataSource={arrRstrctCnd}
            rowSelection={{ type: 'checkbox', ...rstrctCndRowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 400,
            }}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>공고별 제약조건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button className="eu-btn-crud-fine" onClick={saveClick}>
            저장
          </Button>
          <Button
            className="eu-btn-crud-error"
            onClick={deleteClick}
          >
            제거
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'pblancRstrctCndColumns'}
            columns={pblancRstrctCndColumns}
            dataSource={selectedRows}
            rowSelection={{ type: 'checkbox', ...pblancRstrctCndRowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 400,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default PblancRstrctCndPage;
