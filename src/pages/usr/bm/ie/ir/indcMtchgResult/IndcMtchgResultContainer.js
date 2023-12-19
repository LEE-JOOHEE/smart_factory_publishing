import React from 'react';
import { Col, Row } from 'antd';
import 'css/CommonUsr.css';
import IndcMtchgResult01 from 'pages/usr/bm/ie/ir/indcMtchgResult/comp/IndcMtchgResult01';

const IndcMtchgResultContainer = () => {
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <IndcMtchgResult01 />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(IndcMtchgResultContainer);
