import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, Row, Col, Table } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';

const { TextArea } = Input;

const InsttCmitPopupPage = ({ open, closeClick }) => {
  const [ojtSbmsnInstInfo, setOjtSbmsnInstInfo] = useState({
    a: '스마트공장 구축 및 고도화 사업(대중소상생)',
    b: '1',
    c: '협약체결일로부터 6 개월',
    d: '100,000원',
    e: '10%',
    f: '10%',
    g: '주관기관명',
    h: '0123456789',
    i: '150-0 주관기관 주소',
    j: '홍길동',
    k: '부장',
    l: '000-0000-0000',
    m: '010-0000-0000',
    n: 'abc@tipa.or.kt',
    o: '주관기관명',
    p: '1234567890',
    q: '350-0 협업기관 주소',
    r: '아무개',
    s: '과장',
    t: '000-0000-0000',
    u: '010-0000-0000',
    v: 'def@tipa.or.kr',
    w: '',
  });
  const [arrAtchFile, setArrAtchFile] = useState([]);
  const [arrCheckedAtchFile, setArrCheckedAtchFile] = useState([]);

  const columns = [
    { title: '순번', dataIndex: 'a' },
    { title: '파일명', dataIndex: 'b' },
    { title: '파일크기', dataIndex: 'c' },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedAtchFile(selectedRows);
    },
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx < 30; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '해당 기관 평가결과.hwp',
        c: '2048',
      });
    }
    setArrAtchFile(tmp1);
  }, []);

  return (
    <>
      <Modal
        key="InsttCmitPopupPage"
        open={open}
        title="기관선정 평가위원회 제출기관 평가 결과"
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1400}
        footer={[
          <Button
            key={'closeClick'}
            type="primary"
            size="middle"
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-title">
          <Col span={24}>
            <TitleComp>제출기관 정보</TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <table
              key={'sbmsnInstUnfo'} // 각 테이블마다 고유 키 입력
              className="eu-custom-description-table" // 고정
              summary="제출기관 정보"
            >
              <colgroup>
                <col width={'10%'} />
              </colgroup>
              <tbody>
                <tr>
                  <td className="header" colSpan={2}>
                    사업명
                  </td>
                  <td>{ojtSbmsnInstInfo.a}</td>
                  <td className="header">목표지원기업수</td>
                  <td>{ojtSbmsnInstInfo.b}</td>
                </tr>
                <tr>
                  <td className="header" colSpan={2}>
                    사업기간
                  </td>
                  <td colSpan={3}>{ojtSbmsnInstInfo.c}</td>
                </tr>

                <tr>
                  <td className="header" rowSpan={2} colSpan={2}>
                    주관기관출연금(원)
                  </td>
                  <td rowSpan={2}>{ojtSbmsnInstInfo.d}</td>
                  <td className="header" rowSpan={1}>
                    현금(%)
                  </td>
                  <td>{ojtSbmsnInstInfo.e}</td>
                </tr>
                <tr>
                  <td className="header" rowSpan={1}>
                    현물(%)
                  </td>
                  <td>{ojtSbmsnInstInfo.f}</td>
                </tr>

                <tr>
                  <td rowSpan={6} className="header">
                    주관기관 정보
                  </td>
                </tr>
                <tr>
                  <td className="header">주관기관명</td>
                  <td>{ojtSbmsnInstInfo.g}</td>
                  <td className="header">사업자등록번호</td>
                  <td>{ojtSbmsnInstInfo.h}</td>
                </tr>
                <tr>
                  <td className="header">본사주소</td>
                  <td colSpan={3}>{ojtSbmsnInstInfo.i}</td>
                </tr>
                <tr>
                  <td className="header">책임자명</td>
                  <td>{ojtSbmsnInstInfo.j}</td>
                  <td className="header">직위</td>
                  <td>{ojtSbmsnInstInfo.k}</td>
                </tr>
                <tr>
                  <td className="header">사무실전화</td>
                  <td>{ojtSbmsnInstInfo.l}</td>
                  <td className="header">휴대전화</td>
                  <td>{ojtSbmsnInstInfo.m}</td>
                </tr>
                <tr>
                  <td className="header">이메일</td>
                  <td colSpan={3}>{ojtSbmsnInstInfo.n}</td>
                </tr>

                <tr>
                  <td rowSpan={6} className="header">
                    협엽기관 정보(컨소시엄 구성 시작성)
                  </td>
                </tr>
                <tr>
                  <td className="header">협력기관명</td>
                  <td>{ojtSbmsnInstInfo.o}</td>
                  <td className="header">사업자등록번호</td>
                  <td>{ojtSbmsnInstInfo.p}</td>
                </tr>
                <tr>
                  <td className="header">본사주소</td>
                  <td colSpan={3}>{ojtSbmsnInstInfo.q}</td>
                </tr>
                <tr>
                  <td className="header">책임자명</td>
                  <td>{ojtSbmsnInstInfo.r}</td>
                  <td className="header">직위</td>
                  <td>{ojtSbmsnInstInfo.s}</td>
                </tr>
                <tr>
                  <td className="header">사무실전화</td>
                  <td>{ojtSbmsnInstInfo.t}</td>
                  <td className="header">휴대전화</td>
                  <td>{ojtSbmsnInstInfo.u}</td>
                </tr>
                <tr>
                  <td className="header">이메일</td>
                  <td colSpan={3}>{ojtSbmsnInstInfo.v}</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={24}>
            <TitleComp>종합의견</TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <TextArea
              rows={3}
              value={ojtSbmsnInstInfo.w}
              placeholder={'선정평가위원회 기관별 종합의견'}
            />
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={24}>
            <TitleComp>선정평가위원회 기관별 첨부파일</TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              key={'arrAtchFile'}
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              columns={columns}
              dataSource={arrAtchFile}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 120 }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default InsttCmitPopupPage;
