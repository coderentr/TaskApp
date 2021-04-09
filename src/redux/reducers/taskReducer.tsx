import { ADD_TASK_TO_LIST_ERROR, ADD_TASK_TO_LIST_SUCCESS, DELETE_TASK_FROM_LIST_ERROR, DELETE_TASK_FROM_LIST_SUCCESS, GET_TASK_LIST_ERROR, 
  GET_TASK_LIST_SUCCESS, SET_TASK_STATUS_ERROR, SET_TASK_STATUS_SUCCESS, Task, TaskActions } from "../types";

interface TaskState {  //Task ile ilgili datalarımızı taskProps'da tutuyoruz. Başka bir nesneye ihtiyaç duymanız halinde ilave edebilisiniz. 
    taskList: Task[];
    message:string;
  }
  
  //state'mizi oluşturuyoruz. Dataları burada barındırıypruz. TaskState'tipinde olduğunu belittyoruz.
  const initialState: TaskState = {  
    taskList: [],
    message:"",
  };

  export function taskReducer(
    state: TaskState = initialState,
    action: TaskActions,
  ): TaskState {
    switch (action.type) {
      case GET_TASK_LIST_SUCCESS: {
        return {
          ...state,
          taskList: action.payload,
        };
      }
      case GET_TASK_LIST_ERROR: {
          return {
              ...state,
              message: action.payload,
            };
      }
      case SET_TASK_STATUS_SUCCESS: {
        return {
          ...state,
          taskList: action.payload,
        };
      }
      case SET_TASK_STATUS_ERROR: {
          return {
              ...state,
              message: action.payload,
            };
      }
      case ADD_TASK_TO_LIST_SUCCESS:{
        return {
          ...state,
          taskList:action.payload,
        };
      }
      case ADD_TASK_TO_LIST_ERROR:{
        return {
          ...state,
           message:action.payload
        }
      }
      case DELETE_TASK_FROM_LIST_SUCCESS:{
        return {
          ...state,
          taskList:action.payload,
        };
      }
      case DELETE_TASK_FROM_LIST_ERROR:{
        return {
          ...state,
           message:action.payload
        }
      }
      default:
        return state;
    }
  }