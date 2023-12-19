import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Select, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SptExmntPopup from 'pages/mg/tr/se/sr/sptExmntPopup/SptExmntPopup';

const SptEvlRegist03DC = ({ ojtGroupCodes }) => {
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
        rowSpan: record.d,
      };
    } else {
      if (record.d > 0) {
        if (arrGroupKey.includes(record.a)) {
          //Merge row key가 다르고 그룹키가 같으면 rowspan = 0
          return {
            rowSpan: 0,
          };
        } else {
          //그룹키가 없으면 신규 merge row
          arrRowKey.push(record.key);
          arrGroupKey.push(record.a);
          return {
            rowSpan: record.d,
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
    },
    {
      title: '과제번호',
      dataIndex: 'b',
      width: '10%',
    },
    {
      title: '과제명',
      dataIndex: 'c',
      width: '10%',
    },
    {
      title: '도입기획기관',
      dataIndex: 'd',
      width: '10%',
    },
    {
      title: '도입대표기업',
      dataIndex: 'e',
      width: '10%',
    },
    {
      title: '도입기업수',
      dataIndex: 'f',
      width: '8%',
      align: 'center',
    },
    {
      title: '공급대표기업',
      dataIndex: 'g',
      width: '10%',
    },
    {
      title: '공급기업수',
      dataIndex: 'h',
      width: '10%',
      align: 'center',
    },
    {
      title: '전체평가기업수',
      dataIndex: 'i',
      width: '10%',
      align: 'center',
    },
    {
      title: '평가완료기업수',
      dataIndex: 'j',
      width: '10%',
      align: 'center',
    },
    {
      title: '판정상태',
      dataIndex: 'k',
      width: '7%',
      align: 'center',
    },
  ];
  const arrEntEvlRsltColumns = [
    {
      title: '번호',
      dataIndex: 'a',
      width: '7%',
      align: 'center',
      onCell: sharedOnCell,
    },
    {
      title: '기업구분',
      dataIndex: 'b',
      width: '20%',
      onCell: sharedOnCell,
    },
    {
      title: '도입기업',
      dataIndex: 'c',
      width: '20%',
      onCell: sharedOnCell,
    },
    {
      title: '평가위원수',
      dataIndex: 'd',
      width: '10%',
      align: 'center',
      onCell: sharedOnCell,
    },
    {
      title: '위원구분',
      dataIndex: 'e',
      width: '10%',
    },
    {
      title: '위원명',
      dataIndex: 'f',
      width: '10%',
    },
    {
      title: '진행상태',
      dataIndex: 'g',
      width: '13%',
      render: (_, record) => {
        return (
          <Button
            type="link"
            className="eu-btn-link text-c"
            onClick={() => {
              sptExmntPopupPageOpenClick(record);
            }}
          >
            {record?.g}
          </Button>
        );
      },
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
  //과제목록
  const [arrEntEvlRslt, setArrEntEvlRslt] = useState([]);

  useEffect(() => {
    let tmp2 = [];

    tmp2.push({
      key: 1,
      a: 1,
      b: 'S01',
      c: '과제명1',
      d: '기업명',
      e: '기업명',
      f: '3',
      g: '기업명',
      h: '1',
      i: '3',
      j: '1',
      k: '대기',
    });
    tmp2.push({
      key: 2,
      a: 2,
      b: 'S02',
      c: '과제명2',
      d: '기업명',
      e: '기업명',
      f: '2',
      g: '기업명',
      h: '1',
      i: '2',
      j: '0',
      k: '대기',
    });
    tmp2.push({
      key: 3,
      a: 3,
      b: 'S03',
      c: '과제명3',
      d: '기업명',
      e: '기업명',
      f: '1',
      g: '기업명',
      h: '1',
      i: '1',
      j: '0',
      k: '대기',
    });

    setArrAsmtLst(tmp2);

    let tmp3 = [];
    tmp3.push({
      key: 1,
      a: 1,
      b: '도입기업 대표기업',
      c: '기업명1',
      d: 3,
      e: '정위원',
      f: '위원1',
      g: '승인',
    });
    tmp3.push({
      key: 2,
      a: 1,
      b: '도입기업 대표기업',
      c: '기업명1',
      d: 3,
      e: '부위원1',
      f: '위원2',
      g: '승인',
    });
    tmp3.push({
      key: 3,
      a: 1,
      b: '도입기업 대표기업',
      c: '기업명1',
      d: 3,
      e: '부위원2',
      f: '위원3',
      g: '승인',
    });

    tmp3.push({
      key: 4,
      a: 2,
      b: '도입기업 참여기업',
      c: '기업명2',
      d: 2,
      e: '정위원',
      f: '위원4',
      g: '작성중',
    });
    tmp3.push({
      key: 5,
      a: 2,
      b: '도입기업 참여기업',
      c: '기업명2',
      d: 2,
      e: '부위원1',
      f: '위원5',
      g: '제출완료',
    });

    tmp3.push({
      key: 6,
      a: 3,
      b: '도입기업 참여기업',
      c: '기업명3',
      d: 3,
      e: '정위원',
      f: '위원6',
      g: '제출완료',
    });
    tmp3.push({
      key: 7,
      a: 3,
      b: '도입기업 참여기업',
      c: '기업명3',
      d: 3,
      e: '부위원1',
      f: '위원7',
      g: '제출완료',
    });
    tmp3.push({
      key: 8,
      a: 3,
      b: '도입기업 참여기업',
      c: '기업명3',
      d: 3,
      e: '부위원2',
      f: '위원8',
      g: '제출완료',
    });

    setArrEntEvlRslt(tmp3);
  }, []);

  return (
    <>
      <Row className="eu-row-comp-title mb-8">
        <Col span={24} className="title-0">
          <TitleComp>과제목록</TitleComp>
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
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            key={'arrEvlInstLst2'}
            columns={arrAsmtLstColumns}
            dataSource={arrAsmtLst}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 320, x: 1400 }}
          />
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={24}>
          <TitleComp>참여기업 별 평가결과</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrEntEvlRslt'}
            columns={arrEntEvlRsltColumns}
            dataSource={arrEntEvlRslt}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 320 }}
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

export default SptEvlRegist03DC;
