import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from 'antd';
import 'css/CommonUsr.css';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd, ojtChange } from 'components/common/Common';
const { Text, Link } = Typography;

const BsnsActplnExmnt01 = ({ arrBizPlanDoc, setOjtKey, setPageType }) => {
  const arrBizPlanDocColumns = [
    {
      title: '사업연도',
      dataIndex: 'a1',
      align: 'center',
    },
    {
      title: '사업분류',
      dataIndex: 'a2',
    },
    {
      title: '세부공고명',
      dataIndex: 'a3',
      align: 'center',
    },
    {
      title: '공급기업명',
      dataIndex: 'a4',
    },
    {
      title: '지역',
      dataIndex: 'a5',
      align: 'center',
    },
    {
      title: '진행상태',
      dataIndex: 'a6',
      align: 'center',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setOjtKey(selectedRows);
    },
  };

  const detailClick = () => {
    setPageType('DETAIL');
  };

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>총 {arrBizPlanDoc?.length}건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={detailClick}
          >
            사업계획서 검토
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrBizPlanDocTable'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrBizPlanDocColumns}
            dataSource={arrBizPlanDoc}
            size="small"
            bordered
            pagination={{ showSizeChanger: false, pageSize: 10 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default BsnsActplnExmnt01;
