import React from 'react';
import { Col, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const WctReqstDetail03 = ({ ojtBizCtPrgrsStss }) => {
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>사업비 진행 상태</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <table
            key={'UsrWctReqstDetail03'} // 각 테이블마다 고유 키 입력
            className="eu-custom-description-table" // 고정
            summary="사업비 진행 상태"
          >
            <colgroup>
              <col width={'20%'} />
              <col width={'40%'} />
              <col width={'40%'} />
            </colgroup>
            <tbody>
              <tr>
                <td rowSpan={2} className="header">
                  선금
                </td>
              </tr>
              <tr>
                <td>{`상태 : ${ojtBizCtPrgrsStss?.a1}`}</td>
                <td>{`지급액: ${ojtBizCtPrgrsStss?.a2}원`}</td>
              </tr>
              <tr>
                <td rowSpan={2} className="header">
                  잔금
                </td>
              </tr>
              <tr>
                <td>{`상태 : ${ojtBizCtPrgrsStss?.a1}`}</td>
                <td>{`지급액: ${ojtBizCtPrgrsStss?.a2}원`}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default WctReqstDetail03;
