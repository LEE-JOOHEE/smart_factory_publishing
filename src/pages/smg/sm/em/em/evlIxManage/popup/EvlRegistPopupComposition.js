import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  Row,
  Col,
  Tabs,
  Divider,
  Descriptions,
  Select,
  Input,
  Space,
  Typography,
  Table,
  InputNumber,
  Radio,
} from 'antd';
import 'css/Common.css';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { getListCommonCd } from 'components/common/Common';
import TitleComp from 'components/layout/TitleComp';
import EvlTableExPopup from 'pages/smg/sm/em/em/evlIxManage/popup/EvlTableExPopup';
import EvlIxInqirePopup from 'pages/smg/sm/em/em/evlIxManage/popup/EvlIxInqirePopup';
import UpperQesitmInqirePopup from 'pages/smg/sm/em/em/evlIxManage/popup/UpperQesitmInqirePopup';
import IxAswperInqirePopup from 'pages/smg/sm/em/em/evlIxManage/popup/IxAswperInqirePopup';

const { TextArea } = Input;
const { Text, Link } = Typography;
const EvlRegistPopupComposition = ({
  evlRegistPopupOpen,
  setEvlRegistPopupOpen,
}) => {
  //평가문항 목록
  const [arrEvlQitem, setArrEvlQitem] = useState([]);
  //평가문항 목록 헤더
  const arrEvlQitemColumns = [
    { title: '순번', dataIndex: 'a1', width: '10%', align: 'center', },
    { title: '평가지표ID', dataIndex: 'a2', width: '20%', align: 'center', },
    { title: '문항유형구분', dataIndex: 'a3', width: '20%', align: 'center', },
    { title: '문항명', dataIndex: 'a4', width: '50%', align: 'left', },
  ];

  //평가문항 정보
  const [ojtEvlQitem, setOjtEvlQitem] = useState([]);

  //답안그룹정보
  const [ojtAsprGroup, setOjtAsprGroup] = useState([]);

  //답안코드 목록
  const [arrAsprCd, setArrAsprCd] = useState([]);
  //답안코드 목록 헤더
  const arrAsprCdColumns = [
    { title: '순번', dataIndex: 'a1', width: '15%', align: 'center', },
    { title: '평가지표ID', dataIndex: 'a2', width: '18%', align: 'center', },
    { title: '문항유형구분', dataIndex: 'a3', width: '20%', align: 'center', },
    { title: '문항명', dataIndex: 'a4', width: '47%', align: 'left', },
  ];

  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const [evlIxInqirePopupOpen, setEvlIxInqirePopupOpen] = useState(false);

  const closeClick = () => {
    setEvlRegistPopupOpen(false);
  };

  const ojtSrchCndChange = (value, column) => {
    setOjtEvlQitem((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const evlfmCmpstnStrgClick = () => {
    Modal.info({
      title: 'evlfmCmpstnStrgClick',
    });
  };
  const addQitemClick = () => {
    setEvlIxInqirePopupOpen(true);
  };
  const deleteQitemClick = () => {
    Modal.info({
      title: 'deleteQitemClick',
    });
  };
  const newQItemClick = () => {
    Modal.info({
      title: 'newQItemClick',
    });
  };
  const initClick = () => {
    setOjtEvlQitem({});
    Modal.info({
      title: 'initClick',
    });
  };
  const saveQItemClick = () => {
    Modal.info({
      title: 'saveQItemClick',
      content: JSON.stringify(ojtEvlQitem),
    });
  };

  //미리보기
  const [evlTableExPopupOpen, setEvlTableExPopupOpen] = useState(false);
  const previewClick = () => {
    setEvlTableExPopupOpen(true);
  };

  //항목선택(추가)
  const [upperQesitmInqireOpen, setUpperQesitmInqireOpen] = useState(false);
  const upperQesitmInqirePopupClick = () => {
    setUpperQesitmInqireOpen(true);
  };

  //답안그룹조회
  const [ixAswperInqirePopupOpen, setIxAswperInqirePopupOpen] = useState(false);
  const ixAswperInqirePopupClick = () => {
    setIxAswperInqirePopupOpen(true);
  };

  const [arrCheckedEvlQitem, setArrCheckedEvlQitem] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setArrCheckedEvlQitem(selectedRows);
    },
  };

  useEffect(() => {
    console.log('ojtEvlQitem : ', ojtEvlQitem);
  }, [ojtEvlQitem]);

  useEffect(() => {
    //공통코드
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c']));

    //평가문항목록
    let tmp = [];
    for (let idx = 1; idx <= 20; idx++) {
      tmp.push({
        key: idx,
        a1: idx,
        a2: 'T10002' + idx,
        a3: '출력문항',
        a4: '도입기업 역량' + idx,
      });
    }
    setArrEvlQitem(tmp);

    //평가문항정보
    setOjtEvlQitem({
      a1: '설명문항',
      a2: '기업현황이 양호하고 지속가능한 기업인가?',
      a3: '',
      a4: 1,
      a5: 1,
      a6: 1,
      a7: 1,
      a8: '예',
    });

    //답안그룹정보
    setOjtAsprGroup({
      a1: 'EI000153',
      a2: '단일선택5',
      a3: '탁월,우수,보통,미흡,불량',
      a4: '단일선택객관식',
    });

    //답안그룹목록
    let tmp2 = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp2.push({
        key: idx,
        a1: idx,
        a2: '탁월',
        a3: 75,
        a4: idx,
      });
    }
    setArrAsprCd(tmp2);
  }, []);

  return (
    <>
      <Row gutter={(0, 20)}>
        <Col span={13}>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-0">
                <Col span={6}>
                  <TitleComp>평가문항목록</TitleComp>
                </Col>
                <Col span={18} style={{ textAlign: 'right' }}>
                  <Button
                    key={'previewClick'}
                    className="eu-btn-crud-fine"
                    onClick={previewClick}
                  >
                    미리보기
                  </Button>
                  <Button
                    key={'evlfmCmpstnStrgClick'}
                    className="eu-btn-crud-fine"
                    onClick={evlfmCmpstnStrgClick}
                  >
                    평가지구성저장
                  </Button>
                  <Button
                    key={'addClick'}
                    className="eu-btn-crud-fine"
                    onClick={addQitemClick}
                  >
                    문항추가
                  </Button>
                  <Button
                    key={'deleteQitemClick'}
                    className="eu-btn-crud-error"
                    onClick={deleteQitemClick}
                  >
                    삭제
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Table
                rowSelection={{ type: 'checkbox', ...rowSelection }}
                key={'arrEvlfmCpyTable'}
                columns={arrEvlQitemColumns}
                dataSource={arrEvlQitem}
                size="small"
                bordered
                pagination={false}
                scroll={{ y: 550 }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={11}>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-0">
                <Col span={6}>
                  <TitleComp>평가문항목록</TitleComp>
                </Col>
                <Col span={18} style={{ textAlign: 'right' }}>
                  <Button
                    key={'newQItemClick'}
                    className="eu-btn-crud-fine"
                    onClick={newQItemClick}
                  >
                    신규문항추가
                  </Button>
                  <Button
                    key={'initClick'}
                    className="eu-btn-crud-default"
                    onClick={initClick}
                  >
                    입력초기화
                  </Button>
                  <Button
                    key={'newQItemClick'}
                    className="eu-btn-crud-warning"
                    onClick={saveQItemClick}
                  >
                    저장
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Descriptions bordered size="small">
                <Descriptions.Item label="문항명" span={3}>
                  <Space className="space-full">
                    <Select
                      getPopupContainer={trigger => trigger.parentNode}
                      dropdownAlign={{ offset: [0, 0] }}
                      onChange={(value) => {
                        ojtSrchCndChange(value, 'a1');
                      }}
                      options={[
                        {
                          value: '설명문항',
                          label: '설명문항',
                        },
                        ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                      ]}
                      value={ojtEvlQitem?.a1}
                    />
                    <Input
                      onChange={(evt) => {
                        ojtSrchCndChange(evt.target.value, 'a7');
                      }}
                      value={ojtEvlQitem?.a2}
                    />
                  </Space>
                </Descriptions.Item>
                <Descriptions.Item label="문항설명" span={3}>
                  <TextArea
                    value={ojtEvlQitem?.a3}
                    onChange={(e) => ojtSrchCndChange(e.target.value, 'a3')}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="문항순번" span={1}>
                  <InputNumber
                    min={1}
                    style={{ width: '75px' }}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a4');
                    }}
                    value={ojtEvlQitem?.a4}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="상위문항" span={2}>
                  <Space>
                    <InputNumber
                      min={1}
                      style={{ width: '75px' }}
                      onChange={(value) => {
                        ojtSrchCndChange(value, 'a5');
                      }}
                      value={ojtEvlQitem?.a5}
                    />
                    <Button
                      key={'newQItemClick'}
                      className="eu-btn-crud-fine plr-16"
                      onClick={upperQesitmInqirePopupClick}
                    >
                      선택
                    </Button>
                  </Space>
                </Descriptions.Item>
                <Descriptions.Item label="표시문항번호" span={1}>
                  <InputNumber
                    min={1}
                    style={{ width: '75px' }}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a6');
                    }}
                    value={ojtEvlQitem?.a6}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="화면표시순서" span={2}>
                  <InputNumber
                    min={1}
                    style={{ width: '75px' }}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a7');
                    }}
                    value={ojtEvlQitem?.a7}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="사업명" span={3}>
                  <Radio.Group
                    value={ojtEvlQitem?.a8}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a8');
                    }}
                  >
                    <Radio value={'예'}>예</Radio>
                    <Radio value={'아니오'}>아니오</Radio>
                  </Radio.Group>
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont margin-top">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-0">
                <Col span={24}>
                  <TitleComp>답안그룹정보</TitleComp>
                </Col>
              </Row>
              <Col span={24}>
                <Descriptions bordered size="small">
                  <Descriptions.Item label="답안그룹ID" span={3}>
                    <Space className="space-full">
                      {ojtAsprGroup.a1}{' '}
                      <Button
                        key={'newQItemClick'}
                        className="eu-btn-crud-fine ml-auto"
                        onClick={ixAswperInqirePopupClick}
                      >
                        답안그룹조회
                      </Button>
                    </Space>
                  </Descriptions.Item>
                  <Descriptions.Item label="답안그룹명" span={3}>
                    {ojtAsprGroup.a2}
                  </Descriptions.Item>
                  <Descriptions.Item label="답안명" span={3}>
                    {ojtAsprGroup.a3}
                  </Descriptions.Item>
                  <Descriptions.Item label="답안유형" span={3}>
                    {ojtAsprGroup.a4}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont margin-top">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-0">
                <Col span={6}>
                  <TitleComp>답안코드정보</TitleComp>
                </Col>
                <Col span={18} style={{ textAlign: 'right' }}>
                  <Button className="eu-btn-row-insert" icon={<PlusOutlined />}>행추가</Button>
                  <Button className="eu-btn-row-delete" icon={<MinusOutlined />}>행삭제</Button>
                  <Button className="eu-btn-popup-process-warning">저장</Button>
                </Col>
              </Row>
              <Col span={24}>
                <Table
                  key={'arrAsprCdTable'}
                  columns={arrAsprCdColumns}
                  dataSource={arrAsprCd}
                  size="small"
                  bordered
                  pagination={false}
                  scroll={{ y: 200 }}
                />
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
      
      {/* 미리보기 */}
      <EvlTableExPopup
        key={'EvlTableExPopup2'}
        evlTableExPopupOpen={evlTableExPopupOpen}
        setEvlTableExPopupOpen={setEvlTableExPopupOpen}
      />
      {/* 문항추가 */}
      <EvlIxInqirePopup
        key={'EvlIxInqirePopup'}
        evlIxInqirePopupOpen={evlIxInqirePopupOpen}
        setEvlIxInqirePopupOpen={setEvlIxInqirePopupOpen}
      />
      {/* 상위문항선택 */}
      <UpperQesitmInqirePopup
        key={'UpperQesitmInqirePopup'}
        upperQesitmInqireOpen={upperQesitmInqireOpen}
        setUpperQesitmInqireOpen={setUpperQesitmInqireOpen}
      />
      {/* 답안그룹조회 */}
      <IxAswperInqirePopup
        key={'IxAswperInqirePopup'}
        ixAswperInqirePopupOpen={ixAswperInqirePopupOpen}
        setIxAswperInqirePopupOpen={setIxAswperInqirePopupOpen}
      />
    </>
  );
};

export default EvlRegistPopupComposition;
