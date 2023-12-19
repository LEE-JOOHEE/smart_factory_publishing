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
  Layout,
} from 'antd';
import 'css/Common.css';
import { getListCommonCd } from 'components/common/Common';
import TitleComp from 'components/layout/TitleComp';
import EvlTableExPopup from 'pages/smg/sm/em/em/evlIxManage/popup/EvlTableExPopup';

const { Text, Link } = Typography;
const EvlRegistPopupBass = ({ evlRegistPopupOpen, setEvlRegistPopupOpen }) => {
  //평가지 기본정보
  const [ojtEvlBass, setOjtEvlBass] = useState([]);

  //평가지 목록
  const [arrEvlfmCpy, setArrEvlfmCpy] = useState([]);

  //평가지 목록 헤더
  const arrEvlfmCpyColumns = [
    { title: '평가지ID', dataIndex: 'a1' },
    { title: '평가지명', dataIndex: 'a2' },
    { title: '평가지유형', dataIndex: 'a3' },
    { title: '평가년도', dataIndex: 'a4' },
    { title: '사업명', dataIndex: 'a5' },
    { title: '평가구분', dataIndex: 'a6' },
    { title: '평가방법', dataIndex: 'a7' },
    { title: '사용여부', dataIndex: 'a8' },
    { title: '등록자', dataIndex: 'a9' },
  ];

  //평가지 검색
  const [ojtSrchCnd, setOjtSrchCnd] = useState([]);

  //공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  const closeClick = () => {
    setEvlRegistPopupOpen(false);
  };

  const ojtSrchCndChange = (value, column) => {
    setOjtEvlBass((prev) => ({
      ...prev,
      [column]: value,
    }));
  };

  const saveClick = () => {
    Modal.info({
      title: 'saveClick',
    });
  };
  const searchClick = () => {
    Modal.info({
      title: 'searchClick',
    });
  };
  const initializeClick = () => {
    Modal.info({
      title: 'initializeClick',
    });
  };
  const evlfmCpyClick = () => {
    Modal.info({
      title: 'evlfmCpyClick',
    });
  };

  const [evlTableExPopupOpen, setEvlTableExPopupOpen] = useState(false);
  const previewClick = () => {
    setEvlTableExPopupOpen(true);
  };

  const [arrCheckedArrAsmtLst, setArrCheckedArrAsmtLst] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedArrAsmtLst(selectedRows);
    },
  };

  const { Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    console.log('ojtEvlBass : ', ojtEvlBass);
  }, [ojtEvlBass]);

  useEffect(() => {
    //공통코드
    setOjtGroupCodes(getListCommonCd(['a', 'b', 'c']));

    //기본정보
    setOjtEvlBass({
      a1: '평가위원 평가지',
      a2: '2022',
      a3: '스마트공장 구축 및 고도화 사업',
      a4: '스마트공장 구축 및 고도화 사업(기초)',
      a5: '선정평가',
      a6: '다면평가',
      a7: '',
      a8: '',
    });

    //평가지 검색
    setOjtSrchCnd({
      a1: '평가위원 평가지',
      a2: '2022',
      a3: '스마트공장 구축 및 고도화 사업',
      a4: '선정평가',
      a5: '다면평가',
      a6: '',
    });

    let tmp = [];
    for (let idx = 1; idx <= 10; idx++) {
      tmp.push({
        key: idx,
        a1: 'E000153',
        a2: '평가표',
        a3: '평가위원평가',
        a4: '2022',
        a5: '고도화사업(기초)',
        a6: '선정평가',
        a7: '서면',
        a8: 'N',
        a9: '운영자',
      });
    }
    setArrEvlfmCpy(tmp);
  }, []);

  return (
    <>
      <Layout className="evlRegistBassPriviewLayout">
        <Sider
          className="evlRegistBassPriview"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-0">
                <Col span={12}>
                  <TitleComp>평가지 기본정보</TitleComp>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                  <Button
                    key={'saveClick'}
                    className="eu-btn-crud-warning"
                    onClick={saveClick}
                    disabled
                  >
                    저장
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Descriptions bordered size="small">
                    <Descriptions.Item
                      label={
                        <div className="flex-row item-center">
                          <div className="text-red mr-8" style={{height: '18px'}}>*</div>
                          평가지유형
                        </div>
                      }
                      span={3}
                    >점검위원평가표</Descriptions.Item>
                    <Descriptions.Item
                      label={
                        <div className="flex-row item-center">
                          <div className="text-red mr-8" style={{height: '18px'}}>*</div>
                          사업년도
                        </div>
                      }
                      span={3}
                    >2023</Descriptions.Item>
                    <Descriptions.Item
                      label={
                        <div className="flex-row item-center">
                          <div className="text-red mr-8" style={{height: '18px'}}>*</div>
                          사업분류
                        </div>
                      }
                      span={3}
                    >스마트공장 구축(대중소상생형-삼성전자)</Descriptions.Item>
                    <Descriptions.Item
                      label={
                        <div className="flex-row item-center">
                          <div className="text-red mr-8" style={{height: '18px'}}>*</div>
                          평가분류
                        </div>
                      }
                      span={3}
                    >최종평가</Descriptions.Item>
                    <Descriptions.Item
                      label={
                        <div className="flex-row item-center">
                          <div className="text-red mr-8" style={{height: '18px'}}>*</div>
                          평가지명
                        </div>
                      }
                      span={2}
                    >점검위원_평가지_TEST_1</Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>
            </Col>
          </Row>
        </Sider>
        <Content>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-0">
                <Col span={24}>
                  <TitleComp>미리보기</TitleComp>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Descriptions bordered size="small" className="preview">
                    <Descriptions.Item className="depth0 empty" label={"설명문항1"} span={1}></Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항1-평가1"} span={2}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0 empty" label={"설명문항2"} span={1}></Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항2-평가1"} span={2}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0 empty" label={"설명문항3"} span={3}></Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항3"} span={3} >{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0 empty" label={"설명문항4"} span={1}></Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항4-평가1"} span={2}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0 empty" label={"설명문항5"} span={1}></Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항5-평가1"} span={2}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항6"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항7"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항8"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항9"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항10"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항11"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항12"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항13"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항14"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항15"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항16"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항17"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항18"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항6"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항7"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항8"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항9"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항10"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항11"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항12"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항13"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항14"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항15"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항16"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항17"} span={3}>{'Y'}</Descriptions.Item>
                    <Descriptions.Item className="depth0" label={"설명문항18"} span={3}>{'Y'}</Descriptions.Item>
                  </Descriptions>  
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>




      {/* <Row>
        <Col span={10}>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-0">
                <Col span={12}>
                  <TitleComp>평가지 기본정보</TitleComp>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                  <Button
                    key={'saveClick'}
                    className="eu-btn-crud-fine"
                    onClick={saveClick}
                  >
                    조회
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Descriptions bordered size="small">
                    <Descriptions.Item
                      label="평가지유형"
                      span={3}
                      labelStyle={{ whiteSpace: 'nowrap' }}
                    >
                      <Select
                        onChange={(value) => {
                          ojtSrchCndChange(value, 'a1');
                        }}
                        options={[
                          {
                            value: '평가위원 평가지',
                            label: '평가위원 평가지',
                          },
                          ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                        ]}
                        value={ojtEvlBass?.a1}
                      />
                    </Descriptions.Item>

                    <Descriptions.Item label="사업연도" span={3}>
                      <Select
                        onChange={(value) => {
                          ojtSrchCndChange(value, 'a2');
                        }}
                        options={[
                          {
                            value: '2022',
                            label: '2022',
                          },
                          ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                        ]}
                        value={ojtEvlBass?.a2}
                      />
                    </Descriptions.Item>

                    <Descriptions.Item label="사업구분" span={3}>
                      <Select
                        onChange={(value) => {
                          ojtSrchCndChange(value, 'a3');
                        }}
                        options={[
                          {
                            value: '스마트공장 구축 및 고도화 사업',
                            label: '스마트공장 구축 및 고도화 사업',
                          },
                          ...(ojtGroupCodes?.c ? ojtGroupCodes.c : []),
                        ]}
                        value={ojtEvlBass?.a3}
                      />
                    </Descriptions.Item>

                    <Descriptions.Item label="사업명" span={3}>
                      <Select
                        onChange={(value) => {
                          ojtSrchCndChange(value, 'a4');
                        }}
                        options={[
                          {
                            value: '스마트공장 구축 및 고도화 사업(기초)',
                            label: '스마트공장 구축 및 고도화 사업(기초)',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtEvlBass?.a4}
                      />
                    </Descriptions.Item>

                    <Descriptions.Item label="평가구분">
                      <Select
                        onChange={(value) => {
                          ojtSrchCndChange(value, 'a5');
                        }}
                        options={[
                          {
                            value: '선정평가',
                            label: '선정평가',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtEvlBass?.a5}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="평가방법" span={2}>
                      <Select
                        onChange={(value) => {
                          ojtSrchCndChange(value, 'a6');
                        }}
                        options={[
                          {
                            value: '다면평가',
                            label: '다면평가',
                          },
                          ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                        ]}
                        value={ojtEvlBass?.a6}
                      />
                    </Descriptions.Item>

                    <Descriptions.Item label="평가지명" span={3}>
                      <Input
                        onChange={(evt) => {
                          ojtSrchCndChange(evt.target.value, 'a7');
                        }}
                        value={ojtEvlBass?.a7}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="평가지복사">
                      <Space>
                        <Input
                          onChange={(evt) => {
                            ojtSrchCndChange(evt.target.value, 'a8');
                          }}
                          value={ojtEvlBass?.a8}
                        />

                        <Button
                          className="eu-btn-crud-fine"
                          onClick={initializeClick}
                        >
                          초기화
                        </Button>
                      </Space>
                      <div className="font-14 font-bold-300 lh-140 mt-8">
                        * 평가지 조회 후 선택하여 평가지 기본정보를 저장하면
                        <br/>&nbsp;&nbsp; 선택된 평가지의 평가지구성 정보를 복사하여 
                        <br/>&nbsp;&nbsp; 평가지가 생성됨
                      </div>
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={1} className="flex-col-center">
          <Button
            key={'saveClick'}
            className="eu-btn-crud-warning plr-8"
            onClick={saveClick}
          >
            ←
          </Button>
        </Col>
        <Col span={13}>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Row className="eu-row-comp-title mb-0">
                <Col span={12}>
                  <TitleComp>미리보기</TitleComp>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}></Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Descriptions bordered size="small">
                    <Descriptions.Item
                      label="평가지유형"
                      span={3}
                      labelStyle={{ whiteSpace: 'nowrap' }}
                    >
                      <Select
                        onChange={(value) => {
                          ojtSrchCndChange(value, 'a1');
                        }}
                        options={[
                          {
                            value: '평가위원 평가지',
                            label: '평가위원 평가지',
                          },
                          ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                        ]}
                        value={ojtEvlBass?.a1}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="평가지명" span={3}>
                      <Input
                        onChange={(evt) => {
                          ojtSrchCndChange(evt.target.value, 'a7');
                        }}
                        value={ojtEvlBass?.a7}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="평가지명" span={3}>
                      <Input
                        onChange={(evt) => {
                          ojtSrchCndChange(evt.target.value, 'a7');
                        }}
                        value={ojtEvlBass?.a7}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="평가지명" span={3}>
                      <Input
                        onChange={(evt) => {
                          ojtSrchCndChange(evt.target.value, 'a7');
                        }}
                        value={ojtEvlBass?.a7}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="평가지명" span={3}>
                      <Input
                        onChange={(evt) => {
                          ojtSrchCndChange(evt.target.value, 'a7');
                        }}
                        value={ojtEvlBass?.a7}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="평가지명" span={3}>
                      <Input
                        onChange={(evt) => {
                          ojtSrchCndChange(evt.target.value, 'a7');
                        }}
                        value={ojtEvlBass?.a7}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="평가지명" span={3}>
                      <Input
                        onChange={(evt) => {
                          ojtSrchCndChange(evt.target.value, 'a7');
                        }}
                        value={ojtEvlBass?.a7}
                      />
                    </Descriptions.Item>
                    
                  </Descriptions>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row> */}


      {/* 기본 레이아웃 - 참고용 */}
      {/* <Row className="eu-row-comp-cont">
        <Col span={9}>
          <Row className="eu-row-comp-title">
            <Col span={12}>
              <TitleComp>평가지 기본정보</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button
                key={'saveClick'}
                size="small"
                className="eu-btn-crud-fine"
                onClick={saveClick}
              >
                조회
              </Button>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <Descriptions bordered size="small">
                <Descriptions.Item
                  label="평가지유형"
                  span={3}
                  labelStyle={{ whiteSpace: 'nowrap' }}
                >
                  <Select
                    size={'small'}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a1');
                    }}
                    options={[
                      {
                        value: '평가위원 평가지',
                        label: '평가위원 평가지',
                      },
                      ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                    ]}
                    value={ojtEvlBass?.a1}
                  />
                </Descriptions.Item>

                <Descriptions.Item label="사업연도" span={3}>
                  <Select
                    size={'small'}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a2');
                    }}
                    options={[
                      {
                        value: '2022',
                        label: '2022',
                      },
                      ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                    ]}
                    value={ojtEvlBass?.a2}
                  />
                </Descriptions.Item>

                <Descriptions.Item label="사업구분" span={3}>
                  <Select
                    size={'small'}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a3');
                    }}
                    options={[
                      {
                        value: '스마트공장 구축 및 고도화 사업',
                        label: '스마트공장 구축 및 고도화 사업',
                      },
                      ...(ojtGroupCodes?.c ? ojtGroupCodes.c : []),
                    ]}
                    value={ojtEvlBass?.a3}
                  />
                </Descriptions.Item>

                <Descriptions.Item label="사업명" span={3}>
                  <Select
                    size={'small'}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a4');
                    }}
                    options={[
                      {
                        value: '스마트공장 구축 및 고도화 사업(기초)',
                        label: '스마트공장 구축 및 고도화 사업(기초)',
                      },
                      ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                    ]}
                    value={ojtEvlBass?.a4}
                  />
                </Descriptions.Item>

                <Descriptions.Item label="평가구분">
                  <Select
                    size={'small'}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a5');
                    }}
                    options={[
                      {
                        value: '선정평가',
                        label: '선정평가',
                      },
                      ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                    ]}
                    value={ojtEvlBass?.a5}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="평가방법" span={2}>
                  <Select
                    size={'small'}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a6');
                    }}
                    options={[
                      {
                        value: '다면평가',
                        label: '다면평가',
                      },
                      ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                    ]}
                    value={ojtEvlBass?.a6}
                  />
                </Descriptions.Item>

                <Descriptions.Item label="평가지명" span={3}>
                  <Input
                    size={'small'}
                    onChange={(evt) => {
                      ojtSrchCndChange(evt.target.value, 'a7');
                    }}
                    value={ojtEvlBass?.a7}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="평가지복사">
                  <Space>
                    <Input
                      size={'small'}
                      onChange={(evt) => {
                        ojtSrchCndChange(evt.target.value, 'a8');
                      }}
                      value={ojtEvlBass?.a8}
                      style={{ width: 200 }}
                    />

                    <Button
                      size="small"
                      className="eu-btn-crud-fine"
                      onClick={initializeClick}
                    >
                      초기화
                    </Button>
                  </Space>
                  <br></br>
                  <Text>
                    * 평가지 조회 후 선택하여 평가지 기본정보를 저장하면 선택된
                    평가지의 평가지구성 정보를 복사하여 평가지가 생성됨{' '}
                  </Text>
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Col>
        <Col span={1}>
          <Divider type="vertical" />
        </Col>
        <Col span={14}>
          <Row className="eu-row-comp-title">
            <Col span={12}>
              <TitleComp>평가지 검색</TitleComp>
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
                <Descriptions.Item
                  label="평가지유형"
                  span={3}
                  labelStyle={{ whiteSpace: 'nowrap' }}
                >
                  <Select
                    size={'small'}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a1');
                    }}
                    options={[
                      {
                        value: '평가위원 평가지',
                        label: '평가위원 평가지',
                      },
                      ...(ojtGroupCodes?.a ? ojtGroupCodes.a : []),
                    ]}
                    value={ojtSrchCnd?.a1}
                  />
                </Descriptions.Item>

                <Descriptions.Item label="사업연도" span={2}>
                  <Select
                    size={'small'}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a2');
                    }}
                    options={[
                      {
                        value: '2022',
                        label: '2022',
                      },
                      ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                    ]}
                    value={ojtSrchCnd?.a2}
                  />
                </Descriptions.Item>

                <Descriptions.Item label="사업구분" span={3}>
                  <Select
                    size={'small'}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a3');
                    }}
                    options={[
                      {
                        value: '스마트공장 구축 및 고도화 사업',
                        label: '스마트공장 구축 및 고도화 사업',
                      },
                      ...(ojtGroupCodes?.c ? ojtGroupCodes.c : []),
                    ]}
                    value={ojtSrchCnd?.a3}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="평가구분">
                  <Select
                    size={'small'}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a5');
                    }}
                    options={[
                      {
                        value: '선정평가',
                        label: '선정평가',
                      },
                      ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                    ]}
                    value={ojtSrchCnd?.a5}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="평가방법" span={2}>
                  <Select
                    size={'small'}
                    onChange={(value) => {
                      ojtSrchCndChange(value, 'a6');
                    }}
                    options={[
                      {
                        value: '다면평가',
                        label: '다면평가',
                      },
                      ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
                    ]}
                    value={ojtSrchCnd?.a6}
                  />
                </Descriptions.Item>

                <Descriptions.Item label="평가지명" span={3}>
                  <Input
                    size={'small'}
                    onChange={(evt) => {
                      ojtSrchCndChange(evt.target.value, 'a7');
                    }}
                    value={ojtSrchCnd?.a7}
                  />
                </Descriptions.Item>
              </Descriptions>

              <Row className="eu-row-comp-title margin-top">
                <Col span={10}>
                  <TitleComp>&nbsp;</TitleComp>
                </Col>
                <Col span={14} style={{ textAlign: 'right' }}>
                  <Space>
                    <Button
                      size="small"
                      className="eu-btn-crud-fine"
                      onClick={evlfmCpyClick}
                    >
                      평가지복사
                    </Button>
                    <Button
                      size="small"
                      className="eu-btn-crud-fine"
                      onClick={previewClick}
                    >
                      미리보기
                    </Button>
                  </Space>
                </Col>
              </Row>
              <Row className="eu-row-comp-cont">
                <Col span={24}>
                  <Table
                    rowSelection={{ type: 'checkbox', ...rowSelection }}
                    key={'arrEvlfmCpyTable'}
                    columns={arrEvlfmCpyColumns}
                    dataSource={arrEvlfmCpy}
                    size="small"
                    bordered
                    pagination={false}
                    scroll={{ y: 250 }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row> */}
      <EvlTableExPopup
        key={'EvlTableExPopup2'}
        evlTableExPopupOpen={evlTableExPopupOpen}
        setEvlTableExPopupOpen={setEvlTableExPopupOpen}
      />
    </>
  );
};

export default EvlRegistPopupBass;
