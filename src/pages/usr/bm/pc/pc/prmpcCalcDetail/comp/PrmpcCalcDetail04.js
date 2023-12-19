import React, { useState } from 'react';
import { Col, Row, Button, Modal, Table, Input, Descriptions } from 'antd';
import { PlusSquareOutlined, DeleteOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const { TextArea } = Input;

const PrmpcCalcExmnt04 = ({ arrAtchFile }) => {
  const [prmpcCalcRvwOpnn, setPrmpcCalcRvwOpnn] = useState('');
  const columns = [
    { title: '순번', dataIndex: 'a1' },
    { title: '등록일', dataIndex: 'a2' },
    { title: '파일 다운로드', dataIndex: 'a3' },
    { title: '파일크기', dataIndex: 'a4' },
    {
      title: '파일 삭제',
      render: (_, record) => {
        return (
          <Button
            size="small"
            className="eu-usr-btn-table-error"
            icon={<DeleteOutlined />}
            onClick={() => {
              Modal.info({ title: `삭제 : ${record.key}` });
            }}
          >
            삭제
          </Button>
        );
      },
    },
  ];

  const insertFileAtch = () => {
    Modal.info({ title: 'insertFileAtch' });
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>원가계산 검토 의견</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="비고">
              <TextArea
                value={prmpcCalcRvwOpnn}
                placeholder={'의견을 입력하세요.'}
                onChange={(e) => {
                  setPrmpcCalcRvwOpnn(e.target.value);
                }}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>첨부파일</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-row-insert"
            icon={<PlusSquareOutlined />}
            onClick={insertFileAtch}
          >
            파일첨부
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 300 }}
            columns={columns}
            dataSource={arrAtchFile}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default PrmpcCalcExmnt04;
