import React, { useEffect, useState } from 'react';
import { Button, Descriptions, Input, Modal, Row, Col, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const { TextArea } = Input;

const DlbrtResultPopupPage = ({ open, closeClick }) => {
  const [evlAsmt, setEvlAsmt] = useState({});
  const [arrAsmtAtchFile, setArrAsmtAtchFile] = useState([]);

  const arrAsmtAtchFileColumn = [
    {
      title: '순번',
      dataIndex: 'a',
      align: 'center',
      width: 50,
    },
    { title: '파일명', dataIndex: 'b', width: 80, align: 'center' },
    { title: '파일크기', dataIndex: 'c', width: 200, align: 'center' },
  ];

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

    let tmp2 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp2.push({
        key: idx,
        a: idx,
        b: '의결서.hwp',
        c: '2048',
      });
    }
    setArrAsmtAtchFile(tmp2);
  }, []);

  const saveClick = () => {
    Modal.info({
      title: `arrCheckedAsmtAtchFile: ${JSON.stringify(
        arrCheckedAsmtAtchFile
      )}`,
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
        open={open}
        title="심의위원회 평가결과"
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
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>심의위원회 첨부파일</TitleComp>
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
              scroll={{ y: 400 }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default DlbrtResultPopupPage;
