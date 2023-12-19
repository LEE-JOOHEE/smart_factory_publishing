import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';

import TechPlanPopup from 'pages/mg/tr/te/ec/techEvlCmit/popup/TechPlanPopup';

import 'css/Common.css';

const TechEvlCmit03 = ({}) => {
  const arrScmitCmpstnColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: '7%',
      align: 'center',
    },
    {
      title: '분과명',
      dataIndex: 'b',
      width: '13%',
      render: (_, record) => {
        return (
          <Button
            type="link"
            className="eu-btn-link"
            onClick={() => {
              scmitCmpstnClick();
            }}
          >
            {record?.b}
          </Button>
        );
      },
    },
    {
      title: '평가장소',
      dataIndex: 'c',
      width: '24%',
    },
    {
      title: '담당간사',
      dataIndex: 'd',
      width: '11%',
      align: 'center',
    },
    {
      title: '분과평가일자',
      dataIndex: 'e',
      width: '15%',
      align: 'center',
    },
    {
      title: '과제수',
      dataIndex: 'f',
      width: '8%',
      align: 'center',
    },
    {
      title: '평가위원수',
      dataIndex: 'g',
      width: '11%',
      align: 'center',
    },
    {
      title: '확정여부',
      dataIndex: 'h',
      width: '9%',
      align: 'center',
    },
  ];

  const [arrScmitCmpstn, setArrScmitCmpstn] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedScmitCfmtn(selectedRows);
    },
  };

  //분과생성팝업
  const [scmitCmpstnPopupOpen, setScmitCmpstnPopupOpen] = useState(false);
  const scmitCmpstnClick = () => {
    setScmitCmpstnPopupOpen(true);
  };

  //분과확정 클릭
  const [arrCheckedScmitCfmtn, setArrCheckedScmitCfmtn] = useState([]);
  const ScmitCfmtnClick = () => {
    Modal.info({
      title: '분과확정클릭 : \n' + JSON.stringify(arrCheckedScmitCfmtn),
    });
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx <= 3; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '분과명' + idx,
        c: '추진단/본원(대전)/제3평가장',
        d: '간사명',
        e: '2022-10-01',
        f: '3',
        g: '5',
        h: 'N',
      });
    }
    setArrScmitCmpstn(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24} className="title-0">
          <TitleComp>분과구성</TitleComp>
        </Col>
        <Col span={6} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrScmitCmpstn ? arrScmitCmpstn.length : 0}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={18} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            onClick={scmitCmpstnClick}
          >
            분과생성
          </Button>
          <Button
            className="eu-btn-crud-warning"
            onClick={ScmitCfmtnClick}
          >
            분과확정
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrScmitCmpstnColumns}
            dataSource={arrScmitCmpstn}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200 }}
          /> 
        </Col>
      </Row>
      <TechPlanPopup
        key={'TechPlanPopup'}
        scmitCmpstnPopupOpen={scmitCmpstnPopupOpen}
        setScmitCmpstnPopupOpen={setScmitCmpstnPopupOpen}
      />
    </>
  );
};
export default TechEvlCmit03;
