import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;
const TitleComp = ({ children }) => {
  return <Title level={5}>{children}</Title>;
};

export default TitleComp;
