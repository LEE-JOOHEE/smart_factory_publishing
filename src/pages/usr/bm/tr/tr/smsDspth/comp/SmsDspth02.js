import React, { useState } from 'react';
import { Col, Row, Table, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { useHistory } from 'react-router-dom';

const SmsDspth02 = ({ arrBizLst }) => {
  const history = useHistory();
  const columns = [
    { title: '사업연도', dataIndex: 'a', width: '10%', align: 'center', },
    { title: '사업분류', dataIndex: 'b', width: '27%', },
    { title: '세부공고명', dataIndex: 'c', width: '27%', },
    { title: '접수기간', dataIndex: 'd', width: '24%', align: 'center', },
    {
      title: '과제신청',
      dataIndex: 'e',
      width: '12%', 
      align: 'center',
      render: (text, record) => {
        return (
          <Button
            size="small"
            className="eu-btn-table-fine"
            onClick={() => {
              history.push({
                pathname: `/usr/bm/tr/tr/${record.value}`,
                state: { key: record.key },
              });
            }}
          >
            {text}
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Row className="eu-row-comp-title mb-12">
        <Col span={24}>
          {/* <TitleComp>사업목록</TitleComp> */}
          <div className="headline mb-10">사업목록</div>
        </Col>
        <Col span={24}>
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red">
              *업종별특화 사업인 경우 '작성중' 혹은 '제출완료' 과제는 마이페이지에서 확인하세요.
              <br/>탈락 및 실패 과제는 마이페이지에서 확인하세요.
            </span>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrBizLst}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 800, x: 820
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SmsDspth02;
