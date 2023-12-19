import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Input, Space, Table, Tag } from "antd";

const SubPage1 = ({ children }) => {

  //사업공고
  const columns = [
    {
      title: '사업년도',
      dataIndex: 'a1',
      width: '10%',
      align: 'center',
    },
    {
      title: '공고명',
      dataIndex: 'a2',
      width: '40%',
      align: 'left',
    },
    {
      title: '신청접수 기간',
      dataIndex: 'a3',
      width: '30%',
      align: 'center',
    },
    {
      title: '등록자',
      dataIndex: 'a4',
      width: '10%',
      align: 'center',
    },
    {
      title: '상태',
      dataIndex: 'a5',
      render: (_, { a5 }) => (
        <>
          {a5.map((tag) => {
            if (tag === '마감' || tag === '온라인 신청불가') {
              return <Tag className="tag-disabled">{tag}</Tag>
            }
            return (
              <Tag key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
      width: '10%',
      align: 'center',
    },
  ];

  const dataSource = [];
  for (let i = 0; i < 46; i++) {
    dataSource.push({
      key: i,
      a1: '2022년',
      a2: `2022년 일반형 디지털 클러스터(선정된 컨소시엄 대상) - ${i}`,
      a3: '2022-08-18 09:00 ~ 2022-12-30 18:00',
      a4: '관리자',
      a5: [
        i % 4 === 1
        ? '접수신청'
        : i % 4 === 2
        ? '마감'
        : i % 4 === 3
        ? '온라인 신청불가'
        : '접수신청'
      ],
    });
  }

  return(
    <>

      {/* 사업공고 */}
      {/* 사업안내 > 사업공고 */}
      <Row className="usr-search-form" gutter={[40, 6]}>
        <Col span={8} md={8} xs={24}>
          <Space className="space-full">
            <div className="label mr-6">사업년도</div>
            <Select 
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }} 
              defaultValue={'2023'} 
              options={[{value: '2023', label: '2023'},]} 
            />
          </Space>
        </Col>
        <Col span={16} md={16} xs={24}>
          <Space className="space-full">
            <Input placeholder="사업분류" style={{ width : "130px" }} />
            <Input placeholder="세부공고명" />
            <Button className="eu-btn-crud-default plr-44">조회하기</Button>
          </Space>
        </Col>
      </Row>

      <Row className="mt-20">
        <Col span={24} className="mb-10">
          <div className="eu-table-indicator">
            <div className="count">전체
              <span className="text-blue font-bold-500 ml-4">{dataSource.length}</span>건
            </div>
          </div>
        </Col>
        <Col span={24}>
          <Table size="small" bordered 
            className="usr-board-table"
            columns={columns}
            dataSource={dataSource}
            pagination={true}
            scroll={{ y: 417, x: 900 }}
          />
        </Col>

      </Row>


    </>
  )
}

export default SubPage1;