import React, { useState } from 'react';
import { Col, Row, Button, Table, Select, Modal, Space, Input } from 'antd';
import { PlusOutlined, MinusOutlined, } from "@ant-design/icons";
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { arrChange } from 'components/common/Common';

const PblancRsltIxPage = ({
  arrTaskClsfTmplt,
  arrDocType,
  setArrDocType,
  rsltIxModalOpenClick,
  openFileExtnClick,
}) => {
  const taskClsfTmpltColumn = [
    {
      title: '업무분류명',
      dataIndex: 'a',
      width: '31%',
      align: 'center',
    },
    {
      title: '진행순서',
      dataIndex: 'b',
      width: '23%',
      align: 'center',
    },
    {
      title: '등록 개수',
      dataIndex: 'c',
      width: '23%',
      align: 'center',
    },
    {
      title: '제한 용량',
      dataIndex: 'd',
      width: '23%',
      align: 'center',
    },
  ];

  const docTypeColumn = [
    {
      title: '문서유형',
      dataIndex: 'a',
      width: '24%',
    },
    {
      title: '필수 제출여부',
      dataIndex: 'b',
      width: '12%',
      render: (_, record, index) => {
        console.log(record, index);
        return (
          <Select
            getPopupContainer={trigger => trigger.parentNode}
            dropdownAlign={{ offset: [0, 0] }}
            placeholder="필수 제출여부"
            onChange={(value) => arrChange(value, 'b', index, setArrDocType)}
            options={[
              {
                value: '필수',
                label: '필수',
              },
              {
                value: '없음',
                label: '없음',
              },
            ]}
            defaultValue={record?.b}
          />
        );
      },
    },
    {
      title: '자동 첨부여부',
      dataIndex: 'c',
      width: '12%',
      render: (_, record, index) => {
        console.log(record, index);
        return (
          <Select
            getPopupContainer={trigger => trigger.parentNode}
            dropdownAlign={{ offset: [0, 0] }}
            placeholder="자동 첨부여부"
            onChange={(value) => arrChange(value, 'c', index, setArrDocType)}
            options={[
              {
                value: '자동',
                label: '자동',
              },
              {
                value: '없음',
                label: '없음',
              },
            ]}
            defaultValue={record?.c}
          />
        );
      },
    },
    {
      title: '정렬 순서',
      dataIndex: 'd',
      width: '9%',
      align: 'center',
    },
    {
      title: '접수파일 확장자',
      dataIndex: 'e',
      width: '14%',
      render: (text) => (
        <Button
          type="link" 
          className="eu-btn-link text-c"
          // className="eu-btn-table-default"
          onClick={openFileExtnClick}
        >
          {text}
        </Button>
      ),
    },
    {
      title: '양식 첨부문서',
      dataIndex: 'f',
      width: '12%',
    },
    {
      title: '자동양식',
      dataIndex: 'g',
      width: '17%',
    },
  ];

  const deleteLineClick = () => {
    Modal.info({ title: 'deleteLineClick' });
  };

  const insertClick = () => {
    Modal.info({ title: 'insertClick' });
  };

  return (
    <>
      <Row gutter={(0, 20)}>
        <Col span={7}>
          <Row className="eu-row-comp-title mb-12">
            <Col span={24} className="title-0">
              <TitleComp>업무분류별 서식</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Table
                key={'taskClsfTmplt'}
                columns={taskClsfTmpltColumn}
                dataSource={arrTaskClsfTmplt}
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
        </Col>
        <Col span={17}>
          <Row className="eu-row-comp-title mb-8">
            <Col span={15}>
              <Space>
                <div className="font-16-500">문서제한용량</div>
                <Input style={{width: '72px', textAlign: 'right'}} />
                <div className="font-16-500">MB</div>
              </Space>
              <Space className="ml-50">
                <div className="font-16-500">평가표시적용</div>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  className="text-l"
                  style={{ width: 100 }}
                  options={[{value: '', label: '미적용'},]}
                  defaultValue={''}
                />
              </Space>
            </Col>
            <Col span={9} style={{ textAlign: 'right' }}>
              <Button
                className="eu-btn-row-insert"
                icon={<PlusOutlined />}
                onClick={rsltIxModalOpenClick}
              >
                행추가
              </Button>
              <Button
                className="eu-btn-row-delete"
                icon={<MinusOutlined />}
                onClick={deleteLineClick}
              >
                행삭제
              </Button>
              <Button
                className="eu-btn-crud-warning"
                onClick={insertClick}
              >
                저장
              </Button>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Table
                key={'docType'}
                columns={docTypeColumn}
                dataSource={arrDocType}
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
        </Col>
      </Row>
    </>
  );
};

export default PblancRsltIxPage;
