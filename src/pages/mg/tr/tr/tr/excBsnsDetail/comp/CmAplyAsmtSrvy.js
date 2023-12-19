import React, { useState } from 'react';
import { Button, Checkbox, Col, Form, Input, Row, Tabs, Radio } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const CmAplyAsmtSrvy = ({ key, editable = false }) => {
  const [ojtAsmtSrvy, setOjtAsmtSrvy] = useState({
    a1: false,
  });
  const ojtAsmtSrvyChange = (value, column) => {
    console.log(value, column);
    setOjtAsmtSrvy((prev) => ({ ...prev, [column]: value }));
  };

  const radioChange = (evt) => {
    // Modal.info({ title: '사업결과클릭 : ' + evt.target.value });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>설문조사</TitleComp>
        </Col>
        {editable && (
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button size="small" className="eu-btn-crud-fine">
              수정
            </Button>
          </Col>
        )}
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            // disabled={!editable}
          >
            {/* 설문조사 영역(Html 형식 디자인 적용함) */}

            <div className="eu-survey">
              <div className="question">
                1. 귀하께서는 이번에 신청한 중소벤처기업, 소상공인 지원사업을 어디에서 접해보셨습니까?(복수선택가능)
              </div>
              <div className="answer">
                <Checkbox.Group onChange={ojtAsmtSrvyChange} defaultValue={['4' , '9']}>
                  <Row className="mb-10">
                    <Checkbox value="1">1. 신문</Checkbox>
                  </Row>
                  <Row className="mb-10">
                    <Checkbox value="2">2. TV</Checkbox>
                  </Row>
                  <Row className="mb-10">
                    <Checkbox value="3">3. 중기부 홈페이지, 페이스북 등 SNS</Checkbox>
                  </Row>
                  <Row className="mb-10">
                    <Checkbox value="4">4. 지원기관 홈페이지, 페이스북 등 SNS (중소기업진흥공단, 소상공인시장진흥공단, 기술정보진흥원, 창업진흥원 등 기관 이름)</Checkbox>
                  </Row>
                  <Row className="mb-10">
                    <Checkbox value="5">5. 네이버, 다음 등을 통한 온라인뉴스</Checkbox>
                  </Row>                  
                  <Row className="mb-10">
                    <Checkbox value="6">6. 지방청 설명회 등 직접 홍보현장</Checkbox>
                  </Row>
                  <Row className="mb-10">
                    <Checkbox value="7">7. 주위사람</Checkbox>
                  </Row>
                  <Row className="mb-6">
                    <Checkbox value="8">8. 그전부터 알고 있었음</Checkbox>
                  </Row>
                  <Row>
                    <Checkbox value="9">9. 기타</Checkbox>
                    <Input className="flex-1" onChange={ojtAsmtSrvyChange} />
                  </Row>
                </Checkbox.Group>
              </div>

              <div className="question">
                2.귀사에서는 당해년도 인재 채용 계획을 갖고 계십니까?
              </div>
              <div className="answer">
                <Radio.Group onChange={radioChange} defaultValue={1}>
                  <Row className="mb-10">
                    <Radio value={1}>성공</Radio>
                  </Row>
                  <Row>
                    <Radio value={2}>실패</Radio>
                  </Row>
                </Radio.Group>
              </div>

              <div className="question">
                3.채용 계획이 있으시면, 예상 인원수를 입력해주십시오. 예)고졸 : 00명, 대졸 : 00명
              </div>
              <div className="answer">
                <Checkbox.Group onChange={ojtAsmtSrvyChange} defaultValue={['2']}>
                  <Row className="mb-4">
                    <Checkbox value="1">고졸</Checkbox>
                    <Input className="flex-1" onChange={ojtAsmtSrvyChange} />
                  </Row>
                  <Row>
                    <Checkbox value="2">대졸</Checkbox>
                    <Input className="flex-1" onChange={ojtAsmtSrvyChange} value={3} />
                  </Row>
                </Checkbox.Group>
              </div>
            </div>

          </Form>
        </Col>
      </Row>
    </>
  );
};

export default CmAplyAsmtSrvy;
