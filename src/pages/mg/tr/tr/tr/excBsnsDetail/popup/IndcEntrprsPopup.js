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

const IndcEntrprsPopup = ({
  indcEntrprsPopupOpen,
  setIndcEntrprsPopupOpen,
  key = null,
}) => {
  const [arrEntInputHnf, setArrEntInputHnf] = useState({
    a: "참여인력 탭에 등록된 인력과 기업정보(상세) '보유인력현황'의 총 인원 수와 불일치",
  });
  useEffect(() => {
    if (key) {
      // setArrEntInputHnf()
    }
  }, [key]);
  const confirmClick = () => {
    setIndcEntrprsPopupOpen(false);
  };
  const closeClick = () => {
    setIndcEntrprsPopupOpen(false);
  };

  return (
    <>
      <Modal
        open={indcEntrprsPopupOpen}
        title="도입기업 정보"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            size="middle"
            className="eu-btn-popup-process-fine"
            onClick={confirmClick}
          >
            확인
          </Button>,
          <Button
            key={'closeClick'}
            type="primary"
            size="middle"
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

            {/* [도입기업정보]기업제재코멘트 table 레이아웃 변경(2023-01-18) */}
            {/* <Table
              columns={entInputHnfColums}
              dataSource={arrEntInputHnf}
              size="small"
              bordered
              pagination={false}
            /> */}
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

export default IndcEntrprsPopup;
