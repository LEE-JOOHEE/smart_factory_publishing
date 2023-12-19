import React, { useEffect, useState } from 'react';
import {
  Button,
  Descriptions,
  Input,
  Modal,
  Row,
  Col,
  Table,
  Checkbox,
  Select,
  InputNumber,
  Space,
} from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd } from 'components/common/Common';

const SptHistPopup = ({
  cmEvlMfcmHstryPopupOpen,
  setCmEvlMfcmHstryPopupOpen,
}) => {
  //특별추천 조건설정
  const [ojtCmEvlMfcmHstry, setOjtCmEvlMfcmHstry] = useState({});
  //특별추천 평가위원 목록
  const [arrCmEvlMfcmHstry, setArrCmEvlMfcmHstry] = useState([]);

  const arrSpclRcmdtnColumns = [
    { title: '평가구분', dataIndex: 'a' },
    { title: '위원구분', dataIndex: 'b' },
    { title: '위원명', dataIndex: 'c' },
  ];

  const closeClick = () => {
    setCmEvlMfcmHstryPopupOpen(false);
  };

  useEffect(() => {
    setOjtCmEvlMfcmHstry({
      a: 'TEST과제_1',
      b: '도입기업 명',
    });

    let tmp = [];
    for (let idx = 1; idx <= 15; idx++) {
      tmp.push({
        key: idx,
        a: '현장평가',
        b: '정위원',
        c: '위원명',
      });
    }
    setArrCmEvlMfcmHstry(tmp);
  }, []);

  return (
    <>
      <Modal
        key="cmEvlMfcmHstry"
        open={cmEvlMfcmHstryPopupOpen}
        title="평가위원 이력"
        //onOk={handleOk}
        onCancel={closeClick}
        width={800}
        footer={[
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
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="과제명">
                {ojtCmEvlMfcmHstry?.a}
              </Descriptions.Item>
              <Descriptions.Item label="기업명" span={2}>
                {ojtCmEvlMfcmHstry?.b}
              </Descriptions.Item>
            </Descriptions>
          </Col>

          <Col span={24} className="mt-30">
            <Table
              key={'arrSpclRcmdtn'}
              columns={arrSpclRcmdtnColumns}
              dataSource={arrCmEvlMfcmHstry}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 300 }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default SptHistPopup;
