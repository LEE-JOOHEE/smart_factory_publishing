import React, { useState, useEffect } from 'react';
import { Layout, Button, Menu, Tooltip, Select, Tabs, Input, Space, Row, Col, Tag } from 'antd';
import '/node_modules/antd/dist/antd.css';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory, Link } from "react-router-dom";
import logoKosmo from "../../css/images/logo-kosmo.png";

const { Header, Sider, Content } = Layout;

const AdminMainLayout = ({ children }) => {

  const [tabItems, setTabItems] = useState([
    {
      label: "사업관리",
      key: "사업관리",
      // children: <CmAplyAsmtBsc editable={editable} type="detail" />,
    },
    {
      label: "과제신청",
      key: "과제신청",
      // children: <CmAplyAsmtIndcEnt editable={editable} />,
    },
    {
      label: "협약관리",
      key: "협약관리",
      // children: <CmAplyAsmtPjtco editable={editable} />,
    },
    {
      label: "진도관리",
      key: "진도관리",
      // children: <CmAplyAsmtSplyEnt editable={editable} />,
    },
    {
      label: "평가관리",
      key: "평가관리",
      // children: <CmAplyAsmtPvltrt editable={editable} />,
    },
    {
      label: "사후관리",
      key: "사후관리",
      // children: <CmAplyAsmtRsltIdx editable={editable} />,
    },
    {
      label: "성과/통계",
      key: "성과/통계",
      //children: <CmAtchDoc title={'첨부문서'} editable={editable} />,
    },
    {
      label: "시스템관리",
      key: "시스템관리",
      // children: <CmAplyAsmtSrvy editable={editable} />,
    },
    {
      label: "서비스관리",
      key: "서비스관리",
      //children: <CmAplyAsmtEmplym editable={editable} />,
    },
  ]);

  const [notiTabItems, setNotiTabItems] = useState([
    {
      label: "공지사항",
      key: "공지사항",
    },
  ]);
  const [notiTabItems2, setNotiTabItems2] = useState([
    {
      label: "SR 요청관리",
      key: "SR 요청관리",
    },
    {
      label: "시스템공지사항",
      key: "시스템공지사항",
    },
  ]);  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
    
      <div className="admin-main-wrap">
        <div className="admin-main-header">
          <div className="flex-row">
            {/* 로고 */}
            <div className="eu-kosmo-logo-admin">
              <Link to="/">
                <img src={logoKosmo} alt="logo" />
              </Link>
            </div>
            <div className="eu-header-wrap">
              {/* 헤더1 - 로그아웃 */}
              <Header className="eu-header-logout">
                <button className="eu-btn-logout green ml-auto mr-20">권한신청</button>
                <div className="mr-8">권한전환</div>
                <Select 
                  style={{ width : "150px" }}
                  onChange={handleChange}
                  defaultValue="시스템관리자"
                  // defaultOpen={true}
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택하세요"
                  options={[
                    {
                      value: '시스템관리자',
                      label: '시스템관리자',
                    },
                    {
                      value: '도입기업',
                      label: '도입기업',
                    },
                  ]}
                />
                <div className="ml-10 mr-8">(주)유클리드소프트</div>
                <div className="mr-6 font-bold-700">전정국</div>
                <button className="eu-sms-btn-bg">SMS</button>
                <Button className="eu-btn-logout">LOGOUT</Button>
              </Header>
              {/* 헤더2 - 탭 */}
              <Header className="eu-header-tab-card">
                <Tabs items={tabItems} type="card" activeKey={false} />
              </Header>
            </div>
          </div>
        </div>

        <Layout>
          <Content>

            {/* 2023-04-11(레이아웃 변경) : 주석처리 한부분 교체해주세용 */}
            <Row className="eu-row-page-comp-layout pt-20 pb-30 plr-50">
              <Col span={24}>
                <div className="grid-col-5 gap-30">
                  {/* 제목부분 */}
                  <div className="col-span-1">
                    <div className="line-title mt-52 mb-20"></div>
                    <span className="font-30-400">진행단계별</span>
                    <span className="font-30-700">처리대상</span>
                  </div>
                  <div className="col-span-4 grid-col-4 gap-30 gap-row-20 mb-20">
                    <div className="panel-wrap">
                      <div className="panel-header">요건검토</div>
                      <div className="panel-body">
                        <div className="panel-left">
                          <a href="javascript:void(7);">
                            <div className="panel-number">7</div>
                            <div className="panel-status">
                              검토대기<span className="blue"></span>
                            </div>
                          </a>
                        </div>
                        <div className="panel-right">
                          <a href="javascript:void(13);">
                            <div className="panel-number">13</div>
                            <div className="panel-status">
                              검토중<span className="green"></span>
                            </div>
                          </a>
                        </div>
                        {/* 2023-04-11 추가 */}
                        <div className="panel-right" style={{borderLeft:"1px solid #E5E6EB"}}>
                          <a href="javascript:void(7);">
                            <div className="panel-number">7</div>
                            <div className="panel-status">
                              추가상태<span className="blue"></span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="panel-wrap">
                      <div className="panel-header">현장실사/현장평가</div>
                      <div className="panel-body">
                        <div className="panel-left">
                          <a href="javascript:void(21);">
                            <div className="panel-number">21</div>
                            <div className="panel-status">
                              배정대상<span className="blue"></span>
                            </div>
                          </a>
                        </div>
                        <div className="panel-right">
                          <a href="javascript:void(35);">
                            <div className="panel-number">35</div>
                            <div className="panel-status">
                              승인대상<span className="green"></span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="panel-wrap">
                      <div className="panel-header">원가계산</div>
                      <div className="panel-body">
                        <div className="panel-left">
                          <a href="javascript:void(0);">
                            <div className="panel-number">0</div>
                            <div className="panel-status">
                              지정대상<span className="blue"></span>
                            </div>
                          </a>
                        </div>
                        <div className="panel-right">
                          <a href="javascript:void(3);">
                            <div className="panel-number">3</div>
                            <div className="panel-status">
                              승인대상<span className="green"></span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="panel-wrap">
                      <div className="panel-header">평가/선정</div>
                      <div className="panel-body">
                        <div className="panel-left">
                          <a href="javascript:void(1);">
                            <div className="panel-number">1</div>
                            <div className="panel-status">
                              평가대상<span className="blue"></span>
                            </div>
                          </a>
                        </div>
                        <div className="panel-right">
                          <a href="javascript:void(2);">
                            <div className="panel-number">2</div>
                            <div className="panel-status">
                              선정대상<span className="green"></span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="panel-wrap">
                      <div className="panel-header">협약</div>
                      <div className="panel-body">
                        <div className="panel-left">
                          <a href="javascript:void(11);">
                            <div className="panel-number">11</div>
                            <div className="panel-status">
                              협약대상<span className="blue"></span>
                            </div>
                          </a>
                        </div>
                        <div className="panel-right">
                          <a href="javascript:void(2);">
                            <div className="panel-number">2</div>
                            <div className="panel-status">
                              협약중<span className="green"></span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="panel-wrap">
                      <div className="panel-header">기업 수준확인</div>
                      <div className="panel-body">
                        <div className="panel-right">
                          <a href="javascript:void(2);">
                            <div className="panel-number">2</div>
                            <div className="panel-status">
                              승인대상<span className="blue"></span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="panel-wrap">
                      <div className="panel-header">중간점검</div>
                      <div className="panel-body">
                        <div className="panel-right">
                          <a href="javascript:void(11);">
                            <div className="panel-number">11</div>
                            <div className="panel-status">
                              승인대상<span className="green"></span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="panel-wrap">
                      <div className="panel-header">최종감리</div>
                      <div className="panel-body">
                        <div className="panel-left">
                          <a href="javascript:void(1);">
                            <div className="panel-number">1</div>
                            <div className="panel-status">
                              평가대상<span className="blue"></span>
                            </div>
                          </a>
                        </div>
                        <div className="panel-right">
                          <a href="javascript:void(2);">
                            <div className="panel-number">2</div>
                            <div className="panel-status">
                              선정대상<span className="green"></span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* 추가테스트 */}
                    <div className="panel-wrap">
                      <div className="panel-header">추가1</div>
                      <div className="panel-body">
                        <div className="panel-left">
                          <a href="javascript:void(1);">
                            <div className="panel-number">1</div>
                            <div className="panel-status">
                              평가대상<span className="blue"></span>
                            </div>
                          </a>
                        </div>
                        <div className="panel-right">
                          <a href="javascript:void(2);">
                            <div className="panel-number">2</div>
                            <div className="panel-status">
                              선정대상<span className="green"></span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="panel-wrap">
                      <div className="panel-header">추가2</div>
                      <div className="panel-body">
                        <div className="panel-left">
                          <a href="javascript:void(1);">
                            <div className="panel-number">1</div>
                            <div className="panel-status">
                              평가대상<span className="blue"></span>
                            </div>
                          </a>
                        </div>
                        <div className="panel-right">
                          <a href="javascript:void(2);">
                            <div className="panel-number">2</div>
                            <div className="panel-status">
                              선정대상<span className="green"></span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {/* 2023-04-11(레이아웃 변경) : 주석처리 한부분 교체해주세용 */}


            <Row gutter={(0, 20)}>
              <Col span={12}>
                <Row className="eu-row-page-comp-layout ptb-40 plr-50">
                  <Col span={24}>
                    <div className="eu-noti-tab-wrap">
                      <Tabs className="eu-noti-tab" items={notiTabItems}></Tabs>
                      <Button className="eu-noti-tab-btn" icon={<PlusOutlined />}></Button>
                    </div>
                    <div className="eu-noti-list-wrap">
                      <a href="#" className="eu-noti-list">
                        <div className="noti-title">
                          스마트공장 수준확인서 출력 문제 해결방법 안내
                        </div>
                        <span className="noti-point"></span>
                        <span className="noti-date">2022-12-19</span>
                      </a>
                      <a href="#" className="eu-noti-list">
                        <div className="noti-title">
                          사업신청관련 로그인에러 등 오류문의 안내 
                        </div>
                        <span className="noti-point"></span>
                        <span className="noti-date">2022-12-05</span>
                      </a>
                      <a href="#" className="eu-noti-list">
                        <div className="noti-title">
                          중소기업 기술보호 가이드 안내
                        </div>
                        <span className="noti-date">2022-10-20</span>
                      </a>
                      <a href="#" className="eu-noti-list">
                        <div className="noti-title">
                          스마트공장 구축 가이드모델(주조, 금형, 소성가공, 용접, 표면처리, 열처리)
                          스마트공장 구축 가이드모델(주조, 금형, 소성가공, 용접, 표면처리, 열처리)
                          스마트공장 구축 가이드모델(주조, 금형, 소성가공, 용접, 표면처리, 열처리)
                        </div>
                        <span className="noti-date">2022-10-04</span>
                      </a>
                      <a href="#" className="eu-noti-list">
                        <div className="noti-title">
                          제조데이터를 활용한 서비타이제이션 대국민 아이디어 공모전
                        </div>
                        <span className="noti-date">2022-07-28</span>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row className="eu-row-page-comp-layout ptb-40 plr-50">
                  <Col span={24}>
                    <div className="eu-noti-tab-wrap">
                      <Tabs className="eu-noti-tab" items={notiTabItems2}></Tabs>
                      <Button className="eu-noti-tab-btn" icon={<PlusOutlined />}></Button>
                    </div>
                    <div className="eu-noti-list-wrap">
                      <a href="#" className="eu-noti-list">
                        <div className="noti-title">
                          도입기업 담당자 퇴사로 [보고서검토] 에 사업목록이 사라짐
                        </div>
                        <span className="noti-tag"><Tag className="tag-green">접수</Tag></span>
                      </a>
                      <a href="#" className="eu-noti-list">
                        <div className="noti-title">
                          스마트공장 사업관리시스템 전문가 신청문의
                        </div>
                        <span className="noti-tag"><Tag className="tag-blue">요청</Tag></span>
                      </a>
                      <a href="#" className="eu-noti-list">
                        <div className="noti-title">
                          5G 특화망 관련 제품군(모뎀, Radio, 5G Core)을 스마트공장 공급업체 제품군에 포함시켜
                          5G 특화망 관련 제품군(모뎀, Radio, 5G Core)을 스마트공장 공급업체 제품군에 포함시켜
                        </div>
                        <span className="noti-tag"><Tag className="tag-default">협의중</Tag></span>
                      </a>
                      <a href="#" className="eu-noti-list">
                        <div className="noti-title">
                          스마트공장 사업 관련 하여 공급기업으로 등록하는 절차가 궁금합니다.
                        </div>
                        <span className="noti-tag"><Tag className="tag-gray">처리완료</Tag></span>
                      </a>
                      <a href="#" className="eu-noti-list">
                        <div className="noti-title">
                          도입기업 권한 등록 요청
                        </div>
                        <span className="noti-tag"><Tag className="tag-gray">처리완료</Tag></span>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            {children}
            <div className="eu-footer">
              ⓒ KOSMO. All Rights Reserved.
            </div>
          </Content>
        </Layout>

      </div>

    </>
  );
};

export default AdminMainLayout;