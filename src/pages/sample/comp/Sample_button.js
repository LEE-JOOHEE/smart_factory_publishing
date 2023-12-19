import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Input,
  Radio,
  Row,
  Select,
  Table,
  Tabs,
  Modal,
  Space,
  Tag,
  Card,
  Tree,
  Transfer,
  Typography,
  Divider,
  notification,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import {  } from "@ant-design/icons";
import { PlusOutlined, MinusOutlined, 
  BarChartOutlined, LineChartOutlined, 
  DownOutlined, UpOutlined } from '@ant-design/icons';

import uploadIcon from "css/images/user-icons/upload-icon.png";
import expandIcon from "css/images/user-icons/expand-icon.png";
import fileUpload from "css/images/user-icons/file_upload.png";
import fileDownload from "css/images/user-icons/file_download.png";
import excelUpload from "css/images/user-icons/excel_upload.png";
import excelDownload from "css/images/user-icons/excel_download.png";

const { Title } = Typography;

const Sample_button = ({ ojtGroupCodes, searchClick, editable = false }) => {

  const [aplyAsmtPjtcoOpen, setAplyAsmtPjtcoOpen] = useState(false);
  const aplyAsmtPjtcoShow = () => {
    setAplyAsmtPjtcoOpen(true);
  };
  const aplyAsmtPjtcoClose = () => {
    setAplyAsmtPjtcoOpen(false);
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement, key, content) => {
    api.open({
      message: `${key} - ${content}`,
      className: 'eu-noti-tr',
      duration: 1,
      placement,
    });
  };

  return(
    <>

      <h1 className="mt-0">관리자 페이지 버튼 디자인</h1>
      <Space wrap>
        <Button className="eu-btn-popup-process-default">
          닫기
        </Button>
        <Button className="eu-btn-popup-process-fine">
          조회
        </Button>
        <Button className="eu-btn-popup-process-warning">
          확인
        </Button>
        <Button className="eu-btn-popup-process-error">
          삭제
        </Button>
      </Space>
      <br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-popup-process-default">닫기</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-popup-process-fine">조회</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-popup-process-warning">확인</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-popup-process-error">삭제</Button>`}
      <br /><br />

      <TitleComp>2. Page Process Buttons</TitleComp>
      <Space wrap>
        <Button className="eu-btn-process-default">
          기본
        </Button>
        <Button className="eu-btn-process-fine">
          접수
        </Button>
        <Button className="eu-btn-process-warning">
          제출
        </Button>
        <Button className="eu-btn-process-error">
          반려
        </Button>
      </Space>
      <br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-process-default">기본</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-process-fine">접수</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-process-warning">제출</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-process-error">반려</Button>`}
      <br /><br />

      <TitleComp>3. Component CRUD Buttons</TitleComp>
      <Space wrap>
        <Button className="eu-btn-crud-default">
          기본
        </Button>
        <Button className="eu-btn-crud-fine">
          조회
        </Button>
        <Button className="eu-btn-crud-warning">
          임시저장
        </Button>
        <Button className="eu-btn-crud-error">
          삭제
        </Button>
        <Button
          className="eu-btn-row-insert"
          icon={<PlusOutlined />}
        >
          행추가
        </Button>
        <Button
          className="eu-btn-row-delete"
          icon={<MinusOutlined />}
        >
          행삭제
        </Button>
        <Button
          className="eu-btn-excel-download"
          // icon={<DownloadOutlined />}
        >
          엑셀다운로드
        </Button>
      </Space>
      <br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-crud-default">기본</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-crud-fine">조회</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-crud-warning">임시저장</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-crud-error">삭제</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-row-insert" icon={<PlusOutlined />}>행추가</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-row-delete" icon={<MinusOutlined />}>행삭제</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-excel-download">엑셀다운로드</Button>`}
      <br /><br />

      <TitleComp>4. [추가요청] Text + Icon Buttons</TitleComp>
      <Space>
        <Button className="eu-btn-excel-download flex-row-center">
          엑셀 <img src={uploadIcon} className="icon-360deg" alt="업로드아이콘버튼" />
        </Button>
        <Button className="eu-btn-excel-download flex-row-center">
          엑셀 <img src={uploadIcon} className="icon-180deg" alt="다운로드아이콘버튼" />
        </Button>
        <Button className="eu-btn-crud-default flex-row-center">
          <img src={expandIcon} className="icon-color-black ml-0 mr-6" alt="상세보기" />상세보기
        </Button>
        {/* <Button className="eu-btn-crud-warning flex-row-center">
          새창열기 <img src={expandIcon} alt="새창열기" />
        </Button> */}
        <Button className="eu-btn-crud-warning flex-row-center">
          <img src={expandIcon} className="ml-0 mr-6" alt="새창열기" />새창열기
        </Button>
        <Button className="eu-btn-crud-default flex-row-center icon-only pt-2">
          <img src={fileDownload} alt="파일다운로드 아이콘만" />
        </Button>
        <Button className="eu-btn-crud-default flex-row-center icon-only pt-2">
          <img src={fileUpload} alt="파일업로드 아이콘만" />
        </Button>
        <Button className="eu-btn-crud-default flex-row-center icon-only">
          <img src={excelDownload} alt="엑셀다운로드 아이콘만" />
        </Button>
        <Button className="eu-btn-crud-default flex-row-center icon-only">
          <img src={excelUpload} alt="엑셀업로드 아이콘만" />
        </Button>
      </Space>
      <br /><br />
      <Row>
        <Col span={12}>
          <div className="text-gray-900">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<Button className="eu-btn-excel-download flex-row-center">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`엑셀 <img src={uploadIcon} className="icon-360deg" alt="업로드아이콘버튼" />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Button>`}
            <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<Button className="eu-btn-excel-download flex-row-center">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`엑셀 <img src={uploadIcon} className="icon-180deg" alt="다운로드아이콘버튼" />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Button>`}
            <br /><br />
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<Button className="eu-btn-crud-default flex-row-center">`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<img src={expandIcon} className="icon-color-black ml-0 mr-6" alt="상세보기" />상세보기`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Button>`}
          <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<Button className="eu-btn-crud-warning flex-row-center">`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<img src={expandIcon} className="ml-0 mr-6" alt="새창열기" />새창열기`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Button>`}
          <br /><br />
        </Col>
        <Col span={12}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<Button className="eu-btn-crud-default flex-row-center icon-only pt-2">`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<img src={fileDownload} alt="파일다운로드 아이콘만" />`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Button>`}
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<Button className="eu-btn-crud-default flex-row-center icon-only pt-2">`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<img src={fileUpload} alt="파일업로드 아이콘만" />`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Button>`}
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<Button className="eu-btn-crud-default flex-row-center icon-only">`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<img src={excelDownload} alt="엑셀다운로드 아이콘만" />`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Button>`}
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<Button className="eu-btn-crud-default flex-row-center icon-only">`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<img src={excelUpload} alt="엑셀업로드 아이콘만" />`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Button>`}
          <br /><br />
        </Col>
      </Row>

      <TitleComp>5. Table Row Buttons</TitleComp>
      <Space wrap>
        <Button className="eu-btn-table-default">
          기본
        </Button>
        <Button className="eu-btn-table-fine">
          조회
        </Button>
        <Button className="eu-btn-table-warning">
          임시저장
        </Button>
        <Button className="eu-btn-table-error">
          삭제
        </Button>
        <Button type="link" className="eu-btn-link">테이블에서 많이 쓰이는 링크버튼</Button>
        <Button type="link" className="eu-btn-link">링크버튼1</Button>
        <Button type="link" className="eu-btn-link">링크버튼2</Button>
        <Button type="link" className="eu-btn-link-br">높이값이<br/>자유로운<br/>링크버튼</Button>
      </Space>
      <br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-table-default">기본</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-table-fine">조회</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-table-warning">임시저장</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-table-error">삭제</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button`}<span className="text-red"> type="link" </span>{`className="eu-btn-link">링크버튼</Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button`}<span className="text-red"> type="link" </span>{`className="eu-btn-link-br">높이값이<br/>자유로운<br/>링크버튼</Button>`}
      <br /><br />

      <TitleComp>5-1. 새창 아이콘 + 링크버튼 사용가이드</TitleComp>
      <Space className="ptb-10 plr-30" style={{border: '1px solid #DDD', borderRadius: '10px'}}>
        <div className="flex-row item-center">
          <Button type="link" className="eu-btn-link blank">
            <img src={expandIcon} className="icon-color-black mr-10" alt="새창열기" />
          </Button>
          <Button type="link" className="eu-btn-link">링크버튼</Button>
        </div>

        <div className="flex-row item-center">
          <Button type="link" className="eu-btn-link blank">
            <img src={expandIcon} className="icon-color-black mr-12" alt="새창열기" />
          </Button>
          <Button type="link" className="eu-btn-link-br">높이값이<br/>자유로운<br/>링크버튼</Button>
        </div>
      </Space>
      <Row>
        <Col span={12}>
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<div className="flex-row item-center">`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<Button type="link" className="eu-btn-link blank">`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<img src={expandIcon} className="icon-color-black" alt="새창열기" />`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`</Button>`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<Button type="link" className="eu-btn-link">링크버튼</Button>`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`</div>`}
        </Col>
        <Col span={12}>
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<div className="flex-row item-center">`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<Button type="link" className="eu-btn-link blank">`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<img src={expandIcon} className="icon-color-black" alt="새창열기" />`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`</Button>`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`<Button type="link" className="eu-btn-link-br">높이값이<br/>자유로운<br/>링크버튼</Button>`}
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {`</div>`}
        </Col>
      </Row>
      <div className="font-14-500 mt-20">
      ※ {`<Space>`}로 감싸서 사용해도 상관 없음
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Space>`}
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button type="link" className="eu-btn-link blank">`}
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<img src={expandIcon} className="icon-color-black m-0" alt="새창열기" />`}
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`</Button>`}
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button type="link" className="eu-btn-link">링크버튼</Button>`}
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`</Space>`}
      <br/><br/>

      <TitleComp>5-2. 새창 아이콘 + 링트버튼 종류 및 이슈 정리<span className="text-gray-900 ml-8">(2023-05-19)</span></TitleComp>
      {contextHolder}
      <div className="ptb-10 plr-30 mb-30" style={{border: '1px solid #DDD', borderRadius: '10px'}}>
        <div className="flex-row item-center">
          <Button type="link" className="eu-btn-link blank" onClick={() => openNotification('top', '1', '아이콘')}>
            <img src={expandIcon} className="icon-color-black" alt="새창열기" />
          </Button>
          <Button type="link" className="eu-btn-link" onClick={() => openNotification('top', '2', '링크')}>
            아이콘 따로, 텍스트링크 따로 click
          </Button>
        </div>

        <Divider className="mtb-10"/>

        <div className="flex-row item-center">
          <Button type="link" className="eu-btn-link blank" onClick={() => openNotification('top', '1', '아이콘')}>
            <img src={expandIcon} className="icon-color-black" alt="새창열기" />
          </Button>
          <Button type="link" className="eu-btn-link-br" onClick={() => openNotification('top', '2', '링크')}>
            아이콘 따로, 텍스트링크 따로 click<br/>(줄바꿈가능)<br/>className="eu-btn-link-br
          </Button>
        </div>

        <hr className="mtb-10"/>

        <div className="flex-row item-center">
          <img src={expandIcon} className="icon-color-black mr-6 mt-2" alt="새창열기" />
          <Button type="link" className="eu-btn-link" onClick={() => openNotification('top', '2', '링크')}>
            아이콘 이미지만 있고, 텍스트 링크만 클릭가능
          </Button>
        </div>

        <Divider className="mtb-10"/>

        <div className="flex-row-fit item-center">
          <img src={expandIcon} className="icon-color-black mr-6" alt="새창열기" />
          <Button type="link" className="eu-btn-link-br" onClick={() => openNotification('top', '2', '링크')}>
            아이콘 이미지만 있고, 텍스트 링크만 클릭가능<br/>(줄바꿈가능)<br/>className="eu-btn-link-br"
          </Button>
        </div>

        <Divider className="mtb-10"/>

        <div className="flex-row-fit item-center">
          <img src={expandIcon} className="icon-color-black mr-6" alt="새창열기" />
          <Button type="link" className="eu-btn-link-br text-c" onClick={() => openNotification('top', '2', '링크')}>
            아이콘 이미지만 있고, 텍스트 링크만 클릭가능, 가운데정렬<br/>(줄바꿈가능)<br/>className="eu-btn-link-br text-c"
          </Button>
        </div>

        <hr className="mtb-10"/>

        <Button type="link" className="eu-btn-link flex-row item-center" 
          icon={<img src={expandIcon} className="icon-color-black mt-4" alt="새창열기" />}
          onClick={() => openNotification('top', '3', '아이콘 + 링크')}
        >
          아이콘+링크버튼 일체형
        </Button>

        <Divider className="mtb-10"/>

        <Button type="link" 
          className="eu-btn-link-br-in"
          icon={<img src={expandIcon} className="icon-color-black mr-8" alt="새창열기" />}
          onClick={() => openNotification('top', '3', '아이콘 + 링크')}
        >
          아이콘+링크버튼 일체형<br/>(줄바꿈가능)<br/>className="eu-btn-link-br-in"
        </Button>

        <Divider className="mtb-10"/>

        <div className="flex-row-fit">
          <Button type="link" 
            className="eu-btn-link-br-in-center text-c"
            icon={<img src={expandIcon} className="icon-color-black mr-8 mb-2" alt="새창열기" />}
            onClick={() => openNotification('top', '3', '아이콘 + 링크')}
          >
            아이콘+링크버튼 일체형, 가운데정렬<br/>(줄바꿈가능)<br/>
            긴글 길다길어 긴글 길다길어 긴글 길다길어 긴글 길다길어<br/>
            <span className="text-red">className="eu-btn-link-br-in-center text-c"</span>
          </Button>
        </div>
      </div>

      <TitleComp>6. Only Icon Button</TitleComp>
      <Space>
        <Button className="eu-btn-only-icon" icon={<BarChartOutlined />}></Button>
        <Button className="eu-btn-only-icon" icon={<LineChartOutlined />}></Button>
        <span className="w-10 mr-60"></span>
        <Button
          className="eu-btn-dropdown-arrow"
          onClick={() => {
            if (aplyAsmtPjtcoOpen) aplyAsmtPjtcoClose();
            else aplyAsmtPjtcoShow();
          }}>
          {!aplyAsmtPjtcoOpen ? <DownOutlined /> : <UpOutlined />}
        </Button>
      </Space>
      <br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-only-icon" icon={<BarChartOutlined />}></Button>`}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-only-icon" icon={<LineChartOutlined />}></Button>`}
      <br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {`<Button className="eu-btn-dropdown-arrow"`}
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`onClick={() => {`}
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (aplyAsmtPjtcoOpen) aplyAsmtPjtcoClose();`}
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`else aplyAsmtPjtcoShow();`}
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}}>`}
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{!aplyAsmtPjtcoOpen ? <DownOutlined /> : <UpOutlined />}`}
      <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Button>`}
      <br /><br />

    </>
  );
}
  
export default Sample_button;