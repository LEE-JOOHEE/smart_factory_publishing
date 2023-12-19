import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Input,
  Modal,
  Row,
  Select,
  Table,
} from 'antd';
import 'css/CommonUsr.css';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd, ojtChange } from 'components/common/Common';

const BsnsActplnRequst01 = ({ setBizPlanNo, setPageMode }) => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '2022',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '',
    a9: '',
    a10: '',
  });
  // 사업계획서 목록
  const [arrBizPlan, setArrBizPlan] = useState([]);

  const arrBizPlanColumns = [
    {
      title: '사업연도',
      dataIndex: 'a1',
      width: 80,
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'a2',
    },
    {
      title: '공고명',
      dataIndex: 'a3',
    },
    {
      title: '요청기업명',
      dataIndex: 'a4',
    },
    {
      title: '진행',
      dataIndex: 'a5',
    },
  ];

  //테이블 선택
  const [arrBizPlanChecked, setArrBizPlanChecked] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrBizPlanChecked(selectedRows);
    },
  };

  const searchClick = () => {
    Modal.info({
      title: 'searchClick : ' + JSON.stringify(ojtSrchCnd),
    });
  };

  const bizPlanRvwClick = () => {
    setBizPlanNo(arrBizPlanChecked.bizPlanNo);
    setPageMode('VIEW');
  };

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a1', 'a2']));

    let tmp = [];
    for (let idx = 1; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: '2022',
        a2: '스마트공장 구축 및 고도화 사업(신규구축)',
        a3: '스마트공장 보급 확산 사업 공고 기초(코디 지원)',
        a4: '도입기업명_' + idx,
        a5: '세종',
        a6: '사업신청완료',
        bizPlanNo: 'BIZ000' + idx,
      });
    }
    setArrBizPlan(tmp);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>검색조건 입력</TitleComp>
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
            <Descriptions.Item label="사업연도" span={1.5}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a1', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '2022',
                    label: '2022',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={1.5}>
              <Select
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

            <Descriptions.Item label="세부공고명" span={1.5}>
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a3', setOjtSrchCnd);
                }}
                value={ojtGroupCodes?.a3}
              />
            </Descriptions.Item>
            <Descriptions.Item label="지역" span={1.5}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a4', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a4}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>총 {arrBizPlan?.length}건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={bizPlanRvwClick}
          >
            사업계획 검토
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrCnstcPrfmncTable'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrBizPlanColumns}
            dataSource={arrBizPlan}
            size="small"
            bordered
            pagination={{ showSizeChanger: false, pageSize: 10 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default BsnsActplnRequst01;
