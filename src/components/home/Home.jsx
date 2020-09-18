import React, { Component } from "react";
import * as api from "../../utils/api";
import { StyledLoader } from "../../styled/lib";
import { StyledErrorPage } from "../../styled/lib";
import { StyledSortProblems } from "../../styled/home";
import { StyledFilterProblemsTech } from "../../styled/home";
import { StyledFilterProblemsDifficulty } from "../../styled/home";
import { StyledProblemsList } from "../../styled/home";

class Home extends Component {
  state = {
    problems: [],
    selectedSort: "newest",
    selectedTech: "",
    selectedDifficulty: "",
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    const { selectedSort } = this.state;
    this.fetchProblems(selectedSort);
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedSort } = this.state;
    if (prevState.selectedSort !== selectedSort) {
      this.fetchProblems(selectedSort);
    }
  }

  fetchProblems(selectedSort) {
    this.setState({ isLoading: true });
    api
      .getProblems(selectedSort)
      .then((problems) => {
        this.setState({ problems, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          // err: {
          //   type: "fetchProblems",
          //   msg: response.data.msg,
          //   status: response.status,
          // },
        });
      });
  }

  handleSortChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedSort: value });
  };

  handleTechChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedTech: value });
  };

  handleDifficultyChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedDifficulty: value });
  };

  render() {
    const {
      problems,
      selectedSort,
      selectedTech,
      selectedDifficulty,
      isLoading,
      err,
    } = this.state;
    const { className } = this.props;
    if (err) return <StyledErrorPage {...err} />;

    return (
      <main className={className}>
        <h2>Solve a problem</h2>
        <StyledSortProblems
          handleSortChange={this.handleSortChange}
          selectedSort={selectedSort}
        />
        <StyledFilterProblemsTech
          handleTechChange={this.handleTechChange}
          selectedTech={selectedTech}
        />
        <StyledFilterProblemsDifficulty
          handleDifficultyChange={this.handleDifficultyChange}
          selectedDifficulty={selectedDifficulty}
        />
        {isLoading ? (
          <StyledLoader />
        ) : (
          <StyledProblemsList problems={problems} />
        )}
      </main>
    );
  }
}

export default Home;
