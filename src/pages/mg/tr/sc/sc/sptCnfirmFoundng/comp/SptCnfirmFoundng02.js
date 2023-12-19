import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';

import SptPlanPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptPlanPopup';
import SptBsnsPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptBsnsPopup';

import 'css/Common.css';

const SptCnfirmFoundng02 = ({ arrEvlPlan, dgtlVisibleClick }) => {
  const arrEvlPlanColumns = [
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
      title: '수행기관(TP)',
      dataIndex: 'd',
    },
    {
      title: '계획명',
      dataIndex: 'e',
      width: 250,
      render: (_, record) => {
        return (
          <Button
            type="link"
            size="small"
            onClick={() => {
              sptPlanOpenClick();
            }}
          >
            {record?.e}
          </Button>
        );
      },
    },
    {
      title: '평가기간',
      dataIndex: 'f',
      width: 180,
    },
    {
      title: '담당간사',
      dataIndex: 'g',
    },
    {
      title: '배정과제수',
      dataIndex: 'h',
    },
    {
      title: '평가위원 배정완료 과제수',
      dataIndex: 'i',
    },
    {
      title: '확정여부',
      dataIndex: 'j',
      render: (_, record) => {
        return (
          <Button type="link" size="small" onClick={dgtlVisibleClick}>
            {record?.j}
          </Button>
        );
      },
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedEvlPlanCfmtn(selectedRows);
    },
  };
  //평가계획생성팝업
  const [sptPlanPopupOpen, setSptPlanPopupOpen] = useState(false);
  //사업별 배정현황조회 팝업
  const [cmEvlAltmntSttsOpen, setCmEvlAltmntSttsOpen] = useState(false);

  const sptPlanOpenClick = () => {
    setSptPlanPopupOpen(true);
  };
  const evlAltmntSttsClick = () => {
    setCmEvlAltmntSttsOpen(true);
  };

  //평가계획확정 클릭
  const [arrCheckedEvlPlanCfmtn, setArrCheckedEvlPlanCfmtn] = useState([]);

  const evlPlanCfmtnClick = () => {
    Modal.info({
      title: JSON.stringify(arrCheckedEvlPlanCfmtn),
    });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={3}>
          <TitleComp>평가계획</TitleComp>
        </Col>
        <Col span={9}>총 {arrEvlPlan ? arrEvlPlan.length : 0}건</Col>
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
            onClick={sptPlanOpenClick}
          >
            평가계획생성
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={evlPlanCfmtnClick}
          >
            평가계획확정
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrEvlPlanColumns}
            dataSource={arrEvlPlan}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Col>
      </Row>
      <SptPlanPopup
        key={'SptPlanPopup'}
        sptPlanPopupOpen={sptPlanPopupOpen}
        setSptPlanPopupOpen={setSptPlanPopupOpen}
      />
      <SptBsnsPopup
        key={'SptBsnsPopup'}
        cmEvlAltmntSttsOpen={cmEvlAltmntSttsOpen}
        setCmEvlAltmntSttsOpen={setCmEvlAltmntSttsOpen}
      />
    </>
  );
};

export default SptCnfirmFoundng02;
