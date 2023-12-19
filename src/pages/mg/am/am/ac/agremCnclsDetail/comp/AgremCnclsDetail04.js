import React, { useState } from 'react';
import { Col, Row, Tabs, Table, Button, Space, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import ElectAgremSignIcon from 'css/images/icons/electAgremSignIcon.svg';

const AgremCnclsDetail04 = () => {
  return (
    <>
      <Row className="eu-row-comp-title mb-12">
        <Col span={6} className="title-0">
          <TitleComp>전자협약서 서명</TitleComp>
        </Col>
        <Col span={18} className="mt-auto">
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red ml-auto">
              * 협약버튼이 안보이는 경우 해당 수행기관으로 협약체결 가능한 기간 변경요청 하시기 바랍니다.
            </span>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <table className="electAgremSignTable">
            <colgroup>
              <col width="50%" />
              <col width="50%" />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={2}>전담기관 서명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex-row-center gap-row-10">
                    <img src={ElectAgremSignIcon} alt="전자서명 아이콘" className="mr-42" />
                    <div>
                      <div>위 전자협약서의 내용을 확인하였고, 이 내용을 협약 체결 진행에 동의합니다.</div>
                      <Button className="eu-btn-crud-default mt-10 ml-0">전자서명하기</Button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex-row-center">
                    <div>
                      <div>폐기 시 사유를 기재하여 주세요.</div>
                      <div className="flex-row item-center mt-10">
                        <Input style={{ width: '460px' }} />
                        <Button className="eu-btn-crud-default">폐기</Button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default AgremCnclsDetail04;
