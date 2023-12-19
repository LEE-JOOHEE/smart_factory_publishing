import React from 'react';
import { Col, Row } from 'antd';
import 'css/CommonUsr.css';

import IndcEntrprsSearch01 from 'pages/usr/bm/ie/ie/indcEntrprsSearch/comp/IndcEntrprsSearch01';

const IndcEntrprsSearchContainer = () => {
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <IndcEntrprsSearch01 />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(IndcEntrprsSearchContainer);
