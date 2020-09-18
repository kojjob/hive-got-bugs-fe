import React from "react";
import { StyledDifficultyButton } from "../../styled/lib";

const FilterProblemsDifficulty = ({ handleDifficultyChange, className }) => {
  return (
    <section className={className}>
      <p>Filter by difficulty: </p>
      <StyledDifficultyButton
        difficulty="easy"
        onClick={handleDifficultyChange}
      >
        Easy
      </StyledDifficultyButton>
      <StyledDifficultyButton
        difficulty="medium"
        onClick={handleDifficultyChange}
      >
        Medium
      </StyledDifficultyButton>
      <StyledDifficultyButton
        difficulty="hard"
        onClick={handleDifficultyChange}
      >
        Hard
      </StyledDifficultyButton>
    </section>
  );
};

export default FilterProblemsDifficulty;
