import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, 
  Input, Space, Table, Tag, Upload, Modal } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';

import SmsDspthContainer from 'pages/usr/bm/tr/tr/smsDspth/SmsDspthContainer';

import SuplyEntrprsSearchContainer from 'pages/usr/bm/sm/se/suplyEntrprsSearch/SuplyEntrprsSearchContainer';

import PrmpcCalcExmntContainer from 'pages/usr/bm/pc/pe/prmpcCalcExmnt/PrmpcCalcExmntContainer';
import PrmpcExmntDetailContainer from 'pages/usr/bm/pc/pe/prmpcExmntDetail/PrmpcExmntDetailContainer';

const SubPage10 = ({ children }) => {

  const [ojtKey, setOjtKey] = useState('');
  const [pageType, setPageType] = useState('LIST');

  return(
    <>
      {/* ============================================================================ */}
      {/* (※업무관련 대표화면 퍼블리싱은 구현되어 있는 컨트롤러나 루트Page 연결하였습니다.) */}
      {/* ============================================================================ */}

      {/* 과제신청 */}
      {/* 사업관리 - 과제신청 */}
      {/* <Row>
        <Col span={24}>
          <SmsDspthContainer />
        </Col>
      </Row> */}

      {/* 공급기업검색 */}
      {/* 사업관리 - 공급기업 매칭검색 */}
      {/* <Row>
        <Col span={24}>
          <SuplyEntrprsSearchContainer />
        </Col>
      </Row> */}

      {/* 원가계산 검토 */}
      {/* 사업관리 - 원가계산 검토 */}
      <Row>
        <Col span={24}>
            {pageType === 'LIST' ? (
              <PrmpcCalcExmntContainer
                setOjtKey={setOjtKey}
                setPageType={setPageType}
              />
            ) : (
              <PrmpcExmntDetailContainer ojtKey={ojtKey} setPageType={setPageType} />
            )}
        </Col>
      </Row>




    </>
  )
}

export default SubPage10;