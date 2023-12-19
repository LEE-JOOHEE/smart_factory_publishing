import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const PblancChartrManagePopup02 = ({
  upBizPlanStngOpen,
  closeUpBizPlanStngOpen,
  confirmUpBizPlanStng,
  setArrCheckedUpZiaPlanStng,
}) => {
  const [ojtUpBizPlanStng, setOjtUpBizPlanStng] = useState([]);

  useEffect(() => {
    setOjtUpBizPlanStng([
      {
        key: 1,
        a: '2022',
        b: '수행사업명1',
      },
      {
        key: 2,
        a: '2022',
        b: '수행사업명2',
      },
    ]);
  }, []);

  const columns = [
    {
      title: '사업연도',
      dataIndex: 'a',
      width: '15%',
      align: 'center',
    },
    {
      title: '수행사업명',
      dataIndex: 'b',
      width: '80%',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedUpZiaPlanStng(selectedRows);
    },
  };

  return (
    <>
      <Modal
        key="PblacnchartrManage05"
        title="상위 사업계획 설정"
        // style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        open={upBizPlanStngOpen}
        onCancel={closeUpBizPlanStngOpen}
        width={1200}
        footer={[
          <Button
            className="eu-btn-popup-process-default"
            onClick={confirmUpBizPlanStng}
          >
            확인
          </Button>,
          <Button
            className="eu-btn-popup-process-warning"
            onClick={closeUpBizPlanStngOpen}
          >
            닫기
          </Button>
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title mb-0">
            <Col span={24}>
              <TitleComp>사업정보</TitleComp>
            </Col>
          </Row>
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={ojtUpBizPlanStng}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              pagination={false}
              size={'small'}
              bordered={true}
              sticky={true}
              scroll={{
                y: 400,
              }}
              tableLayout={'auto'}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default PblancChartrManagePopup02;
