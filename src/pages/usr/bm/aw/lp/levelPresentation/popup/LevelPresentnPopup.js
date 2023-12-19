import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Input,
  Modal,
  Row,
  Space,
  Checkbox,
  Table,
  Form,
  Descriptions,
} from 'antd';

import TitleComp from 'components/layout/TitleComp';
import { ojtChange } from 'components/common/Common';

import 'css/CommonUsr.css';

const aplyAsmtHstryColumns = [
  {
    title: '순번',
    dataIndex: 'a',
  },
  {
    title: '사업년도',
    dataIndex: 'b',
  },
  {
    title: '지역(수행기관)',
    dataIndex: 'c',
  },
  {
    title: '수행사업명',
    dataIndex: 'd',
  },
  {
    title: '도입기업',
    dataIndex: 'e',
  },
  {
    title: '도입기업 사업자번호',
    dataIndex: 'f',
  },
  {
    title: '공급기업',
    dataIndex: 'g',
  },
  {
    title: '과제 신청일',
    dataIndex: 'h',
  },
  {
    title: '과제 신청자',
    dataIndex: 'i',
  },
  {
    title: '과제 상태',
    dataIndex: 'j',
  },
  {
    title: '과제 코멘트',
    dataIndex: 'k',
  },
  {
    title: '기업제조혁신 역량수준',
    dataIndex: 'l',
  },
  {
    title: '구축시스템 스마트화 수준',
    dataIndex: 'm',
  },
];
const LevelPresentnPopup = ({
  levelPresentnPopupOpen,
  setLevelPresentnPopupOpen,
}) => {
  const [ojtIndcEntInfo, setOjtIndcEntInfo] = useState({});
  const [arrAtchFile, setArrAtchFile] = useState([]);
  const [arrAplyAsmtHstry, setArrAplyAsmtHstry] = useState([
    {
      a: '1',
      b: '2022',
      c: '인천',
      d: '2022년 대중소상생형(삼성) 스마트 공장 구축',
      e: '도입기업명',
      f: '123-45-6789',
      g: '공급기업명',
      h: '2022-05-06',
      i: '아무개',
      j: '요건검토완료(검토부적합)',
      k: '',
      l: '',
      m: '',
    },
  ]);

  const sex = ['남', '여'];
  const columns = [
    { title: '항목', dataIndex: 'a' },
    { title: '첨부파일', dataIndex: 'b' },
    { title: '확장자', dataIndex: 'c' },
    { title: '파일크기', dataIndex: 'd' },
    { title: '등록일', dataIndex: 'e' },
  ];
  const confirmClick = () => {};
  const closeClick = () => {
    setLevelPresentnPopupOpen(false);
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 20; idx++) {
      tmp1.push({
        key: idx,
        a: '사업계획서',
        b: '수준확인제도 신청서 및 자가진단표',
        c: '.hwp',
        d: '219KB',
        e: '2019-05-28',
      });
    }
    setArrAtchFile(tmp1);

    setOjtIndcEntInfo({
      a1: '2021-12-23',
      a2: '기업수준확인 완료',
      a3: '스마트공장 수준확인 - 참여기업 모집',
      a4: '2021-12R-02-23022',
      a5: '20001021',
      a6: '111111-11111111',
      a7: '-',
      a8: '홍길동',
      a9: '',
      b1: '010-1111-1111',
      b2: '99.12.02',
      b3: '세종특별자치시 집현동',
      b4: '053-111-1111',
      b5: '세종특별자치시 집현동',
      b6: '053-111-1111',
      b7: '',
      b8: '',
      b9: '',
      c1: '선박부품',
      c2: '',
      c3: '4800000000',
      c4: '전년(33)명,금년(35)명',
      c5: 'Level 1',
      c6: '대한상공회의소',
      c7: '1차유리품',
      c8: '코드명(C23121)',

      d1: '홍길동',
      d2: '경영혁신',
      d3: '팀장',
      d4: '055-021-2311',
      d5: '010-3245-2321',
      d6: 'abc@naver.com',
    });
  }, []);
  return (
    <>
      <Modal
        open={levelPresentnPopupOpen}
        title="과제 신청 내역"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        footer={[
          <Button
            key={'closeClick'}
            type="primary"
            size="middle"
            className="eu-usr-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-usr-row-comp-title">
          <Col span={12}>
            <TitleComp>스마트공장 수준확인제도 신청서(중소기업용)</TitleComp>
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
                    제출일
                  </td>
                  <td>{ojtIndcEntInfo?.a1}</td>
                  <td className="header">신청상태</td>
                  <td>{ojtIndcEntInfo?.a2}</td>
                </tr>
                <tr>
                  <td className="header" colSpan="2">
                    사업명
                  </td>
                  <td>{ojtIndcEntInfo?.a3}</td>
                  <td className="header">과제번호</td>
                  <td>{ojtIndcEntInfo?.a4}</td>
                </tr>
                <tr>
                  <td className="header" colSpan="2">
                    기업명
                  </td>
                  <td>{ojtIndcEntInfo?.a4}</td>
                  <td className="header">설립일</td>
                  <td>{ojtIndcEntInfo?.a5}</td>
                </tr>
                <tr>
                  <td className="header" colSpan="2">
                    사업자등록번호
                  </td>
                  <td>{ojtIndcEntInfo?.a6}</td>
                  <td className="header">법인등록번호</td>
                  <td>{ojtIndcEntInfo?.a7}</td>
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
                          ojtChange(e.target.value, 'a8', setOjtIndcEntInfo);
                        }}
                        value={ojtIndcEntInfo?.a8}
                      />
                      {sex.map((item, idx) => {
                        return (
                          <Checkbox
                            key={`${item}${idx}`}
                            value={`${idx + 1}`}
                            checked={ojtIndcEntInfo?.a6 === `${idx + 1}`}
                            onChange={(e) =>
                              ojtChange(e.target.value, 'a9', setOjtIndcEntInfo)
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
                          ojtChange(e.target.value, 'b1', setOjtIndcEntInfo);
                        }}
                        value={ojtIndcEntInfo?.b1}
                      />
                    </Space>
                  </td>
                </tr>
                <tr>
                  <td className="header">대표자 생년월일</td>
                  <td>{ojtIndcEntInfo?.b2}</td>
                </tr>

                <tr>
                  <td className="header" rowSpan="4">
                    주소
                  </td>
                  <td className="header" rowSpan="1">
                    기업정보
                  </td>
                  <td>{ojtIndcEntInfo?.b3}</td>
                  <td className="header">전화번호</td>
                  <td>
                    <Space>
                      <Input
                        placeholder="전화번호"
                        onChange={(e) => {
                          ojtChange(e.target.value, 'b4', setOjtIndcEntInfo);
                        }}
                        value={ojtIndcEntInfo?.b4}
                      />
                    </Space>
                  </td>
                </tr>
                <tr>
                  <td className="header">공장</td>
                  <td>{ojtIndcEntInfo?.b5}</td>
                  <td className="header">전화번호</td>
                  <td>
                    <Space>
                      <Input
                        placeholder="전화번호"
                        onChange={(e) => {
                          ojtChange(e.target.value, 'b6', setOjtIndcEntInfo);
                        }}
                        value={ojtIndcEntInfo?.b6}
                      />
                    </Space>
                  </td>
                </tr>
                <tr>
                  <td className="header" rowSpan="2">
                    공장
                  </td>
                  <td rowSpan="2">{ojtIndcEntInfo?.b7}</td>
                  <td className="header">구축사업장사업자등록번호</td>
                  <td>{ojtIndcEntInfo?.b8}</td>
                </tr>
                <tr>
                  <td className="header">구축사업장대표자명</td>
                  <td>{ojtIndcEntInfo?.b9}</td>
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
                          ojtChange(e.target.value, 'c1', setOjtIndcEntInfo);
                        }}
                        value={ojtIndcEntInfo?.c1}
                      />
                    </Space>
                  </td>
                  <td className="header">도입(고도화)시스템</td>
                  <td>{ojtIndcEntInfo?.c2}</td>
                </tr>
                <tr>
                  <td className="header" colSpan="2">
                    매출액(원)
                  </td>
                  <td>
                    <Space>
                      <Input
                        placeholder="매출액"
                        onChange={(e) => {
                          ojtChange(e.target.value, 'c3', setOjtIndcEntInfo);
                        }}
                        value={ojtIndcEntInfo?.c3}
                      />
                    </Space>
                  </td>
                  <td className="header">상시근로자수</td>
                  <td>
                    <Space>
                      <Input
                        placeholder="상시근로자수"
                        onChange={(e) => {
                          ojtChange(e.target.value, 'c4', setOjtIndcEntInfo);
                        }}
                        value={ojtIndcEntInfo?.c4}
                      />
                    </Space>
                  </td>
                </tr>
                <tr>
                  <td className="header" colSpan="2">
                    자가진단결과
                  </td>
                  <td>
                    <Space>
                      <Input
                        placeholder="자가진단결과"
                        onChange={(e) => {
                          ojtChange(e.target.value, 'c5', setOjtIndcEntInfo);
                        }}
                        value={ojtIndcEntInfo?.c5}
                      />
                    </Space>
                  </td>
                  <td className="header">확인기관</td>
                  <td>
                    <Space>
                      <Input
                        placeholder="확인기관"
                        onChange={(e) => {
                          ojtChange(e.target.value, 'c6', setOjtIndcEntInfo);
                        }}
                        value={ojtIndcEntInfo?.c6}
                      />
                    </Space>
                  </td>
                </tr>
                <tr>
                  <td className="header" colSpan="2">
                    업종명
                  </td>
                  <td colSpan={'3'}>
                    <Space>
                      <Input
                        placeholder="업종명"
                        onChange={(e) => {
                          ojtChange(e.target.value, 'c7', setOjtIndcEntInfo);
                        }}
                        value={ojtIndcEntInfo?.c7}
                      />
                      <Input
                        placeholder="업종코드명"
                        onChange={(e) => {
                          ojtChange(e.target.value, 'c8', setOjtIndcEntInfo);
                        }}
                        value={ojtIndcEntInfo?.c8}
                      />
                    </Space>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="eu-usr-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>도입기업 담당자</TitleComp>
          </Col>
        </Row>
        <Row className="eu-usr-row-comp-cont">
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="성명" span={1.5}>
                {ojtIndcEntInfo?.d1}
              </Descriptions.Item>
              <Descriptions.Item label="부서" span={1.5}>
                {ojtIndcEntInfo?.d2}
              </Descriptions.Item>
              <Descriptions.Item label="직위" span={1.5}>
                {ojtIndcEntInfo?.d3}
              </Descriptions.Item>
              <Descriptions.Item label="전화번호" span={1.5}>
                {ojtIndcEntInfo?.d4}
              </Descriptions.Item>
              <Descriptions.Item label="핸드폰" span={1.5}>
                {ojtIndcEntInfo?.d5}
              </Descriptions.Item>
              <Descriptions.Item label="이메일" span={1.5}>
                {ojtIndcEntInfo?.d6}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row className="eu-usr-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>첨부문서</TitleComp>
          </Col>
        </Row>
        <Row className="eu-usr-row-comp-cont">
          <Col span={24}>
            <Table
              key={'arrAtchFile'}
              columns={columns}
              dataSource={arrAtchFile}
              pagination={false}
              size={'small'}
              bordered={true}
              scroll={{
                y: 300,
              }}
            />
          </Col>
        </Row>
        <Row className="eu-usr-row-comp-title  margin-top">
          <Col span={12}>
            <TitleComp>설문조사</TitleComp>
          </Col>
        </Row>
        <Row className="eu-usr-row-comp-cont">
          <Col span={24}>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
            >
              설문조사 영역(Html 형식 미정)
            </Form>
          </Col>
        </Row>
        <Row className="eu-usr-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>참여과제이력-(도입기업명)</TitleComp>
          </Col>
        </Row>
        <Row className="eu-usr-row-comp-cont">
          <Col span={24}>
            <Table
              columns={aplyAsmtHstryColumns}
              dataSource={arrAplyAsmtHstry}
              size="small"
              bordered
              scroll={{ y: 600 }}
              pagination={false}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default LevelPresentnPopup;
