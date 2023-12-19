import React, { useState } from 'react';
import {
  Checkbox,
  Col,
  Descriptions,
  Row,
  Tabs,
  Input,
  Table,
  Button,
  Modal,
} from 'antd';
import 'css/Common.css';
import AgremChangeRcept01 from 'pages/mg/am/am/am/agremChangeRcept/comp/AgremChangeRcept01';
import TitleComp from 'components/layout/TitleComp';
import AgremChangeRcept02 from 'pages/mg/am/am/am/agremChangeRcept/comp/AgremChangeRcept02';
import AgremChangeRcept03 from 'pages/mg/am/am/am/agremChangeRcept/comp/AgremChangeRcept03';
import AgremChangeRcept04 from 'pages/mg/am/am/am/agremChangeRcept/comp/AgremChangeRcept04';
import AgremChangeRcept05 from 'pages/mg/am/am/am/agremChangeRcept/comp/AgremChangeRcept05';
import AgremFileStrike from 'pages/mg/am/am/am/agremChangeConfm/popup/AgremFileStrike';
import { ojtChange } from 'components/common/Common';

const { TextArea } = Input;

const rltDcmntColums = [
  {
    title: '항목',
    dataIndex: 'a1',
  },
  {
    title: '허용파일',
    dataIndex: 'a2',
  },
  {
    title: '첨부파일',
    dataIndex: 'a3',
  },
];

const AgremChangeConfmContainer = () => {
  const agremDocColums = [
    {
      title: '항목',
      dataIndex: 'a1',
    },
    {
      title: '허용파일',
      dataIndex: 'a2',
    },
    {
      title: '첨부파일',
      dataIndex: 'a3',
      render: (_, record, index) => {
        console.log(record, index);
        return (
          <>
            {record.a3}
            <Button
              size="small"
              className="eu-btn-table-default"
              onClick={uploadClick}
            >
              업로드
            </Button>
          </>
        );
      },
    },
  ];

  const [agremFileStrikeOpen, setAgremFileStrikeOpen] = useState(false);
  const [arrRltDcmnt, setArrRltDcmnt] = useState([]);
  const [arrAgremDoc, setArrAgremDoc] = useState([]);

  const [ojtChangeCn, setOjtChangeCn] = useState({});

  const confmClick = () => {
    Modal.info({ title: '승인 클릭' });
  };
  const uploadClick = () => {
    Modal.info({ title: '업로드 팝업 클릭' });
    setAgremFileStrikeOpen(true);
  };
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Row className="eu-row-comp-title">
            <Col span={12}>
              <TitleComp>과제기본정보</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Descriptions size="small" bordered>
                <Descriptions.Item label="과제번호" span={3}>
                  {ojtChangeCn?.a1}
                </Descriptions.Item>
                <Descriptions.Item label="사업명" span={3}>
                  {ojtChangeCn?.a2}
                </Descriptions.Item>
                <Descriptions.Item label="과제명" span={3}>
                  {ojtChangeCn?.a3}
                </Descriptions.Item>
                <Descriptions.Item label="과제구분" span={1.5}>
                  {ojtChangeCn?.a4}
                </Descriptions.Item>
                <Descriptions.Item label="신청자" span={1.5}>
                  {ojtChangeCn?.a5}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <Row className="eu-row-comp-title margin-top">
            <Col span={12}>
              <TitleComp>변경내용</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Descriptions size="small" bordered>
                <Descriptions.Item label="변경(전)" span={1.5}>
                  <TextArea
                    value={ojtChangeCn?.a6}
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a6', setOjtChangeCn)
                    }
                  />
                </Descriptions.Item>
                <Descriptions.Item label="변경(후)" span={1.5}>
                  <TextArea
                    value={ojtChangeCn?.a7}
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a7', setOjtChangeCn)
                    }
                  />
                </Descriptions.Item>
                <Descriptions.Item label="사유" span={3}>
                  <TextArea
                    value={ojtChangeCn?.a8}
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a8', setOjtChangeCn)
                    }
                  />
                </Descriptions.Item>
                <Descriptions.Item label="변경항목" span={3}>
                  <Checkbox.Group
                    value={ojtChangeCn?.a9}
                    onChange={(value) => ojtChange(value, 'a9', setOjtChangeCn)}
                  >
                    <Checkbox value="사업비변경">사업비변경</Checkbox>
                    <Checkbox value="도입기업 공장 주소변경">
                      도입기업 공장 주소변경
                    </Checkbox>
                    <Checkbox value="구축기간 변경(1개월 이외)">
                      구축기간 변경(1개월 이외)
                    </Checkbox>
                    <Checkbox value="공급기업 변경">공급기업 변경</Checkbox>
                  </Checkbox.Group>
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <Row className="eu-row-comp-title margin-top">
            <Col span={12}>
              <TitleComp>관련서류</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Table
                scroll={{ y: 500 }}
                key={'AgremChangeRceptPageTable'}
                columns={rltDcmntColums}
                dataSource={arrRltDcmnt}
                size="small"
                bordered
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Tabs
            items={[
              {
                label: '사업비 변경',
                key: ' AgremChangeItem1',
                children: <AgremChangeRcept01 />,
              },
              {
                label: '도입기업 공장 주소',
                key: 'AgremChangeItem2',
                children: <AgremChangeRcept02 />,
              },
              {
                label: '구축기간 변경(1개월이외)',
                key: 'AgremChangeItem3',
                children: <AgremChangeRcept03 />,
              },
              {
                label: '공급기업 변경',
                key: 'AgremChangeItem4',
                children: <AgremChangeRcept04 />,
              },
              {
                label: '기타변경',
                key: 'AgremChangeItem5',
                children: <AgremChangeRcept05 />,
              },
            ]}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Row className="eu-row-comp-title margin-top">
            <Col span={12}>
              <TitleComp>협약 변경 승인 공문</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Table
                scroll={{ y: 500 }}
                key={'agremDocTable'}
                columns={agremDocColums}
                dataSource={arrAgremDoc}
                size="small"
                bordered
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          {/* 검토의견 */}
          <Row className="eu-row-comp-title margin-top">
            <Col span={12}>
              <TitleComp>검토의견</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Descriptions size="small" bordered>
                <Descriptions.Item label="검토의견" span={1.5}>
                  <TextArea
                    value={ojtChangeCn?.a11}
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a11', setOjtChangeCn)
                    }
                  />
                </Descriptions.Item>
                <Descriptions.Item label="반려사유" span={1.5}>
                  <TextArea
                    value={ojtChangeCn?.a12}
                    onChange={(e) =>
                      ojtChange(e.target.value, 'a12', setOjtChangeCn)
                    }
                  />
                </Descriptions.Item>
              </Descriptions>
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
            className="eu-btn-process-default"
          >
            승인
          </Button>
        </Col>
      </Row>

      <AgremFileStrike
        agremFileStrikeOpen={agremFileStrikeOpen}
        setAgremFileStrikeOpen={setAgremFileStrikeOpen}
      />
    </>
  );
};
export default React.memo(AgremChangeConfmContainer);
