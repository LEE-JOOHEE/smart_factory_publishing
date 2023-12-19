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
  Tag,
} from 'antd';
import { CloseOutlined, } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { ojtChange, arrChange } from 'components/common/Common';
import TextArea from "antd/lib/input/TextArea";

const Sample_more = ({ ojtGroupCodes, searchClick, editable = false }) => {
  

  // const [sampleColums, setSampleColums] = useState([]);
  const sampleColums = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      align: 'center',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '10%',
      align: 'right',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '70%',
    },
  ];
  // const [arrSample, setArrSample] = useState([]);
  const arrSample = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeClick = () => {
    setIsModalOpen(false);
  };

  const [signModalOpen, setSignModalOpen] = useState(false);
  const openSignModal = () => {
    setSignModalOpen(true);
  }
  const closeSignModal = () => {
    setSignModalOpen(false);
  }

  const copyClick = () => {
    const copyTarget = document.getElementById("copy1").innerText;
    const textArea = document.createElement('textarea');
    document.body.appendChild(textArea);
    textArea.value = copyTarget;
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    document.body.removeChild(textArea);
  };

  //알림창,경고창
  const alertInfoClick = () => {
    Modal.info({ 
      title: '글을 삭제 하시겠습니까?', 
      closable: true, 
      okText : "확인",
      content: '평가표보기 SC_AP_0801P01/mg/sm/em/EvlTableEx',
    });
  };
  const alertWarningClick = () => {
    Modal.warning({ 
      title: '평가표미리보기 클릭', 
      closable: true, 
      okText : "확인",
      content: (
        <div>평가표보기1<br/>평가표보기2<br/>평가표보기3<br/>평가표보기4<br/>평가표보기5</div> 
      ),
    });
  };
  const alertEerrorClick = () => {
    Modal.error({ 
      title: '평가표미리보기를 보실 수 없습니다.', 
      closable: true, 
      okText : "확인",
      content: (
        <div>평가표보기 SC_AP_0801P01/mg/sm/em/EvlTableEx</div> 
      ),
    });
  };
  const alertSuccessClick = () => {
    Modal.success({ 
      title: '타이틀', 
      closable: true, 
      okText : "확인",
    });
  };
  const alertConfirmClick = () => {
    Modal.confirm({ 
      title: '취소 하시겠습니까?', 
      closable: false, 
      okText : "확인",
      cancelText: '취소',
      content: '취소 또는 확인 버튼을 클릭하세요.',
    });
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Row className="eu-row-comp-title mt-20">
            <Col span={12}>
              <TitleComp>서명(사인) 팝업</TitleComp>
              <div className="font-16-400 mb-20">평가위원 서명 팝업입니다. 모달 사이즈는 {`width={430}`}으로 설정합니다.</div>
            </Col>
            <Col span={12} className="text-r">              
              <Button className="eu-btn-popup-process-fine" onClick={openSignModal}>서명 팝업</Button>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24} className="font-16-400">
              {`<Modal open={signModalOpen} title="평가위원 서명" bodyStyle={{ overflowY: 'scroll' }} onCancel={closeSignModal} `}
              <br/>&nbsp;&nbsp;<span className="text-red">{`width={430} //※너비수정, 높이값은 지정 X`}</span>
              <br/>&nbsp;&nbsp;{`footer={[`}
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-popup-process-default" onClick={closeSignModal}>서명초기화</Button>,`}
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-popup-process-fine" onClick={closeSignModal}>서명완료</Button>,`}
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-popup-process-error" onClick={closeSignModal}>취소</Button>,`}
              <br/>&nbsp;&nbsp;{`]}>`}
              <br/>&nbsp;&nbsp;{`<Row className="eu-row-comp-cont `}<span className="text-red">{`sign-pop-wrap`}</span>{`">`}
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`<Col span={24}>`}
              <span className="text-red">
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div className="sign-pop-area flex-row-center text-c">`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`실제 사인 영역<br/> 300 * 300`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}
              </span>
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`</Col>`}
              <br/>&nbsp;&nbsp;{`</Row>`}
              <br/>{`</Modal>`}
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row className="eu-row-comp-title mt-60">
            <Col span={12}>
              <TitleComp>문자메시지 보내기 팝업</TitleComp>
            </Col>
            <Col span={12} className="text-r">              
              <Button className="eu-btn-popup-process-fine" onClick={openModal}>문자메시지</Button>
              {/* <Button className="eu-btn-popup-process-default" onClick={copyClick}>복사</Button> */}
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              <div className="font-16-400 mb-20">
                - 소스경로 : pages\sample\comp\Sample_more.js
                <br/>- 검색문장 : title="문자메시지 보내기"
                <br/><br/>
                마크업이 길어서 참고 부탁드립니다.
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* 사인 팝업 구현 */}
      <Modal open={signModalOpen} title="평가위원 서명" 
        bodyStyle={{ overflowY: 'scroll' }} onCancel={closeSignModal} 
        width={430} //※너비수정, 높이값은 지정 X
        footer={[
          <Button className="eu-btn-popup-process-default" onClick={closeSignModal}>서명초기화</Button>,
          <Button className="eu-btn-popup-process-fine" onClick={closeSignModal}>서명완료</Button>,
          <Button className="eu-btn-popup-process-error" onClick={closeSignModal}>취소</Button>,
        ]}>
        <Row className="eu-row-comp-cont sign-pop-wrap">
          <Col span={24}>
            <div className="sign-pop-area flex-row-center text-c">
              실제 사인 영역<br/> 300 * 300
            </div>
          </Col>
        </Row>
      </Modal>

      {/* 문자메시지 보내기 구현 */}
      <Modal open={isModalOpen} title="문자메시지 보내기" 
        bodyStyle={{ overflowY: 'scroll' }} onCancel={closeClick} 
        width={1000} //※너비수정, 높이값은 지정 X
        footer={[
          <Button className="eu-btn-popup-process-warning" onClick={closeClick}>전송</Button>,
          <Button className="eu-btn-popup-process-default" onClick={closeClick}>닫기</Button>,
        ]}>

        <Row gutter={(0, 40)}>
          <Col span={12}>
            <Row className="eu-row-comp-cont h-full">
              <Col span={24}>
                <div className="font-18 font-bold-500 text-gray-500 mb-8">보낼 문자 작성</div>
                <TextArea></TextArea>

                {/* Click이 필요한 경우라면, onClick과 style={{cursor: "pointer"}} 추가해야할것 같습니다. */}
                <Row className="mtb-20">
                  <Tag className="tag-default">과제번호</Tag>
                  <Tag className="tag-default">신청일</Tag>
                  <Tag className="tag-default">도입기업</Tag>
                  <Tag className="tag-default">공급기업</Tag>
                  <Tag className="tag-default">성명</Tag>
                  {/* <Tag className="tag-default mt-4" style={{cursor: "pointer"}} onClick={closeClick} >클릭!클릭!</Tag> */}
                </Row>

                <div className="font-18 font-bold-500 text-gray-500 mb-8">수신자 선택</div>
                <Row>
                  <Input className="flex-1" />
                  <Button className="eu-btn-crud-warning">추가</Button>
                </Row>

                <div className="font-18 font-bold-500 text-gray-500 mb-8 mt-20">회신 번호 작성</div>
                <Input className="flex-1" />
                <div className="eu-table-indicator mt-8">
                  <span className="font-16-400 text-red">
                    ※유효하지 않은 회신번호 일 경우 문자가 발송 되지 않습니다.
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row className="eu-row-comp-cont p-0 bg-none">
              <Col span={24}>

                <div className="mobile-bg">
                  <div className="mobile"></div>
                  <div className="mobile-area">

                    <div className="font-18 font-bold-500 text-gray-700-icon">수신자</div>
                    <div className="flex-row item-center gap-20 mt-4">
                      <div className="font-16-500 text-gray-500">이도성</div>
                      <div className="font-16-400 text-gray-500">010-2797-4433</div>
                      <Button className="eu-btn-icon plr-10 ml-auto">
                        <CloseOutlined className="font-16 text-gray-500 mt-2" />
                      </Button>
                    </div>
                    <div className="line mtb-20"></div>

                    <div className="font-18 font-bold-500 text-gray-700-icon">보낼 문자</div>
                    <div className="font-16-400 mt-4">
                      전문위원으로 신청하신 [성명]님의 전무위원 정보 현행화 시기가 도래하였습니다.
                      스마트공장 사업관리 시스템에접속하여 등록정보를 최신화 해주세요.
                    </div>
                    <div className="line mtb-20"></div>

                    <div className="font-18 font-bold-500 text-gray-700-icon">회신번호</div>
                    {/* <div className="flex-row item-center gap-20 mt-4">
                      <div className="font-16-500 text-gray-500">이도성</div>
                      <div className="font-16-400 text-gray-500">010-2797-4433</div>
                      <Button className="eu-btn-icon plr-10 ml-auto">
                        <CloseOutlined className="font-16 text-gray-500 mt-2" />
                      </Button>
                    </div> */}
                    <div className="line mt-20"></div>

                  </div>
                </div>


              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>






      



    </>
  );
};

export default Sample_more;
