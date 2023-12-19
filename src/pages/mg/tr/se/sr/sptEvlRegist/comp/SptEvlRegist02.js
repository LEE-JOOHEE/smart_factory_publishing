import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Modal, Row, Table, Typography } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import { SearchOutlined } from '@ant-design/icons';
import 'css/Common.css';
const { Text } = Typography;

const SptEvlRegist02 = ({ arrEvlPlan, evalPlanRowClick, evalPlanKey }) => {
  const arrEvlPlanColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: '7%',
      align: 'center',
    },
    {
      title: '사업년도',
      dataIndex: 'b',
      width: '7%',
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'c',
      width: '13%',
    },
    {
      title: '수행기관',
      dataIndex: 'd',
      width: '13%',
    },
    {
      title: '계획명',
      dataIndex: 'e',
      width: '20%',
      render: (_, record) => {
        return (
          <>
            <Button
              type="default"
              size="small"
              className="eu-btn-table-default"
              icon={<SearchOutlined />}
              onClick={(event) => {
                alert('Not RowClick & Popup');
                console.log('buttonClick : ', record);
                event.stopPropagation();
              }}
            >
              {record?.e}
            </Button>
          </>
        );
      },
    },
    {
      title: '평가기간',
      dataIndex: 'f',
      width: '20%',
      align: 'center',
    },
    {
      title: '담당간사',
      dataIndex: 'g',
      width: '8%',
      align: 'center',
    },
    {
      title: '배정과제수',
      dataIndex: 'h',
      width: '6%',
      align: 'center',
    },
    {
      title: '판정과제수',
      dataIndex: 'i',
      width: '6%',
      align: 'center',
    },
  ];

  //테이블에서 선택된 키 값 관리
  const [selKey, setSelKey] = useState('');
  // 테이블에 데이터가 있는경우 첫행을 자동으로 출력하는 경우 강제 하이라이팅
  useEffect(() => {
    if (arrEvlPlan && arrEvlPlan.length > 0 && selKey === '') {
      evalPlanRowClick(arrEvlPlan[0]);
      setSelKey(0);
    }
  }, [arrEvlPlan]);

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24} className="title-0">
          <TitleComp>평가계획</TitleComp>
        </Col>
        <Col span={6} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrEvlPlan ? arrEvlPlan.length : 0}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={18} style={{ textAlign: 'right', height: '34px'}}></Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrEvlPlanTable'}
            columns={arrEvlPlanColumns}
            dataSource={arrEvlPlan}
            onRow={(record, index) => ({
              onClick: () => {
                //프로세스 처리를 위한 클릭 이벤트 호출
                evalPlanRowClick(record);
                //행 선택 시 색상 변경을 위한 키값 저장
                setSelKey(index);
              },
            })}
            rowClassName={(_, idx) =>
              idx === selKey ? 'eu-table-select-row' : 'eu-table-un-select-row'
            }
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200, x: 1200 }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SptEvlRegist02;
