import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, DatePicker, Descriptions,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, Steps, Step, theme, message } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { DownCircleOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';
import { ojtChange } from 'components/common/Common';

const SubPage17_2 = ({ children }) => {

  const columns = [
    {
      title: '소속기관명',
      dataIndex: 'a',
      width: '20%',
    },
    {
      title: '기관구분',
      dataIndex: 'b',
      width: '10%',
      align: 'center',
    },
    {
      title: '주소',
      dataIndex: 'c',
      width: '30%',
    },
    {
      title: '전화번호',
      dataIndex: 'd',
      width: '20%',
      align: 'center',
    },
    {
      title: '팩스번호',
      dataIndex: 'e',
      width: '20%',
      align: 'center',
    },
  ];

  const rowSelection = {
    onChange: (_, selectedRows) => {
      ojtChange(selectedRows, 'key', setArrCnstcPrfmnc);
    },
  };

  const [arrCnstcPrfmnc, setArrCnstcPrfmnc] = useState([]);
  useEffect(() => {
    let tmp1 = [];
    for (let idx = 1; idx <= 50; idx++) {
      tmp1.push({
        key: idx,
        a: `프리랜서 (공급기업)${idx}`,
        b: '공급기업',
        c: '경상남도 창원시 성산구 성산패총로 32 (성산동)',
        d: '02-3285-0615',
        e: '02-3285-0615',
      });
    }
    setArrCnstcPrfmnc(tmp1);
  }, []);

  return(
    <>

      {/* 회원가입 STEP 2 - (기관정보선택) */}
      {/* 회원정보 > 회원가입 */}
      <Row>
        <Col span={12}>
          <div className="headline mb-10">소속기관 검색</div>
        </Col>
        <Col span={12} className="text-r">
          <Button className="eu-btn-crud-fine">조회</Button>
          <Button className="eu-btn-crud-warning">신규등록</Button>
        </Col>

        <Col span={24}>
          <Descriptions size={'small'} bordered>
            <Descriptions.Item label="사업자번호">
              <Input placeholder="사업자번호" />
            </Descriptions.Item>
            <Descriptions.Item label="소속기관명">
              <Input placeholder="소속기관명" />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="mt-40">
        <Col span={6} className="mt-auto mb-8">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {`${arrCnstcPrfmnc.length}`}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={18} className="text-r mb-8">
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red ml-auto">
            * 사업자번호 또는 소속기관명으로 조회하여도 본인 기관이 검색안될때는 필히 "신규등록"을 클릭하여 본인 기관을 등록해주세요.
            </span>
          </div>
        </Col>
        <Col span={24}>
          <Table
            key={'arrCnstcPrfmnc'}
            columns={columns}
            dataSource={arrCnstcPrfmnc}
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            size="small"
            bordered
            pagination={true}
            // scroll={{ y: 510, x: 1200 }}
            scroll={{ y: 510 }}
            className="eu-ant-table-x-800"
          />
        </Col>
      </Row> 



    </>
  )
}

export default SubPage17_2;