import React, { useEffect, useState } from 'react';

import { Col, Modal, Row } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import BsnsManageInqire02 from 'pages/mg/tr/tr/bm/bsnsManageInqire/comp/BsnsManageInqire02';
import BsnsManageInqire01 from 'pages/mg/tr/tr/bm/bsnsManageInqire/comp/BsnsManageInqire01';

const BsnsManageInqireContainer = () => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //리스트
  const [arrBsnsManage, setArrBsnsManage] = useState([]);

  //공통코드 초기화
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd({}));

    setArrBsnsManage(() => {
      const newArr = [...Array(5).keys()].map((i) => ({
        a0: i,
        a1: '2022',
        a2: '세부공고명1',
        a3: '과제번호1',
        a4: '고도화',
        a5: '대구',
        a6: '기관명1',
        a7: '기관명2',
        a8: '기관명3',
        a9: '기관명1',
        a101: '기업진단선정완료',
        a102: '2022-08-30',
        a103: '2022-08-30',
        a11: '',
      }));
      return newArr;
    });
  }, []);

  const searchClick = (ojtSrchCnd) => {
    Modal.info({
      title: 'searchClick',
    });
    console.log('searchClick ojtSrchCnd : ', ojtSrchCnd);
  };

  return (
    <>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <BsnsManageInqire01
            ojtGroupCodes={ojtGroupCodes}
            searchClick={searchClick}
          />
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <BsnsManageInqire02 arrBsnsManage={arrBsnsManage} />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(BsnsManageInqireContainer);
