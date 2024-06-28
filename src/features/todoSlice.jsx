import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name : "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: uuidv4(),
                pId: action.payload.pId,
                desc: action.payload.desc,
                completed: false,
            };
            state.push(newTodo);
        },

        removeTodo: (state, action) => {
            const ind = state.findIndex((todo) => (todo.id === action.payload));
            state.splice(ind, 1);
        },

        completedTodo: (state, action) => {
            const todo = state.find((todo) => (todo.id === action.payload));
            if (todo){
                todo.completed = !todo.completed;
            }
        },

        addDesc: (state, action) => {
            const itemExists = state.find((todo) => (todo.id === action.payload.id));
            if (itemExists){
                itemExists.desc = action.payload.desc;
            }
        }
    }
});

export const { addTodo, removeTodo, completedTodo, addDesc } = todoSlice.actions;
export default todoSlice.reducer;