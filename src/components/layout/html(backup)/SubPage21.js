import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, DatePicker,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, Steps, Step, theme, message } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownCircleOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

const SubPage21 = ({ children }) => {

  return(
    <>

      {/* 이용약관 */}
      {/* 이용안내 > 이용약관 */}
      <Row>
        <Col span={24}>
          <div className="sub-tab-cont-wrap">
            <div className="headline">제1장 총칙</div>
            <div className="tit-blue">제1조(목적)</div>
            <div className="font-16-400">
              본 약관은 중소기업기술정보진흥원 스마트공장 사업관리시스템(이하 "당 관리시스템")이 제공하는 모든 서비스(이하 "서비스")의 이용조건 및 절차, 
              이용자와 당 관리시스템의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
            </div>

            <div className="tit-blue mt-30">제2조(약관의 효력 및 변경)</div>
            <div className="font-16-400">
              ① 당 관리시스템은 귀하가 본 약관 내용에 동의하는 것을 조건으로 귀하에게 서비스를 제공할 것이며, 귀하가 본 약관의 내용에 동의 하는 경우, 
              당 관리시스템의 서비스 제공 행위 및 귀하의 서비스 사용 행위에는 본 약관이 우선적으로 적용될 것입니다.
            </div>
            <div className="font-16-400 mt-10">
              ② 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 당 사업관리시스템의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지
              공지합니다.다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 당 사업관리시스템은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 
              이용자가 알기 쉽도록 표시합니다. 이용자가 변경된 약관에 동의하지 않는 경우, 이용자는 본인의 회원등록을 취소(회원탈퇴)할 수 있으며 계속 사용의 경우는 약관 변경에 대한 동의로 간주됩니다.
            </div>

            <div className="tit-blue mt-30">제3조(약관 외 준칙)</div>
            <div className="font-16-400">
              ① 본 약관은 당 사업관리시스템이 제공하는 서비스에 관한 이용규정 및 별도 약관과 함께 적용됩니다.
            </div>
            <div className="font-16-400 mt-10">
              ② 본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법, 정보통신윤리위원회심의규정, 정보 통신 윤리강령, 컴퓨터 프로그램보호법 및 기타 관련 법령의 규정에 의합니다.
            </div>

            <div className="tit-blue mt-30">제4조 (용어의 정의)</div>
            <div className="font-16-500 text-black">본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</div>
            <div className="font-16-400 mt-10">
              ① 이용자 : 본 약관에 따라 당 사업관리시스템이 제공하는 서비스를 받는 자
            </div>
            <div className="font-16-400 mt-10">
              ② 가입 : 당 사업관리시스템이 제공하는 회원가입 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용 계약을 완료시키는 행위
            </div>
            <div className="font-16-400 mt-10">
              ③ 회원 : 당 사업관리시스템에 개인 정보를 제공하여 회원 등록을 한 자로서, 당 사업관리시스템의 정보를 제공받으며, 당 사업관리시스템이 제공하 는 서비스를 이용할 수 있는 자
            </div>
            <div className="font-16-400 mt-10">
              ④ 비밀번호 : 이용자와 회원ID가 일치하는지를 확인하고 통신상의 자신의 비밀보호를 위하여 이용자 자신이 선정한 문자와 숫자의 조합
            </div>
            <div className="font-16-400 mt-10">
              ⑤ 탈퇴 : 회원이 이용계약을 종료시키는 행위
            </div>
            <div className="font-16-400 mt-10">
              ⑥ 본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도 약관 및 이용규정에서 정의합니다.
            </div>
            
            <div className="headline mt-60">제2장 서비스 제공 및 이용</div>
            <div className="tit-blue mt-30">제5조(이용계약의 성립)</div>
            <div className="font-16-400">
              ① 이용계약은 신청자가 온라인으로 당 사업관리시스템에서 제공하는 소정의 회원가입 신청양식에서 요구하는 사항을 기록하여 가입을 완료하는 것으로 성립됩니다.
            </div>
            <div className="font-16-400 mtb-14">
              ② 당 사업관리시스템은 다음 각 호에 해당하는 이용계약에 대하여는 가입을 취소할 수 있습니다.
            </div>
            <div className="dot-text pb-0">다른 사람의 명의를 사용하여 신청하였을 때</div>
            <div className="dot-text pb-0">이용 계약 신청서의 내용을 허위로 기재하였거나 신청하였을 때</div>
            <div className="dot-text pb-0">사회의 안녕 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 때</div>
            <div className="dot-text pb-0">다른 사람의 당 사업관리시스템 서비스 이용을 방해하거나 그 정보를 도용하는 등의 행위를 하였을 때</div>
            <div className="dot-text pb-0">당 사업관리시스템을 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우</div>
            <div className="dot-text pb-0">기타 당 사업관리시스템이 정한 이용신청요건이 미비 되었을 때</div>
            <div className="font-16-400 mtb-14">
              ③ 당 사업관리시스템은 다음 각 항에 해당하는 경우 그 사유가 해소될 때까지 이용계약 성립을 유보할 수 있습니다.
            </div>
            <div className="dot-text pb-0">서비스 관련 제반 용량이 부족한 경우</div>
            <div className="dot-text pb-0">기술상 장애 사유가 있는 경우</div>
            <div className="font-16-400 mtb-14">
              ④ 당 사업관리시스템이 제공하는 서비스는 아래와 같으며, 그 변경될 서비스의 내용을 이용자에게 공지하고 아래에서 정한 서비스를 변경하여 제공할 수 있습니다.
            </div>
            <div className="dot-text pb-0">E-mail을 통한 중소기업기술정보진흥원의 각종 정보 제공</div>
            <div className="dot-text pb-0">당 사업관리시스템이 자체 개발하거나 다른 기관과의 협의 등을 통해 제공하는 일체의 서비스</div>

            <div className="tit-blue mt-30">제6조(회원정보사용에대한동의)</div>
            <div className="font-16-400 mtb-14">
              ① 회원의 개인정보에 대해서는 당 사업관리시스템의 개인정보 보호정책이 적용됩니다.
            </div>
            <div className="font-16-400 mtb-14">
              ② 당 사업관리시스템의 회원 정보는 다음과 같이 수집, 사용, 관리, 보호됩니다.
            </div>
            <div className="dot-text">
              개인정보의 수집 : 당 사업관리시스템은 귀하의 당 사업관리시스템 서비스 가입시 귀하가 제공하는 정보를 통하여 귀하에 관한 정보를 수집하며 탈퇴시 수집된 모든
              개인정보는 삭제됩니다. 다만, 당 사업관리시스템(이전 시스템 포함)을 통해 정부지원사업을 참여한 이력이 있는 경우 각 지원사업의 관련법령이 정하는 바에 따라
              일부 정보는 과제정보로서 보관되어 질 수 있습니다.
            </div>
            <div className="dot-text">
              개인정보의 사용 : 당 사업관리시스템은 당 사업관리시스템 서비스 제공과 관련해서 수집된 회원의 신상정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다.
              단, 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있거나 정보통신윤리위원회의 요청이 있는 경우 또는
              기타 관계법령에서 정한 절차에 따른 요청이 있는 경우, 귀하가 당 사업관리시스템에 제공한 개인정보를 스스로 공개한 경우에는 그러하지 않습니다.
            </div>
            <div className="dot-text">
              개인정보의 관리 : 귀하는 개인정보의 보호 및 관리를 위하여 서비스의 개인정보관리에서 수시로 귀하의 개인정보를 수정/삭제할 수 있습니다. 수신되는 정보중 불필요하다고 생각되는 부분도 변경/조정할 수 있습니다.
              개인정보의 보호 : 귀하의 개인정보는 오직 귀하만이 열람/수정/삭제 할 수 있으며, 이는 전적으로 귀하의 ID와 비밀번호에 의해 관리되고 있습니다.
              따라서 타인에게 본인의 ID와 비밀번호를 알려주어서는 아니되며, 작업 종료시에는 반드시 로그아웃 해주시고, 웹 브라우저의 창을 닫아주시기 바랍니다.
              (이는 타인과 컴퓨터를 공유하는 인터넷 카페나 도서관 같은 공공장소에서 컴퓨터를 사용하는 경우에 귀하의 정보의 보호를 위하여 필요한 사항입니다)
            </div>
            <div className="dot-text pb-0">
              개인정보의 보호 : 귀하의 개인정보는 오직 귀하만이 열람/수정/삭제 할 수 있으며, 이는 전적으로 귀하의 ID와 비밀번호에 의해 관리되고 있습니다.
              따라서 타인에게 본인의 ID와 비밀번호를 알려주어서는 아니되며, 작업 종료시에는 반드시 로그아웃 해주시고, 웹 브라우저의 창을 닫아주시기 바랍니다.
              (이는 타인과 컴퓨터를 공유하는 인터넷 카페나 도서관 같은 공공장소에서 컴퓨터를 사용하는 경우에 귀하의 정보의 보호를 위하여 필요한 사항입니다)
            </div>
            <div className="font-16-400 mtb-14">
              ③ 회원이 당 사업관리시스템에 본 약관에 따라 이용신청을 하는 것은 이용신청이 적용되는 기간동안 당 사업관리시스템이 본 약관에 따라 신청서에 기재된 회원정보를 수집, 이용하는 것에 동의하는 것으로 간주됩니다.
            </div>

            <div className="tit-blue mt-30">제7조(정보보안)</div>
            <div className="font-16-400"></div>




            <div className="tit-blue mt-30">타이틀</div>
            <div className="font-16-400"></div>
            <div className="tit-blue mt-30">타이틀</div>
            <div className="font-16-400"></div>

          
          </div>
        </Col>
      </Row>  

    </>
  )
}

export default SubPage21;