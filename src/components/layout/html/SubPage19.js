import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, DatePicker,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, Steps, Step, theme, message } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownCircleOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import smsIcon from 'css/images/user-icons/sms-icon.png';
import ipinIcon from 'css/images/user-icons/ipin-icon.png';

const SubPage19 = ({ children }) => {

  const columns = [
    {
      title: '공고번호',
      dataIndex: 'a',
      width: '20%',
      align: 'center',
    },
    {
      title: '공고명',
      dataIndex: 'b',
      width: '30%',
    },
    {
      title: '접수기간',
      dataIndex: 'c',
      width: '30%',
      align: 'center',
    },
    {
      title: '상태',
      dataIndex: 'd',
      width: '10%',
      align: 'center',
    },
    {
      title: '신청',
      dataIndex: 'e',
      width: '10%',
      align: 'center',
    },
  ];
  const [arrCnstcPrfmnc, setArrCnstcPrfmnc] = useState([]);
  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx <= 50; idx++) {
      tmp1.push({
        key: idx,
        a: `2023-0${idx}`,
        b: `스마트제조혁신 지원사업 통합공고-${idx}`,
        c: '2023-01-09 00:00 ~ 2023-12-31 00:00',
        d: '접수중',
        e: '신청불가',
      });
    }
    setArrCnstcPrfmnc(tmp1);
  }, []);

  return(
    <>

      {/* 마이페이지 */}
      {/* 회원정보 > 마이페이지 */}
      <Row>
        <Col span={24}>
          <Row className="mb-12">
            <Col span={6} md={6} sm={6} xs={24}>
              <div className="headline mb-12 mt-auto">나의과제</div>
            </Col>
            <Col span={18} md={18} sm={18} xs={24} className="mt-auto">
              <div className="eu-table-indicator">
                <span className="font-16-400 text-gray-500 ml-auto">
                  ※ 업종별특화사업 2019년 사업 (대표기업과제, 컨소시엄기업과제)
                  <span className="ml-26">※ 컨설팅지원사업</span>
                  <span className="text-blue">(스마트역량강화과제)</span>
                </span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <div className="eu-custom-description-table">
            <table key={''} summary="테이블정보">
              <colgroup>
                <col width={'5%'} />
                <col width={'10%'} />
                <col width={'25%'} />
                <col width={'10%'} />
                <col width={'10%'} />
                <col width={'10%'} />
                <col width={'10%'} />
                <col width={'10%'} />
              </colgroup>
              <thead>
                <tr>
                  <th className="header ptb-12">순번</th>
                  <th className="header ptb-12">사업년도</th>
                  <th className="header ptb-12">수행사업</th>
                  <th className="header ptb-12">도입기업</th>
                  <th className="header ptb-12">신청자</th>
                  <th className="header ptb-12">과제진행상태</th>
                  <th className="header ptb-12">원가계산상태</th>
                  <th className="header ptb-12 border-r-0">사업변경상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={8} className="text-c ptb-12">신청한 과제내역이 없습니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col span={24}>
          <Row className="mb-0 mt-40">
            <Col span={6}>
              <div className="headline mb-12 mt-auto">기관정보</div>
            </Col>
            <Col span={18} className="text-r">
              <Button className="eu-btn-crud-default">개인정보변경</Button>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <div className="eu-custom-description-table text-c">
            <table key={''} summary="테이블정보">
              <colgroup>
                <col width={'50%'} />
                <col width={'15%'} />
                <col width={'15%'} />
                <col width={'20%'} />
              </colgroup>
              <thead>
                <tr>
                  <th className="header ptb-12">기관명</th>
                  <th className="header ptb-12">대표자</th>
                  <th className="header ptb-12">연락처</th>
                  <th className="header ptb-12 border-r-0">최종변경일자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>(주)유클리드소프트</td>
                  <td>채은경</td>
                  <td>042-488-6589</td>
                  <td>2021-09-24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col span={24}>
          <Row className="mb-0 mt-40">
            <Col span={24}>
              <div className="headline mb-12 mt-auto">접수기간중인 사업공고</div>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          {/* 안트디 테이블 사용할 경우(페이징 때문에...) */}
          <Table
            className="eu-antable-style-skyblue"
            key={'arrCnstcPrfmnc'}
            columns={columns}
            dataSource={arrCnstcPrfmnc}
            size="small"
            bordered
            pagination={true}
            scroll={{ y: 510, x: 1200 }}
          />

          {/* table태그 tr,td 사용할 경우 */}
          {/* <div className="eu-custom-description-table text-c">
            <table key={''} summary="테이블정보">
              <colgroup>
                <col width={'10%'} />
                <col width={'30%'} />
                <col width={'30%'} />
                <col width={'10%'} />
                <col width={'10%'} />
              </colgroup>
              <thead>
                <tr>
                  <th className="header ptb-12">공고번호</th>
                  <th className="header ptb-12">공고명</th>
                  <th className="header ptb-12">접수기간</th>
                  <th className="header ptb-12">상태</th>
                  <th className="header ptb-12 border-r-0">신청</th>
                </tr>
              </thead>
              <tbody>
                {arrCnstcPrfmnc.map((item, index) => {
                  console.log(item)
                  return(
                    <tr>
                      <td>{item.a}</td>
                      <td className="text-l">{item.b}</td>
                      <td>{item.c}</td>
                      <td>{item.d}</td>
                      <td>{item.e}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div> */}
        </Col>
      </Row>    
    </>
  )
}

export default SubPage19;