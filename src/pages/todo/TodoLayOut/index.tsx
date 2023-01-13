import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../../context/userInfo";
import { ITodo } from "../todo.types";

const TodoUl = styled.ul`
  margin-top: 10px;
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
  const { state } = useContext(AuthContext);
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const getTodoList = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_KEY}/todos`, {
        headers: {
          Authorization: state.token,
        },
      })
      .then((res) => {
        setTodoList(res.data.data);
        setIsLoading(false);
      });
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
                <button>삭제</button>
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
