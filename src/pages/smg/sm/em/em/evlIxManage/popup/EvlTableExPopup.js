import React, { useEffect, useState } from 'react';
import { Button, Modal, Row, Col, Table, Radio, Space } from 'antd';
import 'css/Common.css';
import TitleComp from 'components/layout/TitleComp';
import { arrChange } from 'components/common/Common';

const EvlTableExPopup = ({ evlTableExPopupOpen, setEvlTableExPopupOpen }) => {
  //평가항목 목록
  const [arrEvlTableEx, setArrEvlTableEx] = useState([]);

  const closeClick = () => {
    setEvlTableExPopupOpen(false);
  };

  let groupKey = '';

  useEffect(() => {
    let tmp = [];

    tmp.push({
      key: 1,
      a1: 1,
      a2: '도입기업 역량',
      a3: '항목 내용',
      a4: 10,
      a5: 10,
      a6: 9,
      a7: 8,
      a8: 7,
      a9: 6,
      a10: 0,
      rowSpanCount: 3,
    });
    tmp.push({
      key: 2,
      a1: 2,
      a2: '도입기업 역량',
      a3: '항목 내용',
      a4: 10,
      a5: 10,
      a6: 9,
      a7: 8,
      a8: 7,
      a9: 6,
      a10: 0,
      rowSpanCount: 3,
    });
    tmp.push({
      key: 3,
      a1: 3,
      a2: '도입기업 역량',
      a3: '항목 내용',
      a4: 10,
      a5: 10,
      a6: 9,
      a7: 8,
      a8: 7,
      a9: 6,
      a10: 0,
      rowSpanCount: 3,
    });
    tmp.push({
      key: 4,
      a1: 4,
      a2: '스마트공장 구축 필요성',
      a3: '항목 내용',
      a4: 10,
      a5: 10,
      a6: 9,
      a7: 8,
      a8: 7,
      a9: 6,
      a10: 0,
      rowSpanCount: 3,
    });
    tmp.push({
      key: 5,
      a1: 5,
      a2: '스마트공장 구축 필요성',
      a3: '항목 내용',
      a4: 10,
      a5: 10,
      a6: 9,
      a7: 8,
      a8: 7,
      a9: 6,
      a10: 0,
      rowSpanCount: 3,
    });
    tmp.push({
      key: 6,
      a1: 6,
      a2: '스마트공장 구축 필요성',
      a3: '항목 내용',
      a4: 10,
      a5: 10,
      a6: 9,
      a7: 8,
      a8: 7,
      a9: 6,
      a10: 0,
      rowSpanCount: 3,
    });
    tmp.push({
      key: 7,
      a1: 7,
      a2: '스마트공장 구축 목표의 적절성',
      a3: '항목 내용',
      a4: 10,
      a5: 10,
      a6: 9,
      a7: 8,
      a8: 7,
      a9: 6,
      a10: 0,
      rowSpanCount: 5,
    });
    tmp.push({
      key: 8,
      a1: 8,
      a2: '스마트공장 구축 목표의 적절성',
      a3: '항목 내용',
      a4: 10,
      a5: 10,
      a6: 9,
      a7: 8,
      a8: 7,
      a9: 6,
      a10: 0,
      rowSpanCount: 5,
    });
    tmp.push({
      key: 9,
      a1: 9,
      a2: '스마트공장 구축 목표의 적절성',
      a3: '항목 내용',
      a4: 10,
      a5: 10,
      a6: 9,
      a7: 8,
      a8: 7,
      a9: 6,
      a10: 0,
      rowSpanCount: 5,
    });
    tmp.push({
      key: 10,
      a1: 10,
      a2: '스마트공장 구축 목표의 적절성',
      a3: '항목 내용',
      a4: 5,
      a5: 5,
      a6: 4,
      a7: 3,
      a8: 2,
      a9: 1,
      a10: 0,
      rowSpanCount: 5,
    });
    tmp.push({
      key: 11,
      a1: 11,
      a2: '스마트공장 구축 목표의 적절성',
      a3: '항목 내용',
      a4: 5,
      a5: 5,
      a6: 4,
      a7: 3,
      a8: 2,
      a9: 1,
      a10: 0,
      rowSpanCount: 5,
    });

    setArrEvlTableEx(tmp);
  }, []);

  useEffect(() => {
    console.log('arrEvlTableEx : ', arrEvlTableEx);
  }, [arrEvlTableEx]);

  return (
    <>
      <Modal
        key="SptBsnsPopup"
        open={evlTableExPopupOpen}
        title="사업별 평가배정 현황"
        // style={{ height: 'calc(100vh - 200px)' }}
        // bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1200}
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
          <Col span={24}>
            {/* <Table
              key={'arrEvlTableEx'}
              columns={arrEvlTableExColumns}
              dataSource={arrEvlTableEx}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 400 }}
            /> */}
            <div className="eu-custom-description-table">
              <table
                key={'arrEvlTableEx-table'} // 각 테이블마다 고유 키 입력
                summary="스마트공장 고도화 사업 평가표"
              >
                <colgroup>
                  <col width={'5%'} />
                  <col width={'12%'} />
                  <col />
                  <col width={'5%'} />
                  <col width={'5%'} />
                  <col width={'5%'} />
                  <col width={'5%'} />
                  <col width={'5%'} />
                  <col width={'5%'} />
                </colgroup>
                <thead>
                  <tr key={'arrEvlTableEx-table-thead'}>
                    <td rowSpan={2} className="header">
                      No
                    </td>
                    <td rowSpan={2} colSpan={2} className="header">
                      평가항목
                    </td>
                    <td rowSpan={2} className="header">
                      배점
                    </td>
                    <td colSpan={5} className="header border-r-0">
                      등급
                    </td>
                  </tr>
                  <tr key={'arrEvlTableEx-table-thead2'}>
                    <td className="header">매우우수</td>
                    <td className="header">우수</td>
                    <td className="header">보통</td>
                    <td className="header">미흡</td>
                    <td className="header border-r-0">매우미흡</td>
                  </tr>
                </thead>
                <tbody>
                  {arrEvlTableEx &&
                    arrEvlTableEx.map((record, index) => {
                      let tdPrint = false;
                      if (index === 0) {
                        tdPrint = true;
                      } else {
                        if (groupKey === record.a2) {
                          tdPrint = false;
                        } else {
                          tdPrint = true;
                        }
                      }
                      groupKey = record.a2;
                      return (
                        <tr key={`arrEvlTableEx_${index}`}>
                          <td className="text-c">{record.a1}</td>
                          {tdPrint ? (
                            <td rowSpan={record.rowSpanCount}>{record.a2}</td>
                          ) : null}
                          <td>{record.a3}</td>
                          <td className="text-c">{record.a4}</td>
                          <td>
                            <Space>
                              <input
                                id={'radio_a5_' + record.key}
                                key={'radio_a5_' + record.key}
                                type="radio"
                                name={record.key}
                                value={record.a5}
                                onClick={(evt) => {
                                  arrChange(
                                    evt.target.value,
                                    'a10',
                                    index,
                                    setArrEvlTableEx
                                  );
                                }}
                              />
                              <label
                                htmlFor={'radio_a5_' + record.key}
                                style={{ cursor: 'pointer' }}
                              >
                                {record.a5}
                              </label>
                            </Space>
                          </td>
                          <td>
                            <Space>
                              <input
                                id={'radio_a6_' + record.key}
                                key={'radio_a6_' + record.key}
                                type="radio"
                                name={record.key}
                                value={record.a6}
                                onClick={(evt) => {
                                  arrChange(
                                    evt.target.value,
                                    'a10',
                                    index,
                                    setArrEvlTableEx
                                  );
                                }}
                              />
                              <label
                                htmlFor={'radio_a6_' + record.key}
                                style={{ cursor: 'pointer' }}
                              >
                                {record.a6}
                              </label>
                            </Space>
                          </td>
                          <td>
                            <Space>
                              <input
                                id={'radio_a7_' + record.key}
                                key={'radio_a7_' + record.key}
                                type="radio"
                                name={record.key}
                                value={record.a7}
                                onClick={(evt) => {
                                  arrChange(
                                    evt.target.value,
                                    'a10',
                                    index,
                                    setArrEvlTableEx
                                  );
                                }}
                              />
                              <label
                                htmlFor={'radio_a7_' + record.key}
                                style={{ cursor: 'pointer' }}
                              >
                                {record.a7}
                              </label>
                            </Space>
                          </td>
                          <td>
                            <Space>
                              <input
                                id={'radio_a8_' + record.key}
                                key={'radio_a8_' + record.key}
                                type="radio"
                                name={record.key}
                                value={record.a8}
                                onClick={(evt) => {
                                  arrChange(
                                    evt.target.value,
                                    'a10',
                                    index,
                                    setArrEvlTableEx
                                  );
                                }}
                              />
                              <label
                                htmlFor={'radio_a8_' + record.key}
                                style={{ cursor: 'pointer' }}
                              >
                                {record.a8}
                              </label>
                            </Space>
                          </td>
                          <td>
                            <Space>
                              <input
                                id={'radio_a9_' + record.key}
                                key={'radio_a9_' + record.key}
                                type="radio"
                                name={record.key}
                                value={record.a9}
                                onClick={(evt) => {
                                  arrChange(evt.target.value, 'a10', index);
                                }}
                              />
                              <label
                                htmlFor={'radio_a9_' + record.key}
                                style={{ cursor: 'pointer' }}
                              >
                                {record.a9}
                              </label>
                            </Space>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default EvlTableExPopup;
