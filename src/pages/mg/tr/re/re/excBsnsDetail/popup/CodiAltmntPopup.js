import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Input,
  Modal,
  Row,
  Select,
  Table,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import { ojtChange } from 'components/common/Common';

const cmCodiRcmdtColumns = [
  {
    title: '성명',
    dataIndex: 'a1',
  },
  {
    title: '배정과제수',
    dataIndex: 'a2',
  },
  {
    title: '정문가소재지 지역',
    dataIndex: 'a3',
  },
  {
    title: '주요지역(TP 구분)',
    dataIndex: 'a4',
  },
  {
    title: '소속',
    dataIndex: 'a5',
  },
  {
    title: '직위',
    dataIndex: 'a6',
  },
];
const CodiAltmntPopup = ({
  codiAltmntOpen,
  setCodiAltmntOpen,
  key,
  ojtGroupCodes,
}) => {
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '세종',
    a2: '세종',
    a3: '',
    a4: '',
  });
  //자동추천
  const [arrAutoCodiRcmdt, setArrAutoCodiRcmdt] = useState([]);
  //지정추천
  const [arrCodiRcmdt, setArrCodiRcmdt] = useState([]);
  useEffect(() => {
    setArrCodiRcmdt(() => {
      const newArr = [...Array(2).keys()].map((i) => ({
        a1: '홍길동',
        a2: '32',
        a3: '세종',
        a4: '세종',
        a5: '소속명1',
        a6: '직위명1',
      }));
      return newArr;
    });
    setArrAutoCodiRcmdt(() => {
      const newArr = [...Array(2).keys()].map((i) => ({
        a1: '홍길동',
        a2: '32',
        a3: '세종',
        a4: '세종',
        a5: '소속명1',
        a6: '직위명1',
      }));
      return newArr;
    });
  }, []);

  const searchClick = (ojtSrchCnd) => {
    console.log(ojtSrchCnd);
    Modal.info({ title: '조회하기' });
  };
  const selectClick = () => {
    Modal.info({ title: '지정 추천 선택하기' });
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
    },
  };

  useEffect(() => {
    if (key) {
      // 데이터 요청
    }
  }, [key]);
  const confirmClick = () => {
    setCodiAltmntOpen(false);
  };
  const closeClick = () => {
    setCodiAltmntOpen(false);
  };

  return (
    <>
      <Modal
        open={codiAltmntOpen}
        title="코디네이터 배정"
        onOk={confirmClick}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            size="middle"
            className="eu-btn-popup-process-fine"
            onClick={confirmClick}
          >
            확인
          </Button>,
          <Button
            type="primary"
            size="middle"
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-title">
          <Col span={12}>
            <TitleComp>검색조건 입력</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              icon={<SearchOutlined />}
              onClick={() => {
                searchClick(ojtSrchCnd);
              }}
            >
              찾기
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="전문가소재지" span={1.5}>
                <Select
                  placeholder="전문가소재지 선택"
                  onChange={(value) => ojtChange(value, 'a1', setOjtSrchCnd)}
                  options={[
                    {
                      value: '세종',
                      label: '세종',
                    },
                    ...(ojtGroupCodes?.a1 ? ojtGroupCodes.a1 : []),
                  ]}
                  value={ojtSrchCnd?.a1}
                />
              </Descriptions.Item>
              <Descriptions.Item label="주요지역(TP 구분)" span={1.5}>
                <Select
                  placeholder="주요지역 선택"
                  onChange={(value) => ojtChange(value, 'a2', setOjtSrchCnd)}
                  options={[
                    {
                      value: '세종',
                      label: '세종',
                    },
                    ...(ojtGroupCodes?.a2 ? ojtGroupCodes.a2 : []),
                  ]}
                  value={ojtSrchCnd?.a2}
                />
              </Descriptions.Item>
              <Descriptions.Item label="성명" span={3}>
                <Input
                  value={ojtSrchCnd?.a3}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a3', setOjtSrchCnd)
                  }
                />
                <Checkbox
                  checked={ojtSrchCnd?.a4}
                  onChange={(e) =>
                    ojtChange(e.target.checked, 'a4', setOjtSrchCnd)
                  }
                >
                  코디네이터 자동 추천시 체크
                </Checkbox>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row className="eu-row-comp-title margin-top">
          <Col span={3}>
            <TitleComp>자동 추천</TitleComp>
          </Col>
          <Col span={9}>
            총 {arrAutoCodiRcmdt?.length.toString().padStart(3, '0')} 건
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              columns={cmCodiRcmdtColumns}
              dataSource={arrAutoCodiRcmdt}
              size="small"
              bordered
              pagination={false}
            />
          </Col>
        </Row>
        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>지정 추천</TitleComp>
          </Col>

          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              size="small"
              className="eu-btn-crud-fine"
              icon={<SearchOutlined />}
              onClick={selectClick}
            >
              선택
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              rowSelection={{ type: 'checkbox', ...rowSelection }}
              columns={cmCodiRcmdtColumns}
              dataSource={arrCodiRcmdt}
              size="small"
              bordered
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default CodiAltmntPopup;
