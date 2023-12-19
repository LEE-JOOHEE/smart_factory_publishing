import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Modal,
  Radio,
  Row,
  Table,
  Tabs,
  Input,
  Descriptions,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
const { TextArea } = Input;
const TechResultPopup = ({ cmEvlRsltPopupOpen, setCmEvlRsltPopupOpen }) => {
  const closeClick = () => {
    setCmEvlRsltPopupOpen(false);
  };

  //과제기본정보
  const [ojtAsmtBscInfo, setOjtAsmtBscInfo] = useState({});
  //평가결과
  const [arrEvlRslt, setArrEvlRslt] = useState([]);
  //위원별 평가점수 및 의견
  const [arrMfcmScrOpnn, setArrMfcmScrOpnn] = useState([]);
  //위원장 의견
  const [mfcmHdOpnn, setMfcmHdOpnn] = useState({});

  const [directTitle, setDirectTitle] = useState('');

  const arrEvlRsltColumns = [
    { title: '현장평가점수', dataIndex: 'a', align: 'center' },
    { title: '현장평가 반영', dataIndex: 'b', align: 'center' },
    { title: '현장평가 결과', dataIndex: 'c', align: 'center' },
    { title: '기술성평가 점수', dataIndex: 'd', align: 'center' },
    { title: '기술성평가 반영', dataIndex: 'e', align: 'center' },
    { title: '일자리평가 점수', dataIndex: 'f', align: 'center' },
    { title: '일자리평가 반영', dataIndex: 'g', align: 'center' },
    { title: '최종점수', dataIndex: 'h', align: 'center' },
    { title: '최종가점', dataIndex: 'i', align: 'center' },
    { title: '뿌리가점', dataIndex: 'j', align: 'center' },
    { title: '종합점수', dataIndex: 'k', align: 'center' },
  ];
  const arrMfcmScrOpnnColums = [
    { title: '위원명', dataIndex: 'a', align: 'center', width: 100 },
    { title: '점수', dataIndex: 'b', align: 'center', width: 60 },
    { title: '평가의견', dataIndex: 'c' },
  ];

  useEffect(() => {
    setOjtAsmtBscInfo({
      a: '2022',
      b: '평가TEST사업',
      c: '2022-xxx-xxx-xxxxx',
      d: '평가TEST과제',
      e: '도입기업명',
      f: '공급기업명',
    });

    let tmp = [];
    for (let idx = 1; idx <= 1; idx++) {
      tmp.push({
        key: idx,
        a: 90,
        b: 50,
        c: '선정예정',
        d: 80,
        e: 50,
        f: 0,
        g: 0,
        h: 85,
        i: 3,
        j: 0,
        k: 88,
      });
    }
    setArrEvlRslt(tmp);

    let tmp2 = [];
    for (let idx = 1; idx <= 3; idx++) {
      tmp2.push({
        key: idx,
        a: '위원' + idx,
        b: 80,
        c: '평가의견',
      });
    }
    setArrMfcmScrOpnn(tmp2);

    setDirectTitle('기술성평가 종합평가결과');

    setMfcmHdOpnn('평가위원장의 종합의견');
  }, []);

  return (
    <>
      <Modal
        key="cmEvlRsltPopupOpen"
        open={cmEvlRsltPopupOpen}
        title={directTitle}
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1250}
        footer={[
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>과제 기본정보</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              {/* 우측 버튼 */}
            </Col>
          </Row>
          <Col span={24}>
            <Descriptions size={'small'} bordered>
              <Descriptions.Item label="사업연도">
                {ojtAsmtBscInfo?.a}
              </Descriptions.Item>
              <Descriptions.Item label="사업명" span={2}>
                {ojtAsmtBscInfo?.b}
              </Descriptions.Item>
              <Descriptions.Item label="과제번호">
                {ojtAsmtBscInfo?.c}
              </Descriptions.Item>
              <Descriptions.Item label="과제명" span={2}>
                {ojtAsmtBscInfo?.d}
              </Descriptions.Item>
              <Descriptions.Item label="도입기업">
                {ojtAsmtBscInfo?.e}
              </Descriptions.Item>
              <Descriptions.Item label="공급기업" span={2}>
                {ojtAsmtBscInfo?.f}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>평가결과</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              {/* 우측 버튼 */}
            </Col>
          </Row>
          <Col span={24}>
            <Table
              key={'evlRsltColumns'}
              columns={arrEvlRsltColumns}
              dataSource={arrEvlRslt}
              size="large"
              bordered
              pagination={false}
            />
          </Col>
        </Row>
        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>위원별 평가점수 및 의견</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              {/* 우측 버튼 */}
            </Col>
          </Row>
          <Col span={24}>
            <Table
              key={'arrMfcmScrOpnnColums'}
              columns={arrMfcmScrOpnnColums}
              dataSource={arrMfcmScrOpnn}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 600 }}
            />
          </Col>
        </Row>
        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>평가위원장 종합의견</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              {/* 우측 버튼 */}
            </Col>
          </Row>
          <Col span={24}>
            <TextArea rows={5} value={mfcmHdOpnn && mfcmHdOpnn} />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default TechResultPopup;
