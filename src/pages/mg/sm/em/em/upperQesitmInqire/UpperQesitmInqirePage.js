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

const UpperQesitmInqirePage = () => {
  const [ojtSrchCnd, setOjtSrchCnd] = useState({ a: '전체', b: '' });
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

  const columns = [
    {
      title: '순번',
      dataIndex: 'a',
    },
    {
      title: '평가지표 ID',
      dataIndex: 'b',
    },
    {
      title: '문항유형 구분',
      dataIndex: 'c',
    },
    {
      title: '문항명',
      dataIndex: 'd',
    },
  ];
  const [arrQitemLst, setArrQitemLst] = useState([]);
  let tmp1 = [];
  useEffect(() => {
    for (let idx = 1; idx < 30; idx++) {
      tmp1.push({
        idx: idx,
        a: idx,
        b: `T100002${idx + 1}`,
        c: '출력문항',
        d: '도입기업 역량 : 기업현황이 양호하고 지속가능한 기업인가?',
      });
    }
    setArrQitemLst(tmp1);
  }, []);

  const [arrCheckedQitem, setArrCheckedQitem] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedQitem(selectedRows);
    },
  };
  const selectClick = () => {
    Modal.info({
      title: 'selectClick',
    });
    console.log('arrCheckedQitem: ', arrCheckedQitem);
  };
  return (
    <>
      <Modal
        key="UpperQesitmInqirePage"
        title="문항조회"
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        open={true}
        // onCancel={rsltIxModalCloseClick}
        width={1200}
        footer={null}
      >
        <Row className="eu-row-comp-title">
          <Col span={12}>
            <TitleComp>평가지표 검색</TitleComp>
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
              <Descriptions.Item label="문항유형">
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'a');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.a}
                />
              </Descriptions.Item>
              <Descriptions.Item label="문항명" span={2}>
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'b');
                  }}
                  value={ojtSrchCnd?.b}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>문항 목록</Col>
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
              key={'QitemLst'}
              columns={columns}
              dataSource={arrQitemLst}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              pagination={false}
              size={'small'}
              bordered={true}
              sticky={true}
              scroll={{
                y: 750,
              }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default UpperQesitmInqirePage;
