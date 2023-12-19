import React, { useState } from 'react';
import { Col, Row, Tabs, Button, Table, Checkbox, Input, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { arrChange } from 'components/common/Common';

const PblancJobProcssPage = ({ arrJobProcss, setArrJobProcss }) => {
  const columns = [
    {
      title: '진행 업무',
      dataIndex: 'a',
      width: '12%',
      align: 'center',
    },
    {
      title: '필수여부',
      dataIndex: 'b',
      width: '8%',
      align: 'center',
      render: (_, render, index) => (
        <Checkbox
          onChange={(e) =>
            arrChange(e.target.checked, 'b', index, setArrJobProcss)
          }
          defaultChecked={arrJobProcss[index]['b']}
        />
      ),
    },
    {
      title: '화면표시순서',
      dataIndex: 'c',
      width: '15%',
      render: (_, record, index) => {
        console.log(record, index);
        return (
          <Input
            className="text-c"
            placeholder="화면표시순서"
            onChange={(e) =>
              arrChange(e.target.value, 'c', index, setArrJobProcss)
            }
            defaultValue={record?.c}
          />
        );
      },
    },
    {
      title: '업무진행순서',
      dataIndex: 'd',
      width: '15%',
      render: (_, record, index) => {
        console.log(record, index);
        return (
          <Input
            className="text-c"
            placeholder="업무진행순서"
            onChange={(e) =>
              arrChange(e.target.value, 'd', index, setArrJobProcss)
            }
            defaultValue={record?.d}
          />
        );
      },
    },
    {
      title: '평가반영비율',
      dataIndex: 'e',
      width: '15%',
      render: (_, record, index) => {
        console.log(record, index);
        return (
          <Input
            className="text-c"
            placeholder="평가반영비율"
            onChange={(e) =>
              arrChange(e.target.value, 'e', index, setArrJobProcss)
            }
            defaultValue={record?.e}
          />
        );
      },
    },
    {
      title: '비고',
      dataIndex: 'f',
      width: '35%',
      align: 'left',
    },
  ];

  const insertClick = () => {
    Modal.info({
      title: 'insertClick',
    });
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>업무절차</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            onClick={insertClick}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'fxManage'}
            columns={columns}
            dataSource={arrJobProcss}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 400,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default PblancJobProcssPage;
