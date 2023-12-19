import React, { useEffect, useState } from 'react';
import { Button, Descriptions, Input, Modal, Row, Col, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const SptEvlPopup = ({ asmtRegPopupOpen, setAsmtRegPopupOpen }) => {
  //평가계획
  const [evlAsmt, setEvlAsmt] = useState({});
  //배정 과제 목록
  const [arrAltmntAsmt, setArrAltmntAsmt] = useState([]);
  //미 배정 과제 목록
  const [arrUnAltmntAsmt, setArrUnAltmntAsmt] = useState([]);

  //미배정 과제 검색 조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
  });

  const arrAltmntAsmtColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: '6%',
      align: 'center',
    },
    { title: '사업년도', dataIndex: 'b', width: '7%', align: 'center' },
    { title: '사업명', dataIndex: 'c', width: '13%' },
    { title: '과제번호', dataIndex: 'd', width: '13%' },
    { title: '과제명', dataIndex: 'e', width: '13%' },
    { title: '도입기획기관', dataIndex: 'f', width: '7%' },
    { title: '도입대표기업', dataIndex: 'g', width: '7%' },
    { title: '도입기업수', dataIndex: 'h', width: '6%', align: 'center' },
    { title: '공급대표기업', dataIndex: 'i', width: '7%' },
    { title: '공급기업수', dataIndex: 'j', width: '6%', align: 'center' },
    { title: '평가대상기업수', dataIndex: 'k', width: '7%', align: 'center' },
    {
      title: '제외',
      dataIndex: 'l',
      width: '8%',
      render: (_, record) => {
        return (
          <Button
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
      width: '6%',
      align: 'center',
    },
    { title: '사업년도', dataIndex: 'b', width: '7%', align: 'center' },
    { title: '사업명', dataIndex: 'c', width: '15%' },
    { title: '과제번호', dataIndex: 'd', width: '12%' },
    { title: '과제명', dataIndex: 'e', width: '15%' },
    { title: '도입기획기관', dataIndex: 'f', width: '8%' },
    { title: '도입대표기업', dataIndex: 'g', width: '8%' },
    { title: '도입기업수', dataIndex: 'h', width: '7%', align: 'center' },
    { title: '공급대표기업', dataIndex: 'i', width: '8%' },
    { title: '공급기업수', dataIndex: 'j', width: '7%', align: 'center' },
    { title: '평가대상기업수', dataIndex: 'k', width: '7%', align: 'center' },
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

  //평가계획확정 클릭
  const [arrCheckedAltmntAsmt, setArrCheckedAltmntAsmt] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedAltmntAsmt(selectedRows);
    },
  };

  useEffect(() => {
    //평가 계획 조회
    setEvlAsmt({
      a: '2022',
      b: '사업명',
      c: '기획기관명',
      d: '간사명',
      e: '평가TEST사업_평가계획1',
      f: '2022-09-01',
      g: '2022-09-30',
    });

    let tmp1 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '2022',
        c: '평가TEST사업',
        d: '2022-XXX-XXX-XXXXXX',
        e: '디지털클러스터_과제_' + idx,
        f: '기업명',
        g: '기업명',
        h: 11 - idx,
        i: '기업명',
        j: '1',
        k: '1',
        l: 11 - idx,
      });
    }
    setArrAltmntAsmt(tmp1);

    let tmp2 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp2.push({
        key: idx,
        a: idx,
        b: '2022',
        c: '디지털클러스터사업',
        d: '2022-XXX-XXX-XXXXXX',
        e: '디지털클러스터_과제_' + idx,
        f: '기업명',
        g: '기업명',
        h: '3',
        i: '기업명',
        j: '1',
        k: '3',
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
        key="SptEvlPopup"
        open={asmtRegPopupOpen}
        title="평가계획 과제 관리(디지털 클러스터)"
        // style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1400}
        footer={[
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Col span={12}>
            <TitleComp>평가 계획</TitleComp>
          </Col>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="사업연도" span={2}>
                {evlAsmt?.a}
              </Descriptions.Item>
              <Descriptions.Item label="사업명">{evlAsmt?.b}</Descriptions.Item>
              <Descriptions.Item label="수행기관" span={2}>
                {evlAsmt?.c}
              </Descriptions.Item>
              <Descriptions.Item label="담당간사">
                {evlAsmt?.d}
              </Descriptions.Item>
              <Descriptions.Item label="평가계획명" span={2}>
                {evlAsmt?.e}
              </Descriptions.Item>
              <Descriptions.Item label="평가기간">
                {evlAsmt?.f} ~ {evlAsmt?.g}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Col span={12}>
            <TitleComp>배정 과제</TitleComp>
          </Col>
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

        <Row className="eu-row-comp-cont margin-top">
          <Col span={12}>
            <TitleComp>미 배정 과제 검색 조건</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              className="eu-btn-crud-fine"
              onClick={searchClick}
            >
              검색
            </Button>
          </Col>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="과제명">
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="기업명">
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'b');
                  }}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Col span={12}>
            <TitleComp>미 배정 과제</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              className="eu-btn-crud-fine"
              onClick={altmntAsmtClick}
            >
              배정
            </Button>
          </Col>
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
export default SptEvlPopup;
