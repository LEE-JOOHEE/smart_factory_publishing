import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from 'antd';
import 'css/CommonUsr.css';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd, ojtChange } from 'components/common/Common';

import SubPage4pop2 from 'components/layout/html/SubPage4_pop_2';

const { Text, Link } = Typography;

const SuplyEntrprsSearch01 = () => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //구축실적 검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '',
    a9: '',
    a10: '',
    a11: '',
    a12: '',
    a13: '',
    a14: '',
    a15: '',
  });

  // 구축실적 정렬기준
  const [ojtCnstcPrfmncSortCrtr, setOjtCnstcPrfmncSortCrtr] = useState({
    a1: '',
    a2: '',
  });

  // 구축실적목록
  const [arrCnstcPrfmnc, setArrCnstcPrfmnc] = useState([]);

  // 공급기업명 링크 클릭시, 공급기업(기본정보) 화면 이동
  const [cmEvlMfcmSgnPopupOpen2, setCmEvlMfcmSgnPopupOpen2] = useState(false);
  const detailClick = () => {
    setCmEvlMfcmSgnPopupOpen2(true);
  };

  const arrCnstcPrfmncColumns = [
    {
      title: '순위',
      dataIndex: 'a1',
      width: '8%',
      align: 'center',
    },
    {
      title: '공급기업명',
      dataIndex: 'a2',
      width: '15%',
      render: (_, record) => {
        return (
          <Button
            type="link"
            className="eu-btn-link"
            onClick={() => {
              // Modal.info({
              //   title: `공급기업(기본정보) 화면 이동 key: ${record.key}`,
              // });
              detailClick(record)
            }}
          >
            {record?.a2}
          </Button>
        );
      },
    },
    {
      title: '구축건수',
      dataIndex: 'a3',
      width: '9%',
      align: 'center',
    },
    {
      title: '솔루션매칭율',
      dataIndex: 'a4',
      width: '9%',
      align: 'center',
    },
    {
      title: '레벨매칭율',
      dataIndex: 'a5',
      width: '9%',
      align: 'center',
    },
    {
      title: '업종매칭율',
      dataIndex: 'a6',
      width: '9%',
      align: 'center',
    },
    {
      title: '사업구분매칭율',
      dataIndex: 'a7',
      width: '10%',
      align: 'center',
    },
    {
      title: '구축결과매칭율',
      dataIndex: 'a8',
      width: '10%',
      align: 'center',
    },
    {
      title: '종사자규모매칭율',
      dataIndex: 'a9',
      width: '11%',
      align: 'center',
    },
    {
      title: '매출규모매칭율',
      dataIndex: 'a10',
      width: '10%',
      align: 'center',
    },
  ];

  //테이블 선택
  const [arrCnstcPrfmncChecked, setArrCnstcPrfmncChecked] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCnstcPrfmncChecked(selectedRows);
    },
  };

  const searchClick = () => {
    Modal.info({
      title: 'searchClick : ' + JSON.stringify(ojtSrchCnd),
    });
  };

  const saveClick = () => {
    Modal.info({
      title: 'arrCnstcPrfmncChecked : ' + JSON.stringify(arrCnstcPrfmncChecked),
    });
  };

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a1', 'a2']));

    let tmp = [];
    for (let idx = 1; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: idx,
        a2: '공급기업명_' + idx,
        a3: '0.0',
        a4: '0.0',
        a5: '0.0',
        a6: '0.0',
        a7: '0.0',
        a8: '0.0',
        a9: '0.0',
        a10: '0.0',
      });
    }
    setArrCnstcPrfmnc(tmp);
  }, []);
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          {/* <TitleComp>구축실적 검색조건</TitleComp> */}
          <div className="headline mb-10">구축실적 검색조건</div>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            onClick={searchClick}
          >
            조회
          </Button>
          <Button
            className="eu-btn-crud-fine"
            onClick={saveClick}
          >
            저장
          </Button>
        </Col>
      </Row>

      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="공급기업소재지">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtChange(value, 'a1', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item label="솔루션">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtChange(value, 'a2', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.b ? ojtGroupCodes.b : []),
                ]}
                value={ojtSrchCnd?.a2}
              />
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량수준" className="break">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtChange(value, 'a3', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.c ? ojtGroupCodes.c : []),
                ]}
                value={ojtSrchCnd?.a3}
              />
            </Descriptions.Item>
            <Descriptions.Item label="업종" span={3}>
              <div className="flex-row flex-wrap gap-6">
                <Space className="space-full flex-1 flex-wrap">
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 0] }}
                    onChange={(value) => {
                      ojtChange(value, 'a4', setOjtSrchCnd);
                    }}
                    options={[
                      {
                        value: '',
                        label: '전체',
                      },
                      ...(ojtSrchCnd?.d ? ojtGroupCodes.d : []),
                    ]}
                    value={ojtSrchCnd?.a4}
                  />
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 0] }}
                    onChange={(value) => {
                      ojtChange(value, 'a5', setOjtSrchCnd);
                    }}
                    options={[
                      {
                        value: '',
                        label: '전체',
                      },
                      ...(ojtSrchCnd?.e ? ojtGroupCodes.e : []),
                    ]}
                    value={ojtSrchCnd?.a5}
                  />
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 0] }}
                    onChange={(value) => {
                      ojtChange(value, 'a6', setOjtSrchCnd);
                    }}
                    options={[
                      {
                        value: '',
                        label: '전체',
                      },
                      ...(ojtSrchCnd?.e ? ojtGroupCodes.e : []),
                    ]}
                    value={ojtSrchCnd?.a6}
                  />
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 0] }}
                    onChange={(value) => {
                      ojtChange(value, 'a7', setOjtSrchCnd);
                    }}
                    options={[
                      {
                        value: '',
                        label: '전체',
                      },
                      ...(ojtSrchCnd?.e ? ojtGroupCodes.e : []),
                    ]}
                    value={ojtSrchCnd?.a7}
                  />
                </Space>
                <Space className="space-full">
                  <div className="font-bold-500">업종코드 :</div>
                  <Input
                    onChange={(evt) => {
                      ojtChange(evt.target.value, 'a8', setOjtSrchCnd);
                    }}
                    value={ojtSrchCnd?.a8}
                  />
                </Space>
              </div>
            </Descriptions.Item>
            <Descriptions.Item label="사업분류">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtChange(value, 'a9', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a9}
              />
            </Descriptions.Item>
            <Descriptions.Item label="세부공고명" span={2}>
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a10', setOjtSrchCnd);
                }}
                value={ojtGroupCodes?.a10}
              />
            </Descriptions.Item>
            <Descriptions.Item label="구축결과" span={1}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtChange(value, 'a11', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a11}
              />
            </Descriptions.Item>
            <Descriptions.Item label="종사자규모" span={1}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtChange(value, 'a12', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a12}
              />
            </Descriptions.Item>
            <Descriptions.Item label="매출규모" span={1}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtChange(value, 'a13', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.b ? ojtGroupCodes.b : []),
                ]}
                value={ojtSrchCnd?.a13}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      {/* <Text className="font-16-400 text-black">(2019년 이후 스마트공장 실적 데이터 기준)</Text> */}
      <div className="font-16-400 text-black mt-10">(2019년 이후 스마트공장 실적 데이터 기준)</div>

      <Row className="eu-row-comp-title margin-top">
        <Col span={24}>
          {/* <TitleComp>구축실적 정렬기준</TitleComp> */}
          <div className="headline mb-10">구축실적 정렬기준</div>
        </Col>
      </Row>

      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="매칭순위">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtChange(value, 'a1', setOjtCnstcPrfmncSortCrtr);
                }}
                options={[
                  {
                    value: '',
                    label: '구축건수 기준',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
                value={ojtCnstcPrfmncSortCrtr?.a2}
              />
            </Descriptions.Item>
            <Descriptions.Item label="매칭율" span={2}>
              <Space className="flex-wrap">
                <Input
                  onChange={(evt) => {
                    ojtChange(
                      evt.target.value,
                      'a2',
                      setOjtCnstcPrfmncSortCrtr
                    );
                  }}
                  value={ojtCnstcPrfmncSortCrtr?.a2}
                />
                <Text>% 이상(매칭순위 기준)</Text>
              </Space>
            </Descriptions.Item>
          </Descriptions>
          <div className="font-16-500 lh-190 mb-12 mt-20">
            ※ 공급기업 검색 시 매칭율 기준 적용 (2019년 이후 스마트공장 실적
            데이터 기준)
          </div>
          <div className="font-16-400 lh-190 mb-4">
            1. 검색하고자 하는 기업(공급기업)의 [기업소재지]를 선택합니다.
          </div>
          <div className="font-16-400 lh-190 mb-4">
            2. 검색하는 기업(도입기업)에서 구축하고자 하는 [솔루션], [레벨],
            [업종], [종사자규모], [매출규모] 등을 선택합니다.
          </div>
          <div className="font-16-400 lh-190 mb-4">
            3. 검색데이터 정렬기준은 [매칭순위]에서 선택(기본:구축건수)하고,
            해당 기준의 [매칭율] 조건(기본:0%이상)을 입력합니다.
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top mb-8">
        <Col span={12} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">{arrCnstcPrfmnc?.length}</span>건
            </div>
          </div>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <span className="eu-unit">(단위 : %)</span>
        </Col>
        
      </Row>

      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            className="table-layout-fixed"
            key={'arrCnstcPrfmncTable'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrCnstcPrfmncColumns}
            dataSource={arrCnstcPrfmnc}
            size="small"
            bordered
            pagination={{ showSizeChanger: false, pageSize: 10 }}
            scroll={{y:300, x: 820}}
          />
        </Col>
      </Row>


      <SubPage4pop2
        key="TechSignPopup2"
        cmEvlMfcmSgnPopupOpen2={cmEvlMfcmSgnPopupOpen2}
        setCmEvlMfcmSgnPopupOpen2={setCmEvlMfcmSgnPopupOpen2}
      />
    </>
  );
};

export default SuplyEntrprsSearch01;
