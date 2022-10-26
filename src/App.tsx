import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Navbar,
  Orders,
  Pie,
  Pyramid,
  SlideBar,
  Stacked,
  ToolTips,
} from './components';
import { useStateContext } from './Context/ContextProvider';

function App() {
  const { activedMenu, setActivedMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <ToolTips text="setting" />
          </div>
        </div>
        {activedMenu && (
          <div
            className="w-72 fixed slidebar text-slate-900 dark:bg-secondary-dark-bg dark:text-white bg-white"
            style={{ zIndex: 99999999 }}
          >
            <SlideBar />
          </div>
        )}
        <div className={`bg-main-bg min-h-screen w-full ${activedMenu ? 'md:ml-72 w-[calc(100%_-_18rem)]' : 'flex-2'}`}>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg  dark:text-white navbar w-full">
            <Navbar />
          </div>
          <div className="pt-14 px-10">
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages  */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* apps  */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts  */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
