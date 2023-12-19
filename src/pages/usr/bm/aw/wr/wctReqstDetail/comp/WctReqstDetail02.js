import React from 'react';
import { Col, Row, Select, Input, Descriptions, Button, Modal } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const WctReqstDetail02 = ({
  ojtBankBacntNo,
  setBankBacntNo,
  ojtGroupCodes,
}) => {
  const saveClick = () => {
    Modal.info({ title: `save ${JSON.stringify(ojtBankBacntNo)}` });
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>은행 및 계좌번호 등록</TitleComp>
          <span style={{ color: 'red' }}>
            은행 및 계좌번호 등록이 되어있지 않으면 요청서를 출력 하실 수
            없습니다.
          </span>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-warning"
            onClick={saveClick}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="은행" span={1}>
              <Select
                placeholder="은행 선택"
                onChange={(value) => ojtChange(value, 'a1', setBankBacntNo)}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a1 ? ojtGroupCodes.a1 : []),
                ]}
                value={ojtBankBacntNo?.a1}
              />
            </Descriptions.Item>
            <Descriptions.Item label="계좌번호" span={1.5}>
              <Input
                value={ojtBankBacntNo?.a2}
                placeholder={'숫자만 입력'}
                onChange={(e) =>
                  ojtChange(e.target.value, 'a2', setBankBacntNo)
                }
              />
            </Descriptions.Item>
            <Descriptions.Item label="예금주" span={1.5}>
              <Input
                value={ojtBankBacntNo?.a3}
                onChange={(e) =>
                  ojtChange(e.target.value, 'a3', setBankBacntNo)
                }
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default WctReqstDetail02;
