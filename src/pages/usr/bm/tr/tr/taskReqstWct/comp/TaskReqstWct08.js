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
const TaskReqstWct08 = ({
  arrIndcEntBizMngHnfLbrco,
  setArrIndcEntBizMngHnfLbrco,
}) => {
  const [ctSum, setCtSum] = useState(0);

  const indcEntBizMngHnfLbrcoColums = [
    {
      title: '수행업무',
      dataIndex: 'a1',
      render: (_, __, index) => {
        return (
          <Select
            onChange={(value) => {
              arrChange(value, 'a1', index, setArrIndcEntBizMngHnfLbrco);
            }}
            options={[
              {
                value: '스마트사업 구축',
                label: '스마트사업 구축',
              },
            ]}
            value={arrIndcEntBizMngHnfLbrco[index]?.a1}
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
                setArrIndcEntBizMngHnfLbrco
              );
            }}
            value={arrIndcEntBizMngHnfLbrco[index]?.a2}
          />
        );
      },
    },
    {
      title: '월급여',
      dataIndex: 'a3',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="월급여"
            onChange={(e) => {
              arrChange(
                e.target.value,
                'a3',
                index,
                setArrIndcEntBizMngHnfLbrco
              );
            }}
            value={arrIndcEntBizMngHnfLbrco[index]?.a3}
          />
        );
      },
    },
    {
      title: '투입기간(월)',
      dataIndex: 'a4',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="투입기간(월)"
            onChange={(e) => {
              arrChange(
                e.target.value,
                'a4',
                index,
                setArrIndcEntBizMngHnfLbrco
              );
            }}
            value={arrIndcEntBizMngHnfLbrco[index]?.a4}
          />
        );
      },
    },
    {
      title: '투입률(%)',
      dataIndex: 'a5',
      render: (_, __, index) => {
        return (
          <Input
            placeholder="투입률(%)"
            onChange={(e) => {
              arrChange(
                e.target.value,
                'a5',
                index,
                setArrIndcEntBizMngHnfLbrco
              );
            }}
            value={arrIndcEntBizMngHnfLbrco[index]?.a5}
          />
        );
      },
    },
    {
      title: '금액',
      dataIndex: 'a6',
      render: (_, __, index) => {
        return (
          arrIndcEntBizMngHnfLbrco[index]?.a3 *
          arrIndcEntBizMngHnfLbrco[index]?.a4 *
          (arrIndcEntBizMngHnfLbrco[index]?.a5 / 100)
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
              setArrIndcEntBizMngHnfLbrco(
                arrIndcEntBizMngHnfLbrco.filter(
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
      arrIndcEntBizMngHnfLbrco,
      setArrIndcEntBizMngHnfLbrco,
      indcEntBizMngHnfLbrcoColums
    );
  };

  useEffect(() => {
    const arrCt = arrIndcEntBizMngHnfLbrco?.map(
      (item) => item.a3 * item.a4 * (item.a5 / 100)
    );
    setCtSum(arrCt?.reduce((a, b) => a + b, 0));
  }, [arrIndcEntBizMngHnfLbrco]);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>도입기업 사업관리 인력 인건비</TitleComp>
          (단위:원/VAT별도)
          <span style={{ color: 'red' }}>
            ※ 중요 : 도입기업의 사업관리 인력 인건비는 기업부담금의 20%를 넘을
            수 없습니다.
          </span>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-row-insert"
            icon={<PlusSquareOutlined />}
            onClick={insertRow}
          >
            도입기업 사업관리 인력 인건비 추가
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'TaskReqstWct08'}
            scroll={{ y: 150 }}
            columns={indcEntBizMngHnfLbrcoColums}
            dataSource={arrIndcEntBizMngHnfLbrco}
            size="small"
            bordered
            pagination={false}
            summary={() => {
              return (
                <Table.Summary fixed>
                  <Table.Summary.Row className="fixed-colum">
                    <Table.Summary.Cell colSpan={5} index={0}>
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

export default TaskReqstWct08;
