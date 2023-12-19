import React, { useEffect, useState } from 'react';
import { Button, Col, Descriptions, Modal, Row, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import WctReqst from 'pages/mg/am/wr/wr/wctReqstList/popup/WctReqst';
const columns = [
  {
    title: '항목',
    dataIndex: 'a1',
  },
  {
    title: '양식',
    dataIndex: 'a2',
  },
  {
    title: '허용파일',
    dataIndex: 'a3',
  },
  {
    title: '필수여부',
    dataIndex: 'a4',
  },
  {
    title: '첨부파일',
    dataIndex: 'a5',
  },
];
const data = [
  {
    a1: '착수계',
    a2: '',
    a3: '*.hwp, *.pdf, *.png, *.tif',
    a4: 'O',
    a5: 'pdf',
  },
];
const ReprtRceptDetailContainer = ({ setPageType, ojtKey, setOjtKey }) => {
  const [ojtTaskInfo, setOjtTaskInfo] = useState({
    a1: '2021-I2R-023-000001',
    a2: '스마트공장 구축',
    a3: '2021_스마트공장 구축 및 고도화',
    a4: '홍길동',
    a5: '(주)도입기업',
    a6: '(주)공급기업',
    a7: '(주)공급기업_스마트공장 구축 고도화',
  });

  const [wctReqstOpen, setWctReqstOpen] = useState(false);
  const rejectClick = () => {
    setWctReqstOpen(true);
  };
  const updateClick = () => {
    Modal.info({ title: '수정 클릭' });
  };
  const listClick = () => {
    setPageType('LIST');
  };
  const confmClick = () => {
    Modal.info({ title: '승인 클릭' });
  };
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Row className="eu-row-comp-title">
            <Col span={12}>
              <TitleComp>과제 정보</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Descriptions size="small" bordered>
                <Descriptions.Item label="과제번호" span={1.5}>
                  {ojtTaskInfo?.a1}
                </Descriptions.Item>
                <Descriptions.Item label="과제구분" span={1.5}>
                  {ojtTaskInfo?.a2}
                </Descriptions.Item>
                <Descriptions.Item label="사업명" span={1.5}>
                  {ojtTaskInfo?.a3}
                </Descriptions.Item>
                <Descriptions.Item label="신청자" span={1.5}>
                  {ojtTaskInfo?.a4}
                </Descriptions.Item>
                <Descriptions.Item label="도입기업" span={1.5}>
                  {ojtTaskInfo?.a5}
                </Descriptions.Item>
                <Descriptions.Item label="공급기업" span={1.5}>
                  {ojtTaskInfo?.a6}
                </Descriptions.Item>
                <Descriptions.Item label="과제명" span={3}>
                  {ojtTaskInfo?.a7}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <Row className="eu-row-comp-title margin-top">
            <Col span={12}>
              <TitleComp>첨부파일</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Table
                scroll={{ y: 300 }}
                key={'ReprtRceptDetailTable'}
                columns={columns}
                dataSource={data}
                size="small"
                bordered
                pagination={false}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button
            type="primary"
            size="large"
            onClick={confmClick}
            className="eu-btn-process-fine"
          >
            승인
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={updateClick}
            className="eu-btn-process-warning"
          >
            수정
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={rejectClick}
            className="eu-btn-process-error"
          >
            반려
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={listClick}
            className="eu-btn-process-default"
          >
            목록
          </Button>
        </Col>
      </Row>
      <WctReqst setWctReqstOpen={setWctReqstOpen} wctReqstOpen={wctReqstOpen} />
    </>
  );
};

export default React.memo(ReprtRceptDetailContainer);
