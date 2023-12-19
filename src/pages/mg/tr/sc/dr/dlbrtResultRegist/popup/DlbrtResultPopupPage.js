import React, { useEffect, useState } from 'react';
import { Button, Descriptions, Input, Modal, Row, Col, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const { TextArea } = Input;

const DlbrtResultPopupPage = ({ asmtRegPopupOpen, setAsmtRegPopupOpen }) => {
  const [evlAsmt, setEvlAsmt] = useState({});
  const [ojtEvlRslt, setOjtEvlRslt] = useState({});

  const [arrMfcmEvlScr, setArrMfcmEvlScr] = useState([]);

  const [arrAsmtAtchFile, setArrAsmtAtchFile] = useState([]);

  const arrMfcmEvlScrColumn = [
    {
      title: '위원명',
      dataIndex: 'a',
      align: 'center',
      width: 300,
    },
    { title: '점수', dataIndex: 'b' },
    { title: '평가의견', dataIndex: 'c' },
  ];
  const arrAsmtAtchFileColumn = [
    {
      title: '순번',
      dataIndex: 'a',
      align: 'center',
      width: 50,
    },
    { title: '파일명', dataIndex: 'b', width: 80 },
    { title: '파일크기', dataIndex: 'c', width: 200 },
  ];

  const closeClick = () => {
    setAsmtRegPopupOpen(false);
  };

  const [arrCheckedAsmtAtchFile, setArrCheckedAsmtAtchFile] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedAsmtAtchFile(selectedRows);
    },
  };

  useEffect(() => {
    setEvlAsmt({
      a: '2022',
      b: '사업명',
      c: '수행기관명',
      d: '심의위원회 명',
      e: '2022-XXX-XXX-XXXXXX',
      f: '수준확인사업',
    });
    let tmp1 = [];
    for (let idx = 1; idx <= 3; idx++) {
      tmp1.push({
        key: idx,
        a: `위원${idx}`,
        b: '80',
        c: '평가의견',
      });
    }
    tmp1.push({
      key: 4,
      a: '위원장 종합의견',
      b: '85',
      c: '위원장 평가의견',
    });
    setArrMfcmEvlScr(tmp1);

    let tmp2 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp2.push({
        key: idx,
        a: idx,
        b: '해당과제 심의결과.hwp',
        c: '2048',
      });
    }
    setArrAsmtAtchFile(tmp2);
    setOjtEvlRslt({
      a: '90',
      b: '50',
      c: '선정예정',
      d: '80',
      e: '50',
      f: '0',
      g: '85',
      h: '3',
      i: '0',
      j: '88',
      k: '선정예정',
      l: '적합',
      m: '선정예정',
    });
  }, []);

  const [gnrlzOpnn, setGnrlzOpnn] = useState();
  const saveClick = () => {
    Modal.info({
      title: `saveClick ${gnrlzOpnn}`,
    });
  };

  const insertClick = () => {
    Modal.info({
      title: `insertClick`,
    });
  };
  const deleteClick = () => {
    Modal.info({
      title: `deleteClick`,
    });
  };
  return (
    <>
      <Modal
        key="DlbrtMtrRegist06"
        open={asmtRegPopupOpen}
        title="심의위원회 평가결과"
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1400}
        footer={[
          <>
            <Button
              size="middle"
              className="eu-btn-popup-process-warning"
              onClick={saveClick}
            >
              저장
            </Button>
            <Button
              key={'closeClick'}
              type="primary"
              size="middle"
              className="eu-btn-popup-process-default"
              onClick={closeClick}
            >
              닫기
            </Button>
          </>,
        ]}
      >
        <Row className="eu-row-comp-title">
          <Col span={12}>
            <TitleComp>과제 기본정보</TitleComp>
          </Col>
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
              <Descriptions.Item label="과제번호" span={2}>
                {evlAsmt?.e}
              </Descriptions.Item>
              <Descriptions.Item label="과제명">{evlAsmt?.f}</Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>평가결과</TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions layout="vertical" bordered column={13}>
              <Descriptions.Item label="현장평가 점수">
                {ojtEvlRslt?.a}
              </Descriptions.Item>
              <Descriptions.Item label="현장평가 반영">
                {ojtEvlRslt?.b}
              </Descriptions.Item>
              <Descriptions.Item label="현장평가 결과">
                {ojtEvlRslt?.c}
              </Descriptions.Item>
              <Descriptions.Item label="기술설평가 점수">
                {ojtEvlRslt?.d}
              </Descriptions.Item>
              <Descriptions.Item label="기술성평가 반영">
                {ojtEvlRslt?.e}
              </Descriptions.Item>
              <Descriptions.Item label="일자리평가 점수">
                {ojtEvlRslt?.f}
              </Descriptions.Item>
              <Descriptions.Item label="최종 점수">
                {ojtEvlRslt?.g}
              </Descriptions.Item>
              <Descriptions.Item label="최종 가점">
                {ojtEvlRslt?.h}
              </Descriptions.Item>
              <Descriptions.Item label="뿌리 가점">
                {ojtEvlRslt?.i}
              </Descriptions.Item>
              <Descriptions.Item label="종합 점수">
                {ojtEvlRslt?.j}
              </Descriptions.Item>
              <Descriptions.Item label="기술성평가 결과">
                {ojtEvlRslt?.k}
              </Descriptions.Item>
              <Descriptions.Item label="현장확인 적합성">
                {ojtEvlRslt?.l}
              </Descriptions.Item>
              <Descriptions.Item label="현장확인 결과">
                {ojtEvlRslt?.m}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={24}>
            <TitleComp>위원별 평가점수 및 의견</TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'arrUnAltmntAsmt'}
              columns={arrMfcmEvlScrColumn}
              dataSource={arrMfcmEvlScr}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 210 }}
            />
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={24}>
            <TitleComp>심의위원회 과제별 종합의견</TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <TextArea
              placeholder={'심의위원회의 과제별 종합의견'}
              onChange={(e) => setGnrlzOpnn(e.target.value)}
            />
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>심의위원회 과제별 첨부파일</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              onClick={insertClick}
            >
              추가
            </Button>
            <Button
              size="small"
              className="eu-btn-crud-error"
              onClick={deleteClick}
            >
              삭제
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'arrUnAltmntAsmt'}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              columns={arrAsmtAtchFileColumn}
              dataSource={arrAsmtAtchFile}
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
export default DlbrtResultPopupPage;
