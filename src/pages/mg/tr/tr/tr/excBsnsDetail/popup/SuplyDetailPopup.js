import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table, Descriptions } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import CmAplyAsmtHstry from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtHstry';

const entInputHnfColums = [
  {
    title: '기업제재코멘트',
    dataIndex: 'a',
  },
];
const entPunishmentInfoColums = [
  {
    title: '순번',
    dataIndex: 'a1',
    width: '6%',
    align: 'center',
  },

  {
    title: '성명',
    dataIndex: 'a2',
    width: '10%',
  },
  {
    title: '생년월일',
    dataIndex: 'a3',
    width: '15%',
  },
  {
    title: '휴대전화번호',
    dataIndex: 'a4',
    width: '17%',
  },
  {
    title: 'SW 기술자등급 또는 직무',
    dataIndex: 'a5',
    children: [
      {
        title: '신청등급',
        dataIndex: 'a51',
        width: '13%',
      },
      {
        title: '승인등급',
        dataIndex: 'a52',
        width: '13%',
      },
    ],
  },
  {
    title: '근무경력',
    dataIndex: 'a5',
    width: '12%',
  },

  {
    title: '상태',
    dataIndex: 'a6',
    width: '14%',
  },
];

const SuplyDetailPopup = ({
  suplyDetailOpen,
  setSuplyDetailOpen,
  key = null,
}) => {
  const [arrEntInputHnf, setArrEntInputHnf] = useState({
    a: "참여인력 탭에 등록된 인력과 기업정보(상세) '보유인력현황'의 총 인원 수와 불일치",
  });

  const [arrEntPunishmentInfo, setArrEntPunishmentInfo] = useState([
    {
      a1: '1',
      a2: '홍길동',
      a3: '1968-01-27',
      a4: '010-1111-1111',
      a51: '특급기술자',
      a52: '특급기술자',
      a6: '25년 1개월',
      a7: '승인',
    },
    {
      a1: '2',
      a2: '김철수',
      a3: '1970-03-15',
      a4: '010-2222-2222',
      a51: '고급기술자',
      a52: '고급기술자',
      a6: '8년 2개월',
      a7: '승인',
    },
    {
      a1: '3',
      a2: '아무개',
      a3: '1995-12-06',
      a4: '010-3333-3333',
      a51: '초급기술자',
      a52: '초급기술자',
      a6: '3년 6개월',
      a7: '승인',
    },
  ]);

  useEffect(() => {
    if (key) {
      // setArrEntInputHnf()
      // setArrEntPunishmentInfo()
    }
  }, [key]);

  const confirmClick = () => {
    setSuplyDetailOpen(false);
  };
  const closeClick = () => {
    setSuplyDetailOpen(false);
  };

  return (
    <>
      <Modal
        open={suplyDetailOpen}
        title="과제신청 첨부문서"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            className="eu-btn-popup-process-fine"
            onClick={confirmClick}
          >
            확인
          </Button>,
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title">기업제재정보-(공급기업명)</Row>
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="기업제재코멘트" span={3}>
                {arrEntInputHnf?.a}
              </Descriptions.Item>
            </Descriptions>

            {/* [공급기업]기업제재코멘트 table 레이아웃 변경(2023-01-18) */}
            {/* <Table
              scroll={{ y: 300 }}
              columns={entInputHnfColums}
              dataSource={arrEntInputHnf}
              size="small"
              bordered
              pagination={false}
            /> */}
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">기업투입인력-(공급기업명)</Row>
          <Col span={24}>
            <Table
              scroll={{ y: 300 , x: 900 }}
              columns={entPunishmentInfoColums}
              dataSource={arrEntPunishmentInfo}
              size="small"
              bordered
              pagination={false}
            />
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Col span={24} className="other">
            {/* 참여과제이력 */}
            <CmAplyAsmtHstry key={key} />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default SuplyDetailPopup;
