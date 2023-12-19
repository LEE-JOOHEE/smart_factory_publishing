import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, DatePicker, Descriptions, Checkbox, Radio,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, Steps, Step, theme, message } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownCircleOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import checkMark from 'css/images/user-icons/checkmark-icon.png';

const SubPage17_4 = ({ children }) => {


  return(
    <>

      {/* 회원가입 STEP 4 - (가입완료) */}
      {/* 회원정보 > 회원가입 */}
      <Row>
        <Col span={24}>
          <div className="join-success-wrap flex-col-center gap-10">
            <img src={checkMark} alt="회원가입 완료" className="mb-22" />
            <div className="tit">
              <span className="font-bold-700">일반사용자 회원</span>
              으로 가입이 완료되었습니다.</div>
            <div>로그인하시면 바로 이용하실 수 있습니다.</div>
          </div>
        </Col>
        <Col span={24} className="mt-50">
          <div className="flex-row-center btn-mob">
            <Button className="eu-btn-process-warning btn-h-50 plr-26" >로그인</Button>
            <Button className="eu-btn-process-error btn-h-50">메인으로</Button>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default SubPage17_4;