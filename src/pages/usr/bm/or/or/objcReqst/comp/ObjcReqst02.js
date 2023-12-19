import React, { useState } from 'react';
import { Col, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { Button, Table } from 'antd/lib';
import ObjcReqstRegist from 'pages/usr/bm/or/or/objcReqst/popup/ObjcReqstRegist';
import ObjcReqstDtls from 'pages/usr/bm/or/or/objcReqst/popup/ObjcReqstDtls';
import ObjcReqstUpdt from 'pages/usr/bm/or/or/objcReqst/popup/ObjcReqstUpdt';

const ObjcReqst02 = ({ arrObjcAply }) => {
  // 테이블 헤더
  const arrObjcAplyColumns = [
    {
      title: '번호',
      dataIndex: 'a1',
      width: 50,
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'a2',
    },
    {
      title: '과제번호',
      dataIndex: 'a3',
      width: 150,
      align: 'center',
    },
    {
      title: '과제명',
      dataIndex: 'a4',
    },
    {
      title: '평가구분',
      dataIndex: 'a5',
      width: 100,
      align: 'center',
    },
    {
      title: '평가결과',
      dataIndex: 'a6',
      width: 80,
      align: 'center',
    },
    {
      title: '이의신청기간만료일자',
      dataIndex: 'a7',
      width: 100,
      align: 'center',
    },
    {
      title: '진행상태',
      dataIndex: 'a8',
      width: 100,
      align: 'center',
      render: (_, record, index) => {
        if (record.a10 && record.a10 === '작성중') {
          return (
            <>
              <Button
                type="default"
                className="eu-usr-btn-table-fine"
                size="small"
                onClick={() => {
                  objcReqstRegistClick(record);
                }}
              >
                {record?.a8}
              </Button>
            </>
          );
        } else if (record.a10 && record.a10 === '신청완료') {
          return (
            <>
              <Button
                type="default"
                className="eu-usr-btn-table-default"
                size="small"
                onClick={() => {
                  objcReqstUpdtClick(record);
                }}
              >
                {record?.a8}
              </Button>
            </>
          );
        } else if (record.a10 && record.a10 === '결과확정') {
          return (
            <>
              <Button
                type="default"
                className="eu-usr-btn-table-warning"
                size="small"
                onClick={() => {
                  objcReqstDtlsClick(record);
                }}
              >
                {record?.a8}
              </Button>
            </>
          );
        } else {
          return record.a8;
        }
      },
    },
    {
      title: '이의신청일',
      dataIndex: 'a9',
      width: 100,
      align: 'center',
    },
  ];

  //이의신청등록
  const [objcReqstRegistOpen, setObjcReqstRegistOpen] = useState(false);
  const objcReqstRegistClick = (record) => {
    setObjcReqstRegistOpen(true);
  };
  //이의신청수정
  const [objcReqstUpdtOpen, setObjcReqstUpdtOpen] = useState(false);
  const objcReqstUpdtClick = (record) => {
    setObjcReqstUpdtOpen(true);
  };
  //결과확정
  const [objcReqstDtlsOpen, setObjcReqstDtlsOpen] = useState(false);
  const objcReqstDtlsClick = () => {
    setObjcReqstDtlsOpen(true);
  };

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>이의신청</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}></Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'ReprtPresentnDetail02Table'}
            columns={arrObjcAplyColumns}
            dataSource={arrObjcAply}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 500 }}
          />
        </Col>
      </Row>

      {/* 이의신청등록 */}
      <ObjcReqstRegist
        key={'ObjcReqstRegist'}
        objcReqstRegistOpen={objcReqstRegistOpen}
        setObjcReqstRegistOpen={setObjcReqstRegistOpen}
      />
      {/* 결과확정 */}
      <ObjcReqstDtls
        key={'ObjcReqstDtls'}
        objcReqstDtlsOpen={objcReqstDtlsOpen}
        setObjcReqstDtlsOpen={setObjcReqstDtlsOpen}
      />
      {/* 이의신청수정 */}
      <ObjcReqstUpdt
        key={'ObjcReqstUpdt'}
        objcReqstUpdtOpen={objcReqstUpdtOpen}
        setObjcReqstUpdtOpen={setObjcReqstUpdtOpen}
      />
    </>
  );
};

export default ObjcReqst02;
