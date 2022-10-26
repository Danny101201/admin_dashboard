import React, { ReactElement, ReactSVGElement, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Cart, Chat, Notification, UserProfile } from '../index';
import { useStateContext } from '../../Context/ContextProvider';
interface NavButtonprops {
  onClick: () => void;
  icon: ReactElement;
  color: string;
  dotColor?: string;
}
const NavButton = ({ onClick, icon, color, dotColor }: NavButtonprops) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ color }}
      className="relative text-xl rounded-full p-2 hover:bg-light-gray"
    >
      <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-1 top-1" />
      {icon}
    </button>
  );
};
function Navbar() {
  const { activedMenu, setActivedMenu, currrentColor } = useStateContext();
  return (
    <div className="p-2">
      <div className="flex">
        <NavButton
          onClick={() => setActivedMenu((preState) => !preState)}
          icon={<AiOutlineMenu />}
          color={currrentColor}
        />
        <div className="ml-auto flex items-center gap-2">
          <NavButton
            onClick={() => setActivedMenu((preState) => !preState)}
            icon={<FiShoppingCart />}
            color={currrentColor}
            dotColor="yellow"
          />
          <NavButton
            onClick={() => setActivedMenu((preState) => !preState)}
            icon={<BsChatLeft />}
            color={currrentColor}
            dotColor="yellow"
          />
          <NavButton
            onClick={() => setActivedMenu((preState) => !preState)}
            icon={<RiNotification3Line />}
            color={currrentColor}
            dotColor="yellow"
          />
          <div className="flex items-center justify-center gap-1 ml-4">
            <div className="bg-red-500 w-10 h-10 rounded-full overflow-hidden">
              <img src="/avatar/avatar.jpg" className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              Hi,<b>Danny</b>
            </div>
            <MdKeyboardArrowDown className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
