import React, { useState, useEffect } from 'react';
import { Row, Col, Layout, Button, Menu, Tooltip, Tabs, Select, Radio, Checkbox,
  Input, Space, Table, Tag, Upload, Modal, Badge, Calendar, Alert, } from "antd";
import moment from "moment";
import dayjs from 'dayjs';
import { CloseOutlined } from "@ant-design/icons";

import 'css/Common.css';
import 'css/CommonUsr.css';

import solutionImg from "css/images/solution-img/solution-img.png";

const SubPage26 = ({ children }) => {

  const [content, setContent] = useState(false);
  const handleClickButton = e => {
    setContent(e.currentTarget.name);
  };
  const onClose = () => {
    setContent(false);
  };

  const [solExplainData, setSolExplainData] = useState([
    { title: 'PLC', terms: 'Programmable Logic Controller',
      sub1: '자동화제어장비', sub2: '(생산효율최적화)',
      exp: ['각종 센서로부터 신호를 받아 제어기에 신호를 보냄으로써 사람이 지정해둔 대로 로봇이 작동하도록 해주는 장치다.',
            '쉽게 말해 컴퓨터에 두뇌 역할이 CPU라면 공장 자동화에서 전체 하드웨어의 총괄 역할을 하는 것이 PLC다.'],
    },
    { title: 'POP', terms: 'Point Of Production', 
      sub1: '생산시점관리 시스템', sub2: '(공정간 재고 감소, 리드 타임 단축)',
      exp: ['공장의 생산과정헤서 기계, 설비, 작업자, 작업 등에서 시시각각 발생하는 생산정보를 실시간으로 직접 수집, 처리하여 현장관리자에게 제공하는 시스템이다.'],
    },
    { title: 'FEMS', terms: 'Factory Energy Management System',
      sub1: '스마트 공장에너지관리 시스템', sub2: '(에너지 수요 공급 최적화)',
      exp: ['조선, 자동차, 섬유, 석유화학제품과 같은 제조업 등의 생산시설에서 사용하는 에너지를 최소화하기 위한 관리시스템, 생산활동 및 시설 유지에 사용되는 에너지를 모니터링, 분석, 원격 제어함으로써 에너지의 효율적 사용을 도모한다.'],
    },
    { title: 'MES', terms: 'Manufacturing Execution System',
      sub1: '제조실행 시스템', sub2: '(품질개선, 생산성 향상)',
      exp: ['제조 상황을 실시간 모니터링하고 제어할 수 있게 만들어 주기 때문에 스마트공장 구축의 핵심적인 역할을 맡고 있다.',
            '물류 및 작업 내역 추적 관리, 상태파악, 불량 관리 등에 초점을 맞춘 현장용 시스템이다.'],
    },
    { title: 'PLM', terms: 'Product Lifecycle Mabagement', 
      sub1: '제품수명주기관리', sub2: '(설계 개발 리드타임 단축)',
      exp: ['제품 설계를 위한 아이디어 수집과 같이 기획 단계부터 제품 생산을 시작하기 직전까지 관련된 정보를 통합 관리해 주는 시스템.',
            '생산이 들어가기 전, 제품 개발과 설계 단계 프로세스를 도맡아 관리해준다.'],
    },
    { title: 'SCM', terms: 'Supply Chain Management',
      sub1: '공급사슬관리', sub2: '(납기 준수율 향상)',
      exp: ['물건과 정보가 생산자로부터 도매업자, 소매상인, 소비자에게 이동하는 전 과정을 실시간으로 한눈에 볼 수 있으며, 이를 통해 제조업체는 고객이 원하는 제품을 적기에 공급하고 재고를 줄일 수 있다.'],
    },
    { title: 'ERP', terms: 'Enterprise Resource Planning',
      sub1: '전사적 자원관리', sub2: '(업무 프로세스 개선)',
      exp: ['기업의 자금, 회계, 구매, 생산, 판매 등 경영 흐름을 한 눈에 파악할 수 있도록 관리해 주는 시스템이다.',
            '실시간으로 기업 전반의 경영 상태를 확인하고 공유하게 해줘 빠르고 투명한 업무 처리가 가능하다.'],
    },
    { title: 'MRP', terms: 'Material Requirement Planning',
      sub1: '자재소요량 계획', sub2: '(재고 부족 방지, 공급능력 향상)',
      exp: ['제품(특히 조립제품)을 생산함에 있어서 부품(자재)이 투입될 시점과 투입되는 양을 관리하기 위한 계획 또는 시스템이다.'],
    },
    { title: 'PDM', terms: 'Product Data Management',
      sub1: '제품 데이터 관리', sub2: '(생산성 향상 및 개발 주기 시간 단축)',
      exp: ['제품 개발의 정의에서부터 설계, 개발, 제조, 출하 및 고객 서비스에 이르기까지 전반에 걸쳐 제품정보를 통합·관리하는 시스템으로 최근에는 PLM까지 개념이 확장되고 있다.'],
    },
  ])

  const [solEtcTermsData, setSolEtcTermsData] = useState([
    { title: 'ICT', terms: 'Information Communication Technology',
      sub1: '정보통신기술', sub2: '(생산 시스템 최적화)',
      exp: ['정보를 주고받는 것은 물론 개발, 저장, 처리, 관리하는 데 필요한 모든 기술로 스마트공장과 융합되면 자동화 및 정보화되어 전체가 실시간 연동되어 운영된다.',
            '생산성 향상, 에너지 절감, 인간중심의 작업 환경을 구현하고 최적비용과 시간으로 고객 맞춤형 제품을 생산할 수 있다.'] 
    },
    { title: 'IoT', terms: 'Internet of Things',
      sub1: '사물인터넷', sub2: '(실시간 정보 교환)',
      exp: ['인터넷을 기반으로 시간, 장소, 사물 제약 없이 모든 사물이 연결되어 사람과 사물, 사물과 사물간의 정보를 소통하는 지능형 기술 및 서비스다.'] 
    },
    { title: 'IIOT', terms: 'Industrial Internet of Things',
      sub1: '산업용 사물인터넷', sub2: '',
      exp: ['사물인터넷(IoT)의 산업용 버전이다. IoT와 같이 사물에 센서를 부착해 실시간으로 데이터를 인터넷으로 주고받는 기술은 같다. 다만 산업용 목적에 중심을 둬 IoT보다 센서의 응답성이 뛰어나다.'] 
    },
    { title: 'CPS', terms: 'Cyber-Physical Systems',
      sub1: '가상물리 시스템', sub2: '(자율, 능동적으로 설계, 운영 최적화)',
      exp: ['실제 공장에서 사용하는 시스템과 사이버공간의 시스템을 실시간 통합하는 기술이다. 새로운 프로젝트의 테스트를 위해 현재 생산 중인 공정을 멈출 수는 없으니 이런 어려움을 사이버 공간으로 가져가는 것. 미래의 스마트공장은 전면적인 CPS 도입이 필수다.'] 
    },
    { title: 'Digital Twin', terms: '',
      sub1: '디지털 트윈', sub2: '(실시간 분석 용이)',
      exp: ['실시간 연동을 통해 수집된 데이터로 실체와의 차이를 보정한 디지털 복제 모델로 기계 및 장비의 성능, 효율, 수명 등의 정확한 상태 진단 및 예측 등을 지원한다.'] 
    },
    { title: 'Cloud Computing', terms: '',
      sub1: '클라우드 컴퓨팅', sub2: '(비용 절감, 생산성 향상, 속도 및 효율성 증대)',
      exp: ['소프트웨어와 데이터를 인터넷과 연결된 중앙 컴퓨터에 저장해 인터넷에 접속하기만 하면 언제 어디서든 필요한 데이터를 이용할 수 있고 사용한 만큼의 비용만 지불하는 시스템이다.'] 
    },
    { title: 'Edge Computing', terms: '',
      sub1: '에지 컴퓨팅', sub2: '(데이터 처리 시간 단축, 인터넷 대역폭 사용량 감소)',
      exp: ['중앙 집중 서버가 모든 데이터를 처리하는 클라우드 컴퓨팅과 다르게 분산된 소형 서버를 통해 실시간으로 처리하는 기술이다.'] 
    },
  ])


  return(
    <>

      {/* 솔루션 소개 */}
      {/* 홍보관 > 솔루션 소개 */}
      <Row>
        <Col span={24}>

          <div className="eu-solution-wrap sub-tab-cont-wrap">
            <div className="eu-sol-intro flex-row item-center gap-col-48 gap-row-36">
              <img src={solutionImg} alt="솔루션 소개" className="w-fit" />
              <div className="flex-col">
                <div className="tit-blue font-21 text-navy-4 lh-160 pb-22">
                  스마트 공장 공급기업이란 스마트 공장에 서비스를 제공하는 업체입니다.
                </div>
                <div className="font-18 font-bold-500 lh-180">
                  서비스는 스마트공장 솔루션 6가지와 융합한 것으로 스마트공장에서 제품을 생산해낼때 그에 맞는 시스템을 갖추고 
                  공급 또한 스마트공장과 함께 최적화되어서 제공하는 공장을 뜻합니다.  
                  스마트 공장이 국내에서 발전하고 상용화되는 만큼 공급기업에서도 그에 맞게 같이 발전하면서 많아지고 있습니다.
                </div>
              </div>
            </div>

            <div className="headline mt-40">스마트공장 솔루션 용어 소개</div>
            <div className="sol-pc grid-col-5 gap-20">
              {solExplainData.map((item, index) => {
                return (
                  <>
                    <button 
                      className="sol-terms-list" 
                      key={index} 
                      onClick={handleClickButton} 
                      onFocus={handleClickButton} 
                      name={item.title}
                    >
                      <div className="tit">{item.title}</div>
                      <div className="sub">{item.sub1}<br/>{item.sub2}</div>
                    </button>

                    {content === item.title &&
                      <div className="sol-detail">
                        <div className="col-span-1 text-c">
                          <img src={require(`css/images/solution-img/sol-icon-${index + 1}.png`)} alt="용어 아이콘" />
                        </div>
                        <div className="col-span-4 flex-row">
                          <div className="flex-col flex-1">
                            <div className="tit">{item.title} <span className="en">{item.terms}</span></div>
                            <div className="sub">{item.sub1}&nbsp;{item.sub2}</div>
                            <div className="exp">{item.exp[0]}</div>
                            <div className="exp">{item.exp[1]}</div>
                          </div>
                          <Button className="eu-btn-dropdown-arrow" onClick={onClose}>
                            <CloseOutlined className="text-icon-30 ml-auto plr-20 pt-10" />
                          </Button>
                        </div>
                      </div>
                    }
                  </>
                )
              })}
            </div>
            
            {/* 테블릿/모바일 버전 - 스마트공장 솔루션 용어 소개 */}
            <div className="sol-tablet">
              {solExplainData.map((item, index) => {
                return (
                  <div className="sol-detail mt-20 plr-20">
                    <div className="col-span-5">
                      <div className="flex-col flex-1">
                        <div className="flex-row item-center flex-wrap">
                          <div className="tit mr-8">{item.title}</div>
                          <span className="en m-0">{item.terms}</span>
                        </div>
                        <div className="sub">{item.sub1}&nbsp;{item.sub2}</div>
                        <div className="exp">{item.exp[0]}</div>
                        <div className="exp">{item.exp[1]}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="headline mt-40">기타 스마트공장 용어 소개</div>
            <div className="sol-etc">
              {solEtcTermsData.map((item, index) => {
                return (
                  <div className="sol-detail">
                    <div className="col-span-5">
                      <div className="flex-col flex-1">
                        <div className="flex-row item-center flex-wrap">
                          <div className="tit mr-8">{item.title}</div>
                          <span className="en m-0">{item.terms}</span>
                        </div>
                        <div className="sub">{item.sub1}&nbsp;{item.sub2}</div>
                        <div className="exp">{item.exp[0]}</div>
                        <div className="exp">{item.exp[1]}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
        </Col>
      </Row>

    </>
  )
}

export default SubPage26;