import React, { useState } from 'react';
import { Col, Row, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const SportNeedMatter02 = () => {
  const [ojtAsDtlDmndMttr, setOjtAsDtlDmndMttr] = useState({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '',
    a9: '',
    b1: '',
    b2: '',
  });
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>AS 상세 요청사항</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <table
            key={'SportNeedMatter02Table'} // 각 테이블마다 고유 키 입력
            className="eu-custom-description-table" // 고정
            summary="AS 상세 요청사항"
          >
            <colgroup>
              <col width={'25%'} />
              <col width={'25%'} />
              <col width={'50%'} />
            </colgroup>
            <tr>
              <td className="header" rowSpan="3">
                H/W(부품 등)
              </td>
              <td className="header">대상 부품명(사양)</td>
              <td>
                <Input
                  placeholder="대상 부품명(사양)"
                  onChange={(e) => {
                    ojtChange(e.target.value, 'a1', setOjtAsDtlDmndMttr);
                  }}
                  value={ojtAsDtlDmndMttr?.a1}
                />
              </td>
            </tr>
            <tr>
              <td className="header">문제점</td>
              <td>
                <Input
                  placeholder="문제점"
                  onChange={(e) => {
                    ojtChange(e.target.value, 'a2', setOjtAsDtlDmndMttr);
                  }}
                  value={ojtAsDtlDmndMttr?.a2}
                />
              </td>
            </tr>
            <tr>
              <td className="header">해결 방향</td>
              <td>
                <Input
                  placeholder="해결 방향"
                  onChange={(e) => {
                    ojtChange(e.target.value, 'a3', setOjtAsDtlDmndMttr);
                  }}
                  value={ojtAsDtlDmndMttr?.a3}
                />
              </td>
            </tr>
            <tbody>
              <tr>
                <td className="header" rowSpan="3">
                  S/W(솔루션 등)
                </td>
                <td className="header">솔루션명(공급사)</td>
                <td>
                  <Input
                    placeholder="솔루션명(공급사)"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a4', setOjtAsDtlDmndMttr);
                    }}
                    value={ojtAsDtlDmndMttr?.a4}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">문제점</td>
                <td>
                  <Input
                    placeholder="문제점"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a5', setOjtAsDtlDmndMttr);
                    }}
                    value={ojtAsDtlDmndMttr?.a5}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">해결 방향</td>
                <td>
                  <Input
                    placeholder="해결 방향"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a6', setOjtAsDtlDmndMttr);
                    }}
                    value={ojtAsDtlDmndMttr?.a6}
                  />
                </td>
              </tr>
              <tr>
                <td className="header" rowSpan="3">
                  활용 및 관리(프로그램 수정 개선,시스템 유지관리,데이터
                  관리,사용자 운영지원 등지속적·장기간AS)
                </td>
                <td className="header">솔루션명(공급사)</td>
                <td>
                  <Input
                    placeholder="솔루션명(공급사)"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a7', setOjtAsDtlDmndMttr);
                    }}
                    value={ojtAsDtlDmndMttr?.a7}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">문제점</td>
                <td>
                  <Input
                    placeholder="문제점"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a8', setOjtAsDtlDmndMttr);
                    }}
                    value={ojtAsDtlDmndMttr?.a8}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">해결 방향</td>
                <td>
                  <Input
                    placeholder="해결 방향"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a9', setOjtAsDtlDmndMttr);
                    }}
                    value={ojtAsDtlDmndMttr?.a9}
                  />
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  N/W 등 기타
                </td>
                <td>
                  <Input
                    placeholder="N/W 등 기타"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'b1', setOjtAsDtlDmndMttr);
                    }}
                    value={ojtAsDtlDmndMttr?.b1}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">기대성과</td>
                <td colSpan="2">
                  <Input
                    placeholder="기대성과"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'b2', setOjtAsDtlDmndMttr);
                    }}
                    value={ojtAsDtlDmndMttr?.b2}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default SportNeedMatter02;
