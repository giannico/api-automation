import { TodosService } from './services/json-placeholder/TodosService';

const todosService = new TodosService();

todosService.getTodos().then((response) => {
  console.log(response);
});
