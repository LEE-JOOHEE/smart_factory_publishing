import React, { useState } from 'react';
import { Col, Row, Button, Modal, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import DlbrtRegistPopup from 'pages/mg/tr/sc/dr/dlbrtResultRegist/popup/DlbrtRegistPopup';

const DlbrtResultRegist02 = ({ arrDlbrCmitRslt, dlbrCmitRowClick }) => {
  const [open, setOpen] = useState(false);
  const openClick = () => {
    setOpen(true);
  };
  const closeClick = () => {
    setOpen(false);
  };
  //심의워원회결과 checked
  const [arrCheckedDlbrCmitRslt, setArrCheckedDlbrCmitRslt] = useState([]);
  const arrDlbrCmitRsltColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: 50,
      align: 'center',
    },
    {
      title: '사업연도',
      dataIndex: 'b',
    },
    {
      title: '사업명',
      dataIndex: 'c',
    },
    {
      title: '수행기관',
      dataIndex: 'd',
    },
    {
      title: '심의위원회명',
      dataIndex: 'e',
      width: 250,
      render: (_, record) => {
        return (
          <Button
            type="default"
            size="small"
            onClick={(event) => {
              openClick();
              event.stopPropagation();
            }}
          >
            {record?.d}
          </Button>
        );
      },
    },
    {
      title: '심의일자',
      dataIndex: 'f',
      width: 180,
    },
    {
      title: '심의담당자',
      dataIndex: 'g',
    },
    {
      title: '배정과제수',
      dataIndex: 'h',
    },
    {
      title: '종합판정완료 과제수',
      dataIndex: 'i',
    },
    {
      title: '결과확정여부',
      dataIndex: 'j',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedDlbrCmitRslt(selectedRows);
    },
  };

  const rsltCfmtnClick = () => {
    Modal.info({
      title: 'rsltCfmtnClick',
    });
  };

  const [selKey, setSelKey] = useState('');

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={3}>
          <TitleComp>심의위원회</TitleComp>
        </Col>
        <Col span={9}>총 {arrDlbrCmitRslt ? arrDlbrCmitRslt.length : 0}건</Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={rsltCfmtnClick}
          >
            결과확정
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrDlbrCmitRsltColumns}
            dataSource={arrDlbrCmitRslt}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200 }}
            onRow={(record, index) => ({
              onClick: () => {
                //프로세스 처리를 위한 클릭 이벤트 호출
                dlbrCmitRowClick();
                // 3/3 행 선택 시 색상 변경을 위한 키값 저장
                setSelKey(index);
              },
            })}
            //키 값에 따른 색상 변경
            rowClassName={(_, idx) =>
              idx === selKey ? 'eu-table-select-row' : 'eu-table-un-select-row'
            }
          />
        </Col>
      </Row>
      <DlbrtRegistPopup open={open} closeClick={closeClick} />
    </>
  );
};

export default DlbrtResultRegist02;
