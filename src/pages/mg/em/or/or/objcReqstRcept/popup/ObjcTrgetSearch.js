import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Tabs,
} from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

import { getListCommonCd, ojtChange } from 'components/common/Common';

const { TextArea } = Input;
const ObjcTrgetSearch = ({ objcTrgetSearchOpen, setObjcTrgetSearchOpen }) => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
  });

  //과제검색결과
  const [arrAsmtSrchRslt, setArrAsmtSrchRslt] = useState([]);

  // 테이블 헤더
  const arrAsmtSrchRsltColumns = [
    {
      title: '번호',
      dataIndex: 'a1',
      width: 50,
      align: 'center',
    },
    {
      title: '과제번호',
      dataIndex: 'a2',
    },
    {
      title: '과제명',
      dataIndex: 'a3',
    },
    {
      title: '평가구분',
      dataIndex: 'a4',
    },
    {
      title: '평가결과',
      dataIndex: 'a5',
    },
    {
      title: '이의신청접수마감일',
      dataIndex: 'a6',
      width: 100,
    },
    {
      title: '이의신청여부',
      dataIndex: 'a7',
    },
    {
      title: '적용',
      dataIndex: 'a8',
      width: 60,
      render: (_, record, index) => {
        return (
          <Button
            type="default"
            className="eu-btn-table-fine"
            size="small"
            onClick={() => {
              arrAsmtSrchRsltClick(record);
            }}
          >
            적용
          </Button>
        );
      },
    },
  ];

  const arrAsmtSrchRsltClick = (record) => {
    Modal.info({
      title: JSON.stringify(record),
    });
    setObjcTrgetSearchOpen(false);
  };

  const searchClick = () => {
    Modal.info({
      title: '조회 클릭',
    });
  };

  const closeClick = () => {
    setObjcTrgetSearchOpen(false);
  };

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a', 'b']));

    let tmp = [];
    for (let idx = 1; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: idx,
        a2: 'AAA12345',
        a3: '1차_본사업',
        a4: '선정평가',
        a5: '탈락대상',
        a6: '2022-10-0' + idx,
        a7: 'N',
        a8: '',
      });
    }
    setArrAsmtSrchRslt(tmp);
  }, []);

  return (
    <Modal
      open={objcTrgetSearchOpen}
      title="이의신청 대상과제 검색"
      onCancel={closeClick}
      width={800}
      footer={[
        <Button
          key={'closeClick'}
          type="primary"
          size="middle"
          className="eu-btn-popup-process-default"
          onClick={closeClick}
        >
          취소
        </Button>,
      ]}
    >
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>&nbsp;</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={searchClick}
          >
            {' '}
            조회{' '}
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="신청자" span={3}>
              <Space>
                <Select
                  onChange={(value) => ojtChange(value, 'a1', setOjtSrchCnd)}
                  options={[
                    {
                      value: '',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={ojtSrchCnd?.a1}
                />
                <Select
                  onChange={(value) => ojtChange(value, 'a2', setOjtSrchCnd)}
                  options={[
                    {
                      value: '',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                  ]}
                  value={ojtSrchCnd?.a2}
                />
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="과제번호" span={3}>
              <Input
                value={ojtSrchCnd?.a3}
                onChange={(e) => ojtChange(e.target.value, 'a3', setOjtSrchCnd)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="과제명" span={3}>
              <Input
                value={ojtSrchCnd?.a3}
                onChange={(e) => ojtChange(e.target.value, 'a4', setOjtSrchCnd)}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>총 {arrAsmtSrchRslt?.length} 건</TitleComp>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}></Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrAsmtSrchRsltTable'}
            columns={arrAsmtSrchRsltColumns}
            dataSource={arrAsmtSrchRslt}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 250 }}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default ObjcTrgetSearch;
