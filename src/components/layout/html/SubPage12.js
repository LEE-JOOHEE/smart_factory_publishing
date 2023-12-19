import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, 
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import pencilIcon from 'css/images/user-icons/pencil-icon.png';

const SubPage12 = ({ children }) => {

  //달력 헤더 - 년월 맞추기
  const [nowDate, setNowDate] = useState(() => moment());
  const [selectedValue, setSelectedValue] = useState(() => moment());
  const onSelect = (newValue) => {
    setNowDate(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setNowDate(newValue);
  };


  //달력 데이터 넣기
  const getListData = (value) => {
    let listData;
    let week = value.day(); // 요일 : 0(일), 1(월), 2(화), 3(수), 4(목), 5(금), 6(토)
    let date = value.date(); // 날짜 : 1 ~ 31
    if(week === 6 || week === 0){ // 토,일
      listData = [
        {content: ''},
      ];
    }else if(date > 0 && date <= 16 ){
      listData = [
        {content: '견학종료'},
      ];
    }else if(date > 16){
      listData = [
        {content: '견학신청'},
      ];
    }
    return listData || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}
            className={(item.content === '견학종료' ? "end" : "start" )}
          >
            <a href="#/">{item.content}</a>
            {(item.content === "견학신청") ? 
              (
                <>
                  <div className="count">{Math.floor(Math.random() * 10)}</div>
                  <a href="#/"><img src={pencilIcon} alt="수정" /></a>
                  {/* <div onClick={console.log("연필")}><img src={pencilIcon} alt="수정" /></div> */}
                </>
              ): null}
          </li>
        ))}
      </ul>
    );
  };

  return(
    <>

      {/* 견학신청 (캘린더) */}
      {/* 회원정보 > 견학신청 */}
      <Row>
        <Col span={24}>
          <div className="eu-usr-calendar-wrap">
            <div className="eu-usr-calender-pannel">
              <div className="year">
                {`${selectedValue?.format('YYYY')}.`}
              </div>
              <div className="month ml-12">
                {`${selectedValue?.format('MM')}`}
              </div>
            </div>
            <Calendar 
              className="eu-usr-calendar" 
              locale={{ 
                lang: { 
                   locale: 'ko', 
                   dayFormat: moment.updateLocale('ko', { 
                              weekdaysMin: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
                              week: {dow: 1, doy: 6},  // monday start
                   }) 
                 } 
              }}
              onChange={(date, mode) => {
                console.log(moment(date).format("YYYY-MM-DD"));
              }}
              value={nowDate}
              onSelect={onSelect} 
              onPanelChange={onPanelChange}
              dateCellRender={dateCellRender}
            />
          </div>
        </Col>
      </Row>

    </>
  )
}

export default SubPage12;