import {ActionCreator} from 'redux';
import {taskService} from '../../service';
import {
  ADD_TASK_TO_LIST_ERROR,
  ADD_TASK_TO_LIST_SUCCESS,
  DELETE_TASK_FROM_LIST_ERROR,
  DELETE_TASK_FROM_LIST_SUCCESS,
  GET_TASK_LIST_ERROR,
  GET_TASK_LIST_SUCCESS,
  SET_TASK_STATUS_ERROR,
  SET_TASK_STATUS_SUCCESS,
  Task,
  TaskActions,
} from '../types';
const getTaskListSuccess: ActionCreator<TaskActions> = (list: Task[]) => {
  return {type: GET_TASK_LIST_SUCCESS, payload: list};
};
const getTaskListError: ActionCreator<TaskActions> = (message: string) => {
  return {type: GET_TASK_LIST_ERROR, payload: message};
};
const setTaskStatusSuccess: ActionCreator<TaskActions> = (list: Task[]) => {
  return {type: SET_TASK_STATUS_SUCCESS, payload: list};
};
const setTaskStatusError: ActionCreator<TaskActions> = (message: string) => {
  return {type: SET_TASK_STATUS_ERROR, payload: message};
};

const addTaskToListSuccess:ActionCreator<TaskActions>=(list:Task[])=>{
  return {type:ADD_TASK_TO_LIST_SUCCESS, payload:list}
};
const addTaskToListError: ActionCreator<TaskActions> = (message: string) => {
  return {type: ADD_TASK_TO_LIST_ERROR, payload: message};
};
const deleteTaskFromListSuccess:ActionCreator<TaskActions>=(list:Task[])=>{
  return {type:DELETE_TASK_FROM_LIST_SUCCESS, payload:list}
};
const deleteTaskFromListError: ActionCreator<TaskActions> = (message: string) => {
  return {type: DELETE_TASK_FROM_LIST_ERROR, payload: message};
};

export function getTaskList() {
  return dispatch => {
    return taskService.getTaskList().then(
      response => {
        dispatch(getTaskListSuccess(response));
      },
      error => {
        dispatch(getTaskListError('Server error.'));
      },
    );
  };
}

export function setTaskStatus({id}: {id: number}) {
  return dispatch => {
    return taskService.setTaskStatus({id}).then(
      response => {
        dispatch(setTaskStatusSuccess(response));
      },
      error => {
        dispatch(setTaskStatusError('Server Error'));
      },
    );
  };
}

export function addTaskToList({text}:{text:string}){
  return dispatch=>{
    return taskService.addTaskToList({text}).then(
      response=>{
        dispatch(addTaskToListSuccess(response));
      },
      error=>{
          dispatch(addTaskToListError('Server Error'))
      }
    )
  }
}
export function deleteTaskFromList({id}: {id: number}) {
  return dispatch => {
    return taskService.deleteTaskFromList({id}).then(
      response => {
        dispatch(deleteTaskFromListSuccess(response));
      },
      error => {
        dispatch(deleteTaskFromListError('Server Error'));
      },
    );
  };
}
