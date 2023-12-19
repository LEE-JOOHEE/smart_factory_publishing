import React from 'react';
import { Col, Row, Table, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const WctReqst02 = ({ arrBizCtLst, setOjtKey, setPageType }) => {
  const columns = [
    { title: '사업연도', dataIndex: 'a1' },
    { title: '수행사업', dataIndex: 'a2' },
    { title: '과제명', dataIndex: 'a3' },
    { title: '도입기업', dataIndex: 'a4' },
    {
      title: '사업비 신청 진행상태',
      children: [
        {
          title: '선금',
          dataIndex: 'a5',
          render: (text, record) => {
            if (text === '신청대기') {
              return (
                <Button
                  size="small"
                  className="eu-usr-btn-table-fine"
                  onClick={() => {
                    setOjtKey(record.key);
                    setPageType('DETAIL');
                  }}
                >
                  {text}
                </Button>
              );
            } else {
              return text;
            }
          },
        },
        { title: '중도금', dataIndex: 'a6' },
        { title: '잔금', dataIndex: 'a7' },
      ],
    },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>{`총 건`}</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrBizCtLst}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 800,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default WctReqst02;
