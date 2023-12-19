import React, { useEffect, useState } from 'react';
import { Button, Descriptions, Input, Modal, Row, Col, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const { TextArea } = Input;

const DlbrtTaskPopupPage = ({ asmtRegPopupOpen, setAsmtRegPopupOpen }) => {
  const [evlAsmt, setEvlAsmt] = useState({});

  const [arrAsmtAtchFile, setArrAsmtAtchFile] = useState([]);

  const [arrDgnsRptp, setArrDgnsRptp] = useState([]);

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

  const arrDgnsRptpColumn = [
    {
      title: '순번',
      dataIndex: 'a',
    },
    { title: '심사원', dataIndex: 'b' },
    { title: '차수', dataIndex: 'c' },
    { title: '파일명', dataIndex: 'd' },
    { title: '제출일자', dataIndex: 'e' },
    { title: '판정결과', dataIndex: 'f' },
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
    let tmp3 = [];
    for (let idx = 1; idx <= 5; idx++) {
      tmp3.push({
        key: idx,
        a: idx,
        b: `심사원${idx}`,
        c: `${idx}차`,
        d: '해당과제 진단보고서.hwp',
        e: '',
        f: '보완',
      });
    }
    setArrDgnsRptp(tmp3);
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
        title="심의위원회 평가결과 (수준확인사업)"
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1400}
        footer={null}
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
          <Col span={24}>
            <TitleComp>진단보고서</TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'arrDgnsRptp'}
              columns={arrDgnsRptpColumn}
              dataSource={arrDgnsRptp}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 210 }}
            />
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>심의위원회 과제별 종합의견</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              onClick={saveClick}
            >
              저장
            </Button>
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
export default DlbrtTaskPopupPage;
