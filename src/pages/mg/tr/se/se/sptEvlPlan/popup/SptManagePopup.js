import React, { useEffect, useState } from 'react';
import {
  Button,
  Descriptions,
  Input,
  Modal,
  Row,
  Col,
  Table,
  Select,
} from 'antd';

import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd } from 'components/common/Common';
import SptRecomendPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptRecomendPopup';
import SptSpeclPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptSpeclPopup';
import SptExclPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptExclPopup';
import CmSmsNtfctn from 'pages/cm/cm/CmSmsNtfctn';

const arrLsnHstryColumns = [
  { title: '선정구분', dataIndex: 'a', width: '7%', align: 'center' },
  { title: '섭외차수', dataIndex: 'b', width: '7%', align: 'center' },
  { title: '선정여부', dataIndex: 'c', width: '7%', align: 'center' },
  { title: '참석여부', dataIndex: 'd', width: '7%', align: 'center' },
  { title: '위원구분', dataIndex: 'e', width: '7%', align: 'center' },
  { title: '섭외일시', dataIndex: 'f', width: '13%' },
  { title: '성명', dataIndex: 'g', width: '7%', align: 'center' },
  { title: '총배정수', dataIndex: 'h', width: '7%', align: 'center' },
  { title: '전문가소재지', dataIndex: 'i', width: '8%', align: 'center' },
  { title: '주요지역\n(TP구분)', dataIndex: 'j', width: '9%', align: 'center' },
  { title: '소속', dataIndex: 'k', width: '7%', align: 'center' },
  { title: '전문분야', dataIndex: 'l', width: '7%' },
  { title: '산학연특', dataIndex: 'm', width: '7%' },
];

