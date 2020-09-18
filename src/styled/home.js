import styled from "styled-components";
import Home from "../components/home/Home";
import SortProblems from "../components/home/SortProblems";
import FilterProblemsTech from "../components/home/FilterProblemsTech";
import FilterProblemsDifficulty from "../components/home/FilterProblemsDifficulty";
import ProblemsList from "../components/home/ProblemsList";
import ProblemCard from "../components/home/ProblemCard";

// <main>
export const StyledHome = styled(Home)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// <section>
export const StyledSortProblems = styled(SortProblems)`
  margin: 0.6em;
`;

// <section>
export const StyledFilterProblemsTech = styled(FilterProblemsTech)`
  margin: 0.6em;
`;

// <section>
export const StyledFilterProblemsDifficulty = styled(FilterProblemsDifficulty)`
  margin: 0.6em;

  p {
    margin-top: 0px;
    margin-bottom: 0.4em;
    text-align: center;
  }
`;

// <ul>
export const StyledProblemsList = styled(ProblemsList)`
  padding: 0px;
`;

// <li>
export const StyledProblemCard = styled(ProblemCard)`
  list-style-type: none;
  text-align: center;

      position: relative;
      width: 250px;
      height: 144.34px;
      background-color: #a6cba0;
      margin: 72.17px 0;
  

:before,
:after {
      content: "";
      display: block;
      position: absolute;
      width: 0;
      border-left: 125px solid transparent;
      border-right: 125px solid transparent;
    }
:before {
      bottom: 100%;
      border-bottom: 72.17px solid #a6cba0;
    }
:after {
      top: 100%;
      width: 0;
      border-top: 72.17px solid #a6cba0;
    }
  }
`;
