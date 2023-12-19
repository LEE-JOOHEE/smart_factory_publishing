import React from 'react';
import { Col, Row } from 'antd';
import 'css/Common.css';

import RsltIxList01 from 'pages/mg/rs/rm/rm/rsltIxList/comp/RsltIxList01';

const RsltIxListContainer = () => {
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <RsltIxList01 />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(RsltIxListContainer);
