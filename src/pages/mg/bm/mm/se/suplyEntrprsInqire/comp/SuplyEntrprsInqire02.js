import React, { useState } from 'react';
import { Col, Row, Descriptions, Select, Input, Table, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const SuplyEntrprsInqire02 = ({ arrCnstcPrfmnc }) => {
  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '구축건수 기준',
    b: '0',
  });
  // 검색조건 입력 change 메소드
  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const columns = [
    {
      title: '순위',
      dataIndex: 'a',
    },
    {
      title: '공급기업명',
      dataIndex: 'b',
    },
    {
      title: '구축건수',
      dataIndex: 'c',
    },
    {
      title: '솔루션 매칭율',
      dataIndex: 'd',
    },
    {
      title: '레벨 매칭율',
      dataIndex: 'e',
    },
    {
      title: '업종 매칭율',
      dataIndex: 'f',
    },
    {
      title: '사업구분 매칭율',
      dataIndex: 'g',
    },
    {
      title: '구축결과 매칭율',
      dataIndex: 'h',
    },
    {
      title: '종사자규모 매칭율',
      dataIndex: 'i',
    },
    {
      title: '매출규모 매칭율',
      dataIndex: 'j',
    },
  ];
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>구축실적 정렬기준</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="매칭순위">
              <Select
                onChange={(value) => {
                  ojtSrchCndChange(value, 'a');
                }}
                options={[
                  {
                    value: '구축건수 기준',
                    label: '구축건수 기준',
                  },
                ]}
                value={ojtSrchCnd?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="매칭율">
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'b');
                }}
                value={ojtSrchCnd?.b}
                style={{
                  width: '100px',
                }}
              />{' '}
              % 이상(매칭순위 기준)
            </Descriptions.Item>
          </Descriptions>
          <div>
            ※ 공급기업 검색 시 매칭율 기준 적용 (2019년 이후 스마트공장 실적
            데이터 기준)
          </div>
          <br />
          <div>
            1. 검색하고자 하는 기업(공급기업)의 [기업소재지]를 선택합니다.
          </div>
          <br />
          <div>
            2. 검색하는 기업(도입기업)에서 구축하고자 하는 [솔루션], [레벨],
            [업종], [종사자규모], [매출규모] 등을 선택합니다.
          </div>
          <br />
          <div>
            3. 검색데이터 정렬기준은 [매칭순위]에서 선택(기본:구축건수)하고,
            해당 기준의 [매칭율] 조건(기본:0%이상)을 입력합니다.
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>{`총 ${arrCnstcPrfmnc.length}건`}</Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          (단위 : %)
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrCnstcPrfmnc'}
            columns={columns}
            dataSource={arrCnstcPrfmnc}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 500 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SuplyEntrprsInqire02;
