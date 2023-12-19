import React, { useEffect, useState } from 'react';
import {
  Button,
  Descriptions,
  Input,
  Modal,
  Row,
  Col,
  Table,
  ConfigProvider,
  TimePicker,
} from 'antd';
import 'css/Common.css';
import { arrChange } from 'components/common/Common';

import TitleComp from 'components/layout/TitleComp';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const TechAsignPopup = ({
  evlCmitAsmtAltmntPopupOpen,
  setEvlCmitAsmtAltmntPopupOpen,
}) => {
  //평가위원회
  const [evlCmit, setEvlCmit] = useState({});
  //배정 과제 목록
  const [arrAltmntAsmt, setArrAltmntAsmt] = useState([]);
  //미 배정 과제 목록
  const [arrUnAltmntAsmt, setArrUnAltmntAsmt] = useState([]);

  //미배정 과제 검색 조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
    c: '',
  });

  //배정과제
  const arrAltmntAsmtColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      align: 'center',
      width: '7%',
    },
    { title: '과제번호', dataIndex: 'b', width: '18%', },
    { title: '과제명', dataIndex: 'c', width: '22%', },
    { title: '도입기업', dataIndex: 'd', width: '13%', },
    { title: '소재지', dataIndex: 'e', width: '10%', align: 'center', },
    {
      title: '평가시간',
      dataIndex: 'f',
      width: '20%',
      render: (_, record, index) => {
        return (
          <ConfigProvider locale={locale}>
            <TimePicker
              format={'HH:mm'}
              onChange={(moment, dateString) => {
                if (moment) {
                  console.log(dateString);
                }
                arrChange(dateString, 'f', index, setArrAltmntAsmt);
              }}
            />
          </ConfigProvider>
        );
      },
    },
    {
      title: '제외',
      dataIndex: 'g',
      width: '10%',
      align: 'center',
      render: (_, record) => {
        return (
          <Button
            size="small"
            className="eu-btn-table-warning"
            onClick={() => {
              exclClick(record.key);
            }}
          >
            제외
          </Button>
        );
      },
    },
  ];
  const arrUnAltmntAsmtColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      align: 'center',
      width: '10%',
    },
    { title: '과제번호', dataIndex: 'b', width: '20%', },
    { title: '과제명', dataIndex: 'c', width: '40%', },
    { title: '도입기업', dataIndex: 'd', width: '20%', },
    { title: '소재지', dataIndex: 'e', width: '10%', align: 'center', },
  ];

  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const searchClick = () => {
    Modal.info({
      title: 'searchClick',
    });
  };

  const closeClick = () => {
    setEvlCmitAsmtAltmntPopupOpen(false);
  };

  const exclClick = (dataKey) => {
    Modal.info({
      title: '제외 : ' + dataKey,
    });
  };
  const altmntAsmtClick = () => {
    Modal.info({
      title: '배정 : ' + JSON.stringify(arrCheckedAltmntAsmt),
    });
  };

  //평가계획확정 클릭
  const [arrCheckedAltmntAsmt, setArrCheckedAltmntAsmt] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedAltmntAsmt(selectedRows);
    },
  };

  useEffect(() => {
    //평가 위원회
    setEvlCmit({
      a: '2022',
      b: '사업명',
      c: '수행기관명',
      d: '간사명',
      e: '평가TEST사업_평가위원회1',
      f: '2022-09-01',
      g: '2022-09-30',
      h: '평가TEST사업_평가위원회1_분과1',
      i: '간사명',
      j: '추진단/본원(대전)/제3평가장',
      k: '2022-09-01',
    });

    //배정과제
    let tmp1 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '2022-XXX-XXX-XXXXXX',
        c: 'TEST_과제_1',
        d: '기업명',
        e: '서울',
        f: '09:00',
        g: '',
      });
    }
    setArrAltmntAsmt(tmp1);

    //미배정과제
    let tmp2 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp2.push({
        key: idx,
        a: idx,
        b: '2022-XXX-XXX-XXXXXX',
        c: 'TEST_과제_' + idx,
        d: '기업명',
        e: '서울',
      });
    }
    setArrUnAltmntAsmt(tmp2);
  }, []);

  useEffect(() => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
  }, [ojtSrchCnd]);

  return (
    <>
      <Modal
        key="TechAsignPopup"
        open={evlCmitAsmtAltmntPopupOpen}
        title="평가위원회 과제 관리"
        // style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1300}
        footer={[
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title">평가 계획</Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="사업연도">
                {evlCmit?.a}
              </Descriptions.Item>
              <Descriptions.Item label="사업명" span={2}>
                {evlCmit?.b}
              </Descriptions.Item>
              <Descriptions.Item label="수행기관">
                {evlCmit?.c}
              </Descriptions.Item>
              <Descriptions.Item label="총괄간사" span={2}>
                {evlCmit?.d}
              </Descriptions.Item>
              <Descriptions.Item label="평가위원회명">
                {evlCmit?.e}
              </Descriptions.Item>
              <Descriptions.Item label="평가기간" span={2}>
                {evlCmit?.f}~ {evlCmit?.g}
              </Descriptions.Item>
              <Descriptions.Item label="분과명">{evlCmit?.h}</Descriptions.Item>
              <Descriptions.Item label="담당간사" span={2}>
                {evlCmit?.i}
              </Descriptions.Item>
              <Descriptions.Item label="평가장소">
                {evlCmit?.j}
              </Descriptions.Item>
              <Descriptions.Item label="분과평가일자" span={2}>
                {evlCmit?.k}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">배정 과제</Row>
          <Col span={24}>
            <Table
              key={'arrAltmntAsmt'}
              columns={arrAltmntAsmtColumns}
              dataSource={arrAltmntAsmt}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 210 }}
            />
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>미 배정 과제 검색 조건</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button
                className="eu-btn-crud-fine"
                onClick={searchClick}
              >
                검색
              </Button>
            </Col>
          </Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="과제명">
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="도입기업">
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'b');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="과제신청자">
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'c');
                  }}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>미 배정 과제</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button
                className="eu-btn-crud-fine"
                onClick={altmntAsmtClick}
              >
                배정
              </Button>
            </Col>
          </Row>
          <Col span={24}>
            <Table
              key={'arrUnAltmntAsmt'}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              columns={arrUnAltmntAsmtColumns}
              dataSource={arrUnAltmntAsmt}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 210 }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default TechAsignPopup;
