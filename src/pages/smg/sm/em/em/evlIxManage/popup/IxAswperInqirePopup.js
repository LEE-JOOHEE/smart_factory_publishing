import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  Row,
  Col,
  Table,
  Descriptions,
  Input,
  Select,
} from 'antd';
import 'css/Common.css';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd } from 'components/common/Common';

const IxAswperInqirePopup = ({
  ixAswperInqirePopupOpen,
  setIxAswperInqirePopupOpen,
}) => {
  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //평가지표검색
  const [ojtSrchCnd, setOjtSrchCnd] = useState([]);

  //답안그룹정보 목록
  const [arrIxAswperGroup, setArrIxAswperGroup] = useState([]);

  //답안그룹정보 목록 헤더
  const arrIxAswperGroupColumns = [
    { title: '답안그룹ID', dataIndex: 'a1', width: 100, align: 'center' },
    { title: '답안그룹명', dataIndex: 'a2', width: 100, align: 'center' },
    { title: '답안명', dataIndex: 'a3', align: 'center' },
    { title: '답안유형', dataIndex: 'a4' },
    { title: '사용여부', dataIndex: 'a5', width: 50 },
  ];

  //답안코드 목록
  const [arrAsprCd, setArrAsprCd] = useState([]);
  //답안코드 목록 헤더
  const arrAsprCdColumns = [
    { title: '순번', dataIndex: 'a1', width: 50 },
    { title: '출력순서', dataIndex: 'a2', width: 60 },
    { title: '답안항목명', dataIndex: 'a3' },
    { title: '배점', dataIndex: 'a4', width: 60 },
    { title: '사용여부', dataIndex: 'a5', width: 60 },
  ];

  const closeClick = () => {
    setIxAswperInqirePopupOpen(false);
  };
  const searchClick = () => {
    Modal.info({
      title: 'searchClick',
      content: JSON.stringify(ojtSrchCnd),
    });
  };

  const ojtSrchCndChange = (value, column) => {
    setOjtSrchCnd((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const addRowClick = () => {
    Modal.info({
      title: 'addRowClick',
    });
  };
  const deleteRowClick = () => {
    Modal.info({
      title: 'deleteRowClick',
    });
  };
  const saveClick = () => {
    Modal.info({
      title: 'saveClick',
      content: JSON.stringify(arrEvlIdxChecked),
    });
  };

  const addRowClick2 = () => {
    Modal.info({
      title: 'addRowClick2',
    });
  };
  const deleteRowClick2 = () => {
    Modal.info({
      title: 'deleteRowClick2',
    });
  };
  const saveClick2 = () => {
    Modal.info({
      title: 'saveClick2',
      content: JSON.stringify(arrAsprCdChecked),
    });
  };

  const selectedClick = () => {
    Modal.info({
      title: 'selectedClick',
      content: JSON.stringify(arrEvlIdxChecked),
    });
  };

  //답안그룹정보 선택 목록
  const [arrEvlIdxChecked, setArrEvlIdxChecked] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrEvlIdxChecked(selectedRows);
    },
  };

  //답안코드정보 선택 목록
  const [arrAsprCdChecked, setArrAsprCdChecked] = useState([]);
  const rowSelection2 = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrAsprCdChecked(selectedRows);
    },
  };

  useEffect(() => {
    //공통코드
    setOjtGroupCodes(getListCommonCd(['a']));

    setOjtSrchCnd({
      a1: '',
      a2: '',
      a3: '',
      a4: '전체',
      a5: '전체',
    });

    let tmp = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp.push({
        key: idx,
        a1: 'E000153',
        a2: '단일선택',
        a3: '탁월,우수,보통,미흡,불량',
        a4: '단일선택 객관식',
        a5: 'Y',
      });
    }
    setArrIxAswperGroup(tmp);
    let tmp2 = [];
    for (let idx = 1; idx <= 5; idx++) {
      tmp2.push({
        key: idx,
        a1: idx,
        a2: idx,
        a3:
          idx === 1
            ? '탁월'
            : idx === 2
            ? '우수'
            : idx === 3
            ? '보통'
            : idx === 4
            ? '미흡'
            : idx === 5
            ? '불량'
            : '',
        a4: 11 - idx * 2,
        a5: 'Y',
      });
    }
    setArrAsprCd(tmp2);
  }, []);

  return (
    <>
      <Modal
        key="ixAswperInqirePopupOpen"
        open={ixAswperInqirePopupOpen}
        title="지표답안 관리"
        style={{ height: 'calc(100vh - 100px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
        onCancel={closeClick}
        width={1000}
        footer={[
          <Button
            key={'closeClick'}
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
            <TitleComp>지표답안그룹 검색</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              key={'searchClick'}
              size="small"
              className="eu-btn-crud-fine"
              onClick={searchClick}
            >
              조회
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions bordered size="small">
              <Descriptions.Item label="답안그룹명">
                <Input
                  size="small"
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a1');
                  }}
                  value={ojtSrchCnd?.a1}
                />
              </Descriptions.Item>
              <Descriptions.Item label="답안그룹ID">
                <Input
                  size="small"
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a2');
                  }}
                  value={ojtSrchCnd?.a2}
                />
              </Descriptions.Item>
              <Descriptions.Item label="답안명" span={2}>
                <Input
                  size="small"
                  onChange={(evt) => {
                    ojtSrchCndChange(evt.target.value, 'a3');
                  }}
                  value={ojtSrchCnd?.a3}
                />
              </Descriptions.Item>
              <Descriptions.Item label="답안유형">
                <Select
                  size="small"
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'a4');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                  ]}
                  value={ojtSrchCnd?.a4}
                />
              </Descriptions.Item>
              <Descriptions.Item label="사용여부" span={2}>
                <Select
                  size="small"
                  onChange={(value) => {
                    ojtSrchCndChange(value, 'a5');
                  }}
                  options={[
                    {
                      value: '전체',
                      label: '전체',
                    },
                    ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                  ]}
                  value={ojtSrchCnd?.a5}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>답안그룹정보</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              key={'addRowClick'}
              size="small"
              className="eu-btn-row-insert"
              icon={<PlusSquareOutlined />}
              onClick={addRowClick}
            >
              행추가
            </Button>
            <Button
              key={'deleteRowClick'}
              size="small"
              className="eu-btn-row-delete"
              icon={<MinusSquareOutlined />}
              onClick={deleteRowClick}
            >
              행삭제
            </Button>
            <Button
              key={'saveClick'}
              size="small"
              className="eu-btn-crud-fine"
              onClick={saveClick}
            >
              저장
            </Button>
            <Button
              key={'selectedClick'}
              size="small"
              className="eu-btn-crud-fine"
              onClick={selectedClick}
            >
              선택
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              rowSelection={{ type: 'radio', ...rowSelection }}
              key={'arrIxAswperGroupTable'}
              columns={arrIxAswperGroupColumns}
              dataSource={arrIxAswperGroup}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 250 }}
            />
          </Col>
        </Row>

        <Row className="eu-row-comp-title margin-top">
          <Col span={12}>
            <TitleComp>답안코드정보</TitleComp>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button
              key={'addRowClick2'}
              size="small"
              className="eu-btn-row-insert"
              icon={<PlusSquareOutlined />}
              onClick={addRowClick2}
            >
              행추가
            </Button>
            <Button
              key={'deleteRowClick2'}
              size="small"
              className="eu-btn-row-delete"
              icon={<MinusSquareOutlined />}
              onClick={deleteRowClick2}
            >
              행삭제
            </Button>
            <Button
              key={'saveClick2'}
              size="small"
              className="eu-btn-crud-fine"
              onClick={saveClick2}
            >
              저장
            </Button>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Table
              rowSelection={{ type: 'checkbox', ...rowSelection2 }}
              key={'arrAsprCdTable'}
              columns={arrAsprCdColumns}
              dataSource={arrAsprCd}
              size="small"
              bordered
              pagination={false}
              scroll={{ y: 200 }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default IxAswperInqirePopup;
