import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addKeyword } from "../../store/actions/photoActions";
import "./Search.scss";

function Search({ addKeyword }) {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleSearch = (e) => {
    e.preventDefault()
    if (inputValue.trim() && inputValue !== ".") {
      addKeyword(inputValue)
    }
    setInputValue("")
  }

  return (
    <form onSubmit={(e) => handleSearch(e)} className="search-container">
      <input value={inputValue} onChange={(e) => handleChange(e)} type="text" />
      <input type="submit" value="Search" onClick={(e) => handleSearch(e)} />
      <button onClick={() => addKeyword("")}>All</button>
    </form>
  );
}

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  addKeyword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  keyword: state.keyword.keyword,
});

export default connect(mapStateToProps, { addKeyword })(Search);
