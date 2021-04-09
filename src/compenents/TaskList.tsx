import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTaskToList, deleteTaskFromList, getTaskList, RootState, setTaskStatus} from '../redux';

//Use Effect kullanarak datalarımızı UI'a çekiyoruz.

const TaskListCompenent = () => {
  const dispatch = useDispatch();
  const {taskList} = useSelector((state: RootState) => state.task);
  const [task, SetTask] = useState('');
  function getTasks() {
    dispatch(getTaskList());
  }
  function SetTaskStatus(id: number) {
    dispatch(setTaskStatus({id}));
    getTaskList();
  }
  useEffect(() => {
    getTasks();
  }, []);
  function AddTaskToList(text: string) {
    dispatch(addTaskToList({text}));
    getTasks();
    SetTask('');
  }
  function DeleteTaskFromList(id: number) {
    dispatch(deleteTaskFromList({id}));
    getTasks();
    SetTask('');
  }
  
  return (
    <View style={{margin: 20}}>
      <TextInput
        onChangeText={task => SetTask(task)}
        placeholder="Enter Task."
        style={{
          borderRadius: 30,
          fontWeight: 'bold',
          fontSize: 22,
          borderWidth: 2,
          borderColor: 'grey',
          margin: 10,
        }}></TextInput>
      <TouchableOpacity
        onPress={() => AddTaskToList(task)}
        style={{
          borderRadius: 30,
          margin: 10,
          backgroundColor: '#4F51DB',
          justifyContent: 'center',
          height: 50,
        }}>
        <Text
          style={{
            alignContent: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Add Task
        </Text>
      </TouchableOpacity>
      <FlatList
        style={{margin: 10}}
        data={taskList}
        renderItem={taskList => (
          <TouchableOpacity onPress={() => SetTaskStatus(taskList.item.id)}>
            <View style={{flexDirection:'row'}}>
              <View
                style={{
                  flexDirection: 'row',
                  borderColor: 'black',
                  borderWidth: 2,
                  margin: 2,
                  width: '85%',
                }}>
                <Text
                  style={{
                    backgroundColor: taskList.item.isDone ? 'green' : 'red',
                    textAlign: 'center',
                    color: 'white',
                    padding: 10,
                    margin: 10,
                  }}>
                  {taskList.item.id.toString()}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlignVertical: 'center',
                  }}>
                  {taskList.item.title}
                </Text>
              </View>
              <View style={{flexDirection: 'row', width: '15%'}}>
                <TouchableOpacity onPress={()=>DeleteTaskFromList(taskList.item.id)}>
                  <Text
                    style={{
                      backgroundColor: 'red',
                      fontSize: 25,
                      textAlign: 'center',
                      color: 'white',
                      margin: 5,
                      height: 40,
                      borderColor: 'black',
                      borderWidth: 2,
                      width:40,
                      justifyContent:'center',
                      borderRadius:50
                    }}>
                    x
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default TaskListCompenent;
