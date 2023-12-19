import React, { useState } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { ojtChange } from 'components/common/Common';
import AgremEstbsPopup from 'pages/mg/am/am/ap/agremPlanList/popup/AgremEstbsPopup';

const AgremPlanList02 = ({ arrAgremPlan }) => {
  // 테이블 헤더
  const arrAgremPlanColumns = [
    {
      title: '사업년도',
      dataIndex: 'a1',
    },
    {
      title: '수행사업',
      dataIndex: 'a2',
    },
    {
      title: '과제명',
      dataIndex: 'a3',
    },
    {
      title: '도입기업',
      dataIndex: 'a4',
    },
    {
      title: '공급기업',
      dataIndex: 'a5',
    },
    {
      title: '협약체결기간',
      dataIndex: 'a6',
    },
    {
      title: '사업시작일',
      dataIndex: 'a7',
    },
  ];

  const [agremEstbsPopupOpen, setAgremEstbsPopupOpen] = useState(false);
  // 지원사업 데이터
  const [ojtRqisitExmnt, setOjtRqisitExmnt] = useState({});

  const [tmpArrData, setTmpArrData] = useState([
    { a1: '협약기간', a2: ['2022-12-01', '2022-12-02'] },
    { a1: '사업시작일', a2: '2022-12-20' },
  ]);

  const rowSelection = {
    onChange: (_, selectedRows) => {
      ojtChange(selectedRows, 'key', setOjtRqisitExmnt);
    },
  };

  //검토 중
  const settingClick = () => {
    setAgremEstbsPopupOpen(true);
  };
  return (
    <>
      <Row className="eu-row-comp-title" gutter={[16, 16]}>
        <Col span={3}>
          <TitleComp>총 002건</TitleComp>
        </Col>
        <Col span={18}>
          ※ ■ 협약완료 * 협약계획 메뉴는 협약가능 기간을 설정하는 메뉴로서
          사업기간을 설정하는 기능은 아닙니다. 사업기간은 공급기업이 협약시
          입력합니다.
        </Col>
        <Col span={3} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={settingClick}
          >
            설정
          </Button>
        </Col>
      </Row>

      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 600 }}
            key={'AgremPlanList02Table'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrAgremPlanColumns}
            dataSource={arrAgremPlan}
            size="small"
            bordered
          />
        </Col>
      </Row>
      <AgremEstbsPopup
        agremEstbsPopupOpen={agremEstbsPopupOpen}
        setAgremEstbsPopupOpen={setAgremEstbsPopupOpen}
        arrAgremEstbs={tmpArrData}
      />
    </>
  );
};

export default AgremPlanList02;
