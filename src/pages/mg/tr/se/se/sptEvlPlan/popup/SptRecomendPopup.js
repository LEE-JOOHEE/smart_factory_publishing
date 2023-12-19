import React, { useEffect, useState } from 'react';
import {
  Button,
  Descriptions,
  Input,
  Modal,
  Row,
  Col,
  Table,
  Checkbox,
  Select,
  InputNumber,
} from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd } from 'components/common/Common';

const SptRecomendPopup = ({
  cmEvlMfcmAtmcRcmdtnPopupOpen,
  setCmEvlMfcmAtmcRcmdtnPopupOpen,
}) => {
  //자동추천 조건설정
  const [ojtAtmcRcmdtnCnd, setOjtAtmcRcmdtnCnd] = useState({});
  //자동추천 평가위원 목록
  const [arrAtmcRcmdtn, setArrAtmcRcmdtn] = useState([]);
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const arrAtmcRcmdtnColumns = [
    {
      title: '순번',
      dataIndex: 'a',
      width: '10%',
      align: 'center',
    },
    { title: '성명', dataIndex: 'b', width: '15%', align: 'center' },
    { title: '전문가소재지', dataIndex: 'c', width: '15%', align: 'center' },
    { title: '주요지역(TP구분)', dataIndex: 'd', width: '15%', align: 'center' },
    { title: '소속', dataIndex: 'e', width: '15%', align: 'center' },
    { title: '전문분야', dataIndex: 'f', width: '15%', align: 'center' },
    { title: '산학연특', dataIndex: 'g', width: '15%', align: 'center' },
  ];

  const ojtAtmcRcmdtnCndChange = (value, column) => {
    setOjtAtmcRcmdtnCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const atmcRcmdtnClick = () => {
    Modal.info({
      title: '자동추천',
    });
  };

  const closeClick = () => {
    setCmEvlMfcmAtmcRcmdtnPopupOpen(false);
  };

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c']));

    //조건설정
    setOjtAtmcRcmdtnCnd({
      a: '',
      b: '',
      c: '',
      d: '10',
    });

    let tmp = [];
    for (let idx = 1; idx <= 12; idx++) {
      tmp.push({
        key: idx,
        a: idx,
        b: '위원' + idx,
        c: '경기',
        d: '서울',
        e: '위원소속',
        f: '전문분야',
        g: '산학연특',
      });
    }
    setArrAtmcRcmdtn(tmp);
  }, []);

  useEffect(() => {
    console.log('ojtAtmcRcmdtnCnd : ', ojtAtmcRcmdtnCnd);
  }, [ojtAtmcRcmdtnCnd]);

  return (
    <>
      <Modal
        key="SptRecomendPopup"
        open={cmEvlMfcmAtmcRcmdtnPopupOpen}
        title="평가위원 자동추천"
        // style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1250}
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
          <Col span={12}>
            <TitleComp>평가위원 자동추천 조건설정</TitleComp>
          </Col>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="전문분야" span={3}>
                <Checkbox.Group
                  options={[
                    {
                      value: '001',
                      label: 'TEST1',
                    },
                    {
                      value: '002',
                      label: 'TEST2',
                    },
                    {
                      value: '003',
                      label: 'TEST3',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  onChange={(value) => {
                    ojtAtmcRcmdtnCndChange(value, 'a');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="전문가소재지 지역">
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtAtmcRcmdtnCndChange(value, 'b');
                  }}
                  options={[
                    {
                      value: '',
                      label: '선택',
                    },
                    ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                  ]}
                  defaultValue={''}
                />
              </Descriptions.Item>
              <Descriptions.Item label="주요지역(TP)구분" span={2}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtAtmcRcmdtnCndChange(value, 'c');
                  }}
                  options={[
                    {
                      value: '',
                      label: '선택',
                    },
                    ...(ojtGroupCodes?.c ? ojtGroupCodes.c : []),
                  ]}
                  defaultValue={''}
                />
              </Descriptions.Item>
              <Descriptions.Item label="선정 인원" span={2}>
                <InputNumber
                  onChange={(value) => {
                    ojtAtmcRcmdtnCndChange(value, 'd');
                  }}
                  value={ojtAtmcRcmdtnCnd?.d}
                />
                <Button
                  className="eu-btn-crud-fine"
                  onClick={atmcRcmdtnClick}
                >
                  자동추천
                </Button>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Col span={12}>
            <TitleComp>n회차 자동추천 평가위원</TitleComp>
          </Col>
          <Col span={24}>
            <Table
              key={'arrAltmntAsmt'}
              columns={arrAtmcRcmdtnColumns}
              dataSource={arrAtmcRcmdtn}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 390 }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default SptRecomendPopup;
