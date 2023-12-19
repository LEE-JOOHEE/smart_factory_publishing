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

import noEmail from "css/images/user-icons/no-email.png";
import { createGlobalStyle } from "styled-components";

const SubPage27 = ({ children }) => {
    const rows = [];
    for (let i = 0; i < 11; i++) {
        rows.push(
            <div className="sol-chart-col" key={i}>
                <div className="sol-chart">{i + 1}</div>
                <div className="name">식별시스템 (RFID,바코드)</div>
            </div>
        );
    }

    return (
        <>
            {/* 솔루션모니터링 */}
            {/* ??? > 솔루션모니터링 */}
            <Row>
                <Col span={24}>
                    <div className="solution-monitoring">
                        <div className="monitoring grid-col-8">
                            <div className="tit col-span-2">
                                <span className="font-bold-500">현재</span>
                                <span className="font-bold-900 text-blue mlr-4">
                                    7,550
                                </span>
                                개사 모니터링 참여
                            </div>
                            <div className="sub col-span-3">
                                <div className="text">가동중</div>
                                <div className="num">
                                    <div className="highlight">
                                        <span className="mr-4">5,936</span>사
                                    </div>
                                </div>
                            </div>
                            <div className="sub col-span-3">
                                <div className="text">미가동</div>
                                <div className="num">
                                    <div className="highlight">
                                        <span className="mr-4">1,614</span>사
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="headline mt-60">
                            스마트공장 솔루션 가동률 현황
                        </div>

                        <div className="sol-chart-wrap">
                            <div className="grid-col-5">{rows}</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default SubPage27;
