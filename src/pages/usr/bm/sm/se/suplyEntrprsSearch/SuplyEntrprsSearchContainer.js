import React from 'react';
import { Col, Row } from 'antd';
import 'css/CommonUsr.css';

import SuplyEntrprsSearch01 from 'pages/usr/bm/sm/se/suplyEntrprsSearch/comp/SuplyEntrprsSearch01';

const SuplyEntrprsSearchContainer = () => {
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <SuplyEntrprsSearch01 />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(SuplyEntrprsSearchContainer);
