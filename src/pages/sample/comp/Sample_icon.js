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
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import {  } from "@ant-design/icons";
import { PlusOutlined, MinusOutlined, FileOutlined } from '@ant-design/icons';

import Calendar from 'css/images/calendar.svg';
import DownArrow from 'css/images/down-arrow.png';
import MenuDot from "css/images/menu-dot.svg";

import FolderIcon from "css/images/icons/folder-icon.svg";
import SearchFileIcon from "css/images/icons/search-file.svg";
import DeleteIcon from "css/images/icons/delete-icon.svg";
import uploadIcon from "css/images/user-icons/upload-icon.png";
import expandIcon from "css/images/user-icons/expand-icon.png";
import fileUpload from "css/images/user-icons/file_upload.png";
import fileDownload from "css/images/user-icons/file_download.png";
import excelUpload from "css/images/user-icons/excel_upload.png";
import excelDownload from "css/images/user-icons/excel_download.png";

import Chairman from "css/images/icons/chairman.svg";
import ElectAgremSignIcon from 'css/images/icons/electAgremSignIcon.svg';
import Presenter from "css/images/icons/presenter.svg";
import SiderLeftIcon from "css/images/icons/sider-left-icon.svg";


const { Title } = Typography;

const Sample_icon = ({ ojtGroupCodes, searchClick, editable = false }) => {

  return(
    <>

      <h1 className="mt-0">아이콘 리스트</h1>
      <TitleComp>1. 안트디자인 아이콘</TitleComp>
      <Row className="mb-20">
        <div className="font-14-500 mb-10">
          {`import { PlusOutlined, MinusOutlined, FileOutlined } from '@ant-design/icons';`}
        </div>
        <Col span={24} className="eu-row-page-comp-layout">
          <Row>
            <Col span={5}>
              <PlusOutlined /><span className="mlr-20">:</span>{`<PlusOutlined />`}
              <br/><MinusOutlined /><span className="mlr-20">:</span>{`<MinusOutlined />`}
              <br/><FileOutlined /><span className="mlr-20">:</span>{`<FileOutlined />`}
            </Col>
            <Col span={10}>
              <FileOutlined className="text-icon-14" />
              <span className="mlr-10">기본크기:</span>{`<FileOutlined className="text-icon-14" />`}
              <br/><FileOutlined className="text-icon-16" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-icon-16" />`}
              <br/><FileOutlined className="text-icon-18" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-icon-18" />`}
              <br/><FileOutlined className="text-icon-20" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-icon-20" />`}
              <br/><FileOutlined className="text-icon-22" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-icon-22" />`}
              <br/><FileOutlined className="text-icon-24" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-icon-24" />`}
              <br/><FileOutlined className="text-icon-26" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-icon-26" />`}
              <div className="font-12-400 mt-16">※ 아이콘 사이즈는 10부터 2씩 증가 28까지 가능하고 30,40,50이 존재함</div>
            </Col>
            <Col span={9}>
              <FileOutlined className="text-red" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-red" />`}
              <br/><FileOutlined className="text-blue" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-blue" />`}
              <br/><FileOutlined className="text-white" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-white" />`}
              <br/><FileOutlined className="text-black" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-black" />`}
              <br/><FileOutlined className="text-gray-600" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-gray-600" />`}
              <br/><FileOutlined className="text-gray-500" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-gray-500" />`}
              <br/><FileOutlined className="text-gray-400" />
              <span className="mlr-10">:</span>{`<FileOutlined className="text-gray-400" />`}
              <br/>
              <span className="mr-10">투명색 : </span>{`<FileOutlined className="text-color-none" />`}
              <div className="font-12-400 mt-16">※ 아이콘 컬러와 사이스는 필요시 추가될 수 있습니다.</div>
              <div className="font-12-400">※ 폰트(텍스트)색상도 className을 동일하게 사용합니다.</div>
            </Col>
          </Row>
        </Col>
      </Row>


      <TitleComp>2. CSS 내장 아이콘</TitleComp>
      <Row>
        <Col span={24} className="mb-20 eu-row-page-comp-layout">
          <Row>
            <Col span={12}>
              <img src={Calendar} alt="아이콘" /><span className="mlr-20">:</span>
              {`import Calendar from 'css/images/calendar.svg';`}
              <br/><img src={DownArrow} alt="아이콘" /><span className="mlr-20">:</span>
              {`import DownArrow from 'css/images/down-arrow.png';`}
              <br/><img src={MenuDot} alt="아이콘" className="ml-8" /><span className="mlr-20">:</span>
              {`import MenuDot from "css/images/menu-dot.svg";`}
              <br/><img src={SiderLeftIcon} alt="아이콘" /><span className="mlr-20">:</span>
              {`import SiderLeftIcon from "css/images/icons/sider-left-icon.svg";`}
            </Col>
            <Col span={12}></Col>
          </Row>
        </Col>
      </Row>
      
      <TitleComp>3. 기본 아이콘</TitleComp>
      <Row>
        <Col span={24} className="mb-20 eu-row-page-comp-layout">
          <Row>
            <Col span={13}>
              <img src={FolderIcon} alt="파일 아이콘" /><span className="mlr-20">:</span>
              {`import FolderIcon from "css/images/icons/folder-icon.svg";`}
              <br/><img src={SearchFileIcon} alt="미리보기 또는 파일찾기 아이콘" /><span className="mlr-20">:</span>
              {`import SearchFileIcon from "css/images/icons/search-file.svg";`}
              <br/><img src={DeleteIcon} alt="삭제 아이콘" /><span className="mlr-20">:</span>
              {`import DeleteIcon from "css/images/icons/delete-icon.svg";`}

              <br/><img src={uploadIcon} className="icon-360deg" alt="업로드아이콘버튼" /><span className="mlr-20">:</span>
              {`import uploadIcon from "css/images/user-icons/upload-icon.png";`}
              <br/><img src={uploadIcon} className="icon-180deg" alt="다운로드아이콘버튼" /><span className="mlr-20">:</span>
              {`import uploadIcon from "css/images/user-icons/upload-icon.png";`}
              <br/><span className="ml-60">{`(className="icon-180deg")`}</span>
              <br/><img src={expandIcon} className="icon-color-black" alt="새창열기" /><span className="mlr-20">:</span>
              {`import expandIcon from "css/images/user-icons/expand-icon.png";`}
              <br/>
              <br/><img src={fileDownload} alt="파일다운로드 아이콘만" /><span className="mlr-20">:</span>
              {`import fileUpload from "css/images/user-icons/file_upload.png";`}
              <br/><img src={fileUpload} alt="파일업로드 아이콘만" /><span className="mlr-20">:</span>
              {`import fileDownload from "css/images/user-icons/file_download.png";`}
              <br/><img src={excelDownload} alt="엑셀다운로드 아이콘만" /><span className="mlr-20">:</span>
              {`import excelUpload from "css/images/user-icons/excel_upload.png";`}
              <br/><img src={excelUpload} alt="엑셀업로드 아이콘만" /><span className="mlr-20">:</span>
              {`import excelDownload from "css/images/user-icons/excel_download.png";`}
            </Col>
            <Col span={11}>
              <img src={FolderIcon} alt="파일 아이콘" style={{width: "16px"}} /><span className="mlr-10">:</span>
              {`<img src={FolderIcon} alt="파일Icon" style={{width: "16px"}} />`}
              <br/><img src={FolderIcon} alt="파일 아이콘" style={{width: "20px"}} /><span className="mlr-10">:</span>
              {`<img src={FolderIcon} alt="파일Icon" style={{width: "20px"}} />`}
              <br/><img src={FolderIcon} alt="파일 아이콘" style={{width: "26px"}} /><span className="mlr-10">:</span>
              {`<img src={FolderIcon} alt="파일Icon" style={{width: "26px"}} />`}
              <br/>
              <br/><img src={DeleteIcon} alt="파일 아이콘" className="icon-color-black" /><span className="mlr-10">:</span>
              {`<img src={DeleteIcon} alt="파일Icon" className="icon-color-black" />`}
              <br/><img src={DeleteIcon} alt="파일 아이콘" className="icon-color-400" /><span className="mlr-10">:</span>
              {`<img src={DeleteIcon} alt="파일Icon" className="icon-color-400" />`}
              <br/><img src={DeleteIcon} alt="파일 아이콘" className="icon-color-800" /><span className="mlr-10">:</span>
              {`<img src={DeleteIcon} alt="파일Icon" className="icon-color-800" />`}
              <br/><img src={DeleteIcon} alt="파일 아이콘" className="icon-color-blue" /><span className="mlr-10">:</span>
              {`<img src={DeleteIcon} alt="파일Icon" className="icon-color-blue" />`}
              <br/><img src={DeleteIcon} alt="파일 아이콘" className="icon-color-yellow" /><span className="mlr-10">:</span>
              {`<img src={DeleteIcon} alt="파일Icon" className="icon-color-yellow" />`}
              <br/><img src={DeleteIcon} alt="파일 아이콘" className="icon-color-red" /><span className="mlr-10">:</span>
              {`<img src={DeleteIcon} alt="파일Icon" className="icon-color-red" />`}
              <br/><img src={DeleteIcon} alt="파일 아이콘" className="icon-color-white" /><span className="mlr-10">:</span>
              {`<img src={DeleteIcon} alt="파일Icon" className="icon-color-white" />`}
              <br/><img src={DeleteIcon} alt="파일 아이콘" className="icon-color-green" /><span className="mlr-10">:</span>
              {`<img src={DeleteIcon} alt="파일Icon" className="icon-color-green" />`}
            </Col>
          </Row>
        </Col>
      </Row>

      <TitleComp>4. 특수 아이콘</TitleComp>
      <Row>
        <Col span={24} className="mb-20 eu-row-page-comp-layout">

          <Row>
            <Col span={14}>
              <img src={Chairman} alt="위원장 아이콘" /><span className="mlr-20">:</span>
              {`import Chairman from "css/images/icons/chairman.svg";`}
              <br /><img src={Presenter} alt="발표자 아이콘" /><span className="mlr-20">:</span>
              {`import Presenter from "css/images/icons/presenter.svg";`}
            </Col>
            <Col span={10}>
              <Space>
                <img src={ElectAgremSignIcon} alt="전자서명 아이콘" /><span className="mlr-20">:</span>
                {`import ElectAgremSignIcon from 'css/images/icons/electAgremSignIcon.svg';`}
              </Space>
            </Col>
          </Row>

        </Col>
      </Row>

      
    </>
  );
}
  
export default Sample_icon;