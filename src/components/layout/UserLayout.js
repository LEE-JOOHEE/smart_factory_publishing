import React, { useState, useEffect } from "react";
import {
    Layout,
    Button,
    Menu,
    Tooltip,
    Tabs,
    Select,
    message,
    Dropdown,
    Badge,
    Drawer,
    Modal,
} from "antd";
import { useHistory, Link } from "react-router-dom";
import logoUserMainFull from "css/images/logo-user-main-full.png";
import logoUserMain from "css/images/logo-user-main.png";
import MenuDot from "css/images/menu-dot.svg";
import facebook from "css/images/user-icons/facebook.svg";
import Youtube from "css/images/user-icons/youtube.svg";
import Band from "css/images/user-icons/band.svg";
import Instagram from "css/images/user-icons/instagram.svg";
import MenuStructureBg from "css/images/menu-structure-bg.png";
import BreadcrumbRight from "css/images/user-icons/breadcrumb-right.svg";
import PrintIcon from "css/images/user-icons/print.svg";
import DownArrow from "css/images/down-arrow.png";
import {
    PlusOutlined,
    MinusOutlined,
    DownOutlined,
    UpOutlined,
    MenuOutlined,
    CloseOutlined,
    BellOutlined,
} from "@ant-design/icons";
import "/node_modules/antd/dist/antd.css";
import route from "adminRoute.json";
import "css/CommonUsr.css";

import bellIcon from "css/images/user-icons/bell-icon.png";
import tabletLogo from "css/images/logo-tablet.png";
import sitemapIcon from "css/images/icons/sitemap-icon.png";
// 서브페이지
import SubPage1 from "components/layout/html/SubPage1";
import SubPage2 from "components/layout/html/SubPage2";
import SubPage3 from "components/layout/html/SubPage3";
import SubPage4 from "components/layout/html/SubPage4";
import SubPage5 from "components/layout/html/SubPage5";
import SubPage6 from "components/layout/html/SubPage6";
import SubPage7 from "components/layout/html/SubPage7";
import SubPage8 from "components/layout/html/SubPage8";
import SubPage9 from "components/layout/html/SubPage9";
import SubPage10 from "components/layout/html/SubPage10";
import SubPage11 from "components/layout/html/SubPage11";
import SubPage12 from "components/layout/html/SubPage12";
import SubPage13 from "components/layout/html/SubPage13";
import SubPage14 from "components/layout/html/SubPage14";
import SubPage15 from "components/layout/html/SubPage15";
import SubPage16 from "components/layout/html/SubPage16";
import SubPage17 from "components/layout/html/SubPage17";
import SubPage18 from "components/layout/html/SubPage18";
import SubPage19 from "components/layout/html/SubPage19";
import SubPage20 from "components/layout/html/SubPage20";
import SubPage21 from "components/layout/html/SubPage21";
// import SubPage22 from "components/layout/html/SubPage22";
import SubPage22_1 from "components/layout/html/SubPage22_1";
import SubPage23 from "components/layout/html/SubPage23";
import SubPage24 from "components/layout/html/SubPage24";
import SubPage25 from "components/layout/html/SubPage25";
import SubPage26 from "components/layout/html/SubPage26";
import SubPage27 from "components/layout/html/SubPage27";

const { Header, Sider, Content, Footer } = Layout;

