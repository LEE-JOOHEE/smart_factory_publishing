import React, { useState } from 'react';
import {
  Col,
  Row,
  Tree,
  Table,
  Button,
  Switch,
  Card,
  Radio,
  Modal,
  Tabs,
} from 'antd';
import { PlusSquareOutlined, MinusSquareOutlined, HeartOutlined, FormOutlined } from '@ant-design/icons';
import TitleComp from 'components/layout/TitleComp';
import 'css/Common.css';
import { useHistory } from 'react-router-dom';
import BsnsBudgetManage03 from 'pages/mg/bm/bm/bc/bsnsBudgetManage/comp/BsnsBudgetManage03';
import BsnsExpitmTaxitm03 from 'pages/mg/bm/bm/bc/bsnsExpitmTaxitm/comp/BsnsExpitmTaxitm03';

const BsnsBudgetManage02 = ({
  arrBizClsf,
  selectedKeys,
  setSelectedKeys,
  arrBizBgt,
  setArrBizBgt,
  arrExpitm,
  setArrExpitm,
  arrChcExpitmGroupDsctn,
  setArrChcExpitmGroupDsctn,
  path,
}) => {
  const [expandedKeys, setExpandedKeys] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  // Tree 확장 event
  const onExpand = (expandedKeys) => {
    console.log('expandedKeys', expandedKeys);
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };

  // Tree node 선택 event
  const onSelect = (selectedKeys, info) => {
    console.log('selectedKeys: ', selectedKeys);
    console.log('info: ', info);
    setSelectedKeys([...selectedKeys, ...selectedKeys]);
  };

  // Tree 전체 open | close event
  const treeExpandAllClick = (checked) => {
    checked ? setExpandedKeys([1, 2, 3, 4, 5, 6, 7, 8]) : setExpandedKeys([]);
  };

  const [activeTabKey, setActiveTabKey] = useState(1);
  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  return (
    <>
    <Row gutter={(0, 20)}>
      <Col span={10}>
        <Row className="eu-row-comp-title">
          <Col span={24}>
            <TitleComp>년도별 사업분류
              <Switch
                defaultChecked
                onChange={treeExpandAllClick}
                style={{ marginLeft: '20px' }}
              />
            </TitleComp>
          </Col>
        </Row>
        <Row className="eu-row-comp-cont">
          <Col span={24}>
            <Card className="eu-card-tree">
              <Tree
                onExpand={onExpand}
                expandedKeys={expandedKeys}
                autoExpandParent={autoExpandParent}
                onSelect={onSelect}
                selectedKeys={selectedKeys}
                treeData={arrBizClsf}
                defaultExpandAll={true}
                defaultExpandParent={true}
                height={880}
                // Tree 메뉴 디자인 showLine, showIcon 추가
                showLine={true}
                showIcon={true}
              />
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={14}>
        <Tabs 
          className="eu-content-tab" 
          onChange={onTabChange}
          activeKey={activeTabKey}
          items={[
            { label: "예산관리", 
              key: 1, 
              children: (
                <BsnsBudgetManage03 
                  setActiveTabKey={setActiveTabKey} 
                  arrBizBgt={arrBizBgt} 
                  setArrBizBgt={setArrBizBgt} />
              ),
            },
            { label: "비목", 
              key: 2, 
              children: (
                <BsnsExpitmTaxitm03 
                  setActiveTabKey={setActiveTabKey} 
                  arrExpitm={arrExpitm} 
                  setArrExpitm={setArrExpitm}
                  arrChcExpitmGroupDsctn={arrChcExpitmGroupDsctn}
                  setArrChcExpitmGroupDsctn={setArrChcExpitmGroupDsctn}
                />
              ),
            },
          ]}
        />
      </Col>
    </Row>
    </>
  );
};

export default BsnsBudgetManage02;
