import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  Row,
  Col,
  Table,
  Radio,
  Space,
  Descriptions,
  Input,
  Select,
} from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd } from 'components/common/Common';

const EvlIxInqirePopup = ({
  evlIxInqirePopupOpen,
  setEvlIxInqirePopupOpen,
}) => {
  //평가지표검색
  const [ojtSrchCnd, setOjtSrchCnd] = useState([]);

  //평가지표 목록
  const [arrEvlIdx, setArrEvlIdx] = useState([]);

  //평가지표 목록 헤더
  const arrEvlIdxColumns = [
    { title: '평가지표ID', dataIndex: 'a1', width: 100 },
    { title: '문항유형구분', dataIndex: 'a2', width: 100 },
    { title: '평가지표', dataIndex: 'a3' },
    { title: '사용여부', dataIndex: 'a4', width: 50 },
    { title: '답안그룹', dataIndex: 'a5', width: 90 },
    { title: '답안명', dataIndex: 'a6', width: 180 },
  ];

  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const closeClick = () => {
    setEvlIxInqirePopupOpen(false);
  };
  const searchClick = () => {
    Modal.info({
      title: 'searchClick',
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
    setOjtGroupCodes(getListCommonCd(['a', 'b']));

    setOjtSrchCnd({
      a1: '',
      a2: '',
      a3: '',
      a4: '전체',
      a5: '전체',
    });

    let tmp = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp.push({
        key: idx,
        a1: 'E000153',
        a2: '출력문항',
        a3: '도입기업 역량 : 기업현황이 양호하고 지속가능한 기업인가?',
        a4: 'Y',
        a5: '단일선택',
        a6: '탁월,우수,보통,미흡,불량',
      });
    }
    setArrEvlIdx(tmp);
  }, []);

  return (
    <>
      <Modal
        key="evlIxInqirePopup"
        open={evlIxInqirePopupOpen}
        title="평가지표조회"
        onCancel={closeClick}
        width={1200}
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
              <Descriptions.Item label="평가지표명" span={3}>
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a1');
                  }}
                  value={ojtSrchCnd?.a1}
                />
              </Descriptions.Item>

              <Descriptions.Item label="평가지표ID">
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a2');
                  }}
                  value={ojtSrchCnd?.a2}
                />
              </Descriptions.Item>
              <Descriptions.Item label="답안명" span={2}>
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a3');
                  }}
                  value={ojtSrchCnd?.a3}
                />
              </Descriptions.Item>

              <Descriptions.Item label="문항유형">
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'a4');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={ojtSrchCnd?.a4}
                />
              </Descriptions.Item>
              <Descriptions.Item label="사용여부" span={2}>
                <Select
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'a5');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                  ]}
                  value={ojtSrchCnd?.a5}
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
              rowSelection={{ type: 'checkbox', ...rowSelection }}
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

export default EvlIxInqirePopup;
