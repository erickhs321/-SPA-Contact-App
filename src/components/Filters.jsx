import React from "react";
import FilterItem from "./FilterItem";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersData: this.props.filtersData,
      selected: null,
    };
  }

  selectFilter(index) {
    this.setState({
      ...this.state,
      selected: index,
    });
  }

  render() {
    return (
      <section className="filters">
        {this.props.searchBar ? <FilterItem type="search" /> : null}
        {this.state.filtersData.map((filter, index) => (
          <FilterItem
            key={index}
            name={filter}
            value={filter}
            isSelected={this.state.selected === index}
            onClick={() => this.selectFilter(index)}
          />
        ))}
      </section>
    );
  }
}

export default Filters;
