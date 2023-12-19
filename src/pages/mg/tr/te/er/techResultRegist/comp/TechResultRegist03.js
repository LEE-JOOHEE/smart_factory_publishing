import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Select, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { UserOutlined } from '@ant-design/icons';
import { getListCommonCd, arrChange } from 'components/common/Common';
import TechSignPopup from 'pages/mg/tr/te/er/techResultRegist/popup/TechSignPopup';
import { ReactComponent as Man } from 'css/images/icons/chairman.svg';
import { ReactComponent as Presenter } from 'css/images/icons/presenter.svg';

const TechResultRegist03 = ({ setActiveTabKey }) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //서명
  const [cmEvlMfcmSgnPopupOpen, setCmEvlMfcmSgnPopupOpen] = useState(false);
  const seatDsgnStrgClick = () => {
    Modal.info({
      title: '자리배치저장 클릭',
    });
  };
  const svlBgngClick = () => {
    setActiveTabKey(2);
  };

  const signClick = () => {
    setCmEvlMfcmSgnPopupOpen(true);
  };

  const arrEvlMfcmColumns = [
    { title: '성명', dataIndex: 'a', width: '8%', },
    { title: '소속기관', dataIndex: 'b', width: '8%', },
    { title: '직위', dataIndex: 'c', width: '8%', },
    { title: '최종학위', dataIndex: 'd', width: '6%', align: 'center', },
    { title: '전공', dataIndex: 'e', width: '9%', },
    { title: '이메일', dataIndex: 'f', width: '14%', },
    { title: '전화번호', dataIndex: 'g', width: '11%', },
    { title: '평가분야', dataIndex: 'h', width: '11%', },
    {
      title: '자리배치',
      dataIndex: 'i',
      width: '10%',
      render: (text, record, index) => {
        return (
          <>
            <Select
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }}
              onChange={(value) => {
                arrChange(value, 'i', index, setArrEvlMfcm);
              }}
              options={[
                {
                  value: '',
                  label: '선택',
                },
                ...(ojtGroupCodes?.e ? ojtGroupCodes.e : []),
              ]}
              defaultValue={record?.i}
            />
          </>
        );
      },
    },
    { title: '참석여부', dataIndex: 'j', width: '6%', align: 'center', },
    {
      title: '서명일자',
      dataIndex: 'k',
      width: '9%',
      render: (text, record, index) => {
        if (record.k === '') {
          return (
            <>
              <Button
                size="small"
                className="eu-btn-table-fine"
                onClick={() => signClick(record)}
              >
                서명
              </Button>
            </>
          );
        } else {
          return record.k;
        }
      },
    },
  ];
  //평가위원 목록
  const [arrEvlMfcm, setArrEvlMfcm] = useState([]);

  useEffect(() => {
    //공통코드 조회
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c']));

    let tmp = [];
    for (let idx = 1; idx <= 1; idx++) {
      tmp.push({
        key: idx,
        a: '위원' + idx,
        b: '기관',
        c: '직위',
        d: '박사',
        e: '컴퓨터공학',
        f: 'mmail@mail.co.kr',
        g: '010-0000-0000',
        h: '업종별 전문분야',
        i: '위원장',
        j: '참석',
        k: '2022-10-03',
      });
    }

    for (let idx = 2; idx <= 9; idx++) {
      tmp.push({
        key: idx,
        a: '위원' + idx,
        b: '기관',
        c: '직위',
        d: '박사',
        e: '컴퓨터공학',
        f: 'mmail@mail.co.kr',
        g: '010-0000-0000',
        h: '업종별 전문분야',
        i: 'A',
        j: '참석',
        k: '',
      });
    }
    setArrEvlMfcm(tmp);
  }, []);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>자리배치</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          {/* 우측 버튼 */}
        </Col>
      </Row>

      <Row gutter={10}>
        <Col span={3}>
          <div className="eu-seat-map">
            <Man width="20px" height="20px" /><br />평가위원장
          </div>
        </Col>
        <Col span={18}>
          <div className="eu-seat-map ptb-0 plr-60">
            <Row>
              <Col span={6} className="member-seat-wrap">
                <Row className="member-wrap">
                  <Col><UserOutlined /><b>A</b> 위원</Col>
                </Row>
                <Row className="member-wrap line">
                  <Col><UserOutlined /><b>B</b> 위원</Col>
                </Row>
              </Col>
              <Col span={6} className="member-seat-wrap">
                <Row className="member-wrap">
                  <Col><UserOutlined /><b>C</b> 위원</Col>
                </Row>
                <Row className="member-wrap line">
                  <Col><UserOutlined /><b>D</b> 위원</Col>
                </Row>
              </Col>
              <Col span={6} className="member-seat-wrap">
                <Row className="member-wrap">
                  <Col><UserOutlined /><b>E</b> 위원</Col>
                </Row>
                <Row className="member-wrap line">
                  <Col><UserOutlined /><b>F</b> 위원</Col>
                </Row>
              </Col>
              <Col span={6} className="member-seat-wrap">
                <Row className="member-wrap">
                  <Col><UserOutlined /><b>G</b> 위원</Col>
                </Row>
                <Row className="member-wrap line">
                  <Col><UserOutlined /><b>H</b> 위원</Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={3}>
          <div className="eu-seat-map">
            <Presenter width="20px" height="20px" /><br />발표자
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={3}>
          <TitleComp>평가위원 정보</TitleComp>
        </Col>
        <Col span={9}></Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={seatDsgnStrgClick}
          >
            자리배치저장
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={svlBgngClick}
          >
            평가시작
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrEvlMfcm'}
            columns={arrEvlMfcmColumns}
            dataSource={arrEvlMfcm}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 400, x: 1400 }}
          />
        </Col>
      </Row>
      <TechSignPopup
        key="TechSignPopup"
        cmEvlMfcmSgnPopupOpen={cmEvlMfcmSgnPopupOpen}
        setCmEvlMfcmSgnPopupOpen={setCmEvlMfcmSgnPopupOpen}
      />
    </>
  );
};

export default TechResultRegist03;
