import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import tw from "twin.macro";
import { Card } from "@mui/material";
import { MyButton } from './components/Button'

function App() {
  const StyledBody = styled.div`
    ${tw`bg-blue-400 h-[100vh] text-align[center]`}
  `;

  return (
    <StyledBody>
      <header>
        <Card>
          <img src={logo} className="App-logo" alt="logo" />
        </Card>

        <MyButton/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </StyledBody>
  );
}

export default App;
