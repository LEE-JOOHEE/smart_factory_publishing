import React, { useEffect, useState } from 'react';
import {
  Col,
  Row,
  Table,
  Button,
  Input,
  Select,
  Descriptions,
  Modal,
} from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { addRow, arrChange } from 'components/common/Common';
const TaskReqstWct02 = ({
  arrLbrcoComputationDsctn,
  setArrLbrcoComputationDsctn,
  saveClick,
}) => {
  // 직접 인건비 산출내역 해더 컬럼
  const lbrcoComputationDsctnColums = [
    {
      title: 'ITSQF 직무',
      dataIndex: 'a1',
      render: (_, record, index) => {
        return (
          <Select
            placeholder="사업년도 선택"
            onChange={(value) =>
              arrChange(value, 'a1', index, setArrLbrcoComputationDsctn)
            }
            options={[
              {
                value: 'IT PMO',
                label: 'IT PMO',
              },
              {
                value: 'IT 서비스 기획',
                label: 'IT 서비스 기획',
              },
            ]}
            defaultValue={record?.a1}
          />
        );
      },
    },
    {
      title: '성명',
      dataIndex: 'a2',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="성명"
            onChange={(e) => {
              arrChange(
                e.target.value,
                'a2',
                index,
                setArrLbrcoComputationDsctn
              );
            }}
            value={arrLbrcoComputationDsctn[index]?.a2}
          />
        );
      },
    },
    {
      title: '단가',
      dataIndex: 'a3',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="단가"
            onChange={(e) => {
              arrChange(
                e.target.value,
                'a3',
                index,
                setArrLbrcoComputationDsctn
              );
            }}
            value={arrLbrcoComputationDsctn[index]?.a3}
          />
        );
      },
    },
    {
      title: '투입일수',
      dataIndex: 'a4',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="투입일수"
            onChange={(e) => {
              arrChange(
                e.target.value,
                'a4',
                index,
                setArrLbrcoComputationDsctn
              );
            }}
            value={arrLbrcoComputationDsctn[index]?.a4}
          />
        );
      },
    },
    {
      title: '금액',
      dataIndex: 'a5',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="금액"
            onChange={(e) => {
              arrChange(
                e.target.value,
                'a5',
                index,
                setArrLbrcoComputationDsctn
              );
            }}
            value={arrLbrcoComputationDsctn[index]?.a5}
          />
        );
      },
    },
    {
      title: '비고',
      dataIndex: 'a6',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="비고"
            onChange={(e) => {
              arrChange(
                e.target.value,
                'a6',
                index,
                setArrLbrcoComputationDsctn
              );
            }}
            value={arrLbrcoComputationDsctn[index]?.a6}
          />
        );
      },
    },
    {
      title: '삭제',
      render: (_, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-error"
            onClick={() => {
              // Modal.info({ title: `직접인건비 산출내역 삭제: ${record.key}` });
              setArrLbrcoComputationDsctn(
                arrLbrcoComputationDsctn.filter(
                  (item) => item.key !== record.key
                )
              );
            }}
          >
            삭제
          </Button>
        );
      },
    },
  ];

  const insertRow = () => {
    addRow(
      arrLbrcoComputationDsctn,
      setArrLbrcoComputationDsctn,
      lbrcoComputationDsctnColums
    );
  };

  useEffect(() => {
    console.log('arrLbrcoComputationDsctn: ', arrLbrcoComputationDsctn);
  }, [arrLbrcoComputationDsctn]);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>{'<직접인건비 산출내역>'}</TitleComp>
          (단위 : 원/VAT별도)
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-row-insert"
            icon={<PlusSquareOutlined />}
            onClick={insertRow}
          >
            투입인력 추가
          </Button>
          {saveClick && (
            <Button
              size="small"
              className="eu-usr-btn-crud-warning"
              onClick={() => saveClick(arrLbrcoComputationDsctn)}
            >
              저장
            </Button>
          )}
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'TaskReqstWct02'}
            scroll={{ y: 150 }}
            columns={lbrcoComputationDsctnColums}
            dataSource={arrLbrcoComputationDsctn}
            size="small"
            bordered
            pagination={false}
            summary={(data) => {
              let sum = 0;
              data?.forEach((item) => (sum += Number(item['a5'])));
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={4} index={4}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell
                      colSpan={3}
                      style={{ textAlign: 'left' }}
                    >
                      {sum}
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
          ※ 단가, 투입일수, 금액은 정수형으로 입력해 주시기 바랍니다.
          <div style={{ color: 'red' }}>
            ※ '21년 수행사업은 단가를 '0'으로 입력해 주시기 바랍니다.
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TaskReqstWct02;
