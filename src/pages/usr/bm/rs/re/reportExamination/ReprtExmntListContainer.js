import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Button } from 'antd';
import 'css/CommonUsr.css';
import { getListCommonCd } from 'components/common/Common';
import ReprtExmntList01 from 'pages/usr/bm/rs/re/reportExamination/comp/ReprtExmntList01';
import ReprtExmntList02 from 'pages/usr/bm/rs/re/reportExamination/comp/ReprtExmntList02';
import ReprtExmntStsfdg from 'pages/usr/bm/rs/re/reportExamination/popup/ReprtExmntStsfdg';

const ReprtExmntListContainer = ({ setOjtKey, setPageType }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const [arrAsmtLst, setArrAsmtLst] = useState([]);

  const [reprtExmntStsfdgOpen, setReprtExmntStsfdgOpen] = useState(false);

  const reprtExmntStsfdgClick = () => {
    setReprtExmntStsfdgOpen(true);
  };

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('searchClick ojtSrchCnd : ', ojtSrchCnd);
  };

  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));
    let tmp1 = [];

    const arrPageTypes = [
      'REPRT_EXMNT_OUTSET',
      'REPRT_EXMNT_MIDDLE',
      'REPRT_EXMNT_COMPT',
      'REPRT_EXMNT_LAST',
    ];
    const arrTypes = ['착수계', '중간보고서', '완료보고서', '최종완료보고서'];
    for (let idx = 0; idx < 20; idx++) {
      tmp1.push({
        key: idx,
        a1: idx + 1,
        a2: '2022년',
        a3: '스마트구축및\n고도화',
        a4: '2022-R210',
        a5: '(주)도입기업_스마트\n구축및고도화',
        a6: '(주)공급기업',
        a7: '홍길동',
        a8: arrTypes[idx % 4],
        a9: '도입기업 승인요청',
        a91: arrPageTypes[idx % 4],
        a10: '',
      });
    }
    setArrAsmtLst(tmp1);
  }, []);
  return (
    <>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <ReprtExmntList01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-comp-layout">
        <Col span={24}>
          <ReprtExmntList02
            arrAsmtLst={arrAsmtLst}
            setOjtKey={setOjtKey}
            setPageType={setPageType}
          />
        </Col>
      </Row>
      <Row className="eu-usr-row-page-btn-layout">
        <Col span={24}>
          <Button size="large" type="link" onClick={reprtExmntStsfdgClick}>
            지원사업만족도조사
          </Button>
        </Col>
      </Row>
      <ReprtExmntStsfdg
        reprtExmntStsfdgOpen={reprtExmntStsfdgOpen}
        setReprtExmntStsfdgOpen={setReprtExmntStsfdgOpen}
      />
    </>
  );
};

export default React.memo(ReprtExmntListContainer);
