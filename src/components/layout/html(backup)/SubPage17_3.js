import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, DatePicker, Descriptions, Checkbox, Radio,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, Steps, Step, theme, message } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownCircleOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

const SubPage17_3 = ({ children }) => {


  return(
    <>

      {/* 회원가입 STEP 3 - (사용자정보입력) */}
      {/* 회원정보 > 회원가입 */}
      <Row>
        <Col span={24}>

          <div className="headline mb-14">사용자 정보</div>
          <Descriptions size="small" bordered column={{ md: 2, sm: 1, xs: 1 }}>
            <Descriptions.Item label={<span className="req-l">사업자번호</span>} span={3}>
              <Space className="flex-wrap">
                <Input placeholder="ID를 입력하세요." />
                <Button className="eu-btn-crud-default">중복확인</Button>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label={<span className="req-l">비밀번호</span>} span={3}>
              <Space className="flex-wrap">
                <Input placeholder="비밀번호" />
                <div className="ml-4">9자리 이상의 영문, 숫자, 특수문자의 조합</div>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label={<span className="req-l">비밀번호 확인</span>} span={3}>
              <Space>
                <Input placeholder="비밀번호 확인" />
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label={<span className="req-l">성명</span>} span={3}>
              <Input placeholder="성명" />
            </Descriptions.Item>
            <Descriptions.Item label={<span className="req-l">이메일</span>} span={3}>
              <Space className="space-full flex-1 flex-wrap">
                <div className="flex-row gap-6 item-center">
                  <Input placeholder="jhlee" style={{ minWidth: '100px'}} />
                  <span>@</span>
                </div>
                  <Input placeholder="euclidsoft" style={{ minWidth: '100px'}} />
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 0] }}
                    style={{ minWidth: '100px'}}
                    options={[
                      {
                        value: 'co.kr',
                        label: 'co.kr',
                      },
                    ]}
                    value={'co.kr'}
                  />
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label={<span className="req-l">휴대폰번호</span>} span={1}>
              {/* <Input placeholder="휴대폰번호" /> */}
              010-123-5678
            </Descriptions.Item>
            <Descriptions.Item label={<span className="req-l">생년월일</span>} span={1}>
              {/* <Input placeholder="생년월일" /> */}
              2000-12-20
            </Descriptions.Item>
            <Descriptions.Item label="대표자여부" span={1}>
              <Checkbox.Group defaultValue={['']}>
                <Checkbox value={''}>대표자일 경우 선택하세요.</Checkbox>
              </Checkbox.Group>
            </Descriptions.Item>
            <Descriptions.Item label="(수행일지작성) 컨설턴트여부" span={1} className="break">
              <Checkbox.Group defaultValue={['']}>
                <Checkbox value={''}>공급기업 및 전문가인 경우만 선택가능합니다.</Checkbox>
              </Checkbox.Group>
            </Descriptions.Item>
          </Descriptions>
        </Col>

        <Col span={24}>
          <div className="org-chart-wrap-bdr mt-50 ptb-30 plr-40">
            <div className="mb-20">
              ※ 직장, 부서, 직위, 소속구분, 회사주소, TIPA 뉴스레터 서비스, 기업마당 메일링 서비스, 기업마당 문자알림 서비스 (선택)
              <br/>※ 귀하는 위와 관련된 정보를 거부할 권리가 있으며, 본 서비스를 신청하지 않는다고 해서 회원가입을 거부하는 불이익을 드리지 않습니다.
            </div>
            <Radio.Group defaultValue={'동의'}>
              <Radio value={'동의'}>동의</Radio>
              <Radio value={'미동의'}>미동의</Radio>
            </Radio.Group>
          </div>
        </Col>
        <Col span={24} className="mt-50">
          <div className="flex-row-center btn-mob">
            <Button className="eu-btn-process-warning btn-h-50 plr-34" >확인</Button>
            <Button className="eu-btn-process-error btn-h-50">가입취소</Button>
          </div>
        </Col>


      </Row>
    </>
  )
}

export default SubPage17_3;