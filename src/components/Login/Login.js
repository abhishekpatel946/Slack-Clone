import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../Firebase/firebase";
import { useStateValue } from "../Utility/StateProvider";
import { actionTypes } from "../Utility/reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (error) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://a.slack-edge.com/bv1-8/slack_logo-ebd02d1.svg"
          alt="slack-logo"
        />
        <h1>Sign in to Slack</h1>
        <p>slack.com</p>
        <Button variant="outlined" color="primary" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
