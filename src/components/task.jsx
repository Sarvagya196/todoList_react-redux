import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { removeMain, completedMain, addTitle } from "../features/maintodoSlice";
import SubTask from "./subtask";
import plus from "../assets/add.png"
import deleteIcon from "../assets/delIcon.png";
import tick from "../assets/tick.png";

function Task( {mId, isCompleted=false, tit=""}){
    const [title, setTitle] = useState(`${tit}`);
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddSubTask = () => {
        dispatch(addTodo({pId: mId}));
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
        const payload = {
            id: mId,
            title: e.target.value,
        };
        dispatch(addTitle(payload));
    }

    const handleDelete = () => {
        dispatch(removeMain(mId));
    }

    const handleCompleted = () => {
        dispatch(completedMain(mId));
    }

    return (
        <>
            <div className="relative z-1 w-[300px] max-[639px]:min-w-full min-w-[300px] flex flex-col gap-[10px] bg-black text-white rounded-lg">
                <div className="flex gap-[10px] m-[10px]">
                    <input type="text" value={title} placeholder="Enter Task Here" onChange={handleChange} className={`bg-transparent max-[639px]:w-[80vw] h-auto resize-none ${isCompleted === true ? 'line-through' : 'no-underline'} placeholder:opacity-40`}/>
                    <button
                    onClick={handleDelete}>
                        <img alt="delete" src={deleteIcon} className="h-[20px] opacity-50"/>
                    </button>

                    <button
                    onClick={handleCompleted}>
                        <img alt="Task Completed" src={tick} className="h-[25px] opacity-80"/>
                    </button>
                </div>
                <div className="flex flex-col overflow-hidden hover:overflow-y-auto max-h-full gap-[10px] m-[10px] mb-[60px]">
                {todos?.map((todo) => (
                    (mId === todo.pId) && 
                    <SubTask key={todo?.id} tId={todo.id} isCompleted={todo.completed} des={todo.desc}/>
                ))}
                </div>
                <div className="absolute z-2 bg-black w-full bottom-0 flex gap-[10px] items-center py-[10px] rounded">
                    <img
                    alt="Add card" src={plus} className="h-[40px]"
                    onClick={handleAddSubTask}></img>
                    <p>Add a Card</p>
                </div>
            </div>
        </>
    )
}

export default Task;