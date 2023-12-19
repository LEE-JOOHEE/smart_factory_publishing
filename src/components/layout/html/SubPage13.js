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
    Input,
    Space,
    Table,
    Tag,
    Upload,
    Modal,
    Badge,
    Calendar,
    Alert,
} from "antd";
import moment from "moment";
import dayjs from "dayjs";
import {
    DownloadOutlined,
    FolderOpenOutlined,
    StarOutlined,
    UploadOutlined,
} from "@ant-design/icons";

import "css/Common.css";
import "css/CommonUsr.css";

import captainPicture from "css/images/captain-picture.png";
import captainPicture2 from "css/images/captain-picture-2.png";

const SubPage13 = ({ children }) => {
    return (
        <>
            {/* 단장인사말 */}
            {/* 기관소개 > 단장인사말 */}
            <Row>
                <Col span={24}>
                    <div className="captain-wrap grid-col-12">
                        {/* <div className="captain-picture col-span-5">
                            <img src={captainPicture} alt="단장인사말" />
                        </div> */}
                        <div className="captain-greetings col-span-7">
                            <div className="tit">
                                안녕하십니까. 스마트제조혁신추진단장
                                안광현입니다.
                            </div>
                            <div className="sub-tit mt-20 mb-30">
                                스마트제조혁신추진단은 제조업에 혁신이 일어나야
                                대한민국 경제가 살아날 수 있다는 국민과 정부의
                                열망이 담긴 기관입니다.
                            </div>
                            <div className="text-90 mb-28">
                                우선, 추진단은 2022년까지 스마트공장 3만개
                                구축을 통해 우리의 중소기업이 글로벌
                                강소기업으로써 성장해나갈 수 있도록 최선을
                                다하겠습니다. 이를 위해 업종별·지역별로 레벨
                                1부터 5까지 단계별 표준모델을 만들어 많은
                                수요기업과 공급기업이 벤치마킹 할 수 있도록
                                세분화된 체계를 만들겠습니다.
                            </div>
                            <div className="text-90">
                                또한 스마트공장 보급·확산을 넘어 중소기업이
                                스스로하기 어려운 데이터 분석을 돕는 플랫폼 구축
                                사업에도 앞장서겠습니다.
                                <br />
                                추진단은 정부와 협업해 클라우드와 AI·슈퍼컴
                                기반의 데이터센터를 구축, 중소기업도 비용 걱정
                                없이 데이터를 저장하고 분석해 국내뿐 아니라
                                글로벌 시장에서도 앞선 경쟁력을 갖도록 투자와
                                지원을 아끼지 않겠습니다.
                            </div>
                            <div className="text-100">
                                대한민국 경제의 근간을 마련하는 중소제조업이
                                새롭게 도약할 수 있도록 스마트제조혁신추진단이
                                함께 하겠습니다.
                            </div>
                            <div className="line"></div>
                            <div className="captain">
                                스마트제조혁신추진단장
                                <span className="font-bold-500 text-black ml-6">
                                    안광현
                                </span>
                            </div>
                        </div>
                        <div className="captain-picture col-span-5">
                            <img src={captainPicture2} alt="단장인사말" />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default SubPage13;
