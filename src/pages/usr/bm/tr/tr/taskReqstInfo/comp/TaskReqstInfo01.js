import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Button,
  Input,
  Checkbox,
  Space,
  DatePicker,
  Modal,
  Select,
  ConfigProvider,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import PostSearchPopup from 'pages/usr/bm/tr/tr/taskReqstInfo/popup/PostSearchPopup';
import IndutySearchPopup from 'pages/usr/bm/tr/tr/taskReqstInfo/popup/IndutySearchPopup';
moment.locale('ko');

const TaskReqstInfo01 = () => {
  const [ojtIndcEntInfo, setOjtIndcEntInfo] = useState({});
  const sex = ['남', '여'];
  const cnstcBplc = ['기업정보', '공장'];
  const entScl = ['소기업', '중기업', '대기업'];
  const [postColumn, setPostColumn] = useState('');
  const [postSearchOpen, setPostSearchOpen] = useState(false);
  const closePostSearchClick = () => {
    setPostSearchOpen(false);
  };

  const [indtySearchOpen, setIndtySearchOpen] = useState(false);
  const closeIndtySearchClick = () => {
    setIndtySearchOpen(false);
  };
  const [checkedRprsvNm, setCheckedRprsvNm] = useState(false);
  const ojtIndcEntInfoChange = (value, column) => {
    setOjtIndcEntInfo((prev) => ({
      ...prev,
      [column]: value,
    }));
  };
  useEffect(() => {
    setOjtIndcEntInfo({
      a1: '도입기업명',
      a2: '개인',
      a3: '123-45-67890',
      a4: '123456-1234567',
      a5: '홍길동',
      a6: '1',
      a7: '010-1111-1111',
      a8: 'abc@naver.com',
      a9: 'www.abc.or.kr',
      b1: '',
      b2: '12345',
      b3: '세종특별자치시 중앙집현7로',
      b4: '상세주소',
      b5: '010-1111-1111',
      b6: '042-111-1111',
      b7: '12345',
      b8: '세종특별자치시 중앙집현7로',
      b9: '상세주소',
      c1: '123-45-67890',
      c2: '',
      c3: '042-111-1111',
      c4: '세종',
      c5: '042-111-1111',
      c6: '1',
      c7: '12345',
      c8: '세종특별자치시 중앙집현7로',
      c9: '상세주소',
      d1: '123-45-67890',
      d2: '',
      d3: '홍길동',
      d4: '개별',
      d5: '해당없음',
      d6: '생산품1',
      d7: '생산품2',
      d8: '생산품3',
      d9: '제조',
      e1: '1',
      e2: '서울, 인천, 대전, 광주, 강릉',
      e3: '16',
      e4: '7',
      e5: '0.00',
      e6: '13.00',
      e7: '1차 유리제품(C23121)',
    });
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>도입기업정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <table
            key={'TaskReqstInfo01'}
            className="eu-usr-custom-description-table"
            summary="도입기업정보"
          >
            <colgroup>
              <col width={'15%'} />
              <col width={'10%'} />
              <col width={'35%'} />
              <col width={'15%'} />
              <col width={'25%'} />
            </colgroup>

            <tbody>
              <tr>
                <td className="header" colSpan="2">
                  도입기업명
                </td>
                <td>{ojtIndcEntInfo?.a1}</td>
                <td className="header">법인/개인</td>
                <td>{ojtIndcEntInfo?.a2}</td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  사업자등록번호
                </td>
                <td>{ojtIndcEntInfo?.a3}</td>
                <td className="header">법인등록번호</td>
                <td>{ojtIndcEntInfo?.a4}</td>
              </tr>
              <tr>
                <td className="header" colSpan="2" rowSpan="2">
                  *대표자명
                </td>
                <td rowSpan="2">
                  <Space>
                    <Input
                      placeholder="대표자명"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'a5');
                      }}
                      value={ojtIndcEntInfo?.a5}
                    />
                    {sex.map((item, idx) => {
                      return (
                        <Checkbox
                          key={`${item}${idx}`}
                          value={`${idx + 1}`}
                          checked={ojtIndcEntInfo?.a6 === `${idx + 1}`}
                          onChange={(e) =>
                            ojtIndcEntInfoChange(e.target.value, 'a6')
                          }
                        >
                          {item}
                        </Checkbox>
                      );
                    })}
                  </Space>
                </td>
                <td className="header">*대표자 연락처</td>
                <td>
                  <Space>
                    <Input
                      placeholder="대표자 연락처"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'a7');
                      }}
                      value={ojtIndcEntInfo?.a7}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header">*대표자 이메일</td>
                <td>
                  <Space>
                    <Input
                      placeholder="대표자 이메일"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'a8');
                      }}
                      value={ojtIndcEntInfo?.a8}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  홈페이지
                </td>
                <td>
                  <Space>
                    <Input
                      placeholder="홈페이지"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'a9');
                      }}
                      value={ojtIndcEntInfo?.a9}
                    />
                  </Space>
                </td>
                <td className="header">*공장설립일</td>
                <td>
                  <ConfigProvider locale={locale}>
                    <DatePicker
                      placeholder={'공장설립일'}
                      onChange={(moment, dateString) => {
                        if (moment) {
                          console.log('공장설립일: ', dateString);
                        }
                        ojtIndcEntInfoChange(dateString, 'b1');
                      }}
                    />
                  </ConfigProvider>
                </td>
              </tr>
              <tr>
                <td className="header" rowSpan="7">
                  소재지
                </td>
                <td className="header" rowSpan="2">
                  *기업정보
                </td>
                <td rowSpan="2">
                  <Space direction={'vertical'}>
                    <Input
                      placeholder="우편번호"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'b2');
                      }}
                      value={ojtIndcEntInfo?.b2}
                    />
                    <Button
                      size="small"
                      className="eu-usr-btn-table-fine"
                      onClick={() => {
                        setPostSearchOpen(true);
                        setPostColumn('b2');
                      }}
                    >
                      우편번호찾기
                    </Button>

                    <Input
                      placeholder="주소1"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'b3');
                      }}
                      value={ojtIndcEntInfo?.b3}
                    />
                    <Input
                      placeholder="주소2"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'b4');
                      }}
                      value={ojtIndcEntInfo?.b4}
                    />
                  </Space>
                </td>
                <td className="header">*전화번호</td>
                <td>
                  <Space>
                    <Input
                      placeholder="전화번호"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'b5');
                      }}
                      value={ojtIndcEntInfo?.b5}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header">FAX</td>
                <td>
                  <Space>
                    <Input
                      placeholder="FAX"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'b6');
                      }}
                      value={ojtIndcEntInfo?.b6}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" rowSpan="2">
                  *공장
                </td>
                <td rowSpan="2">
                  <Space direction={'vertical'}>
                    <Input
                      placeholder="우편번호"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'b7');
                      }}
                      value={ojtIndcEntInfo?.b7}
                    />
                    <Button
                      size="small"
                      className="eu-usr-btn-table-fine"
                      onClick={() => {
                        setPostSearchOpen(true);
                        setPostColumn('b7');
                      }}
                    >
                      우편번호찾기
                    </Button>

                    <Input
                      placeholder="주소1"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'b8');
                      }}
                      value={ojtIndcEntInfo?.b8}
                    />
                    <Input
                      placeholder="주소2"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'b9');
                      }}
                      value={ojtIndcEntInfo?.b9}
                    />
                  </Space>
                </td>
                <td className="header">*공장사업자등록번호</td>
                <td>
                  <Space>
                    <Input
                      placeholder="공장사업자등록번호"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'c1');
                      }}
                      value={ojtIndcEntInfo?.c1}
                    />
                    (종사업장번호
                    <Input
                      placeholder=""
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'c2');
                      }}
                      value={ojtIndcEntInfo?.c2}
                    />
                  </Space>
                  )
                </td>
              </tr>
              <tr>
                <td className="header">*전화번호</td>
                <td>
                  <Space>
                    <Input
                      placeholder="전화번호"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'c3');
                      }}
                      value={ojtIndcEntInfo?.c3}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header">*지역(수행기관)</td>
                <td>
                  <Space>
                    <Select
                      onChange={(value) => {
                        ojtIndcEntInfoChange(value, 'c4');
                      }}
                      options={[
                        {
                          value: '세종',
                          label: '세종',
                        },
                      ]}
                      value={ojtIndcEntInfo?.c4}
                    />
                  </Space>
                </td>
                <td className="header">FAX</td>
                <td>
                  <Space>
                    <Input
                      placeholder="FAX"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'c5');
                      }}
                      value={ojtIndcEntInfo?.c5}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" rowSpan="2">
                  *구축(예정)사업장
                </td>
                <td rowSpan="2">
                  <Space direction={'vertical'}>
                    <div>
                      {cnstcBplc.map((item, idx) => {
                        return (
                          <Checkbox
                            key={`${item}${idx}`}
                            value={`${idx + 1}`}
                            checked={ojtIndcEntInfo?.c6 === `${idx + 1}`}
                            onChange={(e) =>
                              ojtIndcEntInfoChange(e.target.value, 'c6')
                            }
                          >
                            {item}
                          </Checkbox>
                        );
                      })}
                    </div>

                    <Input
                      placeholder="우편번호"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'c7');
                      }}
                      value={ojtIndcEntInfo?.c7}
                    />
                    <Input
                      placeholder="주소1"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'c8');
                      }}
                      value={ojtIndcEntInfo?.c8}
                    />
                    <Input
                      placeholder="주소2"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'c9');
                      }}
                      value={ojtIndcEntInfo?.c9}
                    />
                  </Space>
                </td>
                <td className="header">*구축(예정)사업장 사업자등록번호</td>
                <td>
                  <Space>
                    <Input
                      placeholder="공장사업자등록번호"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'd1');
                      }}
                      value={ojtIndcEntInfo?.d1}
                    />
                    (종사업장번호
                    <Input
                      placeholder=""
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'd2');
                      }}
                      value={ojtIndcEntInfo?.d2}
                    />
                    )
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header">*구축(예정)사업장 대표자명</td>
                <td>
                  <Space direction={'vertical'}>
                    <div>
                      <Checkbox
                        value={!checkedRprsvNm}
                        checked={checkedRprsvNm}
                        onChange={(e) => setCheckedRprsvNm(e.target.value)}
                      >
                        기업정보 대표자명과 같음(다를 경우 직접입력)
                      </Checkbox>
                    </div>
                    <Input
                      placeholder="대표자명"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'd3');
                      }}
                      value={
                        checkedRprsvNm ? ojtIndcEntInfo?.a5 : ojtIndcEntInfo?.d3
                      }
                      disabled={checkedRprsvNm}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  *산단구분
                </td>
                <td>
                  <Space>
                    <Select
                      onChange={(value) => {
                        ojtIndcEntInfoChange(value, 'd4');
                      }}
                      options={[
                        {
                          value: '개별',
                          label: '개별',
                        },
                      ]}
                      value={ojtIndcEntInfo?.d4}
                    />
                  </Space>
                </td>
                <td className="header">*산단명</td>
                <td>
                  <Space>
                    <Input
                      placeholder="산단명"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'd5');
                      }}
                      value={ojtIndcEntInfo?.d5}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  *주생산품
                </td>
                <td>
                  <Space>
                    <Input
                      placeholder="생산품1"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'd6');
                      }}
                      value={ojtIndcEntInfo?.d6}
                    />
                    <Input
                      placeholder="생산품2"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'd7');
                      }}
                      value={ojtIndcEntInfo?.d7}
                    />
                    <Input
                      placeholder="생산품3"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'd8');
                      }}
                      value={ojtIndcEntInfo?.d8}
                    />
                  </Space>
                </td>
                <td className="header">*주요공정</td>
                <td>
                  <Space>
                    <Input
                      placeholder="주요공정"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'd9');
                      }}
                      value={ojtIndcEntInfo?.d9}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  *기업규모
                </td>
                <td colSpan="3">
                  <Space>
                    {entScl.map((item, idx) => {
                      return (
                        <Checkbox
                          key={`${item}${idx}`}
                          value={`${idx + 1}`}
                          checked={ojtIndcEntInfo?.e1 === `${idx + 1}`}
                          onChange={(e) =>
                            ojtIndcEntInfoChange(e.target.value, 'e1')
                          }
                        >
                          {item}
                        </Checkbox>
                      );
                    })}
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  *주요납품처
                </td>
                <td colSpan="3">
                  <Space>
                    <Input
                      placeholder="주요납품처"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'e2');
                      }}
                      value={ojtIndcEntInfo?.e2}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  *현장인력
                </td>
                <td colSpan="3">
                  <Space>
                    현장인력
                    <Input
                      placeholder="현장인력"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'e3');
                      }}
                      value={ojtIndcEntInfo?.e3}
                    />
                    명 / 사무인력
                    <Input
                      placeholder="사무인력"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'e4');
                      }}
                      value={ojtIndcEntInfo?.e4}
                    />
                    명
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  외국인근로자 비율(%)
                </td>
                <td colSpan="3">
                  <Space>
                    <Input
                      placeholder="외국인근로자 비율"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'e5');
                      }}
                      value={ojtIndcEntInfo?.e5}
                    />
                    <span style={{ color: 'red' }}>
                      외국인근로자가 있을 경우 '20'년 기준
                    </span>
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  R&D인력 비율(%)
                </td>
                <td colSpan="3">
                  <Space>
                    <Input
                      placeholder="R&D인력 비율"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'e6');
                      }}
                      value={ojtIndcEntInfo?.e6}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  *업종
                </td>
                <td colSpan="3">
                  <Space>
                    <Input
                      placeholder="업종"
                      onChange={(e) => {
                        ojtIndcEntInfoChange(e.target.value, 'e7');
                      }}
                      value={ojtIndcEntInfo?.e7}
                    />
                    <Button
                      size="small"
                      className="eu-usr-btn-table-fine"
                      onClick={() => {
                        setIndtySearchOpen(true);
                      }}
                    >
                      검색
                    </Button>
                  </Space>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ color: 'red' }}>
            ※ 산단명 : 미해당시 '해당없음' 등록
          </div>
        </Col>
      </Row>
      <PostSearchPopup
        open={postSearchOpen}
        closeClick={closePostSearchClick}
        popupSelectClick={ojtIndcEntInfoChange}
        column={postColumn}
      />
      <IndutySearchPopup
        open={indtySearchOpen}
        closeClick={closeIndtySearchClick}
        popupSelectClick={ojtIndcEntInfoChange}
        column={'e7'}
      />
    </>
  );
};

export default TaskReqstInfo01;
