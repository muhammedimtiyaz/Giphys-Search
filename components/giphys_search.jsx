import React from 'react';

// import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "golden retriever",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchGiphys('golden+retriever');
  }
  
  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.prevetDefault();
    let searchTerm = this.state.searchTerm.split(" ").join("+");
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  render() {
    return (
      <>
        <h1>Your Giphy Results</h1>
        <form className="search-form">
          <label>Search term:
            <input 
            type="text" 
            className="search-input"
            placeholder="search..."
            onChange={this.handleChange}
            value={this.state.searchTerm} />
          </label>
          <button onClick={this.handleSubmit} className="submit-button">Search!</button>
        </form>
      </>
    );
  }
};

export default GiphysSearch;