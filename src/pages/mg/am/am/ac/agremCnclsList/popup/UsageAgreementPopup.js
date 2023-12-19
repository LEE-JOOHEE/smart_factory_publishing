import React from 'react';
import 'css/Common.css';
import { Button, Col, Modal, Row, Table, Descriptions } from 'antd/lib';
const arrAgremSignColums = [
  {
    title: '기관역활',
    dataIndex: 'a1',
  },
  {
    title: '기관명',
    dataIndex: 'a2',
  },
  {
    title: '서명일자',
    dataIndex: 'a3',
  },
  {
    title: '서명여부',
    dataIndex: 'a4',
  },
];
const UsageAgreementPopup = ({
  agremSignPopupOpen,
  setAgremSignPopupOpen,
  arrData,
  usageAgreementPopupOpen,
  setUsageAgreementPopupOpen,
}) => {
  const closeClick = () => {
    setUsageAgreementPopupOpen(false);
  };
  return (
    <Modal
      open={usageAgreementPopupOpen}
      title="기업정보 활용동의서 표준서식"
      onCancel={closeClick}
      width={1250}
      footer={[
        <Button
          key={'AgremSignPopup_closeClick'}
          className="eu-btn-popup-process-default"
          onClick={closeClick}
        >
          닫기
        </Button>,
      ]}
    >
      <Row>
        <Col span={24}>
          <div className="eu-agreement-form-wrap">
            <div className="eu-agreement-form-title">
              스마트공장 사업관리시스템 정보 활용을 위한 동의 및 ICT 융합 스마트공장보급확산사업 제조데이터 제공 이용 동의서
            </div>
            <div className="eu-agreement-form-body">
              <div>
                <div className="h4">목적</div>
                <div className="mtb-10">1. 정부와 지자테 중소기업 지원사업의 효율적 수행을 위해 운영하는 
                  "중소기업 지원사업 통합관리시스템" 에서 신청기업 및 지원기업 지원이력 정보의 수집.조회 및 활용</div>
                <div>2. 동 통합관리시스템에서 관리하는 기업정보의 확인, 지원효과 분석, 통계관리 등 효율적인 중소기업 정책 수립을 위해 
                  <br/>국세청.관세청.고용부 등에서 보유하고 있는 과세정보 등의 수집.활용</div>
              </div>
              <div className="mt-30">
                <div className="h4">수집.조회 및 활용정보</div>
                <div className="mtb-10">1. (지원이력정보) 사업자등록번호 등 기업 식별정보 및 신청일, 지원금액 등 사업의 신청 및 수혜정보</div>
                <div className="mb-10">2. (과세정보 및 행정정보 등) 중소기업 지원사업에 신청한 기업의 
                  국세기본법 제81조의13의 과세정보로서 매출액 등 재무정보 및 창.휴.폐업일, 소득세 원천징수
                  <br/>인원 등, 관세법 제 116조에 따른 수출액 등, 고용보험법 제2조의1의 피보험자수 등
                </div>
                <div>3. (인증정보) 기업의 임증. 확인정보로서 신청일, 획득일, 유효기간 등</div>
              </div>
              <div className="mt-30">
                <div className="h4">수집.조회 및 활용 기관</div>
                <div className="mt-10">ㆍ해당 지우너사업 소관부처(집행기관 포함), 중소기업 통합시스템 운영기관</div>
              </div>
              <div className="mt-30">
                <div className="h4">동의 효력기간</div>
                <div className="mtb-10">ㆍ사업자가 사업 신청시 본 동의서를 제출한 시점 이후</div>
                <div className="mb-10">ㆍ제공된 복적달성 후에는 중소기업 지원사업 통합관리시스템의 효율적인 운영을 위해 필요한 범위 내에서만 보유.이용</div>
                <div className="mb-10">ㆍ기업정보 수집시점 : 신청 및 수혜기업의 사업 신청 이전 3개년부터 참여 이후 10년간</div>
                <div>ㆍ보유 정보가 없을 경우 수집하지 않음</div>
              </div>
              <div className="mt-30">
                <div className="h4 mb-10">제조데이터 제공.이용에 대한 동의</div>
                <div className="eu-custom-description-style-gray">
                  <table summary="제조데이터 제공.이용에 대한 동의">
                    <colgroup>
                      <col width={'20%'} />
                      <col width={'80%'} />
                    </colgroup>
                    <tbody>
                      <tr>
                        <td className="header">제조데이터의<br/>수집 및 이용목적</td>
                        <td>
                          <div className="mb-10">
                            제공된 정보는 아래와 같이 ICT 융합 스마트공장보급확산사업의 사업관리 및 이행, 
                            <br/>후속사업의 기획/지원 등을 위한 비영리, 연구 목적으로 처리, 사용됩니다.
                          </div>
                          <div className="mb-10">ㆍICT 융합 스마트공장보급확산사업의 사업 관리 및 이행, 관련 사업 간 연계지원 및 후속지원 활용 등</div>
                          <div className="mb-10">ㆍ중소기업 지원사업의 기획, 연구 등</div>
                          <div>ㆍ데이터 분석을 통환 중소기업에 대한 서비스 제공 : 불량원인분석, 통계적 공정분석,</div>
                          <div className="ml-14">품질예측, 수요예측, 생산최적화, 설비 예지보전, 설비가동률분석, 최적품질 생산 레시피 도출,</div>
                          <div className="ml-14">최적 에너지 계획수립, 작업장 환경 분석, 작업자 최적 동선 분석 등</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="header">제조.이용하는<br/>제조데이터 항목</td>
                        <td>
                          <div className="mb-10 font-16-500 text-black">도입기업</div>
                          <div className="mb-10">ㆍ공장운영 데이터 : 납기, 불량률, 생산량 재고, 생산스케줄 등 공장운영 데이터 </div>
                          <div className="mb-10">ㆍ설비운영 데이터 : 온도, 진동, 고장이력, 생산 레시피 등 설비 데이터 등</div>
                          <div className="mb-10">ㆍ에너지.환경 데이터 : 기사용량, 기타 에너지 사용량, 작업 동선.방식 등 작업 데이터 등</div>
                          <div className="mb-20">ㆍ이외 제조데이터 분석에 필요한 정보 등 </div>
                          <div className="mb-10 font-16-500 text-black">공급기업</div>
                          <div className="mb-10">ㆍ도입기업에 관한 위 제조데이터</div>
                          <div>ㆍ분석 솔루션 등을 통해 도입기업의 제조데이터를 가공한 데이터 등</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="header">제조.이용하는<br/>제조데이터 항목</td>
                        <td>
                          <div className="mb-10">1. 중소벤처기업부</div>
                          <div>
                            2. 중소벤처기업부의 위탁을 받은 사업 수행기관(중소기업기술정보진흥원, 스마트제조혁신추친단,
                            <br/>스마트제조혁신센터(테크노파크) 및 제조데이터분석 수행기관, 데이터인프라구축사업 플랫폼. 센터 운영기관 등) 
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-30">
                <div className="mb-20">
                  본 동의서식의 동의서 징구는 민법 제 114조의 행정행위의 대리권 행사방식의 현명주의를 적용하여, 중소기업 지원사업의 효율적인 
                  <br/>운영을 위해 본 사업의 소관부처 및 수행기관이 대신하여 받는 것임을 알려 드립니다.
                </div>
                <div>본인은 위 목적으로 동의서에 적시된 정보 및 기관에 한해 본인의 기업정보를 수집,조회 및 활용하는 것에 동의합니다.</div>
              </div>
              <div className="mtb-50">
                <div className="date mb-20">
                  <span>2022</span><span className="mr-20 ml-4">년</span>
                  <span>11</span><span className="mr-20 ml-4">월</span>
                  <span>30</span><span className="ml-4">일</span>
                </div>
                <div className="sign">
                  <div className="row mb-10">
                    <div className="title">기업명</div>
                    <div className="text">(주)유클리드소프트</div>
                  </div>
                  <div className="row">
                    <span className="title">대표자</span>
                    <span className="text">전정국</span>
                  </div>
                </div>
              </div>
              <Row>
                <Col span={20}>
                  <div>본인은 위 각 정보의 수집.조회.활용에 관한 자세한 설명을 듣고, 본 동의서 내용을 충분히 이해하고 동의하였습니다.</div>
                </Col>
                <Col span={4} className="text-r">
                  <Button className="eu-btn-popup-process-warning">동의</Button>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default UsageAgreementPopup;
