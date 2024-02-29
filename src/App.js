import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPage from "./pages/formPage/FormPage";
import FinalStep from "../src/pages/finalStep/FinalStep"
import UserPanelPage from "./components/userPanel/UserPanelpage/UserPanelPage";


function App() {
  return (
    <BrowserRouter>
     
     {/* <Routes>
      <Route path="/finalStep" element={<FinalStep/>}/>
     </Routes>
     <FormPage/> */}
     <UserPanelPage/>
    </BrowserRouter>
  );
}

export default App;
