import React, { Component } from "react";

class FilterProblemsTech extends Component {
  state = { techList: ["tech1", "tech2", "tech3"] };

  componentDidMount() {
    this.fetchTechList();
  }

  fetchTechList() {
    // set state with list of tech
  }

  render() {
    const { handleTechChange, selectedTech, className } = this.props;
    const { techList } = this.state;

    return (
      <section className={className}>
        <label htmlFor="filter-by-tech">Filter by tech: </label>
        <select
          name="filter-by-tech"
          id="filter-by-tech"
          value={selectedTech}
          onChange={handleTechChange}
        >
          <option value="">None</option>
          {techList.map((tech) => {
            return (
              <option key={tech} value={tech}>
                {tech}
              </option>
            );
          })}
        </select>
      </section>
    );
  }
}

export default FilterProblemsTech;
