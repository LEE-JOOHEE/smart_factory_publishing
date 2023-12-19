import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;
const TitlePage = ({ children }) => {
  return <Title level={3}>{children}</Title>;
};

export default TitlePage;
