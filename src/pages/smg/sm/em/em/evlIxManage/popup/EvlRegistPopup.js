import React, { useEffect, useState } from 'react';
import { Button, Modal, Row, Col, Tabs } from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import EvlRegistPopupBass from 'pages/smg/sm/em/em/evlIxManage/popup/EvlRegistPopupBass';
import EvlRegistPopupComposition from 'pages/smg/sm/em/em/evlIxManage/popup/EvlRegistPopupComposition';

const EvlRegistPopup = ({ evlRegistPopupOpen, setEvlRegistPopupOpen }) => {
  //평가지 기본정보
  const [ojtEvlBass, setOjtEvlBass] = useState([]);

  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const closeClick = () => {
    setEvlRegistPopupOpen(false);
  };

  useEffect(() => {
    //공통코드
    setOjtGroupCodes(getListCommonCd(['a', 'b']));

    setOjtEvlBass({
      a1: '평가위원 평가지',
      a2: '2022',
      a3: '스마트공장 구축 및 고도화 사업',
      a4: '스마트공장 구축 및 고도화 사업(기초)',
      a5: '선정평가',
      a6: '다면평가',
      a7: '',
      a8: '',
    });
  }, []);

  useEffect(() => {
    console.log('ojtEvlBass : ', ojtEvlBass);
  }, [ojtEvlBass]);

  return (
    <>
      <Modal
        key="SptBsnsPopup"
        open={evlRegistPopupOpen}
        title="평가지 등록"
        // style={{ height: 'calc(100vh - 100px)' }}
        // bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1600}
        footer={[
          <Button
            key={'closeClick'}
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        {/* <Row className="eu-row-comp-cont"> */}
        <Row>
          <Col span={24}>
            <Tabs
              // type="card"
              className="eu-content-tab popup-tab"
              items={[
                {
                  label: '평가지기본정보',
                  key: 1,
                  children: <EvlRegistPopupBass />,
                },
                {
                  label: '평가지 구성',
                  key: 2,
                  children: <EvlRegistPopupComposition />,
                },
              ]}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default EvlRegistPopup;
