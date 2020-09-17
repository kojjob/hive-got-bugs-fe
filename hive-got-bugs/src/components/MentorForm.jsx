import React, { Component } from "react";
import "../css/mentorForm.css";

class MentorForm extends Component {
  state = { isLoading: true };

  render() {
    return (
      <div className="mentorform">
        <header>
          <h2>Become a mentor</h2>
          <p>
            Congratulations! You have gathered enough bug points to become a
            mentor. Fill out your mentor profile below!
          </p>
        </header>
        <form className="form" onSubmit>
          <label for="input">Bio:</label>
          <input type="text" id="input" />
          <label>
            Skills:
            <input type="text" />
          </label>
          <label>
            Github URL:
            <input type="text" />
          </label>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}

export default MentorForm;
