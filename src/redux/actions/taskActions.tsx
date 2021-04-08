import {ActionCreator} from 'redux';
import {taskService} from '../../service';
import {
  GET_TASK_LIST_ERROR,
  GET_TASK_LIST_SUCCESS,
  SET_TASK_STATUS_ERROR,
  SET_TASK_STATUS_SUCCESS,
  Task,
  TaskActions,
} from '../types';
//Başarılıysa reducer'a GET_TASK_LIST_SUCCESS action'un ve parametresini döndürüyoruz.
const getTaskListSuccess: ActionCreator<TaskActions> = (list: Task[]) => {
  return {type: GET_TASK_LIST_SUCCESS, payload: list};
};
const getTaskListError: ActionCreator<TaskActions> = (message: string) => {
  return {type: GET_TASK_LIST_ERROR, payload: message};
};
//service'mizden dönen değerimizin durumuna göre succes yada error action types'larımızı reducer'a göndereceğiz.
const setTaskStatusSuccess: ActionCreator<TaskActions> = (list: Task[]) => {
  return {type: SET_TASK_STATUS_SUCCESS, payload: list};
};
const setTaskStatusError: ActionCreator<TaskActions> = (message: string) => {
  return {type: SET_TASK_STATUS_ERROR, payload: message};
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
