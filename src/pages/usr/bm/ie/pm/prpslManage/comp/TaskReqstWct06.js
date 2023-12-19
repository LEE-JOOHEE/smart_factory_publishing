import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Button, Input, Select } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { addRow, arrChange } from 'components/common/Common';
const TaskReqstWct06 = ({
  arrNwPurchaseCost,
  setArrNwPurchaseCost,
  saveClick,
}) => {
  const [ctSum, setCtSum] = useState(0);

  // 공통 컬럼(H/W,S/W,N/W)
  const nwPurchaseCostColums = [
    {
      title: '구분',
      dataIndex: 'a1',
      render: (_, __, index) => {
        return (
          <Select
            onChange={(value) => {
              arrChange(value, 'a1', index, setArrNwPurchaseCost);
            }}
            options={[
              {
                value: '클라우드',
                label: '클라우드',
              },
            ]}
            value={arrNwPurchaseCost[index]?.a1}
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
              arrChange(e.target.value, 'a2', index, setArrNwPurchaseCost);
            }}
            value={arrNwPurchaseCost[index]?.a2}
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
              arrChange(value, 'a3', index, setArrNwPurchaseCost);
            }}
            options={[
              {
                value: '국산',
                label: '국산',
              },
            ]}
            value={arrNwPurchaseCost[index]?.a3}
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
              arrChange(value, 'a4', index, setArrNwPurchaseCost);
            }}
            options={[
              {
                value: '한국',
                label: '한국',
              },
            ]}
            value={record.a3 === '국산' ? '한국' : arrNwPurchaseCost[index]?.a4}
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
              arrChange(e.target.value, 'a5', index, setArrNwPurchaseCost);
            }}
            value={arrNwPurchaseCost[index]?.a5}
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
              arrChange(e.target.value, 'a6', index, setArrNwPurchaseCost);
            }}
            value={arrNwPurchaseCost[index]?.a6}
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
              arrChange(e.target.value, 'a7', index, setArrNwPurchaseCost);
            }}
            value={arrNwPurchaseCost[index]?.a7}
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
              arrChange(e.target.value, 'a8', index, setArrNwPurchaseCost);
            }}
            value={arrNwPurchaseCost[index]?.a6 * arrNwPurchaseCost[index]?.a7}
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
              setArrNwPurchaseCost(
                arrNwPurchaseCost.filter((item) => item.key !== record.key)
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
    addRow(arrNwPurchaseCost, setArrNwPurchaseCost, nwPurchaseCostColums);
  };

  useEffect(() => {
    const arrCt = arrNwPurchaseCost?.map((item) => item.a6 * item.a7);
    setCtSum(arrCt?.reduce((a, b) => a + b, 0));
  }, [arrNwPurchaseCost]);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>N/W구축비</TitleComp>
          (단위:원/VAT별도)
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-row-insert"
            icon={<PlusSquareOutlined />}
            onClick={insertRow}
          >
            N/W 구입비 추가
          </Button>
          {saveClick && (
            <Button
              size="small"
              className="eu-usr-btn-crud-warning"
              onClick={() => saveClick(arrNwPurchaseCost)}
            >
              저장
            </Button>
          )}
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'TaskReqstWct06'}
            scroll={{ y: 150 }}
            columns={nwPurchaseCostColums}
            dataSource={arrNwPurchaseCost}
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

export default TaskReqstWct06;
