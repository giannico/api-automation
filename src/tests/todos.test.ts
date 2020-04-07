import { AxiosResponse } from 'axios';
import { TodosService, Todo } from '../services/json-placeholder/TodosService';

describe('TodosService', () => {
  let todosService: TodosService = null;

  beforeAll(() => {
    todosService = new TodosService();
  });

  describe('getTodos()', () => {
    it('should return a list of todos', async () => {
      const response: AxiosResponse<Array<Todo>> = await todosService.getTodos();
      expect(response.status).toBe(200);
      expect(response.data.length).toEqual(200);
    });
  });

  describe('getTodo()', () => {
    it('should return a single todo for a valid id', async () => {
      const id = 1;

      const response: AxiosResponse<Todo> = await todosService.getTodo(id);

      expect(response.status).toBe(200);
      expect(response.data).toMatchObject({
        userId: id,
        title: expect.any(String),
        completed: expect.any(Boolean),
      });
    });
  });
});
