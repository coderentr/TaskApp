import {Task} from '../redux/types';

const list: Task[] = [
  {
    id: 1,
    title: 'Spor yap',
    isDone: true,
  },
  {
    id: 2,
    title: 'React Çalış',
    isDone: false,
  },
  {
    id: 3,
    title: 'Kitap Oku',
    isDone: true,
  },
];

const data = {
  list,
};

export const taskService = {
  getTaskList,
  setTaskStatus,
  addTaskToList,
  deleteTaskFromList,
};
async function getTaskList(): Promise<Task[]> {
  return data.list;
}
async function setTaskStatus({id}: {id: number}): Promise<Task[]> {
  const list = data.list;
  list.map(task => {
    if (task.id == id) {
      task.isDone = !task.isDone;
    }
  });
  return list;
}
async function addTaskToList({text}:{text:string}):Promise<Task[]>{
  const list=data.list;
  const taskItem:Task={
   id:list.length+1,
   isDone:false,
   title:text
  }
  list.push(taskItem)
  return list;
}
async function deleteTaskFromList({id}:{id:number}):Promise<Task[]>{
  data.list = data.list.filter(item => item.id !== id);
  return data.list;
}