import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TaskListScreen from './screens/TaskListScreen';

const App = () => {
  return (
    <Provider store={store}>
      <TaskListScreen />
    </Provider>
  );
};

export default App;
