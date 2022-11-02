import React from 'react';
import { TinyLine } from '@ant-design/plots';
function SparkLine() {
  const data = [264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525];
  const config = {
    height: 60,
    width: 300,
    autoFit: false,
    data,
    smooth: false,
    point: {
      size: 5,
      color: ['#d62728', '#2ca02c', '#000000'],
    },
  };
  return <TinyLine {...config} />;
}

export default SparkLine;
