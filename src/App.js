import "./App.css";
import FinalStep from "./pages/finalStep/FinalStep";
import FormPage from "./pages/formPage/FormPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     
     <Routes>
      <Route path="/finalStep" element={<FinalStep/>}/>
     </Routes>
     <FormPage/>
    </BrowserRouter>
  );
}

export default App;
