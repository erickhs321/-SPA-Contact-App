import React from "react";

class Filters extends React.Component {
  render() {
    const { orderBy, selectedOrder, handleChangeSearchbarText } = this.props;
    return (
      <div className='container' data-testid='filters'>
        <section className='filters'>
          <div className='filters__search'>
            <input
              type='text'
              className='filters__search__input'
              placeholder='Pesquisar'
              onChange={handleChangeSearchbarText}
            />

            <button className='filters__search__icon' onClick={this.search}>
              <i className='fa fa-search' />
            </button>
          </div>

          <button
            className={`filters__item ${
              selectedOrder === "name" ? "is-selected" : ""
            }`}
            onClick={() => orderBy("name")}
          >
            Nome <i className='fas fa-sort-down' />
          </button>

          <button
            className={`filters__item ${
              selectedOrder === "country" ? "is-selected" : ""
            }`}
            onClick={() => orderBy("country")}
          >
            País <i className='fas fa-sort-down' />
          </button>

          <button
            className={`filters__item ${
              selectedOrder === "company" ? "is-selected" : ""
            }`}
            onClick={() => orderBy("company")}
          >
            Empresa <i className='fas fa-sort-down' />
          </button>

          <button
            className={`filters__item ${
              selectedOrder === "department" ? "is-selected" : ""
            }`}
            onClick={() => orderBy("department")}
          >
            Departamento <i className='fas fa-sort-down' />
          </button>

          <button
            className={`filters__item ${
              selectedOrder === "admissionDate" ? "is-selected" : ""
            }`}
            onClick={() => orderBy("admissionDate")}
          >
            Data de admissão <i className='fas fa-sort-down' />
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;
