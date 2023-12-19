import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Modal,
  Radio,
  Row,
  Table,
  Tabs,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SprvisnLevelPopup from 'pages/mg/rm/lc/sr/sprvisnResultList/popup/SprvisnLevelPopup';

//첨부문서
const columns = [
  {
    title: '항목',
    dataIndex: 'a1',
  },
  {
    title: '첨부파일',
    dataIndex: 'a2',
  },
  {
    title: '등록일',
    dataIndex: 'a3',
  },
  {
    title: '파일크기',
    dataIndex: 'a4',
  },
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
const SprvisnLastResult02 = ({ ojtDetailInfo }) => {
  let arrRowKey = [];
  let arrGroupKey = [];
  const sharedOnCell = (record, index) => {
    if (arrRowKey.includes(record.key)) {
      //Merge row key 가 같으면 무조건 rowspan 지정
      return {
        rowSpan: record.g,
      };
    } else {
      if (record.g > 0) {
        if (arrGroupKey.includes(record.a2)) {
          //Merge row key가 다르고 그룹키가 같으면 rowspan = 0
          return {
            rowSpan: 0,
          };
        } else {
          //그룹키가 없으면 신규 merge row
          arrRowKey.push(record.key);
          arrGroupKey.push(record.a2);
          return {
            rowSpan: record.g,
          };
        }
      }
      return {};
    }
  };

  // 성과지표 테이블 헤더
  const rsltIdxColums = [
    {
      title: '순번',
      dataIndex: 'a1',
    },
    {
      title: '구분',
      dataIndex: 'a2',

      onCell: sharedOnCell,
    },
    {
      title: '성과지표',
      dataIndex: 'a3',
    },
    {
      title: '핵심지표여부',
      dataIndex: 'a4',
    },
    {
      title: '지표특성',
      dataIndex: 'a5',
    },
    {
      title: '단위',
      dataIndex: 'a6',
    },
    {
      title: '구축전',
      dataIndex: 'a7',
    },
    {
      title: '목표',
      dataIndex: 'a8',
    },
    {
      title: '구축후',
      dataIndex: 'a9',
    },
    {
      title: '목표달성률',
      dataIndex: 'a10',
    },
    {
      title: '개선률',
      dataIndex: 'a11',
    },
    {
      title: '가중치',
      dataIndex: 'a12',
    },
    {
      title: '비고',
      dataIndex: 'a13',
    },
  ];

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
  //첨부파일
  const [arrAttFile, setArrAttFile] = useState([
    {
      a1: '최종감리 시정조치계획서',
      a2: '(주)도입기업 완료보고서',
      a3: '2021-03-30',
      a4: '1010kb',
    },
  ]);

  //성과지표입력
  const [arrRsltIdx, setArrRsltIdx] = useState([]);

  useEffect(() => {
    let tmp2 = [];
    for (let idx = 1; idx <= 6; idx++) {
      tmp2.push({
        a1: idx,
        a2: '구분1',
        a3: '시간단생산량',
        a4: 'O',
        a5: '증가특성',
        a6: 'm/hr',
        a7: '5.20',
        a8: '6',
        a9: '6.20',
        a10: '1.25',
        a11: '19.2',
        a12: '0.50',
        a13: '',
        g: idx === 1 ? 6 : 0,
      });
    }
    for (let idx = 6; idx <= 11; idx++) {
      tmp2.push({
        a1: idx,
        a2: '구분2',
        a3: '시간단생산량',
        a4: 'O',
        a5: '증가특성',
        a6: 'm/hr',
        a7: '5.20',
        a8: '6',
        a9: '6.20',
        a10: '1.25',
        a11: '19.2',
        a12: '0.50',
        a13: '',
        g: idx === 6 ? 6 : 0,
      });
    }
    setArrRsltIdx(tmp2);
  }, []);

  const [sprvisnLevelOpen, setSprvisnLevelOpen] = useState(false);

  const hstryClick = () => {
    setSprvisnLevelOpen(true);
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>시정조치결과확인서</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            size="small"
            onClick={() => {
              hstryClick();
            }}
          >
            수준확인 저장 이력조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="구축시스템 스마트화 수준" span={3}>
              <Radio.Group disabled defaultValue={ojtDetailInfo?.a1}>
                <Radio value={'기초'}>기초</Radio>
                <Radio value={'중간1'}>중간 1</Radio>
                <Radio value={'중간2'}>중간 2</Radio>
                <Radio value={'고도화'}>고도화</Radio>
              </Radio.Group>
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 수준" span={3}>
              <Radio.Group disabled defaultValue={ojtDetailInfo?.a2}>
                <Radio value={'Level1'}>Level 1</Radio>
                <Radio value={'Level2'}>Level 2</Radio>
                <Radio value={'Level3'}>Level 3</Radio>
                <Radio value={'Level4'}>Level 4</Radio>
                <Radio value={'Level5'}>Level 5</Radio>
              </Radio.Group>
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 총점" span={3}>
              {ojtDetailInfo?.a3}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>첨부문서</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrAttFile}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 120 }}
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>H/W구입비</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>(단위:원/VAT별도)</Col>
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
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>S/W구입비</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>(단위:원/VAT별도)</Col>
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
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>N/W구입비</TitleComp>
        </Col>
      </Row>
      <Row>
        <Col>(단위:원/VAT별도)</Col>
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
                    <Table.Summary.Cell index={1}>{sum}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>성과지표정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="과제번호" span={2}>
              {ojtDetailInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="년도">
              {ojtDetailInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="사업명" span={2}>
              {ojtDetailInfo?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="과제명">
              {ojtDetailInfo?.a7}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업명" span={2}>
              {ojtDetailInfo?.a8}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업명">
              {ojtDetailInfo?.a9}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>성과지표 입력</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 600 }}
            columns={rsltIdxColums}
            dataSource={arrRsltIdx}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum1 = 0;
              data?.forEach((item) => (sum1 += parseFloat(item['a10']) * 100));
              let sum2 = 0;
              data?.forEach((item) => (sum2 += parseFloat(item['a11']) * 100));
              let sum3 = 0;
              data?.forEach((item) => (sum3 += parseFloat(item['a12']) * 100));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={9}>
                      종합달성도
                    </Table.Summary.Cell>
                    <Table.Summary.Cell>{sum1}%</Table.Summary.Cell>
                    <Table.Summary.Cell>{sum2}%</Table.Summary.Cell>
                    <Table.Summary.Cell>{sum3}</Table.Summary.Cell>
                    <Table.Summary.Cell>-</Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
      <SprvisnLevelPopup
        setSprvisnLevelOpen={setSprvisnLevelOpen}
        sprvisnLevelOpen={sprvisnLevelOpen}
      />
    </>
  );
};

export default SprvisnLastResult02;
