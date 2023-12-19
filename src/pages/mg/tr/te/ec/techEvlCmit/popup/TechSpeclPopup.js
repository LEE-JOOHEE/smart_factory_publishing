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

const TechSpeclPopup = ({
  cmEvlCmitSpclRcmdtnPopupOpen,
  setCmEvlCmitSpclRcmdtnPopupOpen,
}) => {
  //특별추천 조건설정.
  const [ojtSpclRcmdtnCnd, setOjtSpclRcmdtnCnd] = useState({});
  //특별추천 평가위원 목록
  const [arrSpclRcmdtn, setArrSpclRcmdtn] = useState([]);
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const arrSpclRcmdtnColumns = [
    {
      title: '순번',
      dataIndex: 'a',
      width: '9%',
      align: 'center',
    },
    { title: '성명', dataIndex: 'b', width: '11%', },
    { title: '전문가소재지', dataIndex: 'c', width: '11%', align: 'center', },
    { title: '주요지역(TP구분)', dataIndex: 'd', width: '14%', align: 'center', },
    { title: '소속', dataIndex: 'e', width: '12%', },
    { title: '전문분야', dataIndex: 'f', width: '12%', },
    { title: '전공', dataIndex: 'g', width: '11%', },
    { title: '학위', dataIndex: 'h', width: '10%', },
    { title: '산학연특', dataIndex: 'i', width: '10%', },
  ];

  const ojtSpclRcmdtnCndChange = (value, column) => {
    setOjtSpclRcmdtnCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const closeClick = () => {
    setCmEvlCmitSpclRcmdtnPopupOpen(false);
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
      h: '',
      i: '',
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
    setArrSpclRcmdtn(tmp);
  }, []);

  useEffect(() => {
    console.log('ojtSpclRcmdtnCnd : ', ojtSpclRcmdtnCnd);
  }, [ojtSpclRcmdtnCnd]);

  return (
    <>
      <Modal
        key="cmEvlCmitSpclRcmdtnPopupOpen"
        open={cmEvlCmitSpclRcmdtnPopupOpen}
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
          <Row className="eu-row-comp-title">평가위원 검색 조건</Row>
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
                    ojtSpclRcmdtnCndChange(value, 'a');
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
                    ojtSpclRcmdtnCndChange(value, 'b');
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
                    ojtSpclRcmdtnCndChange(value, 'c');
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
                    ojtSpclRcmdtnCndChange(value, 'd');
                  }}
                />
              </Descriptions.Item>

              <Descriptions.Item label="전문가소재지 지역" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtSpclRcmdtnCndChange(value, 'e');
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
                    ojtSpclRcmdtnCndChange(value, 'f');
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
              <Descriptions.Item label="논문명" span={3}>
                <Input
                  onChange={(evt) => {
                    ojtSpclRcmdtnCndChange(evt.target.value, 'g');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="위원명" span={1.5}>
                <Input
                  onChange={(evt) => {
                    ojtSpclRcmdtnCndChange(evt.target.value, 'h');
                  }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="소속" span={1.5}>
                <Input
                  onChange={(evt) => {
                    ojtSpclRcmdtnCndChange(evt.target.value, 'i');
                  }}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>평가위원 목록</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button
                className="eu-btn-crud-fine"
                onClick={slctnClick}
              >
                선정
              </Button>
            </Col>
          </Row>
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
    </>
  );
};

export default TechSpeclPopup;
