import React from "react";
import { MDBCol } from "mdbreact";

const Search = () => {
  return (
    <div>
      <form>
        <MDBCol md="6">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </MDBCol>
      </form>
    </div>
  );
};

export default Search;
