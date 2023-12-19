import React, { useState } from 'react';
import {
  Col,
  Row,
  Tabs,
  Button,
  Table,
  DatePicker,
  ConfigProvider,
  Modal,
  Select,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import { arrChange } from 'components/common/Common';
import 'css/Common.css';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR'; // 우린 한국인이니까 ko_KR를 불러옵시다
moment.locale('ko');

const PblancFxManagePage = ({
  arrFxManage,
  setArrFxManage,
  setCheckedArrFxManage,
}) => {
  const columns = [
    {
      title: '접수유형',
      dataIndex: 'a',
      width: '20%',
      align: 'left',
      render: (_, record, index) => {
        console.log(record, index);
        return (
          <Select
            dropdownAlign={{ offset: [0, 0] }}
            placeholder="접수유형"
            onChange={(value) => arrChange(value, 'a', index, setArrFxManage)}
            options={[
              {
                value: '신청',
                label: '신청',
              },
              {
                value: '연장신청',
                label: '연장신청',
              },
            ]}
            defaultValue={record?.a}
          />
        );
      },
    },
    {
      title: '접수시작일',
      dataIndex: 'b',
      width: '22%',
      align: 'center',
      render: (_, record, index) => {
        return (
          <ConfigProvider locale={locale}>
            <DatePicker
              format="YYYY-MM-DD"
              placeholder={'접수시작일'}
              onChange={(moment, dateString) => {
                if (moment) {
                  console.log('접수시작일: ', dateString);
                }
                arrChange(dateString, 'b', index, setArrFxManage);
              }}
            />
          </ConfigProvider>
        );
      },
    },
    {
      title: '접수시작시각',
      dataIndex: 'c',
      width: '12%',
      align: 'center',
    },
    {
      title: '접수종료일',
      dataIndex: 'd',
      width: '22%',
      align: 'center',
      render: (_, record, index) => {
        return (
          <ConfigProvider locale={locale}>
            <DatePicker
              format="YYYY-MM-DD"
              placeholder={'접수종료일'}
              onChange={(moment, dateString) => {
                if (moment) {
                  console.log('접수종료일: ', dateString);
                }
                arrChange(dateString, 'd', index, setArrFxManage);
              }}
            />
          </ConfigProvider>
        );
      },
    },
    {
      title: '접수종료시각',
      dataIndex: 'e',
      width: '12%',
      align: 'center',
    },
    {
      title: '유예마감시작',
      dataIndex: 'f',
      width: '12%',
      align: 'center',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);
      setCheckedArrFxManage(selectedRows);
    },
  };

  const insertClick = () => {
    Modal.info({
      title: 'insertClick',
    });
  };

  const deleteClick = () => {
    Modal.info({
      title: 'deleteClick',
    });
  };

  const saveClick = () => {
    Modal.info({
      title: 'saveClick',
    });
  };

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>과제신청/접수 일정</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            className="eu-btn-crud-fine"
            onClick={insertClick}
          >
            추가
          </Button>
          <Button className="eu-btn-crud-fine" onClick={saveClick}>
            저장
          </Button>
          <Button
            className="eu-btn-crud-error"
            onClick={deleteClick}
          >
            삭제
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'fxManage'}
            columns={columns}
            dataSource={arrFxManage}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            pagination={false}
            size={'small'}
            bordered={true}
            sticky={true}
            scroll={{
              y: 400,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default PblancFxManagePage;
