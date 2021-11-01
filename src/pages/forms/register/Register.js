import React, { useState, useEffect } from "react";
import './register.css'

export default function UserRegister() {
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
//   const userName = new RegExp(
//     "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
//   );
  const validPassword = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

  const [user, setUser] = useState({
    name: "",
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    user_name: null,
    email: null,
    password: null,
    confirm_password: null,
  });

  useEffect(() => {
    if (
      !errors.name &&
      !errors.user_name &&
      !errors.email &&
      !errors.password &&
      !errors.confirm_password
    ) {
      console.log(user);
    }
  }, [errors]);

  const handleInputChange = (e) => {
    console.log(e.target, e.target.value);
    if (e.target.name === "name") {
      setUser({
        ...user,
        name: e.target.value,
      });
      setErrors({
        ...errors,
        name:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.length <= 3
            ? "Min Length is 4"
            : e.target.value.length > 10
            ? "Max Length is 10"
            : null,
      });
    }else if(e.target.name === "user_name")
    {
        setUser({
          ...user,
          user_name: e.target.value,
        });
        setErrors({
            ...errors,
            name:
              e.target.value.length === 0
                ? "This field is required"
                : e.target.value.length <= 3
                ? "Min Length is 4"
                : e.target.value.length > 10
                ? "Max Length is 10"
                : null,
          });
        
    }else if(e.target.name === "email"){
        setUser({
            ...user,
            email: e.target.value,
          });
        setErrors({
          ...errors,
          email:
            e.target.value.length === 0
              ? "This field is required"
              : !validEmail.test(e.target.value)
              ? "invalidemail"
              : null,
        });
    
    }else if(e.target.name === "password" ){
        setUser({
          ...user,
          password: e.target.value,
        });
        setErrors({
          ...errors,
          password:
            e.target.value.length === 0
              ? "This field is required"
              : !validPassword.test(e.target.value)
              ? "invalid Password"
              : null,
        });
    }else if( e.target.name === "confirm_password" ){
        setUser({
            ...user,
            confirm_password: e.target.value,
          });

          setErrors({
            ...errors,
            confirm_password:
              e.target.value.length === 0
                ? "This field is required"
                : e.target.value!==user.password
                ? "not matched"
                : null,
          });
    }
       
      

    }



  const submitUser = (e) => {
    e.preventDefault();
    setErrors({
      ...errors,
      name:
        user.name.length === 0
          ? "This field is required"
          :null,

      user_name:
      user.name.length === 0
      ? "This field is required"
      : user.name.length <= 3
      ? "Min Length is 4"
      : user.name.length > 10
      ? "Max Length is 10"
      : null,

      email:
       e.target.value.length === 0
        ? "This field is required"
        : !validEmail.test(e.target.value)
        ? "invalidemail"
        : null,

        password:
         e.target.value.length === 0
          ? "This field is required"
          : !validPassword.test(e.target.value)
          ? "invalid Password"
          : null,
          confirm_password:
          e.target.value.length === 0
           ? "This field is required"
           : e.target.value!== user.password
           ? "Not Matched"
           : null,

          
    });
  };

  return (
    <div className=" my-4 register">
      <form onSubmit={(e) => console.log(e.target)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            name="name"
            value={user.name}
            onChange={(e) => handleInputChange(e)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.name && (<small className="text-danger">{errors.name}</small>)}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            name="user_name"
            value={user.user_name}
            onChange={(e) => handleInputChange(e)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.user_name && (
            <small className="text-danger">{errors.user_name}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            email
          </label>
          <input
            name="email"
            value={user.email}
            onChange={(e) => handleInputChange(e)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            password
          </label>
          <input
            name="password"
            value={user.password}
            onChange={(e) => handleInputChange(e)}
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            confirm_password
          </label>
          <input
            name="confirm_password"
            value={user.confirm_password}
            onChange={(e) => handleInputChange(e)}
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="exampleInputEmail1"
          />
          {errors.confirm_password && (
            <small className="text-danger">{errors.confirm_password}</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
