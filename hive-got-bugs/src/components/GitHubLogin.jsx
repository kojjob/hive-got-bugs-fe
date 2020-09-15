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
    user: "",
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        console.log("signed in");
      },
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <span>
            <div>Signed in</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
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
