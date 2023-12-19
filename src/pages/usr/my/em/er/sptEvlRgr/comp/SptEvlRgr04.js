import React, { useState, useEffect } from 'react';
import { Col, Row, Checkbox, Space } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const SptEvlRgr04 = () => {
  const [ojtPvltrtMttr, setOjtPvltrtMttr] = useState({});

  useEffect(() => {
    setOjtPvltrtMttr({
      a1: '해당',
      a2: '3',
      b1: '해당',
      b2: '3',
      c1: '해당',
      c2: '3',
      d: '5.0',
      e1: true,
      e2: '3',
      f1: true,
      f2: '3',
      g1: true,
      g2: '0',
      h: '5',
    });
  }, []);

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>우대사항</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <table
            key={'SptEvlRgr04'} // 각 테이블마다 고유 키 입력
            className="eu-usr-custom-description-table" // 고정
            summary="우대사항"
          >
            <tr>
              <td className={'header'} rowSpan="2">
                우대사항
              </td>
              <td className={'header'} colSpan="2">
                신청점수
              </td>
              <td className={'header'} colSpan="2">
                확정점수
              </td>
            </tr>
            <tr>
              <td className={'header'}>선택</td>
              <td className={'header'}>점수</td>
              <td className={'header'}>선택</td>
              <td className={'header'}>점수</td>
            </tr>
            <tbody>
              <tr>
                <td>우대사항 항목1</td>
                <td>{ojtPvltrtMttr?.a1}</td>
                <td>{ojtPvltrtMttr?.a2}</td>
                <td>
                  <Space>
                    <Checkbox
                      value={true}
                      onChange={(e) =>
                        ojtChange(e.target.value, 'e1', setOjtPvltrtMttr)
                      }
                      checked={ojtPvltrtMttr?.e1}
                    />
                    해당
                    <Checkbox
                      value={false}
                      onChange={(e) =>
                        ojtChange(e.target.value, 'e1', setOjtPvltrtMttr)
                      }
                      checked={!ojtPvltrtMttr?.e1}
                    />
                    해당없음
                  </Space>
                </td>
                <td>{ojtPvltrtMttr?.e2}</td>
              </tr>
              <tr>
                <td>우대사항 항목2</td>
                <td>{ojtPvltrtMttr?.b1}</td>
                <td>{ojtPvltrtMttr?.b2}</td>
                <td>
                  <Space>
                    <Checkbox
                      value={true}
                      onChange={(e) =>
                        ojtChange(e.target.value, 'f1', setOjtPvltrtMttr)
                      }
                      checked={ojtPvltrtMttr?.f1}
                    />
                    해당
                    <Checkbox
                      value={false}
                      onChange={(e) =>
                        ojtChange(e.target.value, 'f1', setOjtPvltrtMttr)
                      }
                      checked={!ojtPvltrtMttr?.f1}
                    />
                    해당없음
                  </Space>
                </td>
                <td>{ojtPvltrtMttr?.f2}</td>
              </tr>
              <tr>
                <td>우대사항 항목3</td>
                <td>{ojtPvltrtMttr?.c1}</td>
                <td>{ojtPvltrtMttr?.c2}</td>
                <td>
                  <Space>
                    <Checkbox
                      value={true}
                      onChange={(e) =>
                        ojtChange(e.target.value, 'g1', setOjtPvltrtMttr)
                      }
                      checked={ojtPvltrtMttr?.g1}
                    />
                    해당
                    <Checkbox
                      value={false}
                      onChange={(e) =>
                        ojtChange(e.target.value, 'g1', setOjtPvltrtMttr)
                      }
                      checked={!ojtPvltrtMttr?.g1}
                    />
                    해당없음
                  </Space>
                </td>
                <td>{ojtPvltrtMttr?.g2}</td>
              </tr>
              <tr>
                <td colSpan="2">우대사항 가점적용 점수(신청)</td>
                <td>{ojtPvltrtMttr?.d}</td>
                <td>확정점수</td>
                <td>{ojtPvltrtMttr?.h}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default SptEvlRgr04;
