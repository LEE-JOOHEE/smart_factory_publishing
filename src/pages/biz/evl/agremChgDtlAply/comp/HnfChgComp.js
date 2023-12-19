import React, { useState } from 'react';
import { Modal, Col, Row, Button, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '순번',
    dataIndex: 'a',
  },
  {
    title: '변경전인력',
    dataIndex: 'b',
  },
  {
    title: 'S/W기술자등급의무',
    dataIndex: 'c',
  },
  {
    title: '투입일수',
    dataIndex: 'd',
  },
];
const data = [
  {
    key: '1',
    a: '1',
    b: '강아지',
    c: 'PM',
    d: '30',
  },
  {
    key: '2',
    a: '2',
    b: '버들잎',
    c: 'DA',
    d: '20',
  },
  {
    key: '3',
    a: '3',
    b: '손흥민',
    c: '중급기술자',
    d: '40',
  },
];

const columns2 = [
  {
    title: '변경후인력',
    dataIndex: 'b',
    editable: true,
  },
  {
    title: 'S/W기술자등급의무',
    dataIndex: 'c',
    editable: true,
  },
  {
    title: '투입일수',
    dataIndex: 'd',
    editable: true,
  },
];

const HnfChgComp = () => {
  const [data2, setData2] = useState(data);
  const [count, setCount] = useState(4);
  const addButtonClick = () => {
    const newData = {
      key: count,
      a: '4',
      b: '김민재',
      c: '고급기술자',
      d: '50',
    };
    setData2([...data2, newData]);
    setCount(count + 1);

    Modal.info({
      title: '처리결과',
      content: (
        <div>
          <p>변경 후 인력 입력을 위한 행을 추가 했습니다.</p>
        </div>
      ),
      onOk() {},
    });
  };
  const saveButtonClick = () => {
    Modal.success({
      title: '저장 하였습니다.',
    });
  };

  const addRowBtnClick = () => {
    Modal.info({
      title: 'addRowBtnClick',
    });
  };
  const deleteRowBtnClick = () => {
    Modal.info({
      title: 'deleteRowBtnClick',
    });
  };
  const saveBtnClick = () => {
    Modal.info({
      title: 'saveBtnClick',
    });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>변경 전 인력변경</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table columns={columns} dataSource={data} size="small" bordered />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <TitleComp>변경 후 인력</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            icon={<PlusSquareOutlined />}
            onClick={addRowBtnClick}
          >
            행추가
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            icon={<MinusSquareOutlined />}
            onClick={deleteRowBtnClick}
          >
            행삭제
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={saveBtnClick}
          >
            저장
          </Button>
        </Col>
      </Row>

      <Table columns={columns2} dataSource={data2} size="small" bordered />
    </>
  );
};

export default HnfChgComp;
