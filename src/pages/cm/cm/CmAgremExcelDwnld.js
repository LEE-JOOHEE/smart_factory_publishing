import React, { useEffect, useState } from 'react';
import { Button, Descriptions, Input, Modal, Select, Row, Col } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { getListCommonCd } from 'components/common/Common';
import 'css/Common.css';

const { TextArea } = Input;

const CmAgremExcelDwnld = ({
  cmAgremExcelDwnldOpen,
  setCmAgremExcelDwnldOpen,
}) => {
  //데이터
  const [ojtExclCnt, setOjtExclCnt] = useState({
    a: '',
    b: '',
  });

  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const excelDownloadClick = () => {
    Modal.info({
      title: 'Download',
    });
  };

  const ojtExclCntChange = (value, column) => {
    setOjtExclCnt((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const closeClick = () => {
    setCmAgremExcelDwnldOpen(false);
  };

  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a']));
  }, []);

  useEffect(() => {
    console.log('ojtExclCnt : ', ojtExclCnt);
  }, [ojtExclCnt]);

  return (
    <>
      <Modal
        key="CmAgremExcelDwnld"
        open={cmAgremExcelDwnldOpen}
        title="엑셀 다운로드"
        //onOk={handleOk}
        onCancel={closeClick}
        width={600}
        footer={[
          <Button
            key={'excelDownload'}
            className="eu-btn-excel-download"
            icon={<DownloadOutlined />}
            onClick={excelDownloadClick}
          >
            다운로드
          </Button>,
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            취소
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="업무구분" span={3}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtExclCntChange(value, 'a');
                  }}
                  options={[
                    {
                      value: '',
                      label: '선택',
                    },
                    ...(ojtExclCnt?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={ojtExclCnt?.a}
                />
              </Descriptions.Item>
              <Descriptions.Item label="상세내용" span={3}>
                <TextArea
                  rows={6}
                  onChange={(evt) => {
                    ojtExclCntChange(evt.target.value, 'b');
                  }}
                  value={ojtExclCnt?.b}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default CmAgremExcelDwnld;