const SptManagePopup = ({
  cmEvlMfcmMngPopupOpen,
  setCmEvlMfcmMngPopupOpen,
}) => {
  //평가계획
  const [evlAsmt, setEvlAsmt] = useState({});
  //평가위원 섭외이력
  const [arrLsnHstry, setArrLsnHstry] = useState([]);

  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //평가위원 조회 조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
  });

  //자동추천팝업
  const [cmEvlMfcmAtmcRcmdtnPopupOpen, setCmEvlMfcmAtmcRcmdtnPopupOpen] =
    useState(false);
  //특별추천팝업
  const [cmEvlMfcmSpclRcmdtnPopupOpen, setCmEvlMfcmSpclRcmdtnPopupOpen] =
    useState(false);
  //제외사유팝업
  const [cmEvlExclRsnPopupOpen, setCmEvlExclRsnPopupOpen] = useState(false);
  //SMS통보팝업
  const [cmSmsNtfctnPopupOpen, setCmSmsNtfctnPopupOpen] = useState(false);

  //평가위원 선정 체크 목록
  const [arrCheckedEvlMfcm, setArrCheckedEvlMfcm] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedEvlMfcm(selectedRows);
    },
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
    setCmEvlMfcmMngPopupOpen(false);
  };

  const replaceClick = () => {
    Modal.info({
      title: '새로고침',
    });
  };
  const atmcRcmdtnClick = () => {
    setCmEvlMfcmAtmcRcmdtnPopupOpen(true);
  };
  const spclRcmdtnClick = () => {
    setCmEvlMfcmSpclRcmdtnPopupOpen(true);
  };
  const smsNtfctnClick = () => {
    setCmSmsNtfctnPopupOpen(true);
  };
  const slctnClick = () => {
    Modal.info({
      title: '선정\n' + JSON.stringify(arrCheckedEvlMfcm),
    });
  };
  const slctnExclClick = () => {
    if (arrCheckedEvlMfcm.length > 0) {
      setCmEvlExclRsnPopupOpen(true);
    } else {
      Modal.warning({
        title: '평가위원을 선택해 주세요.',
      });
    }
  };

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c', 'd']));

    //평가 계획 조회
    setEvlAsmt({
      a: '2022',
      b: '평가TEST사업',
      c: '평가TEST사업공고',
      d: '평가TEST사업_평가계획1',
      e: '2022-09-01',
      f: '2022-09-30',
      g: '2022-xxx-000-000001',
      h: 'TEST과제_1',
      i: '도입기업 대표기업',
      j: '도입기업 대표기업 명',
      k: '서울',
      l: '2022-10-10 09:00',
      m: '2022-10-10 18:00',
    });

    //섭외이력 조회
    let tmp = [];
    for (let idx = 1; idx <= 12; idx++) {
      tmp.push({
        key: idx,
        a: '자동추천',
        b: '1회차',
        c: '미선정',
        d: '미정',
        e: '부위원',
        f: '2022-08-15 15:00:00',
        g: '위원5',
        h: '0',
        i: '서울',
        j: '서울',
        k: '위원소속',
        l: '',
        m: '산업계',
      });
    }
    setArrLsnHstry(tmp);
  }, []);

  useEffect(() => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
  }, [ojtSrchCnd]);

  return (
    <>
      <Modal
        key="SptManagePopup"
        open={cmEvlMfcmMngPopupOpen}
        title="평가계획 평가위원 관리(디지털 클러스터)"
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
          <Col span={12}>
            <TitleComp>평가 계획</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              className="eu-btn-crud-fine"
              onClick={atmcRcmdtnClick}
            >
              자동추천
            </Button>
            <Button
              className="eu-btn-crud-fine"
              onClick={spclRcmdtnClick}
            >
              특별추천
            </Button>
          </Col>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="사업연도" span={2}>
                {evlAsmt?.a}
              </Descriptions.Item>
              <Descriptions.Item label="사업명">{evlAsmt?.b}</Descriptions.Item>
              <Descriptions.Item label="수행기관" span={2}>
                {evlAsmt?.c}
              </Descriptions.Item>
              <Descriptions.Item label="담당간사">
                {evlAsmt?.d}
              </Descriptions.Item>
              <Descriptions.Item label="평가계획명" span={2}>
                {evlAsmt?.e}
              </Descriptions.Item>
              <Descriptions.Item label="평가기간">
                {evlAsmt?.f} ~ {evlAsmt?.g}
              </Descriptions.Item>
              <Descriptions.Item label="과제번호" span={2}>
                {evlAsmt?.h}
              </Descriptions.Item>
              <Descriptions.Item label="과제명">{evlAsmt?.i}</Descriptions.Item>
              <Descriptions.Item label="기업 소재지" span={2}>
                {evlAsmt?.j}
              </Descriptions.Item>
              <Descriptions.Item label="현장평가 희망일자">
                {evlAsmt?.k} ~ {evlAsmt?.l}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        {/* <Row className="eu-row-comp-title" style={{ marginTop: 30 }}>
          <Col span={12}>
            <TitleComp>평가위원 조회 조건</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}></Col>
        </Row> */}
        <Row className="eu-row-comp-cont margin-top">
          <Col span={12}>
            <TitleComp>평가위원 조회 조건</TitleComp>
          </Col>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="선정여부">
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'a');
                  }}
                  options={[
                    {
                      value: '',
                      label: '선정',
                    },
                    ...(ojtSrchCnd?.a ? ojtGroupCodes.a : []),
                  ]}
                  defaultValue={''}
                />
              </Descriptions.Item>
              <Descriptions.Item label="선정구분">
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
                  defaultValue={''}
                />
              </Descriptions.Item>
              <Descriptions.Item label="섭외차수">
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'c');
                  }}
                  options={[
                    {
                      value: '',
                      label: '선정',
                    },
                    ...(ojtSrchCnd?.c ? ojtGroupCodes.c : []),
                  ]}
                  defaultValue={''}
                />
              </Descriptions.Item>
              <Descriptions.Item label="참석여부">
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'd');
                  }}
                  options={[
                    {
                      value: '',
                      label: '선정',
                    },
                    ...(ojtSrchCnd?.d ? ojtGroupCodes.d : []),
                  ]}
                  defaultValue={''}
                />
              </Descriptions.Item>
              <Descriptions.Item label="성명">
                <Input
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'e');
                  }}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Col span={12}>
            <TitleComp>평가위원 섭외이력</TitleComp>
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
              onClick={smsNtfctnClick}
            >
              선정통보
            </Button>
            <Button
              className="eu-btn-crud-fine"
              onClick={smsNtfctnClick}
            >
              선정제외통보
            </Button>

            <Button
              className="eu-btn-crud-fine"
              onClick={slctnClick}
            >
              선정
            </Button>
            <Button
              className="eu-btn-crud-error"
              onClick={slctnExclClick}
            >
              선정제외
            </Button>
          </Col>
          <Col span={24}>
            <Table
              key={'arrLsnHstry'}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              columns={arrLsnHstryColumns}
              dataSource={arrLsnHstry}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 300, x: 1600 }}
            />
          </Col>
        </Row>
      </Modal>
      <SptRecomendPopup
        key={'SptRecomendPopup'}
        cmEvlMfcmAtmcRcmdtnPopupOpen={cmEvlMfcmAtmcRcmdtnPopupOpen}
        setCmEvlMfcmAtmcRcmdtnPopupOpen={setCmEvlMfcmAtmcRcmdtnPopupOpen}
      />
      <SptSpeclPopup
        key={'SptSpeclPopup'}
        cmEvlMfcmSpclRcmdtnPopupOpen={cmEvlMfcmSpclRcmdtnPopupOpen}
        setCmEvlMfcmSpclRcmdtnPopupOpen={setCmEvlMfcmSpclRcmdtnPopupOpen}
      />
      <SptExclPopup
        key={'SptExclPopup'}
        arrCheckedEvlMfcm={arrCheckedEvlMfcm}
        cmEvlExclRsnPopupOpen={cmEvlExclRsnPopupOpen}
        setCmEvlExclRsnPopupOpen={setCmEvlExclRsnPopupOpen}
      />
      <CmSmsNtfctn
        key={'CmSmsNtfctn'}
        cmSmsNtfctnPopupOpen={cmSmsNtfctnPopupOpen}
        setCmSmsNtfctnPopupOpen={setCmSmsNtfctnPopupOpen}
      />
    </>
  );
};

export default SptManagePopup;
