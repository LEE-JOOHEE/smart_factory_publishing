import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Button, Input, Select } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { addRow, arrChange } from 'components/common/Common';
const TaskReqstWct07 = ({ arrEtcCost, setArrEtcCost, saveClick }) => {
  const [ctSum, setCtSum] = useState(0);

  // 공통 컬럼(H/W,S/W,N/W)
  const etcPurchaseCostColums = [
    {
      title: '구분',
      dataIndex: 'a1',
      render: (_, __, index) => {
        return (
          <Select
            onChange={(value) => {
              arrChange(value, 'a1', index, setArrEtcCost);
            }}
            options={[
              {
                value: '기타비용',
                label: '기타비용',
              },
            ]}
            value={arrEtcCost[index]?.a1}
          />
        );
      },
    },
    {
      title: '품명',
      dataIndex: 'a2',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="품명"
            onChange={(e) => {
              arrChange(e.target.value, 'a2', index, setArrEtcCost);
            }}
            value={arrEtcCost[index]?.a2}
          />
        );
      },
    },
    {
      title: '국/외산',
      dataIndex: 'a3',
      render: (_, __, index) => {
        return (
          <Select
            onChange={(value) => {
              arrChange(value, 'a3', index, setArrEtcCost);
            }}
            options={[
              {
                value: '국산',
                label: '국산',
              },
            ]}
            value={arrEtcCost[index]?.a3}
          />
        );
      },
    },
    {
      title: '국가',
      dataIndex: 'a4',
      render: (_, record, index) => {
        return (
          <Select
            onChange={(value) => {
              arrChange(value, 'a4', index, setArrEtcCost);
            }}
            options={[
              {
                value: '한국',
                label: '한국',
              },
            ]}
            value={record.a3 === '국산' ? '한국' : arrEtcCost[index]?.a4}
            disabled={record.a3 === '국산'}
          />
        );
      },
    },
    {
      title: '규격',
      dataIndex: 'a5',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="규격"
            onChange={(e) => {
              arrChange(e.target.value, 'a5', index, setArrEtcCost);
            }}
            value={arrEtcCost[index]?.a5}
          />
        );
      },
    },
    {
      title: '단가',
      dataIndex: 'a6',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="단가"
            onChange={(e) => {
              arrChange(e.target.value, 'a6', index, setArrEtcCost);
            }}
            value={arrEtcCost[index]?.a6}
          />
        );
      },
    },
    {
      title: '수량',
      dataIndex: 'a7',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="수량"
            onChange={(e) => {
              arrChange(e.target.value, 'a7', index, setArrEtcCost);
            }}
            value={arrEtcCost[index]?.a7}
          />
        );
      },
    },
    {
      title: '계',
      dataIndex: 'a8',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="계"
            onChange={(e) => {
              arrChange(e.target.value, 'a8', index, setArrEtcCost);
            }}
            value={arrEtcCost[index]?.a6 * arrEtcCost[index]?.a7}
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
              setArrEtcCost(
                arrEtcCost.filter((item) => item.key !== record.key)
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
    addRow(arrEtcCost, setArrEtcCost, etcPurchaseCostColums);
  };

  useEffect(() => {
    const arrCt = arrEtcCost?.map((item) => item.a6 * item.a7);
    setCtSum(arrCt?.reduce((a, b) => a + b, 0));
  }, [arrEtcCost]);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>기타(할인) 비용</TitleComp>
          (단위:원/VAT별도)
          <div style={{ color: 'red' }}>
            ※ 할인금액은 단가 입력시 "-"를 붙여 입력 해주셔야 합니다.
          </div>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-row-insert"
            icon={<PlusSquareOutlined />}
            onClick={insertRow}
          >
            기타 비용 추가
          </Button>
          {saveClick && (
            <Button
              size="small"
              className="eu-usr-btn-crud-warning"
              onClick={() => saveClick(arrEtcCost)}
            >
              저장
            </Button>
          )}
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'TaskReqstWct07'}
            scroll={{ y: 150 }}
            columns={etcPurchaseCostColums}
            dataSource={arrEtcCost}
            size="small"
            bordered
            pagination={false}
            summary={() => {
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={7} index={0}>
                      합계
                    </Table.Summary.Cell>
                    <Table.Summary.Cell
                      colSpan={2}
                      style={{ textAlign: 'left' }}
                      index={1}
                    >
                      {ctSum}
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              );
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default TaskReqstWct07;