const UserLayout = ({ children }) => {
    const items = [...route.result];

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    //메뉴구조도
    const [isDropMenuOpen, setDropMenuOpen] = useState(false);
    const openDropMenu = (e) => {
        e.stopPropagation(); // 이벤트 캡쳐링 방지
        if (isDropMenuOpen === false) {
            setDropMenuOpen(true);
        }
    };

    //안트디 알림 - (임시)카운트 랜덤
    const [count, setCount] = useState(2);
    const random = () => {
        const newCount = Math.floor(Math.random() * 100);
        setCount(newCount);
    };
    const bellItems = [
        {
            label: "전체알림",
            key: "1",
        },
        {
            type: "divider",
        },
        {
            label: "평가 승인요청",
            key: "2",
        },
        {
            label: "수행일지확인",
            key: "3",
        },
    ];
    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    // 테블릿 모바일 drawer 메뉴 제어
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    // 사이트맵 모달
    const [sitemapModalOpen, setsitemapModalOpen] = useState(false);
    const sitemapOpenModal = () => {
        setsitemapModalOpen(true);
    };
    const sitemapCloseClick = () => {
        setsitemapModalOpen(false);
    };

    // 서브 메뉴바
    const [tabItemsCont, setTabItemsCont] = useState([
        { label: "도입기업검색", key: "도입기업검색" },
        { label: "도입기업관리", key: "도입기업관리" },
        { label: "도입기업매칭결과", key: "도입기업매칭결과" },
        { label: "사업계획서요청검토", key: "사업계획서요청검토" },
        { label: "제안서관리", key: "제안서관리" },
        { label: "제안요청현황", key: "제안요청현황" },
        { label: "수요기업검색", key: "수요기업검색" },

        // { label: "보고서제출 (공급기업)", key: "보고서제출 (공급기업)" },
        // {
        //     label: "보고서검토 (도입기업,전문가,감리법인)",
        //     key: "보고서검토 (도입기업,전문가,감리법인)",
        // },
        // { label: "감리원지정", key: "감리원지정" },
        // { label: "감리결과목록", key: "감리결과목록" },
        // { label: "감리변경", key: "감리변경" },

        // { label: "유지보수 계약 관리", key: "유지보수 계약 관리" },
        // { label: "하자보수관리 (도입기업)", key: "하자보수관리 (도입기업)" },
        // {
        //     label: "하자보수 접수/관리 (공급기업)",
        //     key: "하자보수 접수/관리 (공급기업)",
        // },
        // { label: "하자보수 만족도조사", key: "하자보수 만족도조사" },

        // { label: "솔루션 모니터링 소개", key: "솔루션 모니터링 소개" },
        // {
        //     label: "솔루션 사용현황 조회-공급기업",
        //     key: "솔루션 사용현황 조회-공급기업",
        // },
        // { label: "솔루션 사용현황 등록", key: "솔루션 사용현황 등록" },
        // { label: "로그인 API 인증키 관리", key: "로그인 API 인증키 관리" },
        // { label: "실시간 제출현황 조회", key: "실시간 제출현황 조회" },
    ]);

    return (
        <>
            <div
                className="eu-user-container"
                onClick={() => setDropMenuOpen(false)}
            >
                <div className="eu-user-header sub-header">
                    {/* 로그인 전 sub --> header-top */}
                    {/* <div style={{ borderBottom: "1px solid #E2E2E2" }}>
            <div className="inner">
              <div className="eu-u-hearder-top" style={{padding: "17px 2px"}}>
                <div className="mobile-menu-btn">
                  <Button className="eu-btn-menu-toggle" onClick={showDrawer}>
                    <MenuOutlined />
                  </Button>
                </div>
                <div className="flex-row-center mr-34 ml-auto header-top-link-wrap">
                  <div className="header-top-link-logout">
                    <Link to="/" tabIndex={1}>로그인</Link>
                    <span className="mlr-12 login-line"></span>
                    <Link to="/" tabIndex={2}>회원가입</Link>
                    <span className="mlr-12 login-line"></span>
                    <Link to="/" tabIndex={3}>중소벤처24 통합로그인</Link>
                  </div>
                </div>
                <div className="header-top-button-wrap">
                  <Button className="eu-eng-btn mr-20" tabIndex={4}>ENG</Button>
                  <Link to="/" className="mr-8" tabIndex={5}><img src={facebook} alt="facebook" /></Link>
                  <Link to="/" className="mr-8" tabIndex={6}><img src={Youtube} alt="Youtube" /></Link>
                  <Link to="/" className="mr-8" tabIndex={7}><img src={Band} alt="Band" /></Link>
                  <Link to="/" tabIndex={8}><img src={Instagram} alt="Instagram" /></Link>
                </div>
                <a href="#/" className="tablet-logo">
                  <img src={tabletLogo} alt="테블릿로고" className="tablet-logo" />
                </a>
              </div>
            </div>
          </div> */}

                    {/* ★★★★ 로그인 후 header-top ★★★★ */}
                    {/* <div style={{ borderBottom: "1px solid #E2E2E2" }}> */}
                    {/* 헤더 높이값과 라인 통일하자고 해서 border 삭제 */}
                    <div className="inner">
                        {/* <div className="eu-u-hearder-top" style={{padding: "17px 2px"}}> */}
                        <div className="eu-u-hearder-top">
                            <div className="mobile-menu-btn">
                                <Button
                                    className="eu-btn-menu-toggle"
                                    onClick={showDrawer}
                                >
                                    <MenuOutlined />
                                </Button>
                            </div>
                            <div className="flex-row-center mr-34 ml-auto header-top-link-wrap">
                                <div className="font-16-400 mr-10">
                                    <b>진정국 님</b>
                                    (주)유클리드소프트 (평가위원)
                                </div>
                                <Dropdown
                                    overlayClassName="bell-popover"
                                    menu={{
                                        items: bellItems,
                                        onClick: onClick,
                                        selectable: true,
                                    }}
                                    trigger="click"
                                    arrow={{ pointAtCenter: true }}
                                >
                                    <a href="/#" className="mr-40">
                                        <Badge
                                            count={count}
                                            size="small"
                                            onClick={random}
                                        >
                                            <img
                                                src={bellIcon}
                                                alt="bell-icon"
                                                width={22}
                                                height={23}
                                            />
                                        </Badge>
                                    </a>
                                </Dropdown>
                                <div className="header-top-link-login">
                                    <Link to="/" tabIndex={1}>
                                        회원정보
                                    </Link>
                                    <span className="mlr-12 login-line"></span>
                                    <Link to="/" tabIndex={2}>
                                        마이페이지
                                    </Link>
                                    <span className="mlr-12 login-line"></span>
                                    <Link to="/" tabIndex={3}>
                                        로그아웃
                                    </Link>
                                    <span className="mlr-12 login-line"></span>
                                    <Link to="/">중소벤처24 통합로그인</Link>
                                </div>
                            </div>
                            <div className="header-top-button-wrap">
                                <Button
                                    className="eu-eng-btn mr-20"
                                    tabIndex={4}
                                >
                                    ENG
                                </Button>
                                <Link to="/" className="mr-8" tabIndex={5}>
                                    <img src={facebook} alt="facebook" />
                                </Link>
                                <Link to="/" className="mr-8" tabIndex={6}>
                                    <img src={Youtube} alt="Youtube" />
                                </Link>
                                <Link to="/" className="mr-8" tabIndex={7}>
                                    <img src={Band} alt="Band" />
                                </Link>
                                <Link to="/" tabIndex={8}>
                                    <img src={Instagram} alt="Instagram" />
                                </Link>
                            </div>
                            <a href="#/" className="tablet-logo">
                                <img
                                    src={tabletLogo}
                                    alt="테블릿로고"
                                    className="tablet-logo"
                                />
                            </a>
                        </div>
                    </div>

                    {/* 대메뉴 */}
                    <div className="inner">
                        {/* <div className="eu-u-header-menu" style={{ padding: "28px 2px", height: "auto" }}> */}
                        {/* 헤더 높이값과 라인 통일하자고 해서 border 삭제 */}
                        <div className="eu-u-header-menu">
                            <div className="eu-kosmo-logo-user">
                                <Link to="/" tabIndex={9}>
                                    <img
                                        src={logoUserMainFull}
                                        alt="user-main-logo-full"
                                        className="logo-full mt-4"
                                    />
                                </Link>
                                <Link to="/" tabIndex={9}>
                                    <img
                                        src={logoUserMain}
                                        alt="user-main-logo"
                                        className="logo-mini mt-6"
                                    />
                                </Link>
                            </div>
                            <div className="eu-main-menu sub">
                                <Link
                                    to="/"
                                    tabIndex={10}
                                    onMouseEnter={openDropMenu}
                                    onKeyDown={openDropMenu}
                                >
                                    <span>사업안내</span>
                                </Link>
                                <Link
                                    to="/"
                                    tabIndex={16}
                                    onMouseEnter={openDropMenu}
                                >
                                    <span>홍보관</span>
                                </Link>
                                <Link
                                    to="/"
                                    tabIndex={23}
                                    onMouseEnter={openDropMenu}
                                >
                                    <span>사업관리</span>
                                </Link>
                                <Link
                                    to="/"
                                    tabIndex={36}
                                    onMouseEnter={openDropMenu}
                                >
                                    <span>알림/참여마당</span>
                                </Link>
                                <Link
                                    to="/"
                                    tabIndex={41}
                                    onMouseEnter={openDropMenu}
                                >
                                    <span>기관소개</span>
                                </Link>
                                <div
                                    className="sitemap-icon"
                                    onClick={sitemapOpenModal}
                                >
                                    <img
                                        src={sitemapIcon}
                                        alt="사이트맵 아이콘"
                                    />
                                    <span className="font-18 font-bold-400 ml-6">
                                        전체메뉴
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 사이트맵 */}
                    <Modal
                        open={sitemapModalOpen}
                        onCancel={sitemapCloseClick}
                        wrapClassName="eu-sitemap-wrap"
                        title={
                            <Link to="/">
                                <img
                                    src={logoUserMainFull}
                                    alt="사이트맵 로고"
                                />
                            </Link>
                        }
                        width={"100%"}
                        mask={false}
                        maskClosable={false}
                        footer={false}
                    >
                        <div className="tit-menu">
                            <span>사업안내</span>
                        </div>
                        <div className="m-menu-wrap">
                            <div className="m-menu">
                                <Link to="/">사업공고</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">지원사업 소개</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">담당자 연락처</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">맞춤형 공급기업 검색</Link>
                            </div>
                        </div>

                        <div className="tit-menu">
                            <span>홍보관</span>
                        </div>
                        <div className="m-menu-wrap">
                            <div className="m-menu">
                                <Link to="/">스마트공장소개</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">솔루션소개</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">우수구축사례</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">보도자료</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">홍보자료</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">제조혁신센터소개</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">스마트공장테스트베드</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">스마트공장 라이브러리</Link>
                            </div>
                        </div>

                        <div className="tit-menu">
                            <span>사업관리</span>
                        </div>
                        <div className="m-menu-wrap">
                            <div className="m-menu">
                                <Link to="/">과제신청</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">도입기업 매칭</Link>
                                <div className="s-menu">
                                    <Link to="/">도입기업검색</Link>
                                    <Link to="/">도입기업관리</Link>
                                    <Link to="/">도입기업 매칭결과</Link>
                                    <Link to="/">사업계획서 요청검토</Link>
                                    <Link to="/">제안서관리</Link>
                                    <Link to="/">제안 요청현황</Link>
                                    <Link to="/">수요기업 검색</Link>
                                </div>
                            </div>
                            <div className="m-menu">
                                <Link to="/">공급기업 매칭</Link>
                                <div className="s-menu">
                                    <Link to="/">공급기업검색</Link>
                                    <Link to="/">공급기업관리</Link>
                                    <Link to="/">공급기업 매칭결과</Link>
                                    <Link to="/">사업계획서 검토</Link>
                                </div>
                            </div>
                            <div className="m-menu">
                                <Link to="/">원가계산</Link>
                                <div className="s-menu">
                                    <Link to="/">원가계산 제출</Link>
                                    <Link to="/">원가계산 검토</Link>
                                </div>
                            </div>
                            <div className="m-menu">
                                <Link to="/">컨설팅기정 지정</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">점검결과조회</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">이의신청</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">협약/사업비</Link>
                                <div className="s-menu">
                                    <Link to="/">과제협약</Link>
                                    <Link to="/">협약변경 (사업변경)</Link>
                                    <Link to="/">사업비 신청</Link>
                                </div>
                            </div>
                            <div className="m-menu">
                                <Link to="/">보고/감리</Link>
                                <div className="s-menu">
                                    <Link to="/">보고서제출 (공급기업)</Link>
                                    <Link to="/">
                                        보고서검토 (도입기업,전문가,감리법인)
                                    </Link>
                                    <Link to="/">감리원지정</Link>
                                    <Link to="/">감리결과목록</Link>
                                    <Link to="/">감리변경</Link>
                                </div>
                            </div>
                            <div className="m-menu">
                                <Link to="/">성과관리</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">하자보수 관리</Link>
                                <div className="s-menu">
                                    <Link to="/">유지보수 계약 관리</Link>
                                    <Link to="/">하자보수관리 (도입기업)</Link>
                                    <Link to="/">
                                        하자보수 접수/관리 (공급기업)
                                    </Link>
                                    <Link to="/">하자보수 만족도조사</Link>
                                </div>
                            </div>
                            <div className="m-menu">
                                <Link to="/">기관모집</Link>
                                <div className="s-menu">
                                    <Link to="/">기관모집신청</Link>
                                    <Link to="/">기관협약서 제출</Link>
                                    <Link to="/">기관협약 체결</Link>
                                </div>
                            </div>
                            <div className="m-menu">
                                <Link to="/">솔루션 사용현황(도입기업)</Link>
                                <div className="s-menu">
                                    <Link to="/">솔루션 모니터링 소개</Link>
                                    <Link to="/">
                                        솔루션 사용현황 조회 - 도입기업
                                    </Link>
                                    <Link to="/">솔루션 사용현황 등록</Link>
                                </div>
                            </div>
                            <div className="m-menu">
                                <Link to="/">솔루션 사용현황(공급기업)</Link>
                                <div className="s-menu">
                                    <Link to="/">솔루션 모니터링 소개</Link>
                                    <Link to="/">
                                        솔루션 사용현황 조회 - 공급기업
                                    </Link>
                                    <Link to="/">솔루션 사용현황 등록</Link>
                                    <Link to="/">로그인 API 인증키 관리</Link>
                                    <Link to="/">실시간 제출현황 조회</Link>
                                </div>
                            </div>
                        </div>

                        <div className="tit-menu">
                            <span>알림/참여마당</span>
                        </div>
                        <div className="m-menu-wrap">
                            <div className="m-menu">
                                <Link to="/">공지사항</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">자료실</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">정기간행물</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">자주묻는질문</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">스마트공장 부정사용 신고</Link>
                            </div>
                        </div>

                        <div className="tit-menu">
                            <span>기관소개</span>
                        </div>
                        <div className="m-menu-wrap">
                            <div className="m-menu">
                                <Link to="/">단장인사말</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">스마트제조혁신추진단 소개</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">비전 및 목표</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">조직도</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">CI 소개</Link>
                            </div>
                            <div className="m-menu">
                                <Link to="/">찾아오시는길</Link>
                            </div>
                        </div>
                    </Modal>

                    {/* 테블릿 메뉴 */}
                    <div className="tablet-sub-menu scroll-x-hide">
                        <div className="link-scroll-wrap">
                            <Link to="/">
                                <span className="active">사업안내</span>
                            </Link>
                            <Link to="/">
                                <span>지원사업 소개</span>
                            </Link>
                            <Link to="/">
                                <span>담당자 연락처</span>
                            </Link>
                            <Link to="/">
                                <span>공급기업 소개</span>
                            </Link>
                            <Link to="/">
                                <span>맞춤형 공급기업 검색1</span>
                            </Link>
                            <Link to="/">
                                <span>맞춤형 공급기업 검색2</span>
                            </Link>
                            <Link to="/">
                                <span>맞춤형 공급기업 검색3</span>
                            </Link>
                            <Link to="/">
                                <span>맞춤형 공급기업 검색4</span>
                            </Link>
                            <Link to="/">
                                <span>맞춤형 공급기업 검색5</span>
                            </Link>
                            <Link to="/">
                                <span>맞춤형 공급기업 검색6</span>
                            </Link>
                            <Link to="/">
                                <span>맞춤형 공급기업 검색7</span>
                            </Link>
                            <Link to="/">
                                <span>맞춤형 공급기업 검색8</span>
                            </Link>
                        </div>
                    </div>

                    {/* 모바일 메뉴 */}
                    <div className="">
                        <Drawer
                            className="mobile-drawer-menu"
                            placement="left"
                            onClose={onClose}
                            open={open}
                            title={
                                <div className="header-top-link-logout text-r">
                                    <Link to="/" tabIndex={1}>
                                        로그인
                                    </Link>
                                    <img
                                        src={MenuDot}
                                        alt=""
                                        className="login-dot mlr-12"
                                    />
                                    <Link to="/" tabIndex={2}>
                                        회원가입
                                    </Link>
                                </div>
                            }
                            closeIcon={
                                <Button className="eu-btn-menu-toggle">
                                    <CloseOutlined className="text-blue" />
                                </Button>
                            }
                        >
                            <div className="" style={{ overflow: "auto" }}>
                                <Menu
                                    mode={"inline"}
                                    theme={"light"}
                                    items={items}
                                    defaultOpenKeys={[items[0].key]}
                                    expandIcon={(icon) =>
                                        icon.isOpen ? (
                                            <MinusOutlined
                                                style={{ color: "#A0A0A0" }}
                                            />
                                        ) : (
                                            <PlusOutlined />
                                        )
                                    }
                                    style={{
                                        fontFamily: "NotoSansKR-400",
                                        fontSize: "18px",
                                        color: "#89A3CE",
                                        backgroundColor: "#F7F7F7",
                                        height: "100%",
                                        marginBottom: "40px",
                                    }}
                                />
                            </div>
                            <div className="text-r mr-30">
                                <Link to="/" className="mr-8">
                                    <img src={facebook} alt="facebook" />
                                </Link>
                                <Link to="/" className="mr-8">
                                    <img src={Youtube} alt="Youtube" />
                                </Link>
                                <Link to="/" className="mr-8">
                                    <img src={Band} alt="Band" />
                                </Link>
                                <Link to="/">
                                    <img src={Instagram} alt="Instagram" />
                                </Link>
                            </div>
                        </Drawer>
                    </div>

                    {/* 메뉴구조도 - 제어 */}
                    {isDropMenuOpen && (
                        <>
                            <div
                                className="eu-u-menu-structure"
                                onMouseLeave={() => setDropMenuOpen(false)}
                            >
                                <div className="menu-bg-left col-span-5">
                                    <img
                                        src={MenuStructureBg}
                                        alt="메뉴구조도 배경이미지"
                                    />
                                </div>
                                <div className="menu-bg-right col-span-7"></div>
                                <div className="menu-structure-wrap">
                                    <div className="inner">
                                        <div className="img-inner">
                                            <div className="img-text">
                                                스마트공장 사업관리시스템에서
                                                정보들을
                                                <br />
                                                체계적으로 분류하여
                                                보여드립니다.
                                            </div>
                                        </div>
                                        <div className="list-inner">
                                            <div className="menu-list">
                                                <Link to="/" tabIndex={11}>
                                                    사업공고
                                                </Link>
                                                <Link to="/" tabIndex={12}>
                                                    지원사업 소개
                                                </Link>
                                                <Link to="/" tabIndex={13}>
                                                    담당자 연락처
                                                </Link>
                                                <Link to="/" tabIndex={14}>
                                                    공급기업 소개
                                                </Link>
                                                <Link to="/" tabIndex={15}>
                                                    맞춤형 공급기업 검색
                                                </Link>
                                            </div>
                                            <div className="menu-list">
                                                <Link to="/" tabIndex={17}>
                                                    스마트공장소개
                                                </Link>
                                                <Link to="/" tabIndex={18}>
                                                    유관사업안내
                                                </Link>
                                                <Link to="/" tabIndex={19}>
                                                    우수구축사례
                                                </Link>
                                                <Link to="/" tabIndex={20}>
                                                    보도자료
                                                </Link>
                                                <Link to="/" tabIndex={21}>
                                                    홍보자료
                                                </Link>
                                                <Link to="/" tabIndex={22}>
                                                    제조혁신센터소개
                                                </Link>
                                            </div>
                                            <div className="menu-list">
                                                <Link to="/" tabIndex={24}>
                                                    과제신청
                                                </Link>
                                                <Link to="/" tabIndex={25}>
                                                    공급기업 매칭
                                                </Link>
                                                <Link to="/" tabIndex={26}>
                                                    기업진단 현장평가
                                                </Link>
                                                <Link to="/" tabIndex={27}>
                                                    원가계산
                                                </Link>
                                                <Link to="/" tabIndex={28}>
                                                    컨설팅기관 지정
                                                </Link>
                                                <Link to="/" tabIndex={29}>
                                                    평가/점검결과조회
                                                </Link>
                                                <Link to="/" tabIndex={30}>
                                                    이의신청
                                                </Link>
                                                <Link to="/" tabIndex={31}>
                                                    협약/사업비
                                                </Link>
                                                <Link to="/" tabIndex={32}>
                                                    보고/감리
                                                </Link>
                                                <Link to="/" tabIndex={33}>
                                                    성과관리
                                                </Link>
                                                <Link to="/" tabIndex={34}>
                                                    하자보수 관리
                                                </Link>
                                                <Link to="/" tabIndex={35}>
                                                    기관모집
                                                </Link>
                                            </div>
                                            <div className="menu-list">
                                                <Link to="/" tabIndex={37}>
                                                    공지사항
                                                </Link>
                                                <Link to="/" tabIndex={38}>
                                                    자료실
                                                </Link>
                                                <Link to="/" tabIndex={39}>
                                                    정기간행물
                                                </Link>
                                                <Link to="/" tabIndex={40}>
                                                    자주묻는질문
                                                </Link>
                                            </div>
                                            <div className="menu-list">
                                                <Link to="/" tabIndex={42}>
                                                    기관장 인사말
                                                </Link>
                                                <Link to="/" tabIndex={43}>
                                                    스마트제조혁신추진단 소개
                                                </Link>
                                                <Link to="/" tabIndex={44}>
                                                    조직도
                                                </Link>
                                                <Link to="/" tabIndex={45}>
                                                    찾아오시는길
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* menu-structure-wrap - end */}
                            </div>
                            {/* eu-u-menu-structure - end */}
                        </>
                    )}
                </div>
                {/* eu-user-header - end */}

                <div className="eu-user-body sub-body">
                    {/* 3단메뉴바 */}
                    <div className="eu-user-menubar">
                        <div className="inner" style={{ overflow: "visible" }}>
                            <div className="eu-u-menu">
                                <div className="dropdown">
                                    <div className="deps-1">
                                        <span>사업안내</span>
                                        <Button className="eu-btn-dropdown-arrow">
                                            <DownOutlined />
                                        </Button>
                                    </div>
                                    <div className="deps-menu-popover">
                                        <a href="/#">
                                            <span>사업공고</span>
                                        </a>
                                        <a href="/#">지원사업소개</a>
                                        <a href="/#">담당자연락처</a>
                                        <a href="/#">공급기업소개</a>
                                    </div>
                                </div>
                                <span className="deps-line"></span>

                                <div className="dropdown">
                                    <div className="deps-1">
                                        <span>지원사업소개</span>
                                        <Button className="eu-btn-dropdown-arrow">
                                            <DownOutlined />
                                        </Button>
                                    </div>
                                    <div className="deps-menu-popover">
                                        <a href="/#">
                                            <span>사업공고</span>
                                        </a>
                                        <a href="/#">
                                            지원사업소개지원사업소개지원사업소개지원사업소개
                                        </a>
                                        <a href="/#">담당자연락처</a>
                                        <a href="/#">공급기업소개</a>
                                    </div>
                                </div>
                                <span className="deps-line"></span>

                                {/* <div className="dropdown">
                                    <div className="deps-1">
                                        <span>사업공고</span>
                                        <Button className="eu-btn-dropdown-arrow">
                                            <DownOutlined />
                                        </Button>
                                    </div>
                                    <div className="deps-menu-popover">
                                        <a href="/#">
                                            <span>
                                                사업공고사업공고사업공고
                                            </span>
                                        </a>
                                        <a href="/#">지원사업소개</a>
                                        <a href="/#">담당자연락처</a>
                                        <a href="/#">공급기업소개</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* eu-user-menubar - end */}

                    {/* 서브 메뉴바 */}
                    <div className="eu-user-sub-menubar">
                        <div className="inner">
                            <Tabs items={tabItemsCont} />
                        </div>
                    </div>

                    <div className="eu-u-body-common">
                        <div className="inner">
                            <div className="eu-u-body-title">
                                {/* <div className="title">사업공고</div> */}
                                <div className="title">개인정보 처리방침</div>
                                <div className="breadcrumb">
                                    <span>home</span>
                                    <img
                                        src={BreadcrumbRight}
                                        alt="아이콘"
                                        className="mlr-12"
                                    />
                                    <span>사업안내</span>
                                    <img
                                        src={BreadcrumbRight}
                                        alt="아이콘"
                                        className="mlr-12"
                                    />
                                    <span>사업공고</span>
                                </div>
                                <div className="flex-row-center ml-auto">
                                    <Link to="/" className="mr-12">
                                        <img src={PrintIcon} alt="인쇄아이콘" />
                                    </Link>
                                    <div className="break-line-eee"></div>
                                    <Link to="/" className="mlr-12">
                                        <PlusOutlined />
                                    </Link>
                                    <div className="break-line-eee"></div>
                                    <Link to="/" className="ml-12">
                                        <MinusOutlined />
                                    </Link>
                                </div>
                            </div>
                            {/* eu-u-body-title(고정부분) - end */}

                            {/* contents - 컨텐츠가 변하는 부분 */}
                            <div className="eu-u-body-content">
                                {/* 사업안내 - 사업공고 */}
                                {/* <SubPage1 /> */}

                                {/* 사업안내 - 지원사업소개 */}
                                {/* <SubPage2 /> */}

                                {/* 사업안내 - 담당자 연락처 */}
                                {/* <SubPage3 /> */}

                                {/* 사업안내 - 맞춤 공급기업 정보 */}
                                {/* <SubPage4 /> */}

                                {/* 사업관리 - 공급기업 매칭검색 */}
                                {/* <SubPage5 /> */}

                                {/* 홍보관 - 스마트공장소개 ★★★★반응형이미지처리확인하기★★★★ */}
                                {/* <SubPage6 /> */}

                                {/* 홍보관 - 유관사업안내  */}
                                {/* <SubPage7 /> */}

                                {/* 홍보관 - 우수구축사례 */}
                                {/* <SubPage8 /> */}

                                {/* 홍보관 - 보도자료 */}
                                {/* 알림/참여마당 - 공지사항/정기간행물/자주묻는질문 */}
                                {/* <SubPage9 /> */}

                                {/* 사업관리 - (업무관련 대표화면) 과제신청/공급기업 매칭검색/ */}
                                {/* <SubPage10 /> */}

                                {/* 회원정보 - 전문가신청 */}
                                {/* <SubPage11 /> */}

                                {/* 회원정보 - 견학신청 (달력) */}
                                {/* <SubPage12 /> */}

                                {/* 기관소개 - 단장인사말 */}
                                {/* <SubPage13 /> */}

                                {/* 기관소개 - 스마트제조혁신추진단 소개 */}
                                {/* <SubPage14 /> */}

                                {/* 기관소개 - 조직도 / 찾아오시는 길(카카오map 공간) */}
                                {/* <SubPage15 /> */}

                                {/* 회원정보 - 로그인 / 회원가입 */}
                                {/* <SubPage16 /> */}

                                {/* 회원정보 - 회원가입 절차(약관동의 / 기관정보선택 / 사용자정보입력 / 가입완료 ) */}
                                {/* <SubPage17 /> */}

                                {/* 회원정보 - 아아디찾기 / 비밀번호찾기 / 아이디찾기 결과화면 2p */}
                                {/* <SubPage18 /> */}

                                {/* 회원정보 - 마이페이지 */}
                                {/* <SubPage19 /> */}

                                {/* 회원정보 - 개인정보변경 */}
                                {/* <SubPage20 /> */}

                                {/* 이용안내 - 이용약관 */}
                                {/* <SubPage21 /> */}

                                {/* 이용안내 - 개인정보 처리방침 */}
                                {/* <SubPage22 /> */}
                                <SubPage22_1 />

                                {/* 이용안내 - 이메일무단수집거부 */}
                                {/* <SubPage23 /> */}

                                {/* 홍보관 - 제조혁신센터 소개(map) */}
                                {/* <SubPage24 /> */}

                                {/* 테스트베드 */}
                                {/* <SubPage25 /> */}

                                {/* 솔루션 소개 */}
                                {/* <SubPage26 /> */}

                                {/* 술루션모니터링 */}
                                {/* <SubPage27 /> */}
                            </div>
                            {/* eu-u-body-content - end */}
                        </div>
                        {/* inner - ned */}
                    </div>

                    <div className="eu-user-footer">
                        <div className="inner">
                            <div className="grid-col-12 item-center gap-col-30 gap-row-10">
                                <div className="col-span-7">
                                    <div className="flex-row flex-wrap link gap-col-38">
                                        <a href={"#/"} className="text-navy">
                                            개인정보처리방침
                                        </a>
                                        <a href={"#/"}>이용약관</a>
                                        <a href={"#/"}>이메일무단수집 거부</a>
                                    </div>
                                    <div className="flex-row flex-wrap address mt-20 mb-10">
                                        [30141] 세종특별자치시 집현중앙로 79,
                                        중소기업기술정보진흥원 부설
                                        스마트제조혁신추진단
                                        <br />
                                        대표전화 : 1357
                                    </div>
                                </div>

                                <div className="col-span-5">
                                    <div className="flex-row gap-10">
                                        <Select
                                            style={{ width: "250px" }}
                                            className="ml-auto"
                                            onChange={handleChange}
                                            defaultValue="관련사이트"
                                            dropdownAlign={{ offset: [0, 0] }}
                                            placeholder="선택하세요"
                                            options={[
                                                {
                                                    value: "1",
                                                    label: "1",
                                                },
                                            ]}
                                        />
                                        <Select
                                            style={{ width: "300px" }}
                                            onChange={handleChange}
                                            defaultValue="중소기업정보망"
                                            dropdownAlign={{ offset: [0, 0] }}
                                            placeholder="선택하세요"
                                            options={[
                                                {
                                                    value: "1",
                                                    label: "1",
                                                },
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid-col-1">
                                <div className="flex-row copyright">
                                    <span>
                                        Copyright ⓒ Kosmo. All Rights Reserved.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* eu-user-footer - end */}
                </div>
                {/* eu-user-body - end */}
            </div>
            {/* eu-user-container - end */}
        </>
    );
};

export default UserLayout;
