import React, { useState } from 'react';
import { Col, Row, Descriptions, Checkbox, Select, Button, Modal } from 'antd';
import 'css/Common.css';

const InsttRegistBsnsContainer = ({ bizRcritTrgtInsertClick }) => {
  const [ojtBizRcritTrgt, setOjtBizRcritTrgt] = useState({
    a: '운영기관',
    b: false,
    c: false,
    d: false,
    e: '',
  });
  const ojtBizRcritTrgtChange = (value, column) => {
    console.log('value: ', value, 'column: ', column);
    setOjtBizRcritTrgt((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}></Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-btn-crud-fine"
            onClick={() => bizRcritTrgtInsertClick(ojtBizRcritTrgt)}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-page-comp-layout">
        <Col span={24}>
          <Descriptions layout="vertical" bordered column={5}>
            <Descriptions.Item label="모집대상">
              <Select
                onChange={(value) => {
                  ojtBizRcritTrgtChange(value, 'a');
                }}
                options={[
                  {
                    value: '운영기관',
                    label: '운영기관',
                  },
                  {
                    value: '수행기관',
                    label: '수행기관',
                  },
                  {
                    value: '주관기관',
                    label: '주관기관',
                  },
                  {
                    value: '기획기관',
                    label: '기획기관',
                  },
                  {
                    value: '확인기관',
                    label: '확인기관',
                  },
                ]}
                value={ojtBizRcritTrgt?.a}
              />
            </Descriptions.Item>
            <Descriptions.Item label="요건검토 여부">
              <Checkbox
                onChange={(e) => ojtBizRcritTrgtChange(e.target.checked, 'b')}
                defaultChecked={ojtBizRcritTrgt?.b}
              />
            </Descriptions.Item>
            <Descriptions.Item label="선정평가 여부">
              <Checkbox
                onChange={(e) => ojtBizRcritTrgtChange(e.target.checked, 'c')}
                defaultChecked={ojtBizRcritTrgt?.c}
              />
            </Descriptions.Item>
            <Descriptions.Item label="협약여부">
              <Checkbox
                onChange={(e) => ojtBizRcritTrgtChange(e.target.checked, 'd')}
                defaultChecked={ojtBizRcritTrgt?.d}
              />
            </Descriptions.Item>
            <Descriptions.Item label="비고">
              {ojtBizRcritTrgt?.e}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(InsttRegistBsnsContainer);
