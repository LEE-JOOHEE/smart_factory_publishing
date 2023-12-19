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
  Modal, notification,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { ojtChange, arrChange } from 'components/common/Common';

const Sample_modal = ({ ojtGroupCodes, searchClick, editable = false }) => {
  

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

  // notification 구현
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: '과제기본정보 수정이 완료되었습니다.',
      className: 'eu-noti-tr',
      duration: 3.5, //유지시간(3.5초 설정함)
    });
  };

  return (
    <>
      <Row>
        <Col span={12}>
          <Row className="eu-row-comp-title mt-20">
            <Col span={24}>
              <TitleComp>모달(팝업) 레이아웃</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24} className="font-16-400">
              모달창에서는 "eu-row-comp-cont" (한 섹션, 테두리) 안에<br/>
              제목과 컨텐츠가 들어가기때문에<br/>
              "eu-row-comp-cont" 안쪽에 "eu-row-comp-title"이 위치해야한다.
              <br/><br/>
              "margin-top" 으로 섹션간의 간격을 조절
              <br/><br/>
              "mb-0" margin-bottom: 0px 값을 강제로 준다는 뜻입니다.
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row className="eu-row-comp-title mt-20">
            <Col span={12}>
              <TitleComp>안트디자인 Modal 컴포넌트</TitleComp>
            </Col>
            <Col span={12} className="text-r">              
              <Button className="eu-btn-popup-process-fine" onClick={openModal}>모달</Button>
              <Button className="eu-btn-popup-process-default" onClick={copyClick}>복사</Button>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24} id="copy1">
              <span className="text-red">{`<Modal`}</span> {`open={isModalOpen} title="모달샘플"`}
              <br/>&nbsp;{`bodyStyle={{ overflowY: 'scroll' }}`}
              &nbsp;{`onCancel={closeClick}`}
              <br/>&nbsp;&nbsp;{`width={1250}`}
              <span className="text-red"> {`//※너비수정, 높이값은 지정 X`}</span>
              <br/>&nbsp;&nbsp;{`footer={[<Button className="eu-btn-popup-process-default"`}
              <br/>&nbsp;&nbsp;&nbsp;{`onClick={closeClick}>닫기</Button>]}`}
              <br/><span className="text-red">{`></Modal>`}</span>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* 데모구현 */}
      <Modal open={isModalOpen} title="모달샘플"
        bodyStyle={{ overflowY: 'scroll' }} onCancel={closeClick} 
        width={1250} //※너비수정, 높이값은 지정 X
        footer={[<Button className="eu-btn-popup-process-default" onClick={closeClick}>닫기</Button>]}>
        <Row className="eu-row-comp-cont">
          <Row className="eu-row-comp-title"></Row>
          <Col span={24}>
            <Table columns={sampleColums} dataSource={arrSample} size="small" bordered pagination={false} />
          </Col>
        </Row>
        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title">제목만 있을때</Row>
          <Col span={24}>
            <Table columns={sampleColums} dataSource={arrSample} size="small" bordered pagination={false} />
          </Col>
        </Row>
        <Row className="eu-row-comp-cont margin-top">
          <Row className="eu-row-comp-title mb-0">
            <Col span={12}>
            <TitleComp>제목과 버튼이 함께 있을때</TitleComp>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
            <Button className="eu-btn-popup-process-default" onClick={closeClick}>닫기</Button>
            </Col>
          </Row>
          <Col span={24}>
            <Table columns={sampleColums} dataSource={arrSample} size="small" bordered pagination={false} />
          </Col>
        </Row>
      </Modal>

      <Row>
        <Col span={8}>
          <Row className="eu-row-comp-title mt-60">
            <Col span={24}>
              <TitleComp>1. 타이틀 없을때</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              {`<Row className="`}<span className="text-red">eu-row-comp-cont</span>{`">`}
              <br/>&nbsp;{`<Row className="`}<span className="text-red">eu-row-comp-title</span>{`"></Row>`}
              <br/>&nbsp;{`<Col span={24}>`}
              <br/>&nbsp;&nbsp;{`<Table size="small" bordered />`}
              <br/>&nbsp;{`</Col>`}
              <br/>{`</Row>`}
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row className="eu-row-comp-title mt-60">
            <Col span={24}>
              <TitleComp>2. 타이틀(제목만)</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              {`<Row className="`}<span className="text-red">eu-row-comp-cont margin-top</span>{`">`}
              <br/>&nbsp;{`<Row className="`}<span className="text-red">eu-row-comp-title</span>{`">제목</Row>`}
              <br/>&nbsp;{`<Col span={24}>`}
              <br/>&nbsp;&nbsp;{`<Table size="small" bordered />`}
              <br/>&nbsp;{`</Col>`}
              <br/>{`</Row>`}
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row className="eu-row-comp-title margin-top">
            <Col span={24}>
              <TitleComp>3. 타이틀(제목+버튼) 왼쪽/오른쪽 분할</TitleComp>
            </Col>
          </Row>
          <Row className="eu-row-comp-cont">
            <Col span={24}>
              {`<Row className="`}<span className="text-red">eu-row-comp-cont margin-top</span>{`">`}
              <br/>&nbsp;{`<Row className="`}<span className="text-red">eu-row-comp-title mb-0</span>{`">`}
              <br/>&nbsp;&nbsp;{`<Col span={12}>`}
              <br/>&nbsp;&nbsp;&nbsp;{`<TitleComp>제목</TitleComp>`}
              <br/>&nbsp;&nbsp;{`</Col>`}
              <br/>&nbsp;&nbsp;{`<Col span={12} style={{ textAlign: 'right' }}>`}
              <br/>&nbsp;&nbsp;&nbsp;{`<Button className="eu-btn-popup-process-default" onClick={closeClick}>닫기</Button>`}
              <br/>&nbsp;&nbsp;{`</Col>`}
              <br/>&nbsp;{`</Row>`}
              <br/>&nbsp;{`<Col span={24}>`}
              <br/>&nbsp;&nbsp;{`<Table size="small" bordered />`}
              <br/>&nbsp;{`</Col>`}
              <br/>{`</Row>`}
            </Col>
          </Row>
        </Col>
      </Row>

      <h1 className="mt-0">알림창 / 경고창(Alert) 디자인 - 사전 메시지</h1>
      <Row gutter={(0, 60)}>
        <Col span={12}>
          <Row className="eu-row-comp-title">
            <Col span={12}>
              <TitleComp>1. Modal.info</TitleComp>
            </Col>
            <Col span={12} className="text-r">
              <Button className="eu-btn-crud-error" onClick={alertInfoClick}>Info 버튼</Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="eu-row-page-comp-layout">
              <div className="font-16-400">
                {`const alertInfoClick = () => {`}
                <br/>&nbsp;&nbsp;{`Modal.info({`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`title: '글을 삭제 하시겠습니까?', `}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`closable: true, `}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`okText : "확인",`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`content: '평가표보기 SC_AP_0801P01/mg/sm/em/EvlTableEx',`}
                <br/>&nbsp;&nbsp;{`});`}
                <br/>{`};`}
              </div>
            </Col>
          </Row>
        </Col>
        
        <Col span={12}>
          <Row className="eu-row-comp-title">
            <Col span={12}>
              <TitleComp>2. Modal.warning</TitleComp>
            </Col>
            <Col span={12} className="text-r">
              <Button className="eu-btn-crud-error" onClick={alertWarningClick}>Warning 버튼</Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="eu-row-page-comp-layout">
              <div className="font-16-400">
                {`const alertWarningClick = () => {`}
                <br/>&nbsp;&nbsp;{`Modal.warning({`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`title: '평가표미리보기 클릭', `}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`closable: true, `}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`okText : "확인",`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`content: (`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div>평가표보기1<br/>평가표보기2<br/>평가표보기3<br/>평가표보기4<br/>평가표보기5</div> `}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`)`}
                <br/>&nbsp;&nbsp;{`});`}
                <br/>{`};`}
              </div>
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <Row className="eu-row-comp-title">
            <Col span={12}>
              <TitleComp>3. Modal.error</TitleComp>
            </Col>
            <Col span={12} className="text-r">
              <Button className="eu-btn-crud-error" onClick={alertEerrorClick}>Eerror 버튼</Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="eu-row-page-comp-layout">
              <div className="font-16-400">
                {`const alertEerrorClick = () => {`}
                <br/>&nbsp;&nbsp;{`Modal.error({`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`title: '평가표미리보기를 보실 수 없습니다.', `}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`closable: true, `}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`okText : "확인",`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`content: (`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div>평가표보기 SC_AP_0801P01/mg/sm/em/EvlTableEx</div>`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`)`}
                <br/>&nbsp;&nbsp;{`});`}
                <br/>{`};`}
              </div>
            </Col>
          </Row>
        </Col>
        
        <Col span={12}>
          <Row className="eu-row-comp-title">
            <Col span={12}>
              <TitleComp>4. Modal.success</TitleComp>
            </Col>
            <Col span={12} className="text-r">
              <Button className="eu-btn-crud-error" onClick={alertSuccessClick}>Eerror 버튼</Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="eu-row-page-comp-layout">
              <div className="font-16-400">
                {`const alertSuccessClick = () => {`}
                <br/>&nbsp;&nbsp;{`Modal.success({`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`title: '타이틀', `}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`closable: true, `}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`okText : "확인",`}
                <br/>&nbsp;&nbsp;{`});`}
                <br/>{`};`}
              </div>
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <Row className="eu-row-comp-title">
            <Col span={12}>
              <TitleComp>5. Modal.confirm</TitleComp>
            </Col>
            <Col span={12} className="text-r">
              <Button className="eu-btn-crud-error" onClick={alertConfirmClick}>확인취소 버튼</Button>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="eu-row-page-comp-layout">
              <div className="font-16-400">
                {`const alertConfirmClick = () => {`}
                <br/>&nbsp;&nbsp;{`Modal.confirm({`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`title: '취소 하시겠습니까?', `}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`closable: false, `}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`okText : "확인",`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`cancelText : "취소",`}
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`content: '취소 또는 확인 버튼을 클릭하세요.',`}
                <br/>&nbsp;&nbsp;{`});`}
                <br/>{`};`}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      
      <Row>
        <Col span={20}>
          <h1 className="mt-0">notification 디자인 - 사후 메시지</h1>
        </Col>
        <Col span={4} >
          {contextHolder}
          <Button className="eu-btn-process-error" onClick={openNotification}>
            오른쪽 상단에 뜨는 알림창
          </Button>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {` const [api, contextHolder] = notification.useNotification();`}
            <br/>{`const openNotification = () => {`}
            <br/>&nbsp;&nbsp;{`api.open({`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`message: '과제기본정보 수정이 완료되었습니다.',`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`className: 'eu-noti-tr',`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`duration: 3.5, //유지시간(3.5초 설정함)`}
            <br/>&nbsp;&nbsp;{`});`}
            <br/>{`};`}
          </div>
        </Col>
        <Col span={12}>
          <div className="font-16-400">
            {`<Col span={24}>`}
            <br/>&nbsp;&nbsp;{`{contextHolder}`}
            <br/>&nbsp;&nbsp;{`<Button className="eu-btn-process-error" onClick={openNotification}>`}
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{`오른쪽 상단에 뜨는 알림창`}
            <br/>&nbsp;&nbsp;{`</Button>`}
            <br/>{`</Col>`}
          </div>
        </Col>
      </Row>


    </>
  );
};

export default Sample_modal;
