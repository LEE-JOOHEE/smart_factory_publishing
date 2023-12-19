import React, { useState, useEffect, useRef } from "react";
import {
    Layout,
    Button,
    Menu,
    Tooltip,
    Tabs,
    Select,
    Empty,
    Modal,
    Row,
    Col,
    Space,
    Badge,
    Dropdown,
    message,
    Divider,
    Drawer,
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
import {
    PlusOutlined,
    SwapRightOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    PauseOutlined,
    MinusOutlined,
    CaretRightOutlined,
    InfoCircleFilled,
    BellOutlined,
    MenuOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import "/node_modules/antd/dist/antd.css";
import route from "adminRoute.json";
import "css/CommonUsr.css";

import UserMainNoticeBoard from "components/layout/UserMainNoticeBoard";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "css/slick/slick.css";
import "css/slick/slick-theme.css";
import bellIcon from "css/images/user-icons/bell-icon.png";
import tabletLogo from "css/images/logo-tablet.png";
import mainPopupImg1 from "css/images/main-popup-img-1.png";
import mainPopupImg6 from "css/images/main-popup-img-6.png";
import sitemapIcon from "css/images/icons/sitemap-icon.png";

// const { Header, Sider, Content, Footer } = Layout;

const UserMainLayout = ({ direction }) => {
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

    //메인슬라이드(slick-slider)
    const dataSlider = [
        {
            imgPath: "css/images/kosmo-main-bg-1.png",
            en: "Smart Factory Business Management System",
            title: "스마트공장 견학",
            sub: "스마트제조혁신의 함성, 함께 성장하는 대한민국",
        },
        {
            imgPath: "css/images/kosmo-main-bg-2.png",
            en: "Smart Factory Business Management System",
            title: "공급기업검색",
            sub: "내공장과 가장 잘맞는 공급지역을 안내해드립니다",
        },
    ];

    const [mainSliderRef, setMainSliderRef] = useState(null);
    const [playPause, setPlayPause] = useState(true);
    const MainBgStopSlide = () => {
        if (playPause) {
            setPlayPause(false);
            mainSliderRef?.slickPause();
        } else {
            setPlayPause(true);
            mainSliderRef?.slickPlay();
        }
    };
    const MainBgPrevClick = () => {
        mainSliderRef?.slickPrev();
    };
    const MainBgNextClick = () => {
        mainSliderRef?.slickNext();
    };

    const settingsMainBg = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    //사업공고
    const dataBusiness = [
        {
            id: "스마트역량강화1",
            bizTitle:
                "(선정기업 대상) 2022년 대중소상생형 삼성디스플레이스마트공장 구축 지원사업",
            date: "2022-09-14 00:00 ~ 2022-11-11 18:00",
            date2: "",
        },
        {
            id: "스마트역량강화2",
            bizTitle: "2023년 스마트공장 수준확인 사업 공고",
            date: "2023-02-13 09:00 ~ 예산소진시 까지",
            date2: "",
        },
        {
            id: "	스마트역량강화3",
            bizTitle:
                "	(선정기업대상) 한국산업단지공단(인천남동스마트그린산단)_2021년 업종별 특화 스마트공장 구축지원 사업 공고",
            date: "2023-01-31 14:00 ~ 2023-03-02 17:00",
            date2: "( 2023-01-31 14:00 ~ 2023-03-02 17:00 )",
        },
        {
            id: "스마트역량강화4",
            bizTitle:
                "(선정기업 대상) 2022년 대중소상생형 삼성디스플레이스마트공장 구축 지원사업",
            date: "2022-09-14 00:00 ~ 2022-11-11 18:00",
            date2: "",
        },
        {
            id: "스마트역량강화5",
            bizTitle:
                "(선정기업 대상) 2022년 대중소상생형 삼성디스플레이스마트공장 구축 지원사업",
            date: "2022-09-14 00:00 ~ 2022-11-11 18:00",
            date2: "",
        },
        {
            id: "스마트역량강화6",
            bizTitle:
                "(선정기업 대상) 2022년 대중소상생형 삼성디스플레이스마트공장 구축 지원사업",
            date: "2022-09-14 00:00 ~ 2022-11-11 18:00",
            date2: "",
        },
    ];

    //사업공고 탭메뉴 슬라이드(slick-slider)
    const [slickPlayPause, setSlickPlayPause] = useState(true); //처음에 auto(재생중)
    const [sliderRef, setSliderRef] = useState(null);
    const slickStopSlide = () => {
        if (slickPlayPause) {
            setSlickPlayPause(false);
            sliderRef?.slickPause();
        } else {
            setSlickPlayPause(true);
            sliderRef?.slickPlay();
        }
    };
    const slickPrevClick = () => {
        sliderRef?.slickPrev();
    };
    const slickNextClick = () => {
        sliderRef?.slickNext();
    };
    const settingsBizTab = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 2,
        nextArrow: <ArrowLeftOutlined />,
        prevArrow: <ArrowRightOutlined />,
    };

    // 2023-05-31 추가 및 수정
    //사업공고 컨텐츠 슬라이드(slick-slider)
    const settingsBizAnn = {
        dots: false,
        infinite: true,
        speed: 100,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <ArrowLeftOutlined />,
        prevArrow: <ArrowRightOutlined />,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    //퀵메뉴
    const dataQuickMenu = [
        {
            imgPath: "css/images/user-icons/quick-menu-icon-1-power-plant.png",
            text: "스마트공장 소개",
        },
        {
            imgPath: "css/images/user-icons/quick-menu-icon-2-idea.png",
            text: "제조혁신 센터소개",
        },
        {
            imgPath: "css/images/user-icons/quick-menu-icon-3.png",
            text: "스마트제 조혁신뉴스",
        },
        {
            imgPath: "css/images/user-icons/quick-menu-icon-4-surface.png",
            text: "PC 원격지원 서비스",
        },
        {
            imgPath: "css/images/user-icons/quick-menu-icon-5-siren.png",
            text: "신문고 바로가기",
        },
    ];

    //공지사항
    const [notiTabItems, setNotiTabItems] = useState([
        {
            label: "공지사항",
            key: "공지사항",
            children: <UserMainNoticeBoard />,
        },
        {
            label: "보도자료",
            key: "보도자료",
            disabled: true,
        },
        {
            label: "홍보자료",
            key: "홍보자료",
        },
    ]);

    //우수구축사례 슬라이드(slick-slider)
    const settingsCase = {
        dots: false,
        infinite: true, //무한 반복
        speed: 100,
        autoplay: true, //자동 스크롤
        autoplaySpeed: 5000,
        slidesToShow: 3, //한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        initialSlide: 0, //처음에 보여질 슬라이드 번호
        nextArrow: <ArrowLeftOutlined />,
        prevArrow: <ArrowRightOutlined />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    //미디어센터 - 유투브(slick-slider)
    const settingsMedia = {
        dots: false,
        infinite: true,
        speed: 100,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <ArrowLeftOutlined />,
        prevArrow: <ArrowRightOutlined />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
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

    //테블릿 모바일 메뉴 제어
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuShow = () => {
        setMobileMenuOpen(true);
    };
    const mobileMenuClose = () => {
        setMobileMenuOpen(false);
    };
    // 테블릿 모바일 drawer 메뉴 제어
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    // 스크롤 핸들링
    const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
    };

    // 모바일 스크롤 제어
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        if (window.innerWidth < 415) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, []);

    // 팝업레이아웃 테스트
    const [isModalOpen, setIsModalOpen] = useState(true);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeClick = () => {
        setIsModalOpen(false);
    };

    const settingsMainPopup = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <ArrowLeftOutlined />,
        prevArrow: <ArrowRightOutlined />,
    };

    // 사이트맵 모달
    const [sitemapModalOpen, setsitemapModalOpen] = useState(false);
    const sitemapOpenModal = () => {
        setsitemapModalOpen(true);
    };
    const sitemapCloseClick = () => {
        setsitemapModalOpen(false);
    };

    return (
        <>
            <div
                className="eu-user-container"
                onClick={() => setDropMenuOpen(false)}
            >
                {/*팝업레이아웃 - 처음에 팝업 바로 한번뜨고, ENG버튼에 임시로 팝업모달 연결시켜 놓았어요 */}
                <Modal
                    open={isModalOpen}
                    wrapClassName="main-popup-layout"
                    title="모달샘플"
                    width={600}
                    mask={false}
                    footer={false}
                >
                    <Slider {...settingsMainPopup} className="popup-slide">
                        <img src={mainPopupImg1} alt="서비스중단안내 팝업" />
                        <img src={mainPopupImg1} alt="서비스중단안내 팝업" />
                        <img src={mainPopupImg1} alt="서비스중단안내 팝업" />
                        <img src={mainPopupImg1} alt="서비스중단안내 팝업" />
                        <img src={mainPopupImg6} alt="서비스중단안내 팝업" />
                    </Slider>
                    <div className="flex-row-center">
                        <button className="popup-btn">오늘하루열지않기</button>
                        <button className="popup-btn" onClick={closeClick}>
                            닫기
                        </button>
                    </div>
                </Modal>

                <div className="eu-user-header">
                    {/* 배너 사이즈에 따라서 
            .eu-user-body .eu-u-main-bg{margin-top: 230px;} 등으로 수정해야함
            -배너가 없을때: 131px 어어야 하고, 
            -배너가 있을때(높이100px): 231px 이어야 함
         */}
                    {/* <div className="flex-row-center" style={{ background: '#e3ecfa', height: '100px' }}>배너영역 테스트 완료</div> */}

                    {/* 로그인 전 main --> header-top */}
                    <div className="inner">
                        <div className="eu-u-hearder-top">
                            <div className="mobile-menu-btn">
                                <Button
                                    className="eu-btn-menu-toggle"
                                    onClick={showDrawer}
                                >
                                    <MenuOutlined />
                                </Button>
                            </div>
                            {/* 스크롤 확인용 */}
                            {/* <h3>
                                Scroll top: <b>{scrollTop}</b>
                            </h3> */}
                            <div className="flex-row-center mr-34 ml-auto header-top-link-wrap">
                                <div className="header-top-link-logout">
                                    <Link to="/" tabIndex={1}>
                                        로그인
                                    </Link>
                                    <span className="mlr-12 login-line"></span>
                                    <Link to="/" tabIndex={2}>
                                        회원가입
                                    </Link>
                                    <span className="mlr-12 login-line"></span>
                                    <Link to="/" tabIndex={3}>
                                        중소벤처24 통합로그인
                                    </Link>
                                </div>
                            </div>
                            <div className="header-top-button-wrap">
                                <Button
                                    className="eu-eng-btn mr-20"
                                    tabIndex={4}
                                    onClick={openModal}
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

                    {/* ★★★★ 로그인 후 header-top ★★★★ */}
                    {/* <div className="inner">
            <div className="eu-u-hearder-top">
              <div className="mobile-menu-btn">
                <Button className="eu-btn-menu-toggle" onClick={showDrawer}>
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
                    <Badge count={count} size="small" onClick={random}>
                      <img src={bellIcon} alt="bell-icon" width={22} height={23} />
                    </Badge>
                  </a>
                </Dropdown>
                <div className="header-top-link-login">
                  <Link to="/" tabIndex={1}>회원정보</Link>
                  <span className="mlr-12 login-line"></span>
                  <Link to="/" tabIndex={2}>마이페이지</Link>
                  <span className="mlr-12 login-line"></span>
                  <Link to="/" tabIndex={3}>로그아웃</Link>
                  <span className="mlr-12 login-line"></span>
                  <Link to="/">중소벤처24 통합로그인</Link>
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
          </div> */}

                    {/* 대메뉴 */}
                    <div className="inner">
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
                            <div className="eu-main-menu">
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
                            width={"auto"}
                            contentWrapperStyle={{
                                minWidth: "360px",
                                maxWidth: "414px",
                            }}
                            placement="left"
                            onClose={onClose}
                            open={open}
                            title={
                                <>
                                    {/* 로그인 전 - 로그인/회원가입 */}
                                    {/* <div className="header-top-link-logout">
                                        <Link
                                            to="/"
                                            tabIndex={1}
                                            className="ml-auto"
                                        >
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
                                    </div> */}

                                    {/* 로그인 후 - 마이정보 */}
                                    <div className="header-top-link-logout">
                                        <div className="my-wrap ml-auto">
                                            <div className="name">이준호</div>
                                            <div className="info">
                                                [주식회사 경기개발 에스피몰탈
                                                원주공장]
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-top-link-logout mt-14">
                                        <Link to="/" className="ml-auto">
                                            평가하기
                                        </Link>
                                        <img
                                            src={MenuDot}
                                            alt=""
                                            className="login-dot mlr-12"
                                        />
                                        <Link to="/">마이페이지</Link>
                                        <img
                                            src={MenuDot}
                                            alt=""
                                            className="login-dot mlr-12"
                                        />
                                        <Link to="/">로그아웃</Link>
                                    </div>
                                </>
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

                <div className="eu-user-body" onScroll={handleScroll}>
                    <section className="eu-u-main-bg">
                        {/* 메인슬라이드 - slick슬라이드 */}
                        <Slider
                            ref={setMainSliderRef}
                            {...settingsMainBg}
                            className="slideshow-container"
                        >
                            {dataSlider.map((obj, index) => {
                                return (
                                    <>
                                        <div className="flex-row item-center">
                                            <div className="title-wrap flex-col">
                                                <div className="title-en">
                                                    {obj.en}
                                                </div>
                                                <div className="title">
                                                    {obj.title}
                                                </div>
                                                <div className="title-sub">
                                                    {obj.sub}
                                                </div>
                                                <button className="title-more-btn mt-16 ani-btn">
                                                    자세히보기
                                                    <SwapRightOutlined className="text-icon-24 ml-16 mt-2" />
                                                </button>
                                                <div className="title-slideshow-btn-wrap">
                                                    <button
                                                        className="btn-slide"
                                                        onClick={
                                                            MainBgPrevClick
                                                        }
                                                    >
                                                        <ArrowLeftOutlined />
                                                    </button>
                                                    <button
                                                        className="btn-slide"
                                                        onClick={
                                                            MainBgStopSlide
                                                        }
                                                    >
                                                        {playPause === true ? (
                                                            <PauseOutlined className="text-icon-18" />
                                                        ) : (
                                                            <CaretRightOutlined className="text-icon-18 ml-4" />
                                                        )}
                                                    </button>
                                                    <button
                                                        className="btn-slide"
                                                        onClick={
                                                            MainBgNextClick
                                                        }
                                                    >
                                                        <ArrowRightOutlined />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div key={obj.imgPath}>
                                            <img
                                                src={require(`css/images/kosmo-main-bg-${
                                                    index + 1
                                                }.png`)}
                                                alt="배경슬라이드"
                                                className={`kosmo-main-bg-${
                                                    index + 1
                                                }`}
                                            />
                                        </div>
                                    </>
                                );
                            })}
                        </Slider>
                    </section>

                    <section className="eu-u-main-business">
                        <div className="inner">
                            <div className="title-wrap">
                                <div className="title">사업공고</div>
                                <div className="scroll-x-hide ml-60">
                                    {/* 사업공고 슬라이드 탭 */}
                                    <div className="business-tab">
                                        <button className="biz-tab-btn">
                                            전체
                                        </button>
                                        <div className="flex-row-center mlr-60">
                                            <button
                                                className="btn-slide-prev"
                                                onClick={slickPrevClick}
                                            >
                                                <ArrowLeftOutlined />
                                            </button>
                                            <button
                                                className="btn-slide-pause"
                                                onClick={slickStopSlide}
                                            >
                                                {slickPlayPause === true ? (
                                                    <PauseOutlined className="pause ml-2" />
                                                ) : (
                                                    <CaretRightOutlined className="ml-2" />
                                                )}
                                            </button>
                                            <button
                                                className="btn-slide-next"
                                                onClick={slickNextClick}
                                            >
                                                <ArrowRightOutlined />
                                            </button>
                                        </div>
                                        <Slider
                                            className="biz-tab-slide"
                                            ref={setSliderRef}
                                            {...settingsBizTab}
                                        >
                                            <a href={"#/"}>
                                                시범공장<span></span>
                                            </a>
                                            <a href={"#/"}>
                                                업종별특화<span></span>
                                            </a>
                                            <a href={"#/"}>
                                                인공지능스마트공장<span></span>
                                            </a>
                                            <a href={"#/"}>
                                                디지털 클러스터<span></span>
                                            </a>
                                            <a href={"#/"}>
                                                탄소중립형<span></span>
                                            </a>
                                            <a href={"#/"}>
                                                로봇활용제조혁신지원
                                                <span></span>
                                            </a>

                                            <a href={"#/"}>
                                                1.시범공장<span></span>
                                            </a>
                                            <a href={"#/"}>
                                                2.업종별특화<span></span>
                                            </a>
                                            <a href={"#/"}>
                                                3.인공지능스마트공장
                                                <span></span>
                                            </a>
                                            <a href={"#/"}>
                                                4.디지털 클러스터<span></span>
                                            </a>
                                            <a href={"#/"}>
                                                5.탄소중립형<span></span>
                                            </a>
                                            <a href={"#/"}>
                                                6.로봇활용제조혁신지원
                                                <span></span>
                                            </a>
                                        </Slider>
                                    </div>
                                    {/* 사업공고 슬라이드 탭 - end */}
                                </div>
                            </div>

                            {/* 사업공고 컨텐츠 */}
                            <Slider
                                {...settingsBizAnn}
                                className="biz-ann-slide mt-70"
                            >
                                {dataBusiness.map((obj, index) => {
                                    return (
                                        <div className="cont-wrap">
                                            <div className="flex-col-fit">
                                                <div className="cont-sub-title">
                                                    <InfoCircleFilled className="text-icon-16 text-gray-700-icon mr-6" />
                                                    {obj.id}
                                                </div>
                                                <div className="cont-title mt-10 mb-16">
                                                    {obj.bizTitle}
                                                </div>
                                                {obj.date2 === "" ? (
                                                    // 접수기간 1개만 있을때
                                                    <div className="cont-date">
                                                        {obj.date}
                                                        <br />
                                                    </div>
                                                ) : (
                                                    // 접수연장 날짜 까지 2개 있을때
                                                    <div className="cont-date">
                                                        {obj.date}
                                                        <br />
                                                        <div className="text-c">
                                                            {obj.date2}
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="cont-btn flex-row-center">
                                                    <button className="btn ani-btn">
                                                        신청하기
                                                    </button>
                                                    <button className="btn disabled">
                                                        신청종료
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                        {/* 사업공고 컨텐츠 - end */}
                    </section>

                    {/* 퀵메뉴(quick-menu) */}
                    <section className="eu-u-main-quick-menu">
                        <div className="inner">
                            <div className="quick-menu-wrap">
                                {dataQuickMenu.map((obj, index) => {
                                    return (
                                        <>
                                            <a
                                                href={"#/"}
                                                className={
                                                    isMobile === true
                                                        ? scrollTop < 100
                                                            ? `circle-wrap flex-col-center ani-${
                                                                  index + 1
                                                              }`
                                                            : `circle-wrap flex-col-center ani-${
                                                                  index + 1
                                                              } on`
                                                        : scrollTop < 500
                                                        ? `circle-wrap flex-col-center ani-${
                                                              index + 1
                                                          }`
                                                        : `circle-wrap flex-col-center ani-${
                                                              index + 1
                                                          } on`
                                                }
                                            >
                                                <div
                                                    key={obj.imgPath}
                                                    className="circle flex-row-center"
                                                >
                                                    <img
                                                        src={require(`css/images/user-icons/quick-menu-icon-${
                                                            index + 1
                                                        }.png`)}
                                                        alt="바로가기"
                                                    />
                                                </div>
                                                <div className="mt-14">
                                                    {obj.text}
                                                </div>
                                            </a>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* 차트 부분 */}
                    <section className="eu-u-main-chart">
                        <div className="inner">
                            <div className="grid-col-2 gap-col-90 gap-row-60">
                                {/* 왼쪽 */}
                                {/* <div className="chart-wrap"> */}
                                <div
                                    className={
                                        scrollTop < 800
                                            ? `chart-wrap up-down-ani`
                                            : `chart-wrap up-down-ani on`
                                    }
                                >
                                    {/* <div className="title">
                    현재 성장한 많은 기업들이<br/>
                    스마트제조혁신 추진단과 함께하였습니다.
                  </div> */}
                                    <div
                                        className={
                                            scrollTop < 800
                                                ? `title`
                                                : `title ani-delay`
                                        }
                                    >
                                        현재 성장한 많은 기업들이
                                        <br />
                                        스마트제조혁신 추진단과 함께하였습니다.
                                    </div>
                                    <div className="sub-title">
                                        스마트공장 도입 후 성과를 확인하세요.
                                    </div>
                                    <div className="chart-bg ani">
                                        <div className="chart-title">
                                            공정개선 성과
                                        </div>
                                        <div className="chart"></div>
                                    </div>
                                    <div className="chart-bg ani">
                                        <div className="chart-title">
                                            경영개선 성과
                                        </div>
                                        <div className="chart"></div>
                                    </div>
                                </div>
                                {/* 오른쪽 */}
                                {/* <div className="notice-wrap"> */}
                                <div
                                    className={
                                        isMobile === true
                                            ? scrollTop < 400
                                                ? `notice-wrap up-down-ani`
                                                : `notice-wrap up-down-ani on`
                                            : scrollTop < 800
                                            ? `notice-wrap up-down-ani`
                                            : `notice-wrap up-down-ani on`
                                    }
                                >
                                    <div className="eu-noti-tab-wrap">
                                        <Tabs
                                            className="eu-noti-tab"
                                            items={notiTabItems}
                                        ></Tabs>
                                        <Button
                                            className="eu-noti-tab-btn"
                                            icon={<PlusOutlined />}
                                        ></Button>
                                    </div>

                                    {/* 배너 */}
                                    <div className="eu-banner-wrap img-ani-bg">
                                        <div className="sub-title">
                                            스마트제조혁신의 시작 스마트공장
                                        </div>
                                        <div className="title">
                                            2022 스마트제조혁신대전
                                        </div>
                                        <div className="text">
                                            2022-12.05 - 2022-12.07
                                            <br />
                                            aT센터 (서울 서초구 강남대로 27)
                                        </div>
                                        <button className="btn">
                                            자세히보기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section className="eu-u-main-case"> */}
                    <section
                        className={
                            isMobile === true
                                ? scrollTop < 1100
                                    ? `eu-u-main-case up-down-ani`
                                    : `eu-u-main-case up-down-ani on`
                                : scrollTop < 1800
                                ? `eu-u-main-case up-down-ani`
                                : `eu-u-main-case up-down-ani on`
                        }
                    >
                        <div className="inner">
                            <div className="grid-col-4 gap-36">
                                <div className="col-span-1">
                                    <div className="title-wrap">
                                        {/* <div className="title ani-delay">우수구축사례</div> */}
                                        <div
                                            className={
                                                scrollTop < 1800
                                                    ? `title`
                                                    : `title ani-delay`
                                            }
                                        >
                                            우수구축사례
                                        </div>
                                        <div className="sub-title mtb-20 ani">
                                            스마트공장 우수구축사례를
                                            <br />
                                            자세히 보실 수 있습니다.
                                        </div>
                                        <button className="title-more-btn mt-16 mr-4 ani-btn">
                                            자세히보기
                                            <SwapRightOutlined className="text-icon-24 ml-16" />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <Slider
                                        {...settingsCase}
                                        className="case-slide"
                                    >
                                        <div className="content-wrap">
                                            <div className="cont-img">
                                                <img
                                                    src={require("css/images/user-icons/user-dummy-img/dummy-1.png")}
                                                    alt="이미지1"
                                                />
                                            </div>
                                            <div className="cont-text">
                                                <div className="title">
                                                    (주)부성
                                                </div>
                                                <div className="sub">
                                                    직물, 편조원단, 의료복 염색
                                                    가공법
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-wrap">
                                            <div className="cont-img">
                                                <img
                                                    src={require("css/images/user-icons/user-dummy-img/dummy-2.png")}
                                                    alt="이미지2"
                                                />
                                            </div>
                                            <div className="cont-text">
                                                <div className="title">
                                                    (주)엘브리지
                                                </div>
                                                <div className="sub">
                                                    의약품, 건강기능식품 제조 및
                                                    유통
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-wrap">
                                            <div className="cont-img">
                                                <img
                                                    src={require("css/images/user-icons/user-dummy-img/dummy-3.png")}
                                                    alt="이미지3"
                                                />
                                            </div>
                                            <div className="cont-text">
                                                <div className="title">
                                                    (주)삼천산업
                                                </div>
                                                <div className="sub">
                                                    가정용 전기기기 제조업
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-wrap">
                                            <div className="cont-img">
                                                <img
                                                    src={require("css/images/user-icons/user-dummy-img/dummy-4.png")}
                                                    alt="이미지4"
                                                />
                                            </div>
                                            <div className="cont-text">
                                                <div className="title">
                                                    (주)부성
                                                </div>
                                                <div className="sub">
                                                    직물, 편조원단, 의료복 염색
                                                    가공법직물, 편조원단, 의료복{" "}
                                                    <br />
                                                    염색 가공법
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section  className="eu-u-main-media"> */}
                    <section
                        className={
                            isMobile === true
                                ? scrollTop < 1500
                                    ? `eu-u-main-media up-down-ani`
                                    : `eu-u-main-media up-down-ani on`
                                : scrollTop < 2400
                                ? `eu-u-main-media up-down-ani`
                                : `eu-u-main-media up-down-ani on`
                        }
                    >
                        <div className="inner">
                            <div className="title-wrap">
                                {/* <div className="title">미디어센터</div> */}
                                <div
                                    className={
                                        scrollTop < 2400
                                            ? `title`
                                            : `title ani-delay`
                                    }
                                >
                                    미디어센터
                                </div>
                                <div className="sub-title ml-20">
                                    스마트공장 사업관리시스템 공식 유튜브
                                    채널입니다.
                                </div>
                                <button className="title-more-btn ml-auto mr-2 ani-btn">
                                    자세히보기
                                    <SwapRightOutlined className="text-icon-24 ml-16" />
                                </button>
                            </div>
                            <Slider
                                {...settingsMedia}
                                className="media-slide mt-36"
                            >
                                <div className="content-wrap">
                                    <div className="cont-img">
                                        <img
                                            src={require("css/images/user-icons/user-dummy-img/dummy-4.png")}
                                            alt="이미지4"
                                        />
                                    </div>
                                    <div className="cont-text">
                                        <div className="title">
                                            2022년 "제조데이터 분석 기반의
                                            서비타이제이션" 아이디어 발굴 공모전
                                        </div>
                                        <div className="sub">
                                            2022-11-21 16:57:51.0
                                        </div>
                                    </div>
                                </div>
                                <div className="content-wrap">
                                    <div className="cont-img">
                                        <img
                                            src={require("css/images/user-icons/user-dummy-img/dummy-5.png")}
                                            alt="이미지5"
                                        />
                                    </div>
                                    <div className="cont-text">
                                        <div className="title">
                                            2022년 K 인공지능 제조데이터 분석
                                            경진대회 feat. 총 상금 2900만원
                                        </div>
                                        <div className="sub">
                                            2022-10-15 12:10:55.0
                                        </div>
                                    </div>
                                </div>
                                <div className="content-wrap">
                                    <div className="cont-img">
                                        <img
                                            src={require("css/images/user-icons/user-dummy-img/dummy-6.png")}
                                            alt="이미지6"
                                        />
                                    </div>
                                    <div className="cont-text">
                                        <div className="title">
                                            [마이스터백] 제조 AI 마이스터의
                                            백발백중 4편
                                        </div>
                                        <div className="sub">
                                            2022-10-13 22:30:15.0
                                        </div>
                                    </div>
                                </div>
                                <div className="content-wrap">
                                    <div className="cont-img">
                                        <img
                                            src={require("css/images/user-icons/user-dummy-img/dummy-7.png")}
                                            alt="이미지7"
                                        />
                                    </div>
                                    <div className="cont-text">
                                        <div className="title">
                                            [스마트공장 우수사례 기업] 코아비스,
                                            "스마트공장, 수준확인으로 경쟁력
                                        </div>
                                        <div className="sub">
                                            2022-10-03 11:37:51.0
                                        </div>
                                    </div>
                                </div>
                                <div className="content-wrap">
                                    <div className="cont-img">
                                        {/* 이미지가 없을때 */}
                                    </div>
                                    <div className="cont-text">
                                        <div className="title">
                                            2022년 "제조데이터 분석 기반의
                                            서비타이제이션" 아이디어 발굴 공모전
                                            2022년 "제조데이터 분석 기반의
                                            서비타이제이션" 아이디어 발굴 공모전
                                        </div>
                                        <div className="sub">
                                            2022-11-21 16:57:51.0
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </section>

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

export default UserMainLayout;
