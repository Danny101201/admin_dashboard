import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TinyColumn } from '@ant-design/plots';

interface MiniStackProps {
  data: number[];
}
const MiniStack = ({ data }: MiniStackProps) => {
  const config = {
    height: 100,
    width: 400,
    autoFit: false,
    columnWidthRatio: 0.8,
    color: function (item: any) {
      console.log(item);
      return 'white';
    },
    data,
    tooltip: {
      customContent: function (x: any, data: any) {
        return `NO.${x}: ${data[0]?.data?.y.toFixed(2)}`;
      },
    },
  };
  return <TinyColumn {...config} />;
};

export default MiniStack;
