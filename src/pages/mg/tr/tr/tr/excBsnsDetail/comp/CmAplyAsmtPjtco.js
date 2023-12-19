import React, { useState } from 'react';
import { Button, Col, Row, Select, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { arrChange } from 'components/common/Common';

// 가격산출내역서
const priceComputationDsctnColums = [
  {
    title: '구분',
    dataIndex: 'a1',
  },
  {
    title: '계',
    dataIndex: 'a2',
    align: 'right',
  },
];

// 신청 사업비 내역
const aplyPjtcoDsctnColums = [
  {
    title: '구분',
    dataIndex: 'b1',
  },
  {
    title: '금액 (단위 : 원)',
    dataIndex: 'b2',
    children: [
      {
        title: '도입기업부담금',
        dataIndex: 'b21',
        children: [
          {
            title: '현금(중도금 및 잔금)',
            dataIndex: 'b211',
            align: 'right',
          },
          {
            title: '도입기업 사업관리 인력 인건비',
            dataIndex: 'b212',
            align: 'right',
          },
          {
            title: '클라우드 서비스 이용료',
            dataIndex: 'b213',
            align: 'right',
          },
          {
            title: '계',
            dataIndex: 'b214',
            align: 'right',
          },
        ],
      },
      {
        title: '정부지원금',
        dataIndex: 'b22',
        align: 'right',
      },
      {
        title: '합계',
        dataIndex: 'b23',
        align: 'right',
      },
    ],
  },
];

// 공통 컬럼(H/W,S/W,N/W)
const commonPurchaseCostColums = [
  {
    title: '구분',
    dataIndex: 'd1',
    width: '10%',
  },
  {
    title: '품명',
    dataIndex: 'd2',
    width: '16%',
  },
  {
    title: '국/외산',
    dataIndex: 'd3',
    width: '7%',
    align: 'center',
  },
  {
    title: '국가',
    dataIndex: 'd4',
    width: '7%',
    align: 'center',
  },
  {
    title: '규격',
    dataIndex: 'd5',
    width: '30%',
  },
  {
    title: '단가',
    dataIndex: 'd6',
    width: '10%',
    align: 'right',
  },
  {
    title: '수량',
    dataIndex: 'd7',
    width: '5%',
    align: 'center',
  },
  {
    title: '계',
    dataIndex: 'd8',
    width: '15%',
    align: 'right',
  },
];

// 공통 컬럼(자동화장비, 제조현장혁신활동, 기타비용)
const commonEtcColums = [
  {
    title: '구분',
    dataIndex: 'e1',
    width: '15%',
  },
  {
    title: '품명',
    dataIndex: 'e2',
    width: '20%',
  },
  {
    title: '규격',
    dataIndex: 'e3',
    width: '20%',
  },
  {
    title: '단가',
    dataIndex: 'e4',
    width: '15%',
    align: 'right',
  },
  {
    title: '수량',
    dataIndex: 'e5',
    width: '10%',
    align: 'center',
  },
  {
    title: '계',
    dataIndex: 'e6',
    width: '20%',
    align: 'right',
  },
];

const CmAplyAsmtPjtco = ({ editable = false }) => {
  // 직접 인건비 산출내역 해더 컬럼
  const lbrcoComputationDsctnColums = [
    {
      title: 'ITSQF 직무',
      dataIndex: 'c1',
      render: (_, record, index) => {
        console.log(record, index);
        return (
          <Select
            placeholder="사업년도 선택"
            onChange={(value) =>
              arrChange(value, 'c1', index, setArrLbrcoComputationDsctn)
            }
            options={[
              {
                value: '',
                label: '없음',
              },
              {
                value: '2022',
                label: '2022',
              },
              {
                value: '2023',
                label: '2023',
              },
              {
                value: '2024',
                label: '2024',
              },
            ]}
            defaultValue={record?.c1}
          />
        );
      },
    },
    {
      title: '성명',
      dataIndex: 'c2',
    },
    {
      title: '단가',
      dataIndex: 'c3',
      align: 'right',
    },
    {
      title: '투입일수',
      dataIndex: 'c4',
      align: 'center',
    },
    {
      title: '금액',
      dataIndex: 'c5',
      align: 'right',
    },
    {
      title: '비고',
      dataIndex: 'c6',
    },
  ];

  // 가격 산출 내역서
  const [arrPriceComputationDsctn, setArrPriceComputationDsctn] = useState([
    {
      a1: 'H/W 개발비',
      a2: '0',
    },
    {
      a1: 'S/W 개발비',
      // a2: '20000000',
      a2: 20000000,
    },
    {
      a1: '자동화장비',
      a2: '20000000',
    },
    {
      a1: '기타(할인) 비용',
      a2: '-8020000',
    },
    {
      a1: '클라우드 기반 서비스 이용료',
      a2: '0',
    },
    {
      a1: '도입기업의 사업관리 인력 인건비',
      a2: '0',
    },
    {
      a1: '제조현장혁신활동',
      a2: '5250000',
    },
  ]);
  //신청 사업비 내역
  const [arrAplyPjtcoDsctn, setArrAplyPjtcoDsctn] = useState([
    {
      b1: '신청 사업비 금액',
      b211: '20,000,000',
      b212: '0',
      b213: '0',
      b214: '20,000,000',
      b22: '20,000,000',
      b23: '40,000,000',
    },
  ]);
  //직접 인건비 산출내역
  const [arrLbrcoComputationDsctn, setArrLbrcoComputationDsctn] = useState([
    {
      c1: '',
      c2: '이름1',
      c3: '0',
      c4: '20',
      c5: '0',
      c6: '',
    },
  ]);
  //HW 구입비
  const [arrHwPurchaseCost, setArrHwPurchaseCost] = useState([
    {
      d1: '서버 스토리지',
      d2: 'Server PC',
      d3: '국산',
      d4: '한국',
      d5: 'HP(社)intel core i5-9400(3.2GHz)16GB DDR4 (PC4-17000)\nSSD256GB+1TB SATAIntel HD Graphics 530 VGDVD-ROMWINDOWS10(OS)24"모니터포함',
      d6: '150000',
      d7: '1',
      d8: '150000',
    },
    {
      d1: 'N/W장비',
      d2: 'Wi-Fi어댑터(USB)',
      d3: '국산',
      d4: '한국',
      d5: 'ipTIME(社)N150UA3USB 무선랜카드/USB크래들 (802.11b/g/n)\n159Mbps(2.4GHz)USB2.0LED Link/ACT4dBi일체형안테나\nWPA-PSKWPA2PSK802.1x/AESTKIP본체USB크래들구성',
      d6: '20000',
      d7: '12',
      d8: '240000',
    },
    {
      d1: 'N/W장비',
      d2: 'Wi-Fi AP',
      d3: '국산',
      d4: '한국',
      d5: 'ipTIME(社) A3004NSWAN/LAN 공유기802.11a/b/g/n/a\n400Mbps+867Mbps(2.4GHz)+(5GHz)2WANLAN*4Console4x4MIMOPoE\nAdapter포함5dbi무선안테나AP보호용 함체 포함',
      d6: '100000',
      d7: '1',
      d8: '100000',
    },
  ]);
  //SW 구입비
  const [arrSwPurchaseCost, setArrSwPurchaseCost] = useState([
    {
      d1: '(FP)기능점수',
      d2: '기능점수',
      d3: '국산',
      d4: '한국',
      d5: '69.55',
      d6: '41164991',
      d7: '1',
      d8: '41164991',
    },
    {
      d1: '(FP)이윤',
      d2: '이윤',
      d3: '국산',
      d4: '한국',
      d5: '이윤(5%)',
      d6: '2058250',
      d7: '1',
      d8: '2058250',
    },
    {
      d1: '(FP)직접경비',
      d2: '직접경비',
      d3: '국산',
      d4: '한국',
      d5: '규격 입력 필요',
      d6: '0',
      d7: '1',
      d8: '0',
    },
  ]);
  //NW 구입비
  const [arrNwPurchaseCost, setArrNwPurchaseCost] = useState([
    {
      d1: '네트워크공사',
      d2: '네트워크 공사 및 주변기기 설치',
      d3: '국산',
      d4: '한국',
      d5: '네트워크 설치공사 및 부변기기 설치',
      d6: '2000000',
      d7: '1',
      d8: '2000000',
    },
  ]);
  //자동화장비
  const [arrAtmcEqpmnt, setArrAtmcEqpmnt] = useState([
    {
      e1: '자동화장비',
      e2: '기구Unit',
      e3: '기구제작Unit(제작사양)',
      e4: '81500000',
      e5: '1',
      e6: '81500000',
    },
    {
      e1: '자동화장비',
      e2: '전장/제어Unit',
      e3: '전장 및 제어부(제작사양)',
      e4: '20000000',
      e5: '1',
      e6: '20000000',
    },
    {
      e1: '자동화장비',
      e2: '인건비(제작)',
      e3: '설계 및 조립/테스트',
      e4: '18500000',
      e5: '1',
      e6: '18500000',
    },
    {
      e1: '자동화장비',
      e2: '인건비(제작)',
      e3: '셋업 및 양산대기',
      e4: '4500000',
      e5: '1',
      e6: '4500000',
    },
    {
      e1: '자동화장비',
      e2: '기구Unit',
      e3: '운송료(국내운송5톤)',
      e4: '200000',
      e5: '1',
      e6: '200000',
    },
  ]);
  //제조현장혁신활동
  const [arrMnftrSpt, setArrMnftrSpt] = useState([
    {
      e1: '현장점검',
      e2: '현장점검비',
      e3: '최초/중간/최종점검',
      e4: '165000',
      e5: '1',
      e6: '165000',
    },
    {
      e1: '제조현장혁신',
      e2: '원가계산비',
      e3: '원가계산',
      e4: '300000',
      e5: '1',
      e6: '300000',
    },
    {
      e1: '제조현장혁신',
      e2: '수준확인비',
      e3: '수준확인/최종평가',
      e4: '550000',
      e5: '1',
      e6: '550000',
    },
    {
      e1: 'PI지원',
      e2: 'PI컨설팅비',
      e3: 'PI컨설팅',
      e4: '550000',
      e5: '5',
      e6: '2750000',
    },
  ]);
  //기타(할인) 비용
  const [arrEtcCost, setArrEtcCost] = useState([
    {
      e1: '기타비용',
      e2: 'FP 기능점수',
      e3: '7.9',
      e4: '165000',
      e5: '1',
      e6: '165000',
    },
    {
      e1: '기타비용',
      e2: 'FP 기능점수',
      e3: '개발비 할인',
      e4: '300000',
      e5: '1',
      e6: '300000',
    },
  ]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>
            가격산출내역서
            <span className="eu-unit">( 단위 : 원 / VAT별도 )</span>
          </TitleComp>
        </Col>

        {editable && (
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button size="small" className="eu-btn-crud-fine">
              수정
            </Button>
          </Col>
        )}
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={priceComputationDsctnColums}
            dataSource={arrPriceComputationDsctn}
            size="small"
            scroll={{ y: 600 }}
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['a2'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell index={0}>합계</Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align={'right'} className="pr-28">{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-30">
        <Col span={12}>
          <TitleComp>신청 사업비 내역</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={aplyPjtcoDsctnColums}
            dataSource={arrAplyPjtcoDsctn}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-30">
        <Col span={12}>
          <TitleComp>
            {'<직접인건비 산출내역>'}
            <span className="eu-unit">( 단위 : 원 / VAT별도 )</span>
          </TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={lbrcoComputationDsctnColums}
            dataSource={arrLbrcoComputationDsctn}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['c5'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={4} index={4}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell align={'right'}>{sum}</Table.Summary.Cell>
                    <Table.Summary.Cell></Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-30">
        <Col span={12}>
          <TitleComp>H/W구입비
            <span className="eu-unit">( 단위 : 원 / VAT별도 )</span>
          </TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={commonPurchaseCostColums}
            dataSource={arrHwPurchaseCost}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['d8'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={7} index={0}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align={'right'}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-30">
        <Col span={12}>
          <TitleComp>S/W구입비
            <span className="eu-unit">( 단위 : 원 / VAT별도 )</span>
          </TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={commonPurchaseCostColums}
            dataSource={arrSwPurchaseCost}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['d8'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={7} index={0}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align={'right'}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-30">
        <Col span={12}>
          <TitleComp>N/W구입비
            <span className="eu-unit">( 단위 : 원 / VAT별도 )</span>
          </TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={commonPurchaseCostColums}
            dataSource={arrNwPurchaseCost}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['d8'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={7} index={0}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align={'right'}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-30">
        <Col span={12}>
          <TitleComp>자동화장비
            <span className="eu-unit">( 단위 : 원 / VAT별도 )</span>
          </TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={commonEtcColums}
            dataSource={arrAtmcEqpmnt}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['e6'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={5} index={0}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align={'right'}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-30">
        <Col span={12}>
          <TitleComp>제조현장혁신활동
            <span className="eu-unit">( 단위 : 원 / VAT별도 )</span>
          </TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={commonEtcColums}
            dataSource={arrMnftrSpt}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['e6'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={5} index={0}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align={'right'}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-30">
        <Col span={12}>
          <TitleComp>기타(할인) 비용
            <span className="eu-unit">( 단위 : 원 / VAT별도 )</span>
          </TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={commonEtcColums}
            dataSource={arrEtcCost}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['e6'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={5} index={0}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} align={'right'}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default CmAplyAsmtPjtco;
