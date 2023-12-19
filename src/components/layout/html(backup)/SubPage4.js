import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Checkbox, Table, Tag, Modal } from "antd";
import TechSignPopup from 'pages/mg/tr/te/er/techResultRegist/popup/TechSignPopup';
import SubPage4pop1 from 'components/layout/html/SubPage4_pop_1';
import SubPage4pop2 from 'components/layout/html/SubPage4_pop_2';
import editIcon from 'css/images/user-icons/edit-icon.png';

const SubPage4 = ({ children }) => {

  const [cmEvlMfcmSgnPopupOpen, setCmEvlMfcmSgnPopupOpen] = useState(false);
  const [cmEvlMfcmSgnPopupOpen2, setCmEvlMfcmSgnPopupOpen2] = useState(false);
  const moreClick = () => {
    setCmEvlMfcmSgnPopupOpen(true);
  };
  const detailClick = () => {
    setCmEvlMfcmSgnPopupOpen2(true);
  };

  const columns = [
    {
      title: '기업명',
      dataIndex: 'a1',
      width: '15%',
      render: (_, record, index) => {
        return (
          <Button
            className="eu-btn-link-usr"
            type="link"
            onClick={() => {
              // Modal.info({ title: '전문/특화 업종' });
              detailClick(record)
            }}
          >
            {record?.a1}
            <img src={editIcon} alt="수정아이콘" className="ml-8" />
          </Button>
        );
      },
    },
    { 
      title: '주력분야',
      dataIndex: 'a2',
      width: '6%',
      align: 'center',
    },
    { 
      title: [<span>전문/특화<br/>업종</span>],
      dataIndex: 'a3',
      width: '8%',
      render: (text, record, index) => {
        if (record.a3 === '') {
          return (
            <>
              <Tag
                onClick={() => moreClick(record)}
                style={{ cursor: 'pointer' }}
              >
                자세히보기
              </Tag>
            </>
          );
        } else {
          return record.k;
        }
      },
    },
    { 
      title: '보유인력 (명)',
      dataIndex: 'a4',
      children: [
        {
          title: 'SW',
          dataIndex: 'a411',
          width: '6%',
          align: 'center',
        },
        {
          title: '엔지니어링',
          dataIndex: 'a422',
          width: '7%',
          align: 'center',
        },
      ]
    },
    { 
      title: '구축실적',
      dataIndex: 'a5',
      children: [
        {
          title: '정부',
          dataIndex: 'a511',
          width: '6%',
          align: 'center',
        },
        {
          title: '민간',
          dataIndex: 'a522',
          width: '6%',
          align: 'center',
        },
      ],
    },
    { 
      title: '컨소시엄 정보',
      dataIndex: 'a6',
      width: '6%',
      align: 'center',
      render: (text, record, index) => {
        if (record.a6 !== '') {
          return (
            <>
              <Tag className="tag-black m-0">
                {text + '개'}
              </Tag>
            </>
          );
        } else {
          return record.k;
        }
      },
    },
    { 
      title: '주소',
      dataIndex: 'a7',
      width: '20%',
    },
    { 
      title: '대표자',
      dataIndex: 'a8',
      width: '7%',
      align: 'center',
    },
    { 
      title: '전화번호',
      dataIndex: 'a9',
      width: '12%',
    },
  ];

  const dataSource = [];
  for (let i = 0; i < 46; i++) {
    dataSource.push({
      key: i,
      a1: `(주)지에스티 - ${i}`,
      a2: 'NES',
      a3: '',
      a4: '',
      a411: '23',
      a422: '30',
      a5: '',
      a511: '80',
      a522: '15',
      a6: '19',
      a7: '대구광역시 수성구 알파시티1로35길 9 (대흥동), (주)아이디정보시스템',
      a8: '오준철',
      a9: '070-7017-7372',
    });
  }

  return(
    <>
      {/* 공급기업소개 */}
      {/* 사업안내 > 공급기업소개 */}
      <Row className="usr-search-biz-form">
        <Col span={24}>
          <div className="grid-col-4 gap-col-40 gap-row-10">
            <Space className="space-full">
              <div className="label mr-6">기관명</div>
              <Input placeholder="" />
            </Space>

            <Space className="space-full">
              <div className="label mr-6">전문/특화 업종</div>
              <Select 
                // getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }} 
                defaultValue={''} 
                options={[{value: '', label: '선택'},]} 
              />
            </Space>

            <div className="col-span-2 flex-row">
              <div className="flex-row-center flex-1">
                <div className="label mr-6">지역</div>
                <Select 
                  className="flex-1"
                  // getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }} 
                  defaultValue={''} 
                  options={[{value: '', label: '선택'},]} 
                />
              </div>

              <div className="flex-row-center flex-1">
                <div className="label mr-16">컨소시엄여부</div>
                <Checkbox.Group>
                  <Checkbox value={''}></Checkbox>
                </Checkbox.Group>
              </div>

              <div className="flex-row item-center justify-end flex-1">
                <Button className="eu-btn-crud-fine">조회하기</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mt-30">
        <Col span={12} className="mt-auto">
          <Row className="eu-row-comp-title mb-8">
            <div className="eu-table-indicator">
              <div className="count">총
                <span className="text-blue font-bold-500 ml-4">{dataSource ? dataSource.length : 0}</span>건
              </div>
            </div>
          </Row>
        </Col>
        <Col span={12} className="mb-8 text-r">
          <Button className="eu-btn-excel-download">엑셀다운로드</Button>
        </Col>
        <Col span={24}>
          <Table size="small" bordered
            columns={columns}
            dataSource={dataSource}
            pagination={true}
            scroll={{ y: 600, x: 1392 }}
          />
        </Col>
      </Row>


      <SubPage4pop1
        key="TechSignPopup"
        cmEvlMfcmSgnPopupOpen={cmEvlMfcmSgnPopupOpen}
        setCmEvlMfcmSgnPopupOpen={setCmEvlMfcmSgnPopupOpen}
      />
      <SubPage4pop2
        key="TechSignPopup2"
        cmEvlMfcmSgnPopupOpen2={cmEvlMfcmSgnPopupOpen2}
        setCmEvlMfcmSgnPopupOpen2={setCmEvlMfcmSgnPopupOpen2}
      />
    </>
  )
}

export default SubPage4;