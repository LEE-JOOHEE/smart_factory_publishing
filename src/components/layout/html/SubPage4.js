import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Pagination,
  Input, Space, Checkbox, Table, Tag, Modal } from "antd";
import TechSignPopup from 'pages/mg/tr/te/er/techResultRegist/popup/TechSignPopup';
import SubPage4pop1 from 'components/layout/html/SubPage4_pop_1';
import SubPage4pop2 from 'components/layout/html/SubPage4_pop_2';
import editIcon from 'css/images/user-icons/edit-icon.png';

const SubPage4 = ({ children }) => {

  const [cmEvlMfcmSgnPopupOpen, setCmEvlMfcmSgnPopupOpen] = useState(false);
  const [cmEvlMfcmSgnPopupOpen2, setCmEvlMfcmSgnPopupOpen2] = useState(false);
  const moreClick = () => {
    setCmEvlMfcmSgnPopupOpen(true);
  };
  const detailClick = () => {
    setCmEvlMfcmSgnPopupOpen2(true);
  };

  //솔루션
  const checkData = [
    { value: '1', label: 'MES(POP)' },
    { value: '2', label: 'ERP' },
    { value: '3', label: 'PLM' },
    { value: '4', label: 'SCM' },
    { value: '5', label: '기타' },
    { value: '6', label: 'FEMS' },
    { value: '7', label: '기타 자동화설비' },
    { value: '8', label: '5G' },
    { value: '9', label: '빅데이터(AI)' },
    { value: '10', label: 'APS' },
    { value: '11', label: '제어시스템' },
    { value: '12', label: '컨트롤러' },
    { value: '13', label: '센서' },
    { value: '14', label: '식별시스템(RFID,바코드)' },
    { value: '15', label: '머신비전' },
    { value: '16', label: '산업용 로봇' },
    { value: '17', label: '클라우드(신규)' },
    { value: '18', label: '클라우드(기존 고도화)' },
    { value: '19', label: '클라우드(전환)' },
    { value: '20', label: 'AR/VR' },
    { value: '21', label: 'CPS' },
    { value: '22', label: 'ICT연계 간이 생산시스템' },
  ]
  const [checkedList, setCheckedList] = useState(['1']);
  const onChange = (list) => {
    setCheckedList(list);
    if(list.length >= 3){
      alert("최대 3개까지 선택할 수 있습니다.");
    }
  };

  //지역
  const checkData2 = [
    { value: '1', label: '서울' },
    { value: '2', label: '부산' },
    { value: '3', label: '인천' },
    { value: '4', label: '대구' },
    { value: '5', label: '광주' },
    { value: '6', label: '대전' },
    { value: '7', label: '울산' },
    { value: '8', label: '세종' },
    { value: '9', label: '경기' },
    { value: '10', label: '경기북부' },
    { value: '11', label: '강원' },
    { value: '12', label: '충북' },
    { value: '13', label: '충남' },
    { value: '14', label: '전북' },
    { value: '15', label: '전남' },
    { value: '16', label: '경북' },
    { value: '17', label: '포항' },
    { value: '18', label: '경남' },
    { value: '19', label: '제주' },
  ]

  //업종 (전문/특화)
  const checkData3 = [
    { value: '1', label: '식료품 제조업' },
    { value: '2', label: '음료 제조업' },
    { value: '3', label: '담배 제조업' },
    { value: '4', label: '섬유제품 제조업(의복 제외)' },
    { value: '5', label: '의복. 의복 액세서리 및 모피제품 제조업' },
    { value: '6', label: '가죽. 가방 및 신발 제조업' },
    { value: '7', label: '목재 및 나무제품 제조업(가구 제외)' },
    { value: '8', label: '펄프. 종이 및 종이제품 제조업' },
    { value: '9', label: '인쇄 및 기록매체 복제업' },
    { value: '10', label: '코크스. 연탄 및 석유정제품 제조업' },
    { value: '11', label: '화학 물질 및 화학제품 제조업(의약품 제외)' },
    { value: '12', label: '의료용 물질 및 의약품 제조업' },
    { value: '13', label: '고무 및 플라스틱제품 제조업' },
    { value: '14', label: '비금속 광물제품 제조업' },
    { value: '15', label: '1차 금속 제조업' },
    { value: '16', label: '금속 가공제품 제조업(기계 및 가구 제외)' },
    { value: '17', label: '전자 부품. 컴퓨터. 영상. 음향 및 통신장비 제조업' },
    { value: '18', label: '의료. 정밀. 광학 기기 및 시계 제조업' },
    { value: '19', label: '전기장비 제조업' },
    { value: '20', label: '기타 기계 및 장비 제조업' },
    { value: '21', label: '자동차 및 트레일러 제조업' },
    { value: '22', label: '기타 운송장비 제조업' },
    { value: '23', label: '가구 제조업' },
    { value: '24', label: '기타 제품 제조업' },
    { value: '25', label: '산업용 기계 및 장비 수리업' },
  ]

  //사업유형
  const checkData4 = [
    { value: '1', label: '스마트공장 구축 및 고도화' },
    { value: '2', label: '업종별 특화' },
    { value: '3', label: '대중소 상생형' },
    { value: '4', label: '디지털 클러스터' },
    { value: '5', label: 'K-스마트등대공장' },
    { value: '6', label: '데이터인프라구축' },
    { value: '7', label: '인공지능스마트공장' },
    { value: '8', label: '탄소중립형스마트공장' },
  ]

  //페이징
  const [current, setCurrent] = useState(3);
  const onChangePage = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return(
    <>
      {/* 맞춤 공급기업 정보 */}
      {/* 사업안내 > 맞춤 공급기업 정보 */}
      <Row className="mb-10">
        <Col span={12} md={12} sm={12} xs={24}>
          <Space>
            <div className="headline mb-4 mr-16">솔루션</div>
            <div className="eu-table-indicator">
              <div className="count">총
                <span className="text-blue font-bold-500 ml-4">{checkData ? checkData.length : 0}</span>건
              </div>
            </div>
          </Space>
        </Col>
        <Col span={12} className="mt-auto" md={12} sm={12} xs={24}>
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red ml-auto">*최대 3개까지 선택할 수 있습니다.</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="eu-custom-description-style-gray">
            <table key={''} summary="테이블정보">
              <tbody>
              <tr>
                <td className="plr-0">
                  <Checkbox.Group 
                    options={checkData}
                    value={checkedList}
                    onChange={onChange}
                  />
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>

      <Row className="mb-10 mt-40">
        <Col span={12} md={12} sm={12} xs={24}>
          <Space>
            <div className="headline mb-4 mr-16">지역</div>
            <div className="eu-table-indicator">
              <div className="count">총
                <span className="text-blue font-bold-500 ml-4">{checkData2 ? checkData2.length : 0}</span>건
              </div>
            </div>
          </Space>
        </Col>
        <Col span={12} className="text-r mt-auto" md={12} sm={12} xs={24}>
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red ml-auto">*최대 5개까지 선택할 수 있습니다.</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="eu-custom-description-style-gray">
            <table key={''} summary="테이블정보">
              <tbody>
              <tr>
                <td className="plr-0">
                  <Checkbox.Group options={checkData2} defaultValue={['1', '2', '3']} />
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>

      <Row className="mb-10 mt-40">
        <Col span={12} md={12} sm={24} xs={24}>
          <Space>
            <div className="headline mb-4 mr-16">업종 (전문/특화)</div>
            <div className="eu-table-indicator">
              <div className="count">총
                <span className="text-blue font-bold-500 ml-4">{checkData3 ? checkData3.length : 0}</span>건
              </div>
            </div>
          </Space>
        </Col>
        <Col span={12} className="text-r mt-auto" md={12} sm={24} xs={24}>
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red ml-auto">*최대 5개까지 선택할 수 있습니다.</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="eu-custom-description-style-gray">
            <table key={''} summary="테이블정보">
              <tbody>
              <tr>
                <td className="plr-0">
                  <Checkbox.Group options={checkData3} defaultValue={['1']} />
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>

      <Row className="mb-10 mt-40">
        <Col span={12} md={12} sm={12} xs={24}>
          <Space>
            <div className="headline mb-4 mr-16">사업유형</div>
            <div className="eu-table-indicator">
              <div className="count">총
                <span className="text-blue font-bold-500 ml-4">{checkData4 ? checkData4.length : 0}</span>건
              </div>
            </div>
          </Space>
        </Col>
        <Col span={12} className="text-r mt-auto" md={12} sm={12} xs={24}>
          <div className="eu-table-indicator">
            <span className="font-16-400 text-red ml-auto">*최대 8개까지 선택할 수 있습니다.</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="eu-custom-description-style-gray">
            <table key={''} summary="테이블정보">
              <tbody>
              <tr>
                <td className="plr-0">
                  <Checkbox.Group options={checkData4} defaultValue={['1']} />
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>


      <div className="task-tag-wrap">
        <Space size={[0, 'small']} wrap>
          <Tag closable>MES</Tag>
          <Tag closable>AI</Tag>
          <Tag closable>세종</Tag>
          <Tag closable>대중소상생형</Tag>
          <Tag closable>MES</Tag>
        </Space>
        <Button className="eu-btn-crud-fine ml-auto">조건 초기화</Button>
      </div>
      <Row className="usr-search-form">
        <Col span={24}>
          <div className="flex-row">
            <Input placeholder="기업명을 입력해 주세요." />
            <Button className="eu-btn-crud-default plr-44">검색</Button>
          </div>
        </Col>
      </Row>

      <Row className="usr-task-form mt-44 mb-12">
        <Col span={4} md={4} sm={24} xs={24} className="mt-auto">
          <div className="eu-table-indicator">
            <div className="count">총
              <span className="text-blue font-bold-500 ml-4">{checkData4 ? checkData4.length : 0}</span>건
            </div>
          </div>
        </Col>
        <Col span={20} md={20} sm={24} xs={24}>
          <Space className="space-full">
            <div className="sel-wrap">
              <div className="font-17-500">종사자 규모</div>
              <Select
                className="flex-1"
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                options={[
                  {value: '전체', label: '전체'},
                  {value: '1', label: '10인미만'},
                  {value: '2', label: '10인이상~30인미만'},
                  {value: '3', label: '30인이상~50인미만'},
                  {value: '4', label: '50인이상~100인미만'},
                  {value: '5', label: '100인이상~200인미만'},
                  {value: '6', label: '200인이상'},
                ]}
                defaultValue={'전체'}
              />
            </div>
            <div className="sel-wrap">
              <div className="font-17-500">매출규모</div>
              <Select
                className="flex-1"
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                options={[
                  {value: '전체', label: '전체'},
                  {value: '1', label: '10억미만'},
                  {value: '2', label: '10억이상~50억미만'},
                  {value: '3', label: '50억이상~100억미만'},
                  {value: '4', label: '100억이상~300억미만'},
                  {value: '5', label: '300억이상~500억미만'},
                  {value: '5', label: '500억이상~1000억미만'},
                  {value: '6', label: '1000억이상'},
                ]}
                defaultValue={'전체'}
              />
            </div>
            <div className="sel-wrap">
              <div className="font-17-500">정렬</div>
              <Select
                className="flex-1"
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                options={[
                  {value: '정렬', label: '정렬'},
                  {value: '구축건수', label: '구축건수'},
                  {value: '우수구축', label: '우수구축'},
                  {value: '최신순', label: '최신순'},
                  {value: '지역별', label: '지역별'},
                ]}
                defaultValue={'정렬'}
              />
            </div>
          </Space>
        </Col>
      </Row>

      <Row>
        <Col span={24} className="ent-box-wrap">
          <div className="ent-box">
            <div class="ent-tit">
              <Button type="link" className="eu-btn-link-usr w-fit" onClick={detailClick}>
                (주)신생공급
              </Button>
              <Button type="link" className="eu-btn-link blank" onClick={moreClick}>
                <img src={editIcon} alt="수정아이콘" className="ml-6" />
              </Button>
            </div>
            <div class="con-box">          
              <div class="bg-col">구축건수</div>          
              <div class="value">10건</div>
              <div class="bg-col">소재지</div>
              <div class="value">서울</div>
              <div class="bg-col">종사자규모</div>
              <div class="value">15명</div>
              <div class="bg-col">매출규모(억)</div>
              <div class="value">10억(2020)</div>
              <div class="bg-col">만족도(5점)</div>  
              <div class="value">3.66</div>
              <div class="bg-col solution-tit">제공솔루션</div>
              <div class="value solution text-ellipsis" 
                title="ERP, MES, SCM, AI, 빅데이터 ERP, MES, SCM, AI, 빅데이터 ERP, MES, SCM, AI, 빅데이터">
                ERP, MES, SCM, AI, 빅데이터
                ERP, MES, SCM, AI, 빅데이터
                ERP, MES, SCM, AI, 빅데이터
              </div>
              <div class="etc">* 예비공급기업</div>
              <div class="bg-col industry-tit">특화업종</div>
              <div class="value industry text-ellipsis" title="식품 컴퓨터 및 주변장치, 소프트웨어 도매업을 목적으로 대표이사 정광남에 의해 (주)나이스테크 설립 (본점:서울시 구로구 구로동 106-8)">
                식품
                컴퓨터 및 주변장치, 소프트웨어 도매업을 목적으로 대표이사 정광남에 의해 (주)나이스테크 설립 (본점:서울시 구로구 구로동 106-8)
              </div>
            </div>
          </div>
          <div className="ent-box">
            <div class="ent-tit">
              <Button type="link" className="eu-btn-link-usr w-fit" onClick={detailClick}>
                주식회사 태성소프트기술 태성소프트기술 태성소프트기술
              </Button>
              <Button type="link" className="eu-btn-link blank" onClick={moreClick}>
                <img src={editIcon} alt="수정아이콘" className="ml-6" />
              </Button>
            </div>
            <div class="con-box">          
              <div class="bg-col">구축건수</div>          
              <div class="value">10건</div>
              <div class="bg-col">소재지</div>
              <div class="value">서울</div>
              <div class="bg-col">종사자규모</div>
              <div class="value">15명</div>
              <div class="bg-col">매출규모(억)</div>
              <div class="value">10억(2020)</div>
              <div class="bg-col">만족도(5점)</div>  
              <div class="value">3.66</div>
              <div class="bg-col solution-tit">제공솔루션</div>
              <div class="value solution text-ellipsis" 
                title="ERP, MES, SCM, AI, 빅데이터 ERP, MES, SCM, AI, 빅데이터 ERP, MES, SCM, AI, 빅데이터">
                ERP, MES, SCM, AI, 빅데이터
                ERP, MES, SCM, AI, 빅데이터
                ERP, MES, SCM, AI, 빅데이터
                ERP, MES, SCM, AI, 빅데이터
                ERP, MES, SCM, AI, 빅데이터
                ERP, MES, SCM, AI, 빅데이터
                ERP, MES, SCM, AI, 빅데이터
              </div>
              {/* etc 데이터 없을때 border-l-0(왼쪽 라인 지워주는 클래스 적용) */}
              <div class="etc border-l-0"></div>
              <div class="bg-col industry-tit">특화업종</div>
              <div class="value industry text-ellipsis" title="식품 컴퓨터 및 주변장치, 소프트웨어 도매업을 목적으로 대표이사 정광남에 의해 (주)나이스테크 설립 (본점:서울시 구로구 구로동 106-8)">
                식품
                컴퓨터 및 주변장치, 소프트웨어 도매업을 목적으로 대표이사 정광남에 의해 (주)나이스테크 설립 (본점:서울시 구로구 구로동 106-8)
                컴퓨터 및 주변장치, 소프트웨어 도매업을 목적으로 대표이사 정광남에 의해 (주)나이스테크 설립 (본점:서울시 구로구 구로동 106-8)
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* table 구조가 아니라서 페이징 따로 구현해야 할것 같습니다 */}
      <Pagination total={1000} className="mt-60 text-c" showSizeChanger={false} />








      
      <SubPage4pop1
        key="TechSignPopup"
        cmEvlMfcmSgnPopupOpen={cmEvlMfcmSgnPopupOpen}
        setCmEvlMfcmSgnPopupOpen={setCmEvlMfcmSgnPopupOpen}
      />
      <SubPage4pop2
        key="TechSignPopup2"
        cmEvlMfcmSgnPopupOpen2={cmEvlMfcmSgnPopupOpen2}
        setCmEvlMfcmSgnPopupOpen2={setCmEvlMfcmSgnPopupOpen2}
      />
    </>
  )
}

export default SubPage4;