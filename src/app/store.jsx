// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from "../features/todoSlice";
// import maintodoReducers from "../features/maintodoSlice"



// export default configureStore({
//   reducer: {
//     todos: todoReducer,
//     maintodos: maintodoReducers,
//   },
// });


import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import todoReducer from "../features/todoSlice";
import maintodoReducers from "../features/maintodoSlice";

// Create the root reducer
const rootReducer = combineReducers({
  todos: todoReducer,
  maintodos: maintodoReducers,
});

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
