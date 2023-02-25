import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state = state.push(action.payload);
    },
    removeTodo(state, action) {
      return (state = state.filter((todo) => todo.id !== action.payload));
    },
    checkTodo(state, action) {
      const index = state.findIndex(todo => todo.id === action.payload)
      state.at(index).isChecked = !state.at(index).isChecked
    },
  },
});

export const actions = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
