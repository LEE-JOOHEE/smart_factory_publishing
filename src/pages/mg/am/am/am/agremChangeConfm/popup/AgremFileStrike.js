import React from 'react';
import { Button, Modal } from 'antd';
import 'css/Common.css';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';

const AgremFileStrike = ({ agremFileStrikeOpen, setAgremFileStrikeOpen }) => {
  const confirmClick = () => {
    setAgremFileStrikeOpen(false);
  };
  const closeClick = () => {
    setAgremFileStrikeOpen(false);
  };

  return (
    <>
      <Modal
        open={agremFileStrikeOpen}
        title="첨부파일 업로드"
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
        <CmAtchDoc title={'첨부파일 업로드'} />
      </Modal>
    </>
  );
};

export default AgremFileStrike;
