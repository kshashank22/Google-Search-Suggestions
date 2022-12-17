// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {inputValue: ''}

  updateSearchValue = suggestion => {
    this.setState({inputValue: suggestion})
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inputValue.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logo"
          alt="google logo"
        />
        <div className="card-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <div>
              <input
                type="search"
                placeholder="Search Google"
                className="search"
                value={inputValue}
                onClick={this.onChangeInput}
              />
            </div>
          </div>
          <ul className="suggestions">
            {searchResult.map(each => (
              <SuggestionItem
                key={each.id}
                searchInfo={each}
                updateSearchValue={this.updateSearchValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
