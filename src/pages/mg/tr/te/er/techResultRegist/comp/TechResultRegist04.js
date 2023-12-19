import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Select, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

import { getListCommonCd } from 'components/common/Common';

import TechMfcmmPopup from 'pages/mg/tr/te/er/techResultRegist/popup/TechMfcmmPopup';

const TechResultRegist04 = ({ setActiveTabKey }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //위원 평가지
  const [cmEvlMfcmEvlPopupOpen, setCmEvlMfcmEvlPopupOpen] = useState(false);

  //기업 별 위원 별 평가 정보 조회
  const [ojtEvlMfcm, setOjtEvlMfcm] = useState(false);

  //평가위원 목록
  const [arrEvlMfcm, setArrEvlMfcm] = useState([]);

  const evlMfcmClick = (record) => {
    setOjtEvlMfcm(record);
    setCmEvlMfcmEvlPopupOpen(true);
  };

  const replaceClick = () => {
    Modal.info({
      title: '새로고침 클릭',
    });
  };
  const evlCompleteClick = () => {
    setActiveTabKey(3);
  };

  const mfcmClick = (record) => {};

  const arrEvlMfcmColumns = [
    { title: '과제명', dataIndex: 'a', width: '13%', },
    { title: '도입기업', dataIndex: 'b', width: '10%', },
    { title: '합계(최고,최저점제외)', dataIndex: 'c', width: '9%', align: 'center', },
    { title: '평균(최고,최저점제외)', dataIndex: 'd', width: '9%', align: 'center', },
    { title: '최종가점', dataIndex: 'e', width: '7%', align: 'center', },
    { title: '뿌리가점', dataIndex: 'f', width: '7%', align: 'center', },
    { title: '일자리평가', dataIndex: 'g', width: '8%', align: 'center', },
    { title: '총점', dataIndex: 'h', width: '7%', align: 'center', },
    { title: '순위', dataIndex: 'i', width: '6%', align: 'center', },
    {
      title: '위원별 평가점수',
      children: [
        {
          title: '위원1(위원장)',
          dataIndex: 'j',
          width: '10%',
          render: (text, record, index) => {
            return (
              <>
                <Button
                  type="link"
                  className="eu-btn-link text-c"
                  onClick={() => evlMfcmClick(record)}
                >
                  {record?.j}
                </Button>
              </>
            );
          },
        },
        {
          title: '위원2',
          dataIndex: 'k',
          width: '7%',
          render: (text, record, index) => {
            return (
              <>
                <Button
                  type="link"
                  className="eu-btn-link text-c"
                  onClick={() => evlMfcmClick(record)}
                >
                  {record?.k}
                </Button>
              </>
            );
          },
        },
        {
          title: '위원3',
          dataIndex: 'l',
          width: '7%',
          render: (text, record, index) => {
            return (
              <>
                <Button
                  type="link"
                  className="eu-btn-link text-c"
                  onClick={() => evlMfcmClick(record)}
                >
                  {record?.l}
                </Button>
              </>
            );
          },
        },
      ],
    },
  ];

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c']));

    let tmp = [];
    for (let idx = 1; idx <= 3; idx++) {
      tmp.push({
        key: idx,
        a: 'TEST과제' + idx,
        b: '기업명',
        c: 263 + idx * idx,
        d: 87.7,
        e: 0.0,
        f: '-',
        g: '0.00',
        h: 87.7,
        i: idx,
        j: 87 - idx,
        k: 89 - idx * idx,
        l: 88,
        isHd: idx === 1 ? true : false,
      });
    }

    setArrEvlMfcm(tmp);
  }, []);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>과제별 평가현황</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            onClick={replaceClick}
          >
            새로고침
          </Button>
          <Button
            className="eu-btn-crud-fine"
            onClick={evlCompleteClick}
          >
            평가완료
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrEvlMfcm'}
            columns={arrEvlMfcmColumns}
            dataSource={arrEvlMfcm}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 400 }}
          />
        </Col>
      </Row>
      <TechMfcmmPopup
        key="TechMfcmmPopup"
        evlMfcm={ojtEvlMfcm}
        cmEvlMfcmEvlPopupOpen={cmEvlMfcmEvlPopupOpen}
        setCmEvlMfcmEvlPopupOpen={setCmEvlMfcmEvlPopupOpen}
      />
    </>
  );
};

export default TechResultRegist04;
