import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Button,
  Modal,
  Descriptions,
  Input,
  Select,
  DatePicker,
  ConfigProvider,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR'; // 우린 한국인이니까 ko_KR를 불러옵시다
moment.locale('ko');

const { RangePicker } = DatePicker;

const { TextArea } = Input;

const PblancChartrManagePopup01 = ({
  open,
  closeClick,
  confirmClick,
  openUpBizPlanStngOpen,
}) => {
  const [ojtBizInfo, setOjtBizInfo] = useState({});

  useEffect(() => {
    setOjtBizInfo({
      key: 1,
      a: '선택',
      b: '',
      c: '',
      d: '예',
      e: '예',
      f: '해당없음',
      g: '해당없음',
      h: '해당없음',
      i: '아니요',
      j: '예',
      k: '아니요',
      l: '해당없음',
      m: '아니요',
      n: '아니요',
      o: '선택안함',
      p: '아니요',
      q: '예',
      r: '아니요',
      s: '',
    });
  }, []);

  const ojtBizInfoChange = (value, column) => {
    console.log('value: ', value, 'column: ', column);
    setOjtBizInfo((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const deleteClick = () => {
    Modal.warning({
      title: '삭제',
    });
  };

  return (
    <>
      <Modal
        key="PblacnchartrManage04"
        title="사업 세부공고 설정"
        // style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        open={open}
        onCancel={closeClick}
        width={1500}
        footer={[
          <Button
            className="eu-btn-popup-process-warning"
            onClick={() => confirmClick(ojtBizInfo)}
          >
            확인
          </Button>,
          <Button
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title mb-0">
            <Col span={24}>
              <TitleComp>사업정보</TitleComp>
            </Col>
          </Row>
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item 
                // label="사업유형구분 (통계 및 사업관리대장 활용)"
                label={[
                  <label>사업유형구분<br/></label>,
                  <label className="font-14 font-bold-300">(통계 및 사업관리대장 활용)</label>
                ]}
                className="label-break lh-130"
                span={1.5} 
              >
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  style={{ width: '220px' }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'a')}
                  options={[
                    {
                      value: '선택',
                      label: '선택',
                    },
                  ]}
                  value={ojtBizInfo?.a}
                />
              </Descriptions.Item>
              <Descriptions.Item label="사업유형구분(통계 및 사업관리대장 활용)" span={1.5} className="label-break">
                <ConfigProvider locale={locale}>
                  <RangePicker style={{ width: '470px' }}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    onChange={(dates, dateStrings) => {
                      if (dates) {
                        console.log(
                          'From: ',
                          dateStrings[0],
                          ', to: ',
                          dateStrings[1]
                        );

                        ojtBizInfoChange(dateStrings[0], 'b');
                        ojtBizInfoChange(dateStrings[1], 'c');
                      } else {
                        console.log('Date Clear');
                      }
                    }}
                    placeholder={['', '']}
                  />
                </ConfigProvider>
              </Descriptions.Item>
              <Descriptions.Item label="온라인신청유무" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'd')}
                  options={[
                    {
                      value: '예',
                      label: '예',
                    },
                    {
                      value: '아니요',
                      label: '아니요',
                    },
                  ]}
                  value={ojtBizInfo?.d}
                />
              </Descriptions.Item>
              <Descriptions.Item label="가격제안서 사용여부" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  maxLength={10}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'e')}
                  options={[
                    {
                      value: '예',
                      label: '예',
                    },
                    {
                      value: '아니요',
                      label: '아니요',
                    },
                  ]}
                  value={ojtBizInfo?.e}
                />
              </Descriptions.Item>
              <Descriptions.Item label="간단설문설정" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'f')}
                  options={[
                    {
                      value: '해당없음',
                      label: '해당없음',
                    },
                  ]}
                  value={ojtBizInfo?.f}
                />
              </Descriptions.Item>
              <Descriptions.Item label="원가계산기관 만족도조사" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'g')}
                  options={[
                    {
                      value: '해당없음',
                      label: '해당없음',
                    },
                  ]}
                  value={ojtBizInfo?.g}
                />
              </Descriptions.Item>
              <Descriptions.Item label="감리기관 만족도조사" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'h')}
                  options={[
                    {
                      value: '해당없음',
                      label: '해당없음',
                    },
                  ]}
                  value={ojtBizInfo?.h}
                />
              </Descriptions.Item>
              <Descriptions.Item label="수시보완 제출 가능여부" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'i')}
                  options={[
                    {
                      value: '예',
                      label: '예',
                    },
                    {
                      value: '아니요',
                      label: '아니요',
                    },
                  ]}
                  value={ojtBizInfo?.i}
                />
              </Descriptions.Item>
              <Descriptions.Item
                // label="과제중복신청여부(다음해 신청가능 과제 '예',한번만 신청가능 과제 '아니오')"
                label={[
                  <label>과제중복신청여부<br/></label>,
                  <label className="font-14 font-bold-300">(다음해 신청가능 과제 '예',<br/></label>,
                  <label className="font-14 font-bold-300">한번만 신청가능 과제 '아니오')</label>,
                ]}
                className="label-break lh-130"
                span={1.5}
              >
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'j')}
                  options={[
                    {
                      value: '예',
                      label: '예',
                    },
                    {
                      value: '아니요',
                      label: '아니요',
                    },
                  ]}
                  value={ojtBizInfo?.j}
                />
              </Descriptions.Item>
              <Descriptions.Item 
                // label="신규구축등록업체 제어여부(기 구축된 산규구축과제 도입기업재신청 불가능 제어(약 12,000개 기업))"
                label={[
                  <label>신규구축등록업체 제어여부<br/></label>,
                  <label className="font-14 font-bold-300">
                    (기 구축된 산규구축과제 도입기업재신청<br/>
                  </label>,
                  <label className="font-14 font-bold-300">불가능 제어(약 12,000개 기업))</label>
                ]}
                className="label-break lh-130"
                span={1.5}
              >
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'k')}
                  options={[
                    {
                      value: '예',
                      label: '예',
                    },
                    {
                      value: '아니요',
                      label: '아니요',
                    },
                  ]}
                  value={ojtBizInfo?.k}
                />
              </Descriptions.Item>
              <Descriptions.Item label="최종완료보고 설문조사" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'l')}
                  options={[
                    {
                      value: '해당없음',
                      label: '해당없음',
                    },
                  ]}
                  value={ojtBizInfo?.l}
                />
              </Descriptions.Item>
              <Descriptions.Item label="수행일지 사용여부" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'm')}
                  options={[
                    {
                      value: '예',
                      label: '예',
                    },
                    {
                      value: '아니요',
                      label: '아니요',
                    },
                  ]}
                  value={ojtBizInfo?.m}
                />
              </Descriptions.Item>
              <Descriptions.Item label="추경사업 여부" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'n')}
                  options={[
                    {
                      value: '예',
                      label: '예',
                    },
                    {
                      value: '아니요',
                      label: '아니요',
                    },
                  ]}
                  value={ojtBizInfo?.n}
                />
              </Descriptions.Item>
              <Descriptions.Item 
                // label="유형선택(대중소상행형 A,B,C유형일 경우만 선택)"
                label={[
                  <label>유형선택<br/></label>,
                  <label className="font-14 font-bold-300">(대중소상행형 A,B,C유형일 경우만 선택)</label>
                ]}
                className="label-break lh-130"
                span={1.5}
              >
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'o')}
                  options={[
                    {
                      value: '해당없음',
                      label: '해당없음',
                    },
                  ]}
                  value={ojtBizInfo?.o}
                />
              </Descriptions.Item>
              <Descriptions.Item label="하위사업(연계) 여부" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'p')}
                  options={[
                    {
                      value: '예',
                      label: '예',
                    },
                    {
                      value: '아니요',
                      label: '아니요',
                    },
                  ]}
                  value={ojtBizInfo?.p}
                />
              </Descriptions.Item>
              <Descriptions.Item label="상위 수행사업" span={1.5}>
                <Button
                  className="eu-btn-crud-default"
                  onClick={openUpBizPlanStngOpen}
                >
                  선택
                </Button>
                <Button
                  className="eu-btn-crud-error"
                  onClick={deleteClick}
                >
                  삭제
                </Button>
              </Descriptions.Item>
              <Descriptions.Item label="공급기업 매칭 필수 여부" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'q')}
                  options={[
                    {
                      value: '예',
                      label: '예',
                    },
                    {
                      value: '아니요',
                      label: '아니요',
                    },
                  ]}
                  value={ojtBizInfo?.q}
                />
              </Descriptions.Item>
              <Descriptions.Item label="코디네이터 지원여부" span={1.5}>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  placeholder="선택"
                  onChange={(value) => ojtBizInfoChange(value, 'r')}
                  options={[
                    {
                      value: '예',
                      label: '예',
                    },
                    {
                      value: '아니요',
                      label: '아니요',
                    },
                  ]}
                  value={ojtBizInfo?.r}
                />
              </Descriptions.Item>
              <Descriptions.Item
                // label={`과제신청시 경고창 설정(있을 경우만 입력) ※작은따옴표(')는 입력할 수 없습니다.`}
                label={[
                  <label>과제신청시 경고창 설정<br/></label>,
                  <label className="font-14 font-bold-300">※ 작은따옴표(')는 입력할 수 없습니다.</label>
                ]}
                className="label-break lh-130"
                span={3}
              >
                <TextArea
                  onChange={(e) => ojtBizInfoChange(e.target.value, 's')}
                  value={ojtBizInfo?.s}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default PblancChartrManagePopup01;
