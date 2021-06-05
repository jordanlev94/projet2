import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import registerCB from "./register";


const useInputEmail = () => {
  const [value, setValue] = useState(""); // pour changer la value et avoir la possibilité de le remettre à zero

  const input = (
    <input
      value={value}
      type="email"
      className="form-control rounded-pill"
      id="email"
      aria-describedby="emailHelp"
      onInput={(event) => {
        setValue(event.target.value);
      }}
    />
  ); // a modifier ma value, pour lui mettre le contenu de l'iput

  const reset = () => setValue(""); // pour que le input s'efface

  return [value, input, reset];
};

const useInputPassword = () => {
  const [Password, setPassword] = useState(""); // pour changer la value et avoir la possibilité de le remettre à zero

  const Passwordinput = (
    <input
      value={Password}
      type="password"
      className="form-control rounded-pill"
      id="password"
      onInput={(event) => {
        setPassword(event.target.value);
      }}
    />
  ); // a modifier ma value, pour lui mettre le contenu de l'iput

  const resetPassword = () => setPassword(""); // pour que le input s'efface

  return [Password, Passwordinput, resetPassword];
};

const useInputPhone = () => {
  const [Phone, setPhone] = useState(""); // pour changer la value et avoir la possibilité de le remettre à zero

  const Phoneinput = (
    <input
      value={Phone}
      type="integer"
      className="form-control rounded-pill"
      id="phone"
      onInput={(event) => {
        setPhone(event.target.value);
      }}
    />
  ); // a modifier ma value, pour lui mettre le contenu de l'iput

  const resetPhone = () => setPhone(""); // pour que le input s'efface

  return [Phone, Phoneinput, resetPhone];
};
const useInputfName = () => {
  const [fName, setfName] = useState(""); // pour changer la value et avoir la possibilité de le remettre à zero

  const fNameinput = (
    <input
      value={fName}
      type="text"
      className="form-control rounded-pill"
      id="fName"
      onInput={(event) => {
        setfName(event.target.value);
      }}
    />
  ); // a modifier ma value, pour lui mettre le contenu de l'iput

  const resetfName = () => setfName(""); // pour que le input s'efface

  return [fName, fNameinput, resetfName];
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://facebook.com//">
        AAVA
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [email, emailInput, reset] = useInputEmail();
  const [Password, Passwordinput, resetPassword] = useInputPassword();
  const [Phone, Phoneinput, resetPhone] = useInputPhone();
  const [fName, fNameinput, resetfName] = useInputfName();

  return (
    <div className="full">
      <div className="container">
        <div className="row justify-content-md-center pt-5">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
        </div>
        <div className="row justify-content-md-center mt-5">
          <div className="form-group col-md-6 col-12 text-center">
            <label for="email">Email address</label>
            {emailInput}
          </div>
        </div>

        <div className="row justify-content-md-center">
          <div className="form-group col-md-6 col-12 text-center">
            <label for="password">Password</label>
            {Passwordinput}
          </div>
        </div>

        <div className="row justify-content-md-center">
          <div className="form-group col-md-3 col-12 text-center">
            <label for="fName">Name</label>
            {fNameinput}
          </div>

          <div className="form-group col-md-3 col-12 text-center">
            <label for="phone">Phone</label>
            {Phoneinput}
          </div>
        </div>

        <button
          className="btn btn-primary btn-block col-md-3 mt-3 col-12 mx-auto text-center rounded-pill"
          type="submit"
          onClick={async () => {
            const result = await registerCB(email, Password, Phone, fName);
            reset();
            resetfName();
            resetPassword();
            resetPhone();
            console.log(result);
          }}
        >
          Register
        </button>

        <div className="text-center mb-5 pb-5 mt-5">
          <Copyright />
        </div>
      </div>
    </div>
  );
}
