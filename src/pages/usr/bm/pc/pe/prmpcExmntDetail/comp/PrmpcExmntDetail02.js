import React, { useState } from 'react';
import { Col, Row, Table, Select } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { arrChange } from 'components/common/Common';

const PrmpcExmntDetail02 = () => {
  // 직접 인건비 산출내역 해더 컬럼
  const lbrcoComputationDsctnColums = [
    {
      title: 'ITSQF 직무',
      dataIndex: 'c1',
    },
    {
      title: '성명',
      dataIndex: 'c2',
    },
    {
      title: '단가',
      dataIndex: 'c3',
    },
    {
      title: '투입일수',
      dataIndex: 'c4',
    },
    {
      title: '금액',
      dataIndex: 'c5',
    },
    {
      title: '비고',
      dataIndex: 'c6',
    },
  ];
  // SW 개발비
  const swDvlopCtColumns = [
    {
      title: '구분',
      dataIndex: 'a1',
    },
    { title: '산출내역', dataIndex: 'a2' },
    { title: '금액', dataIndex: 'a3' },
    { title: '비고', dataIndex: 'a4' },
  ];
  // 공통 컬럼(H/W,S/W,N/W)
  const commonPurchaseCostColums = [
    {
      title: '구분',
      dataIndex: 'd1',
    },
    {
      title: '품명',
      dataIndex: 'd2',
    },
    {
      title: '국/외산',
      dataIndex: 'd3',
    },
    {
      title: '국가',
      dataIndex: 'd4',
    },
    {
      title: '규격',
      dataIndex: 'd5',
    },
    {
      title: '단가',
      dataIndex: 'd6',
    },
    {
      title: '수량',
      dataIndex: 'd7',
    },
    {
      title: '계',
      dataIndex: 'd8',
    },
  ];

  // 공통 컬럼(자동화장비, 제조현장혁신활동, 기타비용)
  const commonEtcColums = [
    {
      title: '구분',
      dataIndex: 'e1',
    },
    {
      title: '품명',
      dataIndex: 'e2',
    },
    {
      title: '규격',
      dataIndex: 'e3',
    },
    {
      title: '단가',
      dataIndex: 'e4',
    },
    {
      title: '수량',
      dataIndex: 'e5',
    },
    {
      title: '계',
      dataIndex: 'e6',
    },
  ];
  // 클라우드 기반 서비스 이용료
  const cloudSrvcUtztnCtColumns = [
    {
      title: '구분',
      dataIndex: 'a1',
    },
    {
      title: '품명',
      dataIndex: 'a2',
    },
    {
      title: '규격',
      dataIndex: 'a3',
    },
    {
      title: '단가',
      dataIndex: 'a4',
    },
    {
      title: '기간(월)',
      dataIndex: 'a5',
    },
    {
      title: '비고',
      dataIndex: 'a6',
    },
    {
      title: '계',
      dataIndex: 'a7',
    },
  ];
  // 도입기업 사업관리 인력 인건비
  const indcEntBizMngLbrcoColumns = [
    { title: '수행업무', dataIndex: 'a1' },
    { title: '성명', dataIndex: 'a2' },
    { title: '월급여', dataIndex: 'a3' },
    { title: '투입기간(월)', dataIndex: 'a4' },
    { title: '투입률(%)', dataIndex: 'a5' },
    { title: '금액', dataIndex: 'a6' },
  ];

  //직접 인건비 산출내역
  const [arrLbrcoComputationDsctn, setArrLbrcoComputationDsctn] = useState([
    {
      c1: 'IT PMO',
      c2: '이름1',
      c3: '0',
      c4: '20',
      c5: '0',
      c6: '',
    },
  ]);
  // SW 개발비
  const [arrSwDvlopCt, setArrSwDvlopCt] = useState([
    {
      key: 1,
      a1: '직접인건비',
      a2: '100.00%',
      a3: 31999920,
      a4: '2019년도 적용 S/W기술자 평균임금 공표',
    },
    {
      key: 2,
      a1: '재경비',
      a2: '직접인건비 X 11.00%',
      a3: 9599976,
      a4: '제경비 비율은 100%를 초과할 수 없음',
    },
    {
      key: 3,
      a1: '기술료',
      a2: '(직접인건비 + 재경비) X 11.00%',
      a3: 4159989,
      a4: '기술료 비율은 10%를 초과할 수 없음',
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
  // 클라우드 기반 서비스 이용료
  const [arrCloudSrvcUtztnCt, setArrCloudSrvcUtztnCt] = useState([
    { a1: '-', a2: '', a3: '', a4: '', a5: '', a6: '', a7: 3000000 },
  ]);
  // 도입기업 사업관리 인력 인건비
  const [arrIndcEntBizMngLbrco, setArrIndcEntBizMngHnfLbrco] = useState([
    { a1: '-', a2: '', a3: '', a4: '', a5: '', a6: 5000000 },
  ]);

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>{'<직접인건비 산출내역>'}</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>(단위:원/VAT별도)</Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
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
                    <Table.Summary.Cell>{sum}</Table.Summary.Cell>
                    <Table.Summary.Cell></Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>S/W 개발비 (개발 용역비)</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>(단위:원/VAT별도)</Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={swDvlopCtColumns}
            dataSource={arrSwDvlopCt}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['a3'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={2} index={0}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>H/W구입비</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>(단위:원/VAT별도)</Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
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
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>S/W구입비</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>(단위:원/VAT별도)</Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
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
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>N/W구축비</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>(단위:원/VAT별도)</Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
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
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>자동화장비</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>(단위:원/VAT별도)</Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
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
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>기타(할인) 비용</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>(단위:원/VAT별도)</Col>
      </Row>
      <div style={{ color: 'red' }}>
        ※ 할인금액은 단가 입력시 "-"를 붙여 입력 해주셔야 합니다.
      </div>
      <Row className="eu-usr-row-comp-cont">
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
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>클라우드 기반 서비스 이용료</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>(단위:원/VAT별도)</Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={cloudSrvcUtztnCtColumns}
            dataSource={arrCloudSrvcUtztnCt}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['a7'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={6} index={0}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>도입기업 사업관리 인력 인건비</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>
          (단위:원/VAT별도)
          <span style={{ color: 'red' }}>
            ※ 중요 : 도입기업의 사업관리 인력 인건비는 기업부담금의 20%를 넘을
            수 없습니다.
          </span>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={indcEntBizMngLbrcoColumns}
            dataSource={arrIndcEntBizMngLbrco}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['a6'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={5} index={0}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>제조현장혁신활동</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>(단위:원/VAT별도)</Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
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
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
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

export default PrmpcExmntDetail02;
