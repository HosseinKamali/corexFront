import { Routes,Route } from "react-router-dom";
import FormLogin from "../../components/formLogin/FormLogin";
import FormSignUp from "../../components/formSignUp/FormSignUp";



const LinkPages = () => {
    return ( 
        <Routes>
            <Route path="/login" element={<FormLogin/>}/>
            <Route path="/signUp" element={<FormSignUp/>}/>
            </Routes>
     );
}
 
export default LinkPages;