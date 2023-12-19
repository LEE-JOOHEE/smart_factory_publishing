import React, { useState, useEffect } from 'react';
import { Col, Row, Select, Input, Checkbox, Space } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';

const { TextArea } = Input;

const TaskReqstBass01 = () => {
  const [ojtAsmtBscInfo, setOjtAsmtBscInfo] = useState({});

  const ojtAsmtBscInfoChange = (value, column) => {
    setOjtAsmtBscInfo((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
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
  const spcltyChckLst = ['MES', 'PLM'];
  const cnslChckLst = ['해당없음', '일터혁신컨설팅'];

  useEffect(() => {
    setOjtAsmtBscInfo({
      a1: '스마트공장 구축 및 고도화',
      a2: '기초',
      a3: '중소기업기술정보진흥원',
      a4: '예',
      a5: '2022-12A-027-000000',
      a6: '1년 차',
      a7: '중소기업기술정보진흥원_스마트공장 구축 및 고도화 기초(코디지원)',
      a8: '6',
      a9: '미적용',
      b1: '54,717,000',
      b2: '0',
      b3: '1',
      b4: '1',
      b5: '1',
      b6: '1',
      b7: '1',
      b8: '',
    });
  }, []);

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>과제기본정보</TitleComp>
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
                      ojtAsmtBscInfoChange(value, 'a2');
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
                <td className="header">*도입기업명</td>
                <td>
                  <Input
                    placeholder="도입기업명"
                    onChange={(e) => {
                      ojtAsmtBscInfoChange(e.target.value, 'a3');
                    }}
                    value={ojtAsmtBscInfo?.a3}
                  />
                </td>
                <td className="header">코디네이터 신청 여부</td>
                <td>
                  <Select
                    onChange={(value) => {
                      ojtAsmtBscInfoChange(value, 'a4');
                    }}
                    options={[
                      {
                        value: '예',
                        label: '예',
                      },
                    ]}
                    value={ojtAsmtBscInfo?.a4}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">과제번호</td>
                <td>{ojtAsmtBscInfo?.a5}</td>
                <td className="header">연차</td>
                <td>
                  <Select
                    onChange={(value) => {
                      ojtAsmtBscInfoChange(value, 'a6');
                    }}
                    options={[
                      {
                        value: '1년 차',
                        label: '1년 차',
                      },
                    ]}
                    value={ojtAsmtBscInfo?.a6}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">*과제명</td>
                <td colSpan="3">
                  <Input
                    placeholder="과제명"
                    onChange={(e) => {
                      ojtAsmtBscInfoChange(e.target.value, 'a7');
                    }}
                    value={ojtAsmtBscInfo?.a7}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">*사업기간</td>
                <td>
                  <Space>
                    착수일로부터
                    <Input
                      placeholder="사업기간"
                      onChange={(e) => {
                        ojtAsmtBscInfoChange(e.target.value, 'a8');
                      }}
                      value={ojtAsmtBscInfo?.a8}
                    />
                    개월
                  </Space>
                </td>
                <td className="header">*기 구축 시스템</td>
                <td>
                  <Input
                    placeholder="기 구축 시스템"
                    onChange={(e) => {
                      ojtAsmtBscInfoChange(e.target.value, 'a9');
                    }}
                    value={ojtAsmtBscInfo?.a9}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">총사업비(원)</td>
                <td>{ojtAsmtBscInfo?.b1}</td>
                <td className="header">지원요청금액(원)</td>
                <td>{ojtAsmtBscInfo?.b2}</td>
              </tr>
              <tr>
                <td className="header">*도입(고도화)시스템</td>
                <td colSpan="3">
                  {indcChckLst.map((item, idx) => {
                    return (
                      <Checkbox
                        key={`checkbox${item}${idx}`}
                        value={`${idx + 1}`}
                        onChange={(e) =>
                          ojtAsmtBscInfoChange(e.target.value, 'b3')
                        }
                        checked={ojtAsmtBscInfo?.b3 === `${idx + 1}`}
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
                  *목표수준
                </td>
                <td colSpan="3">
                  {glBfrChckLst.map((item, idx) => {
                    return (
                      <Checkbox
                        key={`checkbox${item}${idx}`}
                        value={`${idx + 1}`}
                        onChange={(e) =>
                          ojtAsmtBscInfoChange(e.target.value, 'b4')
                        }
                        checked={ojtAsmtBscInfo?.b4 === `${idx + 1}`}
                      >
                        {item}
                      </Checkbox>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  {glAftChckLst.map((item, idx) => {
                    return (
                      <Checkbox
                        key={`checkbox${item}${idx}`}
                        value={`${idx + 1}`}
                        onChange={(e) =>
                          ojtAsmtBscInfoChange(e.target.value, 'b5')
                        }
                        checked={ojtAsmtBscInfo?.b5 === `${idx + 1}`}
                      >
                        {item}
                      </Checkbox>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <td className="header">*전문분야</td>
                <td colSpan="3">
                  {spcltyChckLst.map((item, idx) => {
                    return (
                      <Checkbox
                        key={`checkbox${item}${idx}`}
                        value={`${idx + 1}`}
                        onChange={(e) =>
                          ojtAsmtBscInfoChange(e.target.value, 'b6')
                        }
                        checked={ojtAsmtBscInfo?.b6 === `${idx + 1}`}
                      >
                        {item}
                      </Checkbox>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <td className="header">*희망컨설팅지원사업</td>
                <td colSpan="3">
                  {cnslChckLst.map((item, idx) => {
                    return (
                      <Checkbox
                        key={`checkbox${item}${idx}`}
                        value={`${idx + 1}`}
                        onChange={(e) =>
                          ojtAsmtBscInfoChange(e.target.value, 'b7')
                        }
                        checked={ojtAsmtBscInfo?.b7 === `${idx + 1}`}
                      >
                        {item}
                      </Checkbox>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <td className="header">*사업개요</td>
                <td colSpan="3">
                  <TextArea
                    value={ojtAsmtBscInfo?.b8}
                    onChange={(e) => ojtAsmtBscInfoChange(e.target.value, 'b8')}
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

export default TaskReqstBass01;
