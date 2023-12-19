import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Modal,
  Button,
  Table,
  Descriptions,
  Space,
  Input,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import ExcDiaryPopup from 'pages/mg/rm/ed/ed/excDiaryCnstnt/popup/ExcDiaryPopup';

const TaskDetailPopup = ({ open, closeClick, type = 'FLFMT' }) => {
  //  검색조건 입력 object
  const [ojtSrchCnd, setOjtSrchCnd] = useState('');

  const [ojtAsmtInfo, setOjtAsmtInfo] = useState({
    a: '2022-12A-027-000001',
    b: '아무개',
    c: '1차 스마트공장 구축 및 고도화(기초)',
    d: '스마트공장 구축 및 고도화(기초)',
    e: '도입기업명',
    f: '공급기업명',
    g: '홍길동(id)',
  });
  const [arrFlfmtHstry, setArrFlfmtHstry] = useState([
    {
      a: '1',
      b: '김철수',
      c: '소속명',
      d: '2022-04-23',
      e: '대표자 성함 오기재',
    },
  ]);
  // 컨설턴트
  const [cnstAditOpen, setCnstAditOpen] = useState(false);
  // 수행일지 확인
  const [excDiaryOpen, setExcDiaryOpen] = useState(false);

  const [arrCheckedFlfmtHstry, setArrCheckedFlfmtHstry] = useState([]);
  const columns = [
    {
      title: '방문지도일시',
      dataIndex: 'a',
      align: 'center',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link"
            size="small"
            type="link"
            onClick={() => {
              setExcDiaryOpen(true);
            }}
          >
            {record?.a}
          </Button>
        );
      },
    },
    {
      title: '등록/확인요청/확인 상태',
      dataIndex: 'b',
      align: 'center',
    },
    {
      title: '등록일시',
      dataIndex: 'c',
      align: 'center',
    },
    {
      title: '등록자',
      dataIndex: 'd',
      align: 'center',
    },
    {
      title: '확인일시',
      dataIndex: 'e',
      align: 'center',
    },
    {
      title: '확인자',
      dataIndex: 'f',
      align: 'center',
    },
    {
      title: '추진내용',
      dataIndex: 'g',
      align: 'center',
    },
    {
      title: '첨부',
      dataIndex: 'h',
      align: 'center',
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
      setArrCheckedFlfmtHstry(selectedRows);
    },
  };

  const searchClick = () => {
    Modal.info({ title: `${JSON.stringify(ojtSrchCnd)}` });
  };

  const confirmClick = () => {
    Modal.info({
      title: `keys: ${JSON.stringify(
        arrCheckedFlfmtHstry.map((data) => data.key)
      )}`,
    });
    closeClick();
  };

  const excDiaryCloseClick = () => {
    setExcDiaryOpen(false);
  };

  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx <= 50; idx++) {
      tmp1.push({
        key: idx,
        a: '2022-09-23 09:00 ~ 18:00 (9시간 00분)',
        b: '(도입기업) 확인',
        c: '2022-09-23 16:15',
        d: '아무개',
        e: '',
        f: '내용',
        g: '',
        h: '',
      });
    }
    setArrFlfmtHstry(tmp1);
  }, []);
  return (
    <Modal
      key="TaskDetailPopup"
      title={
        type === 'FLFMT'
          ? '수행일지 확인(컨설턴트)'
          : '수시점검 확인(기업진단코디)'
      }
      open={open}
      onCancel={closeClick}
      width={1800}
      footer={[
        <div>
          <Button
            type="primary"
            size="middle"
            className="eu-btn-popup-process-default"
            onClick={confirmClick}
          >
            확인
          </Button>
          <Button
            type="primary"
            size="middle"
            className="eu-btn-popup-process-warning"
            onClick={closeClick}
          >
            닫기
          </Button>
        </div>,
      ]}
    >
      <Row className="eu-row-comp-title">
        <Col span={24}>
          <TitleComp>과제 정보</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="사업연도" span={1.5}>
              {ojtAsmtInfo?.a}
            </Descriptions.Item>
            <Descriptions.Item label="사업분류" span={1.5}>
              {ojtAsmtInfo?.b}
            </Descriptions.Item>
            <Descriptions.Item label="세부공고명" span={1.5}>
              {ojtAsmtInfo?.c}
            </Descriptions.Item>
            <Descriptions.Item label="지역(수행기관)" span={1.5}>
              {ojtAsmtInfo?.d}
            </Descriptions.Item>
            <Descriptions.Item label="도입기업" span={1.5}>
              {ojtAsmtInfo?.e}
            </Descriptions.Item>
            <Descriptions.Item label="공급기업" span={1.5}>
              {ojtAsmtInfo?.f}
            </Descriptions.Item>
            {type === 'FLFMT' && (
              <Descriptions.Item label="컨설턴트">
                <div>
                  <Space>
                    {ojtAsmtInfo?.g}
                    {'icon'}
                    <Button
                      size="small"
                      className="eu-btn-table-fine"
                      onClick={() => setCnstAditOpen(true)}
                    >
                      컨설턴트 추가
                    </Button>
                  </Space>
                </div>
                {cnstAditOpen && (
                  <Space style={{ paddingTop: '20px' }}>
                    (컨설턴트) 검색 :
                    <Input
                      onChange={(evt) => {
                        setOjtSrchCnd(evt.target.value);
                      }}
                      value={ojtSrchCnd?.a}
                      style={{ width: '300px' }}
                    />
                    <Button
                      size="small"
                      className="eu-btn-crud-fine"
                      onClick={searchClick}
                    >
                      검색
                    </Button>
                    <Button
                      size="small"
                      className="eu-btn-crud-default"
                      onClick={() => setCnstAditOpen(false)}
                    >
                      닫기
                    </Button>
                  </Space>
                )}
              </Descriptions.Item>
            )}
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>{type === 'FLFMT' ? '수행일지' : '수행점검'}</TitleComp>
          <div>
            {`총 ${arrFlfmtHstry.length}건`}
            <span style={{ paddingLeft: '50px', color: 'blue' }}>
              ※ '확인요청' : 도입기업에 확인요청, '(도입기업)확인" : 도입기업이
              확인하면 전담기관 또는 수행기관에 자동 제출
            </span>
          </div>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrFlfmtHstry'}
            columns={columns}
            dataSource={arrFlfmtHstry}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 600,
            }}
          />
        </Col>
      </Row>
      <ExcDiaryPopup
        open={excDiaryOpen}
        closeClick={excDiaryCloseClick}
        type={type}
      />
    </Modal>
  );
};

export default TaskDetailPopup;
