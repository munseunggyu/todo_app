import { useState } from "react";
import styled from "styled-components";
import { HomeContainer } from "../../../common/MainContainer";
import Nav from "../../../common/Nav";

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
  const [title, setTItle] = useState("");
  const [content, setContent] = useState("");
  return (
    <>
      <Nav />
      <HomeContainer>
        <FactoryInputContainer>
          <TodoTitle
            type="text"
            value={title}
            onChange={(e) => setTItle(e.target.value)}
            placeholder="Title"
          />
          <TodoContent
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What content?"
          />
          <SubmtiBtn type="submit" value="Todo" />
        </FactoryInputContainer>
      </HomeContainer>
    </>
  );
}
