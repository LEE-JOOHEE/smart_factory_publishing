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
import TechExclPopup from 'pages/mg/tr/te/ec/techEvlCmit/popup/TechExclPopup';
import CmSmsNtfctn from 'pages/cm/cm/CmSmsNtfctn';
import TechRecomendPopup from 'pages/mg/tr/te/ec/techEvlCmit/popup/TechRecomendPopup';
import TechSpeclPopup from 'pages/mg/tr/te/ec/techEvlCmit/popup/TechSpeclPopup';

const TechManagePopup = ({
  evlCmitMfcmMngPopupOpen,
  setEvlCmitMfcmMngPopupOpen,
}) => {
  const arrLsnHstryColumns = [
    { title: '선정여부', dataIndex: 'a', width: '6%', align: 'center', },
    { title: '선정구분', dataIndex: 'b', width: '8%', align: 'center', },
    { title: '섭외차수', dataIndex: 'c', width: '6%', align: 'center', },
    { title: '참석여부', dataIndex: 'd', width: '6%', align: 'center', },
    { title: '섭외일자', dataIndex: 'e', width: '10%', align: 'center', },
    { title: '성명', dataIndex: 'f', width: '8%', },
    { title: '전문가소재지', dataIndex: 'g', width: '6%', align: 'center', },
    { title: '주요지역\n(TP구분)', dataIndex: 'h', width: '7%', align: 'center', },
    { title: '소속', dataIndex: 'i', width: '8%', },
    { title: '전문분야', dataIndex: 'j', width: '8%', },
    { title: '전공', dataIndex: 'k', width: '9%', },
    { title: '학위', dataIndex: 'l', width: '9%', },
    { title: '산학연특', dataIndex: 'm', width: '8%', },
  ];

  //평가위원회
  const [evlCmit, setEvlCmit] = useState({});

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
  const [cmEvlCmitAtmcRcmdtnPopupOpen, setCmEvlCmitAtmcRcmdtnPopupOpen] =
    useState(false);
  //특별추천팝업
  const [cmEvlCmitSpclRcmdtnPopupOpen, setCmEvlCmitSpclRcmdtnPopupOpen] =
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
    setEvlCmitMfcmMngPopupOpen(false);
  };

  const replaceClick = () => {
    Modal.info({
      title: '새로고침',
    });
  };
  const atmcRcmdtnClick = () => {
    setCmEvlCmitAtmcRcmdtnPopupOpen(true);
  };
  const spclRcmdtnClick = () => {
    setCmEvlCmitSpclRcmdtnPopupOpen(true);
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

    //평가 위원회
    setEvlCmit({
      a: '2022',
      b: '사업명',
      c: '수행기관명',
      d: '간사명',
      e: '평가TEST사업_평가위원회1',
      f: '2022-09-01',
      g: '2022-09-30',
      h: '평가TEST사업_평가위원회1_분과1',
      i: '간사명',
      j: '추진단/본원(대전)/제3평가장',
      k: '2022-10-10',
    });

    //섭외이력 조회
    let tmp = [];
    for (let idx = 1; idx <= 12; idx++) {
      tmp.push({
        key: idx,
        a: '선정',
        b: '자동추천',
        c: '1회차',
        d: '참석',
        e: '2022-08-15',
        f: '위원1',
        g: '서울',
        h: '서울',
        i: '위원소속',
        j: '전문분야',
        k: '전공',
        l: '학위',
        m: '산학연특',
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
        key="evlCmitMfcmMngPopupOpen"
        open={evlCmitMfcmMngPopupOpen}
        title="평가위원회 평가위원 관리"
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
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>평가 위원회</TitleComp>
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
          </Row>
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="사업연도">
                {evlCmit?.a}
              </Descriptions.Item>
              <Descriptions.Item label="사업명" span={2}>
                {evlCmit?.b}
              </Descriptions.Item>
              <Descriptions.Item label="수행기관">
                {evlCmit?.c}
              </Descriptions.Item>
              <Descriptions.Item label="총괄간사" span={2}>
                {evlCmit?.d}
              </Descriptions.Item>
              <Descriptions.Item label="평가위원회명">
                {evlCmit?.e}
              </Descriptions.Item>
              <Descriptions.Item label="평가기간" span={2}>
                {evlCmit?.f} ~ {evlCmit?.g}
              </Descriptions.Item>
              <Descriptions.Item label="분과명">{evlCmit?.h}</Descriptions.Item>
              <Descriptions.Item label="담당간사" span={2}>
                {evlCmit?.i}
              </Descriptions.Item>
              <Descriptions.Item label="평가장소">
                {evlCmit?.j}
              </Descriptions.Item>
              <Descriptions.Item label="분과평가일자" span={2}>
                {evlCmit?.k}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">평가위원 조회 조건</Row>
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
          <Row className="eu-row-comp-title mb-0">
            <Col span={8}>
              <TitleComp>평가위원 섭외이력</TitleComp>
            </Col>
            <Col span={16} style={{ textAlign: 'right' }}>
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
          </Row>
          <Col span={24}>
            <Table
              key={'arrLsnHstry'}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              columns={arrLsnHstryColumns}
              dataSource={arrLsnHstry}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 300, x: 1400 }}
            />
          </Col>
        </Row>
      </Modal>
      <TechRecomendPopup
        key={'TechRecomendPopup'}
        cmEvlCmitAtmcRcmdtnPopupOpen={cmEvlCmitAtmcRcmdtnPopupOpen}
        setCmEvlCmitAtmcRcmdtnPopupOpen={setCmEvlCmitAtmcRcmdtnPopupOpen}
      />
      <TechSpeclPopup
        key={'TechSpeclPopup'}
        cmEvlCmitSpclRcmdtnPopupOpen={cmEvlCmitSpclRcmdtnPopupOpen}
        setCmEvlCmitSpclRcmdtnPopupOpen={setCmEvlCmitSpclRcmdtnPopupOpen}
      />
      <TechExclPopup
        key={'TechExclPopup'}
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

export default TechManagePopup;
