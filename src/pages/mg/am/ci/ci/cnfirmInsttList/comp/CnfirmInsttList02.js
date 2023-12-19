import React, { useState } from 'react';
import { Col, Row, Table, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { DownloadOutlined } from '@ant-design/icons';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';
import CnfirmInsttRegistPage from 'pages/mg/am/ci/ci/cnfirmInsttList/popup/CnfirmInsttRegistPage';

const CnfirmInsttList02 = ({
  arrPbancLst,
  setArrCheckedPbancLst,
  setOjtKey,
  setPageType,
}) => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
      setArrCheckedPbancLst(selectedRows);
    },
  };

  const idntyInstAltmntClick = () => {
    Modal.info({ title: 'idntyInstAltmntClick' });
  };

  const [excelOpen, setExcelOpen] = useState(false);
  const excelOpenClick = () => {
    setExcelOpen(true);
  };

  const [registOpen, setRegistOpen] = useState(false);
  const registOpenClick = () => {
    setRegistOpen(true);
  };
  const registCloseClick = () => {
    setRegistOpen(false);
  };
  const rcptClick = () => {
    Modal.info({ title: 'rcptClick' });
  };

  const columns = [
    {
      title: '사업연도',
      dataIndex: 'a',
      key: 1,
      width: '6%',
      align: 'center',
    },
    {
      title: '세부공고명',
      dataIndex: 'b',
      key: 2,
      width: '14%',
      align: 'center',
    },
    {
      title: '과제번호',
      dataIndex: 'c',
      key: 3,
      width: '10%',
      align: 'center',
    },
    {
      title: '과제명',
      dataIndex: 'd',
      key: 4,
      width: '20%',
      align: 'center',
      render: (_, record) => {
        return (
          <Button
            className="eu-btn-table-default"
            onClick={() => {
              setOjtKey(record.key);
              setPageType('DETAIL');
            }}
          >
            {record?.d}
          </Button>
        );
      },
    },
    {
      title: '과제신청자',
      dataIndex: 'e',
      key: 5,
      width: '7%',
      align: 'center',
    },
    {
      title: '도입기업',
      dataIndex: 'f',
      key: 6,
      width: '11%',
      align: 'center',
    },
    {
      title: '확인기관',
      dataIndex: 'g',
      key: 7,
      width: '9%',
      align: 'center',
      render: (_, record) => {
        return (
          <Button
            className="eu-btn-table-default"
            onClick={registOpenClick}
          >
            {record?.g}
          </Button>
        );
      },
    },
    {
      title: '과제진행상태',
      dataIndex: 'h',
      key: 8,
      width: '13%',
      align: 'center',
    },
    {
      title: '심의위원회결과',
      dataIndex: 'i',
      key: 9,
      width: '10%',
      align: 'center',
    },
  ];
  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24} className="title-0">
          <TitleComp>공고목록</TitleComp>
        </Col>
        <Col span={12} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">{arrPbancLst.length}</span>건
            </div>
          </div>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-default"
            onClick={registOpenClick}
          >
            확인기관배정
          </Button>
          <Button
            className="eu-btn-crud-fine"
            onClick={() => {
              setPageType('DETAIL');
            }}
          >
            접수
          </Button>
          <Button
            className="eu-btn-excel-download"
            // icon={<DownloadOutlined />}
            onClick={excelOpenClick}
          >
            엑셀다운로드
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrPbancLst'}
            columns={columns}
            dataSource={arrPbancLst}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 500, x: 1500
            }}
            // tableLayout={'auto'}
          />
        </Col>
      </Row>
      <CmAgremExcelDwnld
        cmAgremExcelDwnldOpen={excelOpen}
        setCmAgremExcelDwnldOpen={setExcelOpen}
      />
      <CnfirmInsttRegistPage
        registOpen={registOpen}
        registCloseClick={registCloseClick}
      />
    </>
  );
};

export default CnfirmInsttList02;
