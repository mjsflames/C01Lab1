import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialTasks }) => {
    const [task, setTask] = useState(initialTasks.map((value) => ({ id: uuidv4(), title: value })));

    const addToDo = (newTitle) => {
        const newTask = { id: uuidv4(), title: newTitle };
        setTask((prevTask) => 
                [...prevTask, newTask]
        );
    };

    const removeToDo = (id) => {
        setTask((tasktitle) => 
            tasktitle.filter(item => item.id !== id)
        );
    };

    return (
        <View style={styles.container}>
            {task.map((tasktitle) => (
                <View key={tasktitle.id}>
                    <Text style={styles.text}>Task Title: {tasktitle.title}</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Remove" onPress={() => removeToDo(tasktitle.id)} />
                    </View>
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
}

ToDoList.defaultProps = {
    initialValues: [],
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;