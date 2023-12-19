import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import LevelPresentnPopup from 'pages/usr/bm/aw/lp/levelPresentation/popup/LevelPresentnPopup';

const SprvisnChangeList02 = ({ arrAsmtLst, setOjtKey, setPageType }) => {
  const columns = [
    { title: '사업연도', dataIndex: 'a1' },
    { title: '사업명', dataIndex: 'a2' },
    { title: '과제명', dataIndex: 'a3' },
    { title: '도입기업', dataIndex: 'a4' },
    { title: 'IT공급기업', dataIndex: 'a5' },
    { title: '승인여부', dataIndex: 'a6' },
    {
      title: '보고서상태',
      dataIndex: 'a7',
      render: (_, record, index) => {
        return (
          <>
            <Button
              type="link"
              size="small"
              onClick={(event) => {
                console.log(record, index);
                setOjtKey(record);
                setPageType('SPRVISN_CHANGE_DTLS');
              }}
            >
              조회
            </Button>
          </>
        );
      },
    },
  ];

  const [levelPresentnPopupOpen, setLevelPresentnPopupOpen] = useState(false);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>과제 목록</TitleComp>
          {`총 ${arrAsmtLst.length}건`}
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'SprvisnChangeList02'}
            columns={columns}
            dataSource={arrAsmtLst}
            size="small"
            bordered
            scroll={{ y: 700 }}
          />
        </Col>
      </Row>

      <LevelPresentnPopup
        levelPresentnPopupOpen={levelPresentnPopupOpen}
        setLevelPresentnPopupOpen={setLevelPresentnPopupOpen}
      />
    </>
  );
};

export default SprvisnChangeList02;
