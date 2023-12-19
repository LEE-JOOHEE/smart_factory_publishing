import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  Select,
  Input,
  Descriptions,
  Typography,
  Modal,
  Table,
  DatePicker,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const { Text } = Typography;
const ReprtPresentnOutset01 = ({ ojtOutsetInfo }) => {
  const [ojtOutsetDetail, setOjtOutsetDetailInfo] = useState({
    a1: '',
    a2: '',
  });

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
              className="eu-usr-btn-table-fine"
              size="small"
              onClick={() => {
                console.log(record, index);
                atchClick();
              }}
            >
              첨부
            </Button>
            <Button
              className="eu-usr-btn-table-error"
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
              className="eu-usr-btn-table-fine"
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

  const addClick = () => {
    Modal.info({ title: '추가 클릭' });
  };
  const deleteClick = () => {
    Modal.info({ title: '삭제 클릭' });
  };
  const atchClick = () => {
    Modal.info({ title: '첨부 클릭' });
  };
  const arrAttchFile = [
    {
      a1: '착수계',
      a2: '',
      a3: '*.hwp, *.pdf, *.png, *.tif',
      a4: 'O',
    },
    {
      a1: '착수계',
      a2: '',
      a3: '*.hwp, *.pdf, *.png, *.tif',
      a4: 'O',
    },
    {
      a1: '착수계',
      a2: '',
      a3: '*.hwp, *.pdf, *.png, *.tif',
      a4: 'O',
    },
    {
      a1: '착수계',
      a2: '',
      a3: '*.hwp, *.pdf, *.png, *.tif',
      a4: 'O',
    },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>과제정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={1.5}>
              {ojtOutsetInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="과제구분" span={1.5}>
              {ojtOutsetInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={1.5}>
              {ojtOutsetInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="신청자" span={1.5}>
              {ojtOutsetInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtOutsetInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업" span={1.5}>
              {ojtOutsetInfo?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={3}>
              {ojtOutsetInfo?.a7}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col>
          <TitleComp>기술설계 완료시점 등록</TitleComp>
        </Col>
        <Col span={12}>
          <Text type="danger">
            * 착수계 서류 안에 명시된 기술설계 완료시점을 등록 해주시기
            바랍니다.
          </Text>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="기술설계 완료시점" span={3}>
              <DatePicker
                placeholder={'완료시점'}
                onChange={(moment, dateString) => {
                  if (moment) {
                    console.log('완료시점: ', dateString);
                  }
                  ojtChange(dateString, 'a1', setOjtOutsetDetailInfo);
                }}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>이행보증증권 만료일 등록</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="이행보증증권 만료일" span={3}>
              <DatePicker
                placeholder={'만료일자'}
                onChange={(moment, dateString) => {
                  if (moment) {
                    console.log('만료일자: ', dateString);
                  }
                  ojtChange(dateString, 'a2', setOjtOutsetDetailInfo);
                }}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>첨부파일</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrAttchFile}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 120 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default ReprtPresentnOutset01;
