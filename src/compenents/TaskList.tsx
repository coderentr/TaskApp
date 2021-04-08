import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTaskList, RootState, setTaskStatus} from '../redux';

//Use Effect kullanarak datalarımızı UI'a çekiyoruz.

const TaskListCompenent = () => {
  const dispatch = useDispatch();
  const {taskList} = useSelector((state: RootState) => state.task);
  function getTasks() {
    dispatch(getTaskList());
  }
  function SetTaskStatus(id:number){
    dispatch(setTaskStatus({id}));
    getTaskList();
  }
  useEffect(() => {
    getTasks();
  }, []);
  console.log(taskList);
  return (
    <View style={{margin: 20}}>
      <FlatList
        style={{margin: 10}}
        data={taskList}
        renderItem={taskList => (
          <TouchableOpacity onPress={() => SetTaskStatus(taskList.item.id)}>
            <View
              style={{
                flexDirection: 'row',
                borderColor: 'black',
                borderWidth: 2,
                margin: 2,
              }}>
              <Text
                style={{
                  backgroundColor: taskList.item.isDone ? 'green' : 'red',
                  textAlign: 'center',
                  color: 'white',
                  padding: 10,
                  margin: 10,
                }}>
                { taskList.item.id.toString()}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlignVertical: 'center',
                }}> 
                { taskList.item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default TaskListCompenent;
