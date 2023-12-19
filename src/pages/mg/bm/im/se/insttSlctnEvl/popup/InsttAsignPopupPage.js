import React, { useEffect, useState } from 'react';
import {
  Button,
  Descriptions,
  Input,
  Modal,
  Row,
  Col,
  Select,
  Table,
} from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR'; // 우린 한국인이니까 ko_KR를 불러옵시다
moment.locale('ko');

const InsttAsignPopupPage = ({ open, closeClick }) => {
  const [evlAsmt, setEvlAsmt] = useState({
    a: '2022',
    b: '사업명',
    c: '수행기관명',
    d: '위원회 명',
  });
  const [arrAltmntInst, setArrAltmntInst] = useState([]);
  const [arrUnAltmntInst, setArrUnAltmntInst] = useState([]);
  const [arrCheckedAltmntAsmt, setArrCheckedAltmntAsmt] = useState([]);
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
    c: '',
  });
  const altmntInstColumns = [
    { title: '번호', dataIndex: 'a' },
    { title: '접수번호', dataIndex: 'b' },
    { title: '제출기관명', dataIndex: 'c' },
    { title: '기관담당자', dataIndex: 'd' },
    { title: '제출일시', dataIndex: 'e' },
    {
      title: '제외',
      dataIndex: 'f',
      render: (text, record) => (
        <Button
          type="default"
          className="eu-btn-table-default"
          onClick={() => exclClick(record.key)}
        >
          {record.f}
        </Button>
      ),
    },
  ];
  const unAltmntInstColumns = [
    { title: '번호', dataIndex: 'a' },
    { title: '접수번호', dataIndex: 'b' },
    { title: '제출기관명', dataIndex: 'c' },
    { title: '기관담당자', dataIndex: 'd' },
    { title: '제출일시', dataIndex: 'e' },
  ];

  const searchClick = () => {
    Modal.info({ title: `${JSON.stringify(ojtSrchCnd)}` });
  };

  const exclClick = (key) => {
    Modal.info({ title: `${JSON.stringify(key)}` });
  };

  const altmntClick = () => {
    Modal.info({ title: `${JSON.stringify(arrCheckedAltmntAsmt)}` });
  };

  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedAltmntAsmt(selectedRows);
    },
  };

  useEffect(() => {
    let tmp1 = [];
    let tmp2 = [];
    for (let idx = 1; idx < 30; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: 'XXX',
        c: `제출기관명${idx}`,
        d: '담당자명',
        e: '2022-10-21',
        f: '제외',
      });
      tmp2.push({
        key: idx,
        a: idx,
        b: 'XXX',
        c: `제출기관명${idx}`,
        d: '담당자명',
        e: '2022-10-21',
      });
    }
    console.log(tmp1);
    setArrAltmntInst(tmp1);
    setArrUnAltmntInst(tmp2);
  }, []);

  return (
    <>
      <Modal
        key="InsttAsignPopupPage"
        open={open}
        title="기관선정 평가위원회 제출기관 관리"
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1400}
        footer={[
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
        <Row className="eu-row-comp-title">
          <Col span={12}>
            <TitleComp>평가 계획</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}></Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="사업연도" span={2}>
                {evlAsmt?.a}
              </Descriptions.Item>
              <Descriptions.Item label="사업명">{evlAsmt?.b}</Descriptions.Item>
              <Descriptions.Item label="수행기관" span={2}>
                {evlAsmt?.c}
              </Descriptions.Item>
              <Descriptions.Item label="평가위원회명">
                {evlAsmt?.d}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>배정기관</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}></Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'arrAltmntInst'}
              columns={altmntInstColumns}
              dataSource={arrAltmntInst}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 210 }}
            />
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>미배정 기관 검색 조건</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              onClick={searchClick}
            >
              검색
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="접수번호">
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="제출기관명">
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'b');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="기관담당자" span={3}>
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'c');
                  }}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>미배정 기관</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              onClick={altmntClick}
            >
              배정
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'arrUnAltmntInst'}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              columns={unAltmntInstColumns}
              dataSource={arrUnAltmntInst}
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

export default InsttAsignPopupPage;
