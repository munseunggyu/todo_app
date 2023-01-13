import axios from "axios";
import React, { ReactEventHandler, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HomeContainer } from "../../../common/MainContainer";
import Nav from "../../../common/Nav";
import { AuthContext } from "../../../context/userInfo";
import { ICreateTodo } from "../todo.types";

const FactoryInputContainer = styled.form`
  margin-top: 78px;
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TodoTitle = styled.input`
  width: 100%;
  flex-grow: 1;
  height: 40px;
  padding: 15px;
  border: 1px solid #04aaff;
  border-radius: 8px;
  font-weight: 500;
  font-size: 12px;
`;

const TodoContent = styled.textarea`
  width: 100%;
  flex-grow: 1;
  height: 300px;
  padding: 15px;
  border: 1px solid #04aaff;
  border-radius: 8px;
  font-weight: 500;
  font-size: 12px;
`;

const SubmtiBtn = styled.input`
  background-color: #04aaff;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  border: 0;
`;

export default function TodoFactory() {
  const { state } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<ICreateTodo>();
  const navigate = useNavigate();
  const handleCreateTodo = async (data: ICreateTodo) => {
    await axios.post(
      `${process.env.REACT_APP_API_KEY}/todos`,
      {
        title: data.title,
        content: data.content,
      },
      {
        headers: {
          Authorization: state.token,
        },
      }
    );
    navigate("/");
  };
  return (
    <>
      <Nav />
      <HomeContainer>
        <FactoryInputContainer onSubmit={handleSubmit(handleCreateTodo)}>
          <TodoTitle
            type="text"
            {...register("title")}
            // defaultValue={""}
            placeholder="제목을 입력해주세요."
            required
          />
          <TodoContent
            {...register("content")}
            placeholder="내용을 입력해주세요."
            required
          />
          <SubmtiBtn type="submit" value="Todo" />
        </FactoryInputContainer>
      </HomeContainer>
    </>
  );
}
