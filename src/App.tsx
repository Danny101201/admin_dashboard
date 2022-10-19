import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ToolTips from './components/ui/toolTips';

import Area from './components/charts/Area.components';
import Bar from './components/charts/Bar.components';
import ColorMapping from './components/charts/ColorMapping.components';
import Financial from './components/charts/Financial.components';
import Line from './components/charts/Line.components';
import Pie from './components/charts/Pie.components';
import Pyramid from './components/charts/Pyramid.components';
import Stacked from './components/charts/Stacked.components';
import Calendar from './components/pages/Calendar.components';
import ColorPicker from './components/pages/ColorPicker.components';
import Customers from './components/pages/Customers.components';
import Ecommerce from './components/pages/Ecommerce.components';
import Editor from './components/pages/Editor.components';
import Employees from './components/pages/Employees.components';
import Kanban from './components/pages/Kanban.components';
import Orders from './components/pages/Orders.components';
function App() {
  const [activeMenu, setActiveMenu] = useState<boolean>(true)
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <ToolTips text="setting" />
          </div>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed slidebar dark:bg-secondary-dark-bg dark:text-white bg-white'>SlideBar</div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg dark:text-white">SlideBar w-0</div>
        )}
        <div className={
          `bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
        }>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg  dark:text-white navbar w-full">NavBar</div>
          <div>
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={(<Ecommerce />)} />
              <Route path="/ecommerce" element={(<Ecommerce />)} />

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
