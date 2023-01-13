export interface ITodo {
  id: string;
  content: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateTodo {
  title: string;
  content: string;
}
