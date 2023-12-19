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
  Space,
} from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd } from 'components/common/Common';
import SptHistPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptHistPopup';

const SptSpeclPopup = ({
  cmEvlMfcmSpclRcmdtnPopupOpen,
  setCmEvlMfcmSpclRcmdtnPopupOpen,
}) => {
  //특별추천 조건설정
  const [ojtSpclRcmdtnCnd, setOjtSpclRcmdtnCnd] = useState({});
  //특별추천 평가위원 목록
  const [arrSpclRcmdtn, setArrSpclRcmdtn] = useState([]);
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const [cmEvlMfcmHstryPopupOpen, setCmEvlMfcmHstryPopupOpen] = useState(false);

  const arrSpclRcmdtnColumns = [
    {
      title: '순번',
      dataIndex: 'a',
      width: '7%',
      align: 'center',
    },
    { title: '성명', dataIndex: 'b', width: '10%' },
    { title: '전문가소재지', dataIndex: 'c', width: '11%', align: 'center' },
    { title: '주요지역(TP구분)', dataIndex: 'd', width: '14%', align: 'center' },
    { title: '소속', dataIndex: 'e', width: '13%' },
    { title: '전문분야', dataIndex: 'f', width: '11%' },
    { title: '산학연특', dataIndex: 'g', width: '11%' },
    { title: '전공', dataIndex: 'h', width: '12%' },
    { title: '학위', dataIndex: 'i', width: '11%' },
  ];

  const ojtSpclRcmdtnCndChange = (value, column) => {
    setOjtSpclRcmdtnCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const closeClick = () => {
    setCmEvlMfcmSpclRcmdtnPopupOpen(false);
  };

  //선정
  const slctnClick = () => {
    Modal.info({
      title: '선정 클릭\n' + JSON.stringify(arrCheckedSpclRcmdtn),
    });
  };

  //평가위원 목록 체크박스 클릭
  const [arrCheckedSpclRcmdtn, setArrCheckedSpclRcmdtn] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedSpclRcmdtn(selectedRows);
    },
  };

  //해당과제 평가위원 이력 클릭
  const evlMfcmHstryClick = () => {
    setCmEvlMfcmHstryPopupOpen(true);
  };

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c']));

    //조건설정
    setOjtSpclRcmdtnCnd({
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
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
        h: '전공',
        i: '학위',
      });
    }
    setArrSpclRcmdtn(tmp);
  }, []);

  useEffect(() => {
    console.log('ojtSpclRcmdtnCnd : ', ojtSpclRcmdtnCnd);
  }, [ojtSpclRcmdtnCnd]);

  return (
    <>
      <Modal
        key="SptSpeclPopup"
        open={cmEvlMfcmSpclRcmdtnPopupOpen}
        title="평가위원 특별추천"
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
            <TitleComp>평가위원 검색 조건</TitleComp>
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
                    ojtSpclRcmdtnCndChange(value, 'a');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="전문가소재지 지역">
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtSpclRcmdtnCndChange(value, 'b');
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
                    ojtSpclRcmdtnCndChange(value, 'c');
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
              <Descriptions.Item label="논문명" span={3}>
                <Input
                  onChange={(evt) => {
                    ojtSpclRcmdtnCndChange(evt.target.value, 'd');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="위원명">
                <Input
                  onChange={(evt) => {
                    ojtSpclRcmdtnCndChange(evt.target.value, 'e');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="소속" span={2}>
                <Input
                  onChange={(evt) => {
                    ojtSpclRcmdtnCndChange(evt.target.value, 'f');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="이전 평가위원회 조회" span={3}>
                <Checkbox
                  onChange={(evt) => {
                    ojtSpclRcmdtnCndChange(evt.target.checked, 'g');
                  }}
                >
                  이전 이력 포함
                </Checkbox>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Col span={12}>
            <TitleComp>평가위원 목록</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Space>
              <Button
                className="eu-btn-crud-fine"
                onClick={evlMfcmHstryClick}
              >
                과제 평가위원 이력
              </Button>

              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                className="text-l"
                onChange={(value) => {}}
                options={[
                  {
                    value: '임시코드1',
                    label: '정위원',
                  },
                  {
                    value: '임시코드2',
                    label: '부위원',
                  },
                  ...(ojtGroupCodes?.h ? ojtGroupCodes.h : []),
                ]}
                defaultValue={'임시코드1'}
              />
              <Button
                className="eu-btn-crud-fine"
                onClick={slctnClick}
              >
                선정
              </Button>
            </Space>
          </Col>
          <Col span={24}>
            <Table
              key={'arrSpclRcmdtn'}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              columns={arrSpclRcmdtnColumns}
              dataSource={arrSpclRcmdtn}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 400 }}
            />
          </Col>
        </Row>
      </Modal>

      <SptHistPopup
        key={'SptHistPopup'}
        cmEvlMfcmHstryPopupOpen={cmEvlMfcmHstryPopupOpen}
        setCmEvlMfcmHstryPopupOpen={setCmEvlMfcmHstryPopupOpen}
      />
    </>
  );
};

export default SptSpeclPopup;
