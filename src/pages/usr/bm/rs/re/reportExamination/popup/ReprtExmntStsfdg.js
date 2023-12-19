import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  Col,
  Descriptions,
  Input,
  Radio,
  Row,
  Space,
  Tabs,
} from 'antd';
import 'css/Common.css';
import { Button, Modal } from 'antd/lib';
import TitleComp from 'components/layout/TitleComp';
import { ojtChange } from 'components/common/Common';

const ReprtExmntStsfdg = ({
  reprtExmntStsfdgOpen,
  setReprtExmntStsfdgOpen,
}) => {
  const [ojtBscStts, setOjtBscStts] = useState({
    a1: '스마트공장 구축 및 고도화 사업(기초)',
    a2: '(주)공급기업',
    a3: '홍길동',
  });

  const [ojtBscSttsChg, setOjtBscSttsChg] = useState({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
  });
  const [ojtSrvyRslt, setOjtSrvyRslt] = useState({});

  const [arrBizDgstfn, setArrBizDgstfn] = useState([
    {
      title: 'A1.사업지원 절차에 대해 얼마나 만족하십니까?',
      list: [
        {
          title: '사업 공고의 적정성 (접근성,이해도,기한 등)',
          type: 'radio',
          key: 'a1',
        },
        { title: '지원 절차의 합리성/체계성', type: 'radio', key: 'a2' },
        {
          title:
            '공급기업 및 전문가 매칭방법의 적정성(Pool의 적절성과 재매칭 가능여부 등)',
          type: 'radio',
          key: 'a3',
        },
      ],
    },
    {
      title: 'A2.선정평가에 대해 얼마나 만족하십니까?',
      list: [
        {
          title: '신청자격 및 제한의 적절성',
          type: 'radio',
          key: 'a4',
        },
        { title: '평가 기준의 적절성', type: 'radio', key: 'a5' },
        {
          title: '과제선정 및 평가결과 통보 과정의 합리성',
          type: 'radio',
          key: 'a6',
        },
        {
          title: ' 평가위원의 전문성 및 태도',
          type: 'radio',
          key: 'a7',
        },
      ],
    },
    {
      title: 'A3.행정 절차에 대해 얼마나 만족하십니까?',
      list: [
        {
          title: '행정서류 제출 요청 기한의 충분성',
          type: 'radio',
          key: 'a8',
        },
        { title: '행정서류 제출 절차의 편의성', type: 'radio', key: 'a5' },
        {
          title: '행정처리 관련 대응의 신속성',
          type: 'radio',
          key: 'a9',
        },
        {
          title: '행정처리 관련 대응의 정확성',
          type: 'radio',
          key: 'a10',
        },
        {
          title: '사업비 지급의 신속성',
          type: 'radio',
          key: 'a11',
        },
        {
          title: '사업비 관리 및 정산의 편의성',
          type: 'radio',
          key: 'a12',
        },
      ],
    },
    {
      title: 'A4.지원기간과 지원금액에 대해 얼마나 만족하십니까?',
      list: [
        {
          title: '지원 기간의 충분성',
          type: 'radio',
          key: 'a13',
        },
        { title: '지원 금액의 적정성', type: 'radio', key: 'a5' },
        {
          title: '적정한 지원기간',
          type: 'input',
          key: 'a14',
        },
        {
          title: '적정한 지원금액',
          type: 'input',
          key: 'a15',
        },
      ],
    },
    {
      title: 'A5.전담기관에 대해 전반적으로 얼마나 만족하십니까?',
      list: [
        {
          title: '전반적 만족도',
          type: 'input',
          key: 'a16',
        },
      ],
    },
    {
      title: 'A6.불만이나 개선(건의사항)을 적어주세요.',
      list: [
        {
          title: '불만이나 개선(건의사항)을 적어주세요',
          type: 'input',
          key: 'a17',
        },
      ],
    },
  ]);

  const [arrSplyEntDgstfn, setArrSplyEntDgstfn] = useState([
    {
      title:
        'B1.귀 사는 스마트공장 도입 시 공급기업에게 받은 혜택에 대해 얼마나 만족하십니까?',
      list: [
        {
          title: '기술전문가 현장 방문을 통한 직접 자문',
          type: 'radio',
          key: 'b1',
        },
        { title: '기술 전문가 전화 및 이메일 상담', type: 'radio', key: 'b2' },
        {
          title: '연구자료 또는 기술정보자료 제공 등',
          type: 'radio',
          key: 'b3',
        },
        {
          title: '기술교육,세미,심포지엄 회의 등 참석 안내',
          type: 'radio',
          key: 'b4',
        },
        {
          title: '기술전문가 현장 방문을 통한 직접 자문',
          type: 'input',
          key: 'b5',
        },
        { title: '기술 전문가 전화 및 이메일 상담', type: 'input', key: 'b6' },
        {
          title: '연구자료 또는 기술정보자료 제공 등',
          type: 'input',
          key: 'b7',
        },
        {
          title: '기술교육,세미,심포지엄 회의 등 참석 안내',
          type: 'input',
          key: 'b8',
        },
      ],
    },
    {
      title:
        'B2.스마트공장 공급기업의 현장분석 및 시스템 설계역량에 대해 얼마나 만족하십니까?',
      list: [
        {
          title: '현장분석 역량',
          type: 'radio',
          key: 'b9',
        },
        {
          title: ' 귀사 요구사항에 대한 반영 정도',
          type: 'radio',
          key: 'b10',
        },
        {
          title: '요구사항 반영시의 적긍성',
          type: 'radio',
          key: 'b11',
        },
        {
          title: '현장 방문 및 진행사항에 대한 공유 정도',
          type: 'radio',
          key: 'b12',
        },
        {
          title: '제안 가격의 적정성',
          type: 'radio',
          key: 'b13',
        },
        {
          title: '신청자격 및 제한의 적절성',
          type: 'radio',
          key: 'b14',
        },
      ],
    },
    {
      title:
        'B3.스마트공장 공급기업의 스마트공장 솔루션 구축 및 개발결과에 대해 얼마나 만족하십니까?',
      list: [
        {
          title: ' 투입 기술자의 전문성',
          type: 'radio',
          key: 'b15',
        },
        { title: '구축 시스템의 완성도', type: 'radio', key: 'b16' },
        {
          title: '일정 수립 및 계획대비 진행 여부 준수',
          type: 'radio',
          key: 'b17',
        },
        {
          title: '요구사항이 개발결과에 반영된 정도',
          type: 'radio',
          key: 'b18',
        },
      ],
    },
    {
      title:
        'B4.스마트공장 공급기업의 시스템 운영지원에 대해서는 얼마나 만족하십니까?',
      list: [
        {
          title: '사용자 교육훈련의 적극성',
          type: 'radio',
          key: 'b19',
        },
        { title: '교육 매뉴얼의 충실성', type: 'radio', key: 'b20' },
      ],
    },
    {
      title:
        'B5.스마트공장 도입 솔루션의 유지보수 및 운영관리에 대해서는 얼마나 만족하십니까?',
      list: [
        {
          title: '유지보수 및 운영관리 정책의 적정성',
          type: 'radio',
          key: 'b21',
        },
        {
          title: '유지보수 가격의 적정성',
          type: 'radio',
          key: 'b22',
        },
        {
          title:
            '유지보수 관련 요구사항에 대한 반영 등 고객 대응의 적극성 및 신속성',
          type: 'radio',
          key: 'b23',
        },
      ],
    },
    {
      title: 'B6.스마트공장 공급기업에 대해 전반적으로 얼마나 만족하십니까?',
      list: [
        {
          title: '전반적만족도',
          type: 'radio',
          key: 'b24',
        },
      ],
    },
    {
      title: 'B7.공급기업을 타인에게 추천하실 의향이 있으십니까?',
      list: [
        {
          title: '타인 추천의향',
          type: 'radio',
          key: 'b25',
        },
      ],
    },
    {
      title: 'B8.불만이나 개선(건의사항)을 적어주세요.',
      list: [
        {
          title: '불만이나 개선(건의사항)을 적어주세요',
          type: 'input',
          key: 'b26',
        },
      ],
    },
  ]);

  const [arrSpvsInstDgstfn, setArrSpvsInstDgstfn] = useState([
    {
      title: 'C1.감리기관의 평가 과정에 대해 얼마나 만족하십니까?',
      list: [
        {
          title: '단계별 감리(착수/중간/최종)의 동일 감리원 시행여부',
          type: 'radio',
          key: 'c1',
        },
        {
          title: '감리 평가의 각 단계별 목적 부합성',
          type: 'radio',
          key: 'c2',
        },
        {
          title: '감리 기준의 공정성 및 일관성',
          type: 'radio',
          key: 'c3',
        },
        {
          title: '감리결과의 통보 및 시정조치 안내의 적절성',
          type: 'radio',
          key: 'c4',
        },
      ],
    },
    {
      title: 'C2.감리(감리자)의 전문성에 대해 얼마나 만족하십니까?',
      list: [
        {
          title: '감리자의 사업비/회계 관련 전문지식',
          type: 'radio',
          key: 'c5',
        },
        {
          title: '감리자의 정보시스템 관련 전문지식',
          type: 'radio',
          key: 'c6',
        },
        {
          title: '감리자의 지원사업 관련 이해도',
          type: 'radio',
          key: 'c7',
        },
        {
          title: '감리자의 지원기업(업종) 관련 이해도',
          type: 'radio',
          key: 'c8',
        },
      ],
    },
    {
      title: 'C3.감리기관(감리자)의 태도에 대해 얼마나 만족하십니까?',
      list: [
        {
          title: '현장감리 중 문의/상담에 대한 응답 만족도(신속성/충실성 등)',
          type: 'radio',
          key: 'c9',
        },
        {
          title:
            '시정조치 및 평가결과의 문의/상담에 대한 응답 만족도 (신속성/충실성 등)',
          type: 'radio',
          key: 'c10',
        },
        {
          title: '현장 감리시 성실도',
          type: 'radio',
          key: 'c11',
        },
      ],
    },
    {
      title: 'C4.감리기관에 대해 전반적으로 얼마나 만족하십니까?',
      list: [
        {
          title: '전반적 만족도',
          type: 'radio',
          key: 'c12',
        },
      ],
    },
    {
      title: 'C5.불만이나 개선(건의사항)을 적어주세요.',
      list: [
        {
          title: '불만이나 개선(건의사항)을 적어주세요.',
          type: 'input',
          key: 'a16',
        },
      ],
    },
  ]);

  const [arrSpcltyMfcmDgstfn, setArrSpcltyMfcmDgstfn] = useState([
    {
      title: 'D1.전문성',
      list: [
        {
          title: '현장분석 역량',
          type: 'radio',
          key: 'd1',
        },
        {
          title: '전문지식',
          type: 'radio',
          key: 'd2',
        },
        {
          title: '현장 경험',
          type: 'radio',
          key: 'd3',
        },
        {
          title: '솔루션 제시 역량',
          type: 'radio',
          key: 'd4',
        },
      ],
    },
    {
      title: 'D2.성실성',
      list: [
        {
          title: '질문에 대한 답변 태도 만족도',
          type: 'radio',
          key: 'd5',
        },
        { title: '능동적 정보 제시 정도', type: 'radio', key: 'd6' },
      ],
    },
    {
      title: 'D3.친절도',
      list: [
        {
          title: '진행사항에 대한 공유 정도',
          type: 'radio',
          key: 'd7',
        },
        { title: '요구사항 반영에 대한 적극성 등', type: 'radio', key: 'd8' },
      ],
    },
    {
      title: 'D4.전반적 만족도',
      list: [
        {
          title: '전반적 만족도',
          type: 'radio',
          key: 'd9',
        },
      ],
    },
    {
      title: 'D5.불만이나 개선(건의사항)을 적어주세요.',
      list: [
        {
          title: '불만이나 개선(건의사항)을 적어주세요.',
          type: 'input',
          key: 'd10',
        },
      ],
    },
  ]);

  const confirmClick = () => {
    setReprtExmntStsfdgOpen(false);
  };
  const closeClick = () => {
    setReprtExmntStsfdgOpen(false);
  };

  const renderTableBody = (arrList) => {
    return arrList?.map((item) => {
      return (
        <>
          <tr>
            <td className="header border-r-0" colspan="2">
              {item.title}
            </td>
          </tr>
          <tr>
            <td className="header">만족요소</td>
            <td className="header border-r-0 ">항목</td>
          </tr>

          {item?.list?.map((listItem) => {
            return (
              <>
                <tr>
                  <td>{listItem.title}</td>
                  {listItem?.type === 'radio' ? (
                    <td>
                      <Radio.Group
                        style={{ width: '100%' }}
                        onChange={(value) =>
                          ojtChange(value, listItem.key, setOjtSrvyRslt)
                        }
                      >
                        <Radio value="1">1.매우불만족</Radio>
                        <Radio value="2">2.불만족</Radio>
                        <Radio value="3">3.보통</Radio>
                        <Radio value="4">4.만족</Radio>
                        <Radio value="5">5.매우만족</Radio>
                      </Radio.Group>
                    </td>
                  ) : (
                    <td>
                      <Input
                        value={ojtSrvyRslt[listItem.key]}
                        onChange={(e) =>
                          ojtChange(
                            e.target.value,
                            listItem.key,
                            setOjtSrvyRslt
                          )
                        }
                      />
                    </td>
                  )}
                </tr>
              </>
            );
          })}
        </>
      );
    });
  };

  return (
    <Modal
      open={reprtExmntStsfdgOpen}
      title="스마트공장 지원사업 완료설문서"
      onOk={confirmClick}
      onCancel={closeClick}
      width={1200}
      footer={[
        <Button
          className="eu-btn-popup-process-warning"
          onClick={confirmClick}
        >
          제출
        </Button>,
        <Button
          className="eu-btn-popup-process-default"
          onClick={closeClick}
        >
          닫기
        </Button>,
      ]}
    >
      <Row>
        <Col span={24}>
          <div className="eu-sati-survye-form-wrap">
            <div className="eu-sati-survye-form-header">
              본 설문지는 중소벤처기업부에서 총괄하고 중소기업기술정보진흥원에서
              수행하는 『스마트공장지원사업』의 만족도를 조사하여 향후 지원사업을
              개선하여 보다 실효성 있는 지원방안을 수립하기 위하여 실시하는 것으로 
              통계법 제8조에 의거하여 통계 목적으로만 이용되며 귀사의 비밀이 절대
              보장됨을 알려드립니다.
            </div>
            <div className="eu-sati-survye-form-body">
              <TitleComp>일반현황</TitleComp>
              <div className="eu-custom-description-table">
                <table
                  key={'eu-custom-description-table'} // 각 테이블마다 고유 키 입력
                  summary="지원사업 완료 설문 일반 테이블"
                >
                  <colgroup>
                    <col width={'10%'} />
                    <col width={'40%'} />
                    <col width={'10%'} />
                    <col width={'40%'} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td className="header">참여사업</td>
                      <td colspan="3">{ojtBscStts?.a1}</td>
                    </tr>
                    <tr>
                      <td className="header">회사명</td>
                      <td colspan="3">{ojtBscStts?.a2}</td>
                    </tr>
                    <tr>
                      <td className="header">대표자</td>
                      <td colspan="3">{ojtBscStts?.a3}</td>
                    </tr>
                    <tr>
                      <td rowspan="3" className="header">
                        작성자
                      </td>
                      <td>
                        부서:
                        {/* <Space>
                          부서:
                          <Input
                            value={ojtBscSttsChg?.a1}
                            onChange={(e) =>
                              ojtChange(e.target.value, 'a1', setOjtBscSttsChg)
                            }
                          />
                        </Space> */}
                      </td>
                      <td rowspan="3" className="header">
                        연락처
                      </td>
                      <td>
                        전화번호:
                        {/* <Space>
                          전화번호:
                          <Input
                            value={ojtBscSttsChg?.a2}
                            onChange={(e) =>
                              ojtChange(e.target.value, 'a2', setOjtBscSttsChg)
                            }
                          />
                        </Space> */}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        직위:
                        {/* <Space>
                          직위:
                          <Input
                            value={ojtBscSttsChg?.a3}
                            onChange={(e) =>
                              ojtChange(e.target.value, 'a3', setOjtBscSttsChg)
                            }
                          />
                        </Space> */}
                      </td>
                      <td>
                        E-mail:
                        {/* <Space>
                          E-mail:
                          <Input
                            value={ojtBscSttsChg?.a4}
                            onChange={(e) =>
                              ojtChange(e.target.value, 'a4', setOjtBscSttsChg)
                            }
                          />
                        </Space> */}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        성명:
                        {/* <Space>
                          성명:
                          <Input
                            value={ojtBscSttsChg?.a5}
                            onChange={(e) =>
                              ojtChange(e.target.value, 'a5', setOjtBscSttsChg)
                            }
                          />
                        </Space> */}
                      </td>
                      <td>
                        E-mail:
                        {/* <Space>
                          E-mail:
                          <Input
                            value={ojtBscSttsChg?.a6}
                            onChange={(e) =>
                              ojtChange(e.target.value, 'a6', setOjtBscSttsChg)
                            }
                          />
                        </Space> */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-cont margin-top">
        <Col span={24}>
          <TitleComp>1.사업에 대한 만족도</TitleComp>
        </Col>
        <Col span={24}>
          <div className="eu-custom-description-table">
            <table
              key={'eu-custom-description-table-bizDgstfn'} // 각 테이블마다 고유 키 입력
              summary="지원사업 완료 설문 사업 만족도 테이블"
            >
              <colgroup>
                <col width={'40%'} />
                <col width={'60%'} />
              </colgroup>
              <tbody>{renderTableBody(arrBizDgstfn)}</tbody>
            </table>
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-cont margin-top">
        <Col span={24}>
          <TitleComp>2.공급기업(IT기업)에 대한 만족도</TitleComp>
        </Col>
        <Col span={24}>
          <div className="eu-custom-description-table">
            <table
              key={'eu-custom-description-table-splyEntDgstfn'} // 각 테이블마다 고유 키 입력
              summary="지원사업 완료 설문 공급기업 만족도 테이블"
            >
              <colgroup>
                <col width={'40%'} />
                <col width={'60%'} />
              </colgroup>
              <tbody>{renderTableBody(arrSplyEntDgstfn)}</tbody>
            </table>
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-cont margin-top">
        <Col span={24}>
          <TitleComp>3.감리기관(완료점검기관)에 대한 만족도</TitleComp>
        </Col>
        <Col span={24}>
          <div className="eu-custom-description-table">
            <table
              key={'eu-custom-description-table-spvsInstDgstfn'} // 각 테이블마다 고유 키 입력
              summary="지원사업 완료 설문 공급기업 만족도 테이블"
            >
              <colgroup>
                <col width={'40%'} />
                <col width={'60%'} />
              </colgroup>
              <tbody>{renderTableBody(arrSpvsInstDgstfn)}</tbody>
            </table>
          </div>
        </Col>
      </Row>

      <Row className="eu-row-comp-cont margin-top">
        <Col span={24}>
          <TitleComp>
            4.전문위원(현장컨설턴트 또는 코디네이터)에 대한 만족도
          </TitleComp>
        </Col>
        <Col span={24}>
          <div className="eu-custom-description-table">
            <table
              key={'eu-custom-description-table-spcltyMfcmDgstfn'} // 각 테이블마다 고유 키 입력
              summary="지원사업 완료 설문 전문위원 만족도 테이블"
            >
              <colgroup>
                <col width={'40%'} />
                <col width={'60%'} />
              </colgroup>
              <tbody>{renderTableBody(arrSpcltyMfcmDgstfn)}</tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default ReprtExmntStsfdg;
