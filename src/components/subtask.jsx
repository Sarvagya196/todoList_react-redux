import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDesc, removeTodo, completedTodo } from "../features/todoSlice";
import deleteIcon from "../assets/delIcon.png";
import tick from "../assets/tick.png";

function SubTask( {tId, isCompleted=false, des=""} ){
    const [text, setText] = useState(`${des}`);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setText(e.target.value);
        const payload ={
            id: tId,
            desc: e.target.value,
        };
        dispatch(addDesc(payload));
    }

    const handleDelete = () => {
        dispatch(removeTodo(tId));
    }

    const handleCompleted = () => {
        dispatch(completedTodo(tId));
    }
    return (
        <>
        <div className="w-full bg-[#222] rounded p-[10px] flex flex-col gap-[5px]">
            <input type="text" value={text} onChange={handleChange} placeholder="Enter Subtask Here" className={`bg-transparent ${isCompleted === true ? 'line-through' : 'no-underline'} placeholder:opacity-40`}/>
            <div className="flex gap-[10px]">
                <button
                onClick={handleDelete}>
                    <img alt="delete" src={deleteIcon} className="h-[20px] opacity-50"/>
                </button>

                <button
                onClick={handleCompleted}>
                    <img alt="Task Completed" src={tick} className="h-[25px] opacity-80"/>
                </button>

            </div>
        </div>
        </>
    )
}

export default SubTask;