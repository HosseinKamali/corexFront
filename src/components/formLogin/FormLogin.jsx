import "./formLogin.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const[showPassword,setShowPassword] = useState(false)

  const handelShowPassword = ()=>{
   setShowPassword(!showPassword)  
  }

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(15).required("Password is required").matches(/[a-z]+/).matches(/[A-Z]+/).matches(/\d+/),
  });

  const {register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    console.log("submit ");
    console.log(data);
  };
  return (
    <div className="wrapperFormLogin poppins-medium">
      <div className="headerLogin">
        <h1>Login</h1>
        <p>to open your account</p>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-control">
          <label htmlFor="">Email *</label>
          <br />
          <input type="email" name="email" {...register("email")} />
          {errors.email && <p>{errors.email?.message}</p>}
        </div>

        <div className="form-control">
          <label htmlFor="">Password *</label>
          <br />
          <span className="eye" onClick={handelShowPassword}>{showPassword ?<BsEye size={18}/>:<BsEyeSlash size={18}/>}</span>
          <input type={showPassword? "text": "password"} name="password" {...register("password")} />
          {errors.password && <p>{errors.password?.message}</p>}
        </div>

        <div className="btnLogin">
          <button className="btnSubmit" type="submit">Continue</button>
          <a>Forgot your password?</a>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
