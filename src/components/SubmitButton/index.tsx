import React, { useState } from 'react';
import { Button } from 'antd';


const SubmitButton = () => {
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
        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)} htmlType={"submit"}>
          Submit
        </Button>
  );
};

export default SubmitButton