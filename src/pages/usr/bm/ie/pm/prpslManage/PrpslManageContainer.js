import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Tabs } from 'antd';
import 'css/CommonUsr.css';

import PrpslManage01 from 'pages/usr/bm/ie/pm/prpslManage/comp/PrpslManage01';
import PrpslManage02 from 'pages/usr/bm/ie/pm/prpslManage/comp/PrpslManage02';

import TaskReqstWctContainer from 'pages/usr/bm/ie/pm/prpslManage/TaskReqstWctContainer';

const PrpslManageContainer = () => {
  //사업계획서번호
  const [prpslNo, setPrpslNo] = useState('');

  //페이지 구분(LIST, RECP)
  const [pageMode, setPageMode] = useState('LIST');

  const [tabKey, setTabKey] = useState(1);

  const saveClick = () => {
    Modal.info({
      title: 'saveClick',
    });
  };
  const listClick = () => {
    setPageMode('LIST');
  };

  useEffect(() => {
    setTabKey(1);
  }, [pageMode]);

  return (
    <>
      {pageMode === 'LIST' ? (
        <Row className="eu-usr-row-page-comp-layout">
          <Col span={24}>
            <PrpslManage01 setPrpslNo={setPrpslNo} setPageMode={setPageMode} />
          </Col>
        </Row>
      ) : (
        <>
          <Row className="eu-usr-row-page-comp-layout">
            <Col span={24}>
              <Tabs
                key={tabKey}
                items={[
                  {
                    label: '기본정보',
                    key: ' PrpslManage02',
                    children: (
                      <PrpslManage02
                        prpslNo={prpslNo}
                        setPageMode={setPageMode}
                      />
                    ),
                  },
                  {
                    label: '사업비내역',
                    key: 'TaskReqstWctContainer',
                    children: (
                      <TaskReqstWctContainer
                        prpslNo={prpslNo}
                        setPageMode={setPageMode}
                      />
                    ),
                  },
                ]}
              />
            </Col>
          </Row>
          <Row className="eu-usr-row-page-comp-layout">
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button
                size="large"
                className="eu-usr-btn-process-fine"
                onClick={saveClick}
              >
                {' '}
                저장{' '}
              </Button>
              <Button
                size="large"
                className="eu-usr-btn-process-fine"
                onClick={listClick}
              >
                {' '}
                목록{' '}
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default React.memo(PrpslManageContainer);
