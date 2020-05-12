import React from "react";
class FilterItem extends React.Component {
  render() {
    if (this.props.type === "search") {
      return (
        <div className="filters__search">
          <input
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
          />

          <button className="filters__search__icon">
            <i className="fa fa-search" />
          </button>
        </div>
      );
    } else {
      return (
        <button
          onClick={this.props.onClick}
          className={`filters__item ${
            this.props.isSelected ? "is-selected" : ""
          }`}
        >
          {this.props.name || "Filtro"} <i className="fas fa-sort-down" />
        </button>
      );
    }
  }
}

export default FilterItem;
