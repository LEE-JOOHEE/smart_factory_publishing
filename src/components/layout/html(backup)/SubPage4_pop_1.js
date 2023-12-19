import React, { useState } from 'react';
import { Button, Col, Modal, Row, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const SubPage4_pop_1 = ({ cmEvlMfcmSgnPopupOpen, setCmEvlMfcmSgnPopupOpen }) => {
  const closeClick = () => {
    setCmEvlMfcmSgnPopupOpen(false);
  };

  return (
    <>
      <Modal
        key="cmEvlMfcmSgnPopupOpen"
        open={cmEvlMfcmSgnPopupOpen}
        title="전문/특화 업종"
        onCancel={closeClick}
        width={900}
        className="modal-bg-white"
        footer={[]}
      >

        <Row className="mtb-20">
          <Col span={24}>
            <div className="eu-custom-description-style-gray">
              <table key={''} summary="테이블정보">
                <tbody>
                  <tr>
                    <td className="header detail">
                      식료품 제조업,음료 제조업,섬유제품 제조업; 의복 제외,인쇄 및 기록매체 복제업,화학 물질 및 화학제품 제조업,
                      의약품 제외,의료용 물질 및 의약품 제조업,고무 및 플라스틱제품 제조업,비금속 광물제품 제조업,
                      1차 금속 제조업,금속 가공제품 제조업; 기계 및 가구 제외,전자 부품. 컴퓨터. 영상. 음향 및 통신장비 제조업,
                      의료. 정밀. 광학 기기 및 시계 제조업,전기장비 제조업,기타 기계 및 장비 제조업,자동차 및 트레일러 제조업,
                      기타 운송장비 제조업,산업용 기계 및 장비 수리업
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default SubPage4_pop_1;
