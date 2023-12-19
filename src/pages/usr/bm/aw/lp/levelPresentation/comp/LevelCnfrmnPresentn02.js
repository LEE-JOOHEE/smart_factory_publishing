import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import LevelPresentnPopup from 'pages/usr/bm/aw/lp/levelPresentation/popup/LevelPresentnPopup';

const LevelCnfrmnPresentn02 = ({ arrAsmtLst, setOjtKey, setPageType }) => {
  const columns = [
    { title: '사업연도', dataIndex: 'a1' },
    { title: '과제번호', dataIndex: 'a2' },
    { title: '사업명', dataIndex: 'a3' },
    { title: '과제명', dataIndex: 'a4' },
    { title: '도입기업', dataIndex: 'a5' },
    { title: '심사원명', dataIndex: 'a6' },
    {
      title: '제출상태',
      dataIndex: 'a7',
      render: (_, record, index) => {
        return (
          <>
            <Button
              className="eu-usr-btn-table-fine"
              size="small"
              onClick={(event) => {
                console.log(record, index);
                setOjtKey(record);
                setPageType('LEVEL_CNFRMN_DETAIL');
                event.stopPropagation();
              }}
            >
              미등록
            </Button>
          </>
        );
      },
    },
    { title: '수준확인결과등록', dataIndex: 'a8' },
  ];
  useEffect(() => {
    if (arrAsmtLst && arrAsmtLst.length > 0 && selKey === '') setSelKey(0);
  }, [arrAsmtLst]);

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
            key={'LevelCnfrmnPresentn02'}
            columns={columns}
            dataSource={arrAsmtLst}
            size="small"
            onRow={(record, index) => ({
              onClick: () => {
                //프로세스 처리를 위한 클릭 이벤트 호출
                // 3/3 행 선택 시 색상 변경을 위한 키값 저장
                setLevelPresentnPopupOpen(true);
                setSelKey(index);
              },
            })}
            rowClassName={(_, idx) =>
              idx === selKey ? 'eu-table-select-row' : 'eu-table-un-select-row'
            }
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

export default LevelCnfrmnPresentn02;
