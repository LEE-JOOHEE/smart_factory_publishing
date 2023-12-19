import React, { useState } from 'react';
import { Col, Row, Descriptions, Table, Select, Input } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange, arrChange } from 'components/common/Common';

const { TextArea } = Input;

const SprvisnCorecCnfirm03 = ({ arrSpvsEvlSmry, setArrSpvvsEvlSmry }) => {
  const [ojtSpvsEvlSmry, setOjtSpvsEvlSmry] = useState({
    a1: '적정',
    a2: '감리조치필요',
    a3: '',
  });
  const smryColumns = [
    {
      title: '감리영역',
      dataIndex: 'a1',
    },
    {
      title: '평가',
      dataIndex: 'a2',
      render: (_, record, index) => {
        return (
          <Select
            onChange={(value) => {
              arrChange(value, 'a2', index, setArrSpvvsEvlSmry);
            }}
            options={[
              {
                value: '보완',
                label: '보완',
              },
              {
                value: '적정',
                label: '적정',
              },
              {
                value: '부정적',
                label: '부정적',
              },
            ]}
            value={arrSpvsEvlSmry[index]?.a2}
          />
        );
      },
    },
    {
      title: '비고',
      dataIndex: 'a3',
    },
  ];
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>감리평가요약</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item
              label="감리평가"
              span={3}
              contentStyle={{ padding: '0px', margin: '0px' }}
            >
              <Table
                columns={smryColumns}
                dataSource={arrSpvsEvlSmry}
                size="small"
                bordered
                pagination={false}
              />
            </Descriptions.Item>
            <Descriptions.Item label="판정결과" span={3}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a1', setOjtSpvsEvlSmry);
                }}
                options={[
                  {
                    value: '적정',
                    label: '적정',
                  },
                  {
                    value: '보완',
                    label: '보완',
                  },
                  {
                    value: '부정적',
                    label: '부정적',
                  },
                ]}
                value={ojtSpvsEvlSmry?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item label="시정조치필요여부" span={3}>
              <Select
                onChange={(value) => {
                  ojtChange(value, 'a2', setOjtSpvsEvlSmry);
                }}
                options={[
                  {
                    value: '감리조치필요',
                    label: '감리조치필요',
                  },
                  {
                    value: '감리조치불필요',
                    label: '감리조치불필요',
                  },
                ]}
                value={ojtSpvsEvlSmry?.a2}
              />
            </Descriptions.Item>
            <Descriptions.Item label="종합의견" span={3}>
              <TextArea
                value={ojtSpvsEvlSmry?.a3}
                onChange={(e) => {
                  ojtChange(e.target.value, 'a3', setOjtSpvsEvlSmry);
                }}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default SprvisnCorecCnfirm03;
