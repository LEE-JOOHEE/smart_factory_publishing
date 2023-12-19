import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table, Typography } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { PlusSquareFilled, MinusSquareFilled } from '@ant-design/icons';
const { Text } = Typography;
const SptExmntPopup04 = () => {
  const [arrCheckedArrAtchLst, setArrCheckedArrAtchLst] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedArrAtchLst(selectedRows);
    },
  };

  const arrAtchLstColumns = [
    {
      title: '순번',
      dataIndex: 'a',
      width: '10%',
      align: 'center',
    },
    {
      title: '파일명',
      dataIndex: 'b',
      width: '60%',
    },
    {
      title: '파일크기',
      dataIndex: 'c',
      width: '25%',
    },
  ];

  const [arrAtchLst, setArrAtchLst] = useState([]);

  useEffect(() => {
    let tmp2 = [];

    tmp2.push({
      key: 1,
      a: 1,
      b: '녹취록.mp3',
      c: '2248',
    });
    setArrAtchLst(tmp2);
  }, []);

  const insertClick = () => {
    Modal.info({
      title: '추가 클릭',
    });
  };
  const deleteClick = () => {
    Modal.info({
      title: '삭제 클릭',
    });
  };

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24} className="title-0">
          <TitleComp>
            녹취 자료 및 동의서(사유서)
            {/* <Text type="danger" style={{ fontWeight: 'light' }}>
              &nbsp;※ 과제에 대한 담당간사의 첨부자료 등록
            </Text> */}
          </TitleComp>
        </Col>
        <Col span={12} className="mt-auto">
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red">
              ※ 과제에 대한 담당간사의 첨부자료 등록
            </span>
          </div>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-row-insert"
            // icon={<PlusSquareFilled />}
            onClick={insertClick}
          >
            추가
          </Button>
          <Button
            className="eu-btn-row-delete"
            // icon={<MinusSquareFilled />}
            onClick={deleteClick}
          >
            삭제
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            key={'arrAtchLst'}
            columns={arrAtchLstColumns}
            dataSource={arrAtchLst}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 100 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SptExmntPopup04;
