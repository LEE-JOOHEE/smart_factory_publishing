import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Descriptions,
  Select,
  Input,
  Space,
  Checkbox,
  Button,
  ConfigProvider,
  DatePicker,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
import PostSearchPopup from 'pages/usr/bm/tr/tr/taskReqstInfo/popup/PostSearchPopup';
import IndutySearchPopup from 'pages/usr/bm/tr/tr/taskReqstInfo/popup/IndutySearchPopup';
moment.locale('ko');

const { RangePicker } = DatePicker;

const SportBassInfo01 = () => {
  const [ojtIndcEntInfo, setOjtIndcEntInfo] = useState({});
  const sex = ['남', '여'];
  const isCtrt = ['가입', '미가입'];
  const indcSolution = [
    '자동화 장비',
    'MES',
    'ERP',
    'POP',
    'PLM',
    'SCM',
    'FEMS',
    '기타',
  ];
  const spcltyFld = [
    'MES',
    'PLM',
    'SCM',
    'APS',
    'ERP',
    'CPS',
    'POP',
    'IoT기술',
    '공장자동화',
    '인공지능',
    '빅데이터 분석',
    '클라우드 컴퓨팅',
    '5G',
    '스마트센서',
    'TPM',
    '로봇활용 공정혁신',
    '품질혁신',
    'LEAN',
    '6-SIGMA',
    'CAD/CAM/CAE',
    '3D프린팅',
    'POOL PROOF',
    'AR/VR 등',
  ];
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

  useEffect(() => {
    setOjtIndcEntInfo({
      a1: '스마트공장 AS 지원',
      a2: '2022-12-15',
      a3: '도입기업명',
      a4: '개인',
      a5: '123-45-67890',
      a6: '123456-1234567',
      a7: '홍길동',
      a8: '1',
      a9: '010-1111-1111',
      b1: 'abc@naver.com',
      b2: 'www.abc.or.kr',
      b3: '',
      b4: '12345',
      b5: '세종특별자치시 중앙집현7로',
      b6: '상세주소',
      b7: '010-1111-1111',
      b8: '042-111-1111',
      b9: '12345',
      c1: '세종특별자치시 중앙집현7로',
      c2: '상세주소',
      c3: '123-45-67890',
      c4: '',
      c5: '042-111-1111',
      c6: '생산품1',
      c7: '생산품2',
      c8: '생산품3',
      c9: '전체',
      d1: '',
      d2: '1',
      d3: '2016',
      d4: '전체',
      d5: '1',
      d6: '',
      d7: '1',
      d8: '16',
      d9: '7',
      e1: '0.00',
      e2: '13.00',
      e3: '1차 유리제품(C23121)',
      e4: '정부지원 구축',
      e5: '',
      e6: '',
      e7: '정부지원 구축',
      e8: '',
    });
  }, []);
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>과제기본정보</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          {/* 우측 버튼 */}
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
                  사업명
                </td>
                <td>{ojtIndcEntInfo?.a1}</td>
                <td className="header">신청일자</td>
                <td>{ojtIndcEntInfo?.a2}</td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  도입기업명
                </td>
                <td>{ojtIndcEntInfo?.a3}</td>
                <td className="header">법인/개인</td>
                <td>{ojtIndcEntInfo?.a4}</td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  사업자등록번호
                </td>
                <td>{ojtIndcEntInfo?.a5}</td>
                <td className="header">법인등록번호</td>
                <td>{ojtIndcEntInfo?.a6}</td>
              </tr>
              <tr>
                <td className="header" colSpan="2" rowSpan="2">
                  대표자명
                </td>
                <td rowSpan="2">
                  <Space>
                    <Input
                      placeholder="대표자명"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'a7', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.a7}
                    />
                    {sex.map((item, idx) => {
                      return (
                        <Checkbox
                          key={`${item}${idx}`}
                          value={`${idx + 1}`}
                          checked={ojtIndcEntInfo?.a6 === `${idx + 1}`}
                          onChange={(e) =>
                            ojtChange(e.target.value, 'a8', setOjtIndcEntInfo)
                          }
                        >
                          {item}
                        </Checkbox>
                      );
                    })}
                  </Space>
                </td>
                <td className="header">대표자 연락처</td>
                <td>
                  <Space>
                    <Input
                      placeholder="대표자 연락처"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'a9', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.a9}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header">대표자 이메일</td>
                <td>
                  <Space>
                    <Input
                      placeholder="대표자 이메일"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'b1', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.b1}
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
                        ojtChange(e.target.value, 'b2', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.b2}
                    />
                  </Space>
                </td>
                <td className="header">공장설립일</td>
                <td>
                  <ConfigProvider locale={locale}>
                    <DatePicker
                      placeholder={'공장설립일'}
                      onChange={(moment, dateString) => {
                        if (moment) {
                          console.log('공장설립일: ', dateString);
                        }
                        ojtChange(dateString, 'b3', setOjtIndcEntInfo);
                      }}
                    />
                  </ConfigProvider>
                </td>
              </tr>
              <tr>
                <td className="header" rowSpan="4">
                  소재지
                </td>
                <td className="header" rowSpan="2">
                  본사
                </td>
                <td rowSpan="2">
                  <Space direction={'vertical'}>
                    <Input
                      placeholder="우편번호"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'b4', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.b4}
                    />
                    <Button
                      size="small"
                      className="eu-usr-btn-table-fine"
                      onClick={() => {
                        setPostSearchOpen(true);
                        setPostColumn('b4');
                      }}
                    >
                      우편번호찾기
                    </Button>

                    <Input
                      placeholder="주소1"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'b5', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.b5}
                    />
                    <Input
                      placeholder="주소2"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'b6', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.b6}
                    />
                  </Space>
                </td>
                <td className="header">전화번호</td>
                <td>
                  <Space>
                    <Input
                      placeholder="전화번호"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'b7', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.b7}
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
                        ojtChange(e.target.value, 'b8', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.b8}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" rowSpan="2">
                  공장
                </td>
                <td rowSpan="2">
                  <Space direction={'vertical'}>
                    <Input
                      placeholder="우편번호"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'b9', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.b9}
                    />
                    <Button
                      size="small"
                      className="eu-usr-btn-table-fine"
                      onClick={() => {
                        setPostSearchOpen(true);
                        setPostColumn('b9');
                      }}
                    >
                      우편번호찾기
                    </Button>

                    <Input
                      placeholder="주소1"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'c1', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.c1}
                    />
                    <Input
                      placeholder="주소2"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'c2', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.c2}
                    />
                  </Space>
                </td>
                <td className="header">공장사업자등록번호</td>
                <td>
                  <Space>
                    <Input
                      placeholder="공장사업자등록번호"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'c3', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.c3}
                    />
                    (종사업장번호
                    <Input
                      placeholder=""
                      onChange={(e) => {
                        ojtChange(e.target.value, 'c4', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.c4}
                    />
                  </Space>
                  )
                </td>
              </tr>
              <tr>
                <td className="header">전화번호</td>
                <td>
                  <Space>
                    <Input
                      placeholder="전화번호"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'c5', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.c5}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  주생산품
                </td>
                <td>
                  <Space>
                    <Input
                      placeholder="생산품1"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'c6', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.c6}
                    />
                    <Input
                      placeholder="생산품2"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'c7', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.c7}
                    />
                    <Input
                      placeholder="생산품3"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'c8', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.c8}
                    />
                  </Space>
                </td>
                <td className="header">관할지역본부</td>
                <td>
                  <Space>
                    <Select
                      onChange={(value) => {
                        ojtChange(value, 'c9', setOjtIndcEntInfo);
                      }}
                      options={[
                        {
                          value: '전체',
                          label: '전체',
                        },
                      ]}
                      value={ojtIndcEntInfo?.c9}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  산업분류코드
                </td>
                <td>
                  <Space>
                    <Input
                      placeholder="산업분류코드"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'd1', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.d1}
                    />
                  </Space>
                </td>
                <td className="header">유지보수 계약유무(현재 기준)</td>
                <td>
                  <Space>
                    {isCtrt.map((item, idx) => {
                      return (
                        <Checkbox
                          key={`${item}${idx}`}
                          value={`${idx + 1}`}
                          checked={ojtIndcEntInfo?.d2 === `${idx + 1}`}
                          onChange={(e) =>
                            ojtChange(e.target.value, 'd2', setOjtIndcEntInfo)
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
                  스마트공장 도입 시기
                </td>
                <td>
                  <Space>
                    <Select
                      onChange={(value) => {
                        ojtChange(value, 'd3', setOjtIndcEntInfo);
                      }}
                      options={[
                        {
                          value: '전체',
                          label: '전체',
                        },
                      ]}
                      value={ojtIndcEntInfo?.d3}
                    />
                  </Space>
                </td>
                <td className="header">스마트공장 도입 수준</td>
                <td>
                  <Space>
                    <Select
                      onChange={(value) => {
                        ojtChange(value, 'd4', setOjtIndcEntInfo);
                      }}
                      options={[
                        {
                          value: '전체',
                          label: '전체',
                        },
                      ]}
                      value={ojtIndcEntInfo?.d4}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  도입 솔루션
                </td>
                <td colSpan={'3'}>
                  <Space>
                    {indcSolution.map((item, idx) => {
                      return (
                        <Checkbox
                          key={`${item}${idx}`}
                          value={`${idx + 1}`}
                          checked={ojtIndcEntInfo?.d5 === `${idx + 1}`}
                          onChange={(e) =>
                            ojtChange(e.target.value, 'd5', setOjtIndcEntInfo)
                          }
                        >
                          {item}
                        </Checkbox>
                      );
                    })}
                    <Input
                      placeholder="기타"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'd6', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.d6}
                      disabled={ojtIndcEntInfo?.d5 !== `${indcSolution.length}`}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  전문분야
                </td>
                <td colSpan={'3'}>
                  {spcltyFld.map((item, idx) => {
                    return (
                      <Checkbox
                        key={`${item}${idx}`}
                        value={`${idx + 1}`}
                        checked={ojtIndcEntInfo?.d7 === `${idx + 1}`}
                        onChange={(e) =>
                          ojtChange(e.target.value, 'd7', setOjtIndcEntInfo)
                        }
                      >
                        {item}
                      </Checkbox>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  현장인력
                </td>
                <td colSpan="3">
                  <Space>
                    현장인력
                    <Input
                      placeholder="현장인력"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'd8', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.d8}
                    />
                    명 / 사무인력
                    <Input
                      placeholder="사무인력"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'd9', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.d9}
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
                        ojtChange(e.target.value, 'e1', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.e1}
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
                        ojtChange(e.target.value, 'e2', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.e2}
                    />
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" colSpan="2">
                  업종
                </td>
                <td colSpan="3">
                  <Space>
                    <Input
                      placeholder="업종"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'e3', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.e3}
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
              <tr>
                <td className="header" rowSpan="2">
                  스마트공장 구축내용
                </td>
                <td className="header" rowSpan="1">
                  정부지원 구축
                </td>
                <td rowSpan="1">{ojtIndcEntInfo?.e4}</td>
                <td className="header">기간(시작-종료일)</td>
                <td>
                  <Space>
                    <ConfigProvider locale={locale}>
                      <RangePicker
                        format="YYYY-MM-DD"
                        onChange={(dates, dateStrings) => {
                          if (dates) {
                            console.log(
                              'From: ',
                              dateStrings[0],
                              ', to: ',
                              dateStrings[1]
                            );

                            ojtChange(dateStrings[0], 'e5', setOjtIndcEntInfo);
                            ojtChange(dateStrings[1], 'e6', setOjtIndcEntInfo);
                          } else {
                            console.log('Date Clear');
                          }
                        }}
                      />
                    </ConfigProvider>
                  </Space>
                </td>
              </tr>
              <tr>
                <td className="header" rowSpan="2">
                  정부지원 구축
                </td>
                <td rowSpan="1">{ojtIndcEntInfo?.e7}</td>
                <td className="header">구축비용(백만원)</td>
                <td>
                  <Space>
                    <Input
                      placeholder="구축비용(백만원)"
                      onChange={(e) => {
                        ojtChange(e.target.value, 'e8', setOjtIndcEntInfo);
                      }}
                      value={ojtIndcEntInfo?.e8}
                    />
                  </Space>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <PostSearchPopup
        open={postSearchOpen}
        closeClick={closePostSearchClick}
        popupSelectClick={ojtChange}
        column={postColumn}
      />
      <IndutySearchPopup
        open={indtySearchOpen}
        closeClick={closeIndtySearchClick}
        popupSelectClick={ojtChange}
        column={'e7'}
      />
    </>
  );
};

export default SportBassInfo01;
