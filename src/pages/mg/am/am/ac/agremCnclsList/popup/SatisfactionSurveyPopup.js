import React from 'react';
import 'css/Common.css';
import { Button, Col, Modal, Row, Table, Descriptions, Space, Radio, Input } from 'antd/lib';
import { useState } from "react";

const columns = [
  {
    title: '항목',
    dataIndex: 'a1',
    width: '15%',
    align: 'center',
  },
  {
    title: '세부항목',
    dataIndex: 'a2',
    width: '45%',
    align: 'left',
  },
  {
    title: '점수',
    dataIndex: 'a3',
    width: '40%',
    align: 'right',
  },
];

const SatisfactionSurveyPopup = ({
  agremSignPopupOpen,
  setAgremSignPopupOpen,
  arrData,
  satisfactionSurveyPopupOpen,
  setSatisfactionSurveyPopupOpen,
}) => {
  const closeClick = () => {
    setSatisfactionSurveyPopupOpen(false);
  };

  const data = () => {
    const result = [];
    for(let i = 2; i < 7; i++){
      result.push(
        <tr key={i}>
          <td className="text-c">적정성(15)</td>
          <td>{i}. 가격조사가 객관적이고 적정하게 수행 되었습니까?</td>
          <td>
            <Radio.Group defaultValue={'15'}>
              <Radio value={'15'}>15</Radio>
              <Radio value={'12'}>12</Radio>
              <Radio value={'9'}>9</Radio>
              <Radio value={'6'}>6</Radio>
              <Radio value={'3'}>3</Radio>
            </Radio.Group>
          </td>
        </tr>
      )
    }
    return result;
  };

  return (
    <Modal
      open={satisfactionSurveyPopupOpen}
      title="원가계산기관 만족도 조사"
      onCancel={closeClick}
      width={1250}
      footer={[
        <Button
          key={'1111'}
          className="eu-btn-popup-process-warning"
          onClick={closeClick}
        >
          제출
        </Button>,
        <Button
          key={'2222'}
          className="eu-btn-popup-process-default"
          onClick={closeClick}
        >
          닫기
        </Button>,
      ]}
    >
      <Row>
        <Col span={24}>
          <div className="eu-sati-survye-form-wrap">
            <div className="eu-sati-survye-form-header">
              안녕하십니까? 중소기업기술정보진흥원입니다. 
              <br/>19년 스마트공장 구축 및 고도화사업을 수행함에 있어 정보시스템 구축비용에 대한 
              객관적 검증·재산정을 위해 가격제안서의 원가계산을 전문기관에 의뢰하고 있습니다. 
              <br/>이번 해부터, 원가계산의 일관성을 유지하고 지속적인 운영관리를 위해 원가계산기관의 
              수행기간을 1년에서 3년으로 확대하였습니다. 
              <br/>이에, 컨소시엄의 만족도 점수를 원가계산 기관의 평가에 반영하고자 하오니 아래 조사에 응해 주시길 바랍니다. 
              <br/>※ 아래 내용에 대해 귀사의 비밀이 절대 보장됨을 알려 드립니다.
            </div>
            <div className="eu-sati-survye-form-body">

              {/* 1. 안트디 테이블 사용 예시 */}
              {/* <Table size="small" bordered
                columns={columns}
                // dataSource={dataSource}
                pagination={false}
                scroll={{ y: 300 }}
                summary={(data) => {
                  // console.log(data);
                  let sum = 100;
                  data?.forEach((item) => (sum += Number(item['a2'])));
                  return (
                    <Table.Summary fixed>
                      <Table.Summary.Row className="bg-light-yellow">
                        <Table.Summary.Cell index={0} colSpan={2} className="text-c">합계</Table.Summary.Cell>
                        <Table.Summary.Cell index={2} className="text-c">{sum}점</Table.Summary.Cell>
                      </Table.Summary.Row>
                    </Table.Summary>
                  );
                }}
              /> */}

              {/* 2. 테이블 태그 사용 예시 (eu-custom-table) */}
              <div className="eu-custom-table">
                <table>
                  <colgroup>
                    <col width="15%" />
                    <col width="45%" />
                    <col width="40%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>항목</th>
                      <th>세부항목</th>
                      <th>점수</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-c">적정성(15)</td>
                      <td>1. 가격조사가 객관적이고 적정하게 수행 되었습니까?</td>
                      <td>
                        <Radio.Group defaultValue={'15'}>
                          <Radio value={'15'}>15</Radio>
                          <Radio value={'12'}>12</Radio>
                          <Radio value={'9'}>9</Radio>
                          <Radio value={'6'}>6</Radio>
                          <Radio value={'3'}>3</Radio>
                        </Radio.Group>
                      </td>
                    </tr>
                    {data()}
                    <tr>
                      <td className="text-c">기타의견</td>
                      <td colSpan={2} className="ptb-8">
                        <Input />
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td rowSpan={2}>합계</td>
                      <td></td>
                      <td>100점</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default SatisfactionSurveyPopup;
