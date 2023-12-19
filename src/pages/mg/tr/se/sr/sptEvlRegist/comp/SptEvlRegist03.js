import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Select, Space, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SptExmntPopup from 'pages/mg/tr/se/sr/sptExmntPopup/SptExmntPopup';

const SptEvlRegist03 = ({ ojtGroupCodes }) => {
  let arrRowKey = [];
  let arrGroupKey = [];

  const [slctn, setSlctn] = useState('');

  const [sptExmntPopupPageOpen, setSptExmntPopupPageOpen] = useState(false);

  const sptExmntPopupPageOpenClick = (record) => {
    setSptExmntPopupPageOpen(true);
  };

  const sharedOnCell = (record, index) => {
    if (arrRowKey.includes(record.key)) {
      //Merge row key 가 같으면 무조건 rowspan 지정
      return {
        rowSpan: record.e,
      };
    } else {
      if (record.e > 0) {
        if (arrGroupKey.includes(record.b)) {
          //Merge row key가 다르고 그룹키가 같으면 rowspan = 0
          return {
            rowSpan: 0,
          };
        } else {
          //그룹키가 없으면 신규 merge row
          arrRowKey.push(record.key);
          arrGroupKey.push(record.b);
          return {
            rowSpan: record.e,
          };
        }
      }
      return {};
    }
  };

  const arrAsmtLstColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: '5%',
      align: 'center',
      onCell: sharedOnCell,
    },
    {
      title: '과제번호',
      dataIndex: 'b',
      width: '10%',
      onCell: sharedOnCell,
    },
    {
      title: '과제명',
      dataIndex: 'c',
      width: '10%',
      onCell: sharedOnCell,
    },
    {
      title: '도입기업',
      dataIndex: 'd',
      width: '10%',
      onCell: sharedOnCell,
    },
    {
      title: '평가위원수',
      dataIndex: 'e',
      width: '8%',
      align: 'center',
      onCell: sharedOnCell,
    },
    {
      title: '위원구분',
      dataIndex: 'f',
      width: '10%',
    },
    {
      title: '위원명',
      dataIndex: 'g',
      width: '10%',
    },
    {
      title: '평가점수',
      dataIndex: 'h',
      width: '7%',
      align: 'center',
    },
    {
      title: '진행상태',
      dataIndex: 'i',
      width: '10%',
      align: 'center',
    },
    {
      title: '평가평균',
      dataIndex: 'j',
      width: '10%',
      align: 'center',
      onCell: sharedOnCell,
      render: (_, record) => {
        return (
          <Button
            type="link"
            className="eu-btn-link text-c"
            onClick={() => {
              sptExmntPopupPageOpenClick(record);
            }}
          >
            {record?.j}
          </Button>
        );
      },
    },
    {
      title: '판정상태',
      dataIndex: 'k',
      width: '10%',
      align: 'center',
      onCell: sharedOnCell,
    },
  ];

  const ojtSrchCndChange = (value) => {
    setSlctn(value);
  };

  const [arrCheckedArrAsmtLst, setArrCheckedArrAsmtLst] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`keys: ${selectedRowKeys}`, 'rows: ', selectedRows);

      setArrCheckedArrAsmtLst(selectedRows);
    },
  };
  const jgmtClick = () => {
    Modal.info({
      title: '판정클릭 : ' + JSON.stringify(arrCheckedArrAsmtLst),
    });
  };
  //과제목록
  const [arrAsmtLst, setArrAsmtLst] = useState([]);

  useEffect(() => {
    let tmp2 = [];

    tmp2.push({
      key: 1,
      a: 1,
      b: 'S01',
      c: '과제명',
      d: '도입기업명',
      e: 3,
      f: '정위원',
      g: '위원1',
      h: '60',
      i: '승인',
      j: '70',
      k: '선정예정',
    });
    tmp2.push({
      key: 2,
      a: 1,
      b: 'S01',
      c: '과제명',
      d: '도입기업명',
      e: 3,
      f: '부위원1',
      g: '위원2',
      h: '70',
      i: '승인',
      j: '70',
      k: '선정예정',
    });
    tmp2.push({
      key: 3,
      a: 1,
      b: 'S01',
      c: '과제명',
      d: '도입기업명',
      e: 3,
      f: '부위원2',
      g: '위원3',
      h: '70',
      i: '승인',
      j: '70',
      k: '선정예정',
    });

    tmp2.push({
      key: 4,
      a: 2,
      b: 'S02',
      c: '과제명',
      d: '도입기업명',
      e: 2,
      f: '정위원',
      g: '위원1',
      h: '51',
      i: '작성중',
      j: '67',
      k: '대기',
    });
    tmp2.push({
      key: 5,
      a: 2,
      b: 'S02',
      c: '과제명',
      d: '도입기업명',
      e: 2,
      f: '부위원1',
      g: '위원2',
      h: '70',
      i: '제출완료',
      j: '67',
      k: '대기',
    });

    tmp2.push({
      key: 6,
      a: 3,
      b: 'S03',
      c: '과제명',
      d: '도입기업명',
      e: 3,
      f: '정위원',
      g: '위원1',
      h: '10',
      i: '작성중',
      j: '53',
      k: '탈락',
    });
    tmp2.push({
      key: 7,
      a: 3,
      b: 'S03',
      c: '과제명',
      d: '도입기업명',
      e: 3,
      f: '부위원1',
      g: '위원2',
      h: '70',
      i: '제출완료',
      j: '53',
      k: '탈락',
    });
    tmp2.push({
      key: 8,
      a: 3,
      b: 'S03',
      c: '과제명',
      d: '도입기업명',
      e: 3,
      f: '부위원2',
      g: '위원3',
      h: '80',
      i: '반려',
      j: '53',
      k: '탈락',
    });
    setArrAsmtLst(tmp2);
  }, []);

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24} className="title-0">
          <TitleComp>평가위원목록</TitleComp>
        </Col>
        <Col span={6} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">
                {arrAsmtLst ? arrAsmtLst.length : 0}
              </span>건
            </div>
          </div>
        </Col>
        <Col span={18} style={{ textAlign: 'right' }}>
          <Space>
            <Select
              getPopupContainer={trigger => trigger.parentNode}
              dropdownAlign={{ offset: [0, 0] }}
              className="text-l"
              style={{ width: 200 }}
              onChange={(value) => {
                ojtSrchCndChange(value);
              }}
              options={[
                {
                  value: '',
                  label: '선택',
                },
                {
                  value: '선정예정',
                  label: '선정예정',
                },
                {
                  value: '대기',
                  label: '대기',
                },
                {
                  value: '탈락',
                  label: '탈락',
                },
                ...(ojtGroupCodes?.d ? ojtGroupCodes.d : []),
              ]}
              value={slctn}
            />
            <Button className="eu-btn-crud-fine" onClick={jgmtClick}>
              판정
            </Button>
          </Space>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            className="merge"
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            key={'arrEvlInstLst2'}
            columns={arrAsmtLstColumns}
            dataSource={arrAsmtLst}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 320, x: 1200 }}
          />
        </Col>
      </Row>
      <SptExmntPopup
        sptExmntPopupPageOpen={sptExmntPopupPageOpen}
        setSptExmntPopupPageOpen={setSptExmntPopupPageOpen}
      />
    </>
  );
};

export default SptEvlRegist03;
