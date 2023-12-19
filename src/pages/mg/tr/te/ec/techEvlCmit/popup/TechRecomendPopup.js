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

const TechRecomendPopup = ({
  cmEvlCmitAtmcRcmdtnPopupOpen,
  setCmEvlCmitAtmcRcmdtnPopupOpen,
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
      width: '9%',
      align: 'center',
    },
    { title: '성명', dataIndex: 'b', width: '11%', },
    { title: '전문가소재지', dataIndex: 'c', width: '11%', align: 'center', },
    { title: '주요지역(TP구분)', dataIndex: 'd', width: '13%', align: 'center', },
    { title: '소속', dataIndex: 'e', width: '12%', },
    { title: '전문분야', dataIndex: 'f', width: '12%', },
    { title: '전공', dataIndex: 'g', width: '11%', },
    { title: '학위', dataIndex: 'h', width: '11%', },
    { title: '산학연특', dataIndex: 'i', width: '10%', },
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
    setCmEvlCmitAtmcRcmdtnPopupOpen(false);
  };

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c']));

    //조건설정
    setOjtAtmcRcmdtnCnd({
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '10',
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
        g: '전공',
        h: '학위',
        i: '산학연특',
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
        key="cmEvlCmitAtmcRcmdtnPopupOpen"
        open={cmEvlCmitAtmcRcmdtnPopupOpen}
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
          <Row className="eu-row-comp-title">평가위원 자동추천 조건설정</Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="전문분야" span={3}>
                <Checkbox.Group
                  options={[
                    {
                      value: '001',
                      label: '전문분야',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  onChange={(value) => {
                    ojtAtmcRcmdtnCndChange(value, 'a');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="전공" span={3}>
                <Checkbox.Group
                  options={[
                    {
                      value: '001',
                      label: '전공',
                    },
                    ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                  ]}
                  onChange={(value) => {
                    ojtAtmcRcmdtnCndChange(value, 'b');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="이수학위" span={3}>
                <Checkbox.Group
                  options={[
                    {
                      value: '001',
                      label: '이수학위',
                    },
                    ...(ojtGroupCodes?.c ? ojtGroupCodes.c : []),
                  ]}
                  onChange={(value) => {
                    ojtAtmcRcmdtnCndChange(value, 'c');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="산학연" span={3}>
                <Checkbox.Group
                  options={[
                    {
                      value: '001',
                      label: '산학연',
                    },
                    ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                  ]}
                  onChange={(value) => {
                    ojtAtmcRcmdtnCndChange(value, 'd');
                  }}
                />
              </Descriptions.Item>

              <Descriptions.Item label="전문가소재지 지역" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtAtmcRcmdtnCndChange(value, 'e');
                  }}
                  options={[
                    {
                      value: '',
                      label: '선택',
                    },
                    ...(ojtGroupCodes?.e ? ojtGroupCodes.e : []),
                  ]}
                  value={''}
                />
              </Descriptions.Item>
              <Descriptions.Item label="주요지역(TP)구분" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtAtmcRcmdtnCndChange(value, 'f');
                  }}
                  options={[
                    {
                      value: '',
                      label: '선택',
                    },
                    ...(ojtGroupCodes?.f ? ojtGroupCodes.f : []),
                  ]}
                  value={''}
                />
              </Descriptions.Item>
              <Descriptions.Item label="선정 인원" span={3}>
                <InputNumber
                  className="mr-8"
                  onChange={(value) => {
                    ojtAtmcRcmdtnCndChange(value, 'g');
                  }}
                  value={ojtAtmcRcmdtnCnd?.g}
                />
                명
                <Button
                  className="eu-btn-crud-fine ml-24"
                  onClick={atmcRcmdtnClick}
                >
                  자동추천
                </Button>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">n회차 자동추천 평가위원</Row>
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

export default TechRecomendPopup;
