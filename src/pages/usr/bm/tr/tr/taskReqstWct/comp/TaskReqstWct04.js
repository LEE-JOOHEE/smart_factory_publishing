import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Button, Input, Select } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { addRow, arrChange } from 'components/common/Common';
const TaskReqstWct04 = ({ arrHwPurchaseCost, setArrHwPurchaseCost }) => {
  const [ctSum, setCtSum] = useState(0);

  // 공통 컬럼(H/W,S/W,N/W)
  const hwPurchaseCostColums = [
    {
      title: '구분',
      dataIndex: 'a1',
      render: (_, __, index) => {
        return (
          <Select
            onChange={(value) => {
              arrChange(value, 'a1', index, setArrHwPurchaseCost);
            }}
            options={[
              {
                value: 'AI',
                label: 'AI',
              },
            ]}
            value={arrHwPurchaseCost[index]?.a1}
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
              arrChange(e.target.value, 'a2', index, setArrHwPurchaseCost);
            }}
            value={arrHwPurchaseCost[index]?.a2}
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
              arrChange(value, 'a3', index, setArrHwPurchaseCost);
            }}
            options={[
              {
                value: '국산',
                label: '국산',
              },
            ]}
            value={arrHwPurchaseCost[index]?.a3}
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
              arrChange(value, 'a4', index, setArrHwPurchaseCost);
            }}
            options={[
              {
                value: '한국',
                label: '한국',
              },
            ]}
            value={record.a3 === '국산' ? '한국' : arrHwPurchaseCost[index]?.a4}
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
              arrChange(e.target.value, 'a5', index, setArrHwPurchaseCost);
            }}
            value={arrHwPurchaseCost[index]?.a5}
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
              arrChange(e.target.value, 'a6', index, setArrHwPurchaseCost);
            }}
            value={arrHwPurchaseCost[index]?.a6}
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
              arrChange(e.target.value, 'a7', index, setArrHwPurchaseCost);
            }}
            value={arrHwPurchaseCost[index]?.a7}
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
              arrChange(e.target.value, 'a8', index, setArrHwPurchaseCost);
            }}
            value={arrHwPurchaseCost[index]?.a6 * arrHwPurchaseCost[index]?.a7}
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
              setArrHwPurchaseCost(
                arrHwPurchaseCost.filter((item) => item.key !== record.key)
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
    addRow(arrHwPurchaseCost, setArrHwPurchaseCost, hwPurchaseCostColums);
  };
  useEffect(() => {
    const arrCt = arrHwPurchaseCost?.map((item) => item.a6 * item.a7);
    setCtSum(arrCt?.reduce((a, b) => a + b, 0));
  }, [arrHwPurchaseCost]);

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>H/W구입비</TitleComp>
          (단위:원/VAT별도)
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-row-insert"
            icon={<PlusSquareOutlined />}
            onClick={insertRow}
          >
            H/W 구입비 추가
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'TaskReqstWct04'}
            scroll={{ y: 150 }}
            columns={hwPurchaseCostColums}
            dataSource={arrHwPurchaseCost}
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
          <div style={{ color: 'red' }}>
            ※ '21년 수행사업 (FP)기능점수, (FP) 이윤을 필수로 입력해 주시길
            바랍니다.
            <br />※ (FP)기능점수 산정 상세내용은 첨부파일로 등록바랍니다.
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TaskReqstWct04;
