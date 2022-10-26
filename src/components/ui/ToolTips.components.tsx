import React from 'react';
import { FiSettings } from 'react-icons/fi';
import ReactTooltip from 'react-tooltip';
interface ToolTipsProps {
  text: string;
  onClick?: () => void;
}
function ToolTips({ text, onClick }: ToolTipsProps) {
  return (
    <button className="relative bg-green-400 rounded-full p-4 hover:shadow-sm" onClick={onClick} data-tip={text}>
      <FiSettings className="peer text-white hover:text-gray-400 w-[1.5rem] h-[1.5rem]" />
      <ReactTooltip place="left" />
    </button>
  );
}

export default ToolTips;
