import React, { useState, useEffect } from 'react';
import { Button, Col, Modal, Row, Tabs, Descriptions } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import 'css/CommonUsr.css';
import DummyImg from 'css/images/user-icons/user-dummy-img/dummy-solution.png';

const SubPage4_pop_2 = ({ cmEvlMfcmSgnPopupOpen2, setCmEvlMfcmSgnPopupOpen2, ojtChange }) => {

  const [tabItemsDetail, setTabItemsDetail] = useState([
    { 
      label: "기본정보", 
      key: "기본정보",
      children: '',
    },
    { 
      label: "기업정보", 
      key: "기업정보",
      children: '',
    },
    { 
      label: "추진실적", 
      key: "추진실적",
      children: '',
    },
    { 
      label: "자체실적", 
      key: "자체실적",
      children: '',
    },
  ]);

  const closeClick = () => {
    setCmEvlMfcmSgnPopupOpen2(false);
  };


  const solutionTextData = [];
  for (let i = 0; i < 3; i++) {
    solutionTextData.push({
      key: i,
      a1 : '<< 화장품 CEP :   Cosmetics Enterprise Planning >>',
      a2 : '이젬코는 다수의 화장품 고객사를 보유하여 풍부한 노하우가 특징입니다.',
      a3: [
        '-> 또한 화장품 현업 출신의 기획자가 시스템을 설계 법규와 CGMP 기반의',
        '체계적인 시스템 확보가 가능하며 ㆍ 책임판매업자 업무 시스템 ㆍ ',
        '제조업자의 연구 개발 및 품질검사 시스템이 특화 되어 더욱 전문성이 강조됩니다.',
      ],
      a4: [
        '-> 또한 맞춤형화장품 조제관리사를 보유하여 ㆍ맞춤형화장품 매장의 토탈솔루션 ',
        '시스템을 제안 가능한 국내 유일의 특화 시스템 전문 회사입니다',
      ],
      a5: '[ ERP + 칭량POP + 제조POP + 충전모니터링 + WMS + 맞춤형화장품 ] ',
    });
  }

  return (
    <>
      <Modal
        key="cmEvlMfcmSgnPopupOpen"
        open={cmEvlMfcmSgnPopupOpen2}
        title="전문/특화 업종"
        onCancel={closeClick}
        width={1400}
        className="modal-bg-white"
        footer={[]}
      >

        {/* 모달 안에 탭메뉴 */}
        <Row className="mt-20">
          <Col span={24}>
            <Tabs items={tabItemsDetail} className="eu-content-tab" />
          </Col>
        </Row>

        {/* 기본정보 탭 */}
        {/* 기본정보 탭만 구현하였고,  
            기업정보, 추진실적, 자체실적 탭내용은 테이블 구조이니 개발단에서
            추가적으로 생산해주시길 부탁드립니다.
        */}
        <Row className="mb-20">
          <Col span={24}>
            <div className="headline mb-10">사업개요</div>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="회사명" span={1}>(주)이젬코</Descriptions.Item>
              <Descriptions.Item label="설립일" span={2}>2013-05-01</Descriptions.Item>
              <Descriptions.Item label="사업자등록번호" span={1}>204-86-41984</Descriptions.Item>
              <Descriptions.Item label="법인등록번호" span={2}>110111-5125318</Descriptions.Item>
              <Descriptions.Item label="대표자명" span={1}>이종극</Descriptions.Item>
              <Descriptions.Item label="홈페이지" span={2}><a href={"#/"}>www.egemco.com</a></Descriptions.Item>
              <Descriptions.Item label="소재지" span={3}>
                <span className="text-gray-700-icon mr-8">04795</span>
                서울특별시 성동구 성수이로 147 (성수동2가) 아이에스비즈타워 809호
              </Descriptions.Item>
              <Descriptions.Item label="전화번호" span={1}>02-2038-2472</Descriptions.Item>
              <Descriptions.Item label="팩스번호" span={1}>02-6974-1172</Descriptions.Item>
            </Descriptions>
          </Col>

          <Col span={24} className="mt-30">
            <div className="headline mb-10">홍보 및 서비스</div>
            <div className="eu-custom-description-table">
              <table key={''} summary="홍보 및 서비스">
                <colgroup>
                  <col width={'10%'} />
                  <col width={'40%'} />
                  <col width={'50%'} />
                </colgroup>
                <tbody>
                  <tr>
                    <td className="header">기업로고</td>
                    <td colSpan={2}>
                      <img src={DummyImg} alt="기업로고 대체 이미지" />
                    </td>
                  </tr>

                  {solutionTextData.map((item, index) => {
                    return (
                      <tr>
                        <td className="header">{`솔루션 ${index + 1}`}</td>
                        <td>
                          <div className="img-box">
                            <div className="font-16-500 text-gray-500 mtb-14">솔루션(S/W) - 공장운영 - MES</div>
                            <img src={DummyImg} alt="기업솔루션 이미지" />
                          </div>
                        </td>
                        <td className="pr-40">
                          <div className="font-16-500 mb-16">{item.a1}</div>
                          <div className="font-16-400 text-gray-500 lh-170">
                            <div className="">{item.a2}</div>
                            <div className="mb-20">{item.a3}</div>
                            <div className="">{item.a4}</div>
                            <div className="mt-20">{item.a5}</div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Col>

        </Row>







      </Modal>

      


    </>
  );
};

export default SubPage4_pop_2;
