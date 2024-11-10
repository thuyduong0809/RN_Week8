import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    { id: '1', title: 'To check email', completed: true },
    { id: '2', title: 'UI task web page', completed: true },
    { id: '3', title: 'Learn JavaScript basic', completed: false },
    { id: '4', title: 'Learn HTML Advance', completed: false },
    { id: '5', title: 'Medical App UI', completed: false },
    { id: '6', title: 'Learn Java', completed: false },
  ],
  reducers: {
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) task.title = title;
    },
    addTask: (state, action) => {
      state.push({
        id: Date.now().toString(),
        title: action.payload,
        completed: false,
      });
    },
  },
});

export const { toggleTask, editTask, addTask } = taskSlice.actions;
export default taskSlice.reducer;
