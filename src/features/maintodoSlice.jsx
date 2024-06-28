import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const maintodoSlice = createSlice({
    name: "mainTodos",
    initialState: [],
    reducers: {
        addMain: (state, action) => {
            const mainTodo = {
                id: uuidv4(),
                title: action.payload,
                completed: false,
            };
            state.push(mainTodo);
        },

        removeMain: (state, action) => {
            const ind = state.findIndex((todo) => (todo.id === action.payload));
            state.splice(ind, 1);
        },

        completedMain: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo){
                todo.completed = !todo.completed;
            }
        },
        addTitle: (state, action) => {
            const exists = state.find((todo) => (todo.id === action.payload.id));
            if (exists){
                exists.title = action.payload.title;
            }
        },
    }
});


export const { addMain, removeMain, completedMain, addTitle } = maintodoSlice.actions;
export default maintodoSlice.reducer;