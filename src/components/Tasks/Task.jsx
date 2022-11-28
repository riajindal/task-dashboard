import React from 'react';
import {TrashIcon} from '@heroicons/react/24/solid';

function Task(props){
    return <div className='bg-white text-black rounded-md py-3 px-2 mx-2 my-3'>
    <div className='flex mb-3'>
        <h3 className='font-bold text-lg'>{props.title}</h3>
        <button className='ml-auto w-6 h-6'>
            <TrashIcon className='w-5 h-5' onClick={() => {props.onDelete(props.id)}}/>
        </button>
    </div>
    <p>
        {props.description}
    </p>
</div>
};

export default Task;