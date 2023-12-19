import React, { useState } from 'react';
import { Col, Row, Table, Button, Modal } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const PrmpcCalcExmnt01 = ({ arrAsmtLst, setOjtKey, setPageType }) => {
  const columns = [
    { title: '사업연도', dataIndex: 'a', width: '7%', align: 'center', },
    { title: '지역(수행기관)', dataIndex: 'b', width: '10%', align: 'center', },
    { title: '세부공고명', dataIndex: 'c', width: '18%', },
    {
      title: '과제명',
      dataIndex: 'd',
      width: '24%', 
      render: (_, record) => {
        return (
          <Button
            type="link"
            className="eu-btn-link"
            onClick={() => {
              Modal.info({ title: '과제정보(과제기본정보) 페이지 이동' });
            }}
          >
            {record?.d}
          </Button>
        );
      },
    },
    { title: '공급기업', dataIndex: 'e', width: '12%', },
    { title: '원가계산기관', dataIndex: 'f', width: '13%', },
    {
      title: '제출상태',
      dataIndex: 'g',
      width: '8%', 
      align: 'center',
      render: (_, record) => {
        return (
          <Button
            type="link"
            className="eu-btn-link text-c"
            onClick={() => {
              setOjtKey({ key: record.key, status: record.g });
              setPageType('DETAIL');
            }}
          >
            {record?.g}
          </Button>
        );
      },
    },
    { title: '재계산여부', dataIndex: 'h', width: '8%', align: 'center', },
  ];
  return (
    <>
      <Row className="eu-row-comp-title mb-8" gutter={[20, 0]}>
        <Col span={24}>
          <div className="eu-table-indicator flex-wrap">
            <div className="count">총
              <span className="text-blue font-14-500 ml-4">{`${arrAsmtLst.length}`}</span>건
            </div>
            <div className="line"></div>
            <div className="font-14-500 text-blue ml-16">'과제명'</div>
            <div className="font-14-400 ml-4">을 누르면 과제신청 당시의 사업비 정보를 확인 할 수있고</div>
            <div className="font-14-500 text-blue ml-4">'제출상태'</div>
            <div className="font-14-400 ml-4">버튼을 누르면 원가계산에서 수정 된 사업비 정보를 확인 할 수 있습니다.</div>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'PrmpcCalcExmnt01'}
            columns={columns}
            dataSource={arrAsmtLst}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 300, x: 1280
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default PrmpcCalcExmnt01;
