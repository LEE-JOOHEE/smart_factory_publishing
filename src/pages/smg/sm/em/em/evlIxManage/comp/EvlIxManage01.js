import React, { useEffect, useState } from 'react';
import { Button, Col, Descriptions, Input, Row, Select } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const EvlIxManage01 = ({ ojtGroupCodes, searchClick }) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '2022',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
  });

  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  useEffect(() => {
    console.log('ojtSrchCnd : ', ojtSrchCnd);
  }, [ojtSrchCnd]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>검색조건 입력</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            onClick={() => searchClick(ojtSrchCnd)}
          >
            조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="사업연도">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'a1');
                }}
                options={[
                  {
                    value: '2020',
                    label: '2020',
                  },
                  {
                    value: '2021',
                    label: '2021',
                  },
                  {
                    value: '2022',
                    label: '2022',
                  },
                  ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                ]}
                value={ojtSrchCnd?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={2}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'a2');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.b ? ojtGroupCodes.b : []),
                ]}
                value={ojtSrchCnd?.a2}
              />
            </Descriptions.Item>
            <Descriptions.Item label="평가지유형">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'a3');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.c ? ojtGroupCodes.c : []),
                ]}
                value={ojtSrchCnd?.a3}
              />
            </Descriptions.Item>
            <Descriptions.Item label="평가구분" span={2}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'a4');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.d ? ojtGroupCodes.d : []),
                ]}
                value={ojtSrchCnd?.a4}
              />
            </Descriptions.Item>
            <Descriptions.Item label="평가방법">
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                onChange={(value) => {
                  ojtSrchCndChange(value, 'a5');
                }}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtSrchCnd?.e ? ojtGroupCodes.e : []),
                ]}
                value={ojtSrchCnd?.a5}
              />
            </Descriptions.Item>

            <Descriptions.Item label="평가지명" span={2}>
              <Input
                onChange={(evt) => {
                  ojtSrchCndChange(evt.target.value, 'a6');
                }}
                value={ojtGroupCodes?.a6}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default EvlIxManage01;
