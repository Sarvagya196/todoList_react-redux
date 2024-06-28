import React from "react"
import Task from "../components/task"
import plus from "../assets/add.png"
import { addMain } from "../features/maintodoSlice";
import { useDispatch, useSelector } from "react-redux";

function Home(){
    const maintodos = useSelector((state) => state.maintodos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addMain());
    }

    return (
        <>
        <div className="relative z-1 p-[10px] flex gap-[10px] bg-[#9e5173] h-[100vh] w-full">
            <div className="flex gap-[10px] mr-[310px] max-[639px]:mr-0 max-[639px]:mb-[60px] sm:max-lg:mr-[210px] overflow-hidden hover:overflow-x-auto">
            {maintodos?.map((mtodo) => (
                <Task key={mtodo?.id} mId={mtodo.id} isCompleted={mtodo.completed} tit={mtodo.title}/>
            ))}
            </div>
            <div className="absolute z-2 right-[10px] max-[639px]:right-0 max-[639px]:bottom-[10px] h-[50px] w-[300px] sm:max-lg:w-[200px] max-[639px]:w-full flex gap-[10px] items-center text-white bg-white/30 rounded-lg">
                <img
                alt="Add card" src={plus} className="h-[40px]"
                onClick={handleAdd}></img>
                <p>Add Another List</p>
            </div>
        </div>
        </>
    )
}

export default Home;