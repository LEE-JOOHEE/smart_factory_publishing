import React, { useState } from 'react';
import { Col, Row, Table, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { DownloadOutlined } from '@ant-design/icons';

const InsttRcritExmnt02 = ({
  arrPbancLst,
  arrCheckedPbancLst,
  setArrCheckedPbancLst,
  setOjtKey,
  setPageType,
}) => {
  const columns = [
    {
      title: '사업연도',
      dataIndex: 'a',
      key: 1,
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'b',
      key: 2,
      align: 'center',
    },
    {
      title: '공고명',
      dataIndex: 'c',
      key: 3,
      align: 'center',
    },
    {
      title: '제출담당자',
      dataIndex: 'd',
      key: 4,
      align: 'center',
    },
    {
      title: '접수번호',
      dataIndex: 'e',
      key: 5,
      align: 'center',
      render: (_, record) => {
        return (
          <Button
            type="default"
            className="eu-btn-table-default"
            size="small"
            onClick={() => {
              setPageType('DETAIL');
              setOjtKey(record.key);
            }}
          >
            {record?.e}
          </Button>
        );
      },
    },
    {
      title: '제출기관명',
      dataIndex: 'f',
      key: 6,
      align: 'center',
    },
    {
      title: '제출일시',
      dataIndex: 'g',
      key: 7,
      align: 'center',
    },
    {
      title: '요건검토 결과',
      dataIndex: 'h',
      key: 8,
      align: 'center',
    },
  ];
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
  // 일괄다운로드
  const downloadClick = () => {
    Modal.info({ title: 'downloadClick' });
  };
  // 엑셀
  const excelClick = () => {
    Modal.info({ title: 'excelClick' });
  };
  // 검토 적합
  const rvwStbltClick = () => {
    Modal.info({ title: 'rvwStbltClick' });
  };
  // 검토 부적합
  const rvwImproptClick = () => {
    Modal.info({ title: 'rvwImproptClick' });
  };
  // 검토 중
  const rvwPrgrsClick = () => {
    Modal.info({ title: `rvwPrgrsClick` });
  };
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>공고 목록</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-excel-download"
            icon={<DownloadOutlined />}
            onClick={downloadClick}
          >
            일괄다운로드
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-default"
            onClick={excelClick}
          >
            엑셀
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={rvwStbltClick}
          >
            검토 적합
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={rvwImproptClick}
          >
            검토 부적합
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={rvwPrgrsClick}
          >
            검토 중
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
              y: 800,
            }}
            tableLayout={'auto'}
          />
        </Col>
      </Row>
    </>
  );
};

export default InsttRcritExmnt02;
