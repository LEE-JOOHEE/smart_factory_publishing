import React, { useState } from 'react';
import { Col, Row, Button, Modal, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import DlbrtRegistPopupPage from 'pages/mg/tr/sc/dc/dlbrtMtrRegist/popup/DlbrtRegistPopupPage';
import SptBsnsPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptBsnsPopup';

const DlbrtMtrRegist02 = ({ arrDlbrCmit, dlbrCmitRowClick }) => {
  //심의워원회 checked
  const [arrCheckedDlbrCmit, setArrCheckedDlbrCmit] = useState([]);
  const arrDlbrCmitColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: 50,
      align: 'center',
    },
    {
      title: '사업년도',
      dataIndex: 'b',
    },
    {
      title: '사업명',
      dataIndex: 'c',
    },
    {
      title: '수행기관',
      dataIndex: 'd',
    },
    {
      title: '심의위원회명',
      dataIndex: 'e',
      width: 250,
      render: (_, record) => {
        return (
          <Button type="link" size="small" onClick={dlbrtCmitOpenClick}>
            {record?.e}
          </Button>
        );
      },
    },
    {
      title: '심의일자',
      dataIndex: 'f',
      width: 180,
    },
    {
      title: '심의담당자',
      dataIndex: 'g',
    },
    {
      title: '배정과제수',
      dataIndex: 'h',
    },
    {
      title: '확정여부',
      dataIndex: 'i',
      render: (_, record) => {
        return (
          <Button type="link" size="small" onClick={dlbrCmitRowClick}>
            {record?.i}
          </Button>
        );
      },
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedDlbrCmit(selectedRows);
    },
  };

  //심의위원회 등록 팝업
  const [dlbrCmitPopupOpen, setDlbrCmitPopupOpen] = useState(false);
  //사업별 배정현황조회 팝업
  const [cmEvlAltmntSttsOpen, setCmEvlAltmntSttsOpen] = useState(false);

  const dlbrtCmitOpenClick = () => {
    setDlbrCmitPopupOpen(true);
  };
  const evlAltmntSttsClick = () => {
    setCmEvlAltmntSttsOpen(true);
  };

  const dlbrCmitCfmtnClick = () => {
    Modal.info({
      title: JSON.stringify(arrCheckedDlbrCmit),
    });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>심의위원회</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={evlAltmntSttsClick}
          >
            사업별 배정현황 조회
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={dlbrtCmitOpenClick}
          >
            심의위원회 등록
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={dlbrCmitCfmtnClick}
          >
            심의위원회 확정
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrDlbrCmitColumns}
            dataSource={arrDlbrCmit}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Col>
      </Row>
      <DlbrtRegistPopupPage
        key={'DlbrtRegistPopupPage'}
        sptPlanPopupOpen={dlbrCmitPopupOpen}
        setSptPlanPopupOpen={setDlbrCmitPopupOpen}
      />
      <SptBsnsPopup
        key={'SptBsnsPopup'}
        cmEvlAltmntSttsOpen={cmEvlAltmntSttsOpen}
        setCmEvlAltmntSttsOpen={setCmEvlAltmntSttsOpen}
      />
    </>
  );
};

export default DlbrtMtrRegist02;
