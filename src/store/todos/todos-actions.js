export const ADD_TODOS = '@@todos/ADD_TODOS';
export const SET_LOADING = '@@todos/SET_LOADING';
export const SET_ERROR = '@@todos/SET_ERROR';
export const ADD_TODO = '@@todos/ADD_TODO';

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

const addTodos = (todos) => ({
  type: ADD_TODOS,
  payload: todos,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const loadTodos = () => (dispatch, _, client) => {
  dispatch(setLoading());

  client
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((todos) => dispatch(addTodos(todos)))
    .catch((error) => dispatch(setError(error)));
};

export const createTodo = (title) => (dispatch, _, client) => {
  client.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false,
    userId: 1,
  })
  .then(newTodo => dispatch(addTodo(newTodo)))
  .catch((error) => dispatch(setError(error)));
};
