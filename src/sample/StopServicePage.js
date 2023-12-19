import { SettingTwoTone } from "@ant-design/icons";
import { useState } from "react";
import styled from "styled-components";
import 'css/CommonUsr.css';

import stopServiceImg from 'css/images/user-icons/stop-service-img.png';
import stopServiceBg from 'css/images/user-icons/stop-service-bg.png';

//서비스 중단 페이지
const StopServiceWrap = styled.div`
  background: url(${stopServiceBg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
`;

const StopServiceWrapCenter = styled.div`
  width: 100%; height: 100vh;
  display: flex; align-items: center;
`
const StopService = styled.div`
  background: url(${stopServiceBg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%; 
  display: flex; align-items: center; justify-content: center;
`

const StopServicePage = () => {
  
  return (
    <>

      {/* 가운데정렬 */}
      <StopServiceWrap className="stop-service-wrap">
        <img src={stopServiceImg} alt="서비스 중단 안내" />
      </StopServiceWrap>

      {/* 수직/수평 가운데정렬 */}
      <StopServiceWrapCenter className="stop-service-wrap-center">
        <StopService className="stop-service">
          <img src={stopServiceImg} alt="서비스 중단 안내" />
        </StopService>
      </StopServiceWrapCenter>

    </>
  );
};
export default StopServicePage;
