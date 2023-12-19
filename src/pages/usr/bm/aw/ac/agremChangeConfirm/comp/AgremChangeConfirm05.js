import React, { useState } from 'react';
import { Col, Row, Input, Space } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const AgremChangeConfirm05 = ({}) => {
  const [ojtBfrBizCt, setOjtBfrBizCt] = useState({
    a1: 2500000,
    a2: 2500000,
    a3: 0,
    a4: 0,
    a5: 0,
    a6: 2500000,
  });
  const [ojtAftBizCt, setOjtAftBizCt] = useState({});

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>변경 전 사업비 변경</TitleComp>
          <div>사업비 지급(단위 : 원)</div>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <table
            key={'ojtBfrBizCtTable'} // 각 테이블마다 고유 키 입력
            className="eu-custom-description-table" // 고정
            summary="변경 전 사업비 변경"
          >
            <colgroup>
              <col width={'12%'} />
              <col width={'12%'} />
              <col width={'12%'} />
              <col width={'12%'} />
              <col width={'12%'} />
              <col width={'12%'} />
              <col width={'12%'} />
              <col width={'16%'} />
            </colgroup>

            <tbody>
              <tr>
                <td className={'header'} rowSpan="2">
                  구분
                </td>
                <td className={'header'} colSpan="6">
                  도입기업
                </td>
                <td className={'header'}>전담기관</td>
              </tr>
              <tr>
                <td className={'header'}>중도금(현금)</td>
                <td className={'header'}>잔금(현금)</td>
                <td className={'header'}>직접구입비</td>
                <td className={'header'}>도입기업 사업관리 인력 인건비</td>
                <td className={'header'}>클라우드 기반 사용료</td>
                <td className={'header'}>소계</td>
                <td className={'header'}>정부지원금</td>
              </tr>
              <tr>
                <td className={'header'}>지급액</td>
                <td>
                  <Input
                    placeholder="중도금(현금)"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a1', setOjtBfrBizCt);
                    }}
                    value={ojtBfrBizCt?.a1}
                  />
                </td>
                <td>
                  <Input
                    placeholder="잔금(현금)"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a2', setOjtBfrBizCt);
                    }}
                    value={ojtBfrBizCt?.a2}
                  />
                </td>
                <td>
                  <Input
                    placeholder="직접구입비"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a3', setOjtBfrBizCt);
                    }}
                    value={ojtBfrBizCt?.a3}
                  />
                </td>
                <td>
                  <Input
                    placeholder="도입기업 사업관리 인력 인건비"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a4', setOjtBfrBizCt);
                    }}
                    value={ojtBfrBizCt?.a4}
                  />
                </td>
                <td>
                  <Input
                    placeholder="클라우드 기반 사용료"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a5', setOjtBfrBizCt);
                    }}
                    value={ojtBfrBizCt?.a5}
                  />
                </td>
                <td>
                  <Input
                    placeholder="소계"
                    value={Object.values(ojtBfrBizCt).reduce(
                      (a, b) => a + Number(b),
                      0
                    )}
                  />
                </td>
                <td>
                  <Input
                    placeholder="정부지원금"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a6', setOjtBfrBizCt);
                    }}
                    value={ojtBfrBizCt?.a6}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>변경 후 사업비 변경</TitleComp>
        </Col>
        <div>사업비 지급(단위 : 원)</div>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <table
            key={'ojtAftBizCtTable'} // 각 테이블마다 고유 키 입력
            className="eu-custom-description-table" // 고정
            summary="변경 후 사업비 변경"
          >
            <colgroup>
              <col width={'12%'} />
              <col width={'12%'} />
              <col width={'12%'} />
              <col width={'12%'} />
              <col width={'12%'} />
              <col width={'12%'} />
              <col width={'12%'} />
              <col width={'16%'} />
            </colgroup>

            <tbody>
              <tr>
                <td className={'header'} rowSpan="2">
                  구분
                </td>
                <td className={'header'} colSpan="6">
                  도입기업
                </td>
                <td className={'header'}>전담기관</td>
              </tr>
              <tr>
                <td className={'header'}>중도금(현금)</td>
                <td className={'header'}>잔금(현금)</td>
                <td className={'header'}>직접구입비</td>
                <td className={'header'}>도입기업 사업관리 인력 인건비</td>
                <td className={'header'}>클라우드 기반 사용료</td>
                <td className={'header'}>소계</td>
                <td className={'header'}>정부지원금</td>
              </tr>
              <tr>
                <td className={'header'}>지급액</td>
                <td>
                  <Input
                    placeholder="중도금(현금)"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a1', setOjtAftBizCt);
                    }}
                    value={ojtAftBizCt?.a1}
                  />
                </td>
                <td>
                  <Input
                    placeholder="잔금(현금)"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a2', setOjtAftBizCt);
                    }}
                    value={ojtAftBizCt?.a2}
                  />
                </td>
                <td>
                  <Input
                    placeholder="직접구입비"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a3', setOjtAftBizCt);
                    }}
                    value={ojtAftBizCt?.a3}
                  />
                </td>
                <td>
                  <Input
                    placeholder="도입기업 사업관리 인력 인건비"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a4', setOjtAftBizCt);
                    }}
                    value={ojtAftBizCt?.a4}
                  />
                </td>
                <td>
                  <Input
                    placeholder="클라우드 기반 사용료"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a5', setOjtAftBizCt);
                    }}
                    value={ojtAftBizCt?.a5}
                  />
                </td>
                <td>
                  <Input
                    placeholder="소계"
                    value={Object.values(ojtAftBizCt).reduce(
                      (a, b) => a + Number(b),
                      0
                    )}
                  />
                </td>
                <td>
                  <Input
                    placeholder="정부지원금"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a6', setOjtAftBizCt);
                    }}
                    value={ojtAftBizCt?.a6}
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

export default AgremChangeConfirm05;
