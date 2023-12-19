import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import LevelPresentnPopup from 'pages/usr/bm/aw/lp/levelPresentation/popup/LevelPresentnPopup';

const ReprtPresentnList02 = ({ arrAsmtLst, setOjtKey, setPageType }) => {
  const columns = [
    { title: '순번', dataIndex: 'a1' },
    { title: '사업연도', dataIndex: 'a2' },
    { title: '사업명', dataIndex: 'a3' },
    { title: '과제번호', dataIndex: 'a4' },
    { title: '과제명', dataIndex: 'a5' },
    { title: '도입기업', dataIndex: 'a6' },
    { title: '담당자', dataIndex: 'a7' },
    { title: '보고서구분', dataIndex: 'a8' },
    {
      title: '보고서상태',
      dataIndex: 'a9',
      render: (_, record, index) => {
        return (
          <>
            <Button
              className="eu-usr-btn-table-fine"
              size="small"
              onClick={(event) => {
                console.log(record, index);
                setOjtKey(record);
                setPageType(record.a91);
                event.stopPropagation();
              }}
            >
              {record.a9}
            </Button>
          </>
        );
      },
    },
    { title: '감리결과', dataIndex: 'a10' },
    {
      title: '점검결과',
      dataIndex: 'a11',
      render: (_, record, index) => {
        return (
          <>
            {record.a11 ? (
              ''
            ) : (
              <Button
                className="eu-usr-btn-table-fine"
                size="small"
                onClick={(event) => {
                  console.log(record, index);
                  Modal.info({
                    title: '수정보고서 이동 - 변경예정으로 구현 X',
                  });
                }}
              >
                {record.a11}
              </Button>
            )}
          </>
        );
      },
    },
  ];

  const [selKey, setSelKey] = useState('');

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
            key={'ReprtPresentnList02'}
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

export default ReprtPresentnList02;
