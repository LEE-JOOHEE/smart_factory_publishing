import React, { useEffect, useState } from 'react';
import {
  Col,
  Row,
  Button,
  Select,
  Input,
  Descriptions,
  Checkbox,
  Modal,
  Table,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const SprvisnChangeDtls01 = ({ ojtReqstInfo, setOjtKey, setPageType }) => {
  const columns = [
    {
      title: '번호',
      dataIndex: 'a1',
    },
    {
      title: '제목',
      dataIndex: 'a2',
      render: (_, record, index) => {
        return (
          <>
            <Button
              type="link"
              size="small"
              onClick={(event) => {
                console.log(record, index);
                setOjtKey(record);
                setPageType('SPRVISN_CHANGE_DETAIL');
              }}
            >
              {record.a2}
            </Button>
          </>
        );
      },
    },
    {
      title: '변경요청항목',
      dataIndex: 'a3',
    },
    {
      title: '변경요청일',
      dataIndex: 'a4',
    },
    {
      title: '상태',
      dataIndex: 'a5',
    },
  ];

  const [arrChgDsctn, setChgDsctn] = useState([]);

  const chgAplyClick = () => {
    Modal.info({ title: '변경신청 클릭' });
    setOjtKey();
    setPageType('SPRVISN_CHANGE_REQST');
  };

  //공통코드 초기화
  useEffect(() => {
    let tmp1 = [];

    for (let idx = 0; idx < 20; idx++) {
      tmp1.push({
        key: idx,
        a1: 20 - idx,
        a2: '감리일정변경',
        a3: '일정변경',
        a4: '2022-02-01',
        a5: '신청',
      });
    }
    setChgDsctn(tmp1);
  }, []);
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
            <Descriptions.Item label="사업연도" span={1.5}>
              {ojtReqstInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={1.5}>
              {ojtReqstInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={1.5}>
              {ojtReqstInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={1.5}>
              {ojtReqstInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtReqstInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="IT공급기업" span={1.5}>
              {ojtReqstInfo?.a6}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>감리변경내역</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-usr-btn-crud-fine"
            size="small"
            onClick={() => {
              chgAplyClick();
            }}
          >
            변경신청
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrChgDsctn}
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

export default SprvisnChangeDtls01;
