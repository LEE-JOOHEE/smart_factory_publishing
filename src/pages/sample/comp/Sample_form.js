import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Input,
  InputNumber,
  DatePicker,
  ConfigProvider,
  Radio,
  Row,
  Select,
  Table,
  Tabs,
  Modal,
  Space,
  Tag,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import {  } from "@ant-design/icons";
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/lib/locale/ko_KR'; // 우린 한국인이니까 ko_KR를 불러옵시다
moment.locale('ko');

const { RangePicker } = DatePicker;

const Sample_form = ({ ojtGroupCodes, searchClick, editable = false }) => {

  const srchClick = () => {
    Modal.info({
      title: '검색..',
    });
  };

  return(
    <>
      <Row className="eu-row-comp-title mt-20">
        <Col span={24}>
          <TitleComp>Form 컴포넌트 디자인 샘플</TitleComp>
        </Col>
      </Row>
      <Row className="eu-row-comp-cont">
        <Col span={24} className="font-16-400">
          안트디자인 다양한 입력폼을 디자인 적용한 샘플입니다.
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>1. &nbsp;{ `<Input />`}&nbsp;</TitleComp>
          <div className="font-16-400">
            기본적으로 100% full 사이즈로 잡혀있지만, 특별히 고정사이즈를 줄 수있다.
            &nbsp;&nbsp;{`ex) style={{ width: "100px" }}`}
          </div>
        </Col>
        <Col span={24} className="mtb-20">
          <Space>
            <Input placeholder="입력하세요" /> 
            <Input className="text-c" placeholder="입력하세요" /> 
            <Input className="text-r" placeholder="입력하세요" />
            <Input style={{ width: "100px" }} placeholder="입력하세요" />
          </Space>
        </Col>
        <Col span={24}>
          <div className="font-16-400">
            {`1. (기본)왼쪽 정렬`}
            <br/>{`<`}<span className="text-red">Input</span> placeholder="입력하세요" {`/>`}
            <br/>{`2. 가운데 정렬`}
            <br/>{`<Input className="`}<span className="text-red">text-c</span>{`" placeholder="입력하세요" />`}
            <br/>{`3. 오른쪽 정렬`}
            <br/>{`<Input className="`}<span className="text-red">text-r</span>{`" placeholder="입력하세요" />`}
            <br/>{`4. 고정 사이즈`}
            <br/>{`<Input style={{ width: "100px" }} placeholder="입력하세요" /> `}
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>2. &nbsp;{ `<InputNumber />`}&nbsp;</TitleComp>
          <div className="font-16-400">
            숫자타입 인풋의 기본사이즈는 90px로 작은 사이즈로 잡혀있지만, Full 사이즈를 줄수도 있다.
            &nbsp;&nbsp;{`ex) className="w-full"`}
          </div>
        </Col>
        <Col span={24} className="mtb-20">
          <Space>
            <InputNumber placeholder="숫자를 입력하세요" /> 
            <InputNumber className="text-r" placeholder="숫자를 입력하세요" /> 
            <InputNumber className="w-full" placeholder="숫자를 입력하세요" /> 
            <InputNumber className="w-full text-r" placeholder="숫자를 입력하세요" /> 
          </Space>
        </Col>
        <Col span={24}>
          <div className="font-16-400">
            {`1. (기본)왼쪽 정렬`}
            <br/>{`<`}<span className="text-red">InputNumber</span> placeholder="숫자를 입력하세요" {`/>`}
            <br/>{`2. 오른쪽 정렬`}
            <br/>{`<InputNumber className="`}<span className="text-red">text-r</span>{`" placeholder="숫자를 입력하세요" />`}
            <br/>{`3. Full 사이즈`}
            <br/>{`<InputNumber className="`}<span className="text-red">w-full</span>{`" placeholder="숫자를 입력하세요" />`}
            <br/>{`4. Full 사이즈 + 숫자 정렬`}
            <br/>{`<InputNumber className="`}<span className="text-red">w-full text-r</span>{`" placeholder="숫자를 입력하세요" />`}
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>3. &nbsp;{ `<Input.Search />`}&nbsp;</TitleComp>
          <div className="font-16-400">
            검색기능 인풋의 기본적으로 100% full 사이즈로 잡혀있으며, 
            <br/>디자인적으로 가장 적합한 사이즈는 450px로 정의하였고, 사이즈는 화면에 맞춰 적절하게 사용한다. &nbsp;&nbsp;{`ex) style={{ width: 450 }}`} 
          </div>
        </Col>
        <Col span={24} className="mt-20">
          <Input.Search placeholder="검색어를 입력하세요" onSearch={srchClick} />
        </Col>
        <Col span={24} className="mt-10">
          <Input.Search placeholder="검색" onSearch={srchClick} style={{ width: 450 }} />
        </Col>
        <Col span={24} className="mt-20">
          <div className="font-16-400">
            {`1. (기본) Full 사이즈`}
            <br/>{`<`}<span className="text-red">Input.Search</span> placeholder="검색어를 입력하세요" {`onSearch={srchClick} />`}
            <br/>{`2. 고정 사이즈`}
            <br/>{`<Input.Search placeholder="검색" onSearch={srchClick}`}
            &nbsp;<span className="text-red">{`style={{ width: 450 }}`}</span>{` />`}
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>4. &nbsp;{ `<Select />`}&nbsp;</TitleComp>
          <div className="font-16-400">
            기본적으로 100% full 사이즈로 잡혀있지만, 
            <br/>{`<Space>, <Descriptions>, <Table>`} 같은 컴포넌트 내부에 존재할때 option값의 길이에 따라 width가 결정되므로
            <br/>특별히 고정사이즈를 주어 사이즈를 적당하게 맞춰야 한다. &nbsp;&nbsp;{`ex) style={{ width: 250 }}`}
          </div>
        </Col>
        <Col span={24} className="mt-20">
          <Row className="eu-row-page-comp-layout">
            <div className="font-16-400 mb-16">
              {`1. (기본) Full 사이즈`}
              <br/>{`<`}<span className="text-red">Select </span>{`dropdownAlign={{ offset: [0, 1] }} />`}
            </div>
            <Select dropdownAlign={{ offset: [0, 1] }} />
          </Row>

          <Row className="eu-row-page-comp-layout mt-20">
            <Col span={24}>
              <div className="font-16-400 mb-16">
                {`2. 옵션 텍스트 길이에 따라 동적인 width 확인`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`※ <Space>로 select를 감싸주면 선택된값의 텍스트길이에 사이즈 맞춤`}
                <br/>{`<Space>`}
                <br/>&nbsp;&nbsp;{`<`}<span className="text-red">Select </span>
                  {`dropdownAlign={{ offset: [0, 1] }} defaultValue={''} options={[{value: '', label: '선택'},]} />`}
                <br/>&nbsp;&nbsp;{`<`}<span className="text-red">Select </span>
                  {`dropdownAlign={{ offset: [0, 1] }} defaultValue={''} options={[{value: '', label: '선택하세요'},]} />`}
                <br/>{`</Space>`}
              </div>
              <Space>
                <Select
                  dropdownAlign={{ offset: [0, 1] }}
                  defaultValue={''}
                  options={[{value: '', label: '선택'},]}
                />
                <Select
                  dropdownAlign={{ offset: [0, 1] }}
                  defaultValue={''}
                  options={[{value: '', label: '선택하세요'},{value: '1', label: '선택'},]}
                />
              </Space>
            </Col>
          </Row>

          <Row className="eu-row-page-comp-layout mt-20">
            <Col span={24}>
              <div className="font-16-400 mb-16">
                {`3. 고정사이즈`}
                <br/>{`<`}<span className="text-red">Select </span>
                  {`dropdownAlign={{ offset: [0, 1] }} defaultValue={''} options={[{value: '', label: '선택'},]}`}
                  <span className="text-red"> style={`{{ width: 250 }}`}</span>{` />`}
              </div>
              <Select
                dropdownAlign={{ offset: [0, 1] }}
                style={{ width: 250 }}
                defaultValue={''}
                options={[{value: '', label: '선택하세요'},]}
              />
            </Col>
          </Row>

          <Row className="eu-row-page-comp-layout mt-20">
            <Col span={24}>
              <div className="font-16-400">
                {`4. 옵션박스(드롭다운) - 말줄임(ellipsis)`}
              </div>
              <Row gutter={(0, 40)}>
                <Col span={12} style={{ borderRight : '1px solid #eee' }}>
                  <div className="font-16-400 mtb-16">
                    {`- 기본값은 말줄임 안함`}
                    <br/>{`<`}<span className="text-red">Select </span>
                      {`dropdownAlign={{ offset: [0, 1] }} defaultValue={'1'} style={{ width: 250 }}>`}
                    <br/>&nbsp;&nbsp;{`<Select.Option value={'1'}>옵션1: 사업자가 사업~~~</Select.Option>`}
                    <br/>&nbsp;&nbsp;{`<Select.Option value={'2'}>옵션2: 제공된~~~</Select.Option>`}
                    <br/>&nbsp;&nbsp;{`<Select.Option value={'3'}>옵션3: 기업정보~~~</Select.Option>`}
                    <br/>&nbsp;&nbsp;{`<Select.Option value={'4'}>옵션4: 보유 정보가~~~</Select.Option>`}
                    <br/>{`</Select>`}
                  </div>
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 1] }}
                    style={{ width: 250 }}
                    defaultValue={'1'}
                  >
                    <Select.Option value={'1'}>옵션1: 사업자가 사업 신청시 본 동의서를 제출한 시점 이후</Select.Option>
                    <Select.Option value={'2'}>옵션2: 제공된 복적달성 후에는 중소기업 지원사업 통합관리시스템의 효율적인 운영을 위해 필요한 범위 내에서만 보유.이용</Select.Option>
                    <Select.Option value={'3'}>옵션3: 기업정보 수집시점 : 신청 및 수혜기업의 사업 신청 이전 3개년부터 참여 이후 10년간</Select.Option>
                    <Select.Option value={'4'}>옵션4: 보유 정보가 없을 경우 수집하지 않음</Select.Option>
                  </Select>
                </Col>
                <Col span={12}>
                  <div className="font-16-400 mtb-16">
                    {`- 말줄임 … 표시`}
                    <br/>{`<`}<span className="text-red">Select </span>
                      {`dropdownAlign={{ offset: [0, 1] }} defaultValue={'1'} style={{ width: 250 }}>`}
                    <br/>&nbsp;&nbsp;{`<Select.Option className="`}<span className="text-red">ellipsis</span>
                      {`" value={'1'}>옵션1: 사업자가 사업~~~</Select.Option>`}
                    <br/>&nbsp;&nbsp;{`<Select.Option className="`}<span className="text-red">ellipsis</span>
                      {`" value={'2'}>옵션2: 제공된~~~</Select.Option>`}
                    <br/>&nbsp;&nbsp;{`<Select.Option className="`}<span className="text-red">ellipsis</span>
                      {`" value={'3'}>옵션3: 기업정보~~~</Select.Option>`}
                    <br/>&nbsp;&nbsp;{`<Select.Option className="`}<span className="text-red">ellipsis</span>
                      {`" value={'4'}>옵션4: 보유 정보가~~~</Select.Option>`}
                    <br/>{`</Select>`}
                  </div>
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 1] }}
                    style={{ width: 250 }}
                    defaultValue={'1'}
                  >
                    <Select.Option className="ellipsis" value={'1'}>옵션1: 사업자가 사업 신청시 본 동의서를 제출한 시점 이후</Select.Option>
                    <Select.Option className="ellipsis" value={'2'}>옵션2: 제공된 복적달성 후에는 중소기업 지원사업 통합관리시스템의 효율적인 운영을 위해 필요한 범위 내에서만 보유.이용</Select.Option>
                    <Select.Option className="ellipsis" value={'3'}>옵션3: 기업정보 수집시점 : 신청 및 수혜기업의 사업 신청 이전 3개년부터 참여 이후 10년간</Select.Option>
                    <Select.Option className="ellipsis" value={'4'}>옵션4: 보유 정보가 없을 경우 수집하지 않음</Select.Option>
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="eu-row-page-comp-layout mt-20">
            <Col span={24} style={{ height: "430px" }}>
              <div className="font-16-400 mb-16">
                {`5. 옵션박스(드롭다운) - 높이값 제어 방법`}
                <div className="mt-16">
                  - 기본적으로 최대사이즈 max-height(256px) 이후 스크롤처리
                </div>
                - 팝업이나 테이블 등 
                <span className="text-blue mlr-4">높이값이 좁은 공간에서</span>
                사용할때 이슈가 자주 발생해 문제 시 높이값 조절할 수 있습니다.
                <div className="font-12">
                  * 최대 보여질 option 갯수로 설정하는 방법은 적용되지 않았음
                </div>
              </div>
              <Space>
                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  style={{ width: 250 }}
                  open={true}
                  defaultValue={'1'}
                >
                  <Select.Option value={'1'}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                  <Select.Option value={''}>기본드롭다운</Select.Option>
                </Select>

                <Select
                  getPopupContainer={trigger => trigger.parentNode}
                  dropdownAlign={{ offset: [0, 0] }}
                  listHeight={100}
                  style={{ width: 250 }}
                  open={true}
                  defaultValue={'1'}
                >
                  <Select.Option value={'1'}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                  <Select.Option value={''}>높이조절</Select.Option>
                </Select>

                <div className="font-16-400 ml-20">
                  → 드롭다운 높이 100px 설정 예시<br/>
                  {`<Select`}<span className="text-red mlr-4">{`listHeight={100}`}</span>{`/>`}
                </div>

              </Space>
            </Col>

          </Row>
        </Col>

        <Col span={24} className="mb-20 eu-row-page-comp-layout">
          <div className="font-14-400">※ 셀렉트 이슈</div>
          <div className="font-14-500">
            - 옵션영역(dropdown)이 각자의 부모 select를 따라가지 못하고 벗어나거나 최상위로 뜨지않는 이슈 (특히, 팝업에서 z-index 영향)
            <br/>&nbsp;&nbsp;&nbsp;└ 해결방법 : 
            <span className="text-blue">{`getPopupContainer={trigger => trigger.parentNode}`}</span>
            <br/>- 디자인적으로 드롭다운 위치가 경우에따라 미세하게 어긋나는 이슈가 있어 수동적으로 조절이 매번 필요함
            <br/>&nbsp;&nbsp;&nbsp;└ 해결방법 : 
            <span className="text-blue">{`dropdownAlign={{ offset: [0, 0] }} 또는 {{ offset: [0, 1] }}`}</span>
          </div>
        </Col>
        <Col span={24}>
          <Row gutter={( 0, 20 )}>
            <Col span={6}>
              <div className="h5 mb-4">비정상</div>
              <Select
                className="ant-select-focused"
                defaultOpen={true}
                options={[{value: '', label: '선택하세요 1'},]}
                defaultValue={''}
              />
            </Col>
            <Col span={6}>
              <div className="h5 mb-4">정상</div>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                className="ant-select-focused"
                defaultOpen={true}
                options={[{value: '', label: '선택하세요 2'},]}
                defaultValue={''}
              />
            </Col>
            <Col span={6}>
              <div className="h5 mb-4">비정상</div>
              <Select
                dropdownAlign={{ offset: [0, 0] }}
                className="ant-select-focused"
                defaultOpen={true}
                options={[{value: '', label: '선택하세요 3'},]}
                defaultValue={''}
              />
            </Col>
            <Col span={6}>
              <div className="h5 mb-4">정상</div>
              <Select
                dropdownAlign={{ offset: [0, 1] }}
                className="ant-select-focused"
                defaultOpen={true}
                options={[{value: '', label: '선택하세요 4'},]}
                defaultValue={''}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <div className="font-16-500 mt-30">※ 정상 코드 샘플</div>
          <div className="font-14-400 mb-8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            (또, 경우에 따라 다를 수 있으므로 세트 적용 후 화면 확인하면서 조절해야함)</div>
          <Row gutter={( 0, 60 )}>
            <Col span={12} style={{ borderRight : '2px dashed #ddd' }}>
              <div className="font-16-400">
                {`<Select`}
                <br/>&nbsp;&nbsp;<span className="text-red">{`getPopupContainer={trigger => trigger.parentNode}`}</span>
                <br/>&nbsp;&nbsp;<span className="text-red">{`dropdownAlign={{ offset: [0, 0] }}`}</span>
                <br/>&nbsp;&nbsp;{`options={[{value: '', label: '선택하세요 2'},]}`}
                <br/>&nbsp;&nbsp;{`defaultValue={''}`}
                <br/>{`/>`}
              </div>
            </Col>
            <Col span={12}>
              <div className="font-16-400">
                {`<Select`}
                <br/>&nbsp;&nbsp;<span className="text-red">{`dropdownAlign={{ offset: [0, 1] }}`}</span>
                <br/>&nbsp;&nbsp;{`options={[{value: '', label: '선택하세요 4'},]}`}
                <br/>&nbsp;&nbsp;{`defaultValue={''}`}
                <br/>{`/>`}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60">
        <Col span={24}>
          <TitleComp>5. &nbsp;{ `<DatePicker />`}&nbsp;</TitleComp>
          <div className="font-16-400">
            기본적으로 고정사이즈가 있고, {`<DatePicker>, <RangePicker>`} 같은 달력 종류에 따라 width가 결정되므로
            <br/>max나 min 사이즈를 지정해주거나 사이즈를 적당하게 맞춰야 한다. &nbsp;&nbsp;{`ex) style={{ width: 250 }}`}
          </div>
        </Col>
        <Col span={24} className="mtb-20">
          <ConfigProvider locale={locale}>
            기본 사이즈 : <DatePicker className="mb-8" /><br/>
            최소 사이즈 : <DatePicker style={{ width: '165px' }} /><br/>
            기본 사이즈 : <RangePicker className="mt-16 mb-8"/><br/>
            최소 사이즈 : <RangePicker style={{ width: '320px' }} /><br/>
            기본 사이즈 : <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" className="mt-16 mb-8" /><br/>
            최소 사이즈 : <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ width: '450px' }} />
          </ConfigProvider>
        </Col>
        <Col span={24}>
          <div className="font-16-400">
            {`1. 닐찌만`}
            <br/>{`<ConfigProvider locale={locale}>`}
            <br/>&nbsp;&nbsp;{`<`}<span className="text-red">DatePicker </span>{`style={{ minWidth: '165px' }} />`}
            <br/>{`</ConfigProvider>`}
            <br/>{`2. 시작일 - 종료일`}
            <br/>{`<`}<span className="text-red">RangePicker </span>{`style={{ minWidth: '320px' }} />`}
            <br/>{`3. 시작일 - 종료일 - 시간`}
            <br/>{`<`}<span className="text-red">RangePicker </span>{`showTime format="YYYY-MM-DD HH:mm:ss" style={{ minWidth: '450px' }} />`}
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-title mt-60" gutter={(0, 40)}>
        <Col span={24}>
          <TitleComp>6. &nbsp;{ `<Radio /> , <Checkbox />`}&nbsp;</TitleComp>
          <div className="font-16-400">
            단일선택 라디오버튼, 다중선택 체크박스로 다양한 곳에 사용할수 있으며, 
            <br/>1줄에 inline 스타일로 라디오와 체크박스가 들어갈수도 있고, 여러줄(block 스타일)로 사용될수도 있다.
            <br/>설문조사 폼(className="eu-survey")에서는 특별한 사용 양식이 존재한다.
          </div>
        </Col>
        <Col span={12} className="mtb-20" style={{ borderRight : '2px dashed #ddd' }}>
          <Radio.Group defaultValue={'보통'}>
            <Radio value={'전혀아니다'}>전혀아니다</Radio>
            <Radio value={'아니다'}>아니다</Radio>
            <Radio value={'보통'}>보통</Radio>
            <Radio value={'그렇다'}>그렇다</Radio>
            <Radio value={'매우그렇다'}>매우그렇다</Radio>
          </Radio.Group>
          <div className="font-16-400 mt-16">
            {`<`}<span className="text-red">Radio.Group</span> {`defaultValue={'보통'}>`}
            <br/>&nbsp;&nbsp;{`<`}<span className="text-red">Radio</span> {`value={'전혀아니다'}>전혀아니다</Radio>`}
            <br/>&nbsp;&nbsp;{`<`}<span className="text-red">Radio</span> {`value={'아니다'}>아니다</Radio>`}
            <br/>&nbsp;&nbsp;{`<`}<span className="text-red">Radio</span> {`value={'보통'}>보통</Radio>`}
            <br/>&nbsp;&nbsp;{`<`}<span className="text-red">Radio</span> {`value={'그렇다'}>그렇다</Radio>`}
            <br/>&nbsp;&nbsp;{`<`}<span className="text-red">Radio</span> {`value={'매우그렇다'}>매우그렇다</Radio>`}
            <br/>{`<`}<span className="text-red">/Radio.Group</span>{`>`}
          </div>
        </Col>
        <Col span={12} className="mtb-20">
          <Checkbox.Group defaultValue={['봄', '여름', '가을']}>
            <Checkbox value={'봄'}>봄</Checkbox>
            <Checkbox value={'여름'}>여름</Checkbox>
            <Checkbox value={'가을'}>가을</Checkbox>
            <Checkbox value={'겨울'}>겨울</Checkbox>
          </Checkbox.Group>
          <div className="font-16-400 mt-16">
            {`<`}<span className="text-red">Checkbox.Group</span> {`defaultValue={['봄', '여름', '가을']}>`}
            <br/>&nbsp;&nbsp;{`<`}<span className="text-red">Checkbox</span> {`value={'봄'}>봄</Checkbox>`}
            <br/>&nbsp;&nbsp;{`<`}<span className="text-red">Checkbox</span> {`value={'여름'}>여름</Checkbox>`}
            <br/>&nbsp;&nbsp;{`<`}<span className="text-red">Checkbox</span> {`value={'가을'}>가을</Checkbox>`}
            <br/>&nbsp;&nbsp;{`<`}<span className="text-red">Checkbox</span> {`value={'겨울'}>겨울</Checkbox>`}
            <br/>{`<`}<span className="text-red">/Checkbox.Group</span>{`>`}
          </div>
        </Col>
        <Col span={12} className="mtb-20" style={{ borderRight : '2px dashed #ddd' }}>
          <Radio.Group defaultValue={'불만족'}>
            <Row className="mb-10">
              <Radio value={'불만족'}>불만족</Radio>
            </Row>
            <Row className="mb-10">
              <Radio value={'만족'}>만족</Radio>
            </Row>
          </Radio.Group>
          <div className="font-16-400">
            {`<`}<span className="text-red">Radio.Group</span> {`defaultValue={'불만족'}>`}
            <br/>&nbsp;&nbsp;{`<Row className="mb-10">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<`}<span className="text-red">Radio</span> {`value={'불만족'}>불만족</Radio>`}
            <br/>&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`<Row className="mb-10">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<`}<span className="text-red">Radio</span> {`value={'만족'}>만족</Radio>`}
            <br/>&nbsp;&nbsp;{`</Row>`}
            <br/>{`<`}<span className="text-red">/Radio.Group</span>{`>`}
          </div>
        </Col>
        <Col span={12} className="mtb-20">
          <Checkbox.Group defaultValue={['naver', 'kakao']}>
            <Row className="mb-10">
              <Checkbox value={'naver'}>네이버</Checkbox>
            </Row>
            <Row className="mb-10">
              <Checkbox value={'kakao'} disabled>카카오</Checkbox>
            </Row>
          </Checkbox.Group>
          <div className="font-16-400">
            {`<`}<span className="text-red">Checkbox.Group</span> {`defaultValue={['naver', 'kakao']}>`}
            <br/>&nbsp;&nbsp;{`<Row className="mb-10">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<`}<span className="text-red">Checkbox</span> {`value={'naver'}>네이버</Checkbox>`}
            <br/>&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`<Row className="mb-10">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<`}<span className="text-red">Checkbox</span> {`value={'kakao'} disabled>카카오</Checkbox>`}
            <br/>&nbsp;&nbsp;{`</Row>`}
            <br/>{`<`}<span className="text-red">/Checkbox.Group</span>{`>`}
          </div>
        </Col>
        <Col span={12} className="mtb-20" style={{ borderRight : '2px dashed #ddd' }}>
          <Row>
            <Col span={24}>
              <Radio.Group defaultValue={'만족'}>
                <Row className="mb-10">
                  <Radio value={'불만족'}>불만족</Radio>
                  <Input className="flex-1" />
                </Row>
                <Row className="mb-20">
                  <Radio value={'만족'}>만족&nbsp;&nbsp;&nbsp;&nbsp;</Radio>
                  <Input className="flex-1" />
                  <Button className="eu-btn-crud-fine">조회</Button>
                </Row>
              </Radio.Group>
            </Col>
            <Col span={24}>
              <Checkbox.Group defaultValue={['1', '2']}>
                <Row className="mb-10">
                  <Checkbox value={'1'}>선택 1</Checkbox>
                  <Input className="flex-1" />
                </Row>
                <Row className="mb-10">
                  <Checkbox value={'2'}>선택하세요 2</Checkbox>
                  <Input className="flex-1" />
                  <Button className="eu-btn-crud-default">초기화</Button>
                </Row>
              </Checkbox.Group>
            </Col>
          </Row>
          <div className="font-16-400">
            {`<`}<span className="text-red">Radio.Group</span> {`defaultValue={'만족'}>`}
            <br/>&nbsp;&nbsp;{`<Row className="mb-10">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<`}<span className="text-red">Radio</span> {`value={'불만족'}>불만족</Radio>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Input className="flex-1" />`}
            <br/>&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;{`<Row className="mb-20">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<`}<span className="text-red">Radio</span> {`value={'만족'}>만족&nbsp;&nbsp;&nbsp;&nbsp;</Radio>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Input className="flex-1" />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-crud-fine">조회</Button>`}
            <br/>&nbsp;&nbsp;{`</Row>`}
            <br/>{`<`}<span className="text-red">/Radio.Group</span>{`>`}
          </div>
        </Col>
        <Col span={12} className="mtb-20">
          <div className="eu-survey">
            <div className="question">
              1. 설문조사 양식
            </div>
            <div className="answer">
              <Checkbox.Group defaultValue={['1']}>
                <Row className="mb-10">
                  <Checkbox value={'1'}>1. TV</Checkbox>
                </Row>
                <Row className="mb-4">
                  <Checkbox value={'2'}>2. 신문</Checkbox>
                  <Input className="flex-1" />
                </Row>
                <Row className="mb-10">
                  <Checkbox value={'3'}>3. 기타</Checkbox>
                  <Input className="flex-1" />
                </Row>
              </Checkbox.Group>
            </div>
          </div>
          <div className="font-16-400">
            {`<div className="eu-survey">`}
            <br/>&nbsp;&nbsp;{`<div className="question">1. 설문조사 양식</div>`}
            <br/>&nbsp;&nbsp;{`<div className="answer">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<`}<span className="text-red">Checkbox.Group</span> {`defaultValue={['1']}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="mb-10">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<`}<span className="text-red">Checkbox</span> {`value={'1'}>1. TV</Checkbox>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="`}<span className="text-red">mb-4</span>{`">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<`}<span className="text-red">Checkbox</span> {`value={'2'}>2. 신문</Checkbox>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Input className="flex-1" />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Row className="mb-10">`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<`}<span className="text-red">Checkbox</span> {`value={'3'}>3. 기타</Checkbox>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Input className="flex-1" />`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Row>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<`}<span className="text-red">/Checkbox.Group</span>{`>`}
            <br/>&nbsp;&nbsp;{`</div>`}
            <br/>{`</div>`}
          </div>
        </Col>
      </Row>



    </>
  );
}
  
export default Sample_form;