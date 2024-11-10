import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../redux/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(toggleTask(task.id))}>
        <View style={[styles.checkbox, task.completed && styles.checked]} />
      </TouchableOpacity>
      <Text style={[styles.text, task.completed && styles.textCompleted]}>
        {task.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#007AFF',
  },
  text: {
    fontSize: 16,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});

export default TaskItem;
