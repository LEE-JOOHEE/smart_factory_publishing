import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Select, Space, Table, Tabs } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

import { getListCommonCd } from 'components/common/Common';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';
import TechResultPopup from 'pages/mg/tr/te/er/techResultRegist/popup/TechResultPopup';

const TechResultRegist05 = ({ setActiveTabKey }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //과제목록
  const [arrAsmtLst, setArrAsmtLst] = useState([]);

  //기술종합평가결과 팝업
  const [cmEvlRsltPopupOpen, setCmEvlRsltPopupOpen] = useState(false);

  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  const excelDownloadClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };

  const techGnrlzEvlRsltClick = (record) => {
    setCmEvlRsltPopupOpen(true);
  };

  const arrAsmtLstColumns = [
    { title: '번호', dataIndex: 'a', width: '5%', align: 'center', },
    { title: '과제정보', dataIndex: 'b', width: '10%', },
    { title: '현장평가점수', dataIndex: 'c', width: '7%', align: 'center', },
    { title: '현장평가반영', dataIndex: 'd', width: '7%', align: 'center', },
    { title: '현장평가결과', dataIndex: 'e', width: '7%', },
    { title: '기술성평가점수', dataIndex: 'f', width: '6%', align: 'center', },
    { title: '기술성평가반영', dataIndex: 'g', width: '6%', align: 'center', },
    { title: '일자리평가점수', dataIndex: 'h', width: '6%', align: 'center', },
    { title: '최종점수', dataIndex: 'i', width: '6%', align: 'center', },
    { title: '최종가점', dataIndex: 'j', width: '6%', align: 'center', },
    { title: '뿌리가점', dataIndex: 'k', width: '6%', align: 'center', },
    {
      title: '종합점수',
      dataIndex: 'l',
      width: '6%',
      align: 'center',
      render: (text, record, index) => {
        return (
          <>
            <Button
              type="link"
              className="eu-btn-link text-c"
              onClick={() => techGnrlzEvlRsltClick(record)}
            >
              {record?.l}
            </Button>
          </>
        );
      },
    },
    { title: '기술성평가판정결과', dataIndex: 'm', width: '7%', },
    { title: '지역', dataIndex: 'n', width: '6%', align: 'center', },
    { title: '지역순위', dataIndex: 'o', width: '5%', align: 'center', },
    { title: '전체순위', dataIndex: 'p', width: '5%', align: 'center', },
  ];
  const [arrCheckedArrAsmtLst, setArrCheckedArrAsmtLst] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedArrAsmtLst(selectedRows);
    },
  };
  const jgmtClick = () => {
    Modal.info({
      title: '판정클릭 : ' + JSON.stringify(arrCheckedArrAsmtLst),
    });
  };
  const evlCmptnNtfctnClick = () => {
    Modal.info({
      title: '평가완료통보클릭 : ' + JSON.stringify(arrCheckedArrAsmtLst),
    });
  };
  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c']));

    let tmp = [];
    for (let idx = 1; idx <= 3; idx++) {
      tmp.push({
        key: idx,
        a: idx,
        b: 'TEST과제_' + idx,
        c: 90,
        d: 50,
        e: '선정예정',
        f: 80,
        g: 50,
        h: 0,
        i: 85,
        j: 0,
        k: 0,
        l: 85,
        m: '선정예정',
        n: '서울',
        o: 1,
        p: 1,
      });
    }

    setArrAsmtLst(tmp);
  }, []);

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24} className="title-0">
          <TitleComp>과제목록</TitleComp>
        </Col>
        <Col span={4} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrAsmtLst?.length.toString().padStart(3, '0')}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={20} style={{ textAlign: 'right' }}>
          <Space>
            <Select
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }}
              className="text-l"
              style={{ width: 150 }}
              // onChange={(value) => {
              //   ojtSrchCndChange(value);
              // }}
              options={[
                {
                  value: '',
                  label: '선택',
                },
                {
                  value: '선정예정',
                  label: '선정예정',
                },
                {
                  value: '대기',
                  label: '대기',
                },
                {
                  value: '탈락',
                  label: '탈락',
                },
                ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
              ]}
              defaultValue={''}
            />
            <Button className="eu-btn-crud-fine" onClick={jgmtClick}>
              판정
            </Button>
            <Button
              className="eu-btn-crud-fine"
              onClick={evlCmptnNtfctnClick}
            >
              평가완료통보
            </Button>
            <Button
              className="eu-btn-excel-download"
              // icon={<DownloadOutlined />}
              onClick={excelDownloadClick}
            >
              평가결과 엑셀다운로드
            </Button>
          </Space>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            key={'TechResultRegist05'}
            columns={arrAsmtLstColumns}
            dataSource={arrAsmtLst}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 400, x: 1600 }}
          />
        </Col>
      </Row>

      <CmAgremExcelDwnld
        key={'CmAgremExcelDwnld'}
        cmAgremExcelDwnldOpen={cmAgremExcelDwnldOpen}
        setCmAgremExcelDwnldOpen={setCmAgremExcelDwnldOpen}
      />
      <TechResultPopup
        key={'TechResultPopup'}
        cmEvlRsltPopupOpen={cmEvlRsltPopupOpen}
        setCmEvlRsltPopupOpen={setCmEvlRsltPopupOpen}
      />
    </>
  );
};
export default TechResultRegist05;
