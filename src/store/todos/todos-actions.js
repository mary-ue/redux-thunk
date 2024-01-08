import { client } from '../../api';

export const ADD_TODOS = 'ADD_TODOS';

const addTodos = (todos) => ({
  type: ADD_TODOS,
  payload: todos,
});

export const loadTodos = () => (dispatch) => {
  client.get('https://jsonplaceholder.typicode.com/todos')
    .then((todos) => dispatch(addTodos(todos)))
    .catch((error) => console.error(error));
};
