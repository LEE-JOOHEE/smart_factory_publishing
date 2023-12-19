import React, { useState, useEffect, useRef } from "react";
import { Layout, Button, Menu, Tooltip, Tabs, Select, Empty, Modal, Row, Col,
  Space, Badge, Dropdown, message, Divider, Drawer } from "antd";
import { useHistory, Link } from "react-router-dom";
import logoUserMainFull from "css/images/logo-user-main-full.png";
import logoUserMainFullEng from "css/images/logo-user-main-full-eng.png";
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
import 'css/CommonUsr.css';

import UserMainNoticeBoard from 'components/layout/UserMainNoticeBoard';

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import "css/slick/slick.css";
import "css/slick/slick-theme.css";
import bellIcon from "css/images/user-icons/bell-icon.png";
import tabletLogo from "css/images/logo-tablet.png";
import tabletLogoEng from "css/images/logo-tablet-eng.png";

// const { Header, Sider, Content, Footer } = Layout;

const UserMainEngLayout = ({ direction }) => {
  const items = [...route.result];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  //메뉴구조도
  const [ isDropMenuOpen, setDropMenuOpen ] = useState(false);
  const openDropMenu = (e) => {
    e.stopPropagation(); // 이벤트 캡쳐링 방지
    if(isDropMenuOpen === false){
      setDropMenuOpen(true);
    }
  }

  //메인슬라이드(slick-slider)
  const dataSlider = [
    {
      imgPath: "css/images/kosmo-main-bg-1.png",
      en: "Smart Factory Business Management System",
      title: "스마트공장 견학",
      engtit: "Smart Factory in Korea",
      sub: "스마트제조혁신의 함성, 함께 성장하는 대한민국",
      engsub: "Shouts of smart manufacturing innovation, Korea growing together",
    },
    {
      imgPath: "css/images/kosmo-main-bg-2.png",
      en: "Smart Factory Business Management System",
      title: "공급기업검색",
      engtit: "Smart Factory in Korea",
      sub: "내공장과 가장 잘맞는 공급지역을 안내해드립니다",
      engsub: "Shouts of smart manufacturing innovation, Korea growing together",
    },
  ]

  const[ mainSliderRef , setMainSliderRef] = useState(null);
  const [playPause, setPlayPause] = useState(true);
  const MainBgStopSlide = () => {
    if (playPause) {
      setPlayPause(false);
      mainSliderRef?.slickPause();
    }else {
      setPlayPause(true);
      mainSliderRef?.slickPlay();
    }
  }
  const MainBgPrevClick = () => {
    mainSliderRef?.slickPrev();
  }
  const MainBgNextClick = () => {
    mainSliderRef?.slickNext();
  }

  const settingsMainBg = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay : true,
    autoplaySpeed : 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  //사업공고
  const dataBusiness = [
    {
      id: "스마트역량강화1",
      bizTitle: "(선정기업 대상) 2022년 대중소상생형 삼성디스플레이스마트공장 구축 지원사업",
      date: "2022-09-14 00:00 ~ 2022-11-11 18:00",
      date2: ""
    },
    {
      id: "스마트역량강화2",
      bizTitle: "2023년 스마트공장 수준확인 사업 공고",
      date: "2023-02-13 09:00 ~ 예산소진시 까지",
      date2: ""
    },
    {
      id: "	스마트역량강화3",
      bizTitle: "	(선정기업대상) 한국산업단지공단(인천남동스마트그린산단)_2021년 업종별 특화 스마트공장 구축지원 사업 공고",
      date: "2023-01-31 14:00 ~ 2023-03-02 17:00",
      date2: "( 2023-01-31 14:00 ~ 2023-03-02 17:00 )"
    },
    {
      id: "스마트역량강화4",
      bizTitle: "(선정기업 대상) 2022년 대중소상생형 삼성디스플레이스마트공장 구축 지원사업",
      date: "2022-09-14 00:00 ~ 2022-11-11 18:00",
      date2: ""
    },
    {
      id: "스마트역량강화5",
      bizTitle: "(선정기업 대상) 2022년 대중소상생형 삼성디스플레이스마트공장 구축 지원사업",
      date: "2022-09-14 00:00 ~ 2022-11-11 18:00",
      date2: ""
    },
    {
      id: "스마트역량강화6",
      bizTitle: "(선정기업 대상) 2022년 대중소상생형 삼성디스플레이스마트공장 구축 지원사업",
      date: "2022-09-14 00:00 ~ 2022-11-11 18:00",
      date2: ""
    },
  ]

  //사업공고 탭메뉴 슬라이드(slick-slider)
  const [ slickPlayPause, setSlickPlayPause ] = useState(true); //처음에 auto(재생중)
  const [ sliderRef, setSliderRef ] = useState(null);
  const slickStopSlide = () => {
    if(slickPlayPause){
      setSlickPlayPause(false);
      sliderRef?.slickPause();
    }else{
      setSlickPlayPause(true);
      sliderRef?.slickPlay();
    }
  }
  const slickPrevClick = () => {
    sliderRef?.slickPrev();
  }
  const slickNextClick = () => {
    sliderRef?.slickNext();
  }
  const settingsBizTab = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay : true,
    autoplaySpeed : 8000,
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
    autoplay : true,
    autoplaySpeed : 3000,
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
        }
      },{
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
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
  ]

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
    },
    {
      label: "홍보자료",
      key: "홍보자료",
    },
  ]);

  //우수구축사례 슬라이드(slick-slider)
  const settingsCase = {
    dots: false,
    infinite: true,    //무한 반복
    speed: 100,
    autoplay : true,    //자동 스크롤
    autoplaySpeed : 5000,
    slidesToShow: 3,    //한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1,  //스크롤 한번에 움직일 컨텐츠 개수
    initialSlide: 0,    //처음에 보여질 슬라이드 번호
    nextArrow: <ArrowLeftOutlined />,
    prevArrow: <ArrowRightOutlined />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        }
      },{
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  //미디어센터 - 유투브(slick-slider)
  const settingsMedia = {
    dots: false,
    infinite: true,
    speed: 100,
    autoplay : true,
    autoplaySpeed : 5000,
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
        }
      },{
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },{
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };


  //안트디 알림 - (임시)카운트 랜덤
  const [count, setCount] = useState(2);
  const random = () => {
    const newCount = Math.floor(Math.random() * 100);
    setCount(newCount);
  };
  const bellItems = [
    {
      label: '전체알림',
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '평가 승인요청',
      key: '2',
    },
    {
      label: '수행일지확인',
      key: '3',
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
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  },[])

  return (
    <>

      <div className="eu-user-container" onClick={() => setDropMenuOpen(false)}>

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
                <Button className="eu-btn-menu-toggle" onClick={showDrawer}>
                  <MenuOutlined />
                </Button>
              </div>
              {/* 스크롤 확인용 */}
              {/* <h3>Scroll top: <b>{scrollTop}</b></h3> */}
              <div className="header-top-button-wrap ml-auto">
                <Button className="eu-eng-btn" tabIndex={4}>KOR</Button>
              </div>
              <a href="#/" className="tablet-logo">
                <img src={tabletLogoEng} alt="테블릿로고" className="tablet-logo" />
              </a>
            </div>
          </div>

          {/* 대메뉴 */}
          <div className="inner">
            <div className="eu-u-header-menu">
              <div className="eu-kosmo-logo-user eng">
                <Link to="/" tabIndex={9}><img src={logoUserMainFullEng} alt="user-main-logo-full" className="logo-full mt-4" /></Link>
                <Link to="/" tabIndex={9}><img src={logoUserMain} alt="user-main-logo" className="logo-mini mt-6" /></Link>
              </div>
              <div className="eu-main-menu eng">
                <Link to="/" tabIndex={10} onMouseEnter={openDropMenu} onKeyDown={openDropMenu}><span>About US</span></Link>
                <Link to="/" tabIndex={16} onMouseEnter={openDropMenu}><span>What We Do</span></Link>
                <Link to="/" tabIndex={23} onMouseEnter={openDropMenu}><span>What’s New</span></Link>
                <Link to="/" tabIndex={41} onMouseEnter={openDropMenu}><span>Contact Us</span></Link>
              </div>
            </div>
          </div>

          {/* 모바일 메뉴 - 영어일때 어떻게 할지 협의 */}
          <div className="">
            <Drawer 
              className="mobile-drawer-menu"
              width={360}
              style={{minWidth: '360px'}}
              placement="left" 
              onClose={onClose} 
              open={open}
              title={
                <div className="header-top-link-logout text-r">
                  <Link to="/" tabIndex={1}>로그인</Link>
                  <img src={MenuDot} alt="" className="login-dot mlr-12" />
                  <Link to="/" tabIndex={2}>회원가입</Link>
                </div>
              }
              closeIcon={
                <Button className="eu-btn-menu-toggle">
                  <CloseOutlined className="text-blue" />
                </Button>
              }
            >
              <div className="" style={{overflow: "auto"}}>
                <Menu
                  mode={"inline"}
                  theme={"light"}
                  items={items}
                  defaultOpenKeys={[items[0].key]}
                  expandIcon={(icon) =>
                    icon.isOpen ? 
                    <MinusOutlined style={{color : "#A0A0A0"}} /> : 
                    <PlusOutlined />
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
                <Link to="/" className="mr-8"><img src={facebook} alt="facebook" /></Link>
                <Link to="/" className="mr-8"><img src={Youtube} alt="Youtube" /></Link>
                <Link to="/" className="mr-8"><img src={Band} alt="Band" /></Link>
                <Link to="/"><img src={Instagram} alt="Instagram" /></Link>
              </div>
            </Drawer>
          </div>
        </div>    
        {/* eu-user-header - end */}


        <div className="eu-user-body" onScroll={handleScroll}>
          <section className="eu-u-main-bg">
            {/* 메인슬라이드 - slick슬라이드 */}
            <Slider ref={setMainSliderRef} {...settingsMainBg} className="slideshow-container">
              {dataSlider.map((obj, index) => {
                return(
                  <>
                    <div className="flex-row eng">
                      <div className="title-wrap flex-col eng">
                        <div className="title-en">{obj.en}</div>
                        <div className="title eng">{obj.engtit}</div>
                        <div className="title-sub eng">{obj.engsub}</div>
                        <div className="title-slideshow-btn-wrap">
                          <button className="btn-slide" onClick={MainBgPrevClick}><ArrowLeftOutlined /></button>
                          <button className="btn-slide" onClick={MainBgStopSlide}>
                            {playPause === true 
                              ? <PauseOutlined className="text-icon-18" /> 
                              : <CaretRightOutlined className="text-icon-18 ml-4" />}
                          </button>
                          <button className="btn-slide" onClick={MainBgNextClick}><ArrowRightOutlined /></button>
                        </div>
                      </div>
                    </div>
                    <div key={obj.imgPath}>
                      <img src={require(`css/images/kosmo-main-bg-${index + 1}.png`)} alt="배경슬라이드" className={`kosmo-main-bg-${index + 1}`} />
                    </div>
                  </>
                )
              })}
            </Slider>
          </section>


          <section className="eu-u-main-case eng">
            <div className="inner">
              <div className="grid-col-4 gap-36">
                <div className="col-span-1">
                  <div className="title-wrap">
                    <div className="title ani-delay eng">Best Practices</div>
                    <div className="sub-title mtb-20 ani">
                      Smart factory explanation construction<br/> case You can see it in detail.</div>
                    <button className="title-more-btn mt-16 mr-4 ani-btn">more<SwapRightOutlined className="text-icon-24 ml-16" /></button>
                  </div>
                </div>
                <div className="col-span-3">
                  <Slider {...settingsCase} className="case-slide">
                    <div className="content-wrap">
                      <div className="cont-img">
                        <img src={require("css/images/user-icons/user-dummy-img/dummy-1.png")} alt="이미지1" />
                      </div>
                      <div className="cont-text">
                        <div className="title">Buseong Co. Ltd.</div>
                        <div className="sub">Textile, knitted fabrics</div>
                      </div>
                    </div>
                    <div className="content-wrap">
                      <div className="cont-img">
                        <img src={require("css/images/user-icons/user-dummy-img/dummy-2.png")} alt="이미지2" />
                      </div>
                      <div className="cont-text">
                        <div className="title">Samcheon Industry Co., Ltd.</div>
                        <div className="sub">Manufacture of electrical</div>
                      </div>
                    </div>
                    <div className="content-wrap">
                      <div className="cont-img">
                        <img src={require("css/images/user-icons/user-dummy-img/dummy-3.png")} alt="이미지3" />
                      </div>
                      <div className="cont-text">
                        <div className="title">Shine Optic Co., Ltd.</div>
                        <div className="sub">Manufacturing of optical lenses</div>
                      </div>
                    </div>
                    <div className="content-wrap">
                      <div className="cont-img">
                        <img src={require("css/images/user-icons/user-dummy-img/dummy-4.png")} alt="이미지4" />
                      </div>
                      <div className="cont-text">
                        <div className="title">Buseong Co. Ltd.</div>
                        <div className="sub">Textile, knitted fabrics</div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>

          {/* <section  className="eu-u-main-media"> */}
          <section className={
            isMobile === true ? (
              scrollTop < 300 ? `eu-u-main-media eng up-down-ani` : `eu-u-main-media eng up-down-ani on`
            ) : (
              scrollTop < 400 ? `eu-u-main-media eng up-down-ani` : `eu-u-main-media eng up-down-ani on`
            )
          }>
            <div className="inner">
              <div className="title-wrap">
                <div className={scrollTop < 400 ? `title eng` : `title eng ani-delay`}>News Briefs</div>
                <div className="sub-title mlr-20">This is the official YouTube channel for Smart Factory Business Management System.</div>
                <button className="title-more-btn ml-auto mr-2 ani-btn">more<SwapRightOutlined className="text-icon-24 ml-16" /></button>
              </div>
              <Slider {...settingsMedia} className="media-slide mt-36">
                <div className="content-wrap">
                  <div className="cont-img">
                    <img src={require("css/images/user-icons/user-dummy-img/dummy-4.png")} alt="이미지4" />
                  </div>
                  <div className="cont-text">
                    <div className="title">
                      2022년 "제조데이터 분석 기반의 서비타이제이션" 아이디어 발굴 공모전
                    </div>
                    <div className="sub">2022-11-21 16:57:51.0</div>
                  </div>
                </div>
                <div className="content-wrap">
                  <div className="cont-img">
                    <img src={require("css/images/user-icons/user-dummy-img/dummy-5.png")} alt="이미지5" />
                  </div>
                  <div className="cont-text">
                    <div className="title">
                      2022년 K 인공지능 제조데이터 분석 경진대회 feat. 총 상금 2900만원
                    </div>
                    <div className="sub">2022-10-15 12:10:55.0</div>
                  </div>
                </div>
                <div className="content-wrap">
                  <div className="cont-img">
                    <img src={require("css/images/user-icons/user-dummy-img/dummy-6.png")} alt="이미지6" />
                  </div>
                  <div className="cont-text">
                    <div className="title">
                      [마이스터백] 제조 AI 마이스터의 백발백중 4편
                    </div>
                    <div className="sub">2022-10-13 22:30:15.0</div>
                  </div>
                </div>
                <div className="content-wrap">
                  <div className="cont-img">
                    <img src={require("css/images/user-icons/user-dummy-img/dummy-7.png")} alt="이미지7" />
                  </div>
                  <div className="cont-text">
                    <div className="title">
                      [스마트공장 우수사례 기업] 코아비스, "스마트공장, 수준확인으로 경쟁력
                    </div>
                    <div className="sub">2022-10-03 11:37:51.0</div>
                  </div>
                </div>
                <div className="content-wrap">
                  <div className="cont-img">
                    {/* 이미지가 없을때 */}
                  </div>
                  <div className="cont-text">
                    <div className="title">
                      2022년 "제조데이터 분석 기반의 서비타이제이션" 아이디어 발굴 공모전
                      2022년 "제조데이터 분석 기반의 서비타이제이션" 아이디어 발굴 공모전
                    </div>
                    <div className="sub">2022-11-21 16:57:51.0</div>
                  </div>
                </div>
              </Slider>
            </div>
          </section>

          <div className="eu-user-footer eng">
            <div className="inner">
              {/* <div className="grid-col-12 item-center gap-col-30 gap-row-10">
                <div className="col-span-7">
                  <div className="flex-row flex-wrap link gap-col-38">
                    <a href={"#/"} className="text-navy">개인정보처리방침</a>
                    <a href={"#/"}>이용약관</a>
                    <a href={"#/"}>이메일무단수집 거부</a>
                  </div>
                  <div className="flex-row flex-wrap address mt-20 mb-10">
                    [30141] 세종특별자치시 집현중앙로 79,  중소기업기술정보진흥원 부설 스마트제조혁신추진단
                    <br/>대표전화 : 1357
                  </div>
                </div>

                <div className="col-span-5">
                  <div className="flex-row gap-10">
                    <Select 
                      style={{ width : "250px" }}
                      className="ml-auto"
                      onChange={handleChange}
                      defaultValue="관련사이트"
                      dropdownAlign={{ offset: [0, 0] }}
                      placeholder="선택하세요"
                      options={[
                        {
                          value: '1',
                          label: '1',
                        },
                      ]}
                    />
                    <Select 
                      style={{ width : "300px" }}
                      onChange={handleChange}
                      defaultValue="중소기업정보망"
                      dropdownAlign={{ offset: [0, 0] }}
                      placeholder="선택하세요"
                      options={[
                        {
                          value: '1',
                          label: '1',
                        },
                      ]}
                    />
                  </div>
                </div>
              </div> */}
              {/* <div className="grid-col-1"> */}
                <div className="flex-col gap-10 copyright">
                  <span>79 Jiphyeonjungangro, Sejong-si, Republic of Korea</span>
                  <span>Copyright ⓒ Kosmo. All Rights Reserved.</span>
                </div>
              {/* </div> */}
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

export default UserMainEngLayout;