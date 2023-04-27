import Navbar from "./component/Navbar";
import { GlobalStyle } from "./style/GlobalStyle";
import Sections from "./section";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Sections/>
    </>
  );
}

export default App;
