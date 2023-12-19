import React, { useState } from 'react';
import {
  Col,
  Row,
  ConfigProvider,
  TimePicker,
  DatePicker,
  Space,
  Checkbox,
  Input,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const { TextArea } = Input;

const SptCnfirmRegist03 = () => {
  const [ojtSptIdntyRslt, setOjtSptIdntyRslt] = useState({
    a: '',
    b: '',
    c: '',
    d: true,
    e: true,
    f: true,
    g: '',
  });
  const ojtSptIdntyRsltChange = (value, column) => {
    setOjtSptIdntyRslt((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={24}>
          <TitleComp>현장확인 결과</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <table
            key={'SptCnfirmRegist03'} // 각 테이블마다 고유 키 입력
            className="eu-usr-custom-description-table" // 고정
            summary="현장확인 결과"
          >
            <tr>
              <td className={'header'}>방문일자</td>
              <td>
                <ConfigProvider locale={locale}>
                  <DatePicker
                    placeholder={'방문일자'}
                    onChange={(moment, dateString) => {
                      if (moment) {
                        console.log('방문일자: ', dateString);
                      }
                      ojtSptIdntyRsltChange(dateString, 'a');
                    }}
                  />
                </ConfigProvider>
              </td>
              <td className={'header'}>방문시간</td>
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

                        ojtSptIdntyRsltChange(timeStrings[0], 'b');
                        ojtSptIdntyRsltChange(timeStrings[1], 'c');
                      } else {
                        console.log('Time Clear');
                      }
                    }}
                  />
                </ConfigProvider>
              </td>
            </tr>
            <tbody>
              <tr>
                <td className={'header'} rowSpan="3">
                  사업계획서 대조 · 확인
                </td>
                <td>가. 구축 대상 제조공장의 정상가동 여부(휴·폐업 등)</td>
                <td colSpan="2">
                  <Space>
                    <Checkbox
                      value={true}
                      onChange={(e) =>
                        ojtSptIdntyRsltChange(e.target.value, 'd')
                      }
                      checked={ojtSptIdntyRslt?.d}
                    />
                    적정
                    <Checkbox
                      value={false}
                      onChange={(e) =>
                        ojtSptIdntyRsltChange(e.target.value, 'd')
                      }
                      checked={!ojtSptIdntyRslt?.d}
                    />
                    부적정
                  </Space>
                </td>
              </tr>
              <tr>
                <td>나 .사업계획서와 현장의 공정, 설비 등 일치 여부</td>
                <td colSpan="2">
                  <Space>
                    <Checkbox
                      value={true}
                      onChange={(e) =>
                        ojtSptIdntyRsltChange(e.target.value, 'e')
                      }
                      checked={ojtSptIdntyRslt?.e}
                    />
                    적정
                    <Checkbox
                      value={false}
                      onChange={(e) =>
                        ojtSptIdntyRsltChange(e.target.value, 'e')
                      }
                      checked={!ojtSptIdntyRslt?.e}
                    />
                    부적정
                  </Space>
                </td>
              </tr>
              <tr>
                <td>다. 기 보유설비 이상유무(정상가동 등)</td>
                <td colSpan="2">
                  <Space>
                    <Checkbox
                      value={true}
                      onChange={(e) =>
                        ojtSptIdntyRsltChange(e.target.value, 'f')
                      }
                      checked={ojtSptIdntyRslt?.f}
                    />
                    적정
                    <Checkbox
                      value={false}
                      onChange={(e) =>
                        ojtSptIdntyRsltChange(e.target.value, 'f')
                      }
                      checked={!ojtSptIdntyRslt?.f}
                    />
                    부적정
                  </Space>
                </td>
              </tr>
              <tr>
                <td className={'header'}>종합의견</td>
                <td colSpan="3">
                  <TextArea
                    onChange={(e) => ojtSptIdntyRsltChange(e.target.value, 'g')}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default SptCnfirmRegist03;
