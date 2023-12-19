import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/CommonUsr.css';
import BsnsPblanc01 from 'pages/usr/bg/ba/ma/bsnsPblanc/comp/BsnsPblanc01';
import BsnsPblanc02 from 'pages/usr/bg/ba/ma/bsnsPblanc/comp/BsnsPblanc02';

const BsnsPblancContainer = () => {
  //공고번호
  const [pbancNo, setPbancNo] = useState('');

  //페이지 구분(LIST, RECP)
  const [pageMode, setPageMode] = useState('LIST');
  return (
    <>
      {pageMode === 'LIST' ? (
        <Row className="eu-usr-row-page-comp-layout">
          <Col span={24}>
            <BsnsPblanc01 setPbancNo={setPbancNo} setPageMode={setPageMode} />
          </Col>
        </Row>
      ) : (
        <Row className="eu-usr-row-page-comp-layout">
          <Col span={24}>
            <BsnsPblanc02 pbancNo={pbancNo} setPageMode={setPageMode} />
          </Col>
        </Row>
      )}
    </>
  );
};

export default React.memo(BsnsPblancContainer);
