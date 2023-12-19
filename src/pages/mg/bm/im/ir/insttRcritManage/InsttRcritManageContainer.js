import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Tabs } from 'antd';
import 'css/Common.css';
import InsttRcritManage01 from 'pages/mg/bm/im/ir/insttRcritManage/comp/InsttRcritManage01';
import InsttRcritManage02 from 'pages/mg/bm/im/ir/insttRcritManage/comp/InsttRcritManage02';
import InsttRegistBsns from 'pages/mg/bm/im/ir/insttRegistBsns/InsttRegistBsnsContainer';
import InsttRegistFormat from 'pages/mg/bm/im/ir/insttRegistFormat/InsttRegistFormatContainer';
import InsttRegistFx from 'pages/mg/bm/im/ir/insttRegistFx/InsttRegistFxContainer';

const InsttRcritManageContainer = ({ setOjtKey, setPageType }) => {
  //  검색조건 입력 조회 버튼 메소드
  const searchClick = (ojtSrchCnd) => {
    console.log('ojtSrchCnd: ', ojtSrchCnd);
  };

  const [arrInstRcritMng, setArrInstRcritMng] = useState([]);
  const [arrCheckedInstRcritMng, setArrCheckedInstRcritMng] = useState([]);

  useEffect(() => {
    setArrInstRcritMng([
      {
        key: 1,
        a: '1',
        b: '2022',
        c: '대중소상생형',
        d: '스마트공장 보급확산사업 공고(대중소 상생형 주관기관 모집)',
        e: '2022-10-24',
        f: '',
        g: '2022-10-25 ~ 2022-12-31',
        h: '홍길동',
      },
    ]);
  }, []);

  const [tabItems, setTabItems] = useState([
    {
      label: '사업모집대상',
      key: '사업모집대상',
      children: <InsttRegistBsns />,
    },
    {
      label: '일정관리',
      key: '일정관리',
      children: <InsttRegistFx />,
    },
    {
      label: '서식정의',
      key: '서식정의',
      children: <InsttRegistFormat />,
    },
  ]);
  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttRcritManage01 searchClick={searchClick} />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <InsttRcritManage02
            arrInstRcritMng={arrInstRcritMng}
            setArrCheckedInstRcritMng={setArrCheckedInstRcritMng}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(InsttRcritManageContainer);
