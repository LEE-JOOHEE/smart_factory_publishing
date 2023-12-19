import React, { useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Modal, Table } from 'antd/lib';

import { CheckOutlined } from '@ant-design/icons';
import PrmpcAppnPopup from 'pages/mg/tr/cc/pc/prmpcInsttAppn/popup/PrmpcAppnPopup';

const PrmpcInsttAppn02 = ({ arrTask }) => {
  // 테이블 헤더
  const arrTaskColumns = [
    {
      title: '사업연도',
      dataIndex: 'a1',
    },
    {
      title: '지역(수행기관)',
      dataIndex: 'a2',
    },
    {
      title: '세부공고명',
      dataIndex: 'a3',
    },
    {
      title: '과제명',
      dataIndex: 'a4',
    },
    {
      title: '도입기업',
      dataIndex: 'a5',
    },
    {
      title: '공급기업',
      dataIndex: 'a6',
    },
    {
      title: '원가재계산',
      dataIndex: 'a7',
    },
    {
      title: '배정일자',
      dataIndex: 'a8',
    },
    {
      title: '원가계산기관',
      dataIndex: 'a9',
      render: (_, record, index) => {
        return (
          <>
            <Button
              className="eu-btn-link"
              size="small"
              type="link"
              onClick={() => {
                // 화면이동 구현 필요
                //('제안요청서조회상세 페이지 이동 구현');
                console.log(record, index);
                // Modal.info({ title: '원가계신기관 지정 팝업' });

                setPrmpcAppnPopupOpen(true);
              }}
            >
              {record?.a9}
            </Button>
          </>
        );
      },
    },
  ];

  const [prmpcAppnPopupOpen, setPrmpcAppnPopupOpen] = useState(false);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
    },
  };

  const dsgnClick = () => {
    setPrmpcAppnPopupOpen(true);
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>
            총 {arrTask?.length.toString().padStart(3, '0')} 건
          </TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-excel-download"
            icon={<CheckOutlined />}
            onClick={dsgnClick}
          >
            원가계산기관 지정
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            scroll={{ y: 500 }}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            key={'PrmpcInsttAppn02Table'}
            columns={arrTaskColumns}
            dataSource={arrTask}
            size="small"
            bordered
          />
        </Col>
      </Row>
      <PrmpcAppnPopup
        prmpcAppnPopupOpen={prmpcAppnPopupOpen}
        setPrmpcAppnPopupOpen={setPrmpcAppnPopupOpen}
      />
    </>
  );
};
export default PrmpcInsttAppn02;
