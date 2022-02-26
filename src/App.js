import Container from "@mui/material/Container";
import Editor from "./Components/Editor";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Container maxWidth="xl" className="app-container">
      <Navbar />
      <Editor />
    </Container>
  );
}

export default App;
