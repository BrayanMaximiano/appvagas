import GlobalStyle from "./styles/GlobalStyle";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Form from './pages/Form'

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Form" element={<Form/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
