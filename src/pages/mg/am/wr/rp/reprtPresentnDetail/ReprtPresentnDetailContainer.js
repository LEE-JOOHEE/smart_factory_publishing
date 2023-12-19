import React, { useState } from 'react';
import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Descriptions,
  Input,
  Modal,
  Row,
  Select,
  Table,
} from 'antd';
import 'css/Common.css';
import { ojtChange } from 'components/common/Common';
import TitleComp from 'components/layout/TitleComp';
import WctReqst from 'pages/mg/am/wr/wr/wctReqstList/popup/WctReqst';
import ReprtPresentnDetail01 from 'pages/mg/am/wr/rp/reprtPresentnDetail/comp/ReprtPresentnDetail01';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const data = [
  {
    a1: '착수계',
    a2: '',
    a3: '*.hwp, *.pdf, *.png, *.tif',
    a4: 'O',
  },
];
const ReprtPresentnDetailContainer = () => {
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
      render: (_, record, index) => {
        return (
          <>
            <Button
              className="eu-btn-table-fine"
              size="small"
              onClick={() => {
                console.log(record, index);
                atchClick();
              }}
            >
              첨부
            </Button>
            <Button
              className="eu-btn-table-fine"
              size="small"
              onClick={() => {
                console.log(record, index);
                deleteClick();
              }}
            >
              삭제
            </Button>
          </>
        );
      },
    },
    {
      title: '추가',
      dataIndex: 'a5',
      render: (_, record, index) => {
        return (
          <>
            <Button
              className="eu-btn-table-fine"
              size="small"
              onClick={() => {
                console.log(record, index);
                addClick();
              }}
            >
              추가
            </Button>
          </>
        );
      },
    },
  ];
  const [wctReqstOpen, setWctReqstOpen] = useState(false);

  const [ojtDetailInfo, setOjtDetailInfo] = useState({
    a1: '도입기업 승인',
    a2: '사업비(원가계산 확인필요) 수정요청',
    a3: '2021-I2R-023-000001',
    a4: '스마트공장 구축',
    a5: '2021_스마트공장 구축 및 고도화',
    a6: '홍길동',
    a7: '(주)도입기업',
    a8: '(주)공급기업',
    a9: '(주)공급기업_스마트공장 구축 고도화',
  });

  const addClick = () => {
    Modal.info({ title: '추가 클릭' });
  };
  const deleteClick = () => {
    Modal.info({ title: '삭제 클릭' });
  };
  const atchClick = () => {
    Modal.info({ title: '첨부 클릭' });
  };
  const rejectClick = () => {
    setWctReqstOpen(true);
  };
  const listClick = () => {
    Modal.info({ title: '목록 클릭' });
  };
  const confmClick = () => {
    Modal.info({ title: '승인 클릭' });
  };
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <ReprtPresentnDetail01 ojtDetailInfo={ojtDetailInfo} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Row className="eu-row-comp-title ">
            <Col>
              <TitleComp>기술설계 완료시점 등록</TitleComp>
            </Col>
            <Col span={12}>
              * 착수계 서류 안에 명시된 기술설계 완료시점을 등록 해주시기
              바랍니다.
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Descriptions size="small" bordered>
                <Descriptions.Item label="기술설계 완료시점">
                  <ConfigProvider locale={locale}>
                    <DatePicker
                      placeholder={'공고일자'}
                      onChange={(moment, dateString) => {
                        if (moment) {
                          console.log('공고일자: ', dateString);
                        }
                        ojtChange(dateString, 'a10', setOjtDetailInfo);
                      }}
                    />
                  </ConfigProvider>
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <Row className="eu-row-comp-title margin-top">
            <Col span={12}>
              <TitleComp>이행보증증권 만료일 등록</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Descriptions size="small" bordered>
                <Descriptions.Item label="이행보증증권 만료일">
                  <ConfigProvider locale={locale}>
                    <DatePicker
                      placeholder={'공고일자'}
                      onChange={(moment, dateString) => {
                        if (moment) {
                          console.log('공고일자: ', dateString);
                        }
                        ojtChange(dateString, 'a11', setOjtDetailInfo);
                      }}
                    />
                  </ConfigProvider>
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

export default React.memo(ReprtPresentnDetailContainer);
