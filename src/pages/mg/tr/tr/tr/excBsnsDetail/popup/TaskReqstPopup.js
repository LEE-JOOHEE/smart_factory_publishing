import React from 'react';
import { Button, Modal } from 'antd';
import 'css/Common.css';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';

const TaskReqstPopup = ({ rceptPdOpen, setRceptPdOpen }) => {
  const confirmClick = () => {
    setRceptPdOpen(false);
  };
  const closeClick = () => {
    setRceptPdOpen(false);
  };

  return (
    <>
      <Modal
        open={rceptPdOpen}
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
        <CmAtchDoc title={'과제신청 첨부문서'} />
      </Modal>
    </>
  );
};

export default TaskReqstPopup;
