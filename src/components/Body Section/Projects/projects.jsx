import React, {useState} from 'react';
import Searchbar from '../../Searchbar';

function Projects(){

    const [currProject, setCurrProject] = useState({
        title: ""
      });

    const tasks = [
        {title: "Coding", status: "unchecked"},
        {title: "Designing", status: "unchecked"},
        {title: "Eating", status: "unchecked"},
        {title: "Sleeping", status: "unchecked"},
      ];
    
      const projects = [
        {title: "Project title"},
        {title: "Project title"},
        {title: "Project title"},
        {title: "Project title"},
        {title: "Project title"},
        {title: "Project title"},
      ];
        
      function selectProject(project){
        console.log(project);
        setCurrProject(project);
      }

    return <div className='p-7 flex-1 bg-slate-900'>
    <Searchbar />
    <h3 className='text-4xl font-semibold my-5 mx-3 text-white'>Welcome back, Ria</h3>
    <div className="">
    <div className="grid grid-cols-3 items-start">
   <div className="bg-fuchsia-300 rounded-lg m-2 p-5">
      <h3 className="text-2xl font-semibold p-3">Today's Tasks</h3>
      <ul>
      {tasks.map((task, index) => {
        return <li key={index} className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{task.title}</span>
        </li>
      })}
      </ul>
    </div>
    <div className="bg-orange-200 rounded-lg m-2 p-5 break-inside-avoid col-span-2 row-span-2">
      <h3 className="text-2xl font-semibold p-3">Projects</h3>
      <div className="grid grid-cols-3">
       {projects.map((project, index) => {
        return <div key={index} value={project} onClick={() => {selectProject(project)}} className="card w-48 relative m-4 p-6 rounded-lg bg-orange-100">
          <div className="icon-box w-10 h-10 absolute -top-4 bg-red-400 flex rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
          </svg>

          </div>
          <h4 className="my-3 font-semibold text-xl">{project.title}</h4>
          <p className="mt-2 mb-1 text-gray-500 font-light text-xs">Progress</p>
          <h2 className="text-xl font-bold">84%</h2>
        </div>
       })} 
      </div>
    </div>
    <div className="bg-amber-300 rounded-lg m-2 p-5">
      <h3 className="text-2xl font-semibold p-3">{currProject.title !== ""  ? currProject.title : "Select a project"}</h3>
      <ul>
      {tasks.map((task, index) => {
        return <li key={index} className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{task.title}</span>
        </li>
      })}
      </ul>
    </div>
   </div> 
    </div>
  </div>
};

export default Projects;