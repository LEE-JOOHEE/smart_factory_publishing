import React, {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { Button, Col, Modal, Radio, Row, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';

import 'css/Common.css';
import CmAgremRjct from 'pages/cm/am/CmAgremRjct';

const SptExmntPopup03 = () => {
  const [arrEvlPvltrtMttr, setArrEvlPvltrtMttr] = useState([]);

  const arrEvlPvltrtMttrChange = (value, column, index) => {
    setArrEvlPvltrtMttr((prev) => {
      prev[index][column] = value;
      prev[index]['e'] = value === '해당' ? 3 : 0;
    });
  };

  const arrEvlPvltrtMttrColumns = [
    {
      title: '우대사항',
      dataIndex: 'a',
      width: '40%',
    },
    {
      title: '신청점수',
      children: [
        {
          title: '선택',
          dataIndex: 'b',
          width: '10%',
        },
        { title: '점수', dataIndex: 'c', width: '10%', align: 'center' },
      ],
    },
    {
      title: '확정점수',
      children: [
        {
          title: '선택',
          dataIndex: 'd',
          width: '30%',
          render: (_, record, index) => {
            return (
              <Radio.Group
                onChange={(evt) => {
                  arrEvlPvltrtMttrChange(evt.target.value, 'd', index);
                }}
                defaultValue={record?.d}
              >
                <Radio value={'해당'}>해당</Radio>
                <Radio value={'해당없음'}>해당없음</Radio>
              </Radio.Group>
            );
          },
        },
        {
          title: '점수',
          dataIndex: 'e',
          width: '10%',
          align: 'center',
          render: (_, record, index) => {
            return <>{_}</>;
          },
        },
      ],
    },
  ];

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
        a: '항목1',
        b: '해당',
        c: '3',
        d: '해당',
        e: 3,
      },
      {
        key: 2,
        a: '항목2',
        b: '해당',
        c: '3',
        d: '해당',
        e: 3,
      },
      {
        key: 3,
        a: '항목3',
        b: '해당',
        c: '3',
        d: '해당없음',
        e: 0,
      },
    ];
    setArrEvlPvltrtMttr(tmp1);
  }, []);

  const [cmAgremRjctOpen, setSmAgremRjctOpen] = useState(false);

  useEffect(() => {
    if (arrEvlPvltrtMttr) console.log('arrEvlPvltrtMttr : ', arrEvlPvltrtMttr);
  }, [arrEvlPvltrtMttr]);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>우대사항</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}></Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            columns={arrEvlPvltrtMttrColumns}
            dataSource={arrEvlPvltrtMttr}
            size="small"
            bordered
            pagination={false}
            summary={(pageData) => {
              let totalE = 0;
              pageData.forEach(({ e }) => {
                totalE += e;
              });
              return (
                <>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0} colSpan={3}>
                      우대사항 가점적용 점수(신청)
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>확정점수</Table.Summary.Cell>
                    <Table.Summary.Cell index={2} className="text-c">{totalE}</Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              );
            }}
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

export default SptExmntPopup03;
