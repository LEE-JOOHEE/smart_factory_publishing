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

const PropseSttus01 = ({ setBizPlanNo, setPageMode }) => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '2022',
    a2: '스마트공장 구축 및 고도화',
    a3: '스마트공장 구축 및 고도화(기초)',
    a4: '',
    a5: '',
    a6: '전체',
  });

  // 제안요청 목록
  const [arrPrpsDmnd, setArrPrpsDmnd] = useState([]);

  const arrPrpsDmndColumns = [
    {
      title: '사업연도',
      dataIndex: 'a1',
      width: 80,
      align: 'center',
    },
    {
      title: '사업분류',
      dataIndex: 'a2',
    },
    {
      title: '세부공고명',
      dataIndex: 'a3',
    },
    {
      title: '제안서 명',
      dataIndex: 'a4',
    },
    {
      title: '도입기업',
      dataIndex: 'a5',
    },
    {
      title: '상태',
      dataIndex: 'a6',
    },
  ];

  const searchClick = () => {
    Modal.info({
      title: 'searchClick : ' + JSON.stringify(ojtSrchCnd),
    });
  };

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a1', 'a2']));

    let tmp = [];
    for (let idx = 1; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: '2022',
        a2: '스마트공장 구축 및 고도화',
        a3: '스마트공장 구축 및 고도화(기초)',
        a4: '스마트공장 구축 및 고도화 제안서',
        a5: '도입기업명' + idx,
        a6: '검토중',
      });
    }
    setArrPrpsDmnd(tmp);
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
              <Space>
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
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={1.5}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a2', setOjtSrchCnd);
                }}
                options={[
                  {
                    value: '스마트공장 구축 및 고도화',
                    label: '스마트공장 구축 및 고도화',
                  },
                  ...(ojtSrchCnd?.b ? ojtGroupCodes.b : []),
                ]}
                value={ojtSrchCnd?.a2}
              />
            </Descriptions.Item>

            <Descriptions.Item label="세부공고명" span={3}>
              <Space>
                <Select
                  onChange={(value) => {
                    ojtChange(value, 'a3', setOjtSrchCnd);
                  }}
                  options={[
                    {
                      value: '스마트공장 구축 및 고도화(기초)',
                      label: '스마트공장 구축 및 고도화(기초)',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={ojtSrchCnd?.a3}
                />
              </Space>
            </Descriptions.Item>

            <Descriptions.Item label="제안서명">
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a4', setOjtSrchCnd);
                }}
                value={ojtSrchCnd?.a4}
              />
            </Descriptions.Item>

            <Descriptions.Item label="도입기업" span={2}>
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a5', setOjtSrchCnd);
                }}
                value={ojtSrchCnd?.a5}
              />
            </Descriptions.Item>
            <Descriptions.Item label="상태" span={3}>
              <Space>
                <Select
                  onChange={(value) => {
                    ojtChange(value, 'a6', setOjtSrchCnd);
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={ojtSrchCnd?.a6}
                />
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>총 {arrPrpsDmnd?.length}건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={() =>
              Modal.success({
                title: '엑셀다운로드',
              })
            }
          >
            엑셀다운로드
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrPrpsDmndTable'}
            columns={arrPrpsDmndColumns}
            dataSource={arrPrpsDmnd}
            size="small"
            bordered
            pagination={{ showSizeChanger: false, pageSize: 10 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default PropseSttus01;
