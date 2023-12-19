import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SptManagePopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptManagePopup';

const SptFoundngDgtl04 = ({ arrEvlInstLst }) => {
  let arrRowKey = [];
  let arrGroupKey = [];
  const sharedOnCell = (record, index) => {
    if (arrRowKey.includes(record.key)) {
      //Merge row key 가 같으면 무조건 rowspan 지정
      return {
        rowSpan: record.g,
      };
    } else {
      if (record.g > 0) {
        if (arrGroupKey.includes(record.c)) {
          //Merge row key가 다르고 그룹키가 같으면 rowspan = 0
          return {
            rowSpan: 0,
          };
        } else {
          //그룹키가 없으면 신규 merge row
          arrRowKey.push(record.key);
          arrGroupKey.push(record.c);
          return {
            rowSpan: record.g,
          };
        }
      }
      return {};
    }
  };

  const arrEvlInstLstColumns = [
    {
      title: '순번',
      dataIndex: 'a',
      width: '7%',
      align: 'center',
      onCell: sharedOnCell,
    },
    {
      title: '기업구분',
      dataIndex: 'b',
      width: '10%',
      onCell: sharedOnCell,
    },
    {
      title: '기업명',
      dataIndex: 'c',
      width: '10%',
      onCell: sharedOnCell,
    },
    {
      title: '지역',
      dataIndex: 'd',
      width: '7%',
      align: 'center',
      onCell: sharedOnCell,
    },
    {
      title: '희망일자',
      dataIndex: 'e',
      width: '10%',
      onCell: sharedOnCell,
    },
    {
      title: '희망일시',
      dataIndex: 'f',
      width: '10%',
      onCell: sharedOnCell,
    },
    {
      title: '배정위원수',
      dataIndex: 'g',
      width: '9%',
      align: 'center',
      onCell: sharedOnCell,
    },
    {
      title: '최종섭외일시',
      dataIndex: 'h',
      width: '17%',
      onCell: sharedOnCell,
    },
    {
      title: '위원구분',
      dataIndex: 'i',
      width: '10%',
    },
    {
      title: '평가위원명',
      dataIndex: 'j',
      width: '10%',
    },
  ];

  const [cmEvlMfcmMngPopupOpen, setCmEvlMfcmMngPopupOpen] = useState(false);
  const cmEvlMfcmMngPopupOpenClick = () => {
    setCmEvlMfcmMngPopupOpen(true);
  };

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24} className="title-0">
          <TitleComp>평가위원목록</TitleComp>
        </Col>
        <Col span={6} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
              {arrEvlInstLst ? arrEvlInstLst.length : 0}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={18} style={{ textAlign: 'right' }}>
          <Button
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
            key={'arrEvlInstLst2'}
            columns={arrEvlInstLstColumns}
            dataSource={arrEvlInstLst}
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

export default SptFoundngDgtl04;
