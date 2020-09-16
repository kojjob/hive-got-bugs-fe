import React from "react";

function SuggestionCard() {
  return (
    <div className="suggestionsCard">
      <p>Suggested By:</p>
      <p>Username</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt pariatur necessitatibus sunt mollitia excepturi ratione suscipit earum voluptas, odit molestias enim veniam sed ab labore, eaque sint in est?</p>

      <div className="buttonList">
        <button class="suggestionButtons">
          <div className="suggestion-button">Edit Suggestion</div>
        </button>
        <button class="suggestionButtons">
          <div className="suggestion-button">Delete Suggestion</div>
        </button>
        <button class="suggestionButtons">
          <div className="suggestion-button">This Solved My Problem</div>
        </button>
      </div>
    </div>
  );
}

export default SuggestionCard;
