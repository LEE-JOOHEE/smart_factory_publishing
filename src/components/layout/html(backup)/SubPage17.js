import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, DatePicker,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, Steps, Step, theme, message } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownCircleOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';
import SubPage17_1 from "components/layout/html/SubPage17_1";
import SubPage17_2 from "components/layout/html/SubPage17_2";
import SubPage17_3 from "components/layout/html/SubPage17_3";
import SubPage17_4 from "components/layout/html/SubPage17_4";

const SubPage17 = ({ children }) => {

  const { Step } = Steps;
  const steps = [
    {
      title: '약관동의',
      content: <SubPage17_1 />,
    },
    {
      title: '기관정보선택',
      content: <SubPage17_2 />,
    },
    {
      title: '사용자정보입력',
      content: <SubPage17_3 />,
    },
    {
      title: '가입완료',
      content: <SubPage17_4 />,
    },
  ];

  // const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const alertInfoClick = () => {
    Modal.info({
      title: '회원가입 완료',
      closable: true,
      okText : "확인",
    });
  };

  return(
    <>

      {/* 회원가입 STEP 1 - (약관동의) */}
      {/* 회원정보 > 회원가입 */}
      <Row>
        <Col span={24}>

          <div className="join-member-wrap">

            <Steps current={current} items={items} />

            {/* 컨텐츠 바뀌는 부분 */}
            <div className="mt-40">{steps[current].content}</div>
            
            {/* 버튼 */}
            <Row className="mt-40">
              {/* <Col span={24}>
                <div className="flex-row-center">
                  <Button className="eu-btn-process-warning btn-h-50" >휴대폰 인증받기</Button>
                  <Button className="eu-btn-process-error btn-h-50">아이핀 인증받기</Button>
                </div>
              </Col> */}
              {/* Step 넘기기 위한 antd 기능 버튼 */}
              <Col span={24} className="text-r">
                <div className="">
                  {current < steps.length - 1 && (
                    <Button className="eu-btn-crud-warning" onClick={() => next()}>다음</Button>
                  )}
                  {current === steps.length - 1 && (
                    <Button className="eu-btn-process-error" 
                    onClick={alertInfoClick}
                    >
                      완료
                    </Button>
                  )}
                  {current > 0 && (
                    <Button className="eu-btn-crud-default" onClick={() => prev()}>이전</Button>
                  )}
                </div>
              </Col>
            </Row>

          </div>


        </Col>
      </Row>    



    </>
  )
}

export default SubPage17;