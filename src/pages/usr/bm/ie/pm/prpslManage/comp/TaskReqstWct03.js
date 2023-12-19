import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Input, Space, Button } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { arrChange } from 'components/common/Common';

const TaskReqstWct03 = ({ arrSwDvlopCt, setArrSwDvlopCt, saveClick }) => {
  const columns = [
    { title: '구분', dataIndex: 'a1' },
    {
      title: '산출내역',
      dataIndex: 'a2',
      width: '40%',
      render: (_, record, index) => {
        if (record.a1 === '직접인건비') {
          return (
            <Space style={{ float: 'right' }}>
              <Input
                placeholder="비율"
                onChange={(e) => {
                  arrChange(e.target.value, 'a2', index, setArrSwDvlopCt);
                }}
                value={arrSwDvlopCt[index]?.a2}
              />
              %
            </Space>
          );
        } else if (record.a1 === '제경비') {
          return (
            <Space style={{ float: 'right' }}>
              직접인건비 X
              <Input
                placeholder="비율"
                onChange={(e) => {
                  arrChange(e.target.value, 'a2', index, setArrSwDvlopCt);
                }}
                value={arrSwDvlopCt[index]?.a2}
              />
              %
            </Space>
          );
        } else if (record.a1 === '기술료') {
          return (
            <Space style={{ float: 'right' }}>
              <span>{'(직접인건비 + 제경비) X'}</span>
              <Input
                placeholder="비율"
                onChange={(e) => {
                  arrChange(e.target.value, 'a2', index, setArrSwDvlopCt);
                }}
                value={arrSwDvlopCt[index]?.a2}
              />
              %
            </Space>
          );
        }
      },
    },
    {
      title: '금액',
      dataIndex: 'a3',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="금액"
            onChange={(e) => {
              arrChange(e.target.value, 'a3', index, setArrSwDvlopCt);
            }}
            value={arrSwDvlopCt[index]?.a3}
          />
        );
      },
    },
    {
      title: '비고',
      dataIndex: 'a4',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="비고"
            onChange={(e) => {
              arrChange(e.target.value, 'a4', index, setArrSwDvlopCt);
            }}
            value={arrSwDvlopCt[index]?.a4}
          />
        );
      },
    },
  ];
  useEffect(() => {
    console.log('arrSwDvlopCt: ', arrSwDvlopCt);
  }, [arrSwDvlopCt]);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>S/W 개발비(개발 용역비)</TitleComp>
          (단위:원/VAT별도)
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          {saveClick && (
            <Button
              size="small"
              className="eu-usr-btn-crud-warning"
              onClick={() => saveClick(arrSwDvlopCt)}
            >
              저장
            </Button>
          )}
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'TaskReqstWct03'}
            scroll={{ y: 150 }}
            columns={columns}
            dataSource={arrSwDvlopCt}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              // console.log(data);
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['a3'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={2} index={0}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell
                      colSpan={2}
                      index={1}
                      style={{ textAlign: 'left' }}
                    >
                      {sum}
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
          ※ 산출내역(%), 금액은 정수형으로 입력해 주시기 바랍니다.
          <div style={{ color: 'red' }}>
            ※ '21년 수행사업은 입력하지 마시길 바랍니다.
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TaskReqstWct03;
