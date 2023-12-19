import React, { useState } from 'react';
import {
  Col,
  Row,
  Table,
  Modal,
  Button,
  Descriptions,
  Input,
  Checkbox,
  Space,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const DocTyPopupPage = ({
  docTypeChcOpen,
  docTypeChcCloseClick,
  searchClick,
  setArrCheckedDocTypeLst,
  arrDocTypeLst,
  docTypeChcConfirmClick,
}) => {
  const [ojtDocTypeSrchCnd, setOjtDocTypeSrchCnd] = useState({ a: '', b: '' });
  const ojtDocTypeSrchCndChange = (value, column) => {
    setOjtDocTypeSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  const columns = [
    {
      title: '문서유형명',
      dataIndex: 'a',
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedDocTypeLst(selectedRows);
    },
  };
  const [checkbox, setCheckbox] = useState(false);
  const checkboxClick = (value) => {
    console.log('checkbox: ', value);
    setCheckbox(value);
  };
  return (
    <>
      <Modal
        key="PblancRsltIx01"
        title="문서유형선택"
        // style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        open={docTypeChcOpen}
        onCancel={docTypeChcCloseClick}
        width={1200}
        footer={[
          <Button
            className="eu-btn-popup-process-default"
            onClick={docTypeChcConfirmClick}
          >
            확인
          </Button>,
          <Button
            className="eu-btn-popup-process-warning"
            onClick={docTypeChcCloseClick}
          >
            닫기
          </Button>
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>검색조건 입력</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button
                key={'searchClick'}
                className="eu-btn-crud-fine"
                onClick={() => searchClick(ojtDocTypeSrchCnd)}
              >
                조회
              </Button>
            </Col>
          </Row>
          <Col span={24}>
            <Descriptions size={'small'} bordered>
              <Descriptions.Item label="문서유형명" span={2}>
                <Input
                  onChange={(evt) => {
                    ojtDocTypeSrchCndChange(evt.target.value, 'a');
                  }}
                  value={ojtDocTypeSrchCnd?.a}
                />
              </Descriptions.Item>
              <Descriptions.Item label="문서유형코드">
                <Input
                  onChange={(evt) => {
                    ojtDocTypeSrchCndChange(evt.target.value, 'b');
                  }}
                  value={ojtDocTypeSrchCnd?.b}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">
            <Col span={12} className="title-0">
              <TitleComp>문서유형목록</TitleComp>
            </Col>
            <Col span={12}>
              <div className="eu-table-indicator">
                <Space className="ml-auto">
                  <Checkbox
                    onChange={(evt) => checkboxClick(evt.target.checked)}
                    defaultValue={checkbox}
                  />
                  <span className="font-16-500">업무분류 관계 없이 조회</span>
                </Space>
              </div>
            </Col>
          </Row>
          <Col span={24}>
            <Table
              key={'docTypeLst'}
              columns={columns}
              dataSource={arrDocTypeLst}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
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
      </Modal>
    </>
  );
};

export default DocTyPopupPage;
