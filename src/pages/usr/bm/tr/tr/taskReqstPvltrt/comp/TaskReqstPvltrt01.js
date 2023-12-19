import React, { useState, useEffect } from 'react';
import { Col, Row, Table, Modal, Radio, Checkbox } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const TaskReqstPvltrt01 = () => {
  const [arrPvltrtLst, setArrPvltrtLst] = useState([]);

  const arrPvltrtLstChange = (value, column, index) => {
    setArrPvltrtLst((prev) => {
      prev[index][column] = value;
      if (column === 'c') {
        prev[index]['d'] = value ? prev[index]['b'] : 0;
      }
      return [...prev];
    });
  };

  const columns = [
    {
      title: '우대사항',
      dataIndex: 'a',
      width: 200,
    },
    { title: '가점', dataIndex: 'b', width: 60 },
    {
      title: '선택',
      dataIndex: 'c',
      width: 150,
      render: (_, record, index) => {
        return (
          <>
            <Checkbox
              value={true}
              checked={arrPvltrtLst[index]['c']}
              onChange={(e) => {
                arrPvltrtLstChange(e.target.value, 'c', index);
              }}
            >
              해당
            </Checkbox>
            <Checkbox
              value={false}
              checked={!arrPvltrtLst[index]['c']}
              onChange={(e) => {
                arrPvltrtLstChange(e.target.value, 'c', index);
              }}
            >
              해당없음
            </Checkbox>
          </>
        );
      },
    },
    {
      title: '신청점수',
      dataIndex: 'd',
      width: 60,
      render: (_, record, index) => {
        return <>{_}</>;
      },
    },
  ];

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 10; idx++) {
      tmp1.push({
        key: idx,
        a: `항목${idx}`,
        b: idx,
        c: false,
        d: 0,
      });
    }
    setArrPvltrtLst(tmp1);
  }, []);

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>우대사항</TitleComp>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}></Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrPvltrtLst'}
            columns={columns}
            dataSource={arrPvltrtLst}
            size="small"
            bordered
            pagination={false}
            summary={(pageData) => {
              let totalE = 0;
              pageData.forEach(({ d }) => {
                totalE += d;
              });
              return (
                <>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0} colSpan={3}>
                      우대사항 가점적용 점수(신청)
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>{totalE}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              );
            }}
          />
          <span style={{ color: 'red' }}>
            ※ 우대가점은 입력값을 기초로 사업에 따라 최대가점 5~6점으로 자동
            설정됩니다.
          </span>
        </Col>
      </Row>
    </>
  );
};

export default TaskReqstPvltrt01;
