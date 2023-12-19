import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from 'antd';
import 'css/CommonUsr.css';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd } from 'components/common/Common';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';
const { Text, Link } = Typography;

const BsnsActplnRequst02 = ({ bizPlanNo, setPageMode }) => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //사업계획요청
  const [ojtBizPlanDmnd, setBizPlanDmnd] = useState({
    a1: '스마트공장 보급 확산 사업 공고 기초(코디 지원)',
    a2: '도입기업명',
    a3: '123-45-67890',
    a4: '-',
    a5: '서울',
    a6: '02-1111-1111',
    a7: '02-1111-1111',
    a8: '홍길동',
    a9: '스마트공장팀',
    a10: '선임',
    a11: '핸드폰',
    a12: '010-1111-1111',
    a13: '02-1111-1111',
    a14: 'abc@naver.com',
    a15: '2021-05-28 11:00',
    a16: '2022-12-31 17:00',
    a17: '요청서검토중',
  });

  //사업분분류
  const [ojtBizClsf, setOjtBizClsf] = useState({
    a1: '2022',
    a2: '스마트공장 구축 및 고도화',
    a3: '스마트공장 구축 및 고도화(신규구축)',
    a4: '2021-05-28',
    a5: '2022-12-31',
  });

  const smsClick = () => {
    Modal.info({
      title: 'smsClick',
    });
  };

  //검토적합
  const rvwStbltClick = () => {
    Modal.info({
      title: 'rvwStbltClick',
    });
  };

  //검토부적합
  const rvwImproptClick = () => {
    Modal.info({
      title: 'rvwImproptClick',
    });
  };

  const listClick = () => {
    setPageMode('LIST');
  };

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>도입기업검색 매칭내역</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={smsClick}
          >
            SMS보내기
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={rvwStbltClick}
          >
            검토적합
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            onClick={rvwImproptClick}
          >
            검토 부적합
          </Button>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="공고명" span={3}>
              {ojtBizPlanDmnd?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="요청기업">
              {' '}
              {ojtBizPlanDmnd?.a2}{' '}
            </Descriptions.Item>
            <Descriptions.Item label="사업자등록번호">
              {' '}
              {ojtBizPlanDmnd?.a3}{' '}
            </Descriptions.Item>
            <Descriptions.Item label="법인번호">
              {' '}
              {ojtBizPlanDmnd?.a4}{' '}
            </Descriptions.Item>

            <Descriptions.Item label="소재지">
              {' '}
              {ojtBizPlanDmnd?.a5}{' '}
            </Descriptions.Item>
            <Descriptions.Item label="전화번호">
              {' '}
              {ojtBizPlanDmnd?.a6}{' '}
            </Descriptions.Item>
            <Descriptions.Item label="팩스번호">
              {' '}
              {ojtBizPlanDmnd?.a7}{' '}
            </Descriptions.Item>

            <Descriptions.Item label="담당자">
              {' '}
              {ojtBizPlanDmnd?.a8}{' '}
            </Descriptions.Item>
            <Descriptions.Item label="부서">
              {' '}
              {ojtBizPlanDmnd?.a9}{' '}
            </Descriptions.Item>
            <Descriptions.Item label="직위">
              {' '}
              {ojtBizPlanDmnd?.a10}{' '}
            </Descriptions.Item>

            <Descriptions.Item label="핸드폰">
              {' '}
              {ojtBizPlanDmnd?.a11}{' '}
            </Descriptions.Item>
            <Descriptions.Item label="전화번호">
              {' '}
              {ojtBizPlanDmnd?.a12}{' '}
            </Descriptions.Item>
            <Descriptions.Item label="이메일">
              {' '}
              {ojtBizPlanDmnd?.a13}{' '}
            </Descriptions.Item>

            <Descriptions.Item label="신청접수기간" span={2}>
              {' '}
              {ojtBizPlanDmnd?.a14} ~ {ojtBizPlanDmnd?.a15}{' '}
            </Descriptions.Item>
            <Descriptions.Item label="진행상태">
              {' '}
              {ojtBizPlanDmnd?.a16}{' '}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24} style={{ height: 300 }}>
          공고내용
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>사업분류</TitleComp>
        </Col>
      </Row>

      <Row className="eu-usr-row-comp-cont margin-top">
        <Col span={24} style={{ textAlign: 'right' }}>
          <Descriptions
            bordered
            size="small"
            layout="vertical"
            column={{
              xxl: 4,
              xl: 3,
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            }}
          >
            <Descriptions.Item label="사업연도">
              {ojtBizClsf?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="사업분류">
              {ojtBizClsf?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="사업명">
              {ojtBizClsf?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="사업기간">
              {ojtBizClsf?.a4} ~ {ojtBizClsf?.a5}
            </Descriptions.Item>
          </Descriptions>
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

export default BsnsActplnRequst02;
