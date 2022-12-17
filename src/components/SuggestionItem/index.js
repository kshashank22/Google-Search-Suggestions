// Write your code here
import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  onClickUpdateSearchInput = () => {
    const {searchInfo, updateSearchValue} = this.props
    const {suggestion} = searchInfo
    updateSearchValue(suggestion)
  }

  render() {
    const {searchInfo} = this.props
    const {suggestion} = searchInfo
    return (
      <li className="suggestion-item" onClick={this.onClickUpdateSearchInput}>
        <p className="suggestion-text">{suggestion}</p>
        <img
          className="arrow-image"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </li>
    )
  }
}

export default SuggestionItem
