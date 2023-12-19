import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, 
  Tabs, Select, Input, Space, Checkbox, 
  Table, Tag, Modal, Descriptions } from "antd";
import TechSignPopup from 'pages/mg/tr/te/er/techResultRegist/popup/TechSignPopup';
import SubPage4pop1 from 'components/layout/html/SubPage4_pop_1';
import SubPage4pop2 from 'components/layout/html/SubPage4_pop_2';
import editIcon from 'css/images/user-icons/edit-icon.png';

const SubPage5 = ({ children }) => {

  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a: '전체',
    b: '전체',
    c: '전체',
    d: '전체',
    e: '전체',
    f: '전체',
    g: '전체',
    h: '',
    i: '전체',
    j: '',
    k: '전체',
    l: '전체',
    m: '전체',
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
      width: '8%',
      align: 'center',
    },
    {
      title: '공급기업명',
      dataIndex: 'b',
      width: '28%',
    },
    {
      title: '구축건수',
      dataIndex: 'c',
      width: '8%',
      align: 'center',
    },
    {
      title: [<span>솔루션<br/>매칭율</span>],
      dataIndex: 'd',
      width: '8%',
      align: 'center',
    },
    {
      title: [<span>레벨<br/>매칭율</span>],
      dataIndex: 'e',
      width: '8%',
      align: 'center',
    },
    {
      title: [<span>업종<br/>매칭율</span>],
      dataIndex: 'f',
      width: '8%',
      align: 'center',
    },
    {
      title: [<span>사업구분<br/>매칭율</span>],
      dataIndex: 'g',
      width: '8%',
      align: 'center',
    },
    {
      title: [<span>구축결과<br/>매칭율</span>],
      dataIndex: 'h',
      width: '8%',
      align: 'center',
    },
    {
      title: [<span>종사자규모<br/>매칭율</span>],
      dataIndex: 'i',
      width: '8%',
      align: 'center',
    },
    {
      title: [<span>매출규모<br/>매칭율</span>],
      dataIndex: 'j',
      width: '8%',
      align: 'center',
    },
  ];

  const [arrCnstcPrfmnc, setArrCnstcPrfmnc] = useState([]);
  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx <= 50; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: `공급기업명${idx}`,
        c: '0.0',
        d: '0.0',
        e: '0.0',
        f: '0.0',
        g: '0.0',
        h: '0.0',
        i: '0.0',
        j: '0.0',
      });
    }
    setArrCnstcPrfmnc(tmp1);
  }, []);

  return(
    <>
      {/* 맞춤형 공급기업검색 */}
      {/* 사업안내 > 맞춤형 공급기업검색 */}

      <Row>
        <Col span={8}>
          <div className="headline mb-10">구축실적 검색조건</div>
        </Col>
        <Col span={16} className="text-r">
          <Space>
            <div className="eu-table-indicator mr-16">
              <span className="font-16-400 text-red ml-auto">
                * 아래 "구축실적 정렬기준"을 필히 설정해주셔야 최적의 결과물이 조회 됩니다.
              </span>
            </div>
            <Button className="eu-btn-crud-fine">조회하기</Button>
          </Space>
        </Col>

        {/* 구축실적 검색조건 */}
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="공급기업소재지">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'a');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="솔루션">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'b');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.b}
              />
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 수준">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'c');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.c}
              />
            </Descriptions.Item>
            <Descriptions.Item label="업종" span={3}>
              <div className="flex-row flex-wrap item-center gap-8">
              {/* <Space className="space-full"> */}
                <Select
                  style={{ width: '170px' }}
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'd');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.d}
                />
                <Select
                  style={{ width: '170px' }}
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'e');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.e}
                />
                <Select
                  style={{ width: '170px' }}
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'f');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.f}
                />
                <Select
                  style={{ width: '170px' }}
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'g');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                  ]}
                  value={ojtSrchCnd?.g}
                />
                {/* 업종코드 : */}
                <div className="font-bold-500 ml-12">업종코드 :</div>
                <Input
                  style={{ width: '170px' }}
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'h');
                  }}
                  value={ojtSrchCnd?.h}
                />
              {/* </Space> */}
              </div>
            </Descriptions.Item>
            <Descriptions.Item label="사업분류">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'i');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.i}
              />
            </Descriptions.Item>
            <Descriptions.Item label="세부공고명" span={2}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'j');
                }}
                value={ojtSrchCnd?.j}
              />
            </Descriptions.Item>
            <Descriptions.Item label="구축결과">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'k');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.k}
              />
            </Descriptions.Item>
            <Descriptions.Item label="종사자규모">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'l');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.l}
              />
            </Descriptions.Item>
            <Descriptions.Item label="매출규모">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'm');
                }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={ojtSrchCnd?.m}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      {/* 구축실적 정렬기준 */}
      <Row className="mt-40">
        <Col span={24}>
          <div className="headline mb-10">구축실적 정렬기준</div>
        </Col>
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="매칭순위">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
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

      <Row className="mt-40">
        <Col span={12}>
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {`${arrCnstcPrfmnc.length}`}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={12} className="text-r mb-8">
          <div className="eu-table-indicator">
            <span className="font-16-400 text-gray-500 ml-auto">(단위 : %)</span>
          </div>
        </Col>
        <Col span={24}>
          <Table
            key={'arrCnstcPrfmnc'}
            columns={columns}
            dataSource={arrCnstcPrfmnc}
            size="small"
            bordered
            pagination={true}
            scroll={{ y: 510, x: 1200 }}
          />
        </Col>
      </Row>
    
    </>
  )
}

export default SubPage5;