import React from "react";
import TaskColumn from "./TaskColumn";

function Main(){
    return <div className="flex-1 bg-slate-900">
    <h1 className="text-white text-center text-6xl font-bold mx-4 my-14">All Tasks</h1>
    <div className="flex mx-4 justify-between space-x-4 text-white">
        <TaskColumn columnName="Not Started" />
        <TaskColumn columnName="In Progress" />
        <TaskColumn columnName="In Review" />
        <TaskColumn columnName="Completed" />
    </div> 
    </div>
};

export default Main;
