import React, { useState } from 'react';
import { Col, Row, Table, Button, Modal } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import SprvisorAppnPopup from 'pages/usr/bm/rs/sa/sprvisorAppnList/popup/SprvisorAppnPopup';
import CmAgremExcelDwnld from 'pages/cm/cm/CmAgremExcelDwnld';

const SprvisorAppnList02 = ({ arrSpvsLst }) => {
  const [arrCheckedSpvsList, setArrCheckedSpvsList] = useState([]);
  const [spvsDsgnOpen, setSpvsDsgnOpen] = useState(false);
  const closeSpvsDsgnClick = () => {
    setSpvsDsgnOpen(false);
  };
  const [cmAgremExcelDwnldOpen, setCmAgremExcelDwnldOpen] = useState(false);

  const excelDownloadClick = () => {
    setCmAgremExcelDwnldOpen(true);
  };
  const columns = [
    { title: '사업연도', dataIndex: 'a1' },
    { title: '구분', dataIndex: 'a2' },
    { title: '협약번호', dataIndex: 'a3' },
    { title: '지역', dataIndex: 'a4' },
    { title: '세부주소', dataIndex: 'a5' },
    { title: '사업시작일', dataIndex: 'a6' },
    { title: '구축종료일', dataIndex: 'a7' },
    { title: '감리기관', dataIndex: 'a8' },
    { title: '감리원명', dataIndex: 'a9' },
    { title: '최종감리일정', dataIndex: 'a10' },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
      setArrCheckedSpvsList(selectedRows);
    },
  };
  const popupSelectClick = (arr, ojt) => {
    Modal.info({
      title: `arr: ${JSON.stringify(arr)} ojt: ${JSON.stringify(ojt)}`,
    });
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>{`총 ${arrSpvsLst.length}건`}</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={() => {
              setSpvsDsgnOpen(true);
            }}
          >
            감리원지정
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-excel-download"
            icon={<DownloadOutlined />}
            onClick={excelDownloadClick}
          >
            엑셀다운로드
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrSpvsLstTable'}
            columns={columns}
            dataSource={arrSpvsLst}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 800,
            }}
          />
        </Col>
      </Row>
      <SprvisorAppnPopup
        open={spvsDsgnOpen}
        closeClick={closeSpvsDsgnClick}
        popupSelectClick={popupSelectClick}
      />
      <CmAgremExcelDwnld
        key={'CmAgremExcelDwnld'}
        cmAgremExcelDwnldOpen={cmAgremExcelDwnldOpen}
        setCmAgremExcelDwnldOpen={setCmAgremExcelDwnldOpen}
      />
    </>
  );
};

export default SprvisorAppnList02;
