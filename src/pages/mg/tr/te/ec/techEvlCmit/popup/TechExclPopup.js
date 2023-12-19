import React, { useEffect, useState } from 'react';
import { Button, Descriptions, Input, Modal, Row, Col, Table } from 'antd';
import 'css/Common.css';

const { TextArea } = Input;

const arrCheckedEvlMfcmColumns = [
  { title: '평가구분', dataIndex: 'a' },
  { title: '위원구분', dataIndex: 'b' },
  { title: '위원명', dataIndex: 'c' },
];

const TechExclPopup = ({
  arrCheckedEvlMfcm,
  cmEvlExclRsnPopupOpen,
  setCmEvlExclRsnPopupOpen,
}) => {
  const closeClick = () => {
    setCmEvlExclRsnPopupOpen(false);
  };
  const [exclRsn, setExclRsn] = useState('');
  const ojtExclCntChange = (value) => {
    setExclRsn(value);
  };
  const exclClick = () => {
    Modal.info({
      title: '제외',
    });
  };

  useEffect(() => {
    console.log('exclRsn : ', exclRsn);
  }, [exclRsn]);

  return (
    <>
      <Modal
        key="SptExclPopup"
        open={cmEvlExclRsnPopupOpen}
        title="평가위원 제외 사유 입력"
        //onOk={handleOk}
        onCancel={closeClick}
        width={800}
        footer={[
          <Button
            key={'Excl'}
            className="eu-btn-popup-process-warning"
            onClick={exclClick}
          >
            제외
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
          <Row className="eu-row-comp-title"></Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="제외사유" span={3}>
                <TextArea
                  rows={3}
                  onChange={(evt) => {
                    ojtExclCntChange(evt.target.value);
                  }}
                  value={exclRsn && exclRsn}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default TechExclPopup;
