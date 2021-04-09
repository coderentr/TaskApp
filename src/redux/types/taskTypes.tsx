export interface Task { 
    id:number,  
    title:string, 
    isDone:boolean,
}
export const GET_TASK_LIST_SUCCESS="GET_TASK_LIST_SUCCESS";
export const GET_TASK_LIST_ERROR="GET_TASK_LIST_ERROR";

export const SET_TASK_STATUS_SUCCESS="SET_TASK_STATUS_SUCCESS";
export const SET_TASK_STATUS_ERROR="SET_TASK_STATUS_ERROR";

export const ADD_TASK_TO_LIST_SUCCESS="ADD_TASK_TO_LIST_SUCCESS";
export const ADD_TASK_TO_LIST_ERROR="ADD_TASK_TO_LIST_ERROR";

export const DELETE_TASK_FROM_LIST_SUCCESS="DELETE_TASK_FROM_LIST_SUCCESS";
export const DELETE_TASK_FROM_LIST_ERROR="DELETE_TASK_FROM_LIST_ERROR";

interface GetTaskListSuccess{ 
    type:typeof GET_TASK_LIST_SUCCESS,
    payload:Task[]
}
interface GetTaskListError{  
    type:typeof GET_TASK_LIST_ERROR,
    payload:string
}
interface SetTaskStatusSuccess{
    type:typeof SET_TASK_STATUS_SUCCESS,
    payload:Task[],
}
interface SetTaskStatusError{
    type:typeof SET_TASK_STATUS_ERROR,
    payload:string,
}
interface AddTaskToListSuccess{
    type:typeof ADD_TASK_TO_LIST_SUCCESS,
    payload:Task[]
}
interface AddTaskToListError{
    type:typeof ADD_TASK_TO_LIST_ERROR,
    payload:string
}

interface DeleteTaskFromListSuccess{
    type:typeof DELETE_TASK_FROM_LIST_SUCCESS,
    payload:Task[]
}
interface DeleteTaskFromListError{
    type:typeof DELETE_TASK_FROM_LIST_ERROR,
    payload:string
}

export type TaskActions=
   GetTaskListSuccess   | GetTaskListError 
 | SetTaskStatusSuccess | SetTaskStatusError
 | AddTaskToListSuccess | AddTaskToListError
 | DeleteTaskFromListSuccess | DeleteTaskFromListError
 

