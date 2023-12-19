import React, { useEffect, useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import 'css/Common.css';
import BaseLayout from 'components/layout/BaseLayout';
import TitlePage from 'components/layout/TitlePage';
import CmAtchDoc from 'pages/cm/cm/CmAtchDoc';
import CmAplyAsmtBsc from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtBsc';
import CmAplyAsmtIndcEnt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtIndcEnt';
import CmAplyAsmtPjtco from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtPjtco';
import CmAplyAsmtSplyEnt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtSplyEnt';
import CmAplyAsmtPvltrt from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtPvltrt';
import CmAplyAsmtRsltIdx from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtRsltIdx';
import CmAplyAsmtSrvy from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtSrvy';
import CmAplyAsmtEmplym from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtEmplym';
import CmAplyAsmtHstry from 'pages/mg/tr/tr/tr/excBsnsDetail/comp/CmAplyAsmtHstry';

const CmAplyAsmtWhol = ({ editable = false }) => {
  const [tabItems, setTabItems] = useState([
    {
      label: '과제기본정보',
      key: '과제기본정보',
      children: <CmAplyAsmtBsc editable={editable} type="detail" />,
    },
    {
      label: '도입기업정보',
      key: '도입기업정보',
      children: <CmAplyAsmtIndcEnt editable={editable} />,
    },
    {
      label: '사업비내역',
      key: '사업비내역',
      children: <CmAplyAsmtPjtco editable={editable} />,
    },
    {
      label: '컨소시엄공급기업',
      key: '컨소시엄공급기업',
      children: <CmAplyAsmtSplyEnt editable={editable} />,
    },
    {
      label: '우대사항',
      key: '우대사항',
      children: <CmAplyAsmtPvltrt editable={editable} />,
    },
    {
      label: '성과지표',
      key: '성과지표',
      children: <CmAplyAsmtRsltIdx editable={editable} />,
    },
    {
      label: '첨부문서',
      key: '첨부문서',
      children: <CmAtchDoc title={'첨부문서'} editable={editable} />,
    },
    {
      label: '설문조사',
      key: '설문조사',
      children: <CmAplyAsmtSrvy editable={editable} />,
    },
    {
      label: '일자리평가',
      key: '일자리평가',
      children: <CmAplyAsmtEmplym editable={editable} />,
    },
    {
      label: '참여과제이력',
      key: '참여과제이력',
      children: <CmAplyAsmtHstry editable={editable} />,
    },
  ]);

  useEffect(() => {
    if (editable)
      setTabItems((prev) => prev.filter((item) => item.key !== '설문조사'));
  }, [editable]);

  return (
    <>
      <BaseLayout>
        <TitlePage>과제정보</TitlePage>
        <Row className="eu-row-page-comp-layout">
          <Col span={24}>
            <Row className="eu-row-comp-cont">
              <Col span={24}>
                <Tabs items={tabItems} />
              </Col>
            </Row>
          </Col>
        </Row>
      </BaseLayout>
    </>
  );
};

export default CmAplyAsmtWhol;
