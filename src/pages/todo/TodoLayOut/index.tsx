import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../../api/api";
import { ITodo } from "../todo.types";

const TodoUl = styled.ul`
  padding: 10px;
  width: 100%;
`;
const TodoLi = styled.li`
  border: 1px solid #000;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 3px;
  strong {
    padding-bottom: 10px;
  }
  div {
    display: flex;
    gap: 5px;
    button {
      border: 1px solid #000;
      border-radius: 5px;
    }
  }
`;

export default function TodoLayOut() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getTodoList = async () => {
    try {
      const todos = await api.get(`todos`);
      setTodoList(todos.data.data);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
  const handleDelTodo = async (todoId: string) => {
    try {
      await api.delete(`todos/${todoId}`);
      setTodoList((prev) => {
        return prev.filter((todo) => todo.id !== todoId);
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <>
      {!isLoading ? (
        <TodoUl>
          {todoList.map((todo: ITodo) => (
            <TodoLi key={todo.id}>
              <strong>제목: {todo.title}</strong>
              <p>내용: {todo.content} </p>
              <div>
                <button>수정</button>
                <button onClick={() => handleDelTodo(todo.id)}>삭제</button>
              </div>
            </TodoLi>
          ))}
        </TodoUl>
      ) : (
        <strong>...Loading</strong>
      )}
    </>
  );
}
