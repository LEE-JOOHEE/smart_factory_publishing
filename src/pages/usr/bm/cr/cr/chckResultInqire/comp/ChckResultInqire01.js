import React, { useEffect, useState } from 'react';
import {
  Col,
  Modal,
  Row,
  Table,
  DatePicker,
  Button,
  Descriptions,
  Select,
  ConfigProvider,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { getListCommonCd, ojtChange } from 'components/common/Common';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import ChckResultDetailPopup from 'pages/usr/bm/cr/cr/chckResultInqire/popup/ChckResultDetailPopup';
moment.locale('ko');
const { RangePicker } = DatePicker;

const ChckResultInqire01 = ({ setPbancNo, setPageMode }) => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '2022',
    a2: '',
    a3: '2022-10-01',
    a4: '2022-10-31',
  });

  // 점검결과목록
  const [arrChckRslt, setArrChckRslt] = useState([]);

  // 테이블 헤더
  const arrChckRsltColumns = [
    {
      title: '번호',
      dataIndex: 'a1',
      width: 50,
      align: 'center',
    },
    {
      title: '사업연도',
      dataIndex: 'a2',
      width: 80,
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'a3',
    },
    {
      title: '과제명',
      dataIndex: 'a4',
    },
    {
      title: '도입기업',
      dataIndex: 'a5',
    },
    {
      title: '점검구분',
      dataIndex: 'a6',
    },
    {
      title: '점검일자',
      dataIndex: 'a7',
    },

    {
      title: '점검결과',
      dataIndex: 'a8',
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
                chckResultDetailPopupClick(record);
                event.stopPropagation();
              }}
            >
              {record?.a8}
            </Button>
          </>
        );
      },
    },
  ];

  const [chckResultDetailPopupOpen, setChckResultDetailPopupOpen] =
    useState(false);
  const chckResultDetailPopupClick = (record) => {
    setChckResultDetailPopupOpen(true);
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

    for (let idx = 1; idx <= 100; idx++) {
      tmp.push({
        key: idx,
        a1: idx,
        a2: '2022',
        a3: 'TEST사업_' + idx,
        a4: '과제TEST_' + idx,
        a5: '유클리드',
        a6: '최종점검',
        a7: '2022-09-29',
        a8: '진행',
      });
    }

    setArrChckRslt(tmp);
  }, []);

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>검색조건</TitleComp>
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
            <Descriptions.Item label="평가기간" span={3}>
              <ConfigProvider locale={locale}>
                <RangePicker
                  format="YYYY-MM-DD"
                  onChange={(dates, dateStrings) => {
                    if (dates) {
                      console.log(
                        'From: ',
                        dateStrings[0],
                        ', to: ',
                        dateStrings[1]
                      );

                      ojtChange(dateStrings[0], 'a3', setOjtSrchCnd);
                      ojtChange(dateStrings[1], 'a4', setOjtSrchCnd);
                    } else {
                      console.log('Date Clear');
                    }
                  }}
                />
              </ConfigProvider>
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
            key={'arrChckRsltTable'}
            columns={arrChckRsltColumns}
            dataSource={arrChckRslt}
            size="small"
            bordered
            pagination={{ showSizeChanger: false, pageSize: 10 }}
          />
        </Col>
      </Row>
      <ChckResultDetailPopup
        key={'chckResultDetailPopupOpen'}
        chckResultDetailPopupOpen={chckResultDetailPopupOpen}
        setChckResultDetailPopupOpen={setChckResultDetailPopupOpen}
      />
    </>
  );
};

export default ChckResultInqire01;
