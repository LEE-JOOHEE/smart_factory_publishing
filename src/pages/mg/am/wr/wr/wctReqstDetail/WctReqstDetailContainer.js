import React, { useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Input,
  Modal,
  Row,
  Select,
  Table,
} from 'antd';
import 'css/Common.css';
import WctReqstDetail01 from 'pages/mg/am/wr/wr/wctReqstDetail/comp/WctReqstDetail01';
import TitleComp from 'components/layout/TitleComp';
import WctReqst from 'pages/mg/am/wr/wr/wctReqstList/popup/WctReqst';
import { ojtChange } from 'components/common/Common';

const columns = [
  {
    title: '항목',
    dataIndex: 'a1',
  },
  {
    title: '허용파일',
    dataIndex: 'a2',
  },
  {
    title: '필수여부',
    dataIndex: 'a3',
  },
  {
    title: '첨부파일',
    dataIndex: 'a4',
  },
];
const data = [
  {
    a1: '변경신청 첨부문서',
    a2: '변경신청_첨부문서_양식.hwp',
    a3: '*.hwp, *.pdf, *.png, *.tif',
    a4: '변경신청 첨부문서_회사이름.hwp',
  },
];
const WctReqstDetailContainer = () => {
  const [wctReqstOpen, setWctReqstOpen] = useState(false);

  const [ojtDetailInfo, setOjtDetailInfo] = useState({});

  const rejectClick = () => {
    setWctReqstOpen(true);
  };
  const listClick = () => {
    Modal.info({ title: '목록 클릭' });
  };
  const confmClick = () => {
    Modal.info({ title: '승인 클릭' });
  };
  const givePrcsClick = () => {
    Modal.info({ title: '지급처리 클릭' });
  };
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <WctReqstDetail01 ojtDetailInfo={ojtDetailInfo} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Row className="eu-row-comp-title ">
            <Col span={12}>
              <TitleComp>은행 및 계좌번호</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Descriptions size="small" bordered>
                <Descriptions.Item label="은행">
                  <Select
                    placeholder="은행 선택"
                    value={ojtDetailInfo?.a9}
                    onChange={(value) =>
                      ojtChange(value, 'a9', setOjtDetailInfo)
                    }
                    options={[
                      {
                        value: '우리은행',
                        label: '우리은행',
                      },
                    ]}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="계좌번호">
                  <Input
                    value={ojtDetailInfo?.a10}
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a10', setOjtDetailInfo)
                    }
                  />
                </Descriptions.Item>
                <Descriptions.Item label="예금주">
                  <Input
                    value={ojtDetailInfo?.a11}
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a11', setOjtDetailInfo)
                    }
                  />
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>

          <Row className="eu-row-comp-title margin-top">
            <Col span={12}>
              <TitleComp>사업비 신청양식</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Table
                columns={columns}
                dataSource={data}
                size="small"
                bordered
                pagination={false}
                scroll={{ y: 120 }}
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
            onClick={givePrcsClick}
            className="eu-btn-process-default"
          >
            지급처리
          </Button>
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

export default React.memo(WctReqstDetailContainer);
