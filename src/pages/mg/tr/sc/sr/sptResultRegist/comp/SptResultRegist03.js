import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row, Select, Table, Tabs } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import SptExmntPopupPage from 'pages/mg/tr/sc/sr/sptExmntPopup/SptExmntPopupPage';

const SptResultRegist03 = ({ ojtGroupCodes }) => {
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
      width: 50,
      align: 'center',
      onCell: sharedOnCell,
    },
    {
      title: '과제번호',
      dataIndex: 'b',
      onCell: sharedOnCell,
    },
    {
      title: '과제명',
      dataIndex: 'c',
      width: 150,
      onCell: sharedOnCell,
    },
    {
      title: '도입기업',
      dataIndex: 'd',
      onCell: sharedOnCell,
    },
    {
      title: '평가위원수',
      dataIndex: 'e',
      width: 100,
      onCell: sharedOnCell,
    },
    {
      title: '위원구분',
      dataIndex: 'f',
      width: 100,
    },
    {
      title: '위원명',
      dataIndex: 'g',
      width: 100,
    },
    {
      title: '적합성',
      dataIndex: 'h',
      render: (_, record) => {
        return (
          <Button
            type="link"
            size="small"
            onClick={() => {
              sptExmntPopupPageOpenClick(record);
            }}
          >
            {record?.h}
          </Button>
        );
      },
    },
    {
      title: '진행상태',
      dataIndex: 'i',
    },
    {
      title: '판정상태',
      dataIndex: 'j',
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
      h: '적합',
      i: '승인',
      j: '선정예정',
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
      h: '적합',
      i: '승인',
      j: '선정예정',
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
      h: '적합',
      i: '승인',
      j: '선정예정',
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
      h: '-',
      i: '작성중',
      j: '대기',
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
      h: '적합',
      i: '제출완료',
      j: '대기',
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
      h: '부적합',
      i: '작성중',
      j: '탈락',
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
      h: '부적합',
      i: '제출완료',
      j: '탈락',
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
      h: '부적합',
      i: '반려',
      j: '탈락',
    });
    setArrAsmtLst(tmp2);
  }, []);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>과제목록</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Select
            size={'small'}
            style={{ width: 100 }}
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
          <Button size="small" className="eu-btn-crud-fine" onClick={jgmtClick}>
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
            scroll={{ y: 320 }}
          />
        </Col>
      </Row>
      <SptExmntPopupPage
        sptExmntPopupPageOpen={sptExmntPopupPageOpen}
        setSptExmntPopupPageOpen={setSptExmntPopupPageOpen}
      />
    </>
  );
};

export default SptResultRegist03;
