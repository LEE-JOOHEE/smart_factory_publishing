import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Layout,
    Button,
    Menu,
    Tooltip,
    Tabs,
    Select,
    DatePicker,
    Input,
    Space,
    Table,
    Tag,
    Upload,
    Modal,
    Badge,
    Calendar,
    Alert,
    Steps,
    Step,
    theme,
    message,
} from "antd";
import moment from "moment";
import dayjs from "dayjs";
import { DownCircleOutlined } from "@ant-design/icons";

import "css/Common.css";
import "css/CommonUsr.css";

// import SubPage22pop1 from "components/layout/html/SubPage22_pop_1";
import SubPage22pop2 from "components/layout/html/SubPage22_pop_2";

import privacyIcon1 from "css/images/user-icons/privacy-icon-1.png";
import privacyIcon2 from "css/images/user-icons/privacy-icon-2.png";
import privacyIcon2_1 from "css/images/user-icons/privacy-icon-2-1.png";
import privacyIcon3 from "css/images/user-icons/privacy-icon-3.png";
import privacyIcon4 from "css/images/user-icons/privacy-icon-4.png";
import privacyIcon5 from "css/images/user-icons/privacy-icon-5.png";
import privacyIcon6 from "css/images/user-icons/privacy-icon-6.png";

const SubPage22_1 = ({ children }) => {
    //제3자 제공내역 상세보기
    const [detailPopupOpen, setDetailPopupOpen] = useState(false);
    const detailClick = () => {
        setDetailPopupOpen(true);
    };

    const smartIntroBizData = {
        data: [
            {
                text: "제 1조. 개인정보의 처리목적, 처리항목, 보유기간 및 개인정보파일 등록현황",
                imgPath1: require("css/images/user-icons/p-icon-mini-1.png"),
                imgPath2: require("css/images/user-icons/p-icon-mini-2.png"),
                imgPath3: require("css/images/user-icons/p-icon-mini-3.png"),
            },
            {
                text: "제 2조. 개인정보의 제 3자 제공",
                imgPath1: require("css/images/user-icons/p-icon-mini-4.png"),
            },
            {
                text: "제 3조. 개인정보 처리 위탁",
                imgPath1: require("css/images/user-icons/p-icon-mini-5.png"),
            },
            {
                text: "제 4조. 정보주체와 법정대리인의 권리· 의무 및 행사방법",
                imgPath1: require("css/images/user-icons/p-icon-mini-6.png"),
                imgPath2: require("css/images/user-icons/p-icon-mini-7.png"),
            },
            {
                text: "제 5조. 개인정보의 파기절차 및 파기방법",
                imgPath1: require("css/images/user-icons/p-icon-mini-8.png"),
            },
            {
                text: "제 6조. 개인정보의 안전성 확보조치",
                imgPath1: require("css/images/user-icons/p-icon-mini-9.png"),
            },
            {
                text: "제 7조. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항",
                imgPath1: require("css/images/user-icons/p-icon-mini-10.png"),
            },
            {
                text: "제 8조. 개인정보 보호책임자 및 담당자 연락처",
                imgPath1: require("css/images/user-icons/p-icon-mini-11.png"),
            },
            {
                text: "제 9조. 개인정보 열람청구",
                imgPath1: require("css/images/user-icons/p-icon-mini-12.png"),
            },
            {
                text: "제 10조. 정보주체의 권익침해 구제방법",
                imgPath1: require("css/images/user-icons/p-icon-mini-13.png"),
            },
            {
                text: "제11조. 개인정보 처리방침 변경",
                imgPath1: require("css/images/user-icons/p-icon-mini-14.png"),
            },
        ],
    };

    return (
        <>
            {/* 개인정보 처리방침 */}
            {/* 이용안내 > 개인정보 처리방침 */}
            <Row>
                <Col span={24}>
                    <div className="sub-tab-cont-wrap privacy">
                        <div className="org-chart-wrap-bdr-blue">
                            <div className="title">
                                스마트공장 사업관리시스템 개인정보처리방침
                                <span className="ml-30 sub-tit">
                                    2023. 7. 25 ~ 현재
                                </span>
                            </div>
                            <div className="font-16-400 lh-190 mt-14 mb-10">
                                중소기업기술정보진흥원 스마트제조혁신추진단(이하
                                “기정원“)이 운영하는 스마트공장
                                사업관리시스템(www.smart-factory.kr)(이하
                                '사업관리시스템') 의 개인정보 처리 시
                                개인정보보호법에 따라 이용자의 개인정보 보호 및
                                권익을 보호하고 개인정보와 관련한 이용자의
                                고충을 원활하게 처리할 수 있도록
                                개인정보처리방침을 준수하고 있습니다.
                            </div>
                            <div className="dot-text pb-0">
                                사업관리시스템은 개인정보처리방침을 개정하는
                                경우 웹사이트 공지사항(또는 개별공지)을 통하여
                                공지하고 있습니다.
                            </div>
                            <div className="dot-text pb-0">
                                본 방침은 2022년 9월 23일부터 시행됩니다.
                            </div>
                        </div>

                        <div className="privacy-tit mt-60">
                            [주요 개인정보 처리 표시(라벨링)]
                        </div>
                        <div className="privacy-icon-wrap mtb-20">
                            <div className="p-icon">
                                <img
                                    src={privacyIcon1}
                                    alt="일반 개인정보 수집"
                                />
                                {/* < 툴팁예제 샘플로 1개 구현 > 
                                    안트디 툴팁에 overlayClassName="p-icon-tooltip" 추가하여 툴팁을 적용하고
                                    title에 툴팁 내용/설명글 들어갑니다.
                                    <span> 태그에 "일반 개인정보 수집" 같은 타이틀 텍스트가 들어가고 
                                    hover 시 툴팁이 뜨는 방식으로 구현하였음
                                */}
                                <Tooltip
                                    placement="bottom"
                                    overlayClassName="p-icon-tooltip"
                                    title={
                                        <>
                                            <div>
                                                이름,생년월일,주소,이메일,전화번호
                                                등
                                            </div>
                                            <div>
                                                ※ 세부항목은 개인정보처리방침
                                                본문 확인
                                            </div>
                                        </>
                                    }
                                >
                                    <span>일반 개인정보 수집</span>
                                </Tooltip>
                            </div>
                            <div className="p-icon">
                                <img
                                    src={privacyIcon2_1}
                                    alt="개인정보 보유기간"
                                />
                                <span>개인정보 보유기간</span>
                            </div>
                            <div className="p-icon">
                                <img
                                    src={privacyIcon3}
                                    alt="개인정보 처리 목적"
                                />
                                <span>개인정보 처리 목적</span>
                            </div>
                            <div className="p-icon">
                                <img
                                    src={privacyIcon4}
                                    alt="개인정보 제3자 제공"
                                />
                                <span>개인정보 제3자 제공</span>
                            </div>
                            <div className="p-icon">
                                <img
                                    src={privacyIcon5}
                                    alt="개인정보 처리 위탁"
                                />
                                <span>개인정보 처리 위탁</span>
                            </div>
                            <div className="p-icon">
                                <img src={privacyIcon6} alt="고충처리부서" />
                                <span>고충처리부서</span>
                            </div>
                        </div>
                        <div className="font-17-500 text-gray-500">
                            ※ 기호에 마우스 커서를 대시면 세부사항을 확인할 수
                            있으며, 자세한 내용은 아래의 개인정보 처리방침을
                            확인하시기 바랍니다.
                        </div>

                        <div className="privacy-tit mt-60 mb-20">목차</div>
                        <div className="smart-intro-biz privacy-index">
                            <div className="flex-row flex-wrap">
                                {smartIntroBizData.data.map((item, index) => {
                                    return (
                                        <div className="items">
                                            {item.text}

                                            <img
                                                src={item.imgPath1}
                                                alt="아이콘"
                                            />
                                            {item.hasOwnProperty("imgPath2") ? (
                                                <img
                                                    src={item.imgPath2}
                                                    alt="아이콘"
                                                />
                                            ) : null}

                                            {item.hasOwnProperty("imgPath3") ? (
                                                <img
                                                    src={item.imgPath3}
                                                    alt="아이콘"
                                                />
                                            ) : null}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="headline mt-60 mb-20 flex-row item-center">
                            제1조 개인정보의 처리목적, 처리항목, 보유기간 및
                            개인정보파일 등록현황
                            <div className="flex-row gap-10 ml-16">
                                <img
                                    src={smartIntroBizData.data[0].imgPath1}
                                    alt="제1조 아이콘"
                                />
                                <img
                                    src={smartIntroBizData.data[0].imgPath2}
                                    alt="제1조 아이콘"
                                />
                                <img
                                    src={smartIntroBizData.data[0].imgPath3}
                                    alt="제1조 아이콘"
                                />
                            </div>
                        </div>
                        <div className="font-16-400 mb-20">
                            ①
                            <span className="text-red ml-4">
                                스마트공장사업관리시스템
                            </span>
                            에서 처리하고 있는 개인정보파일별 개인정보는 다음 각
                            표의 목적 이외의 용도로는 이용되지 않으며, 이용
                            목적이 변경되는 경우에는 개인정보 보호법 제18조에
                            따라 별도의 동의를 받는 등 필요한 조치를 이행할
                            예정입니다.
                        </div>
                        <div className="font-16-400 mb-24">
                            ②
                            <span className="text-red ml-4">
                                스마트공장사업관리시스템
                            </span>
                            은 법령에 따른 개인정보 보유·이용기간 또는
                            정보주체로부터 개인정보를 수집 시에 동의 받은
                            개인정보 보유·이용기간 내에서 개인정보를
                            처리·보유합니다.
                        </div>
                        <div
                            className="usr-table-info"
                            style={{ borderWidth: "1px" }}
                        >
                            <table key="" summary="테이블정보">
                                <colgroup>
                                    <col width="5%" />
                                    <col width="15%" />
                                    <col width="18%" />
                                    <col width="20%" />
                                    <col width="30%" />
                                    <col width="12%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>순번</th>
                                        <th className="plr-10">
                                            개인정보 파일의 명칭
                                        </th>
                                        <th>운영근거</th>
                                        <th>처리목적</th>
                                        <th>개인정보 처리 항목</th>
                                        <th className="plr-10">
                                            처리 및 보유 기간
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-c">1</td>
                                        <td>일반 회원가입정보</td>
                                        <td className="text-c">
                                            정보주체 동의
                                        </td>
                                        <td>
                                            <div className="dot-text">
                                                페이지 회원가입 및 서비스 제공
                                            </div>
                                            <div className="dot-text pb-0">
                                                민원사무 처리
                                            </div>
                                        </td>
                                        <td>
                                            (필수) ID, 성명, 생년월일, 성별,
                                            휴대폰번호, 이메일, 사업자번호,
                                            소속기관명, 기관구분,
                                            회사주소,팩스번호, CI 값 (선택)
                                            자택주소
                                        </td>
                                        <td>회원 탈퇴 시 까지</td>
                                    </tr>
                                    <tr>
                                        <td className="text-c">2</td>
                                        <td>전문가 회원가입정보</td>
                                        <td className="text-c">
                                            정보주체 동의
                                        </td>
                                        <td>
                                            <div className="dot-text">
                                                페이지 회원가입 및 서비스 제공
                                            </div>
                                            <div className="dot-text pb-0">
                                                민원사무 처리
                                            </div>
                                        </td>
                                        <td>
                                            (필수) ID, 성명, 생년월일, 성별,
                                            휴대폰번호, 이메일, 사업자번호,
                                            소속기관명, 기관구분,
                                            회사주소,팩스번호, CI 값 (선택)
                                            자택주소
                                        </td>
                                        <td>회원 탈퇴 시 까지</td>
                                    </tr>
                                    <tr>
                                        <td className="text-c">3</td>
                                        <td>사업 참여자 정보</td>
                                        <td>
                                            중소기업기술혁신촉진법 제9조 제 1항,
                                            같은법 시행령 제22조 및 정보주체동의
                                        </td>
                                        <td>
                                            <div className="dot-text pb-0">
                                                정부지원사업 신청 및 선정기업
                                                관계자 관리
                                            </div>
                                        </td>
                                        <td>
                                            (필수) ID, 성명, 생년월일, 성별,
                                            휴대폰번호, 이메일, 소속기관명,
                                            회사명, 사업자등록번호,
                                            본사전화번호, 본사팩스번호,
                                            본사주소, 대표자명 (선택)
                                            법인등록번호, 대표자이메일,
                                            대표자전화번호, 대표자휴대폰,
                                            홈페이지, 설립년월일, 기관구분
                                        </td>
                                        <td>준영구</td>
                                    </tr>
                                    <tr>
                                        <td className="text-c">4</td>
                                        <td>전문가 정보</td>
                                        <td>
                                            중소기업기술혁신촉진법 제9조 제 1항,
                                            같은법 시행령 제22조 및 정보주체동의
                                        </td>
                                        <td>
                                            <div className="dot-text pb-0">
                                                정부지원사업 평가위원, 전문가
                                                관리
                                            </div>
                                        </td>
                                        <td>
                                            (필수) ID, 성명, 생년월일,
                                            휴대폰번호, 이메일, 사업자번호,
                                            소속기관명, 기관구분, 회사주소,
                                            팩스번호, 회사명, 본사 전화번호,
                                            본사 팩스번호, 본사주소, 직위,
                                            부서,학교, 전공, 이수학위, 입학일자,
                                            증명서류, 근무처, 근무부서, 직급,
                                            입사일자, 업무내용, 증명서류,
                                            사업자등록번호, 대표자명 (선택)
                                            이메일, 산학연 구분, 평가(전문)분야,
                                            지도교수, 졸업일자, 논문명,
                                            연구제목, 발행년월, 주저자, 게재처,
                                            Vol(No), 공동저자, 책임저자,
                                            SCI논문여부, ISBN, 증명서류,
                                            구분(자격증,포상), 취득년도,
                                            자격(포상)명, 발행기관, 자격번호,
                                            포상등급, 증명서류
                                        </td>
                                        <td>준영구</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="font-17-500 text-gray-500 mt-30 mb-62">
                            ※ 자동으로 수집 저장 되는 개인정보 (쿠키 이외에
                            방문일시, 서비스 이용기록, 시스템 로그 등이 자동
                            수집될 수 있습니다.)
                        </div>

                        <div className="usr-table-info">
                            <table key="" summary="테이블정보">
                                <colgroup>
                                    <col width="20%" />
                                    <col width="80%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>
                                            ※ 사용자 웹사이트 방문정보 자동 수집
                                            설치 및 거부에 관한 사항
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="bold bg">
                                            쿠키(cookie) 용어
                                        </td>
                                        <td>
                                            <div className="dot-text">
                                                쿠키는 웹사이트를 운영하는데
                                                이용되는 서버가 이용자의
                                                브라우저에게 보내는 아주 작은
                                                텍스트 파일로 이용자 컴퓨터의
                                                하드디스크에 저장됩니다. 이후
                                                이용자가 웹 사이트에 방문할경우
                                                웹 사이트 서버는 이용자의 하드
                                                디스크에 저장되어 있는 쿠키의
                                                내용을 읽어 이용자의 환경설정을
                                                유지하고 맞춤화된 서비스를
                                                제공하기 위해 이용됩니다.
                                            </div>
                                            <div className="dot-text pb-0">
                                                쿠키는 개인을 식별하는 정보를
                                                자동적/능동적으로 수집하지
                                                않으며, 이용자는 언제든지 이러한
                                                쿠키의 저장을 거부하거나 삭제할
                                                수 있습니다.
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bold bg">
                                            쿠키 사용목적
                                        </td>
                                        <td>
                                            <div className="dot-text pb-0">
                                                이용자들이 방문한 각 서비스와 웹
                                                사이트들에 대한 방문 및
                                                이용형태, 이용자 규모 등 통계를
                                                파악하여 최적화된 웹서비스
                                                운영을 위해 사용합니다.
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bold bg">
                                            쿠키의 설치/운영 및 거부
                                        </td>
                                        <td>
                                            <div className="dot-text">
                                                이용자는 쿠키 설치에 대한
                                                선택권을 가지고 있습니다. 따라서
                                                이용자는 웹브라우저에서 옵션을
                                                설정함으로써 모든 쿠키를
                                                허용하거나, 쿠키가 저장될 때마다
                                                확인을 거치거나, 아니면 모든
                                                쿠키의 저장을 거부할 수도
                                                있습니다.
                                            </div>
                                            <div className="dot-text pb-0">
                                                쿠키 설치 허용 및 거부 여부를
                                                지정하는 방법은 다음과 같습니다.
                                                <p className="mb-4">{`<예시 : Internet Explorer의 경우>`}</p>
                                                <p className="mb-4">
                                                    ① 메뉴 상단의 [도구]
                                                    하부메뉴 클릭합니다.
                                                </p>
                                                <p className="mb-4">
                                                    ② [인터넷 옵션]을
                                                    클릭합니다.
                                                </p>
                                                <p className="mb-4">
                                                    ③ [개인정보 탭]을
                                                    클릭합니다.
                                                </p>
                                                <p className="mb-0">
                                                    ④ [인터넷영역 설정]에서
                                                    원하시는 쿠키보안설정을
                                                    지정하시면 됩니다.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="headline mt-60 mb-20 flex-row item-center">
                            제 2조 개인정보의 제3자 제공
                            <div className="flex-row gap-10 ml-16">
                                <img
                                    src={smartIntroBizData.data[1].imgPath1}
                                    alt="제2조 아이콘"
                                />
                            </div>
                        </div>
                        <div className="text mb-20">
                            <div className="list">
                                ① 스마트공장사업관리시스템은 원칙적으로
                                정보주체의 개인정보를 수집·이용 목적으로 명시한
                                범위 내에서 처리하며,다음 각호의 경우를
                                제외하고는 정보주체의 사전 동의 없이는 본래의
                                목적 범위를 초과하여 처리하거나 제3자에게
                                제공하지 않습니다.
                            </div>
                        </div>
                        <div className="dot-text pb-4">
                            정보주체로부터 별도의 동의를 받는 경우
                        </div>
                        <div className="dot-text pb-4">
                            법률에 특별한 규정이 있는 경우
                        </div>
                        <div className="dot-text pb-4">
                            정보주체 또는 법정대리인이 의사표시를 할 수 없는
                            상태에 있거나 주소불명 등으로 사전 동의를 받을 수
                            없는 경우로서 명백히 정보주체 또는 제3자의 급박한
                            생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는
                            경우
                        </div>
                        <div className="dot-text pb-4">
                            통계작성 및 학술연구 등의 목적을 위하여 필요한
                            경우로서 특정 개인을 알아 볼 수 없는 형태로
                            개인정보를 제공하는 경우
                        </div>
                        <div className="dot-text pb-4">
                            개인정보를 목적 외의 용도로 이용하거나 이를
                            제3자에게 제공하지 아니하면 다른 법률에서 정하는
                            소관 업무를 수행 할 수 없는 경우로서 보호위원회의
                            심의·의결을 거친 경우
                        </div>
                        <div className="dot-text pb-4">
                            조약, 그 밖의 국제협정의 이행을 위하여 외국정보 또는
                            국제기구에 제공하기 위하여 필요한 경우
                        </div>
                        <div className="dot-text pb-4">
                            범죄의 수사와 공소의 제기 및 유지를 위하여 필요한
                            경우
                        </div>
                        <div className="dot-text pb-4">
                            법원의 재판업무 수행을 위하여 필요한 경우
                        </div>
                        <div className="dot-text pb-4">
                            형(形) 및 감호, 보호처분의 집행을 위하여 필요한 경우
                        </div>
                        <div className="text mtb-10">
                            <div className="list flex-row item-center flex-wrap gap-col-20">
                                ② 기정원은 다음과 같이 개인정보를 제3자에게
                                제공하고 있습니다.
                                <Button
                                    // type="link"
                                    className="btn-detail-popup"
                                    onClick={detailClick}
                                >
                                    제3자 제공내역 상세보기
                                </Button>
                                <SubPage22pop2
                                    key="DetailPopup"
                                    detailPopupOpen={detailPopupOpen}
                                    setDetailPopupOpen={setDetailPopupOpen}
                                />
                            </div>
                        </div>

                        <div className="headline mt-60 mb-20 flex-row item-center">
                            제 3조 개인정보처리의 위탁
                            <div className="flex-row gap-10 ml-16">
                                <img
                                    src={smartIntroBizData.data[2].imgPath1}
                                    alt="제3조 아이콘"
                                />
                            </div>
                        </div>
                        <div className="font-16-400 text-black">
                            가. 스마트공장사업관리시스템은 원활한 개인정보
                            업무처리를 위하여 다음과 같이 개인정보 처리업무를
                            위탁하고 있습니다.
                        </div>
                        <div className="font-16 font-bold-700 mt-20">
                            1) 위탁처리 기관 - 위탁기관명　:
                            중소기업기술정보진흥원 부설 스마트제조혁신추진단
                        </div>
                        <div className="dot-text pb-0 mt-14">
                            주소 : 세종특별자치시 집현중앙로79,
                            스마트제조혁신추진단
                        </div>
                        <div className="dot-text pb-0">전화 : 044-300-0973</div>
                        <div className="dot-text pb-0">
                            근무시간 : 09:00 - 18:00
                        </div>

                        <div className="font-16 font-bold-700 mt-30">
                            2) 위탁처리 수행업체 - 수탁업체명 :
                            (주)유클리드소프트
                        </div>
                        <div className="dot-text pb-0 mt-14">
                            주소 : 세종특별자치시 집현중앙7로 6 지식산업센터 A동
                            215호(세종대명벨리온)
                        </div>
                        <div className="dot-text pb-0">전화 : 044-998-0418</div>
                        <div className="dot-text pb-0">
                            근무시간 : 09:00 - 18:00
                        </div>
                        <div className="dot-text pb-0">
                            위탁기간 : 2022.07.14 ~ 2023.12.31
                        </div>

                        <div className="font-16 font-bold-700 mtb-30">
                            3) 위탁내용 - 시스템 운영 및 유지보수 업무 수행에
                            따른 개인정보 취급에 관한 기술적 조치 이행
                        </div>

                        <div className="font-16-400 text-black mb-20">
                            나. 사업관리시스템은 위탁계약 시 개인정보 보호법
                            제26조에 따라 위탁업무 수행목적 외 개인정보
                            처리금지, 기술적ㆍ관리적 보호조치, 재위탁 제한,
                            수탁자에 대한 관리ㆍ감독, 손해배상 등 책임에 관한
                            사항 등 관련법규의 준수사항을 계약서 등 문서에
                            명시하고, 수탁자가 개인정보를 안전하게 처리하는지를
                            감독하고 있습니다.
                        </div>
                        <div className="font-16-400 text-black mb-20">
                            다. 위탁업무의 내용이나 수탁자가 변경 등 개인정보
                            처리방침이 개정될 경우에는 사업관리시스템의 개인정보
                            처리방침을 통해 공개하도록 하겠습니다.
                        </div>
                        <div className="font-16-400 text-black mb-22">
                            라. 수탁담당자, 관리현황 점검결과
                        </div>
                        <div className="usr-table-info">
                            <table key="" summary="테이블정보">
                                <colgroup>
                                    <col width="20%" />
                                    <col width="37%" />
                                    <col width="15%" />
                                    <col width="8%" />
                                    <col width="12%" />
                                    <col width="8%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th rowSpan={2}>
                                            위탁하는 본청부서 소속기관
                                        </th>
                                        <th rowSpan={2}>위탁하는 업무의내용</th>
                                        <th colSpan={3} className="border-b">
                                            수탁자
                                        </th>
                                        <th rowSpan={2}>
                                            관리현황
                                            <br />
                                            점검결과
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>명칭</th>
                                        <th>담당자</th>
                                        <th className="border-r">연락처</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            중소기업기술정보진흥원 부설
                                            스마트제조혁신추진단
                                        </td>
                                        <td>
                                            스마트공장 사업관리 시스템의
                                            정보자원 및 서비스운영관리
                                        </td>
                                        <td className="text-c">
                                            (주)유클리드소프트
                                        </td>
                                        <td className="text-c">홍성우</td>
                                        <td className="text-c">044-998-0418</td>
                                        <td className="text-c">양호</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="headline mt-60 mb-20 flex-row item-center">
                            제 4조 정보주체의 권리, 의무 및 그 행사방법
                            <div className="flex-row gap-10 ml-16">
                                <img
                                    src={smartIntroBizData.data[3].imgPath1}
                                    alt="제4조 아이콘"
                                />
                                <img
                                    src={smartIntroBizData.data[3].imgPath2}
                                    alt="제4조 아이콘"
                                />
                            </div>
                        </div>
                        <div className="font-16-400 text-black">
                            정보주체는 다음과 같은 권리를 행사 할 수 있으며,
                            만14세 미만 아동의 법정대리인은 그 아동의 개인정보에
                            대한 열람, 정정·삭제, 처리정지를 요구할 수 있습니다.
                        </div>
                        <div className="font-16 font-bold-700 mt-20">
                            가. 개인정보 열람 요구
                        </div>
                        <div className="font-16-400 mt-10 mb-14">
                            사업관리시스템에서 보유하고 있는
                            개인정보파일은「개인정보보호법」 제35조 (개인정보의
                            열람)에 따라 자신의 개인정보에 대한 열람을 요구할 수
                            있습니다. 다만, 개인정보 열람 요구는 법 제35조 4항에
                            의하여 다음과 같이 제한될 수 있습니다.
                        </div>
                        <div className="dot-text pb-0">
                            위탁기간 : 위탁계약 종료 시까지
                        </div>
                        <div className="dot-text pb-0">
                            조세의 부과·징수 또는 환급에 관한 업무
                        </div>
                        <div className="dot-text pb-0">
                            「초·중등교육법」및「고등교육법」에 따른 각급
                            학교,「평생교육법」에 따른 평생교육시설, 그 밖의
                            다른 법률에 따라 설치 된
                        </div>
                        <div className="dot-text pb-0">
                            고등교육기관에서의 성적 평가 또는 입학자 선발에 관한
                            업무
                        </div>
                        <div className="dot-text pb-0">
                            학력·기능 및 채용에 관한 시험, 자격 심사에 관한 업무
                        </div>
                        <div className="dot-text pb-0">
                            보상금·급부금 산정 등에 대하여 진행 중인 평가 또는
                            판단에 관한 업무
                        </div>
                        <div className="dot-text pb-0">
                            다른 법률에 따라 진행 중인 감사 및 조사에 관한 업무
                        </div>

                        <div className="font-16 font-bold-700 mt-30">
                            나. 개인정보 정정·삭제 요구
                        </div>
                        <div className="font-16-400 mt-10 mb-14">
                            사업관리시스템에서 보유하고 있는 개인정보파일은
                            「개인정보보호법」 제36조(개인정보의 정정·삭제)에
                            따라 정정·삭제를 요구할 수 있습니다. 다만, 다른
                            법령에서 그 개인정보가 수집 대상으로 명시되어 있는
                            경우에는 그 삭제를 요구할 수 없습니다.
                        </div>

                        <div className="font-16 font-bold-700 mt-30">
                            다. 개인정보 처리정지 요구
                        </div>
                        <div className="font-16-400 mt-10 mb-14">
                            사업관리시스템에서 보유하고 있는 개인정보파일은
                            「개인정보보호법」 제37조(개인정보의 처리정지 등)에
                            따라 처리정지를 요구할 수 있습니다. 다만, 개인정보
                            처리정지 요구 시 법 제37조 2항에 의하여 처리정지
                            요구가 거절될 수 있습니다.
                        </div>
                        <div className="dot-text pb-0">
                            법률에 특별한 규정이 있거나 법령상 의무를 준수하기
                            위하여 불가피한 경우
                        </div>
                        <div className="dot-text pb-0">
                            다른 사람의 생명·신체를 해할 우려가 있거나 다른
                            사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가
                            있는 경우
                        </div>
                        <div className="dot-text pb-0">
                            공공기관이 개인정보를 처리하지 아니하면 다른
                            법률에서 정하는 소관 업무를 수행할 수 없는 경우
                        </div>
                        <div className="dot-text pb-0">
                            개인정보를 처리하지 아니하면 정보주체와 약정한
                            서비스를 제공하지 못하는 등 계약의 이행이 곤란한
                            경우로서 정보주체가 그 계약의 해지 의사를 명확하게
                            밝히지 아니한 경우
                        </div>

                        <div className="headline mt-60 mb-20 flex-row item-center">
                            제 5조 개인정보의 파기
                            <div className="flex-row gap-10 ml-16">
                                <img
                                    src={smartIntroBizData.data[4].imgPath1}
                                    alt="제5조 아이콘"
                                />
                            </div>
                        </div>
                        <div className="font-16-400 text-black">
                            <span className="text-red">
                                “중소기업기술정보진흥원”
                            </span>
                            은 원칙적으로 개인정보 처리목적이 달성된 경우에는
                            지체없이 해당 개인정보를 파기합니다. 파기의 절차,
                            기한 및 방법은 다음과 같습니다.
                        </div>
                        <div className="font-16-400 mt-20">
                            가. 파기절차이용자가 입력한 정보는 목적 달성 후
                            별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부
                            방침 및 기타 관련 법령에 따라 일정기간 저장된 후
                            혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는
                            법률에 의한 경우가 아니고서는 다른 목적으로 이용되지
                            않습니다.
                        </div>
                        <div className="font-16-400 mt-20">
                            나. 파기기한이용자의 개인정보는 개인정보의
                            보유기간이 경과된 경우에는 보유기간의 종료일로부터
                            5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의
                            폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을
                            때에는 개인정보의 처리가 불필요한 것으로 인정되는
                            날로부터 5일 이내에 그 개인정보를 파기합니다.
                        </div>
                        <div className="font-16-400 mtb-20">
                            다. 파기방법전자적 파일 형태의 정보는 기록을 재생할
                            수 없는 기술적 방법을 사용하며 종이에 출력된 개인
                            정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                        </div>
                        <div className="font-16-400">
                            라. 스마트공장사업관리시스템에서 법령에 따라
                            개인정보를 파기하지 않고 보존하는 경우는 다음과
                            같습니다.
                        </div>
                        <div className="dot-text pb-0">
                            보존 개인정보(파일) : 스마트공장사업관리시스템 사업
                            참여자정보, 전문가 정보
                        </div>
                        <div className="dot-text pb-0">
                            보존 근거 : 중소기업기술혁신촉진법 제9조 제 1항,
                            정보주체동의
                        </div>

                        <div className="headline mt-60 mb-20 flex-row item-center">
                            제 6조 개인정보의 안전성 확보 조치
                            <div className="flex-row gap-10 ml-16">
                                <img
                                    src={smartIntroBizData.data[5].imgPath1}
                                    alt="제6조 아이콘"
                                />
                            </div>
                        </div>
                        <div className="font-16-400 text-black">
                            <span className="text-red">
                                “중소기업기술정보진흥원”
                            </span>
                            은 “개인정보보호법” 제29조에 따라 다음과 같이 안전성
                            확보에 필요한 기술적·관리적 및 물리적 조치를 하고
                            있습니다.
                        </div>
                        <div className="font-16-700 text-black mt-20 mb-10">
                            가. 개인정보 취급 직원의 최소화 및 교육
                        </div>
                        <div className="font-16-400">
                            개인정보를 취급하는 직원을 지정하고 담당자에
                            한정시켜 개인정보를 관리하는 대책을 시행하고
                            있습니다.
                        </div>
                        <div className="font-16-700 text-black mt-30 mb-10">
                            나. 정기적인 자체 감사 실시
                        </div>
                        <div className="font-16-400">
                            개인정보 취급 관련 안정성 확보를 위해 정기적으로
                            자체 또는 상금기관의 감사를 실시하고 있습니다.
                        </div>
                        <div className="font-16-700 text-black mt-30 mb-10">
                            다. 내부관리계획의 수립 및 시행
                        </div>
                        <div className="font-16-400">
                            개인정보의 안전한 처리를 위하여 내부관리계획을
                            수립하고 시행하고 있습니다.
                        </div>
                        <div className="font-16-700 text-black mt-30 mb-10">
                            라. 개인정보의 암호화
                        </div>
                        <div className="font-16-400">
                            이용자의 개인정보는 비밀번호는 암호화 되어 저장 및
                            관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는
                            파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을
                            사용하는 등의 별도 보안기능을 사용하고 있습니다.
                        </div>
                        <div className="font-16-700 text-black mt-30 mb-10">
                            마. 해킹 등에 대비한 기술적 대책
                        </div>
                        <div className="font-16-400">
                            사업관리시스템은 해킹이나 컴퓨터 바이러스 등에 의한
                            개인정보 유출 및 훼손을 막기 위하여 보안프로그램을
                            설치하고 주기적인 갱신 ·점검을 하며 외부로부터
                            접근이 통제된 구역에 시스템을 설치하고
                            기술적·물리적으로 감시 및 차단하고 있습니다.
                        </div>
                        <div className="font-16-700 text-black mt-30 mb-10">
                            바. 개인정보에 대한 접근 제한
                        </div>
                        <div className="font-16-400">
                            개인정보를 처리하는 데이터베이스시스템에 대한
                            접근권한의 부여 · 변경 · 말소를 통하여 개인정보에
                            대한 접근통제를 위하여 필요한 조치를 하고 있으며
                            침입차단시스템을 이용하여 외부로부터의 무단 접근을
                            통제 하고 있습니다.
                        </div>
                        <div className="font-16-700 text-black mt-30 mb-10">
                            사. 접속기록의 보관 및 위변조 방지
                        </div>
                        <div className="font-16-400">
                            개인정보처리시스템에 접속한 기록을 최소 6개월 이상
                            보관 · 관리하고 있으며, 접속 기록이 위변조 및 도난
                            ·분실되지 않도록 보안기능 사용하고 있습니다.
                        </div>
                        <div className="font-16-700 text-black mt-30 mb-10">
                            아. 비인가자에 대한 출입 통제
                        </div>
                        <div className="font-16-400">
                            개인정보를 보관하고 있는 물리적 보관 장소를 별도로
                            두고 이에 대해 출입통제 절차를 수립·운영하고
                            있습니다.
                        </div>

                        <div className="headline mt-60 mb-20 flex-row item-center">
                            제 7조 개인정보 자동 수집 장치의 설치·운영 및 거부에
                            관한 사항
                            <div className="flex-row gap-10 ml-16">
                                <img
                                    src={smartIntroBizData.data[6].imgPath1}
                                    alt="제7조 아이콘"
                                />
                            </div>
                        </div>
                        <div className="font-16-400">
                            ① 기정원은 이용자에게 개별적인 맞춤서비스를 제공하기
                            위해 이용정보를 저장하고 수시로 불러오는
                            ‘쿠키(cookie)’를 사용합니다.
                        </div>
                        <div className="font-16-400 mt-14 mb-30">
                            ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가
                            이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며
                            이용자의 PC 컴퓨터내의 하드디스크에 저장되기도
                            합니다.
                        </div>
                        <div className="font-16-400 mb-6">
                            가. 쿠키의 사용목적: 이용자가 방문한 각 서비스와 웹
                            사이트들에 대한 방문 및 이용형태, 인기 검색어,
                            보안접속 여부, 등을 파악하여 이용자에게 최적화된
                            정보 제공을 위해 사용됩니다.
                        </div>
                        <div className="font-16-400 mb-6">
                            나. 쿠키의 설치·운영 및 거부 : 웹브라우저 상단의
                            도구{`>`}인터넷 옵션{`>`}개인정보 메뉴의 옵션 설정을
                            통해 쿠키 저장을 거부 할 수 있습니다.
                        </div>
                        <div className="font-16-400">
                            다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에
                            어려움이 발생할 수 있습니다.
                        </div>

                        <div className="headline mt-60 mb-20 flex-row item-center">
                            제 8조 개인정보 보호책임자 및 담당자 연락처
                            <div className="flex-row gap-10 ml-16">
                                <img
                                    src={smartIntroBizData.data[7].imgPath1}
                                    alt="제8조 아이콘"
                                />
                            </div>
                        </div>
                        <div className="font-16-400 text-black">
                            가. “중소기업기술정보진흥원” 은 개인정보 처리에 관한
                            업무를 총괄해서 책임지고, 개인정보 처리와 관련한
                            정보주체의 불만처리 및 피해구제 등을 위하여 아래와
                            같이 개인정보 보호책임자를 지정하고 있습니다.
                        </div>
                        <div className="font-16-700 text-black mt-20">
                            개인정보 보호책임관 및 담당자 연락처
                        </div>
                        <div
                            className="usr-table-info mt-16"
                            style={{ borderWidth: "1px" }}
                        >
                            <table
                                key=""
                                summary="테이블정보"
                                className="text-c"
                            >
                                <colgroup>
                                    <col width="20%" />
                                    <col width="20%" />
                                    <col width="15%" />
                                    <col width="15%" />
                                    <col width="30%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>직책</th>
                                        <th>성명</th>
                                        <th>연락처</th>
                                        <th>이메일주소</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>개인정보 보호 책임자</td>
                                        <td>본부장</td>
                                        <td>최병남</td>
                                        <td>044-300-0910</td>
                                        <td>
                                            <a href="mailto:bond@tipa.or.kr">
                                                bond@tipa.or.kr
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>개인정보 보호 담당부서</td>
                                        <td>주임</td>
                                        <td>최욱진</td>
                                        <td>044-300-0973</td>
                                        <td>
                                            <a href="mailto:ukjin86@tipa.or.kr">
                                                ukjin86@tipa.or.kr
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="font-16-400 text-black mt-24">
                            나. 정보주체는 사업관리시스템의 서비스(또는 사업)를
                            이용하시면서 발생한 모든 개인정보 보호 관련 문의,
                            불만처리, 피해구제 등에 관한 사항을 개인정보
                            보호책임자 및 담당부서로 문의하실 수 있습니다.
                            “중소기업기술정보진흥원” 은 정보주체의 문의에 대해
                            지체 없이 답변 및 처리해드릴 것입니다.
                        </div>

                        <div className="headline mt-60 mb-20 flex-row item-center">
                            제 9조 개인정보 열람청구
                            <div className="flex-row gap-10 ml-16">
                                <img
                                    src={smartIntroBizData.data[8].imgPath1}
                                    alt="제9조 아이콘"
                                />
                            </div>
                        </div>
                        <div className="font-16-400 text-black">
                            가. 정보주체는 개인정보 보호법 제35조에 따른
                            개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.
                            스마트제조혁신추진단('스마트공장
                            사업관리시스템')은(는) 정보주체의 개인정보
                            열람청구가 신속하게 처리되도록 노력하겠습니다.
                        </div>
                        <div className="font-16-700 text-black mt-20">
                            개인정보 열람청구 접수·처리 부서
                        </div>
                        <div
                            className="usr-table-info mt-16"
                            style={{ borderWidth: "1px" }}
                        >
                            <table
                                key=""
                                summary="테이블정보"
                                className="text-c"
                            >
                                <thead>
                                    <tr>
                                        <th>부서명</th>
                                        <th>담당자</th>
                                        <th>연락처</th>
                                        <th>이메일주소</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>혁신기반조성실</td>
                                        <td>최욱진 주임</td>
                                        <td>044-300-0973</td>
                                        <td>
                                            <a href="mailto:ukjin86@tipa.or.kr">
                                                ukjin86@tipa.or.kr
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="font-16-400 text-black mt-24">
                            나. 정보주체께서는 제가항의 열람청구 접수 · 처리부서
                            이외에, 행정안전부의 ‘개인정보보호 종합지원 포털’
                            웹사이트
                            <a
                                href="http://www.privacy.go.kr"
                                target="_black"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                (www.privacy.go.kr)
                            </a>
                            를 통하여서도 개인정보 열람청구를 하실 수 있습니다.
                        </div>
                        <div className="font-16-700 text-black mt-20">
                            행정안전부 개인정보보호 종합지원 포털 → 개인정보
                            민원 → 개인정보 열람등 요구(본인확인을 위하여
                            아이핀(I-PIN)이 있어야 함)
                        </div>

                        <div className="headline mt-60 mb-20 flex-row item-center">
                            제 10조 정보주체의 권익침해 구제방법
                            <div className="flex-row gap-10 ml-16">
                                <img
                                    src={smartIntroBizData.data[9].imgPath1}
                                    alt="제10조 아이콘"
                                />
                            </div>
                        </div>
                        <div className="font-16-400 text-black">
                            개인정보주체는 개인정보침해로 인한 피해를 구제받기
                            위하여 개인정보 분쟁조정위원회, 한국인터넷진흥원
                            개인정보 침해신고센터 등에 분쟁해결이나 상담 등을
                            신청할 수 있습니다.
                        </div>
                        <div className="font-16-700 text-black mt-20">
                            개인정보 분쟁조정위원회 (개인정보분쟁조정위원회
                            운영)
                        </div>
                        <div
                            className="usr-table-info mt-16"
                            style={{ borderWidth: "1px" }}
                        >
                            <table
                                key=""
                                summary="테이블정보"
                                className="text-c"
                            >
                                <colgroup>
                                    <col width="20%" />
                                    <col width="20%" />
                                    <col width="15%" />
                                    <col width="15%" />
                                    <col width="30%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>소관업무</th>
                                        <th>홈페이지</th>
                                        <th>연락처</th>
                                        <th>팩스</th>
                                        <th>주소</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            개인정보 분쟁조정신청, 집단분쟁조정
                                            (민사적 해결)
                                        </td>
                                        <td>
                                            <a
                                                href="http://www.kopico.go.kr"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                www.kopico.go.kr
                                            </a>
                                        </td>
                                        <td>(02) 2100-2499</td>
                                        <td>(02) 2100-2485</td>
                                        <td>
                                            (03171) 서울특별시 종로구 세종대로
                                            209 정부서울청사 4층
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="font-16-700 text-black mt-20">
                            개인정보 침해신고센터 (한국인터넷진흥원 운영)
                        </div>
                        <div
                            className="usr-table-info mt-16"
                            style={{ borderWidth: "1px" }}
                        >
                            <table
                                key=""
                                summary="테이블정보"
                                className="text-c"
                            >
                                <colgroup>
                                    <col width="20%" />
                                    <col width="20%" />
                                    <col width="15%" />
                                    <col width="45%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>소관업무</th>
                                        <th>홈페이지</th>
                                        <th>전화</th>
                                        <th>주소</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            개인정보 침해사실 신고,
                                            <br /> 상담 신청
                                        </td>
                                        <td>
                                            <a
                                                href="http://privacy.kisa.or.kr"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                privacy.kisa.or.kr
                                            </a>
                                        </td>
                                        <td>(국번없이) 118</td>
                                        <td>
                                            (05717) 서울시 송파구 중대로 135
                                            한국인터넷진흥원
                                            개인정보침해신고센터
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="font-16-400 text-black mt-24">
                            대검찰청 사이버범죄수사단 : 02-3480-3573
                            <a
                                href="http://www.spo.go.kr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                (www.spo.go.kr)
                            </a>
                        </div>
                        <div className="font-16-400 text-black">
                            경찰청 사이버범죄수사단 : 1566-0112
                            <a
                                href="http://netan.go.kr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                (www.netan.go.kr)
                            </a>
                        </div>

                        <div className="headline mt-60 mb-20 flex-row item-center">
                            제 11조 개인정보 처리방침 변경
                            <div className="flex-row gap-10 ml-16">
                                <img
                                    src={smartIntroBizData.data[10].imgPath1}
                                    alt="제11조 아이콘"
                                />
                            </div>
                        </div>
                        <div className="font-16-400 text-black mb-20">
                            이 개인정보처리방침은 2022년 10월 06일부터
                            적용됩니다. 이전의 개인정보보호정책은 아래에서
                            확인하실 수 있습니다.
                        </div>
                        <div className="dot-text pb-0">
                            <a href="#/">
                                2012년 6월 1일 ~ 2016년 6월 13일 적용지침 보기
                            </a>
                        </div>
                        <div className="dot-text pb-0">
                            <a href="#/">
                                2016년 6월 14일 ~ 2016년 7월 31일 적용지침 보기
                            </a>
                        </div>
                        <div className="dot-text pb-0">
                            <a href="#/">
                                2016년 8월 01일 ~ 2016년 10월 25일 적용지침 보기
                            </a>
                        </div>
                        <div className="dot-text pb-0">
                            <a href="#/">
                                2016년 10월 26일 ~ 2017년 7월 25일 적용지침 보기
                            </a>
                        </div>
                        <div className="dot-text pb-0">
                            <a href="#/">
                                2017년 7월 26일 ~ 2017년 8월 09일 적용지침 보기
                            </a>
                        </div>
                        <div className="dot-text pb-0">
                            <a href="#/">
                                2017년 8월 10일 ~ 2019년 1월 16일 적용지침 보기
                            </a>
                        </div>
                        <div className="dot-text pb-0">
                            <a href="#/">
                                2019년 1월 17일 ~ 2020년 9월 22일 적용지침 보기
                            </a>
                        </div>
                        <div className="dot-text pb-0">
                            <a href="#/">
                                2020년 9월 23일 ~ 2022년 10월 06일 적용지침 보기
                            </a>
                        </div>
                        <div className="dot-text pb-0">
                            <a href="#/">
                                2022년 10월 06일 ~ 2023년 07월 25일 적용지침
                                보기
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default SubPage22_1;
