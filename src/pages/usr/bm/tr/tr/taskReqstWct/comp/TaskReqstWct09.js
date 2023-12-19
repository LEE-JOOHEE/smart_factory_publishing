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
import { addRow } from 'components/common/Common';
const TaskReqstWct09 = ({ arrCloudSrvcUtztnCt, setArrCloudSrvcUtztnCt }) => {
  const [ctSum, setCtSum] = useState(0);

  const arrCloudSrvcUtztnCtChange = (value, column, index) => {
    setArrCloudSrvcUtztnCt((prev) => {
      prev[index][column] = value;
      return [...prev];
    });
  };
  const cloudSrvcUtztnCtColums = [
    {
      title: '구분',
      dataIndex: 'a1',
      render: (_, __, index) => {
        return (
          <Select
            onChange={(value) => {
              arrCloudSrvcUtztnCtChange(value, 'a1', index);
            }}
            options={[
              {
                value: '클라우드 기반 서비스',
                label: '클라우드 기반 서비스',
              },
            ]}
            value={arrCloudSrvcUtztnCt[index]?.a1}
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
              arrCloudSrvcUtztnCtChange(e.target.value, 'a2', index);
            }}
            value={arrCloudSrvcUtztnCt[index]?.a2}
          />
        );
      },
    },
    {
      title: '규격',
      dataIndex: 'a3',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="규격"
            onChange={(e) => {
              arrCloudSrvcUtztnCtChange(e.target.value, 'a3', index);
            }}
            value={arrCloudSrvcUtztnCt[index]?.a3}
          />
        );
      },
    },
    {
      title: '단가',
      dataIndex: 'a4',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="단가"
            onChange={(e) => {
              arrCloudSrvcUtztnCtChange(e.target.value, 'a4', index);
            }}
            value={arrCloudSrvcUtztnCt[index]?.a4}
          />
        );
      },
    },
    {
      title: '기간(월)',
      dataIndex: 'a5',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="기간(월)"
            onChange={(e) => {
              arrCloudSrvcUtztnCtChange(e.target.value, 'a5', index);
            }}
            value={arrCloudSrvcUtztnCt[index]?.a5}
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
              arrCloudSrvcUtztnCtChange(e.target.value, 'a6', index);
            }}
            value={arrCloudSrvcUtztnCt[index]?.a6}
          />
        );
      },
    },
    {
      title: '계',
      dataIndex: 'a6',
      render: (_, __, index) => {
        return arrCloudSrvcUtztnCt[index]?.a4 * arrCloudSrvcUtztnCt[index]?.a5;
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
              setArrCloudSrvcUtztnCt(
                arrCloudSrvcUtztnCt.filter((item) => item.key !== record.key)
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
    addRow(arrCloudSrvcUtztnCt, setArrCloudSrvcUtztnCt, cloudSrvcUtztnCtColums);
  };

  useEffect(() => {
    const arrCt = arrCloudSrvcUtztnCt?.map((item) => item.a4 * item.a5);
    setCtSum(arrCt?.reduce((a, b) => a + b, 0));
  }, [arrCloudSrvcUtztnCt]);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>클라우드 기반 서비스 이용료</TitleComp>
          (단위:원/VAT별도)
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-row-insert"
            icon={<PlusSquareOutlined />}
            onClick={insertRow}
          >
            클라우드 기반 서비스 이용료 추가
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'TaskReqstWct09'}
            scroll={{ y: 150 }}
            columns={cloudSrvcUtztnCtColums}
            dataSource={arrCloudSrvcUtztnCt}
            size="small"
            bordered
            pagination={false}
            summary={() => {
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={6} index={0}>
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

export default TaskReqstWct09;
