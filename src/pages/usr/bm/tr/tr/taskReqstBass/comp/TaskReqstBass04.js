import React, { useState, useEffect } from 'react';
import { Col, Row, Table, Modal, Button } from 'antd';
import { SearchOutlined, SaveOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import CoChoicePopup from 'pages/usr/bm/tr/tr/taskReqstBass/popup/CoChoicePopup';

const TaskReqstBass04 = () => {
  const columns = [
    {
      title: '전문가소재지 지역',
      dataIndex: 'a1',
    },
    {
      title: '주요지역(IP 구분)',
      dataIndex: 'a2',
    },
    {
      title: '성명',
      dataIndex: 'a3',
    },
    {
      title: '연락처',
      dataIndex: 'a4',
    },
    {
      title: '이메일',
      dataIndex: 'a5',
    },
    {
      title: '소속',
      dataIndex: 'a6',
    },
    {
      title: '직위',
      dataIndex: 'a7',
    },
    {
      title: '추천상태',
      dataIndex: 'a8',
    },
  ];
  const [arrCodi, setArrCodi] = useState([]);
  const [open, setOpen] = useState(false);
  const closeClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    setArrCodi(() => {
      const newArr = [...Array(5).keys()].map((i) => ({
        key: i,
        a1: '세종',
        a2: '세종',
        a3: '홍길동(gdhong)',
        a4: '010-1111-1111',
        a5: 'abc@naver.com',
        a6: '소속명1',
        a7: '직위명1',
        a8: '자동',
      }));
      return newArr;
    });
  }, []);
  const popupConfimClick = (arrCheckedCodiLst) => {
    Modal.info({ title: `key: ${JSON.stringify(arrCheckedCodiLst)}` });
  };
  const findCodiAltmntClick = () => {
    setOpen(true);
  };
  const saveCoordinatorClick = () => {
    Modal.info({ title: '코디네이터 저장 버튼' });
  };

  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>코디네이터</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            size="small"
            className="eu-usr-btn-crud-fine"
            icon={<SearchOutlined />}
            onClick={findCodiAltmntClick}
          >
            찾기
          </Button>
          <Button
            size="small"
            className="eu-usr-btn-crud-warning"
            icon={<SaveOutlined />}
            onClick={saveCoordinatorClick}
          >
            저장
          </Button>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrCodi'}
            columns={columns}
            dataSource={arrCodi}
            size="small"
            bordered
            pagination={false}
            scroll={{
              y: 150,
            }}
          />
        </Col>
      </Row>
      <CoChoicePopup
        open={open}
        closeClick={closeClick}
        popupConfimClick={popupConfimClick}
      />
    </>
  );
};

export default TaskReqstBass04;
