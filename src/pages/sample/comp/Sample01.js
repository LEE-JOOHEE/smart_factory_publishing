import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Input,
  Radio,
  Row,
  Select,
  Table,
  Tabs,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { ojtChange, arrChange } from 'components/common/Common';

const Sample01 = ({ ojtGroupCodes, searchClick, editable = false }) => {
  const headerColums = [
    {
      title: 'sample',
      dataIndex: 'a1',
      render: (_, record, index) => {
        console.log(record, index);
        return editable ? (
          <Select
            placeholder="사업년도 선택"
            onChange={(value) => arrChange(value, 'a1', index, setArrSample)}
            options={[
              {
                value: '없음',
                label: '없음',
              },
              {
                value: '2022',
                label: '2022',
              },
              {
                value: '2023',
                label: '2023',
              },
              {
                value: '2024',
                label: '2024',
              },
            ]}
            defaultValue={record?.a1}
          />
        ) : (
          record?.a1
        );
      },
    },
    {
      title: 'sample2',
      dataIndex: 'a2',
    },
  ];

  const [sampleColums, setSampleColums] = useState([]);
  const [arrSample, setArrSample] = useState([]);

  const [ojtSample, setOjtSample] = useState({
    a1: 'test',
    a2: 'test value',
    a3: '',
    a4: '',
  });

  useEffect(() => {
    setArrSample(() => {
      const newArr = [...Array(5).keys()].map((i) => ({
        a1: '2022',
        a2: '충북',
      }));
      return newArr;
    });
  }, []);

  useEffect(() => {
    if (arrSample) setSampleColums(headerColums);
  }, [arrSample, editable]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>Sample Descriptions</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            size="small"
            onClick={() => {
              searchClick(ojtSample);
            }}
          >
            조회
          </Button>
          {editable && (
            <Button
              className="eu-btn-crud-fine"
              size="small"
              onClick={() => {
                searchClick(ojtSample);
              }}
            >
              수정
            </Button>
          )}
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="Sample Select" span={1.5}>
              {editable ? (
                <Select
                  placeholder="선택"
                  value={ojtSample?.a1}
                  onChange={(value) => ojtChange(value, 'a1', setOjtSample)}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                    {
                      value: 'test',
                      label: 'test',
                    },
                    ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                  ]}
                />
              ) : (
                ojtSample?.a1
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Sample Input" span={1.5}>
              {editable ? (
                <Input
                  value={ojtSample?.a2}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a2', setOjtSample)
                  }
                />
              ) : (
                ojtSample?.a2
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Sample Checkbox" span={1.5}>
              {editable ? (
                <Checkbox.Group
                  options={[
                    {
                      value: 'TEST1',
                      label: 'TEST1',
                    },
                    {
                      value: 'TEST2',
                      label: 'TEST2',
                    },
                    {
                      value: 'TEST3',
                      label: 'TEST3',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  onChange={(value) => {
                    console.log(value);
                    ojtChange(value, 'a3', setOjtSample);
                  }}
                  value={ojtSample?.a3}
                />
              ) : (
                ojtSample?.a3.toString()
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Sample Radio" span={1.5}>
              {editable ? (
                <Radio.Group
                  options={[
                    {
                      value: 'TEST1',
                      label: 'TEST1',
                    },
                    {
                      value: 'TEST2',
                      label: 'TEST2',
                    },
                    {
                      value: 'TEST3',
                      label: 'TEST3',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  onChange={(e) => {
                    ojtChange(e.target.value, 'a4', setOjtSample);
                  }}
                  value={ojtSample?.a4}
                />
              ) : (
                ojtSample?.a4.toString()
              )}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>Sample Table</TitleComp>
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
          <Table
            columns={sampleColums}
            dataSource={arrSample}
            size="small"
            bordered
            pagination={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default Sample01;
