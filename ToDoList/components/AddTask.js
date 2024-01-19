import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values'

const AddTask =  ({ onAddTask }) => {
    const [initialTitle, setTitle] = useState('');

    const handleAddTask = () => {
        if (initialTitle.trim() !== '') {
            onAddTask(String(initialTitle));
            setTitle('');
        }
    };

    return (
        <View style={styles.addTask}>
            <TextInput
                style={styles.input}
                placeholder="Enter new task"
                value={initialTitle}
                onChangeText={(text) => setTitle(text)}
                keyboardType="default"
                returnKeyType="done"
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );
};

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;