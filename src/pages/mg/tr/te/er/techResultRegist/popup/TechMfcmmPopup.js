import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Radio, Row, Table, Tabs, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { arrChange } from 'components/common/Common';
const { TextArea } = Input;
const TechMfcmmPopup = ({
  evlMfcm,
  cmEvlMfcmEvlPopupOpen,
  setCmEvlMfcmEvlPopupOpen,
}) => {
  const closeClick = () => {
    setCmEvlMfcmEvlPopupOpen(false);
  };

  const cmEvlMfcmEvlColumns = [
    { title: '도입기업', dataIndex: 'a', width: '20%', align: 'center' },
    { title: '공급기업', dataIndex: 'b', width: '20%', align: 'center' },
    { title: '과제명', dataIndex: 'c', width: '50%', align: 'center' },
    { title: '점수', dataIndex: 'd', width: '10%', align: 'center' },
  ];
  const evlTblColumns = [
    {
      title: '과제명 : TEST과제',
      align: 'left',
      children: [
        {
          title: '평가문항',
          span: 3,
          align: 'center',
          dataIndex: 'a',
        },

        { dataIndex: 'b' },
        { dataIndex: 'c' },

        {
          title: '평가항목',
          align: 'center',
          render: (text, record, index) => {
            return (
              <>
                <Radio.Group
                  onChange={(e) => {
                    arrChange(e.target.value, 'd', index, setArrEvlTbl);
                  }}
                  defaultValue={record?.d}
                >
                  <Radio
                    value={10}
                    checked={record && record.d === 10 ? true : false}
                  >
                    A(10)
                  </Radio>
                  <Radio
                    value={8}
                    checked={record && record.d === 8 ? true : false}
                  >
                    B(8)
                  </Radio>
                  <Radio value={6}>C(6)</Radio>
                  <Radio value={4}>D(4)</Radio>
                  <Radio value={2}>E(2)</Radio>
                </Radio.Group>
              </>
            );
          },
        },
      ],
    },
  ];
  const [arrEvlTbl, setArrEvlTbl] = useState([]);

  const [arrCmEvlMfcmEvl, setArrCmEvlMfcmEvl] = useState([]);
  const [directTitle, setDirectTitle] = useState('');

  useEffect(() => {
    if (arrEvlTbl) console.log('arrEvlTbl : ', arrEvlTbl);
  }, [arrEvlTbl]);

  useEffect(() => {
    let tmp = [];
    tmp.push({
      key: 0,
      a: '기업명',
      b: '공급기업명',
      c: '과제명',
      d: '85',
    });
    setArrCmEvlMfcmEvl(tmp);

    let tmp2 = [];
    tmp2.push({
      key: 1,
      a: '평가표명',
      b: '대문항1(30점)',
      c: '상세문항1(10점)',
      d: 8,
    });
    tmp2.push({
      key: 2,
      a: '평가표명',
      b: '대문항1(30점)',
      c: '상세문항2(20점)',
      d: 16,
    });
    tmp2.push({
      key: 3,
      a: '평가표명',
      b: '대문항2(20점)',
      c: '상세문항3(10점)',
      d: 10,
    });
    tmp2.push({
      key: 4,
      a: '평가표명',
      b: '대문항2(20점)',
      c: '상세문항4(10점)',
      d: 6,
    });
    tmp2.push({
      key: 5,
      a: '평가표명',
      b: '대문항3(50점)',
      c: '상세문항5(50점)',
      d: 45,
    });

    setArrEvlTbl(tmp2);
  }, []);

  useEffect(() => {
    if (evlMfcm) {
      setDirectTitle(evlMfcm.isHd ? '평가위원장 평가표' : '평가위원 평가표');
      console.log('evlMfcm : ', evlMfcm);
    }
  }, [evlMfcm]);

  return (
    <>
      <Modal
        key="CmEvlMfcmEvlPopupOpen"
        open={cmEvlMfcmEvlPopupOpen}
        title={directTitle}
        // style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1250}
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
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
              <TitleComp>기업정보</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              {/* 우측 버튼 */}
            </Col>
          </Row>
          <Col span={24}>
            <Table
              key={'cmEvlMfcmEvlColumns'}
              columns={cmEvlMfcmEvlColumns}
              dataSource={arrCmEvlMfcmEvl}
              size="small"
              bordered
              pagination={false}
            />
          </Col>
        </Row>
        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title mb-0">
            <Col span={24}>
              <TitleComp>심사 평가표</TitleComp>
            </Col>
          </Row>
          <Col span={24}>
            <Table
              key={'evlTblColumns'}
              columns={evlTblColumns}
              dataSource={arrEvlTbl}
              size="large"
              bordered
              pagination={false}
            />
          </Col>
        </Row>
        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title mb-0">
            <Col span={24}>
              <TitleComp>평가의견</TitleComp>
            </Col>
          </Row>
          <Col span={24}>
            <TextArea rows={5} />
          </Col>
        </Row>
        {evlMfcm && evlMfcm.isHd ? (
          <>
            <Row className="eu-row-comp-cont margin-top">
              <Row className="eu-row-comp-title mb-0">
                <Col span={24}>
                  <TitleComp>평가위원장 종합의견</TitleComp>
                </Col>
              </Row>
              <Col span={24}>
                <TextArea rows={5} />
              </Col>
            </Row>
          </>
        ) : (
          ''
        )}
      </Modal>
    </>
  );
};

export default TechMfcmmPopup;
