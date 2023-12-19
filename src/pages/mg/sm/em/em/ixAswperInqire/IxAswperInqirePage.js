import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Select,
  Modal,
  Button,
  Descriptions,
  Input,
  Checkbox,
  Table,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const IxAswperInqirePage = () => {
  const history = useHistory();
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
    c: '',
    d: '전체',
    e: '전체',
  });
  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };

  const asprGroupInfoColumns = [
    {
      title: '답안그룹ID',
      dataIndex: 'a',
    },
    {
      title: '답안그룹명',
      dataIndex: 'b',
    },
    {
      title: '답안명',
      dataIndex: 'c',
    },
    {
      title: '답안유형',
      dataIndex: 'd',
    },
    {
      title: '사용여부',
      dataIndex: 'e',
    },
  ];

  const asprCdInfoColumns = [
    {
      title: '순번',
      dataIndex: 'a',
    },
    {
      title: '출력순서',
      dataIndex: 'b',
    },
    {
      title: '답안항목명',
      dataIndex: 'c',
    },
    {
      title: '배점',
      dataIndex: 'd',
    },
    {
      title: '사용여부',
      dataIndex: 'e',
    },
  ];

  const [arrAsprGroupInfo, setArrAsprGroupInfo] = useState([]);

  const [arrAsprCdInfo, setArrAsprCdInfo] = useState([]);

  let tmp1 = [];
  let tmp2 = [];
  useEffect(() => {
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: 'EI000153',
        b: '단일선택5',
        c: '탁월.우수.보통.미흡.불량',
        d: '단일선택 객관식',
        e: 'Y',
      });
      tmp2.push({
        key: idx,
        a: idx,
        b: '3',
        c: '탁월',
        d: 5,
        e: 'Y',
      });
    }
    setArrAsprGroupInfo(tmp1);
    setArrAsprCdInfo(tmp2);
  }, []);

  const [arrCheckedAsprGroupInfo, setArrCheckedAsprGroupInfo] = useState([]);

  const [arrCheckedAsprCdInfo, setArrCheckedAsprCdInfo] = useState([]);

  const asprGroupInfoRowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedAsprGroupInfo(selectedRows);
    },
  };

  const asprCdInfoRowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedAsprCdInfo(selectedRows);
    },
  };

  const insertAsprGroupInfoRowClick = () => {
    Modal.info({
      title: 'insertAsprGroupInfoRowClick',
    });
  };

  const deleteAsprGroupInfoRowClick = () => {
    Modal.info({
      title: 'deleteAsprGroupInfoRowClick',
    });
  };

  const saveAsprGroupInfoClick = () => {
    Modal.info({
      title: 'saveAsprGroupInfoClick',
    });
  };

  const selectAsprGroupInfoClick = () => {
    Modal.info({
      title: 'selectAsprGroupInfoClick',
    });
    history.push('/mg');
  };

  const insertAsprCdInfoClick = () => {
    Modal.info({
      title: 'insertAsprCdInfoClick',
    });
  };

  const deleteAsprCdInfoClick = () => {
    Modal.info({
      title: 'deleteAsprCdInfoClick',
    });
  };

  const saveAsprCdInfoClick = () => {
    Modal.info({
      title: 'saveAsprCdInfoClick',
    });
  };

  return (
    <>
      <Modal
        key="IxAswperInqirePage"
        title="지표답안 관리"
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        open={true}
        // onCancel={rsltIxModalCloseClick}
        width={1200}
        footer={null}
      >
        <Row className="eu-row-comp-title">
          <Col span={12}>
            <TitleComp>지표답안그룹 검색</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              key={'searchClick'}
              size="small"
              className="eu-btn-crud-fine"
              onClick={() => searchClick(ojtSrchCnd)}
            >
              조회
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions size={'small'} bordered>
              <Descriptions.Item label="답안그룹명" span={3}>
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a');
                  }}
                  value={ojtSrchCnd?.a}
                />
              </Descriptions.Item>
              <Descriptions.Item label="답안그룹ID" span={2}>
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'b');
                  }}
                  value={ojtSrchCnd?.b}
                />
              </Descriptions.Item>
              <Descriptions.Item label="답안명">
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'c');
                  }}
                  value={ojtSrchCnd?.c}
                />
              </Descriptions.Item>
              <Descriptions.Item label="문항유형" span={2}>
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'd');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.d}
                />
              </Descriptions.Item>
              <Descriptions.Item label="사용여부">
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'e');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.e}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>답안그룹정보</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              onClick={selectAsprGroupInfoClick}
            >
              선택
            </Button>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              onClick={saveAsprGroupInfoClick}
            >
              저장
            </Button>
            <Button
              size="small"
              className="eu-btn-row-insert"
              icon={<PlusSquareOutlined />}
              onClick={insertAsprGroupInfoRowClick}
            >
              행추가
            </Button>
            <Button
              size="small"
              className="eu-btn-row-delete"
              icon={<MinusSquareOutlined />}
              onClick={deleteAsprGroupInfoRowClick}
            >
              행삭제
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'asprGroupInfo'}
              columns={asprGroupInfoColumns}
              dataSource={arrAsprGroupInfo}
              rowSelection={{ type: 'checkbox', ...asprGroupInfoRowSelection }}
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
            <TitleComp>답안코드정보</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              onClick={saveAsprCdInfoClick}
            >
              저장
            </Button>
            <Button
              size="small"
              className="eu-btn-row-insert"
              icon={<PlusSquareOutlined />}
              onClick={insertAsprCdInfoClick}
            >
              행추가
            </Button>
            <Button
              size="small"
              className="eu-btn-row-delete"
              icon={<MinusSquareOutlined />}
              onClick={deleteAsprCdInfoClick}
            >
              행삭제
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'asprCdInfo'}
              columns={asprCdInfoColumns}
              dataSource={arrAsprCdInfo}
              rowSelection={{ type: 'checkbox', ...asprCdInfoRowSelection }}
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
      </Modal>
    </>
  );
};

export default IxAswperInqirePage;
