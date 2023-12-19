import React, { useEffect, useState } from 'react';
import { Col, Modal, Row, Space, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { Button, Checkbox, Descriptions, Input, Select } from 'antd/lib';
import { getListCommonCd, ojtChange } from 'components/common/Common';
import { useHistory } from 'react-router-dom';

const BsnsPblanc01 = ({ setPbancNo, setPageMode }) => {
  const history = useHistory();

  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '2022',
    a2: '',
    a3: '',
  });

  // 공고목록
  const [arrBsnsPblanc, setArrBsnsPblanc] = useState([]);

  // 테이블 헤더
  const arrBsnsPblancColumns = [
    {
      title: '사업연도',
      dataIndex: 'a1',
      width: 80,
      align: 'center',
    },
    {
      title: '사업분류',
      dataIndex: 'a2',
      width: 200,
      align: 'center',
    },
    {
      title: '세부공고명',
      dataIndex: 'a3',
    },
    {
      title: '신청접수기간',
      dataIndex: 'a4',
      align: 'center',
    },
    {
      title: '등록자',
      dataIndex: 'a5',
      width: 100,
      align: 'center',
    },

    {
      title: '상태',
      dataIndex: 'a6',
      width: 100,
      align: 'center',
      render: (_, record, index) => {
        return (
          <>
            <Button
              type="default"
              className="eu-usr-btn-table-fine"
              size="small"
              onClick={(event) => {
                rcptAplyClick(record);
                event.stopPropagation();
              }}
            >
              {record?.a6}
            </Button>
          </>
        );
      },
    },
  ];

  const viewClick = (record) => {
    setPbancNo(record.pbancNo);
    setPageMode('RECP');
  };

  const rcptAplyClick = (record) => {
    history.push({
      pathname: '/usr/bm/tr/tr/taskReqstDetail',
      state: { key: record.pbancNo },
    });
  };

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick : ' + JSON.stringify(ojtSrchCnd),
    });
  };

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a1', 'a2']));

    let tmp = [];

    let idx = 1;
    tmp.push({
      key: idx,
      a1: '2022',
      a2: '스마트공장 구축 및 고도화',
      a3: '스마트공장 구축 및 고도화(기초)',
      a4: '2022-10-06 09:00 ~ 2022-10-14 23:50',
      a5: '관리자',
      a6: '접수신청',
      pbancNo: 'A001',
    });
    idx = 2;
    tmp.push({
      key: idx,
      a1: '2022',
      a2: '스마트공장 수준확인',
      a3: '스마트화 수준확인',
      a4: '2022-10-06 09:00 ~ 2022-10-14 23:50',
      a5: '관리자',
      a6: '접수신청',
      pbancNo: 'B001',
    });
    idx = 3;
    tmp.push({
      key: idx,
      a1: '2022',
      a2: '대중소상생형',
      a3: '스마트공장 구축 및 고도화 사업(대중소상생)_주관기관모집',
      a4: '2022-10-06 09:00 ~ 2022-10-14 23:50',
      a5: '관리자',
      a6: '접수신청',
      pbancNo: 'C001',
    });
    idx = 4;
    tmp.push({
      key: idx,
      a1: '2022',
      a2: '대중소상생형',
      a3: '스마트공장 구축 및 고도화 사업(대중소상생)',
      a4: '2022-10-06 09:00 ~ 2022-10-14 23:50',
      a5: '관리자',
      a6: '신청종료',
      pbancNo: 'D001',
    });

    setArrBsnsPblanc(tmp);
  }, []);

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>&nbsp;</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-usr-btn-crud-fine"
            size="small"
            onClick={() => {
              searchClick(ojtSrchCnd);
            }}
          >
            조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="사업연도" span={1.5}>
              <Select
                size="small"
                placeholder="사업연도 선택"
                onChange={(value) => ojtChange(value, 'a1', setOjtSrchCnd)}
                options={[
                  {
                    value: '2021',
                    label: '2021',
                  },
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
                size="small"
                placeholder="사업분류 선택"
                value={ojtSrchCnd?.a2}
                onChange={(value) => ojtChange(value, 'a2', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="세부공고명" span={3}>
              <Input
                size="small"
                value={ojtSrchCnd?.a3}
                onChange={(e) => ojtChange(e.target.value, 'a3', setOjtSrchCnd)}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>이의신청</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}></Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrBsnsPblancTable'}
            columns={arrBsnsPblancColumns}
            dataSource={arrBsnsPblanc}
            size="small"
            bordered
            onRow={(record, index) => ({
              onClick: () => {
                //프로세스 처리를 위한 클릭 이벤트 호출
                viewClick(record);
              },
            })}
            rowClassName={'eu-usr-table-un-select-row'}
            pagination={{ showSizeChanger: false, pageSize: 15 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default BsnsPblanc01;
