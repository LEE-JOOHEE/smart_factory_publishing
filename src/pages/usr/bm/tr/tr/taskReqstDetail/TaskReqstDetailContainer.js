import React, { useState, useEffect } from 'react';
import { Col, Row, Tabs, Modal } from 'antd';
import 'css/CommonUsr.css';
import TaskReqstAtchContainer from 'pages/usr/bm/tr/tr/taskReqstAtch/TaskReqstAtchContainer';
import TaskReqstBassContainer from 'pages/usr/bm/tr/tr/taskReqstBass/TaskReqstBassContainer';
import TaskReqstCnsrtmContainer from 'pages/usr/bm/tr/tr/taskReqstCnsrtm/TaskReqstCnsrtmContainer';
import TaskReqstInfoContainer from 'pages/usr/bm/tr/tr/taskReqstInfo/TaskReqstInfoContainer';
import TaskReqstPvltrtContainer from 'pages/usr/bm/tr/tr/taskReqstPvltrt/TaskReqstPvltrtContainer';
import TaskReqstRsltContainer from 'pages/usr/bm/tr/tr/taskReqstRslt/TaskReqstRsltContainer';
import TaskReqstWctContainer from 'pages/usr/bm/tr/tr/taskReqstWct/TaskReqstWctContainer';

import { useHistory } from 'react-router-dom';

const TaskReqstDetailContainer = ({ location }) => {
  const ojtKey = location.state?.key;
  const history = useHistory();
  // useEffect(() => {
  //   if (!location.state) {
  //     history.push('/usr/bm/tr/tr/smsDspth');
  //     Modal.info({ title: 'key 없음' });
  //   }
  // }, []);
  const [tabItems, setTabItems] = useState([
    {
      label: '기본정보',
      key: '기본정보',
      children: <TaskReqstBassContainer ojtKey={ojtKey} />,
    },
    {
      label: '기업정보',
      key: '기업정보',
      children: <TaskReqstInfoContainer ojtKey={ojtKey} />,
    },
    {
      label: '우대사항',
      key: '우대사항',
      children: <TaskReqstPvltrtContainer ojtKey={ojtKey} />,
    },
    {
      label: '컨소시엄기업정보',
      key: '컨소시엄기업정보',
      children: <TaskReqstCnsrtmContainer ojtKey={ojtKey} />,
    },
    {
      label: '사업비내역',
      key: '사업비내역',
      children: <TaskReqstWctContainer ojtKey={ojtKey} />,
    },
    {
      label: '성과지표',
      key: '성과지표',
      children: <TaskReqstRsltContainer ojtKey={ojtKey} />,
    },
    {
      label: '첨부문서',
      key: '첨부문서',
      children: <TaskReqstAtchContainer ojtKey={ojtKey} />,
    },
  ]);
  return (
    <>
      <Tabs items={tabItems} />
    </>
  );
};

export default React.memo(TaskReqstDetailContainer);
