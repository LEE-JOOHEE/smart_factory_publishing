import React, { useState } from 'react';
import { Col, Row, Button, Table, Modal } from 'antd';
import { PlusOutlined , MinusOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const PblancAditIemPage = ({ arrStdArtclCd, setArrCheckedAplcnArtclCd }) => {
  const [arrAplcnArtclCd, setArrAplcnArtclCd] = useState([]);
  const stdArtclCdColumn = [
    {
      title: '항목명',
      dataIndex: 'a',
      width: '50%',
      align: 'center',
    },
    {
      title: '입력형태 구분',
      dataIndex: 'b',
      width: '50%',
      align: 'center',
    },
  ];
  const aplcnArtclCdColumn = [
    {
      title: '항목명',
      dataIndex: 'a',
      width: '35%',
      align: 'center',
    },
    {
      title: '입력형태 구분',
      dataIndex: 'b',
      width: '30%',
      align: 'center',
    },
    {
      title: '필수입력 여부',
      dataIndex: 'c',
      width: '15%',
      align: 'center',
    },
    {
      title: '화면표시 순번',
      dataIndex: 'd',
      width: '20%',
      align: 'center',
    },
  ];
  const stdArtclCdRowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrAplcnArtclCd(selectedRows);
    },
  };
  const checkedAplcnArtclCdRowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedAplcnArtclCd(selectedRows);
    },
  };
  const insertLineClick = () => {
    Modal.info({
      title: 'insertLineClick',
    });
  };

  const deleteClick = () => {
    Modal.info({
      title: 'deleteClick',
    });
  };

  const insertClick = () => {
    Modal.info({
      title: 'insertClick',
    });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>표준 추가항목 코드</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-row-insert"
            icon={<PlusOutlined />}
            onClick={insertLineClick}
          >
            행추가
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'stdArtclCd'}
            columns={stdArtclCdColumn}
            dataSource={arrStdArtclCd}
            rowSelection={{ type: 'checkbox', ...stdArtclCdRowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 300,
            }}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>적용 추가항목 코드</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            onClick={insertClick}
          >
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
            key={'aplcnArtclCd'}
            columns={aplcnArtclCdColumn}
            dataSource={arrAplcnArtclCd}
            rowSelection={{
              type: 'checkbox',
              ...checkedAplcnArtclCdRowSelection,
            }}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 300,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default PblancAditIemPage;
