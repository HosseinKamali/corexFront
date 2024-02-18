import "./formSignUp.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

const FormSignUp = () => {
  const [showPassword,setShowPassword]=useState(false)
  const [showPasswordConfirm,setShowPasswordConfirm]=useState(false)

  const handelShowPsword=()=>{
    setShowPassword(!showPassword)
  }
  const handelShowPasswordConfirm=()=>{
    setShowPasswordConfirm(!showPasswordConfirm)
  }
  
  const schema = yup.object().shape({
    firstName: yup.string().required('First name is required').matches(/^[a-zA-Z]+$/, 'Invalid first name'),
    lastName: yup.string().required('Last name is required').matches(/^[a-zA-Z]+$/, 'Invalid last name'),
    country: yup.string().matches(/[A-Za-z]{2}/, 'Invalid country code').required('Country is required'),
    email: yup.string().email().required('Email is required'),
    phoneNumber: yup.number().positive().required('Phone number is required'),
    password: yup.string().min(6).max(15).required('Password is required').matches(/[a-z]+/).matches(/[A-Z]+/).matches(/\d+/),
    confirmPassword: yup.string().oneOf([yup.ref("password")]).required('Please confirm your password'),
    checkbox: yup.boolean().oneOf([true], 'You must agree to the terms')
  });
  
  const { register, handleSubmit, formState:{errors}} = useForm({resolver : yupResolver(schema) });

  const onFormSubmit = (data) => {
    console.log("submit ");
    console.log(data);
  };
  return (
    <div className="wrapperFormSignUp poppins-medium">
      <div className="headerSignUp">
        <h1>Sign up</h1>
        <p>to open your account</p>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-control">
          <label htmlFor="">First name *</label>
          <br />
          <input type="text" name="firstName" {...register("firstName")} />
          {errors.firstName && (
            <p>{errors.firstName?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Last name *</label>
          <br />
          <input type="text" name="lastName" {...register("lastName")} />
          {errors.lastName && (
            <p>{errors.lastName?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Country *</label>
          <br />
          <input type="text" name="country" {...register("country")} />
          {errors.country && (
            <p>{errors.country?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Email *</label>
          <br />
          <input type="email" name="email" {...register("email")} />
          {errors.email && (
            <p>{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Phone number *</label>
          <br />
          <input type="tel" name="phoneNumber"{...register("phoneNumber")} />
          {errors.phoneNumber && (
            <p>{errors.phoneNumber?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Password *</label>
          <br />
          <span onClick={handelShowPsword} className="eye">{showPassword?<BsEye size={18}/>:<BsEyeSlash size={18}/>}</span>

          <input type={showPassword?"text":"password"} name="password" {...register("password")} />
          {errors.password && (
            <p>{errors.password?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Password confirmation *</label>
          <br />
          <span onClick={handelShowPasswordConfirm} className="eye">{showPasswordConfirm ?<BsEye size={18}/>:<BsEyeSlash size={18}/>}</span>

          <input type={showPasswordConfirm  ?"text":"password"} name="confirmPassword"{...register("confirmPassword")} />
            {errors.confirmPassword && (
            <p>{errors.confirmPassword?.message}</p>
          )}
        </div>

        <div className="form-check">
          <input type="checkbox" name="checkbox" {...register("checkbox")} />
          {errors.checkbox && (
            <p className="checkError">{errors.checkbox?.message}</p>
          )}
          <small>
            I agree with 
                <span style={{ color:"rgba(99, 185, 70, 1)",marginLeft:"2px" }}>Customer Aggreement</span>
          </small>
        </div>
        <div className="btnSignUp">
          <button className="btnSubmitSignUp" type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
