import React, { useEffect, useState } from 'react';
import { Button, Col, Descriptions, Input, Modal, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import { ojtChange } from 'components/common/Common';

import 'css/Common.css';

const RsltIdxCpyPopup = ({ rsltIdxCpyPopupOpen, setRsltIdxCpyPopupOpen }) => {
  const confirmClick = () => {
    Modal.info({ title: '저장' });
  };
  const closeClick = () => {
    setRsltIdxCpyPopupOpen(false);
  };

  //성과지표
  const [ojtRsltIdx, seOjtRsltIdx] = useState({});

  // Onload
  useEffect(() => {
    seOjtRsltIdx({
      a1: '',
      a2: '',
    });
  }, []);

  return (
    <>
      <Modal
        open={rsltIdxCpyPopupOpen}
        title="성과지표 그룹 관리"
        onOk={confirmClick}
        onCancel={closeClick}
        width={800}
        footer={[
          <Button
            key={'confirmClick'}
            size="middle"
            className="eu-btn-popup-process-fine"
            onClick={confirmClick}
          >
            저장
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
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="사업연도" span={3}>
                <Input
                  value={ojtRsltIdx?.a1}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a1', seOjtRsltIdx)
                  }
                />
              </Descriptions.Item>
              <Descriptions.Item label="성과지표 그룹명" span={3}>
                <Input
                  value={ojtRsltIdx?.a2}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a2', seOjtRsltIdx)
                  }
                />
              </Descriptions.Item>
              <Descriptions.Item label="" span={3}></Descriptions.Item>
              <Descriptions.Item label="" span={3}></Descriptions.Item>
              <Descriptions.Item label="" span={3}></Descriptions.Item>
              <Descriptions.Item label="" span={3}></Descriptions.Item>
              <Descriptions.Item label="" span={3}></Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default RsltIdxCpyPopup;
