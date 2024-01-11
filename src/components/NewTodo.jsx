import { useDispatch } from "react-redux"
import { createTodo } from "../store/todos/todos-actions";

export const NewTodo = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(createTodo(evt.target.title.value));
    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="new todo" />
      <input type="submit" value="Add Todo" />
    </form>
  )
}