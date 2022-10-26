import React, { useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';

import { Stacked, SparkLine, Pie, Button, Line } from '../index';
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from '../../data/dummy';
import { useStateContext } from '../../Context/ContextProvider';
function Ecommerce() {
  const { currrentColor } = useStateContext();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap justify-center gap-5">
        <div className="bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-80  bg-hero-pattern bg-no-repeat bg-cover bg-center flex items-center justify-start">
          <div>
            <p className="text-gray-400 font-blod">Earnings</p>
            <p className="text-black text-2xl">$63,448.78</p>
            <div className="mt-4">
              <Button color="white" bgColor={currrentColor} text="Download" className="rounded-[10px]" size="sm" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-wrap gap-2 items-center justify-center">
          {earningData.map((earn) => (
            <div key={earn.title} className=" h-44 w-56 bg-white rounded-md shadow-sm p-4 xl:flex-1 flex-0">
              <button
                style={{ background: earn.iconBg, color: earn.iconColor }}
                className="p-4 rounded-full text-3xl cursor-pointer hover:shadow-sm"
              >
                {earn.icon}
              </button>
              <div className="mt-2">
                <span className="font-bold text-lg">{earn.amount}</span>
                <span className="ml-2" style={{ color: earn.pcColor }}>
                  {earn.percentage}
                </span>
              </div>
              <div className="text-gray-400 mt-2">{earn.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        <div className="md:w-780 bg-white dark:text-gray-200  m-3 p-4 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center ">
            <p className="text-black text-xl font-bold">Revenue Updates</p>
            <div className="flex items-center gap-5">
              <div className="text-black flex items-center gap-2">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </div>
              <div className="text-green-300 flex items-center gap-2">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2">
            <div className="grid gap-5">
              <div>
                <div className="font-semibold text-3xl text-black flex items-center">
                  <p>$93,438</p>
                  <span className="rounded-lg text-white p-1 bg-green-400 text-xs self-end ml-5">23%</span>
                </div>
                <span className="text-gray-400 text-base inline-block mt-2">Budget</span>
              </div>
              <div>
                <p className="font-semibold text-3xl text-black">$48,487</p>
                <span className="text-gray-400 text-base inline-block mt-2">Expense</span>
              </div>
              <div>
                <SparkLine
                  currentColor={currrentColor}
                  id="line-sparkLine"
                  type="linear"
                  height={150}
                  width={250}
                  data={SparklineAreaData}
                  color={currrentColor}
                />
              </div>
              <div>
                <Button bgColor={currrentColor} color="white" text="Download Report" />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
