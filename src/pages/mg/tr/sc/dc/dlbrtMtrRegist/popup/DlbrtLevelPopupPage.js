import React, { useEffect, useState } from 'react';
import {
  Button,
  Descriptions,
  Input,
  Modal,
  Row,
  Col,
  Table,
  Select,
} from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const DlbrtLevelPopupPage = ({ asmtRegPopupOpen, setAsmtRegPopupOpen }) => {
  const [evlAsmt, setEvlAsmt] = useState({});
  const [arrAltmntAsmt, setArrAltmntAsmt] = useState([]);
  const [arrUnAltmntAsmt, setArrUnAltmntAsmt] = useState([]);

  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
    c: '',
  });

  const arrAltmntAsmtColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      align: 'center',
      width: 50,
    },
    { title: '과제번호', dataIndex: 'b' },
    { title: '과제명', dataIndex: 'c' },
    { title: '도입기업', dataIndex: 'd' },
    { title: '진단보고서제출자수', dataIndex: 'e' },
    {
      title: '제외',
      dataIndex: 'f',
      render: (_, record) => {
        return (
          <Button
            type="default"
            size="small"
            className="eu-btn-table-warning"
            onClick={() => {
              exclClick(record.key);
            }}
          >
            제외
          </Button>
        );
      },
    },
  ];
  const arrUnAltmntAsmtColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      align: 'center',
      width: 50,
    },
    { title: '과제번호', dataIndex: 'b', width: 80 },
    { title: '과제명', dataIndex: 'c', width: 200 },
    { title: '도입기업', dataIndex: 'd', width: 180 },
    { title: '진단보고서제출자수', dataIndex: 'e', width: 200 },
  ];

  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const searchClick = () => {
    Modal.info({
      title: 'searchClick',
    });
  };

  const closeClick = () => {
    setAsmtRegPopupOpen(false);
  };

  const exclClick = (dataKey) => {
    Modal.info({
      title: '제외 : ' + dataKey,
    });
  };
  const altmntAsmtClick = () => {
    Modal.info({
      title: '배정 : ' + JSON.stringify(arrCheckedAltmntAsmt),
    });
  };

  const [arrCheckedAltmntAsmt, setArrCheckedAltmntAsmt] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedAltmntAsmt(selectedRows);
    },
  };

  useEffect(() => {
    setEvlAsmt({
      a: '2022',
      b: '사업명',
      c: '수행기관명',
      d: '심의위원회 명',
    });

    let tmp1 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: `S${idx}`,
        c: `TEST과제_${idx}`,
        d: `기업명${idx}`,
        e: '3',
        k: 11 - idx,
      });
    }
    setArrAltmntAsmt(tmp1);

    let tmp2 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp2.push({
        key: idx,
        a: idx,
        b: `S${idx}`,
        c: `TEST과제_${idx}`,
        d: `기업명${idx}`,
        e: '1',
      });
    }
    setArrUnAltmntAsmt(tmp2);
  }, []);

  useEffect(() => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
  }, [ojtSrchCnd]);

  return (
    <>
      <Modal
        key="DlbrtMtrRegist06"
        open={asmtRegPopupOpen}
        title="심의위원회 과제 관리 (수준확인사업)"
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1400}
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
            <TitleComp>평가 계획</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}></Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="사업연도" span={2}>
                {evlAsmt?.a}
              </Descriptions.Item>
              <Descriptions.Item label="사업명">{evlAsmt?.b}</Descriptions.Item>
              <Descriptions.Item label="수행기관" span={2}>
                {evlAsmt?.c}
              </Descriptions.Item>
              <Descriptions.Item label="심의위원회명">
                {evlAsmt?.d}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>배정 과제</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}></Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'arrAltmntAsmt'}
              columns={arrAltmntAsmtColumns}
              dataSource={arrAltmntAsmt}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 210 }}
            />
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>미 배정 과제 검색 조건</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              onClick={searchClick}
            >
              검색
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="과제번호">
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="과제명">
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'b');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="도입기업명" span={3}>
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'c');
                  }}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>미 배정 과제</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              onClick={altmntAsmtClick}
            >
              배정
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'arrUnAltmntAsmt'}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              columns={arrUnAltmntAsmtColumns}
              dataSource={arrUnAltmntAsmt}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 210 }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default DlbrtLevelPopupPage;
