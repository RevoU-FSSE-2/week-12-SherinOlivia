import React, { useState } from 'react';
import { Button, Space } from 'antd';

interface Props {
  label: string;
}

const NewButton = (label: Props) => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <Space direction="vertical">
      <Space wrap>
        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
          {label.label}
        </Button>
      </Space>
    </Space>
  );
};

export default NewButton