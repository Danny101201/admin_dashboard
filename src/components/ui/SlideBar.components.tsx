import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';

import { links } from '../../data/dummy';
import { useStateContext } from '../../Context/ContextProvider';
function SlideBar() {
  const { activedMenu, setActivedMenu, currrentColor } = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className="mx-3 h-screen  overflow-auto pb-10 pt-5">
      {activedMenu && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-[-1]"
            onClick={() => {
              setActivedMenu(false);
            }}
          ></div>
          <div>
            <div>
              <Link
                to="/"
                onClick={() => {
                  setActivedMenu(false);
                }}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <SiShopware />

                  <div className="ml-2">Shoppy</div>
                </div>
                <button
                  onClick={() => {
                    setActivedMenu((preState) => !preState);
                  }}
                  className="text-2xl hover:text-gray-300"
                >
                  <MdOutlineCancel />
                </button>
              </Link>
            </div>
            <div className="mt-10">
              {links.map((item) => (
                <div key={item.title} className="cursor-pointer">
                  <p className="text-gray-400 my-4 uppercase">{item.title}</p>
                  {item.links.map((link) => (
                    <NavLink
                      key={link.name}
                      to={`/${link.name}`}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currrentColor : '',
                      })}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SlideBar;
