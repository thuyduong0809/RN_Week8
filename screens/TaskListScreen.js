import React, { useState } from 'react';
import { View, FlatList, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import TaskItem from '../components/TaskItem';

const TaskListScreen = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row"}}>
      <Image source={require('../assets/download.jpg')} style={{width:100, height: 100, borderRadius: 50}}></Image>
      <Text style={styles.text}>Hi Twikle 
      <br/> Have agreate day a head</Text>
      </View>
      <TextInput
          style={styles.input}
          placeholder="Search"
          value={newTask}
          onChangeText={setNewTask}
        />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.inputContainer}>
        <Button title="+" onPress={handleAddTask}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text:{
    margin: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    margin: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    margin: 15,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default TaskListScreen;
