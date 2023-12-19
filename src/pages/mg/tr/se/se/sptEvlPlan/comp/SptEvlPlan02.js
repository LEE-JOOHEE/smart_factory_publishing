import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import { SearchOutlined } from '@ant-design/icons';
import SptPlanPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptPlanPopup';
import SptBsnsPopup from 'pages/mg/tr/se/se/sptEvlPlan/popup/SptBsnsPopup';

import 'css/Common.css';

const SptEvlPlan02 = ({ arrEvlPlan, evalPlanRowClick }) => {
  const arrEvlPlanColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: '4%',
      align: 'center',
    },
    {
      title: '사업년도',
      dataIndex: 'b',
      width: '6%',
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'c',
      width: '10%',
    },
    {
      title: '수행기관(TP)',
      dataIndex: 'd',
      width: '10%',
    },
    {
      title: '지역',
      dataIndex: 'e',
      width: '7%',
      align: 'center',
    },
    {
      title: '계획명',
      dataIndex: 'f',
      width: '20%',
      align: 'center',
      render: (_, record) => {
        return (
          <Button
            type="default"
            className="eu-btn-table-default"
            icon={<SearchOutlined />}
            onClick={(event) => {
              sptPlanOpenClick();
              event.stopPropagation();
            }}
          >
            {record?.f}
          </Button>
        );
      },
    },
    {
      title: '평가기간',
      dataIndex: 'g',
      width: '17%',
      align: 'center',
    },
    {
      title: '담당간사',
      dataIndex: 'h',
      width: '7%',
      align: 'center',
    },
    {
      title: '배정과제수',
      dataIndex: 'i',
      width: '6%',
      align: 'center',
    },
    {
      title: '평가위원 배정완료 과제수',
      dataIndex: 'j',
      width: '8%',
      align: 'center',
    },
    {
      title: '확정여부',
      dataIndex: 'k',
      width: '5%',
      align: 'center',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedEvlPlanCfmtn(selectedRows);
    },
  };
  //평가계획생성팝업
  const [sptPlanPopupOpen, setSptPlanPopupOpen] = useState(false);
  //사업별 배정현황조회 팝업
  const [cmEvlAltmntSttsOpen, setCmEvlAltmntSttsOpen] = useState(false);

  const sptPlanOpenClick = () => {
    setSptPlanPopupOpen(true);
  };
  const evlAltmntSttsClick = () => {
    setCmEvlAltmntSttsOpen(true);
  };

  //평가계획확정 클릭
  const [arrCheckedEvlPlanCfmtn, setArrCheckedEvlPlanCfmtn] = useState([]);

  const evlPlanCfmtnClick = () => {
    Modal.info({
      title: JSON.stringify(arrCheckedEvlPlanCfmtn),
    });
  };

  //테이블에서 선택된 키 값 관리
  const [selKey, setSelKey] = useState('');

  useEffect(() => {
    if (arrEvlPlan && arrEvlPlan.length > 0 && selKey === '') {
      //프로세스 처리를 위한 클릭 이벤트 호출
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
          {/* 총 {arrEvlPlan ? arrEvlPlan.length : 0}건 */}
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrEvlPlan?.length.toString().padStart(3, '0')}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={18} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            onClick={evlAltmntSttsClick}
          >
            사업별 배정현황 조회
          </Button>
          <Button
            className="eu-btn-crud-fine"
            onClick={sptPlanOpenClick}
          >
            평가계획생성
          </Button>
          <Button
            className="eu-btn-crud-fine"
            onClick={evlPlanCfmtnClick}
          >
            평가계획확정
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={arrEvlPlanColumns}
            dataSource={arrEvlPlan}
            size="small"
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
            bordered
            pagination={false}
            scroll={{ y: 200, x: 1600 }}
          />
        </Col>
      </Row>
      <SptPlanPopup
        key={'SptPlanPopup'}
        sptPlanPopupOpen={sptPlanPopupOpen}
        setSptPlanPopupOpen={setSptPlanPopupOpen}
      />
      <SptBsnsPopup
        key={'SptBsnsPopup'}
        cmEvlAltmntSttsOpen={cmEvlAltmntSttsOpen}
        setCmEvlAltmntSttsOpen={setCmEvlAltmntSttsOpen}
      />
    </>
  );
};

export default SptEvlPlan02;
