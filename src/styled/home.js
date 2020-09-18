import styled from "styled-components";
import Home from "../components/home/Home";
import SortProblems from "../components/home/SortProblems";
import FilterProblemsTech from "../components/home/FilterProblemsTech";
import FilterProblemsDifficulty from "../components/home/FilterProblemsDifficulty";
import ProblemsList from "../components/home/ProblemsList";
import ProblemCard from "../components/home/ProblemCard";

export const StyledHome = styled(Home)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSortProblems = styled(SortProblems)`
  margin: 0.6em;
`;

export const StyledFilterProblemsTech = styled(FilterProblemsTech)`
  margin: 0.6em;
`;

export const StyledFilterProblemsDifficulty = styled(FilterProblemsDifficulty)`
  margin: 0.6em;

  p {
    margin-top: 0px;
    margin-bottom: 0.4em;
    text-align: center;
  }
`;

export const StyledProblemsList = styled(ProblemsList)``;

export const StyledProblemCard = styled(ProblemCard)``;
