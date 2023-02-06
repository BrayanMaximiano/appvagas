import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Form from './pages/Form'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Form" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
