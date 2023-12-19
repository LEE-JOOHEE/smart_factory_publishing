import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Table } from 'antd/lib';

const ObjcProcessSttus02 = ({ arrObjcAply, setOjtSelectedObjcAply }) => {
  // 테이블 헤더
  const arrObjcAplyColumns = [
    {
      title: '사업연도',
      dataIndex: 'a1',
      width: '6%',
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'a2',
      width: '9%',
      align: 'center',
    },
    {
      title: '과제번호',
      dataIndex: 'a3',
      width: '15%',
    },
    {
      title: '과제명',
      dataIndex: 'a4',
      width: '11%',
      align: 'center',
    },
    {
      title: '공급기업',
      dataIndex: 'a5',
      width: '8%',
      align: 'center',
    },
    {
      title: '신청유형',
      dataIndex: 'a6',
      width: '13%',
      align: 'center',
    },
    {
      title: '신청일자',
      dataIndex: 'a7',
      width: '9%',
      align: 'center',
    },
    {
      title: '진행상태',
      dataIndex: 'a8',
      width: '10%',
      align: 'center',
    },
    {
      title: '접수일자',
      dataIndex: 'a9',
      width: '9%',
      align: 'center',
    },
    {
      title: '처리결과',
      dataIndex: 'a10',
      width: '10%',
      align: 'center',
    },
  ];
  const [selKey, setSelKey] = useState('');

  const arrObjcAplyClick = (record) => {
    setOjtSelectedObjcAply(record);
  };

  useEffect(() => {
    if (arrObjcAply && arrObjcAply.length > 0 && selKey === '') {
      arrObjcAplyClick(arrObjcAply[0]);
      setSelKey(0);
    }
  }, [arrObjcAply]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>이의신청목록</TitleComp>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}></Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'ObjcProcessSttus02Table'}
            columns={arrObjcAplyColumns}
            dataSource={arrObjcAply}
            size="small"
            bordered
            onRow={(record, index) => ({
              onClick: () => {
                //프로세스 처리를 위한 클릭 이벤트 호출
                arrObjcAplyClick(record);
                // 3/3 행 선택 시 색상 변경을 위한 키값 저장
                setSelKey(index);
              },
            })}
            //키 값에 따른 색상 변경
            rowClassName={(_, idx) =>
              idx === selKey ? 'eu-table-select-row' : 'eu-table-un-select-row'
            }
            pagination={true}
            scroll={{ y: 300, x: 1400 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default ObjcProcessSttus02;
