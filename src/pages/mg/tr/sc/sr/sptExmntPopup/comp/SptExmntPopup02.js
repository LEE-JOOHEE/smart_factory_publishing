import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Modal,
  Row,
  ConfigProvider,
  DatePicker,
  TimePicker,
  Radio,
  Input,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';

import 'css/Common.css';
import CmAgremRjct from 'pages/cm/am/CmAgremRjct';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR'; // 우린 한국인이니까 ko_KR를 불러옵시다
moment.locale('ko');
const { TextArea } = Input;
const SptExmntPopup02 = () => {
  const [ojtSptIndtyRslt, setOjtSptIndtyRslt] = useState({});

  const ojtSrchCndChange = (value, column) => {
    console.log('value: ', value, 'column: ', column);
    setOjtSptIndtyRslt((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  useEffect(() => {
    setOjtSptIndtyRslt({
      a: '',
      b: '',
      c: '',
      d: '2',
      e: '2',
      f: '1',
      g: '',
    });
  }, []);

  const aprvClick = () => {
    Modal.success({
      title: '보고서 승인',
    });
  };
  const rjctClick = () => {
    setSmAgremRjctOpen(true);
  };

  const [cmAgremRjctOpen, setSmAgremRjctOpen] = useState(false);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>현장확인 결과</TitleComp>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}>
          <Button size="small" className="eu-btn-crud-fine" onClick={aprvClick}>
            보고서 승인
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={rjctClick}
          >
            반려
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <table
            key={'eu-custom-description-table'} // 각 테이블마다 고유 키 입력
            className="eu-custom-description-table" // 고정
            summary="테이블요약입력"
          >
            <colgroup>
              <col width={'10%'} />
            </colgroup>
            <tbody>
              <tr>
                <td className="header">방문일자</td>
                <td>
                  <ConfigProvider locale={locale}>
                    <DatePicker
                      placeholder={'방문일자'}
                      onChange={(moment, dateString) => {
                        if (moment) {
                          console.log('방문일자: ', dateString);
                        }
                        ojtSrchCndChange(dateString, 'a');
                      }}
                    />
                  </ConfigProvider>
                </td>
                <td className="header">방문시간</td>
                <td>
                  <ConfigProvider locale={locale}>
                    <TimePicker.RangePicker
                      onChange={(times, timeStrings) => {
                        if (times) {
                          console.log(
                            'From: ',
                            timeStrings[0],
                            ', to: ',
                            timeStrings[1]
                          );

                          ojtSrchCndChange(timeStrings[0], 'b');
                          ojtSrchCndChange(timeStrings[1], 'c');
                        } else {
                          console.log('Time Clear');
                        }
                      }}
                    />
                  </ConfigProvider>
                </td>
              </tr>
              <tr>
                <td rowSpan={4} className="header">
                  사업계획서 대조 · 확인
                </td>
              </tr>
              <tr>
                <td className="header">
                  가. 구축 대상 제조공장의 정상가동 여부(휴·폐업 등)
                </td>
                <td colSpan={2}>
                  <Radio.Group
                    options={[
                      {
                        value: '1',
                        label: '적정',
                      },
                      {
                        value: '2',
                        label: '부적정',
                      },
                    ]}
                    onChange={(e) => ojtSrchCndChange(e.target.value, 'd')}
                    value={ojtSptIndtyRslt?.d}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">
                  나. 사업계획서와 현장의 공정, 설비 등 일치 여부
                </td>
                <td colSpan={2}>
                  <Radio.Group
                    options={[
                      {
                        value: '1',
                        label: '적정',
                      },
                      {
                        value: '2',
                        label: '부적정',
                      },
                    ]}
                    onChange={(e) => ojtSrchCndChange(e.target.value, 'e')}
                    value={ojtSptIndtyRslt?.e}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">
                  다. 기 보유설비 이상유무(정상가동 등)
                </td>
                <td colSpan={2}>
                  <Radio.Group
                    options={[
                      {
                        value: '1',
                        label: '적정',
                      },
                      {
                        value: '2',
                        label: '부적정',
                      },
                    ]}
                    onChange={(e) => ojtSrchCndChange(e.target.value, 'f')}
                    value={ojtSptIndtyRslt?.f}
                  />
                </td>
              </tr>
              <tr>
                <td className="header">종합의견</td>
                <td colSpan={4}>
                  <TextArea
                    rows={10}
                    onChange={(evt) => {
                      ojtSrchCndChange(evt.target.value, 'g');
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <CmAgremRjct
        cmAgremRjctOpen={cmAgremRjctOpen}
        setSmAgremRjctOpen={setSmAgremRjctOpen}
      />
    </>
  );
};

export default SptExmntPopup02;
