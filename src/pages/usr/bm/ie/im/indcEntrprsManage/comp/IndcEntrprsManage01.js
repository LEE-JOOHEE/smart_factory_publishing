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
const { Text, Link } = Typography;

const IndcEntrprsManage01 = () => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '2022-08-22 17:24:19',
    a2: '4',
    a3: '도입기업소재지',
    a4: '솔루션',
    a5: '레벨',
    a6: '업종',
    a7: '구축결과',
    a8: '종사자규모',
    a9: '매출규모',
    a10: '구축건수 기준 0%이상',
  });

  // 도입기업목록
  const [arrIndcEnt, setArrIndcEnt] = useState([]);

  const arrIndcEntColumns = [
    {
      title: '순번',
      dataIndex: 'a1',
      width: 50,
      align: 'center',
    },
    {
      title: '도입기업',
      dataIndex: 'a2',
      width: 150,
    },
    {
      title: '전화번호',
      dataIndex: 'a3',
      width: 120,
      align: 'center',
    },
    {
      title: '팩스번호',
      dataIndex: 'a4',
      width: 120,
    },
    {
      title: '홈페이지',
      dataIndex: 'a5',
      align: 'center',
    },
    {
      title: '소재지',
      dataIndex: 'a6',
      width: 60,
      align: 'center',
    },
    {
      title: '업종',
      dataIndex: 'a7',
      width: 500,
    },
    {
      title: '종업원수',
      dataIndex: 'a8',
      width: 80,
      align: 'center',
    },
    {
      title: '매출금액',
      dataIndex: 'a9',
      width: 100,
      align: 'center',
    },
  ];

  //테이블 선택
  const [arrIndcEntChecked, setArrIndcEntChecked] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrIndcEntChecked(selectedRows);
    },
  };

  const searchClick = () => {
    Modal.info({
      title: 'searchClick : ' + JSON.stringify(ojtSrchCnd),
    });
  };

  const saveClick = () => {
    Modal.info({
      title: 'arrIndcEntChecked : ' + JSON.stringify(arrIndcEntChecked),
    });
  };

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a1', 'a2']));

    let tmp = [];

    tmp.push({
      key: 1,
      a1: 1,
      a2: '도입기업명1',
      a3: '010-111-1111',
      a4: '010-111-1111',
      a5: 'http://www.abc.co.kr',
      a6: '세종',
      a7: '식료품 제조업/과실, 채소 가공 및\n저장 처리업/과실, 채소 가공 및\n저장 처리업/기타 과실, 채소 가공\n 및 저장 처리업',
      a8: 24,
      a9: '4,751,014',
    });

    tmp.push({
      key: 2,
      a1: 2,
      a2: '도입기업명2',
      a3: '031-2222-2222',
      a4: '031-2222-2222',
      a5: '',
      a6: '경기',
      a7: '화학 물질 및 화학제품 제조업\n의약품 제외/합성고무 및 플라스틱 물질\n제조업/합성고무 및 플라스틱 물질 제조업\n합성수지 및 기타 플라스틱 물질 제조업',
      a8: 16,
      a9: '5,829,291',
    });

    for (let idx = 3; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: idx,
        a2: '도입기업명_' + idx,
        a3: '070-3333-3333',
        a4: '055-333-3333',
        a5: '',
        a6: '대구',
        a7: '\n경북\n금형\n공업\n협동\n조합, 화학 물질 및 화학제품 제조업; 의약품\n제외/기타 화학제품 제조업/그 외 기타\n화학제품 제조업/가공 및 정제염\n제조업',
        a8: 0,
        a9: 0,
      });
    }
    setArrIndcEnt(tmp);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>구축실적 검색조건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={searchClick}
          >
            조회
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="도입기업 검색이력" span={3}>
              <Space>
                <Select
                  onChange={(value) => {
                    ojtChange(value, 'a1', setOjtSrchCnd);
                  }}
                  options={[
                    {
                      value: '2022-08-22 17:24:07',
                      label: '2022-08-22 17:24:07',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={ojtSrchCnd?.a1}
                />
                &nbsp;&nbsp;{ojtSrchCnd?.a2}건
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="도입기업소재지">
              {ojtSrchCnd?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="솔루션">
              {ojtSrchCnd?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="레벨">{ojtSrchCnd?.a4}</Descriptions.Item>
            <Descriptions.Item label="업종" span={3}>
              {ojtSrchCnd?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="구축결과">
              {ojtSrchCnd?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="종사자규모">
              {ojtSrchCnd?.a7}
            </Descriptions.Item>
            <Descriptions.Item label="매출규모">
              {ojtSrchCnd?.a8}
            </Descriptions.Item>
            <Descriptions.Item label="매칭순위 기준" span={3}>
              {ojtSrchCnd?.a9}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>총 {arrIndcEnt?.length}건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={saveClick}
          >
            선택
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrIndcEntTable'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrIndcEntColumns}
            dataSource={arrIndcEnt}
            size="small"
            bordered
            pagination={{ showSizeChanger: false, pageSize: 10 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default IndcEntrprsManage01;
