import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, 
  Tabs, Select, Input, Space, Checkbox, Pagination,
  Table, Tag, Modal, Descriptions } from "antd";
import { DownloadOutlined, } from "@ant-design/icons";

import pdfContents1in1 from 'css/images/pdf-contents/1_01.png';
import pdfContents1in2 from 'css/images/pdf-contents/1_02.png';
import pdfContents2in1 from 'css/images/pdf-contents/2_01.png';
import pdfContents2in2 from 'css/images/pdf-contents/2_02.png';
import pdfContents3in1 from 'css/images/pdf-contents/3_01.png';
import pdfContents3in2 from 'css/images/pdf-contents/3_02.png';

const SubPage8_2 = ({ dataImage }) => {

  return(
    <>
      {/* 우수구축사례 - 상세보기 */}
      {/* 홍보관 > 우수구축사례 > 상세보기 */}

      <Row>
        <Col span={24}>

          <div className="flex-row item-center flex-wrap">
            <div className="headline">
              {dataImage[0].tit}
            </div>
            <div className="line">{dataImage[0].text}</div>
          </div>

          <div className="eu-custom-description-table">
            <div className="grid-col-6">
              <div className="header">대표</div>
              <div className="td">이정익</div>
              <div className="header">전화번호</div>
              <div className="td">053-355-1881</div>

              <div className="header">주소</div>
              <div className="td">대구광역시 서구 염색공단천로11길 30 대구염색산업단지</div>
              <div className="header">업종</div>
              <div className="td">직물 · 편조원단 · 의복류 염색 가공업</div>

              <div className="header">주요 생산품</div>
              <div className="td">염색 가공 면직물, 날염 제조 등</div>
              <div className="header">도입 시스템</div>
              <div className="td">MES 생산관리시스템</div>

              <div className="header">사업기간</div>
              <div className="td">2018년 5월 14일 ~ 2018년 10월 31일(5개월)</div>
              <div className="header">구축비용</div>
              <div className="td">1억 900만 원(자부담 5,900만 원)</div>
            </div>

            {/* 컨텐츠 영역 */}
            <div className="case-view-cont-area mt-60">
              {/* 컨텐츠 등록 후 삭제될 영역 */}
              {/* <div className="flex-row-center" style={{height: '500px', background: '#ddd'}}><h1>컨텐츠영역</h1></div> */}
              <div className="text-c">
                <img src={pdfContents1in1} alt="㈜웰메이드생활건강" />
                <img src={pdfContents1in2} alt="㈜웰메이드생활건강" />
                <img src={pdfContents2in1} alt="㈜웰메이드생활건강" />
                <img src={pdfContents2in2} alt="㈜웰메이드생활건강" />
                <img src={pdfContents3in1} alt="㈜웰메이드생활건강" />
                <img src={pdfContents3in2} alt="㈜웰메이드생활건강" />
              </div>
            </div>
          </div>

          <div className="flex-row">
            <button className="eu-btn-process-warning ml-auto mt-40">목록</button>
          </div>

        </Col>
      </Row>

    
    </>
  )
}

export default SubPage8_2;