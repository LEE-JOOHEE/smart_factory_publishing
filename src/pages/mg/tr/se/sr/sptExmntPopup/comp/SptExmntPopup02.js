import React, {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { Button, Col, Modal, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';

import 'css/Common.css';
import CmAgremRjct from 'pages/cm/am/CmAgremRjct';

const SptExmntPopup02 = () => {
  const arrEvlRsltColumns = [
    {
      title: '위원구분',
      dataIndex: 'a',
      width: '8%',
      align: 'center',
    },
    {
      title: '위원명',
      dataIndex: 'b',
      width: '8%',
    },
    {
      title: '평가점수',
      dataIndex: 'c',
      width: '6%',
      align: 'center',
    },
    {
      title: '방문일자',
      dataIndex: 'd',
      width: '22%',
    },
    {
      title: '평가의견',
      dataIndex: 'e',
      width: '30%',
    },
    {
      title: '검토결과',
      dataIndex: 'f',
      width: '6%',
      render: (_, record) => {
        if (record.f === '반려') {
          return (
            <Button
              type="link"
              className="eu-btn-link"
              onClick={() => {
                rjctClick();
              }}
            >
              {record?.f}
            </Button>
          );
        } else {
          return record.f;
        }
      },
    },
  ];

  const [arrEvlRslt, setArrEvlRslt] = useState([]);

  const aprvClick = () => {
    Modal.success({
      title: '보고서 승인',
    });
  };
  const rjctClick = () => {
    setSmAgremRjctOpen(true);
  };

  useEffect(() => {
    let tmp1 = [
      {
        key: 1,
        a: '정위원',
        b: '위원1',
        c: '80',
        d: '2022-10-27 09:00~12:20(3시간00분)',
        e: '평가의견',
        f: '승인',
      },
      {
        key: 2,
        a: '부위원1',
        b: '위원1',
        c: '80',
        d: '2022-10-27 09:00~12:20(3시간00분)',
        e: '평가의견',
        f: '반려',
      },
    ];
    setArrEvlRslt(tmp1);
  }, []);

  const [cmAgremRjctOpen, setSmAgremRjctOpen] = useState(false);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>위원별 평가결과</TitleComp>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}>
          <Button size="small" className="eu-btn-crud-fine" onClick={aprvClick}>
            보고서 승인
          </Button>
          <Button
            size="small"
            className="eu-btn-crud-error"
            onClick={rjctClick}
          >
            반려
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={arrEvlRsltColumns}
            dataSource={arrEvlRslt}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Col>
      </Row>
      <CmAgremRjct
        cmAgremRjctOpen={cmAgremRjctOpen}
        setSmAgremRjctOpen={setSmAgremRjctOpen}
      />
    </>
  );
};

export default SptExmntPopup02;
