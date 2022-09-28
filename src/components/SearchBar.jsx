import React, { Component } from 'react';
import './SearchBar.css'
class SearchBar extends Component {
  state={words:''}
  onSubmitForm=(e)=>{
    e.preventDefault()
    this.props.onSubmit(this.state.words)
  }
  render() {
    return (
      <div className='searchBarContainer '>
        <form onSubmit={e=>this.onSubmitForm(e)}>
          <input 
          className='inputSearchBar'
          onChange={(e)=>this.setState({words:e.target.value})}
          placeholder='Search'
          type="text"
          value={this.state.words}
          />
        </form>

      </div>
    );
  }
}

export default SearchBar;