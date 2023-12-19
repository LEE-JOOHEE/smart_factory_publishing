import React, { useState, useEffect } from "react";
import { Layout, Button, Menu, Tooltip, Tabs, Select, Empty } from "antd";
import { useHistory, Link } from "react-router-dom";
import {
  PlusOutlined,
  SwapRightOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PauseOutlined,
  CaretRightOutlined,
  InfoCircleFilled,
} from "@ant-design/icons";
import "/node_modules/antd/dist/antd.css";
import 'css/CommonUsr.css';


const UserMainNoticeBoard = ({  }) => {

  //공지사항
  const dataNoticeBoard = [
    {
      id: "987",
      type: "스마트화 수준확인",
      noticTitle: "2023년 스마트공장 수준확인제도 확인기관 및 교육 심의기관 선정 결과 안내",
      date: "2023-02-02",
      name: "양승권",
    },
    {
      id: "984",
      type: "공통",
      noticTitle: "★사업신청 관련 로그인에러, 권한부여 , 개인정보 변경 등 시스템 대응 안내",
      date: "2022-12-05",
      name: "김지현",
    },
    {
      id: "965",
      type: "데이터인프라구축사업",
      noticTitle: "22년도 데이터인프라 구축사업 세부관리기준 공지",
      date: "2022-05-20",
      name: "조재훈",
    },
    {
      id: "996",
      type: "공통",
      noticTitle: "과제신청시 도입기업재무현황 작성 관련 안내",
      date: "2023-03-14",
      name: "김혜림",
    },
    {
      id: "994",
      type: "공통",
      noticTitle: "스마트공장 솔루션 로그수집 API 연동 관련 안내(23.03.09 수정)",
      date: "2023-03-09",
      name: "이경아",
    },
  ]

  return(
    <>
      <div className="eu-noti-list-wrap">

        {dataNoticeBoard.map((obj, index) => {
          // console.log(obj, index);
          return(
            <>
              {/* 최대 3개만 보여주기 */}
              {(index < 4) ?
                <a href={"#/"} className="eu-usr-noti-list">
                  <div className="noti-title">
                    {obj.noticTitle}
                  </div>
                  <div className="noti-sub">
                    <span className="noti-type">{obj.type}</span>
                    {/* 이름 & 작성자 일때 noti-type으로 적용 */}
                    {/* <span className="noti-type">{obj.name}</span> */}
                    <span className="noti-date">{obj.date}</span>
                  </div>
                </a>
              : null}
            </>
          )
        })}

      </div>
      
    </>
  );
;}

export default UserMainNoticeBoard;