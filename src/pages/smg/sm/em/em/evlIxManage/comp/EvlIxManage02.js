import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Space, Table, Tabs } from 'antd';

import { SearchOutlined } from '@ant-design/icons';

import 'css/Common.css';
import EvlTableExPopup from 'pages/smg/sm/em/em/evlIxManage/popup/EvlTableExPopup';
import EvlRegistPopup from 'pages/smg/sm/em/em/evlIxManage/popup/EvlRegistPopup';

const EvlIxManage02 = ({ arrEvlIx }) => {
  const arrEvlIxColumns = [
    {
      title: '평가년도',
      dataIndex: 'a1',
      width: '7%',
      align: 'center',
    },
    {
      title: '업명',
      dataIndex: 'a2',
      width: '14%',
    },
    {
      title: '평가지유형',
      dataIndex: 'a3',
      width: '13%',
    },
    {
      title: '평가지ID',
      dataIndex: 'a4',
      width: '13%',
      align: 'center',
      render: (_, record) => {
        return (
          <Button
            className="eu-btn-table-default"
            icon={<SearchOutlined />}
            onClick={(event) => {
              evlUpdtBassClick();
              event.stopPropagation();
            }}
          >
            {record?.a4}
          </Button>
        );
      },
    },
    {
      title: '평가지명',
      dataIndex: 'a5',
      width: '22%',
    },
    {
      title: '평가구분',
      dataIndex: 'a6',
      width: '9%',
      align: 'center',
    },
    {
      title: '평가방법',
      dataIndex: 'a7',
      width: '7%',
      align: 'center',
    },
    {
      title: '사용여부',
      dataIndex: 'a8',
      width: '7%',
      align: 'center',
    },
    {
      title: '등록자',
      dataIndex: 'a9',
      width: '8%',
      align: 'center',
    },
  ];

  //테이블 선택
  const [arrEvlIxChecked, setArrEvlIxChecked] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrEvlIxChecked(selectedRows);
    },
  };
  //미리보기 팝업
  const [evlTableExPopupOpen, setEvlTableExPopupOpen] = useState(false);
  const evlTableExClick = () => {
    setEvlTableExPopupOpen(true);
  };

  //평가표복사, 추가 팝업
  const [evlRegistPopupOpen, setEvlRegistPopupOpen] = useState(false);
  const evlRegistBassClick = () => {
    setEvlRegistPopupOpen(true);
  };
  //평가지수정
  const [evlUpdtBassOpen, setEvlUpdtBassOpen] = useState(false);
  const evlUpdtBassClick = () => {
    //화면이 등록과 동일하여 등록 팝업으로 대체합니다. 필요 시 등록 프로그램 복사해서 수정 프로그램 만들어 주세요.
    setEvlRegistPopupOpen(true);
    // setEvlUpdtBassOpen(true);
  };

  //삭제
  const deleteClick = () => {
    //
  };

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={8} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrEvlIx ? arrEvlIx.length : 0}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={16} style={{ textAlign: 'right' }}>
          <Space>
            <Button
              className="eu-btn-crud-fine"
              onClick={evlTableExClick}
            >
              미리보기
            </Button>
            <Button
              className="eu-btn-crud-fine"
              onClick={evlRegistBassClick}
            >
              평가표복사
            </Button>
            <Button
              className="eu-btn-crud-fine"
              onClick={evlRegistBassClick}
            >
              추가
            </Button>
            <Button
              className="eu-btn-crud-fine"
              onClick={deleteClick}
            >
              삭제
            </Button>
          </Space>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrEvlIxColumns}
            dataSource={arrEvlIx}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 420, x: 1200 }}
          />
        </Col>
      </Row>
      <EvlTableExPopup
        key={'EvlTableExPopup'}
        evlTableExPopupOpen={evlTableExPopupOpen}
        setEvlTableExPopupOpen={setEvlTableExPopupOpen}
      />
      <EvlRegistPopup
        key={'EvlRegistPopup'}
        evlRegistPopupOpen={evlRegistPopupOpen}
        setEvlRegistPopupOpen={setEvlRegistPopupOpen}
      />
      {/* <SptBsnsPopup
        key={'SptBsnsPopup'}
        cmEvlAltmntSttsOpen={cmEvlAltmntSttsOpen}
        setCmEvlAltmntSttsOpen={setCmEvlAltmntSttsOpen}
      /> */}
    </>
  );
};

export default EvlIxManage02;
