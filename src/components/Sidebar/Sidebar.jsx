import React, {useState} from "react";
import {Link} from 'react-router-dom';
import control from '../../assets/control.png';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { FolderPlusIcon } from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

function Sidebar() {

    const [open, setOpen] = useState(true);

    const Menus = [
        { title: "Add Project", src: <FolderPlusIcon className='h-6 w-6' />, href:"/projects" },
        { title: "Add Task", src: <CheckCircleIcon className='h-6 w-6' />, href:"/tasks" },
        { title: "Log Out", src: <ArrowRightOnRectangleIcon className='h-6 w-6' />, gap: true, href:"/" },
    ];

    return <div className={` ${open ? "w-56" : "w-24"} p-5 pt-8 h-screen relative bg-slate-800`}>
    <img alt="cursor" src={control} onClick={() => setOpen(!open)} className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-slate-400 ${ !open && "rotate-180"} `} />
    <div className='flex gap-x-4 items-center'>
      <UserCircleIcon className={`cursor-pointer ml-1 h-8 w-8 text-gray-300`} />
      <h1 className={` text-white origin-left font-medium text-xl duration-300 ${!open && "hidden"} `}>Designer</h1>
    </div>
    <ul className='pt-6'>
      {Menus.map((menu, index) => {
        return <Link to={menu.href}>
        <li key={index} className={`text-gray-300 text-sm flex items-center cursor-pointer gap-x-4 p-2 hover:bg-slate-400 rounded-md ${menu.gap ? "mt-7" : "mt-2"}`} >
          {menu.src}
          <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
        </li>
        </Link>
      })}
    </ul>
  </div>
};

export default Sidebar;