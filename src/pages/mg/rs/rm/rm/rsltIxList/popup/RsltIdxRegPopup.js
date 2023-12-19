import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Descriptions,
  Input,
  Modal,
  Radio,
  Row,
  Select,
} from 'antd';
import TitleComp from 'components/layout/TitleComp';
import { getListCommonCd, ojtChange } from 'components/common/Common';

import 'css/Common.css';

const RsltIdxRegPopup = ({ rsltIdxRegPopupOpen, setRsltIdxRegPopupOpen }) => {
  // 공통코드
  const [ojtGroupCodes, setOjtGroupCodes] = useState({});

  //성과지표
  const [ojtRsltIdx, seOjtRsltIdx] = useState({});

  const confirmClick = () => {
    Modal.info({ title: '저장' });
  };
  const closeClick = () => {
    setRsltIdxRegPopupOpen(false);
  };

  // Onload
  useEffect(() => {
    //공통코드
    setOjtGroupCodes(getListCommonCd(['a1', 'a2', 'a3', 'a4', 'a5']));

    seOjtRsltIdx({
      a1: '',
      a2: '재무',
      a3: '',
      a4: '',
      a5: '',
      a6: '',
      a7: '시간',
      a8: '1(new)',
    });
  }, []);

  return (
    <>
      <Modal
        open={rsltIdxRegPopupOpen}
        title="성과지표 등록"
        onOk={confirmClick}
        onCancel={closeClick}
        width={800}
        footer={[
          <Button
            key={'confirmClick'}
            size="middle"
            className="eu-btn-popup-process-fine"
            onClick={confirmClick}
          >
            저장
          </Button>,
          <Button
            key={'closeClick'}
            type="primary"
            size="middle"
            className="eu-btn-popup-process-default"
            onClick={closeClick}
          >
            닫기
          </Button>,
        ]}
      >
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Descriptions size="small" bordered>
              <Descriptions.Item label="사업연도" span={3}>
                <Input
                  value={ojtRsltIdx?.a1}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a1', seOjtRsltIdx)
                  }
                />
              </Descriptions.Item>
              <Descriptions.Item label="성과지표 그룹명" span={3}>
                <Select
                  onChange={(value) => ojtChange(value, 'a2', seOjtRsltIdx)}
                  options={[
                    {
                      value: '재무',
                      label: '재무',
                    },
                    ...(ojtGroupCodes?.a1 ? ojtGroupCodes.a1 : []),
                  ]}
                  value={ojtRsltIdx?.a3}
                />
              </Descriptions.Item>
              <Descriptions.Item label="세부지표명" span={3}>
                <Input
                  value={ojtRsltIdx?.a3}
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a3', seOjtRsltIdx)
                  }
                />
              </Descriptions.Item>
              <Descriptions.Item label="지표특성" span={3}>
                <Radio.Group
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a4', seOjtRsltIdx)
                  }
                >
                  <Radio value={1}>증가</Radio>
                  <Radio value={2}>감소</Radio>
                </Radio.Group>
              </Descriptions.Item>
              <Descriptions.Item label="핵심여부" span={3}>
                <Radio.Group
                  onChange={(e) =>
                    ojtChange(e.target.value, 'a5', seOjtRsltIdx)
                  }
                >
                  <Radio value={1}>Yes</Radio>
                  <Radio value={2}>No</Radio>
                </Radio.Group>
              </Descriptions.Item>
              <Descriptions.Item label="단위" span={3}>
                <Select
                  onChange={(value) => ojtChange(value, 'a6', seOjtRsltIdx)}
                  options={[
                    {
                      value: '시간',
                      label: '시간',
                    },
                    ...(ojtGroupCodes?.a4 ? ojtGroupCodes.a4 : []),
                  ]}
                  value={ojtRsltIdx?.a6}
                />
              </Descriptions.Item>
              <Descriptions.Item label="우선순위" span={3}>
                <Select
                  onChange={(value) => ojtChange(value, 'a7', seOjtRsltIdx)}
                  options={[
                    {
                      value: '1(new)',
                      label: '1(new)',
                    },
                    ...(ojtGroupCodes?.a5 ? ojtGroupCodes.a5 : []),
                  ]}
                  value={ojtRsltIdx?.a7}
                />
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default RsltIdxRegPopup;
