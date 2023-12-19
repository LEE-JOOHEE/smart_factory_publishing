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
} from 'antd';
import 'css/CommonUsr.css';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd, ojtChange } from 'components/common/Common';

import { arrChange } from 'components/common/Common';

const IndcMtchgResult01 = () => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '도입기업명',
    a2: '4',
    a3: '123-45-67890',
    a4: 'LC120521',
    a5: 'LC120522',
    a6: 'LC120523',
    a7: '세종특별자치시 중앙집현7로',
    a8: 'www.abc.co.kr',
    a9: '홍길동',
    a10: '1990-08-10',
    a11: '0',
    a12: '010-1111-1111',
    a13: '02-1111-1111',
    a14: 'abc@naver.com',
    a15: '아무개',
    a16: '스마트공장팀',
    a17: '선임',
    a18: '010-222-2222',
    a19: '02-2222-2222',
    a20: 'def@naver.com',
  });

  // 도입기업목록
  const [arrIndcEnt, setArrIndcEnt] = useState([]);

  const arrIndcEntColumns = [
    {
      title: '사업번호',
      dataIndex: 'a1',
      width: 100,
      align: 'center',
    },
    {
      title: '사업연도',
      dataIndex: 'a2',
      width: 80,
      align: 'center',
    },
    {
      title: '사업분류',
      dataIndex: 'a3',
      width: 150,
      align: 'center',
    },
    {
      title: '세부공고명',
      dataIndex: 'a4',
      width: 200,
    },
    {
      title: '접수시작일',
      dataIndex: 'a5',
      align: 'center',
    },
    {
      title: '접수종료일',
      dataIndex: 'a6',
      align: 'center',
    },
    {
      title: '제안서',
      dataIndex: 'a7',
      render: (_, record, index) => {
        return (
          <Select
            onChange={(value) => {
              arrChange(value, 'a7', index, setArrIndcEnt);
            }}
            options={[
              {
                value: '제안서1',
                label: '제안서1',
              },
              ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
            ]}
            defaultValue={record?.a7}
          />
        );
      },
    },
    {
      title: '제안서요청여부',
      dataIndex: 'a8',
      width: 80,
      align: 'center',
    },
    {
      title: '접수가능',
      dataIndex: 'a9',
      width: 50,
      align: 'center',
    },
    {
      title: '마감여부',
      dataIndex: 'a10',
      width: 50,
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
  const smsClick = () => {
    Modal.info({
      title: 'smsClick : ' + JSON.stringify(ojtSrchCnd),
    });
  };

  const cancelClick = () => {
    Modal.info({
      title: 'cancelClick : ' + JSON.stringify(ojtSrchCnd),
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
      a1: '2022-12A-01',
      a2: '2022',
      a3: '스마트공장 구축\n및 고도화',
      a4: '스마트화 수준확인',
      a5: '2022-07-18',
      a6: '2022-10-05',
      a7: '제안서1',
      a8: '요청 전',
      a9: 'Y',
      a10: 'N',
    });
    tmp.push({
      key: 2,
      a1: '2022-12A-02',
      a2: '2022',
      a3: '스마트공장 수준확인',
      a4: '스마트공장 구축 및 고도화 사업\n(신규구축)',
      a5: '2022-07-18',
      a6: '2022-10-05',
      a7: '제안서1',
      a8: '요청 전',
      a9: 'Y',
      a10: 'N',
    });

    for (let idx = 3; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: '2022-12A-03',
        a2: '2022',
        a3: '대중소 상생형',
        a4: '스마트공장 구축 및\n고도화 사업(대중소상생)',
        a5: '2022-07-18',
        a6: '2022-10-05',
        a7: '제안서1',
        a8: '요청 전',
        a9: 'Y',
        a10: 'N',
      });
    }
    setArrIndcEnt(tmp);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>도입기업검색 매칭내역</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={searchClick}
          >
            조회
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={smsClick}
          >
            SMS
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={cancelClick}
          >
            선택취소
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="도입기업" span={2}>
              <Space>
                <Select
                  onChange={(value) => {
                    ojtChange(value, 'a1', setOjtSrchCnd);
                  }}
                  options={[
                    {
                      value: '도입기업명',
                      label: '도입기업명',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={ojtSrchCnd?.a1}
                />
                &nbsp;&nbsp;{ojtSrchCnd?.a2}건
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="사업자등록번호">
              {ojtSrchCnd?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="전문분야1">
              {ojtSrchCnd?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="전문분야2">
              {ojtSrchCnd?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="전문분야3">
              {ojtSrchCnd?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="주소" span={2}>
              {ojtSrchCnd?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="홈페이지">
              {ojtSrchCnd?.a7}
            </Descriptions.Item>

            <Descriptions.Item label="대표자">
              {ojtSrchCnd?.a8}
            </Descriptions.Item>
            <Descriptions.Item label="설립일자">
              {ojtSrchCnd?.a9}
            </Descriptions.Item>
            <Descriptions.Item label="임직원 수">
              {ojtSrchCnd?.a10}
            </Descriptions.Item>

            <Descriptions.Item label="핸드폰">
              {ojtSrchCnd?.a11}
            </Descriptions.Item>
            <Descriptions.Item label="전화번호">
              {ojtSrchCnd?.a12}
            </Descriptions.Item>
            <Descriptions.Item label="이메일">
              {ojtSrchCnd?.a13}
            </Descriptions.Item>

            <Descriptions.Item label="담당자">
              {ojtSrchCnd?.a14}
            </Descriptions.Item>
            <Descriptions.Item label="부서">
              {ojtSrchCnd?.a15}
            </Descriptions.Item>
            <Descriptions.Item label="직위">
              {ojtSrchCnd?.a16}
            </Descriptions.Item>

            <Descriptions.Item label="핸드폰">
              {ojtSrchCnd?.a17}
            </Descriptions.Item>
            <Descriptions.Item label="전화번호">
              {ojtSrchCnd?.a18}
            </Descriptions.Item>
            <Descriptions.Item label="이메일">
              {ojtSrchCnd?.a19}
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
            제안서송부
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

export default IndcMtchgResult01;
