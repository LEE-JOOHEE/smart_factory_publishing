import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, 
  Input, Space, Table, Tag, Upload, Modal, Radio, Checkbox, Descriptions } from "antd";
import { DownloadOutlined, FolderOpenOutlined, StarOutlined, UploadOutlined } from "@ant-design/icons";

import 'css/Common.css';

const SubPage11_1 = ({ children }) => {

  //주력업종
  const checkData = [
    { value: '1', label: '자동차 부품' },
    { value: '2', label: '기계·장비' },
    { value: '3', label: '금속가공' },
    { value: '4', label: '고무제품·플라스틱' },
    { value: '5', label: '전자부품 등' },
    { value: '6', label: '전기장비' },
    { value: '7', label: '화학제품' },
    { value: '8', label: '1차 금속' },
    { value: '9', label: '섬유제품' },
    { value: '10', label: '식료품 ' },
    { value: '11', label: '의료정밀기기' },
    { value: '12', label: '기타 제조업' },
    { value: '13', label: '비제조업' },
  ];

  //전문분야
  const checkData2 = [
    { value: '1', label : 'MES' },
    { value: '2', label : 'PLM' },
    { value: '3', label : 'SCM' },
    { value: '4', label : 'APS' },
    { value: '5', label : 'ERP' },
    { value: '6', label : 'CPS' },
    { value: '7', label : 'POP' },
    { value: '8', label : 'IoT기술' },
    { value: '9', label : '공장자동화' },
    { value: '10', label : '인공지능' },
    { value: '11', label : '빅데이터 분석' },
    { value: '12', label : '클라우드 컴퓨팅' },
    { value: '13', label : '5G' },
    { value: '14', label : '스마트센서' },
    { value: '15', label : 'TPM' },
    { value: '16', label : '로봇활용 공정혁신' },
    { value: '17', label : '품질혁신' },
    { value: '18', label : 'LEAN' },
    { value: '19', label : '6-SIGMA' },
    { value: '20', label : 'CAD/CAM/CAE' },
    { value: '21', label : '3D프린팅' },
    { value: '22', label : 'POOL PROOF' },
    { value: '23', label : 'AR/VR 등' },
  ]

  return(
    <>

      {/* 전문가신청 */}
      {/* 회원정보 > 전문가신청 */}
      <Row className="sub-tab-cont-wrap">
        <Col span={24}>
          <div className="headline req-r mb-14">주력업종</div>
          <div className="eu-custom-description-style-gray">
            <table key={''} summary="테이블정보">
              <tbody>
              <tr>
                <td>
                  <Checkbox.Group 
                    options={checkData}
                    defaultValue={['10']}>
                  </Checkbox.Group>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col span={24}>
          <div className="headline req-r mb-14 mt-40">전문분야</div>
          <Descriptions size="small" bordered>
            <Descriptions.Item labelStyle={{display: 'none'}} span={3} className="p-20">
              <Checkbox.Group 
                options={checkData2}
                defaultValue={['10']}>
              </Checkbox.Group>
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={24}>
          <div className="headline req-r mb-14 mt-40">주요지역(TP 구분)</div>
          <Descriptions size="small" bordered>
            <Descriptions.Item label="본사지역" style={{ width: '200px' }}>
              <Select
                getPopupContainer={trigger => trigger.parentNode}
                dropdownAlign={{ offset: [0, 0] }}
                options={[
                  {
                    value: '전체',
                    label: '전체',
                  },
                ]}
                value={'전체'}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={24}>
          <div className="headline mb-14 mt-40">신상정보</div>
          <Descriptions size="small" bordered column={{ md: 2, sm: 1, xs: 1 }}>
            <Descriptions.Item label="성명" span={1}>진정국</Descriptions.Item>
            <Descriptions.Item label="로그인ID" span={2}>admin</Descriptions.Item>
            <Descriptions.Item label="생년월일" span={1}>1990-03-05</Descriptions.Item>
            <Descriptions.Item label="성별" span={2}>남</Descriptions.Item>
            <Descriptions.Item label={<span className="req-l">휴대폰번호</span>} span={1}>
              <Space className="space-full flex-1 flex-wrap">
                <div className="flex-row gap-6 item-center">
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 0] }}
                    style={{ minWidth: '80px'}}
                    options={[
                      {
                        value: '010',
                        label: '010',
                      },
                    ]}
                    value={'010'}
                  />
                </div>
                <div className="flex-row gap-6 item-center">
                  - <Input placeholder="9614" style={{ minWidth: '80px'}} />
                </div>
                <div className="flex-row gap-6 item-center">
                  - <Input placeholder="8188" style={{ minWidth: '80px'}} />
                </div>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label={<span className="req-l">이메일</span>} span={2}>
              <Space className="space-full flex-1 flex-wrap">
                <div className="flex-row gap-6 item-center">
                  <Input placeholder="jhlee" style={{ minWidth: '100px'}} />
                  <span>@</span>
                </div>
                  <Input placeholder="euclidsoft" style={{ minWidth: '100px'}} />
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 0] }}
                    style={{ minWidth: '100px'}}
                    options={[
                      {
                        value: 'co.kr',
                        label: 'co.kr',
                      },
                    ]}
                    value={'co.kr'}
                  />
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="산학연특 구분" span={3}>
              <Radio.Group defaultValue={'1'}>
                <Radio value={'1'}>산업계</Radio>
                <Radio value={'2'}>학계</Radio>
                <Radio value={'3'}>특급기술자</Radio>
                <Radio value={'4'}>연구소</Radio>
              </Radio.Group>
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={24}>
          <div className="headline mb-14 mt-40">소속기관정보</div>
          <Descriptions size="small" bordered column={{ md: 2, sm: 1, xs: 1 }}>
            <Descriptions.Item label={<span className="req-l">회사명</span>} span={3}>
              <Input placeholder="회사명" />
            </Descriptions.Item>
            <Descriptions.Item label={<span className="req-l">본사 전화번호</span>} span={1}>
              <Space className="space-full flex-1 flex-wrap">
                <div className="flex-row gap-6 item-center">
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 0] }}
                    style={{ minWidth: '80px'}}
                    options={[
                      {
                        value: '010',
                        label: '010',
                      },
                    ]}
                    value={'010'}
                  />
                </div>
                <div className="flex-row gap-6 item-center">
                  - <Input placeholder="0000" style={{ minWidth: '80px'}} />
                </div>
                <div className="flex-row gap-6 item-center">
                  - <Input placeholder="0000" style={{ minWidth: '80px'}} />
                </div>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label={<span className="req-l">본사 팩스번호</span>} span={2}>
              <Space className="space-full flex-1 flex-wrap">
                <div className="flex-row gap-6 item-center">
                  <Select
                    getPopupContainer={trigger => trigger.parentNode}
                    dropdownAlign={{ offset: [0, 0] }}
                    style={{ minWidth: '80px'}}
                    options={[
                      {
                        value: '010',
                        label: '010',
                      },
                    ]}
                    value={'010'}
                  />
                </div>
                <div className="flex-row gap-6 item-center">
                  - <Input placeholder="0000" style={{ minWidth: '80px'}} />
                </div>
                <div className="flex-row gap-6 item-center">
                  - <Input placeholder="0000" style={{ minWidth: '80px'}} />
                </div>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label={<span className="req-l">본사주소</span>} span={3}>
              <Space className="space-full flex-wrap">
                <div className="flex-row gap-6 item-center">
                  <Input style={{ minWidth: '70px'}} />
                  <Button className="eu-btn-crud-default ml-0 plr-16">우편번호찾기</Button>
                </div>
                <Input placeholder="주소를 입력하세요." style={{ minWidth: '194px'}} />
              </Space>
            </Descriptions.Item>
          </Descriptions>
        </Col>

        <Col span={24}>
          <div className="org-chart-wrap-bdr mt-50 ptb-30 plr-40 ">
            <div className="req-l">
              신청 버튼은 평가위원의 상세정보수정이 완료되었음을 기정원 담당자에게 전달하는 기능이므로 
              전문분야에서 학력사항, 지적재산권에 이르는 탭의 내용이 정확히 입력되었는지 
              <br/>확인 후 클릭해 주시기 바랍니다.
            </div>
            <div className="req-l mt-20">
              <span className="font-bold-500 text-black">(주의사항)</span>
              <br/>2021년 전문가 Pool관리 지침의 변경으로 인하여 ["전문가Pool신청서", "윤리실천 서약서"]를 제출해주셔야 합니다.
              <br/>{`자료 업로드 경로는 [전문가신청 > 자격포상탭 > '추가'버튼 클릭 > '기타(전문가 등록 신청서, 청렴 윤리 실천 서약서)'] 에 추가하시면 됩니다.`}
              <br/>필히 신청 전 상기 자료 업로드 부탁드립니다.
            </div>
          </div>
        </Col>
        <Col span={24} className="text-r mt-50">
          <Button className="eu-btn-crud-warning">임시저장</Button>
        </Col>
        
      </Row>
    </>
  )
}

export default SubPage11_1;