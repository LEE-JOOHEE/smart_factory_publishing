import React, { useEffect, useState } from 'react';
import { Col, Modal, Row, Space, Table } from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { Button, Checkbox, Descriptions, Input, Select } from 'antd/lib';
import { getListCommonCd, ojtChange } from 'components/common/Common';
import RsltIdxRegPopup from 'pages/mg/rs/rm/rm/rsltIxList/popup/RsltIdxRegPopup';
import RsltIdxCpyPopup from 'pages/mg/rs/rm/rm/rsltIxList/popup/RsltIdxCpyPopup';

const RsltIxList01 = ({}) => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});
  //검색조건
  const [ojtSrchCnd, setOjtSrchCnd] = useState({
    a1: '',
  });

  //성과지표 목록
  const [arrRsltIdx, setArrRsltIdx] = useState([]);

  let arrRowKey = [];
  let arrGroupKey = [];
  const sharedOnCell = (record, index) => {
    if (arrRowKey.includes(record.a1)) {
      //Merge row key 가 같으면 무조건 rowspan 지정
      return {
        rowSpan: record.a10,
      };
    } else {
      if (record.a10 > 0) {
        if (arrGroupKey.includes(record.a2)) {
          //Merge row key가 다르고 그룹키가 같으면 rowspan = 0
          return {
            rowSpan: 0,
          };
        } else {
          //그룹키가 없으면 신규 merge row
          arrRowKey.push(record.a1);
          arrGroupKey.push(record.a2);
          return {
            rowSpan: record.a10,
          };
        }
      }
      return {};
    }
  };
  // 성과지표 헤더
  const arrRsltIdxColumns = [
    {
      title: '순번',
      dataIndex: 'a1',
      width: 50,
      align: 'center',
    },
    {
      title: '구분',
      dataIndex: 'a2',
      width: 60,
      onCell: sharedOnCell,
      align: 'center',
    },
    {
      title: '세부지표',
      dataIndex: 'a3',
    },
    {
      title: '지표특성',
      dataIndex: 'a4',
      width: 100,
    },
    {
      title: '단위',
      dataIndex: 'a5',
      width: 60,
    },
    {
      title: '핵심여부',
      dataIndex: 'a6',
      width: 80,
    },
    {
      title: '우선순위',
      dataIndex: 'a7',
      width: 80,
    },
    {
      title: '등록일',
      dataIndex: 'a8',
      width: 100,
    },
    {
      title: '수정일',
      dataIndex: 'a9',
      width: 100,
    },
  ];

  //복사
  const [rsltIdxCpyPopupOpen, setRsltIdxCpyPopupOpen] = useState(false);
  const rsltIdxCpyPopupClick = () => {
    setRsltIdxCpyPopupOpen(true);
  };

  //등록
  const [rsltIdxRegPopupOpen, setRsltIdxRegPopupOpen] = useState(false);
  const rsltIdxRegPopupClick = () => {
    setRsltIdxRegPopupOpen(true);
  };

  const searchClick = () => {
    Modal.info({ title: '조회클릭 : ' + JSON.stringify(ojtSrchCnd) });
  };

  // Onload
  useEffect(() => {
    setOjtGroupCodes(getListCommonCd(['a1']));

    setArrRsltIdx([
      {
        a1: 1,
        a2: '생산',
        a3: '시간당 생산량(*)',
        a4: '증가특성',
        a5: '개',
        a6: 'Y',
        a7: '1',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 6,
      },
      {
        a1: 2,
        a2: '생산',
        a3: '제조리드타임(*)',
        a4: '감소특성',
        a5: '시간',
        a6: 'Y',
        a7: '2',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 6,
      },
      {
        a1: 3,
        a2: '생산',
        a3: '영업이익률',
        a4: '증가특성',
        a5: '%',
        a6: 'N',
        a7: '3',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 6,
      },
      {
        a1: 4,
        a2: '생산',
        a3: '생산품목수증가',
        a4: '증가특성',
        a5: '개',
        a6: 'N',
        a7: '4',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 6,
      },
      {
        a1: 5,
        a2: '생산',
        a3: '매출액증가',
        a4: '증가특성',
        a5: '원',
        a6: 'N',
        a7: '5',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 6,
      },
      {
        a1: 6,
        a2: '생산',
        a3: '설비가동률',
        a4: '증가특성',
        a5: '%',
        a6: 'N',
        a7: '6',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 6,
      },
      {
        a1: 7,
        a2: '품질',
        a3: '공정불량률(*)',
        a4: '감소특성',
        a5: 'PPM',
        a6: 'Y',
        a7: '1',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 5,
      },
      {
        a1: 8,
        a2: '품질',
        a3: '불량률(*)',
        a4: '감소특성',
        a5: 'PPM',
        a6: 'Y',
        a7: '2',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 5,
      },
      {
        a1: 9,
        a2: '품질',
        a3: '검사불량률',
        a4: '감소특성',
        a5: 'PPM',
        a6: 'N',
        a7: '3',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 5,
      },
      {
        a1: 10,
        a2: '품질',
        a3: '반품율',
        a4: '감소특성',
        a5: '%',
        a6: 'N',
        a7: '4',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 5,
      },
      {
        a1: 11,
        a2: '품질',
        a3: 'Claim 건수',
        a4: '감소특성',
        a5: '건',
        a6: 'N',
        a7: '5',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 5,
      },
      {
        a1: 12,
        a2: '원가',
        a3: '재공재고(*)',
        a4: '감소특성',
        a5: '%',
        a6: 'Y',
        a7: '1',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 4,
      },
      {
        a1: 13,
        a2: '원가',
        a3: '작업공수',
        a4: '감소특성',
        a5: '시간',
        a6: 'N',
        a7: '2',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 4,
      },
      {
        a1: 14,
        a2: '원가',
        a3: '제품원가',
        a4: '감소특성',
        a5: '원',
        a6: 'N',
        a7: '3',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 4,
      },
      {
        a1: 15,
        a2: '원가',
        a3: '재고비용',
        a4: '감소특성',
        a5: '원',
        a6: 'N',
        a7: '4',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 4,
      },
      {
        a1: 16,
        a2: '납기',
        a3: '납기단축',
        a4: '감소특성',
        a5: '시간',
        a6: 'N',
        a7: '2',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 2,
      },
      {
        a1: 17,
        a2: '납기',
        a3: '수주출하리드타임',
        a4: '감소특성',
        a5: '시간',
        a6: 'N',
        a7: '2',
        a8: '2022-04-25',
        a9: '2022-04-25',
        a10: 2,
      },
      {
        a1: 18,
        a2: '환경',
        a3: '개선율',
        a4: '감소특성',
        a5: '%',
        a6: 'N',
        a7: '1',
        a8: '2022-09-22',
        a9: '2022-04-25',
        a10: 2,
      },
      {
        a1: 19,
        a2: '환경',
        a3: '온실가스 감축 성과',
        a4: '감소특성',
        a5: '건',
        a6: 'N',
        a7: '2',
        a8: '2022-09-22',
        a9: '2022-04-25',
        a10: 2,
      },
    ]);
  }, []);

  return (
    <>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>검색조건 입력</TitleComp>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            key="searchClick"
            className="eu-btn-crud-fine"
            size="small"
            onClick={searchClick}
          >
            조회
          </Button>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="성과지표그룹명" span={1}>
              <Select
                onChange={(value) => ojtChange(value, 'a1', setOjtSrchCnd)}
                options={[
                  {
                    value: '',
                    label: '전체',
                  },
                  ...(ojtGroupCodes?.a1 ? ojtGroupCodes.a1 : []),
                ]}
                value={ojtSrchCnd?.a1}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row className="eu-row-comp-title margin-top">
        <Col span={12}>
          <TitleComp>총 {arrRsltIdx?.length} 건</TitleComp>
        </Col>

        <Col span={12} style={{ textAlign: 'right' }}>
          <Space>
            <Button
              key="copyClick"
              size="small"
              className="eu-btn-crud-fine"
              onClick={rsltIdxCpyPopupClick}
            >
              복사하기
            </Button>
            <Button
              key="regClick"
              size="small"
              className="eu-btn-crud-fine"
              onClick={rsltIdxRegPopupClick}
            >
              등록
            </Button>
          </Space>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24}>
          <Table
            key={'arrRsltIdxTable'}
            columns={arrRsltIdxColumns}
            dataSource={arrRsltIdx}
            size="small"
            bordered
            pagination={false}
            scroll={{ y: 600 }}
          />
        </Col>
      </Row>
      <RsltIdxCpyPopup
        key={'RsltIdxCpyPopup'}
        rsltIdxCpyPopupOpen={rsltIdxCpyPopupOpen}
        setRsltIdxCpyPopupOpen={setRsltIdxCpyPopupOpen}
      />
      <RsltIdxRegPopup
        key={'RsltIdxRegPopup'}
        rsltIdxRegPopupOpen={rsltIdxRegPopupOpen}
        setRsltIdxRegPopupOpen={setRsltIdxRegPopupOpen}
      />
    </>
  );
};

export default RsltIxList01;
