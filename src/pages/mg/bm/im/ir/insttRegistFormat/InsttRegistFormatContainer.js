import React, { useState } from 'react';
import { Col, Row, Table, Button, Modal } from 'antd';
import 'css/Common.css';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import FileExtsnPopupPage from 'pages/mg/bm/pm/pc/pblancChartrManage/popup/FileExtsnPopupPage';
import DocTyPopupPage from 'pages/mg/bm/pm/pc/pblancChartrManage/popup/DocTyPopupPage';

const InsttRegistFormatContainer = ({ arrTmpltDef }) => {
  // 문서유형선택
  const [docTypeChcOpen, setDocTypeChcOpen] = useState(false);
  const [arrDocTypeLst, setDocTypeLst] = useState([
    {
      key: 1,
      a: '사업신청서',
      children: [
        {
          key: 2,
          a: '사업수행 계획서',
        },
        {
          key: 3,
          a: '중소기업기술개발지원사업 사업계획서',
        },
        {
          key: 4,
          a: '위탁기관 (참여기업) 참여의사확인서',
        },
      ],
    },
  ]);
  const [arrCheckedDocTypeLst, setArrCheckedDocTypeLst] = useState([]);
  const searchClick = (ojtDocTypeSrchCnd) => {
    Modal.info({
      title: `ojtDocTypeSrchCnd: ${JSON.stringify(ojtDocTypeSrchCnd)}`,
    });
  };
  const docTypeChcOpenClick = () => {
    setDocTypeChcOpen(true);
  };
  const docTypeChcCloseClick = () => {
    setDocTypeChcOpen(false);
  };
  const docTypeChcConfirmClick = () => {
    Modal.info({
      title: `arrCheckedDocTypeLst: ${JSON.stringify(arrCheckedDocTypeLst)}`,
    });
    docTypeChcCloseClick();
  };

  // 파일확장자
  const [fileExtnOpen, setFileExtnOpen] = useState(false);
  const [arrCheckedFileExtn, setArrCheckedFileExtn] = useState([]);
  const fileExtnOpenClick = () => {
    setFileExtnOpen(true);
  };
  const fileExtnCloseClick = () => {
    setFileExtnOpen(false);
  };
  const fileExtnConfirmClick = () => {
    Modal.info({
      title: `arrCheckedFileExtn: ${JSON.stringify(arrCheckedFileExtn)}`,
    });
    fileExtnCloseClick();
  };
  const columns = [
    { title: '문서유형', dataIndex: 'a' },
    { title: '필수 제출여부', dataIndex: 'b' },
    { title: '정렬순서', dataIndex: 'c' },
    {
      title: '접수파일 확장자',
      dataIndex: 'd',
      render: (_, record) => {
        return (
          <Button
            type="default"
            className="eu-btn-table-default"
            size="small"
            onClick={docTypeChcOpenClick}
          >
            {record?.d}
          </Button>
        );
      },
    },
    { title: '양식 첨부문서', dataIndex: 'e' },
  ];
  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}></Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-row-insert"
            icon={<PlusSquareOutlined />}
            onClick={fileExtnOpenClick}
          >
            행추가
          </Button>
          <Button
            size="small"
            className="eu-btn-row-delete"
            icon={<MinusSquareOutlined />}
          >
            행삭제
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            // onClick={() => bizRcritTrgtInsertClick(ojtBizRcritTrgt)}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={arrTmpltDef && arrTmpltDef}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 200,
            }}
            tableLayout={'auto'}
          />
        </Col>
      </Row>
      <FileExtsnPopupPage
        fileExtnOpen={fileExtnOpen}
        fileExtnCloseClick={fileExtnCloseClick}
        setArrCheckedFileExtn={setArrCheckedFileExtn}
        fileExtnConfirmClick={fileExtnConfirmClick}
      />
      <DocTyPopupPage
        docTypeChcOpen={docTypeChcOpen}
        docTypeChcCloseClick={docTypeChcCloseClick}
        searchClick={searchClick}
        setArrCheckedDocTypeLst={setArrCheckedDocTypeLst}
        arrDocTypeLst={arrDocTypeLst}
        docTypeChcConfirmClick={docTypeChcConfirmClick}
      />
    </>
  );
};

export default React.memo(InsttRegistFormatContainer);
