import React, { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'antd';
import 'css/CommonUsr.css';
import ChckResultInqire01 from 'pages/usr/bm/cr/cr/chckResultInqire/comp/ChckResultInqire01';

const ChckResultInqireContainer = () => {
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <ChckResultInqire01 />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(ChckResultInqireContainer);
