import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import {
  DownloadOutlined,
  SearchOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';
import CodiAltmntPopup from 'pages/mg/tr/re/re/excBsnsDetail/popup/CodiAltmntPopup';

const excBsnsDetail01Columns = [
  {
    title: '전문가소재지 지역',
    dataIndex: 'a1',
  },
  {
    title: '주요지역(IP 구분)',
    dataIndex: 'a2',
  },
  {
    title: '성명',
    dataIndex: 'a3',
  },
  {
    title: '연락처',
    dataIndex: 'a4',
  },
  {
    title: '이메일',
    dataIndex: 'a5',
  },
  {
    title: '소속',
    dataIndex: 'a6',
  },
  {
    title: '직위',
    dataIndex: 'a7',
  },
  {
    title: '추천상태',
    dataIndex: 'a8',
  },
];
const ExcBsnsDetail01 = ({ key }) => {
  const [arrExcBsnsDetail01, setArrExcBsnsDetail01] = useState([]);

  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  const [codiAltmntOpen, setCodiAltmntOpen] = useState(false);

  useEffect(() => {
    setArrExcBsnsDetail01(() => {
      const newArr = [...Array(5).keys()].map((i) => ({
        a1: '세종',
        a2: '세종',
        a3: '홍길동(gdhong)',
        a4: '010-1111-1111',
        a5: 'abc@naver.com',
        a6: '소속명1',
        a7: '직위명1',
        a8: '자동',
      }));
      return newArr;
    });
  }, []);

  const findCodiAltmntClick = () => {
    setCodiAltmntOpen(true);
  };
  const saveCoordinatorClick = () => {
    Modal.info({ title: '코디네이터 저장 버튼' });
  };
  const downloadExcelClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };
  useEffect(() => {
    if (key) {
      // 데이터 요청
      setArrExcBsnsDetail01({});
    }
  }, [key]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>코디네이터</TitleComp>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            // icon={<SearchOutlined />}
            onClick={findCodiAltmntClick}
          >
            찾기
          </Button>
          <Button
            className="eu-btn-crud-warning"
            // icon={<SaveOutlined />}
            onClick={saveCoordinatorClick}
          >
            저장
          </Button>
          <Button
            className="eu-btn-excel-download"
            // icon={<DownloadOutlined />}
            onClick={downloadExcelClick}
          >
            코디 추천 엑셀 다운로드
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={excBsnsDetail01Columns}
            dataSource={arrExcBsnsDetail01}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>
      <CmAgremExcelDwnld
        cmAgremExcelDwnldOpen={cmAgremExcelDwnldOpen}
        setCmAgremExcelDwnldOpen={setCmAgremExcelDwnldOpen}
      />
      <CodiAltmntPopup
        codiAltmntOpen={codiAltmntOpen}
        setCodiAltmntOpen={setCodiAltmntOpen}
      />
    </>
  );
};

export default ExcBsnsDetail01;
