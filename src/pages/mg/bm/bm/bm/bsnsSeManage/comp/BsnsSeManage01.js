import React, { useState, useEffect } from 'react';
import { Col, Row, Table, Transfer, Space, Button, Select, Modal } from 'antd';
import { PlusOutlined, MinusOutlined, } from "@ant-design/icons";
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';

const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
  <Transfer {...restProps}>
    {({
      direction,
      filteredItems,
      onItemSelect,
      selectedKeys: listSelectedKeys,
    }) => {
      const columns = direction === 'left' ? leftColumns : rightColumns;
      console.log('filteredItems: ', filteredItems);
      return (
        <Table
          columns={columns}
          dataSource={filteredItems}
          size="small"
          bordered={true}
          pagination={false}
          onRow={({ key }) => ({
            onClick: () => {
              onItemSelect(key, !listSelectedKeys.includes(key));
            },
          })}
          sticky={true}
          scroll={{
            y: 800,
          }}
          tableLayout={'auto'}
        />
      );
    }}
  </Transfer>
);

const leftTableColumns = [
  {
    dataIndex: 'a',
    title: '사업구분명',
    align: 'center',
  },
  {
    dataIndex: 'b',
    title: '사업구분코드',
    align: 'center',
  },
  {
    dataIndex: 'c',
    title: '사업구분요약명',
    align: 'center',
  },
];
const rightTableColumns = [
  {
    dataIndex: 'a',
    title: '년도별 사업구분명',
    align: 'center',
  },
  {
    dataIndex: 'b',
    title: '사업구분명',
    align: 'center',
  },
];

const BsnsSeManage01 = ({ arrBizSeLst, openClick }) => {
  const originTargetKeys = arrBizSeLst.map((item) => item.key);
  const [targetKeys, setTargetKeys] = useState(originTargetKeys);
  const onChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };

  const insertSameLineClick = () => {
    console.log('insertSameLineClick');
    Modal.info({
      title: 'insertSameLineClick',
    });
  };

  const insertSubLineClick = () => {
    console.log('insertSubLineClick');
    Modal.info({
      title: 'insertSubLineClick',
    });
  };

  const deleteBizSeLsLineClick = () => {
    console.log('deleteBizSeLsLineClick');
    Modal.info({
      title: 'deleteBizSeLsLineClick',
    });
  };

  const insertBizSeLst = () => {
    console.log('insertBizSeLst');
    Modal.info({
      title: 'insertBizSeLst',
    });
  };

  const searchClick = () => {
    console.log('searchClick');
    Modal.info({
      title: 'searchClick',
    });
  };

  const deleteBizSeLsPerYearLineClick = () => {
    console.log('deleteBizSeLsPerYearLineClick');
    Modal.info({
      title: 'deleteBizSeLsPerYearLineClick',
    });
  };

  const bizSeAjmtClick = () => {
    console.log('bizSeAjmtClick');
    Modal.info({
      title: 'bizSeAjmtClick',
    });
  };

  const insertBizSeLsPerYearClick = () => {
    console.log('insertBizSeLsPerYearClick');
    Modal.info({
      title: 'insertBizSeLsPerYearClick',
    });
  };

  const excelClick = () => {
    console.log('excelClick');
    Modal.info({
      title: 'excelClick',
    });
  };

  const arrBizSeLstYear = arrBizSeLst?.map((data) => {
    return {
      value: data.key,
      label: data.d,
    };
  });
  console.log('arrBizSeLstYear: ', arrBizSeLstYear);
  const [year, setYear] = useState(arrBizSeLstYear[0].label);
  const yearChange = (value) => {
    setYear(value);
  };

  useEffect(() => {
    console.log('year: ', year);
  }, [year]);

  return (
    <>
      <Row gutter={(0, 112)}>
        <Col span={12}>
          <Row className="eu-row-comp-title mb-8">
            <Col span={24}>
              <TitleComp>사업구분목록</TitleComp>
            </Col>
            <Col span={15}>
              <Button
                className="eu-btn-row-insert"
                icon={<PlusOutlined />}
                onClick={insertSameLineClick}
              >
                동일행추가
              </Button>
              <Button
                className="eu-btn-row-insert"
                icon={<PlusOutlined />}
                onClick={insertSubLineClick}
              >
                하위행추가
              </Button>
              <Button
                className="eu-btn-row-delete"
                icon={<MinusOutlined />}
                onClick={deleteBizSeLsLineClick}
              >
                행삭제
              </Button>
            </Col>
            <Col span={9} style={{ textAlign: 'right' }}>
              <Button
                className="eu-btn-crud-default"
                onClick={() => openClick()}
              >
                사업진행표준절차
              </Button>
              <Button
                className="eu-btn-crud-warning"
                onClick={insertBizSeLst}
              >
                저장
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row className="eu-row-comp-title">
            <Col span={24}>
              <TitleComp>년도별 사업구분목록</TitleComp>
            </Col>
            <Col span={6}>
              <Space>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  style={{ width: 100 }}
                  onChange={(value) => {
                    yearChange(value);
                  }}
                  value={year}
                  options={arrBizSeLstYear}
                />
                <Button
                  className="eu-btn-crud-fine"
                  onClick={searchClick}
                >
                  조회
                </Button>
              </Space>
            </Col>
            <Col span={18} style={{ textAlign: 'right' }}>
              <Button
                className="eu-btn-row-delete"
                icon={<MinusOutlined />}
                onClick={deleteBizSeLsPerYearLineClick}
              >
                행삭제
              </Button>
              <Button
                className="eu-btn-crud-default"
                onClick={bizSeAjmtClick}
              >
                사업구분조정
              </Button>
              <Button
                className="eu-btn-crud-default"
                onClick={excelClick}
              >
                엑셀
              </Button>
              <Button
                className="eu-btn-crud-warning"
                onClick={insertBizSeLsPerYearClick}
              >
                저장
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <TableTransfer
                dataSource={arrBizSeLst}
                targetKeys={targetKeys}
                onChange={onChange}
                showSelectAll={false}
                selectAllLabels={{ style: { display: 'none' } }}
                filterOption={(inputValue, item) =>
                  item.title.indexOf(inputValue) !== -1 ||
                  item.tag.indexOf(inputValue) !== -1
                }
                leftColumns={leftTableColumns}
                rightColumns={rightTableColumns}
                operations={['이동','이동']}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BsnsSeManage01;
