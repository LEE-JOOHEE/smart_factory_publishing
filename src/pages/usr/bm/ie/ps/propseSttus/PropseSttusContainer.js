import React from 'react';
import { Col, Row } from 'antd';
import 'css/CommonUsr.css';

import PropseSttus01 from 'pages/usr/bm/ie/ps/propseSttus/comp/PropseSttus01';

const PropseSttusContainer = () => {
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <PropseSttus01 />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(PropseSttusContainer);
