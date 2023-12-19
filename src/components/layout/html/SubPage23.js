import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, 
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import noEmail from 'css/images/user-icons/no-email.png';

const SubPage23 = ({ children }) => {

  return(
    <>

      {/* 이메일 무단 수집거부 */}
      {/* 기관소개 > 이메일 무단 수집거부 */}
      <Row>
        <Col span={24}>
          
          <div className="eu-usr-noemail-page">
            <div className="flex-row-center gap-col-62 gap-row-40 flex-nowrap">
              <img src={noEmail} alt="이메일 무단 수집거부 아이콘" />
              <div className="flex-col gap-10">
                <div className="tit">스마트공장 사업관리시스템 홈페이지 
                  <span className="font-bold-700 text-red mlr-4">이메일무단수집거부</span>
                  입니다.
                </div>
                <div className="sub-tit">
                  본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그밖의 기술적장치를이용하여 무단으로 수집되는것을 거부하며, 
                  <br/>이를 위반시 정보통신망법에 의해 형사처벌됨에 유념하시기 바랍니다.
                </div>
              </div>
            </div>

            <div className="org-chart-wrap-bdr-blue mt-60 plr-46">
              <div className="font-17-700 text-black">정보통신망이용촉진 및 정보 보호등에 관한 법률</div>
              <div className="font-17-500 underline mt-20 mb-10">제 50조의 2 (전자우편주소의 무단 수집행위 등 금지)</div>
              <div className="sub-tab-cont-wrap">
                <div className="text">
                  <div className="list">
                  ① 누구든지 전자우편주소의 수집을 거부하는 의사가 명시된 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니 된다.
                  </div>
                  <div className="list">
                    ② 누구든지 제1항의 규정을 위반하여 수집된 전자우편 주소를 판매 유통 하여서는 아니 된다.
                  </div>
                  <div className="list">
                    ③ 누구든지 제1항 및 제2항의 규정에 의하여 수집 판매 및 유통이 금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는 아니 된다.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Col>
      </Row>

    </>
  )
}

export default SubPage23;