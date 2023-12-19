import React, { useEffect, useState } from 'react';
import {
  Button,
  Descriptions,
  Input,
  Modal,
  Select,
  Row,
  Col,
  Table,
} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { getListCommonCd } from 'components/common/Common';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';

const arrEvlAltmntColumns = [
  {
    title: '번호',
    dataIndex: 'a',
    width: '9%',
    align: 'center',
  },
  { title: '사업', dataIndex: 'b', width: '40%', },
  { title: '수행기관(TP)', dataIndex: 'c', width: '14%', },
  { title: '전체', dataIndex: 'd', width: '9%', align: 'center', },
  { title: '대상과제수', dataIndex: 'e', width: '9%', align: 'center', },
  { title: '배정과제수', dataIndex: 'f', width: '9%', align: 'center', },
  { title: '배정상태', dataIndex: 'g', width: '10%', align: 'center', },
];

const TechBsnsPopup = ({ cmEvlAltmntSttsOpen, setCmEvlAltmntSttsOpen }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '2022',
    b: '',
    c: '',
  });

  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const [arrEvlAltmnt, setArrEvlAltmnt] = useState([]);

  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  const excelDownloadClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };

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
    setCmEvlAltmntSttsOpen(false);
  };

  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a', 'b']));

    let tmp = [];
    for (let idx = 1; idx < 123; idx++) {
      tmp.push({
        key: idx,
        a: idx,
        b: '스마트공장 구축 및 고도화 사업(기초)_평가테스트' + idx,
        c: '수행기관4',
        d: idx,
        e: idx,
        f: idx,
        g: '완료',
      });
    }
    setArrEvlAltmnt(tmp);
  }, []);

  useEffect(() => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
  }, [ojtSrchCnd]);

  return (
    <>
      <Modal
        key="TechBsnsPopup"
        open={cmEvlAltmntSttsOpen}
        title="사업별 평가배정 현황"
        //onOk={handleOk}
        onCancel={closeClick}
        width={1000}
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
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>검색조건 입력</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button
                key={'searchClick'}
                size="small"
                className="eu-btn-crud-fine"
                onClick={searchClick}
              >
                조회
              </Button>
            </Col>
          </Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="사업연도">
                <Select
                  getPopupContainer={trigger => trigger.parentNode} 
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'a');
                  }}
                  options={[
                    {
                      value: '2020',
                      label: '2020',
                    },
                    {
                      value: '2021',
                      label: '2021',
                    },
                    {
                      value: '2022',
                      label: '2022',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={ojtSrchCnd?.a}
                />
              </Descriptions.Item>
              <Descriptions.Item label="사업분류" span={2}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode} 
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'b');
                  }}
                  options={[
                    {
                      value: '',
                      label: '전체',
                    },
                    ...(ojtSrchCnd?.b ? ojtGroupCodes.b : []),
                  ]}
                  value={ojtSrchCnd?.b}
                />
              </Descriptions.Item>
              <Descriptions.Item label="수행기관" span={3}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode} 
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'c');
                  }}
                  options={[
                    {
                      value: '',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.c ? ojtGroupCodes.c : []),
                  ]}
                  value={ojtSrchCnd?.c}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>사업별 평가배정 현황</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button
                key={'excelDownloadClick'}
                className="eu-btn-excel-download"
                // icon={<DownloadOutlined />}
                onClick={excelDownloadClick}
              >
                엑셀다운로드
              </Button>
            </Col>
          </Row>
          <Col span={24}>
            <Table
              key={'arrEvlAltmnt'}
              columns={arrEvlAltmntColumns}
              dataSource={arrEvlAltmnt}
              size="small"
              bordered
              pagination={{
                position: ['bottomCenter'],
                showSizeChanger: false,
              }}
              scroll={{ y: 400 }}
            />
          </Col>
        </Row>
      </Modal>
      <CmAgremExcelDwnld
        key={'CmAgremExcelDwnld'}
        cmAgremExcelDwnldOpen={cmAgremExcelDwnldOpen}
        setCmAgremExcelDwnldOpen={setCmAgremExcelDwnldOpen}
      />
    </>
  );
};

export default TechBsnsPopup;
