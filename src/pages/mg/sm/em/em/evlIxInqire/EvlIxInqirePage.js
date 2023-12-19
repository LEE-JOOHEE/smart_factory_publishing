import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Select,
  Modal,
  Button,
  Descriptions,
  Input,
  Table,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const EvlIxInqirePage = () => {
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
  const columns = [
    {
      title: '평가지표ID',
      dataIndex: 'a',
    },
    {
      title: '문항유형구분',
      dataIndex: 'b',
    },
    {
      title: '평가지표',
      dataIndex: 'c',
    },
    {
      title: '사용여부',
      dataIndex: 'd',
    },
    {
      title: '답안그룹',
      dataIndex: 'e',
    },
    {
      title: '답안명',
      dataIndex: 'f',
    },
  ];

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };

  const [arrEvlIdx, setArrEvlIdx] = useState([]);

  let tmp1 = [];
  useEffect(() => {
    for (let idx = 1; idx < 30; idx++) {
      tmp1.push({
        idx: idx,
        a: 'EI000153',
        b: '출력문항',
        c: '도입기업 역량 : 기업현황이 양호하고 지속가능한 기업인가?',
        d: 'Y',
        e: '단일선택5',
        f: '탁월.우수.보통.미흡.불량',
      });
    }
    setArrEvlIdx(tmp1);
  }, []);

  const [arrCheckedEvlIdx, setArrCheckedEvlIdx] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedEvlIdx(selectedRows);
    },
  };
  const selectClick = () => {
    Modal.info({
      title: 'selectClick',
    });
    // console.log('arrCheckedQitem: ', arrCheckedQitem);
  };
  return (
    <>
      <Modal
        key="EvlIxInqirePage"
        title="평가지표 조회"
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        open={true}
        // onCancel={rsltIxModalCloseClick}
        width={1200}
        footer={null}
      >
        <Row className="eu-row-comp-title">
          <Col span={12}>
            <TitleComp>검색조건 입력</TitleComp>
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
              <Descriptions.Item label="평가지표명" span={3}>
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a');
                  }}
                  value={ojtSrchCnd?.a}
                />
              </Descriptions.Item>
              <Descriptions.Item label="평가지표ID" span={2}>
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
          <Col span={12}>평가지표 목록</Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              onClick={selectClick}
            >
              선택
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'docTypeLst'}
              columns={columns}
              dataSource={arrEvlIdx}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              pagination={false}
              size={'small'}
              bordered={true}
              sticky={true}
              scroll={{
                y: 700,
              }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default EvlIxInqirePage;
