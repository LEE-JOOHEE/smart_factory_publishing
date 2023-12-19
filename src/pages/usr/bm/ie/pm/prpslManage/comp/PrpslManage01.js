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
import { ojtChange } from 'components/common/Common';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';

const PrpslManage01 = ({ setPrpslNo, setPageMode }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '',
  });

  // 제안서 목록
  const [arrPrpsl, setArrPrpsl] = useState([]);

  const arrPrpslColumns = [
    {
      title: '제안서',
      dataIndex: 'a1',
    },
  ];

  //테이블 선택
  const [arrCnstcPrfmncChecked, setArrCnstcPrfmncChecked] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCnstcPrfmncChecked(selectedRows);
    },
  };

  const searchClick = () => {
    Modal.info({
      title: 'searchClick : ' + JSON.stringify(ojtSrchCnd),
    });
  };

  const insertClick = () => {
    setPrpslNo('');
    setPageMode('NEW');
  };
  const deleteClick = () => {
    Modal.info({
      title: 'deleteClick : ' + JSON.stringify(arrCnstcPrfmncChecked),
    });
  };

  // Onload
  useEffect(() => {
    let tmp = [];
    for (let idx = 1; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: '스마트공장 구축 및 고도화 제안서 - ' + idx,
      });
    }
    setArrPrpsl(tmp);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>구축실적 검색조건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={searchClick}
          >
            조회
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="제안서 명">
              <Input
                onChange={(evt) => {
                  ojtChange(evt.target.value, 'a1', setOjtSrchCnd);
                }}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>총 {arrPrpsl?.length}건</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-row-insert"
            icon={<PlusSquareOutlined />}
            onClick={insertClick}
          >
            {' '}
            등록{' '}
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-row-delete"
            icon={<MinusSquareOutlined />}
            onClick={deleteClick}
          >
            {' '}
            삭제{' '}
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrPrpslTable'}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrPrpslColumns}
            dataSource={arrPrpsl}
            size="small"
            bordered
            pagination={{ showSizeChanger: false, pageSize: 10 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default PrpslManage01;
