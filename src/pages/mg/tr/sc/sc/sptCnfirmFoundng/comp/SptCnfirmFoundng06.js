import React, { useState } from 'react';
import { Button, Col, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SptManagePopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptManagePopup';

const SptCnfirmFoundng06 = ({ arrEvlMfcmLst }) => {
  let arrRowKey = [];
  let arrGroupKey = [];
  const [cmEvlMfcmMngPopupOpen, setCmEvlMfcmMngPopupOpen] = useState(false);
  const cmEvlMfcmMngPopupOpenClick = () => {
    setCmEvlMfcmMngPopupOpen(true);
  };
  const sharedOnCell = (record, index) => {
    if (arrRowKey.includes(record.key)) {
      //Merge row key 가 같으면 무조건 rowspan 지정
      return {
        rowSpan: record.e,
      };
    } else {
      if (record.e > 0) {
        if (arrGroupKey.includes(record.b)) {
          //Merge row key가 다르고 그룹키가 같으면 rowspan = 0
          return {
            rowSpan: 0,
          };
        } else {
          //그룹키가 없으면 신규 merge row
          arrRowKey.push(record.key);
          arrGroupKey.push(record.b);
          return {
            rowSpan: record.e,
          };
        }
      }
      return {};
    }
  };
  const arrEvlMfcmLstColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: 50,
      align: 'center',
      onCell: sharedOnCell,
    },
    {
      title: '기업구분',
      dataIndex: 'b',
      onCell: sharedOnCell,
    },
    {
      title: '기업명',
      dataIndex: 'c',
      width: 200,
      onCell: sharedOnCell,
    },
    {
      title: '지역',
      dataIndex: 'd',
      onCell: sharedOnCell,
    },
    {
      title: '희망일자',
      dataIndex: 'e',
      width: 70,
      onCell: sharedOnCell,
    },
    {
      title: '희망일시',
      dataIndex: 'f',
      onCell: sharedOnCell,
    },
    {
      title: '배정위원수',
      dataIndex: 'g',
      width: 100,
      onCell: sharedOnCell,
    },
    {
      title: '최종섭외일시',
      dataIndex: 'h',
    },
    {
      title: '위원구분',
      dataIndex: 'i',
    },
    {
      title: '평가위원명',
      dataIndex: 'j',
    },
  ];
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={3}>
          <TitleComp>평가위원목록</TitleComp>
        </Col>
        <Col span={9}>총 {arrEvlMfcmLst ? arrEvlMfcmLst.length : 0}건</Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={cmEvlMfcmMngPopupOpenClick}
          >
            평가위원 선정관리
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={arrEvlMfcmLstColumns}
            dataSource={arrEvlMfcmLst}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 320 }}
          />
        </Col>
      </Row>
      <SptManagePopup
        key={'SptManagePopup'}
        cmEvlMfcmMngPopupOpen={cmEvlMfcmMngPopupOpen}
        setCmEvlMfcmMngPopupOpen={setCmEvlMfcmMngPopupOpen}
      />
    </>
  );
};

export default SptCnfirmFoundng06;
