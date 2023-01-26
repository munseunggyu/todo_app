import { HomeContainer } from "../../common/MainContainer";
import Nav from "../../common/Nav";
import TodoLayOut from "../todo/TodoLayOut";

export default function Home() {
  return (
    <>
      <Nav />
      <HomeContainer>
        <TodoLayOut />
      </HomeContainer>
    </>
  );
}
