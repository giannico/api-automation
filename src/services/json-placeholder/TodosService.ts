import axios, { AxiosResponse } from 'axios';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: string;
}

export class TodosService {
  private readonly BASE_URL = 'https://jsonplaceholder.typicode.com';
  constructor() {}

  getTodos(): Promise<AxiosResponse<Todo[]>> {
    return axios.get<Todo[]>(`${this.BASE_URL}/todos`);
  }

  getTodo(id: number): Promise<AxiosResponse<Todo>> {
    return axios.get<Todo>(`${this.BASE_URL}/todos/${id}`);
  }
}
