import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Checkbox, Select, Table, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { arrChange } from 'components/common/Common';

const PblancPartcptnTrgetPage = ({ arrPartcptnTrget, setArrPartcptnTrget }) => {
  const columns = [
    {
      title: '사업참여대상',
      dataIndex: 'a',
      width: '16%',
      align: 'center',
    },
    {
      title: '필수참여여부',
      dataIndex: 'b',
      width: '12%',
      align: 'center',
      render: (_, render, index) => (
        <Checkbox
          onChange={(e) =>
            arrChange(e.target.checked, 'b', index, setArrPartcptnTrget)
          }
          defaultChecked={arrPartcptnTrget[index]['b']}
        />
      ),
    },
    {
      title: '협약서명대상',
      dataIndex: 'c',
      width: '12%',
      align: 'center',
      render: (_, render, index) => (
        <Checkbox
          onChange={(e) =>
            arrChange(e.target.checked, 'c', index, setArrPartcptnTrget)
          }
          defaultChecked={arrPartcptnTrget[index]['c']}
        />
      ),
    },
    {
      title: '지정기관',
      dataIndex: 'd',
      width: '30%',
      align: 'center',
      render: (_, record, index) => {
        console.log(record, index);
        return (
          <Select
            // 테이블 안에 셀렉트는 trigger 하지않음(부모에게 종족되어 테이블 안쪽에서만 select dropdown이 생성되는 이슈발생)
            dropdownAlign={{ offset: [0, 1] }}
            className="text-l"
            placeholder="지정기관"
            onChange={(value) =>
              arrChange(value, 'd', index, setArrPartcptnTrget)
            }
            options={[
              {
                value: '',
                label: '없음',
              },
              {
                value: '중소기업기술정보진흥원',
                label: '중소기업기술정보진흥원',
              },
            ]}
            defaultValue={record?.d}
          />
        );
      },
    },
    {
      title: '비고',
      dataIndex: 'e',
      width: '30%',
      align: 'center',
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
          <TitleComp>사업참여대상</TitleComp>
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
            columns={columns}
            dataSource={arrPartcptnTrget}
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

export default PblancPartcptnTrgetPage;
