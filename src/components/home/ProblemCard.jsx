import React from "react";
import { StyledLink } from "../../styled/lib";
import { formatTimeString } from "../../utils/time";
import { capitalizeFirstLetter } from "../../utils/capitalize";

function ProblemCard({ problem, className }) {
  const timeDifference = Date.now() - new Date(problem.created_at);
  const timeString = formatTimeString(timeDifference);
  const difficultyRef = ["Easy", "Medium", "Hard"];

  return (
    <li className={className}>
      <article>
        <p>
          Posted by {problem.username} {""} {timeString}
        </p>
        <p>Difficulty: {difficultyRef[problem.difficulty]}</p>
        <p>{problem.solved ? "Solved" : "Unsolved"}</p>
        <StyledLink to={`/problem/${problem.problem_id}`}>
          <h2>{capitalizeFirstLetter(problem.title)}</h2>
        </StyledLink>

        {problem.body.length > 100 ? (
          <p>
            {problem.body.slice(0, 100) + "... "}

            <StyledLink to={`/problem/${problem.problem_id}`}>
              Read more
            </StyledLink>
          </p>
        ) : (
          problem.body
        )}
      </article>
    </li>
  );
}

export default ProblemCard;
