import React, { Component } from "react";
import * as api from "../../utils/api";

class MentorList extends Component {
  state = {
    mentors: [],
    isLoading: true,
    //err: null,
  };

  componentDidMount() {
    this.getMentors().then((mentors) => {
      this.setState({ mentors: mentors, isLoading: false /*err: null*/ });
    });
    // .catch((err) => {
    //   this.setState({ err });
    // });
  }

  getMentors = () => {
    return api.getAllMentors();
  };

  render() {
    const { mentors, isLoading /*err*/ } = this.state;
    if (isLoading) return <p>Loading...</p>;

    return (
      <main className="mentorCards">
        {mentors.map((mentor) => (
          <section key={mentor.username}>
            <h1>{mentor.name}</h1>
            <h4>{mentor.bug_points}</h4>
            <p>{mentor.avatar_url}</p>
            <p>{mentor.description}</p>
            <p>{mentor.online_status}</p>
          </section>
        ))}
      </main>
    );
  }
}

export default MentorList;
