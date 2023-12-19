import React, { useEffect, useRef, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Col, Modal, Row, Transfer } from "antd";
//import 'css/Common.css';
//import { useQueryApi } from 'modules/hooks/useQueryApi';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import styled from "styled-components";
import route from "testarr.json";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  > .label {
    display: inline-block;
    max-width: calc(100% - 20px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &.drop-over-downward {
    border-bottom: 2px dashed #1890ff;
  }
  &.drop-over-upward {
    border-top: 2px dashed #1890ff;
  }
`;

const TransferWrapper = styled.div`
  .ant-transfer-operation {
    margin: 0 16px;
    display: flex;
    flex: none;
    flex-direction: column;
    align-self: center;
    margin: 0 8px;
    vertical-align: middle;
  }
  .ant-transfer-list{
    border-top: 2px solid #222222; min-height: 200px; height: 350px;
  }
  .ant-transfer-list-header {
    display: flex; background: #F8F8F8; border-bottom: 1px solid #d9d9d9;
    font-family: 'NotoSansKR-500';
    font-size: 16px;
    letter-spacing: -0.5px;
    line-height: 24px;
    color: #222222;
  }
  .ant-transfer-list-header-selected{color: #555555;}
  .ant-transfer-list-header-dropdown {display: none;}
  .ant-transfer-list-body{
    font-family: 'NotoSansKR-400';
    font-size: 16px;
    letter-spacing: -0.5px;
    line-height: 24px;
    color: #555555;
  }
  .ant-transfer-list-content-item{border-bottom: 1px solid #eee;}
`;

const ButtonWrapper = styled.button`
  .ant-btn.ant-btn-primary.ant-btn-sm
    .ant-popconfirm
    .ant-btn.ant-btn-default.ant-btn-sm {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    font-family: "NotoSansKR-500";
    font-size: 16px;
    letter-spacing: -0.2px;
    line-height: 26px;
    height: 34px;
    margin: 0 0 8px 0;
    width: auto;
  }
`;

const MainStatsSettingPopup = (props) => {
  const {
    mainStatsModalOpen,
    setMainStatsModalOpen,
    closeMainStatsClick,
    procStepRefetch,
  } = props;

  const [fieldColumns, setFieldsColumns] = useState([]); // all avaliable columsn
  const [defaultColumns, setDefaultColumns] = useState([]); // default columns
  const [showColumns, setShowColumns] = useState([]); // shown columns

  //리스트 조회

  const data = { ...route };
  console.log("data", data);
  useEffect(() => {
    // if (mainStatsModalOpen) {
    //     refetch();
    // }
    return () => {};
  }, [mainStatsModalOpen]);

  useEffect(() => {
    if (data?.mainStatsList && data?.mainStatsIndvdList) {
      setFieldsColumns(data.mainStatsList);
      setDefaultColumns(data.mainStatsIndvdList);
      setShowColumns(data.mainStatsIndvdList);
    }
    return () => {};
  }, [data]);

  //데이터 저장
  const {
    data: saveData,
    loading: saveLoading,
    error: saveError,
    refetch: saveRefetch,
  } = [];

  const setProgressPopup = () => {
    let mapping = {};
    const columns = fieldColumns.filter((col) =>
      new Set(targetKeys).has(col.taskClsfCd)
    );
    columns.forEach((col) => {
      mapping[col.taskClsfCd] = col.taskClsfNm;
    });
    let finalColumns = targetKeys.map((tar, index) => ({
      taskClsfCd: tar,
      indvdIndctOrdr: index + 1,
      useYn: "Y",
    }));
    if (!finalColumns.length) {
      finalColumns = [];
    }
    // const param = [
    //     { taskClsfCd: 'SB0200', indvdIndctOrdr: '2', useYn: 'Y' },
    //     { taskClsfCd: 'SB0300', indvdIndctOrdr: '1', useYn: 'Y' },
    //     { taskClsfCd: 'SC0400', indvdIndctOrdr: '3', useYn: 'Y' },
    // ];
    const formData = new FormData();
    formData.append("saveDataList", JSON.stringify(finalColumns));
    saveRefetch(formData);
  };

  useEffect(() => {
    if (saveData?.saveComplete === "Y") {
      setMainStatsModalOpen(false);
      procStepRefetch();
      //window.location.replace('/mg/ma/ma/ma/main');
    }
    return () => {};
  }, [saveData]);

  //target keys
  const [targetKeys, setTargetKeys] = useState([]);
  useEffect(() => {
    if (showColumns) {
      setTargetKeys(showColumns.map((it) => it.taskClsfCd));
    }
    return () => {};
  }, [showColumns]);

  // handle changed
  const onChange = (nextTargetKeys) => {
    if (nextTargetKeys.length > 8) {
      Modal.info({
        title: "안내",
        content: "선택할 수 있는 개수는 최대 8개 입니다.",
      });
      return;
    } else {
      setTargetKeys(Array.from(new Set(nextTargetKeys)));
    }
  };

  // handle reset
  const reset = () => {
    const finalKeys = defaultColumns.map((it) => it.name);
    setTargetKeys(finalKeys);
  };

  // change order
  const moveRow = async (dragIndex, hoverIndex) => {
    const clonedList = targetKeys;
    const el = clonedList.splice(dragIndex, 1)[0];
    clonedList.splice(hoverIndex, 0, el);
    onChange(clonedList);
  };
  // DraggableItem
  const type = "DraggableItem";
  const DraggableItem = ({ index, taskClsfNm, moveRow }) => {
    const ref = useRef();
    const [{ isOver, dropClassName }, drop] = useDrop({
      accept: type,
      collect: (monitor) => {
        const { index: dragIndex } = monitor.getItem() || {};
        if (dragIndex === index) {
          return {};
        }
        return {
          isOver: monitor.isOver(),
          dropClassName:
            dragIndex < index ? ` drop-over-downward` : ` drop-over-upward`,
        };
      },
      drop: (item) => {
        moveRow(item.index, index);
      },
    });

    const [{ isDragging }, drag, preview] = useDrag({
      type,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    preview(drop(ref));

    return (
      <ItemWrapper
        key={taskClsfNm}
        ref={ref}
        className={`${isOver ? dropClassName : ""}`}
      >
        <span className="label">{taskClsfNm}</span>
        {index !== -1 && (
          <span ref={drag}>
            <MenuOutlined />
          </span>
        )}
      </ItemWrapper>
    );
  };

  return (
    <>
      {showColumns && (
        <Modal
          key="MainStatsSettingPopup"
          open={mainStatsModalOpen}
          title="진행단계별처리대상"
          //onOk={handleOk}
          onCancel={closeMainStatsClick}
          width={1000}
          footer={[
            <Button 
              className="eu-btn-popup-process-default"
              onClick={setProgressPopup}
            >
              저장
            </Button>,
            <Button
              className="eu-btn-popup-process-default"
              onClick={closeMainStatsClick}
            >
              취소
            </Button>
          ]}
        >
          <Row className="eu-row-comp-cont">
            <Col span={24} className="">
              <DndProvider backend={HTML5Backend}>
                <TransferWrapper>
                  <Transfer
                    rowKey={(record) => record.taskClsfCd}
                    listStyle={{ flex: 1 }}
                    dataSource={fieldColumns}
                    render={(it) => (
                      <DraggableItem
                        index={targetKeys.findIndex(
                          (key) => key === it.taskClsfCd
                        )}
                        taskClsfNm={it.taskClsfNm}
                        moveRow={moveRow}
                      />
                    )}
                    titles={["타이틀1", "타이틀2"]}
                    targetKeys={targetKeys}
                    onChange={onChange}
                    className="eu-check-transfer"
                    operations={['이동','이동']}
                    locale={{ 
                      //영문 items 자리에 들어갈 워딩이 조금 애매하긴 하네요.. 
                      //왼쪽-오른쪽이 고정이 아니고 이동상황에 따라 움직이는 현상이 있습니다.
                      //테스트 해보시고, 맞게끔 수정이 필요할 것 같습니다.
                      itemUnit: "개 선택(오른쪽)",
                      itemsUnit: "개 선택(왼쪽)",
                    }}
                  />
                </TransferWrapper>
              </DndProvider>
            </Col>
          </Row>
          {/* 버튼 모달 footer 부분으로 이동함! 이부분은 삭제하시면 되요! */}
          {/* <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button
                className="eu-btn-popup-process-default"
                onClick={setProgressPopup}
              >
                저장
              </Button>
              <Button
                className="eu-btn-popup-process-default"
                onClick={closeMainStatsClick}
              >
                취소
              </Button>
            </Col>
          </Row> */}
        </Modal>
      )}
    </>
  );
};

export default MainStatsSettingPopup;
