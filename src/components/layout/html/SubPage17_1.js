import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, DatePicker, Radio,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, Steps, Step, theme, message } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownCircleOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import SubPage22pop1 from 'components/layout/html/SubPage22_pop_1';

const SubPage17_1 = ({ children }) => {

  //제3자 제공내역 상세보기
  const [detailPopupOpen, setDetailPopupOpen] = useState(false);
  const detailClick = () => {
    setDetailPopupOpen(true);
  };

  return(
    <>

      {/* 회원가입 STEP 1 - (약관동의) */}
      {/* 회원정보 > 회원가입 */}
      <Row>
        <Col span={24}>

          <div className="headline mb-14">약관동의</div>
          <div className="join-terms-wrap">
            <div className="terms">
              <div className="chapter">제1장 총칙</div>
              <div className="article mt-0">제1조(목적)</div>
              <div className="text">
                본 약관은 중소기업기술정보진흥원 스마트공장 사업관리시스템(이하 "당 관리시스템")이 제공하는 모든 서비스(이하 "서비스")의 이용조건 및 절차, 이용자와 당 관리시스템의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
              </div>

              <div className="article">제2조(약관의 효력 및 변경)</div>
              <div className="text">
                <div className="list">
                ① 당 관리시스템은 귀하가 본 약관 내용에 동의하는 것을 조건으로 귀하에게 서비스를 제공할 것이며, 귀하가 본 약관의 내용에 동의 하는 경우, 당 관리시스템의 서비스 제공 행위 및 귀하의 서비스 사용 행위에는 본 약관이 우선적으로 적용될 것입니다.
                </div>
                <div className="list">
                ② 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 당 관리시스템의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 당 관리시스템은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다. 이용자가 변경된 약관에 동의하지 않는 경우, 이용자는 본인의 회원등록을 취소(회원탈퇴)할 수 있으며 계속 사용의 경우는 약관 변경에 대한 동의로 간주됩니다.
                </div>
              </div>

              <div className="article">제3조(약관 외 준칙)</div>
              <div className="text">
                <div className="list">
                  ① 본 약관은 당 관리시스템이 제공하는 서비스에 관한 이용규정 및 별도 약관과 함께 적용됩니다.
                </div>
                <div className="list">
                  ② 본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법, 정보통신윤리위원회심의규정, 정보 통신 윤리강령, 컴퓨터 프로 그램보호법 및 기타 관련 법령의 규정에 의합니다.
                </div>
              </div>

              <div className="article">제4조 (용어의 정의)</div>
              <div className="text">
                본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                <div className="list">
                  ① 이용자 : 본 약관에 따라 당 관리시스템이 제공하는 서비스를 받는 자
                </div>
                <div className="list">
                  ② 가입 : 당 관리시스템이 제공하는 회원가입 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용 계약을 완료시키는 행위
                </div>
                <div className="list">
                  ③ 회원 : 당 관리시스템에 개인 정보를 제공하여 회원 등록을 한 자로서, 당 관리시스템의 정보를 제공받으며, 당 관리시스템이 제공하는 서비스를 이용할 수 있는 자
                </div>
                <div className="list">
                  ④ 비밀번호 : 이용자와 회원ID가 일치하는지를 확인하고 통신상의 자신의 비밀보호를 위하여 이용자 자신이 선정한 문자와 숫자의 조합
                </div>
                <div className="list">
                  ⑤ 탈퇴 : 회원이 이용계약을 종료시키는 행위
                </div>
                <div className="list">
                  ⑥ 본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도 약관 및 이용규정에서 정의합니다
                </div>
              </div>
            </div>

            <div className="terms mt-28">
              <div className="chapter">제2장 서비스 제공 및 이용</div>
              <div className="article mt-0">제5조(이용계약의 성립)</div>
              <div className="text">
                <div className="list">
                  ① 이용계약은 신청자가 온라인으로 당 관리시스템에서 제공하는 소정의 회원가입 신청양식에서 요구하는 사항을 기록하여 가입을 완료하는 것으로 성립됩니다.
                </div>
                <div className="list">
                  ② 당 관리시스템은 다음 각 호에 해당하는 이용계약에 대하여는 가입을 취소할 수 있습니다.
                  <p>다른 사람의 명의를 사용하여 신청하였을 때</p>
                  <p>이용 계약 신청서의 내용을 허위로 기재하였거나 신청하였을 때</p>
                  <p>사회의 안녕 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 때</p>
                  <p>다른 사람의 당 관리시스템 서비스 이용을 방해하거나 그 정보를 도용하는 등의 행위를 하였을 때</p>
                  <p>당 관리시스템을 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우</p>
                  <p>기타 당 관리시스템이 정한 이용신청요건이 미비 되었을 때</p>
                </div>
                <div className="list">
                  ③ 당 관리시스템은 다음 각 항에 해당하는 경우 그 사유가 해소될 때까지 이용계약 성립을 유보할 수 있습니다.
                  <p>서비스 관련 제반 용량이 부족한 경우</p>
                  <p>기술상 장애 사유가 있는 경우</p>
                </div>
                <div className="list">
                  ④ 당 관리시스템이 제공하는 서비스는 아래와 같으며, 그 변경될 서비스의 내용을 이용자에게 공지하고 아래에서 정한 서비스를 변경하여 제공할 수 있습니다.
                  <p>E-mail을 통한 중소기업기술정보진흥원의 각종 정보 제공</p>
                  <p>당 관리시스템이 자체 개발하거나 다른 기관과의 협의 등을 통해 제공하는 일체의 서비스</p>
                </div>
              </div>

              <div className="article">제6조(회원정보사용에대한동의)</div>
              <div className="text">
                <div className="list">
                  ① 회원의 개인정보에 대해서는 당 관리시스템의 개인정보 보호정책이 적용됩니다.
                </div>
                <div className="list">
                  ② 당 관리시스템의 회원 정보는 다음과 같이 수집, 사용, 관리, 보호됩니다.
                  <p>개인정보의 수집 : 당 관리시스템은 귀하의 당 관리시스템 서비스 가입시 귀하가 제공하는 정보를 통하여 귀하에 관한 정보를 수 집하며 탈퇴시 수집된 모든 개인정보는 삭제됩니다. 다만, 당 관리시스템(이전 시스템 포함)을 통해 정부지원사업을 참여한 이력이 있는 경우 각 지원사업의 관련법령이 정하는 바에 따라 일부 정보는 과제정보로서 보관되어 질 수 있습니다.</p>
                  <p>개인정보의 사용 : 당 관리시스템은 당 관리시스템 서비스 제공과 관련해서 수집된 회원의 신상정보를 본인의 승낙 없이 제3자에 게 누설, 배포하지 않습니다. 단, 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있거나 정보통신윤리위원회의 요청이 있는 경우 또는 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우, 귀하가 당 관리시스템에 제공한 개인정보를 스스로 공개한 경우에는 그러하지 않습니다.</p>
                  <p>개인정보의 관리 : 귀하는 개인정보의 보호 및 관리를 위하여 서비스의 개인정보관리에서 수시로 귀하의 개인정보를 수정/삭제할 수 있습니다. 수신되는 정보 중 불필요하다고 생각되는 부분도 변경/조정할 수 있습니다.</p>
                  <p>개인정보의 보호 : 귀하의 개인정보는 오직 귀하만이 열람/수정/삭제 할 수 있으며, 이는 전적으로 귀하의 ID와 비밀번호에 의해 관리되고 있습니다. 따라서 타인에게 본인의 ID와 비밀번호를 알려주어서는 아니되며, 작업 종료시에는 반드시 로그아웃 해주 시고, 웹 브라우저의 창을 닫아주시기 바랍니다. (이는 타인과 컴퓨터를 공유하는 인터넷 카페나 도서관 같은 공공장소에서 컴퓨터를 사용하는 경우에 귀하의 정보의 보호를 위하여 필요한 사항입니다)</p>
                </div>
                <div className="list">
                  ③ 회원이 당 관리시스템에 본 약관에 따라 이용신청을 하는 것은 이용신청이 적용되는 기간동안 당 관리시스템이 본 약관에 따라 신청 서에 기재된 회원정보를 수집, 이용하는 것에 동의하는 것으로 간주됩니다.
                </div>
              </div>

              <div className="article">제7조(정보보안)</div>
              <div className="text">
                <div className="list">
                  ① 가입 신청자가 당 관리시스템 서비스 가입 절차를 완료하는 순간부터 귀하는 입력한 정보의 비밀을 유지할 책임이 있으며, 회원의 ID와 비밀번호를 사용하여 발생하는 모든 결과에 대한 책임은 회원본인에게 있습니다.
                </div>
                <div className="list">
                  ② ID와 비밀번호에 관한 모든 관리의 책임은 회원에게 있으며, 회원의 ID나 비밀번호가 부정하게 사용 되었다는 사실을 발견한 경우에 는 즉시 당 관리시스템에 신고하여야 합니다. 신고를 하지 않음으로 인한 모든 책임은 회원 본인에게 있습니다.
                </div>
                <div className="list">
                  ③ 이용자는 당 관리시스템 서비스의 사용 종료시 마다 정확히 접속을 종료하도록 해야 하며, 정확히 종료하지 아니함으로써 제3자가 귀하에 관한 정보를 이용하게 되는 등의 결과로 인해 발생하는 손해 및 손실에 대하여 당 관리시스템은 책임을 부담하지 아니합니다.
                </div>
                <div className="list">
                  ④ 관리시스템은 쿠키를 활용하여 개인정보를 수집하지 아니하며 인터넷 접속파일 등 개인정보를 자동으로 설치하는 장치를 거부하며 관련된 장치를 운영하지 않습니다.
                </div>
                <div className="list">
                  ⑤ 당 관리시스템은 수집·활용 중인 개인정보가 누출되고 그 사실을 인지시 개인정보 항목 및 발생시점 경위를 사용자에게 통보한다.
                </div>
              </div>

              <div className="article">제8조(서비스이용시간)</div>
              <div className="text">
                <div className="list">
                  ① 서비스 이용시간은 당 관리시스템의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.
                </div>
                <div className="list">
                  ② 제1항의 이용시간은 정기점검 등의 필요로 인하여 당 관리시스템이 정한 날 또는 시간은 예외로 합니다.
                </div>
              </div>

              <div className="article">제9조(서비스의중지및정보의저장과사용)</div>
              <div className="text">
                <div className="list">
                  ① 귀하는 당 관리시스템 서비스에 보관되거나 전송된 메시지 및 기타 통신 메시지 등의 내용이 국가의 비상사태, 정전, 당 관리시스템 의 관리 범위 외의 서비스 설비 장애 및 기타 불가항력에 의하여 보관되지 못하였거나 삭제된 경우, 전송되지 못한 경우 및 기타 통신 데이터의 손실이 있을 경우에 당 관리시스템은 관련 책임을 지지 아니합니다.
                </div>
                <div className="list">
                  ② 당 관리시스템이 정상적인 서비스 제공의 어려움으로 인하여 일시적으로 서비스를 중지하여야 할 경우에는 서비스 중지 1주일 전의 고지 후 서비스를 중지할 수 있으며, 이 기간 동안 귀하가 고지내용을 인지하지 못한 데 대하여 당 관리시스템은 책임을 부담하지 아니합니다.부득이한 사정이 있을 경우 위 사전 고지기간은 감축되거나 생략될 수 있습니다. 또한 위 서비스 중지에 의하여 본 서비스에 보관되거나 전송된 메시지 및 기타 통신 메시지 등의 내용이 보관되지 못하였거나 삭제된 경우, 전송되지 못한 경우 및 기타 통신 데이터의 손실이 있을 경우에 대하여도 당 관리시스템은 책임을 부담하지 아니합니다.
                </div>
                <div className="list">
                  ③ 당 관리시스템의 사정으로 서비스를 영구적으로 중단하여야 할 경우 제 2 항에 의거합니다. 다만, 이 경우 사전 고지기간은 1개월로 합니다.
                </div>
                <div className="list">
                  ④ 당 관리시스템은 사전 고지 후 서비스를 일시적으로 수정, 변경 및 중단할 수 있으며, 이에 대하여 귀하 또는 제3자에게 어떠한 책임 도 부담하지 아니합니다.
                </div>
                <div className="list">
                  ⑤ 당 관리시스템은 이용자가 본 약관의 내용에 위배되는 행동을 한 경우, 임의로 서비스 사용을 제한 및 중지 할 수 있습니다. 이 경우 당 관리시스템은 위 이용자의 접속을 금지할 수 있습니다.
                </div>
              </div>
              <div className="article">제10조(서비스의변경및해지)</div>
              <div className="text">
                당 관리시스템은 귀하가 서비스를 이용하여 기대하는 손익이나 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않으며, 회원이 본 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 책임을 지지 않습니다.
              </div>
              <div className="article">제11조(약관 동의를 거부할 권리)</div>
              <div className="text">
                이용자는 당 약관에 동의를 거부할 권리가 있습니다. 회원가입시 약관에 동의하지 않으시는 경우, 회원가입이 제한될 수 있습니다.
              </div>
            </div>
          </div>

          <Radio.Group defaultValue={'동의'} className="mt-26 mb-60">
            <Radio value={'동의'}>회원(이용) 약관에 동의합니다.</Radio>
            <Radio value={'미동의'}>회원(이용) 약관에 동의하지 않습니다.</Radio>
          </Radio.Group>


          <div className="headline mb-14">약관동의</div>
          <div className="join-terms-wrap">
            <div className="terms">
              <div className="text">
                중소벤처기업부 스마트공장 사업관리시스템은 「개인정보보호법」 제15조 제1항 제1호, 제17조 제1항 제1호, 제23조 제1호 따라 아래와 같이 개인정보의 수집. 이용에 관하여 귀하의 동의를 얻고자 합니다.
              </div>
              <div className="text mt-10 mb-26">
                중소벤처기업부 스마트공장 사업관리시스템은 이용자의 사전 동의 없이는 이용자의 개인정보를 함부로 공개하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다. 이용자가 제공한 모든 정보는 아래의 목적에 필요한 용도 이외로는 사용되지 않으며 이용 목적이 변경될 시에는 이를 알리고 동의를 구할 것입니다.
              </div>
              <div className="chapter">개인정보의 수집 및 이용 목적</div>
              <div className="article mt-0">1. 개인정보의 수집 및 이용 목적</div>
              <div className="text">
                <div className="list">
                  가. 서비스 제공에 관한 업무 이행
                  <p>컨텐츠 제공, 특정 맞춤 서비스 제공(마이페이지, 뉴스레터 등), 기업 애로상담</p>
                </div>
              </div>
              <div className="text mt-24">
                <div className="list">
                  나. 회원관리
                  <p>회원제 서비스 이용 및 제한적 본인 확인제에 따른 본인확인, 개인식별, 가입의사 확인, 가입 및 가입횟수 제한, 추후 법정 대리인 본인확인, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 공지사항 전달</p>
                </div>
              </div>
              <div className="text mt-24">
                <div className="list">
                  다. 중소기업정보화역량강화사업에 관한 업무 이행
                </div>
                <div className="join-terms-table">
                  <table>
                    <colgroup>
                      <col width={'30%'} />
                      <col width={'70%'} />
                    </colgroup>
                    <tr>
                      <th>이용목적</th>
                      <th>내용</th>
                    </tr>
                    <tr>
                      <td>정부지원사업 신청 및 선정기업 관계자 관리</td>
                      <td>
                        "중소기업기술혁신촉진법" 등 법령에 근거하여 시행하는 정부지원사업 행정규칙(법령, 요령, 지침 등) 내용에 따라 신청(지원)기업의 대표자, 참여자 등의 관리, 신청 · 선정 · 협약 등에 필요한 자격(의무사항 불이행, 참여제한, 참여율 등)여부 확인, 보고 · 사후관리·통계 등의 목적으로 개인정보를 처리합니다.
                      </td>
                    </tr>
                    <tr>
                      <td>정부지원사업 평가위원, 전문가 등의 관리</td>
                      <td>정부지원사업의 행정규칙(법령, 요령, 지침 등)에서 정한 평가위원 · 전문가등의 자격확인, 평가참여이력 등의 행정업무를 목적으로 개인정보를 처리합니다.</td>
                    </tr>
                    <tr>
                      <td>민원사무 처리</td>
                      <td>민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락 ·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.</td>
                    </tr>
                    <tr>
                      <td>서비스 제공</td>
                      <td>서비스 제공, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증 등을 목적으로 개인정보를 처리합니다.</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div className="terms">
              <div className="article">2. 수집하는 개인정보의 항목</div>
              <div className="text">{`<개인회원 가입>`}</div>
              <div className="join-terms-table mt-4">
                <table>
                  <colgroup>
                    <col width={'12%'} />
                    <col width={'15%'} />
                    <col width={'15%'} />
                    <col width={'8%'} />
                    <col width={'50%'} />
                  </colgroup>
                  <tr>
                    <th>회원구분</th>
                    <th colSpan={2} className="border-r">개인정보 파일명</th>
                    <th className="text-c">선택</th>
                    <th>개인정보파일</th>
                  </tr>
                  <tr>
                    <td className="header border-r" rowSpan={4}>일반사용자</td>
                    <td rowSpan={2} colSpan={2} className="border-r">사용자정보</td>
                    <td className="text-c">필수</td>
                    <td>성명, 휴대폰번호, 이메일, 생년월일, 자택주소</td>
                  </tr>
                  <tr>
                    <td className="text-c">선택</td>
                    <td>대표자여부</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} colSpan={2} className="border-r">소속기관정보</td>
                    <td className="text-c">필수</td>
                    <td>회사명, 사업자등록번호, 본사전화번호, 본사팩스번호, 본사주소, 대표자명</td>
                  </tr>
                  <tr>
                    <td className="text-c">선택</td>
                    <td>법인등록번호, 대표자이메일, 대표자전화번호, 대표자휴대폰, 홈페이지, 설립년월일, 기관구분</td>
                  </tr>
                  <tr>
                    <td className="header border-r" rowSpan={16}>전문가</td>
                    <td rowSpan={2} colSpan={2} className="border-r">사용자정보</td>
                    <td className="text-c">필수</td>
                    <td>성명, 휴대폰번호, 이메일, 생년월일, 자택주소</td>
                  </tr>
                  <tr>
                    <td className="text-c">선택</td>
                    <td>대표자여부</td>
                  </tr>
                  <tr>
                    <td rowSpan={12} className="border-r">전문가정보</td>
                    <td rowSpan={2} className="border-r">신상정보</td>
                    <td className="text-c">필수</td>
                    <td>휴대폰번호</td>
                  </tr>
                  <tr>
                    <td className="text-c">선택</td>
                    <td>이메일, 산학연구분</td>
                  </tr>
                  <tr>
                    <td>소속기관 정보</td>
                    <td className="text-c">필수</td>
                    <td>회사명, 본사 전화번호, 본사 팩스번호, 본사주소, 직위, 부서</td>
                  </tr>
                  <tr>
                    <td>평가(전문)분야</td>
                    <td className="text-c">선택</td>
                    <td>평가(전문)분야</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="border-r">학력사항</td>
                    <td className="text-c">필수</td>
                    <td>학교, 전공, 이수학위, 입학일자, 증명서류</td>
                  </tr>
                  <tr>
                    <td className="text-c">선택</td>
                    <td>지도교수, 졸업일자, 논문명</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="border-r">경력사항</td>
                    <td className="text-c">필수</td>
                    <td>근무처, 근무부서, 직급, 입사일자, 업무내용, 증명서류</td>
                  </tr>
                  <tr>
                    <td className="text-c">선택</td>
                    <td>퇴사일자</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="border-r">연구논문</td>
                    <td className="text-c">필수</td>
                    <td>연구제목, 발행년월, 주저자</td>
                  </tr>
                  <tr>
                    <td className="text-c">선택</td>
                    <td>게재처, Vol(No), 공동저자, 책임저자, SCI논무여부, ISBN, 증명서류</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="border-r">자격포상</td>
                    <td className="text-c">필수</td>
                    <td>구분(자격증, 포상), 취득년도, 자격(포상)명, 발행기관</td>
                  </tr>
                  <tr>
                    <td className="text-c">선택</td>
                    <td>자격번호, 포상등급, 증명서류</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} colSpan={2} className="border-r">기관정보관리</td>
                    <td className="text-c">필수</td>
                    <td>회사명, 사업자등록번호, 본사전화번호, 본사팩스번호, 본사주소, 대표자명</td>
                  </tr>
                  <tr>
                    <td className="text-c">선택</td>
                    <td>법인등록번호, 대표자이메일, 대표자전화번호, 대표자휴대폰, 홈페이지, 설립년월일, 기관구분</td>
                  </tr>
                </table>
              </div>
              <div className="text mt-10">
                <div className="list">
                  {`<자동수집>`}
                  <p>IP주소, 쿠키, 서비스 이용기록, 방문기록, 불량이용기록 등</p>
                </div>
              </div>
            </div>

            <div className="terms">
              <div className="article">3. 개인정보의 보유 및 이용기간</div>
              <div className="text">
                중소벤처기업부 스마트공장 사업관리시스템은 원칙적으로 보유기간의 경과, 개인정보의 수집 및 이용목적의 달성 등 그 개인정보가 불필요하게 되었을 때에는 지체 없이 파기합니다. 다만, 다른 법령에 따라 보존하여야 하는 경우에는 그러하지 않을 수 있습니다. 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
              </div>
              <div className="text mt-10">
                <div className="list">
                  {`<회원정보>`}
                  <p>탈퇴 후 지체 없이 파기</p>
                </div>
              </div>
            </div>

            <div className="terms">
              <div className="article">4. 동의 거부권 및 불이익</div>
              <div className="text">
                정보주체는 개인정보의 수집 및 이용에 동의를 거부할 권리가 있습니다. 회원가입 시 수집하는 최소한의 개인정보, 즉 필수 항목에 대한 수집 및 이용 동의를 거부하실 경우, 서비스 이용에 제한이 될 수 있습니다.
              </div>
            </div>

            <div className="terms">
              <div className="article">5. 14세 미만 아동의 경우 회원가입 및 저희가 제공하는 서비스를 이용할 수 없습니다.</div>
            </div>
          </div>

          <Radio.Group defaultValue={'동의'} className="mt-26 mb-60">
            <Radio value={'동의'}>회원(이용) 약관에 동의합니다.</Radio>
            <Radio value={'미동의'}>회원(이용) 약관에 동의하지 않습니다.</Radio>
          </Radio.Group>


          <div className="headline mb-14">개인정보의 제3자 제공</div>
          <div className="join-terms-wrap">
            <div className="terms">
              <div className="chapter">1. 개인정보의 제3자 제공</div>
              <div className="text">
                <div className="list">
                  ① 기정원은 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 다음 각호의 경우를 제외하고는 정보주체의 사전 동의 없이는 본래의 목적 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.
                </div>
                <div className="list">
                  <br/>1) 정보주체로부터 별도의 동의를 받는 경우
                  <br/>2) 법률에 특별한 규정이 있는 경우
                  <br/>3) 정보주체 또는 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우
                  <br/>4) 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을 알아 볼 수 없는 형태로 개인정보를 제공하는 경우
                  <br/>5) 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공하지 아니하면 다른 법률에서 정하는 소관 업무를 수행 할 수 없는 경우로서 보호위원회의 심의·의결을 거친 경우
                  <br/>6) 조약, 그 밖의 국제협정의 이행을 위하여 외국정보 또는 국제기구에 제공하기 위하여 필요한 경우
                  <br/>7) 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우
                  <br/>8) 법원의 재판업무 수행을 위하여 필요한 경우
                  <br/>9) 형(形) 및 감호, 보호처분의 집행을 위하여 필요한 경우
                </div>
              </div>
              <div className="text">
                <div className="list mt-24">
                  ② 기정원은 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button type="link" className="eu-btn-link-br w-fit" onClick={detailClick}>[제3자 제공내역 상세보기]</Button>
                  <SubPage22pop1
                    key="DetailPopup"
                    detailPopupOpen={detailPopupOpen}
                    setDetailPopupOpen={setDetailPopupOpen}
                  />
                </div>
              </div>
            </div>
            <div className="terms mt-24">
              <div className="chapter">2. 동의 거부권 및 불이익</div>
                <div className="text">
                  정보주체는 개인정보의 제3자 제공에 동의를 거부할 권리가 있습니다. 스마트공장 사업관리시스템 과제 신청 및 진행과정의 필수 항목으로 거부하실 경우, 회원가입이 제한될 수 있습니다.
                </div>
            </div>
          </div>

          <Radio.Group defaultValue={'동의'} className="mt-26 mb-60">
            <Radio value={'동의'}>회원(이용) 약관에 동의합니다.</Radio>
            <Radio value={'미동의'}>회원(이용) 약관에 동의하지 않습니다.</Radio>
          </Radio.Group>

        </Col>

        <Col span={24}>
          <div className="flex-row-center btn-mob">
            <Button className="eu-btn-process-warning btn-h-50" >휴대폰 인증받기</Button>
            <Button className="eu-btn-process-error btn-h-50">아이핀 인증받기</Button>
          </div>
        </Col>
      </Row>


    </>
  )
}

export default SubPage17_1;