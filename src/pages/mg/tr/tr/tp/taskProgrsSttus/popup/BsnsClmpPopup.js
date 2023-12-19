import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Descriptions,
  Input,
  Modal,
  Radio,
  Row,
  Table,
} from 'antd';
import { ojtChange } from 'components/common/Common';
import { PlusOutlined } from '@ant-design/icons';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR';
moment.locale('ko');

const { TextArea } = Input;

const bsnsFileColumns = [
  {
    title: '순번',
    dataIndex: 'a1',
  },
  {
    title: '첨부문서',
    dataIndex: 'a2',
  },
];

const BsnsClmpPopup = ({ bsnsClmpOpen, setBsnsClmpOpen, ojtData }) => {
  //검색조건
  const [ojtBsnsClmp, setOjtBsnsClmp] = useState({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
  });

  //파일 테이블
  const [arrBsnsFile, setArrBsnsFile] = useState([]);

  useEffect(() => {
    if (ojtData)
      setOjtBsnsClmp({
        a1: '',
        a2: '',
        a3: '',
        a4: '',
        a5: '',
        a6: '',
        a7: '',
      });
  }, [ojtData]);
  useEffect(() => {
    console.log(ojtBsnsClmp);
  }, [ojtBsnsClmp]);
  const confirmClick = () => {
    setBsnsClmpOpen(false);
  };
  const closeClick = () => {
    setBsnsClmpOpen(false);
  };

  return (
    <>
      <Modal
        open={bsnsClmpOpen}
        title="사업포기처리"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            className="eu-btn-popup-process-fine"
            onClick={confirmClick}
          >
            확인
          </Button>,
          <Button
            key={'closeClick'}
            type="primary"
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title"></Row>
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="협약전/후 또는 사업실패" span={3}>
                <Radio.Group
                  options={[
                    {
                      value: '1',
                      label: '협약 전',
                    },
                    {
                      value: '2',
                      label: '협약 후',
                    },
                    {
                      value: '3',
                      label: '협약 후 사업실패',
                    },
                  ]}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a1', setOjtBsnsClmp)
                  }
                  value={ojtBsnsClmp?.a1}
                />
              </Descriptions.Item>
              <Descriptions.Item label="정부지원금 지급전/후" span={1.5}>
                <Radio.Group
                  options={[
                    {
                      value: '1',
                      label: '지급 전',
                    },
                    {
                      value: '2',
                      label: '지급 후',
                    },
                  ]}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a2', setOjtBsnsClmp)
                  }
                  value={ojtBsnsClmp?.a2}
                />
              </Descriptions.Item>
              <Descriptions.Item label="정부지원금 환수금액" span={1.5}>
                <Input
                  disabled
                  value={ojtBsnsClmp?.a3}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a3', setOjtBsnsClmp)
                  }
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={24} className="margin-top">
            <Descriptions size="small" bordered>
              <Descriptions.Item label="처리일자" span={3}>
                <ConfigProvider locale={locale}>
                  <DatePicker
                    placeholder={'처리일자'}
                    onChange={(moment, dateString) => {
                      if (moment) {
                        console.log('처리일자: ', dateString);
                      }
                      ojtChange(dateString, 'a4', setOjtBsnsClmp);
                    }}
                  />
                </ConfigProvider>
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={24} className="margin-top">
            <Descriptions size="small" bordered>
              <Descriptions.Item label="사유" span={3}>
                <TextArea
                  rows={3}
                  value={ojtBsnsClmp?.a5}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a5', setOjtBsnsClmp)
                  }
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">
            <Col span={12}></Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button
                className="eu-btn-row-insert"
                icon={<PlusOutlined />}
                type="file"
                onClick={() =>
                  Modal.info({
                    title: '파일추가',
                  })
                }
              >
                파일추가
              </Button>
            </Col>
          </Row>
          <Col span={24}>
            <Table
              scroll={{ y: 300 }}
              key={'arrBsnsFileTable'}
              columns={bsnsFileColumns}
              dataSource={arrBsnsFile}
              size="small"
              bordered
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default BsnsClmpPopup;
