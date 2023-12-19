import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Modal,
  Radio,
  Row,
  Select,
  Table,
  Tabs, 
} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { ojtChange } from 'components/common/Common';
import IndcEntrprsPopup from 'pages/mg/tr/tr/tr/excBsnsDetail/popup/IndcEntrprsPopup';

const fnnrSttsColumns = [
  {
    title: '연도',
    dataIndex: 'a',
    align: "center",
  },
  {
    title: '매출액(원)',
    dataIndex: 'b',
    align: "right",
  },
  {
    title: '수출액(원)',
    dataIndex: 'c',
    align: "right",
  },
  {
    title: '영업이익률(%)',
    dataIndex: 'd',
    align: "center",
  },
  {
    title: '종업원 수(명)',
    dataIndex: 'e',
    align: "center",
  },
  {
    title: '부채비율(%)',
    dataIndex: 'f',
    align: "center",
  },
  {
    title: '자본총계(원)',
    dataIndex: 'g',
    align: "right",
  },
  {
    title: '자산총계(원)',
    dataIndex: 'h',
    align: "right",
  },
];

const CmAplyAsmtIndcEnt = ({ key, editable = false }) => {
  // 도입기업정보
  const [ojtIndcEnts, setOjtIndcEnts] = useState({});
  // 재무현황
  const [arrFnnrStts, setArrFnnrStts] = useState([
    {
      a: '2021',
      b: '1,045,877,500',
      c: '128,684,157',
      d: '15',
      e: '16',
      f: '0',
      g: '110,000,000',
      h: '130,000,000',
    },
    {
      a: '2021',
      b: '1,045,877,500',
      c: '128,684,157',
      d: '15',
      e: '16',
      f: '0',
      g: '110,000,000',
      h: '130,000,000',
    },
    {
      a: '2021',
      b: '1,045,877,500',
      c: '128,684,157',
      d: '15',
      e: '16',
      f: '0',
      g: '110,000,000',
      h: '130,000,000',
    },
  ]);

  const [indcEntrprsPopupOpen, setIndcEntrprsPopupOpen] = useState(false);
  
  const indcEntrprsClick = () => {
    setIndcEntrprsPopupOpen(true);
  };
  const updateClick = () => {
    Modal.info({
      title: 'update Click',
    });
  };
  useEffect(() => {
    // if (key) {
    //   setArrFnnrStts()
    // }
  }, [key]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>도입기업정보</TitleComp>
        </Col>
      </Row>

      <Row className="eu-row-comp-cont">
        <Col span={24} className="pop-mb-20">
          <div className="eu-custom-description-table">
            <table
              key={'eu-custom-description-table'}
              className="eu-custom-description-table"
              summary="도입기업정보"
            >
              <colgroup>
                <col width={'10%'} />
                <col width={'10.5%'} />
                <col width={'31.5%'} />
                <col width={'24%'} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <td colSpan="2" className="header">
                    도입기업명
                  </td>
                  <td>
                    <Button
                      className="eu-btn-link"
                      type="link"
                      onClick={indcEntrprsClick}
                    >
                      도입기업명
                    </Button>
                  </td>
                  <td className="header">법인/개인</td>
                  <td>개인</td>
                </tr>
                <tr>
                  <td colSpan="2" className="header">
                    사업자등록번호
                  </td>
                  <td>123-45-67890</td>
                  <td className="header">법인등록번호</td>
                  <td>123456-1234567</td>
                </tr>
                <tr>
                  <td rowSpan={4} className="header">
                    기업정보
                  </td>
                  <td className="header">대표자명</td>
                  <td>아무개 / 남</td>

                  <td className="header">대표자 연락처</td>
                  <td>010-1111-1111</td>
                </tr>
                <tr>
                  <td className="header">홈페이지</td>
                  <td></td>

                  <td className="header">대표자 이메일</td>
                  <td>abc@naver.com</td>
                </tr>
                <tr>
                  <td rowSpan={2} className="header">
                    주소
                  </td>
                  <td rowSpan={2}>
                    (12345)
                    <br />
                    인천광역시 미추홀구 방축로 537
                  </td>

                  <td className="header">전화번호</td>
                  <td>032-123-4567</td>
                </tr>
                <tr>
                  <td className="header">FAX</td>
                  <td>FAX</td>
                </tr>
                <tr>
                  <td rowSpan={12} className="header">
                    공장정보
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2} className="header">
                    공장정보주소
                  </td>
                  <td rowSpan={2}>
                    (12345)
                    <br />
                    인천광역시 미추홀구 방축로 537
                  </td>

                  <td className="header">공장사업자 등록번호</td>
                  <td>123-45-67890</td>
                </tr>
                <tr>
                  <td className="header">전화번호</td>
                  <td>032-123-4567</td>
                </tr>
                <tr>
                  <td rowSpan={2} className="header">
                    구축사업장
                  </td>
                  <td rowSpan={2}>
                    (12345)
                    <br />
                    인천광역시 미추홀구 방축로 537
                  </td>

                  <td className="header">구축사업장사업자등록번호</td>
                  <td>123-45-67890</td>
                </tr>
                <tr>
                  <td className="header">구축사업장대표자명</td>
                  <td>구축사업장대표자명</td>
                </tr>
                <tr>
                  <td className="header">지역(수행기관)</td>
                  <td>
                    <Select
                      defaultValue="대전"
                      disabled={!editable}
                      placeholder="지역(수행기관)선택"
                      // onChange={(value) => ojtIndcEntsChange(value, 'ojt키')}
                      options={[
                        {
                          value: '대전',
                          label: '대전',
                        },
                      ]}
                      // value={정보 수정시 값 바인딩 필요}
                    />
                  </td>

                  <td className="header">FAX</td>
                  <td>FAX</td>
                </tr>
                <tr>
                  <td className="header">산단구분</td>
                  <td>개별</td>

                  <td className="header">산단명</td>
                  <td>해당없음</td>
                </tr>
                <tr>
                  <td className="header">주생산품</td>
                  <td>반도체제조용기계 디스플레이제조장비 레이저설비</td>

                  <td className="header">주요공정</td>
                  <td>수주-표준모델검색-신규설계...</td>
                </tr>
                <tr>
                  <td className="header">주요남품처</td>
                  <td>주요납품처1, 주요납품처2</td>

                  <td className="header">공장설립일</td>
                  <td>2019-05-08</td>
                </tr>
                <tr>
                  <td className="header">업종코드</td>
                  <td>C11111</td>

                  <td className="header">업종명</td>
                  <td>디스플레이 제조용 기계 제조업</td>
                </tr>
                <tr>
                  <td className="header">기업규모</td>
                  <td>
                    <Radio.Group
                      disabled={!editable}
                      options={[
                        {
                          value: '소기업',
                          label: '소기업',
                        },
                        {
                          value: '중기업',
                          label: '중기업',
                        },
                        {
                          value: '중견기업',
                          label: '중견기업',
                        },
                      ]}
                      // value={정보 수정시 값 바인딩 필요}
                      onChange={(value) => ojtChange(value, 'h', setOjtIndcEnts)}
                    />
                  </td>

                  <td className="header">현장/사무인력</td>
                  <td>현장/사무인력</td>
                </tr>
                <tr>
                  <td className="header">외국인 근로자 비율(%)</td>
                  <td>외국인 근로자 비율(%)</td>

                  <td className="header">R&D인력 비율</td>
                  <td>R&D인력 비율</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>

        {editable && (
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine mt-12"
              onClick={updateClick}
            >
              수정
            </Button>
          </Col>
        )}

        <Col span={24} className="eu-row-comp-title margin-top">
          <TitleComp>재무현황(최근3년)</TitleComp>
        </Col>

        <Col span={24}>
          <Table
            columns={fnnrSttsColumns}
            dataSource={arrFnnrStts}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>

      <IndcEntrprsPopup
        indcEntrprsPopupOpen={indcEntrprsPopupOpen}
        setIndcEntrprsPopupOpen={setIndcEntrprsPopupOpen}
      />
    </>
  );
};

export default CmAplyAsmtIndcEnt;
