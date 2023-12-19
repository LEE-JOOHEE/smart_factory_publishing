import React from 'react';
import { Col, Row } from 'antd';
import 'css/CommonUsr.css';

import IndcEntrprsManage01 from 'pages/usr/bm/ie/im/indcEntrprsManage/comp/IndcEntrprsManage01';

const IndcEntrprsManageContainer = () => {
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <IndcEntrprsManage01 />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(IndcEntrprsManageContainer);
