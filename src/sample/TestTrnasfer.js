import MainStatsSettingPopup from "./MainStatsSettingPopup";
import { SettingTwoTone } from "@ant-design/icons";
import { useState } from "react";

const TestTrnasfer = () => {
  // 진행단계별처리대상 modal
  const [mainStatsModalOpen, setMainStatsModalOpen] = useState(false);
  // 진행단계별처리대상 팝업버튼 클릭 시
  const mainStatsClick = () => {
    setMainStatsModalOpen(true);
  };
  //취소, 닫기 클릭시
  const closeMainStatsClick = () => {
    setMainStatsModalOpen(false);
  };
  return (
    <>
      <SettingTwoTone onClick={mainStatsClick} />
      <MainStatsSettingPopup
        key={"MainStatsSettingPopup"}
        mainStatsModalOpen={mainStatsModalOpen}
        setMainStatsModalOpen={setMainStatsModalOpen}
        closeMainStatsClick={closeMainStatsClick}
        //procStepRefetch={procStepRefetch}
      />
    </>
  );
};
export default TestTrnasfer;
