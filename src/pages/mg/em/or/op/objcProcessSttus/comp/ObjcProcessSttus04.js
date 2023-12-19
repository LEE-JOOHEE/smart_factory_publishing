import React, { useEffect, useState } from 'react';
import { Col, Descriptions, Input, Row, Select } from 'antd';

import TitleComp from 'components/layout/TitleComp';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';
import { getListCommonCd, ojtChange } from 'components/common/Common';

import 'css/Common.css';

const ObjcProcessSttus03 = ({ ojtSelectedObjcAply }) => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  // 과제정보
  const [asmtInfo, setAsmtInfo] = useState({});

  // 이의신청정보
  const [objcAplyInfo, setObjcAplyInfo] = useState({});

  // 진행사항
  const [ojtRcptRslt, setOjtRcptRslt] = useState({});

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a', 'b']));

    setAsmtInfo({
      a1: '2021',
      a2: '스마트공장구축',
      a3: '2021-I5R-000-000000',
      a4: '(주)도입기업1_스마트공장구축',
      a5: '(주)도입기업1',
      a6: '(주)공급기업1',
      a7: '선정평가',
      a8: '2022-09-30',
      a9: '탈락대상',
      a10: '',
    });
    setObjcAplyInfo({
      a1: '개발자',
      a2: '개발연구원',
      a3: '평가결과 이의신청',
      a4: '2022-10-05',
      a5: '개발자-021332',
      a6: '개발연구원',
      a7: '발송공문제목',
      a8: '이의신청 내용',
    });
    setOjtRcptRslt({
      a1: '',
      a2: '2022-10-06',
      a3: '접수(반려)사유',
    });
  }, []);

  useEffect(() => {
    console.log('키값이 바뀌었을때 새로 조회합니다.');
  }, [ojtSelectedObjcAply]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>이의신청정보</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}></Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="신청자" span={1.5}>
              {objcAplyInfo?.a1}
            </Descriptions.Item>
            <Descriptions.Item label="신청자소속기관" span={1.5}>
              {objcAplyInfo?.a2}
            </Descriptions.Item>
            <Descriptions.Item label="이의신청유형" span={1.5}>
              {objcAplyInfo?.a3}
            </Descriptions.Item>
            <Descriptions.Item label="신청일자" span={1.5}>
              {objcAplyInfo?.a4}
            </Descriptions.Item>
            <Descriptions.Item label="발송공문문서번호" span={1.5}>
              {objcAplyInfo?.a5}
            </Descriptions.Item>
            <Descriptions.Item label="발송기관명" span={1.5}>
              {objcAplyInfo?.a6}
            </Descriptions.Item>
            <Descriptions.Item label="발송공문제목" span={3}>
              {objcAplyInfo?.a7}
            </Descriptions.Item>
            <Descriptions.Item
              label="신청내용"
              span={3}
              contentStyle={{ height: 150 }}
            >
              {objcAplyInfo?.a8}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default ObjcProcessSttus03;
