import "./App.css";
import styled from "@emotion/styled";

const Container = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#c3f63b",
}));

const Button = styled.button(() => ({
  width: "330px",
  height: "70px",
  borderRadius: "50px",
  backgroundColor: "#353b48",
  color: "#c3f63b",
  fontSize: "30px",
  fontFamily: "Open Sans, sans-serif",
  border: "none",
  boxShadow: "14px 14px white",
  transition: "0.2s ease-in",
  "&:hover": {
    backgroundColor: "#f5f6fa",
    color: "black",
    boxShadow: "-14px -14px #353b48",
  },
}));

function App() {
  return (
    <Container>
      <Button>ADD TO CART</Button>
    </Container>
  );
}

export default App;
