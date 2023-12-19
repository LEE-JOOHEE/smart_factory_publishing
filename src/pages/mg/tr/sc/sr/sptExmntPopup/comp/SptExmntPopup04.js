import React, { useEffect, useState } from 'react';
import { Descriptions, Col, Radio, Row, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
const SptExmntPopup04 = () => {
  const arrSptIdntyRsltRptpColumns = [
    {
      title: '순번',
      dataIndex: 'a',
      width: 50,
      align: 'center',
    },
    {
      title: '구분',
      dataIndex: 'b',
    },
    {
      title: '파일명',
      dataIndex: 'c',
    },
    {
      title: '등록일',
      dataIndex: 'd',
    },
    {
      title: '파일크기',
      dataIndex: 'e',
    },
  ];

  const [arrSptIdntyRsltRptp, setSptIdntyRsltRptp] = useState([]);

  useEffect(() => {
    let tmp2 = [];

    tmp2.push({
      key: 1,
      a: 1,
      b: '현장확인결과보고서',
      c: '보고서첨부파일.pdf',
      d: '2022-10-28 15:30:00',
      e: '2048',
    });
    setSptIdntyRsltRptp(tmp2);
  }, []);

  const [ojtThingIdnty, setOjtThingIdnty] = useState({ a: '2' });

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={24}>
          <TitleComp>현물확인</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label={`현물확인`}>
              <Radio.Group
                options={[
                  {
                    value: '1',
                    label: '해당',
                  },
                  {
                    value: '2',
                    label: '미해당',
                  },
                ]}
                onChange={(e) => setOjtThingIdnty({ a: e.target.value })}
                value={ojtThingIdnty?.a}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>현장 확인 보고서 첨부</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrSptIdntyRsltRptp'}
            columns={arrSptIdntyRsltRptpColumns}
            dataSource={arrSptIdntyRsltRptp}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 100 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SptExmntPopup04;
