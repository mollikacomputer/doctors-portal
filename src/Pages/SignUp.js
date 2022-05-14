import React from 'react';
import { useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const SignUp = () => {
    
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.name, data.email, data.password);
    console.log(data);
  };

  let signUpError;

  if(loading){
    return <button className="btn btn-square loading"></button>;
  }

  if(user){
    console.log(user)
  }

  if(error){
    signUpError = <p className='text-red-500' > {error?.message } </p>;
  }

  // console.log(user);

    return (
        <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className=" text-4xl text-primary" > Sign Up</h2>
  
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Write your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name is required",
                    }
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
  
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Minimum Length 6 character",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
                    {signUpError} <br/>
              <input type="submit" className="btn w-full" value="Sign Up" />
            </form>
            <p> Old User of Doctors Portal? <span className="text-primary" > <Link to="/login" > Log In </Link> </span> </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;