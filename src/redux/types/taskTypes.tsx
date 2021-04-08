//Nesnemizin bir interface'ni tanımlayıp parametre ve bunların tiplerini tanımlıyoruz. 
export interface Task { 
    id:number,  
    title:string, 
    isDone:boolean,
}
//Aksiyon tanımlamalarımızı yapıyoruz. Liste aşağıya doğru uzayacaktır. 
export const GET_TASK_LIST_SUCCESS="GET_TASK_LIST_SUCCESS";
export const GET_TASK_LIST_ERROR="GET_TASK_LIST_ERROR";
export const SET_TASK_STATUS_SUCCESS="SET_TASK_STATUS_SUCCESS";
export const SET_TASK_STATUS_ERROR="SET_TASK_STATUS_ERROR";

//Aksiyonlarımızın tiplerini ve alacakları parametreleri yazıyoruz. 
interface GetTaskListSuccess{  //Task tipinde liste döndüren metod. 
    type:typeof GET_TASK_LIST_SUCCESS,
    payload:Task[]
}
interface GetTaskListError{  //Task tipinde liste döndüren metod. 
    type:typeof GET_TASK_LIST_ERROR,
    payload:string//burda apiden gelen bir response'un içeriğini interface oluşturulup o da geri döndürülebilir.
}
interface SetTaskStatusSuccess{
    type:typeof SET_TASK_STATUS_SUCCESS,
    payload:Task[],
}
interface SetTaskStatusError{
    type:typeof SET_TASK_STATUS_ERROR,
    payload:string,
}
export type TaskActions=GetTaskListSuccess   | GetTaskListError  | SetTaskStatusSuccess | SetTaskStatusError
//Yazdığımız aksiyonları araya | koyarak taskActions larına ekleyebiliriz.  TaskActions nesnesini kullanarak bunlara actions içerisinde erişeceğiz. 

