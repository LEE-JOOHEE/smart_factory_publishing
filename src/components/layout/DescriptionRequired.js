import React from 'react';
import { Space, Typography } from 'antd';
const { Text } = Typography;
const DescriptionRequired = ({ children }) => {
  return (
    <Space>
      <Text type="danger">*</Text>
      {children}
    </Space>
  );
};

export default DescriptionRequired;
