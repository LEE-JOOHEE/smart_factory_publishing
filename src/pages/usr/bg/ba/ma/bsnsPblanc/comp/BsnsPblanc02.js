import React, { useEffect, useState } from 'react';
import { Col, Descriptions, Row } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { Button, Table } from 'antd/lib';
import ObjcReqstRegist from 'pages/usr/bm/or/or/objcReqst/popup/ObjcReqstRegist';
import ObjcReqstDtls from 'pages/usr/bm/or/or/objcReqst/popup/ObjcReqstDtls';
import ObjcReqstUpdt from 'pages/usr/bm/or/or/objcReqst/popup/ObjcReqstUpdt';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';

const BsnsPblanc02 = ({ pbancNo, setPageMode }) => {
  const [ojtPblance, setOjtPblance] = useState({});

  useEffect(() => {
    if (pbancNo) {
      setOjtPblance({
        a1: pbancNo,
        a2:
          '2022년 선도형 디지털 클러스터(선정된 컨소시엄 대상) ==> ' + pbancNo,
        a3: '홍길동',
        a4: '2022-09-13',
        a5: '스마트공장 구축 및 고도화 사업(신규구축)',
        a6: '본 공고는 2021년 스마트공장 구축 및 고도화 사업(신규구축)의 2차년 개별 스마트공장 구축 대상 공고 입니다.\n※ 사업신청 대상은 2021년 선도형 디지털 클러스터(3개 컨소시엄) 내 개별 스마트공장 구축 예정인 기업만 신청할 수 있습니다.',
        a7: '2022년 09월 13일',
        a8: '중소벤처기업부 장관',
      });
    }
  }, [pbancNo]);

  const listClick = () => {
    setPageMode('LIST');
  };

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>{ojtPblance?.a2}</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="사업연도" span={1.5}>
              {ojtPblance?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={1.5}>
              {ojtPblance?.a4}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          {ojtPblance?.a5}
          <br />
          {ojtPblance?.a6}
          <br />
          {ojtPblance?.a7}
          <br />
          {ojtPblance?.a8}
          <br />
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <CmAtchDoc title={'첨부파일'} />
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button className="eu-usr-btn-process-fine" onClick={listClick}>
            목록
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default BsnsPblanc02;
