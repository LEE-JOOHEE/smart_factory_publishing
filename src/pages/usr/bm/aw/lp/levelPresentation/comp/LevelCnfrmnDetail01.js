import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  Select,
  Input,
  Descriptions,
  Checkbox,
  Table,
  DatePicker,
  Modal,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const LevelCnfrmnDetail01 = ({ arrDgnsRptp, ojtGroupCodes }) => {
  const columns = [
    { title: '항목', dataIndex: 'a' },
    { title: '필수여부', dataIndex: 'b' },
    { title: '허용파일', dataIndex: 'c' },
    {
      title: '첨부파일',
      dataIndex: 'd',
      render: (_, record, index) => {
        return (
          <>
            {record.d}
            <Button
              className="eu-usr-btn-table-fine"
              size="small"
              onClick={() => {
                console.log(record, index);
                atchClick();
              }}
            >
              첨부
            </Button>
            <Button
              className="eu-usr-btn-table-fine"
              size="small"
              onClick={() => {
                console.log(record, index);
                deleteClick();
              }}
            >
              삭제
            </Button>
          </>
        );
      },
    },
    { title: '등록일', dataIndex: 'e' },
  ];

  //검색조건
  const [ojtLvlIdnty, setOjtLvlIdnty] = useState({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
  });
  const deleteClick = () => {
    Modal.info({ title: '삭제 클릭' });
  };
  const atchClick = () => {
    Modal.info({ title: '첨부 클릭' });
  };
  return (
    <>
      <Row className="eu-usr-row-comp-title">
        <Col span={12}>
          <TitleComp>진행단계</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="진행단계" span={3}>
              기업수준확인 완료
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>기업수준확인</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="수준확인서 일련번호" span={3}>
              <Input
                value={ojtLvlIdnty?.a1}
                onChange={(e) =>
                  ojtChange(e.target.value, 'a1', setOjtLvlIdnty)
                }
              />
            </Descriptions.Item>
            <Descriptions.Item label="구축시스템 스마트화 수준" span={3}>
              <Select
                placeholder="사업분류 선택"
                value={ojtLvlIdnty?.a2}
                onChange={(value) => ojtChange(value, 'a2', setOjtLvlIdnty)}
                options={[
                  {
                    value: '수준1',
                    label: '수준1',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 수준" span={3}>
              <Select
                placeholder="사업분류 선택"
                value={ojtLvlIdnty?.a3}
                onChange={(value) => ojtChange(value, 'a3', setOjtLvlIdnty)}
                options={[
                  {
                    value: '수준1',
                    label: '수준1',
                  },
                  ...(ojtGroupCodes?.b ? ojtGroupCodes.b : []),
                ]}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label="수준확인서 유효기간 시작일(종료일=시작일+3년)"
              span={3}
            >
              <DatePicker
                placeholder={'시작일자'}
                onChange={(moment, dateString) => {
                  if (moment) {
                    console.log('시작일자: ', dateString);
                  }
                  ojtChange(dateString, 'a4', setOjtLvlIdnty);
                }}
              />
            </Descriptions.Item>
            <Descriptions.Item label="기업제조혁신역량 총점" span={3}>
              <Input
                value={ojtLvlIdnty?.a5}
                onChange={(e) =>
                  ojtChange(e.target.value, 'a5', setOjtLvlIdnty)
                }
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>진단보고서</TitleComp>
        </Col>
      </Row>
      <Row className="eu-usr-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrDgnsRptp'}
            columns={columns}
            dataSource={arrDgnsRptp}
            pagination={false}
            size={'small'}
            bordered={true}
            scroll={{
              y: 400,
            }}
            tableLayout={'auto'}
          />
        </Col>
        <Col span={24}>
          <div style={{ color: 'red' }}>
            <div>* 항목별 1개파일 20MB이내의 파일만 첨부가능합니다.</div>
            <div>
              * 사진등으로 인해 용량이 초과되시는 경우는 한글/워드에서 PDF로
              저장하는 기능을 활용하시면 파일 크기를 줄이실 수 있습니다.
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LevelCnfrmnDetail01;
