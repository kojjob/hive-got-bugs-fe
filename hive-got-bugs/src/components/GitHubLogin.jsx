import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyC2veJu3sp0kAhZtjCB05PY9_ceQI1ROe0",
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

  componentDidMount = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((userCredential) => {
        const { username, profile } = userCredential.additionalUserInfo;
        const image_url = profile.avatar_url;
        this.setState({ isSignedIn: true, username, image_url });
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
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default GitHubLogin;
