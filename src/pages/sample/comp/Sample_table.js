import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Input,
  Radio,
  Row,
  Select,
  Table,
  Tabs,
  Modal,
  Space,
  Tag,
  Card,
  Tree,
  Transfer,
  Typography, DatePicker,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import {  } from "@ant-design/icons";
import { PlusOutlined, MinusOutlined, ArrowRightOutlined } from '@ant-design/icons';
const { Title } = Typography;

const Sample_table = ({ ojtGroupCodes, searchClick, editable = false }) => {
  const columns = [
    {
      title: '순번',
      dataIndex: 'a1',
      width: '30%',
      align: 'center',
    },
    {
      title: '이름',
      dataIndex: 'a2',
      width: '30%',
      align: 'left',
    },
    {
      title: '금액',
      dataIndex: 'a3',
      width: '30%',
      align: 'right',
    },
  ];

  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      a1: '1',
      a2: '홍길동',
      a3: '5,000',
    },
  ]);


  const arrObjcAplyColumns = [
    {
      title: '사업연도',
      dataIndex: 'a1',
      width: '6%',
      align: 'center',
    },
    {
      title: '사업명',
      dataIndex: 'a2',
      width: '9%',
      align: 'center',
    },
    {
      title: '과제번호',
      dataIndex: 'a3',
      width: '15%',
    },
    {
      title: '과제명',
      dataIndex: 'a4',
      width: '11%',
      align: 'center',
    },
    // {
    //   title: '공급기업',
    //   dataIndex: 'a5',
    //   width: '8%',
    //   align: 'center',
    // },
    // {
    //   title: '신청유형',
    //   dataIndex: 'a6',
    //   width: '13%',
    //   align: 'center',
    // },
    // {
    //   title: '신청일자',
    //   dataIndex: 'a7',
    //   width: '9%',
    //   align: 'center',
    // },
    // {
    //   title: '진행상태',
    //   dataIndex: 'a8',
    //   width: '10%',
    //   align: 'center',
    // },
    // {
    //   title: '접수일자',
    //   dataIndex: 'a9',
    //   width: '9%',
    //   align: 'center',
    // },
    // {
    //   title: '처리결과',
    //   dataIndex: 'a10',
    //   width: '10%',
    //   align: 'center',
    // },
  ];
  const [arrObjcAply, setArrObjcAply] = useState([]);
  useEffect(() => {
    let tmp = [];
    for (let idx = 1; idx <= 200; idx++) {
      tmp.push({
        key: idx,
        a1: '2022',
        a2: 'TEST사업' + idx,
        a3: '2021-15R-000-00000' + idx,
        a4: '테스트과제' + idx,
        a5: '공급기업',
        a6: '평가결과 이의신청',
        a7: '2022-09-1' + idx,
        a8: idx === 1 ? '신청' : idx === 2 ? '접수' : '검토결과확정',
        a9: idx > 1 ? '2022-09-1' + idx : '',
        a10: idx === 1 ? '' : idx === 2 ? '' : '불허(원안확정)',
      });
    }
    setArrObjcAply(tmp);
  }, []);


  return(
    <>

      <h1 className="mt-0">테이블 종류</h1>
      <Row className="eu-row-comp-title">
        <Col span={12}>
          <TitleComp>1. 안트디자인 {`<Descriptions />`}</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-500 text-red">{`<Descriptions size="small" bordered>`}</div>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Descriptions size="small" bordered>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Descriptions.Item label="사업년도" span={3}>2023년</Descriptions.Item>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Descriptions.Item label="이름" span={2}>홍길동</Descriptions.Item>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Descriptions.Item label="나이" span={1}>28세</Descriptions.Item>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Descriptions>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Descriptions size="small" bordered>
                <Descriptions.Item label="사업년도" span={3}>2023년</Descriptions.Item>
                <Descriptions.Item label="이름" span={2}>홍길동</Descriptions.Item>
                <Descriptions.Item label="나이" span={1}>28세</Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-30">
        <Col span={24}>
          <TitleComp>1-1. Descriptions 정렬 이슈</TitleComp>
        </Col>
        <Col span={11}>
          <div className="font-18 mb-10">
            ※ 데이터가 없을때 발생하는 이슈 (기본비율)
          </div>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Descriptions size="small" bordered>
                <Descriptions.Item label="사업년도" span={3}></Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Col>
        <Col span={2} className="text-c"><ArrowRightOutlined className="text-icon-30 mt-80" /></Col>
        <Col span={11}>
          <div className="font-18 mb-10">
            ※ 5:5 비율 적용 방법
          </div>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Descriptions size="small" bordered>
                <Descriptions.Item label="사업년도" span={3} className="w-50"></Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <div className="font-16-400">
            - 기본비율 : <br/>
            {`<Descriptions.Item label="사업년도" span={3}></Descriptions.Item>`}
            <div className="mt-16">- 5:5 비율적용 : </div>
            {`<Descriptions.Item label="사업년도" span={3}`} 
              <span className="text-red ml-4">className="w-50"</span>{`></Descriptions.Item>`}
            <br/>{`<Descriptions.Item label="사업년도" span={3}`} 
              <span className="text-red ml-4">{`style={{ width: "50%" }}`}</span>{`></Descriptions.Item>`}
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-30">
        <Col span={24}>
          <TitleComp>1-2. Descriptions 라벨의 text길이가 너무 길때</TitleComp>
        </Col>
        <Col span={10}>
          <Descriptions bordered size="small">
            <Descriptions.Item label="긴글자를 비율에따라 강제로 깰수있다" span={2} className="break">1</Descriptions.Item>
            <Descriptions.Item label={<div>긴글자를<br/>강제로<br/>개행시킬수 있다</div>} span={1}>2</Descriptions.Item>
            <Descriptions.Item label="짧은글자" span={2}>3</Descriptions.Item>
            <Descriptions.Item label="긴글자긴글자긴글자" span={1}>4</Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={24} className="mt-16">
          <div className="font-16-400">
            {`1. <Descriptions.Item label="긴글자를 비율에따라 강제로 깰수있다" span={2}`}
            <span className="text-red ml-4">className="break"</span>{`>1</Descriptions.Item>`}
            <br/>
            {`2. <Descriptions.Item`}
              <span className="text-red mlr-4">
                {`label={<div>긴글자를<br/>강제로<br/>개행시킬수 있다</div>}`}
              </span>
              {`span={1}>2</Descriptions.Item>`}
          </div>
        </Col>
      </Row>

      {/* <Row className="eu-row-comp-title mt-30">
        <Col span={24}>
          <TitleComp>1-2. Descriptions 컬럼 & span 이슈</TitleComp>
        </Col>
        <Col span={24}>
          <div className="font-18 mb-10">
            ※ 컬럼 : 기본 3컬럼 (컬럼 증가 가능)
          </div>
          <Row className="eu-row-page-comp-layout">
            <Col span={24} className="mb-20">
              <Descriptions size="small" bordered>
                <Descriptions.Item label="컬럼1" span={1} style={{width: "200px"}}>텍스트</Descriptions.Item>
                <Descriptions.Item label="컬럼2" span={2} style={{width: "100px"}}>텍스트</Descriptions.Item>
                <Descriptions.Item label="컬럼3" span={1} style={{width: "200px"}}>텍스트</Descriptions.Item>
                <Descriptions.Item label="컬럼4" span={2} style={{width: "100px"}}>텍스트</Descriptions.Item>
                <Descriptions.Item label="컬럼5" span={1} style={{width: "200px"}}>텍스트</Descriptions.Item>
              </Descriptions>
            </Col>
            <Col span={24} className="mb-20">
              <Descriptions size="small" bordered column={5}>
                <Descriptions.Item label="컬럼1" span={1} className="w-10"></Descriptions.Item>
                <Descriptions.Item label="컬럼2" span={1} className="w-10"></Descriptions.Item>
                <Descriptions.Item label="컬럼3" span={1} className="w-10"></Descriptions.Item>
                <Descriptions.Item label="컬럼4" span={1} className="w-10"></Descriptions.Item>
                <Descriptions.Item label="컬럼5" span={1} className="w-10"></Descriptions.Item>
              </Descriptions>
            </Col>
            <Col span={24}>
              <Descriptions size="small" bordered column={5}>
                <Descriptions.Item label="컬럼1" span={3} className="w-10"></Descriptions.Item>
                <Descriptions.Item label="컬럼2" span={2} className="w-10"></Descriptions.Item>
                <Descriptions.Item label="컬럼3" span={2} className="w-10"></Descriptions.Item>
                <Descriptions.Item label="컬럼4" span={1} className="w-10"></Descriptions.Item>
                <Descriptions.Item label="컬럼5" span={1} className="w-10"></Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Col>
      </Row> */}

      <Row className="eu-row-comp-title mt-60">
        <Col span={12}>
          <TitleComp>2. 안트디자인 {`<Table />`}</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-500 text-red">{`<Table size="small" bordered />`}</div>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered `}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`columns={columns}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`dataSource={dataSource}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`pagination={false} `}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`scroll={{ y: 300 }} `}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`/>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Table size="small" bordered 
                columns={columns}
                dataSource={dataSource}
                pagination={false} 
                scroll={{ y: 300 }} 
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Col span={24} className="mt-16">
        <span className="font-16-400 text-blue">※ 체크박스가 있는 테이블에서
          체크박스 비율이 찌그러져 보인다면 Ant 테이블에 className="table-layout-fixed" 추가!!<br/>
        </span>
        <div className="font-16-500 text-red">{`<Table size="small" bordered className="table-layout-fixed" />`}</div>
      </Col>

      <Row className="eu-row-comp-title mt-60">
        <Col span={12}>
          <TitleComp>2-1. 안트디자인 {`<Table />`} 하늘색 스타일(사용자 추가)</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-500 text-red">{`<Table size="small" bordered className="eu-antable-style-skyblue" />`}</div>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Table size="small" bordered`}
            <span className="text-red ml-4">{`className="eu-antable-style-skyblue"`}</span>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`columns={columns}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`dataSource={dataSource}`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`pagination={false} `}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`scroll={{ y: 300 }} `}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`/>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <Table size="small" bordered className="eu-antable-style-skyblue"
                columns={columns}
                dataSource={dataSource}
                pagination={false} 
                scroll={{ y: 300 }} 
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={12}>
          <TitleComp>3. 커스텀 {`<Table />`}</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-500 text-red">{`<div className="eu-custom-description-table">`}</div>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="eu-custom-description-table">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<table key={''} summary="테이블정보">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<colgroup>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<col width={'10%'} />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</colgroup>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<tbody>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td rowSpan={3} className="header">주관기관</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td className="header">협약기관명</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td>협약기관명1</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td className="header">대표자</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td>아무개</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td className="header">주소</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td colspan={3}>세종특별자치시 중앙집현7로</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</tbody>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</table>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <div className="eu-custom-description-table">
                <table key={''} summary="테이블정보">
                  <colgroup>
                    <col width={'10%'} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td rowSpan={3} className="header">주관기관</td>
                    </tr>
                    <tr>
                      <td className="header">협약기관명</td>
                      <td>협약기관명1</td>
                      <td className="header">대표자</td>
                      <td>아무개</td>
                    </tr>
                    <tr>
                      <td className="header">주소</td>
                      <td colspan={3}>세종특별자치시 중앙집현7로</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br/><br/>
              <div className="eu-custom-description-table">
                <table
                  key={'ojtBfrBizCtTable'}
                  summary="변경 전 사업비 변경"
                >
                  <colgroup>
                    <col width={'20%'} />
                    <col width={'20%'} />
                    <col width={'20%'} />
                    <col width={'20%'} />
                    <col width={'20%'} />
                  </colgroup>
                  <thead>
                    <tr>
                      <td className={'header'} rowSpan="2">구분</td>
                      <td className={'header'} colSpan="3">도입기업</td>
                      <td className={'header border-r-0'} rowSpan="2">전담기관</td>
                    </tr>
                    <tr>
                      <td className={'header'}>중도금(현금)</td>
                      <td className={'header'}>잔금(현금)</td>
                      <td className={'header'}>소계</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={'header'}>지급액</td>
                      <td><Input placeholder="중도금"/></td>
                      <td><Input placeholder="잔금"/></td>
                      <td><Input placeholder="소계"/></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={12}>
          <TitleComp>4-1. 커스텀-그레이 {`<Table />`} [description 스타일]</TitleComp>
        </Col>
        <Col span={12}>
          <div className="font-16-500 text-red">{`<div className="eu-custom-description-style-gray">`}</div>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Row className="eu-row-page-comp-layout">`}
            <br/>&nbsp;&nbsp;{`<Col span={24}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="eu-custom-description-style-gray">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<table key={''} summary="테이블정보">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<colgroup>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<col width={'20%'} />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<col width={'80%'} />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</colgroup>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<tbody>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td className="header">제목</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td>내용</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td className="header">제목</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td>내용<br/>내용<br/>내용</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td className="header">제목</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<td className="font-16-500 text-black">내용</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</tbody>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</table>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
            <br/>&nbsp;&nbsp;{`</Col>`}
            <br/>{`</Row>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <div className="eu-custom-description-style-gray">
                <table key={''} summary="테이블정보">
                  <colgroup>
                    <col width={'20%'} />
                    <col width={'80%'} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td className="header">제목</td>
                      <td>내용</td>
                    </tr>
                    <tr>
                      <td className="header">제목</td>
                      <td>내용<br/>내용<br/>내용</td>
                    </tr>
                    <tr>
                      <td className="header">제목</td>
                      <td className="font-16-500 text-black">내용</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={12} className="mt-40">
          <TitleComp>4-2. 커스텀 - 그레이 {`<Table />`} [antd table 스타일]</TitleComp>
          <div className="font-16-400">
            {`<thead>`}
            <br/>&nbsp;&nbsp;{`<tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<th className="header">컬럼1</th>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<th className="header border-r-0">컬럼2</th>`}
            <br/>&nbsp;&nbsp;{`</tr>`}
            <br/>{`</thead>`}
            <br/>{`<tbody>`}
            <br/>&nbsp;&nbsp;{`<tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<td className="border-r text-c">제목</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<td>내용</td>`}
            <br/>&nbsp;&nbsp;{`</tr>`}
            <br/>&nbsp;&nbsp;{`<tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<td className="border-r text-c">제목</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<td>내용<br/>내용<br/>내용</td>`}
            <br/>&nbsp;&nbsp;{`</tr>`}
            <br/>&nbsp;&nbsp;{`<tr>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<td className="border-r text-c">제목</td>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<td className="font-16-500 text-black">내용</td>`}
            <br/>&nbsp;&nbsp;{`</tr>`}
            <br/>{`</tbody>`}
          </div>
        </Col>
        <Col span={12}>
          <Row className="eu-row-page-comp-layout">
            <Col span={24}>
              <div className="eu-custom-description-style-gray">
                <table key={''} summary="테이블정보">
                  <colgroup>
                    <col width={'40%'} />
                    <col width={'60%'} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="header">컬럼1</th>
                      <th className="header border-r-0">컬럼2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-r text-c">제목</td>
                      <td>내용</td>
                    </tr>
                    <tr>
                      <td className="border-r text-c">제목</td>
                      <td>내용<br/>내용<br/>내용</td>
                    </tr>
                    <tr>
                      <td className="border-r text-c">제목</td>
                      <td className="font-16-500 text-black">내용</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={12}>
          <TitleComp>5. 페이징(pagination) </TitleComp>
          <div className="font-16-400">
            - 페이징 기본 설정은 SizeChanger 박스가 없습니다.
          </div>
        </Col>
        <Col span={24}>
          <div className="font-16-400 mb-16">
            {`<Table`}<span className="text-red">&nbsp;{`pagination={true}`}</span>&nbsp;{`/>`}
          </div>
        </Col>
        <Col className="eu-row-page-comp-layout">
          <Table
            key={'ObjcProcessSttus02Table'}
            columns={arrObjcAplyColumns}
            dataSource={arrObjcAply}
            size="small"
            bordered
            pagination={true}
            scroll={{ y: 100 }}
          />
        </Col>
        <Col span={24}>
          <div className="font-16-400 mtb-16">
            - 페이징 SizeChanger 박스가 필요할 때는 pagination에 size='default'를 주고 설정합니다.
            <br/>{`<Table`}<span className="text-red">
            <br/>&nbsp;&nbsp;{`pagination={{`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`pageSizeOptions: ['10', '25', '50', '100'],`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`size: 'default',`}
            <br/>&nbsp;&nbsp;{`}}`}</span>
            <br/>{`/>`}
          </div>
        </Col>
        <Col className="eu-row-page-comp-layout">
          <Table
            key={'ObjcProcessSttus02Table'}
            columns={arrObjcAplyColumns}
            dataSource={arrObjcAply}
            size="small"
            bordered
            pagination={{
              // showSizeChanger: true,
              // showQuickJumper: true,
              // defaultPageSize: 25,
              pageSizeOptions: ['10', '25', '50', '100'],
              // position: ['bottomLeft'],
              // size: 'small',
              size: 'default',
            }}
            scroll={{ y: 100 }}
          />
        </Col>

      </Row>


      
    </>
  );
}
  
export default Sample_table;