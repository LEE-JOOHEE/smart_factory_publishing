import React, { useState } from 'react';
import { Col, Row, Table, Modal, Button, Descriptions, Select } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const PblancUpdtPopup = ({
  open,
  closeClick,
  searchModalClick,
  arrBizLst,
  setArrCheckedBizLst,
  checkedBizLstChcClick,
}) => {
  // 공고 등록 모달 ojt
  const [ojtModalSrchCnd, setOjtModalSrchCnd] = useState({
    a: '2022',
    b: '전체',
  });

  const ojtModalSrchCndChange = (value, column) => {
    setOjtModalSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const columns = [
    {
      title: '사업연도',
      dataIndex: 'a',
      align: 'center',
    },
    {
      title: '사업분류',
      dataIndex: 'b',
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'c',
      align: 'center',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedBizLst(selectedRows);
    },
  };

  return (
    <>
      <Modal
        key="PblancRegist4"
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        title="수행사업 선택"
        open={open}
        onCancel={closeClick}
        width={1200}
        footer={[
          <>
            <Button
              size="middle"
              className="eu-btn-popup-process-error"
              onClick={() => closeClick()}
            >
              닫기
            </Button>
          </>,
        ]}
      >
        <Row className="eu-row-comp-title">
          <Col span={12}>
            <TitleComp>검색조건 입력</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              onClick={() => searchModalClick(ojtModalSrchCnd)}
            >
              조회
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions size={'small'} bordered>
              <Descriptions.Item label="사업연도">
                <Select
                  onChange={(value) => {
                    ojtModalSrchCndChange(value, 'a');
                  }}
                  options={[
                    {
                      value: '2020',
                      label: '2020',
                    },
                    {
                      value: '2021',
                      label: '2021',
                    },
                    {
                      value: '2022',
                      label: '2022',
                    },
                  ]}
                  value={ojtModalSrchCnd?.a}
                />
              </Descriptions.Item>
              <Descriptions.Item label="사업분류" span={2}>
                <Select
                  onChange={(value) => {
                    ojtModalSrchCndChange(value, 'b');
                  }}
                  options={[
                    {
                      value: '',
                      label: '전체',
                    },
                  ]}
                  value={ojtModalSrchCnd?.b}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>사업 목록</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              onClick={checkedBizLstChcClick}
            >
              선택
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'arrBizLst'}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              columns={columns}
              dataSource={arrBizLst}
              size="small"
              bordered
              pagination={{
                showSizeChanger: false,
                position: ['bottomCenter'],
              }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default PblancUpdtPopup;
