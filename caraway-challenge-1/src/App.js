import "./App.css";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #c3f63b;
`;

const Button = styled.button`
  height: 70px;
  width: 330px;
  border-radius: 50px;
  background-color: #353b48;
  color: #c3f63b;
  font-size: 30px;
  font-family: "Open Sans", sans-serif;
  border: none;
  box-shadow: 14px 14px white;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #f5f6fa;
    color: black;
    box-shadow: -14px -14px #353b48;
  }
`;

function App() {
  return (
    <Container>
      <Button>ADD TO CART</Button>
    </Container>
  );
}

export default App;
