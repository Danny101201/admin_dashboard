import React, { useEffect, useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';

import { Stacked, SparkLine, Pie, Button, Line, MiniStack, MiniPie } from '../index';
import {
  earningData,
  medicalproBranding,
  miniStackdata,
  recentTransactions,
  weeklyStats,
  stackedChartData,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from '../../data/dummy';
import { useStateContext } from '../../Context/ContextProvider';

function Ecommerce() {
  const { currrentColor } = useStateContext();
  const [stackData, setStackData] = useState<{ year: string; value: number; type: string }[]>([]);
  useEffect(() => {
    const result = new Array(...stackedChartData).reduce((acc, stack, index) => {
      stack.forEach((item) => {
        const newItem = { year: item.x, value: item.y, type: index === 0 ? 'Expense' : 'Budget' };
        // @ts-ignore
        acc.push(newItem);
      });
      return acc;
    }, []);
    setStackData(result as unknown as { year: string; value: number; type: string }[]);
  }, []);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap  gap-5">
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
      <div className="flex items-center justify-center  gap-10 flex-wrap relative">
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
          <div className="mt-10 flex flex-wrap gap-5">
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
                <SparkLine />
              </div>
              <div>
                <Button bgColor={currrentColor} color="white" text="Download Report" />
              </div>
            </div>
            <div className="lg:flex-1 flex-0">
              <Stacked chartdata={stackData} />
            </div>
          </div>
        </div>
        <div className=" flex-0 xl:flex-1 self-stretch flex flex-col gap-2 m-3 justify-center">
          <div className="flex-1  rounded-lg p-4  shadow-sm" style={{ backgroundColor: 'rgb(251, 150, 120)' }}>
            <div className="text-white flex items-start justify-between">
              <p className="font-semibold text-white text-2xl">Earnings</p>
              <div>
                <p className="font-semibold text-white text-2xl">$63,448.78</p>
                <p className="text-gray-200 text-md mt-2">Monthly revenue</p>
              </div>
            </div>
            <MiniStack data={miniStackdata} />
          </div>
          <div className="flex-1 bg-white rounded-lg p-4  shadow-sm grid place-items-center">
            <div className="flex items-center justify-center">
              <div>
                <p className="text-black text-2xl pr-[3rem]">$43,246</p>
                <p className="text-md text-gray-400">Yearly sales</p>
              </div>
              <MiniPie />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white rounded-lg m-3 p-4  shadow-sm w-[25rem]">
          <div className="flex items-center justify-between">
            <h1 className="whitespace-nowrap font-semibold text-xl">Recent Transactions</h1>
            <select
              id="small"
              className="block p-2   text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="flex flex-col gap-5 mt-10 border-b border-gray-200 pb-5">
            {recentTransactions.map((item) => (
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-5">
                  <button
                    style={{ background: item.iconBg, color: item.iconColor }}
                    className="cursor-pointer p-4 text-2xl rounded-md hover:shadow-md"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-md text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex items-start justify-between pt-5">
            <button style={{ background: currrentColor }}>Add</button>
            <p>36 Recent Transactions</p>
          </div>
        </div>
        <div className="flex-0 xl:flex-1 bg-white rounded-lg shadow-sm">123</div>
      </div>
    </div>
  );
}

export default Ecommerce;
