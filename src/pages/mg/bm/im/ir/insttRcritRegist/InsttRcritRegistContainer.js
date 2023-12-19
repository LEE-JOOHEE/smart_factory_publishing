import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Tabs, Button } from 'antd';
import 'css/Common.css';
import InsttRcritRegist01 from 'pages/mg/bm/im/ir/insttRcritRegist/comp/InsttRcritRegist01';
import InsttRegistBsns from 'pages/mg/bm/im/ir/insttRegistBsns/InsttRegistBsnsContainer';
import InsttRegistFormat from 'pages/mg/bm/im/ir/insttRegistFormat/InsttRegistFormatContainer';
import InsttRegistFx from 'pages/mg/bm/im/ir/insttRegistFx/InsttRegistFxContainer';

const InsttRcritRegistContainer = ({ ojtKey, setPageType }) => {
  useEffect(() => {
    Modal.info({ title: `key: ${JSON.stringify(ojtKey)}` });
  }, []);

  // 모집공고 첨부파일
  const [arrRcritPbancAtchFile, setArrRcritPbancAtchFile] = useState([]);
  // 서식정의 arr
  const [arrTmpltDef, setArrTmpltDef] = useState([
    {
      key: 1,
      a: '스마트공장 보급 확산을 위한 업무협약서',
      b: '필수',
      c: 1,
      d: 'hwp',
      e: '',
    },
  ]);
  useEffect(() => {
    let tmp1 = [];
    let tmp2 = [];
    for (let idx = 1; idx < 50; idx++) {
      tmp1.push({
        key: idx,
        a: idx,
        b: '공고 관련 첨부파일',
        c: '공고_첨부파일.hwp',
        d: '3.64(KB)',
        e: '등록일자',
        f: '첨부',
      });
      tmp2.push({
        key: idx,
        a: '스마트공장 보급 확산을 위한 업무협약서',
        b: '필수',
        c: idx,
        d: 'hwp',
        e: '',
      });
    }
    console.log('tmp2: ', tmp2);
    setArrRcritPbancAtchFile(tmp1);
    setArrTmpltDef(tmp2);
  }, []);

  const bizRcritTrgtInsertClick = (ojtBizRcritTrgt) => {
    Modal.info({
      title: `ojtBizRcritTrgt: ${JSON.stringify(ojtBizRcritTrgt)}`,
    });
  };
  const schdlMngInsertClick = (ojtSchdlMng) => {
    Modal.info({
      title: `ojtSchdlMng: ${JSON.stringify(ojtSchdlMng)}`,
    });
  };

  const tmpltDefInsertClick = (ojtSchdlMng) => {
    Modal.info({
      title: `ojtSchdlMng: ${JSON.stringify(ojtSchdlMng)}`,
    });
  };

  const [tabItems, setTabItems] = useState([
    {
      label: '사업모집대상',
      key: '사업모집대상',
      children: (
        <InsttRegistBsns bizRcritTrgtInsertClick={bizRcritTrgtInsertClick} />
      ),
    },
    {
      label: '일정관리',
      key: '일정관리',
      children: <InsttRegistFx schdlMngInsertClick={schdlMngInsertClick} />,
    },
    {
      label: '서식정의',
      key: '서식정의',
      children: <InsttRegistFormat arrTmpltDef={arrTmpltDef} />,
    },
  ]);
  const listClick = () => {
    setPageType('LIST');
  };

  const registClick = () => {
    Modal.info({
      title: 'registClick',
    });
  };
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttRcritRegist01
            setPageType={setPageType}
            arrRcritPbancAtchFile={arrRcritPbancAtchFile}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Tabs items={tabItems} />
        </Col>
      </Row>
      <Row className="eu-row-page-btn-layout">
        <Col span={24}>
          <Button
            size="large"
            className="eu-btn-process-fine"
            onClick={registClick}
          >
            등록
          </Button>
          <Button
            size="large"
            className="eu-btn-process-error"
            onClick={listClick}
          >
            목록
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(InsttRcritRegistContainer);
