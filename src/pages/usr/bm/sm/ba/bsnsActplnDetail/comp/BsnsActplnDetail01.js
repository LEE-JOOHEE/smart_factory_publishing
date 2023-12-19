import React, { useState, useEffect } from 'react';
import { Col, Row, Select, Input, Checkbox, Space, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import DescriptionRequired from 'components/layout/DescriptionRequired';
import { ojtChange } from 'components/common/Common';

const { TextArea } = Input;

const BsnsActplnDetail01 = () => {
  const [ojtAsmtBscInfo, setOjtAsmtBscInfo] = useState({});

  const indcChckLst = [
    'MES(POP)',
    'ERP',
    'SCM',
    'PLM',
    'FEMS',
    '5G',
    '빅데이터(AI)',
    'APS',
    '제어시스텀',
    '컨트롤러',
    '센서',
    '식별시스템(RFID, 바코드)',
    '머신비전',
    '산업용 로봇',
    '기타 자동화설비',
    '클라우드(신규)',
    '클라우드(기존 고도화)',
    '클라우드(전환)',
    'AR/VR',
    'CPS',
    '기타',
  ];
  const glBfrChckLst = ['미적용', '기초', '중간1', '중간2', '고도화'];
  const glAftChckLst = ['기초', '중간1', '중간2', '고도화'];

  const saveClick = () => {
    Modal.info({ title: `저장 : ${JSON.stringify(ojtAsmtBscInfo)}` });
  };

  useEffect(() => {
    setOjtAsmtBscInfo({
      a1: '스마트공장 구축 및 고도화',
      a2: '기초',
      a3: '중소기업기술정보진흥원',
      a4: '2022-12A-027-000000',
      a5: '중소기업기술정보진흥원_스마트공장 구축 및 고도화 기초(코디지원)',
      a6: '6',
      a7: '미적용',
      a8: '54,717,000',
      a9: '0',
      b1: '1',
      b2: '1',
      b3: '1',
      b4: '',
    });
  }, []);

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>과제기본정보</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-warning"
            onClick={saveClick}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <table
            key={'TaskReqstBass01'}
            className="eu-usr-custom-description-table"
            summary="과제기본정보"
          >
            <colgroup>
              <col width={'15%'} />
              <col width={'35%'} />
              <col width={'15%'} />
              <col width={'35%'} />
            </colgroup>
            <tbody>
              <tr>
                <td className="header">사업명</td>
                <td>{ojtAsmtBscInfo?.a1}</td>
                <td className="header">과제구분</td>
                <td>
                  <Select
                    onChange={(value) => {
                      ojtChange(value, 'a2', setOjtAsmtBscInfo);
                    }}
                    options={[
                      {
                        value: '기초',
                        label: '기초',
                      },
                    ]}
                    value={ojtAsmtBscInfo?.a2}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">
                  {<DescriptionRequired>도입기업명</DescriptionRequired>}
                </td>
                <td colSpan={3}>{ojtAsmtBscInfo?.a3}</td>
              </tr>
              <tr>
                <td className="header">과제번호</td>
                <td colSpan={3}>{ojtAsmtBscInfo?.a4}</td>
              </tr>
              <tr>
                <td className="header">
                  {<DescriptionRequired>과제명</DescriptionRequired>}
                </td>
                <td colSpan="3">{ojtAsmtBscInfo?.a5}</td>
              </tr>
              <tr>
                <td className="header">
                  {<DescriptionRequired>사업기간</DescriptionRequired>}
                </td>
                <td>
                  <Space>
                    착수일로부터
                    <Input
                      placeholder="사업기간"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'a6', setOjtAsmtBscInfo);
                      }}
                      value={ojtAsmtBscInfo?.a6}
                    />
                    개월
                  </Space>
                </td>
                <td className="header">
                  {<DescriptionRequired>기 구축 시스템</DescriptionRequired>}
                </td>
                <td>
                  <Input
                    placeholder="기 구축 시스템"
                    onChange={(e) => {
                      ojtChange(e.target.value, 'a7', setOjtAsmtBscInfo);
                    }}
                    value={ojtAsmtBscInfo?.a7}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">총사업비(원)</td>
                <td>{ojtAsmtBscInfo?.a8}</td>
                <td className="header">지원요청금액(원)</td>
                <td>{ojtAsmtBscInfo?.a9}</td>
              </tr>
              <tr>
                <td className="header">
                  {
                    <DescriptionRequired>
                      도입(고도화)시스템
                    </DescriptionRequired>
                  }
                </td>
                <td colSpan="3">
                  {indcChckLst.map((item, idx) => {
                    return (
                      <Checkbox
                        key={`checkbox${item}${idx}`}
                        value={`${idx + 1}`}
                        onChange={(e) =>
                          ojtChange(e.target.value, 'b1', setOjtAsmtBscInfo)
                        }
                        checked={ojtAsmtBscInfo?.b1 === `${idx + 1}`}
                      >
                        {item}
                      </Checkbox>
                    );
                  })}
                  <div style={{ color: 'blue' }}>
                    ※ 공장관리시스템(MES) 기업자원관리시스템(ERP)
                    공급사슬관리시스템(SCM) 제품개발지원시스템(PLM)
                  </div>
                </td>
              </tr>
              <tr>
                <td className="header" rowSpan="2">
                  {<DescriptionRequired>목표수준</DescriptionRequired>}
                </td>
                <td colSpan="3">
                  <Space>
                    구축전
                    {glBfrChckLst.map((item, idx) => {
                      return (
                        <Checkbox
                          key={`checkbox${item}${idx}`}
                          value={`${idx + 1}`}
                          onChange={(e) =>
                            ojtChange(e.target.value, 'b2', setOjtAsmtBscInfo)
                          }
                          checked={ojtAsmtBscInfo?.b2 === `${idx + 1}`}
                        >
                          {item}
                        </Checkbox>
                      );
                    })}
                  </Space>
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <Space>
                    구축후
                    {glAftChckLst.map((item, idx) => {
                      return (
                        <Checkbox
                          key={`checkbox${item}${idx}`}
                          value={`${idx + 1}`}
                          onChange={(e) =>
                            ojtChange(e.target.value, 'b3', setOjtAsmtBscInfo)
                          }
                          checked={ojtAsmtBscInfo?.b3 === `${idx + 1}`}
                        >
                          {item}
                        </Checkbox>
                      );
                    })}
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header">
                  {<DescriptionRequired>사업개요</DescriptionRequired>}
                </td>
                <td colSpan="3">
                  <TextArea
                    value={ojtAsmtBscInfo?.b8}
                    onChange={(e) =>
                      ojtChange(e.target.value, 'b4', setOjtAsmtBscInfo)
                    }
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

export default BsnsActplnDetail01;
