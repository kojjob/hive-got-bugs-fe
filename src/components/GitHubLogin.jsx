import React, { Component } from "react";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { GithubLoginButton } from "react-social-login-buttons";
import apiKey from "../firebaseAPI";

firebase.initializeApp({
  apiKey: apiKey,
  authDomain: "hive-got-bugs.firebaseapp.com",
});

class GitHubLogin extends Component {
  state = {
    isSignedIn: false,
    username: "",
    image_url: "",
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        this.setState({ isSignedIn: true });
      },
    },
  };

  login = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((userCredential) => {
        const { username, profile } = userCredential.additionalUserInfo;
        const image_url = profile.avatar_url;
        this.setState({ isSignedIn: true, username, image_url });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  signOut = () => {
    firebase.auth().signOut();
    this.setState({ isSignedIn: false });
  };

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <span>
            <div>Signed in</div>
            <button onClick={this.signOut}>Sign out</button>
          </span>
        ) : (
          <button onClick={this.login}>login</button>
        )}
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <div>
          <GithubLoginButton />
        </div>
      </div>
    );
  }
}

export default GitHubLogin;
