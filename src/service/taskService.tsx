//Örnek göstermek adına bir liste oluşturup bu liste üzerinden işlemlerimi gerçekleştireceğim.

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
  //listemizi data nesnemizin içeriside tutacağız.
  list,
};

export const taskService = {
  //metolarımızı actiondan çağırabilmek için export ediyoruz.
  getTaskList,
  setTaskStatus,
};
async function getTaskList(): Promise<Task[]> {
  // Promise<Task[]> listemizin geri dönüş tipini belirtiyoruz.
  return data.list;
}
async function setTaskStatus({id}: {id: number}): Promise<Task[]> {
  //metodumuzun alacağı parametreyi tip tanımını yazarak alıyoruz.
  const list = data.list;
  list.map(task => {
    if (task.id == id) {
      task.isDone = !task.isDone;
    }
  });
  return list;
}
