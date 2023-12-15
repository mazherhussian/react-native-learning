import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const App = () => {
  const [task, setTask] = useState("");
  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [searchTask, setSearchTask] = useState("");
//function to add task in toDo
  const handleAddTask = () => {
    if (task.trim()) {
      const existingTasks = [...submittedTasks];
      const newTasks = existingTasks.concat(task);
      setSubmittedTasks(newTasks);
      setTask("");
    }
  };
// function to remove task from toDo
  const handleRemoveTask = (item) => {
    const remainingTasks = submittedTasks.filter((i) => i !== item);
    setSubmittedTasks(remainingTasks);
  };
//function to search task
  const filteredTasks = submittedTasks.filter((item) =>
    item.toLowerCase().includes(searchTask.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search Task"
        value={searchTask}
        onChangeText={setSearchTask}
      />

      <FlatList
        data={filteredTasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveTask(item)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 16,
    textAlign: "center",
    color: "green",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    paddingHorizontal: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
  },
  addButton: {
    marginLeft: 8,
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    padding: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: "#333333",
  },
  removeButton: {
    backgroundColor: "#FF5858",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  removeButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  searchInput: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
  },
});

export default App;
