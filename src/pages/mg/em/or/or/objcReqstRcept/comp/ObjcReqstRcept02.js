import React, { useState } from 'react';
import { Col, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Table } from 'antd/lib';

import ObjcRceptRegist from 'pages/mg/em/or/or/objcReqstRcept/popup/ObjcRceptRegist';
import ObjcProcessRegist from 'pages/mg/em/or/or/objcReqstRcept/popup/ObjcProcessRegist';
import ObjcReqstRegist from 'pages/mg/em/or/or/objcReqstRcept/popup/ObjcReqstRegist';

const ObjcReqstRcept02 = ({ arrObjcAply }) => {
  // 테이블 헤더
  const arrObjcAplyColumns = [
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
    },
    {
      title: '수행사업',
      dataIndex: 'a3',
    },
    {
      title: '과제번호',
      dataIndex: 'a4',
    },
    {
      title: '과제명',
      dataIndex: 'a5',
    },
    {
      title: '신청유형',
      dataIndex: 'a6',
    },
    {
      title: '신청자',
      dataIndex: 'a7',
      width: 80,
    },
    {
      title: '신청일자',
      dataIndex: 'a8',
    },
    {
      title: '진행상태',
      dataIndex: 'a9',
    },
    {
      title: '접수일자',
      dataIndex: 'a10',
    },
    {
      title: '처리결과',
      dataIndex: 'a11',
      render: (_, record, index) => {
        if (record.a11 && record.a11 === '접수') {
          return (
            <>
              <Button
                type="default"
                className="eu-btn-table-fine"
                size="small"
                onClick={() => {
                  objcRceptRegistClick(record);
                }}
              >
                {record?.a11}
              </Button>
            </>
          );
        } else if (record.a11 && record.a11 === '결과등록') {
          return (
            <>
              <Button
                type="default"
                className="eu-btn-table-warning"
                size="small"
                onClick={() => {
                  objcProcessRegistClick(record);
                }}
              >
                {record?.a11}
              </Button>
            </>
          );
        } else {
          return record.a11;
        }
      },
    },
  ];

  //이의신청접수결과등록
  const [objcRceptRegistOpen, setObjcRceptRegistOpen] = useState(false);
  //이의신청처리결과등록
  const [objcProcessRegistOpen, setObjcProcessRegistOpen] = useState(false);
  //이의신청접수등록
  const [objcReqstRegistOpen, setObjcReqstRegistOpen] = useState(false);

  const objcRceptRegistClick = (record) => {
    setObjcRceptRegistOpen(true);
  };
  const objcProcessRegistClick = (record) => {
    setObjcProcessRegistOpen(true);
  };
  const objcReqstRegistClick = () => {
    setObjcReqstRegistOpen(true);
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>총 {arrObjcAply?.length} 건</TitleComp>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={objcReqstRegistClick}
          >
            이의신청접수등록
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
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

      {/* 이의신청접수결과등록 */}
      <ObjcRceptRegist
        key={'ObjcRceptRegist'}
        objcRceptRegistOpen={objcRceptRegistOpen}
        setObjcRceptRegistOpen={setObjcRceptRegistOpen}
      />
      {/* 이의신청처리결과등록 */}
      <ObjcProcessRegist
        key={'ObjcProcessRegist'}
        objcProcessRegistOpen={objcProcessRegistOpen}
        setObjcProcessRegistOpen={setObjcProcessRegistOpen}
      />
      {/* 이의신청접수등록 */}
      <ObjcReqstRegist
        key={'ObjcReqstRegist'}
        objcReqstRegistOpen={objcReqstRegistOpen}
        setObjcReqstRegistOpen={setObjcReqstRegistOpen}
      />
    </>
  );
};

export default ObjcReqstRcept02;
