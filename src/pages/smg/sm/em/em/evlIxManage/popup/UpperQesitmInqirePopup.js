import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  Row,
  Col,
  Table,
  Descriptions,
  Input,
  Select,
} from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd } from 'components/common/Common';

const UpperQesitmInqirePopup = ({
  upperQesitmInqireOpen,
  setUpperQesitmInqireOpen,
}) => {
  //평가지표검색
  const [ojtSrchCnd, setOjtSrchCnd] = useState([]);

  //평가지표 목록
  const [arrEvlIdx, setArrEvlIdx] = useState([]);

  //평가지표 목록 헤더
  const arrEvlIdxColumns = [
    { title: '순번', dataIndex: 'a1', width: 50, align: 'center' },
    { title: '평가지표ID', dataIndex: 'a2', width: 100, align: 'center' },
    { title: '문항유형구분', dataIndex: 'a3', width: 100, align: 'center' },
    { title: '문항명', dataIndex: 'a4' },
  ];

  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const closeClick = () => {
    setUpperQesitmInqireOpen(false);
  };
  const searchClick = () => {
    Modal.info({
      title: 'searchClick',
      content: JSON.stringify(ojtSrchCnd),
    });
  };

  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const selectedClick = () => {
    Modal.info({
      title: 'selectedClick',
      content: JSON.stringify(arrEvlIdxChecked),
    });
  };
  const [arrEvlIdxChecked, setArrEvlIdxChecked] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrEvlIdxChecked(selectedRows);
    },
  };

  useEffect(() => {
    //공통코드
    setOjtGroupCodes(getListCommonCd(['a']));

    setOjtSrchCnd({
      a1: '전체',
      a2: '',
    });

    let tmp = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp.push({
        key: idx,
        a1: idx,
        a2: 'E000153',
        a3: '출력문항',
        a4: '도입기업 역량 : 기업현황이 양호하고 지속가능한 기업인가?',
      });
    }
    setArrEvlIdx(tmp);
  }, []);

  return (
    <>
      <Modal
        key="upperQesitmInqireOpen"
        open={upperQesitmInqireOpen}
        title="문항조회"
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            key={'closeClick'}
            type="primary"
            size="middle"
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
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
              onClick={searchClick}
            >
              조회
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="문항유형">
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'a1');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={ojtSrchCnd?.a1}
                />
              </Descriptions.Item>
              <Descriptions.Item label="문항명" span={2}>
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a2');
                  }}
                  value={ojtSrchCnd?.a2}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>&nbsp;</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              key={'selectedClick'}
              size="small"
              className="eu-btn-crud-fine"
              onClick={selectedClick}
            >
              선택
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              rowSelection={{ type: 'radio', ...rowSelection }}
              key={'arrEvlIdxTable'}
              columns={arrEvlIdxColumns}
              dataSource={arrEvlIdx}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 300 }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default UpperQesitmInqirePopup;
