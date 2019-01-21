import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import './SearchBar.css';
import { withRouter } from 'react-router-dom';
    
  class SearchBar extends Component {
    constructor() {
      super();
      this.state = {
        value: '',
        suggestions: [],
        list: [],
      };
      this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    }

      componentDidMount() {
        fetch('http://92.175.11.66:3000/joysticks/api/games')
            .then(results => results.json())
            .then(data => {
                this.setState({
                    list: data,
                });
            });
    }
  
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
    };
    
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: this.getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };

    escapeRegexCharacters(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    getSuggestions(value) {
      const escapedValue = this.escapeRegexCharacters(value.trim());
      if (escapedValue === '') {
        return [];
      }    
      const regex = new RegExp('^' + escapedValue, 'i'); 
      return this.state.list.filter(games => regex.test(games.name));
    }
    
    getSuggestionValue(suggestion) {
      return suggestion.name;
    }
    
    renderSuggestion(suggestion) {
      return (
            <span>{suggestion.name}</span>
      );
    }

    onSuggestionSelected(event, { suggestion }) {
        const id = suggestion.id;
        // redirection avec react-router
        this.props.history.push(`/games/${id}`);
        this.setState({
            value: ''
          });
    }

    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "Nom du jeu...",
        value,
        onChange: this.onChange
      };

      return (
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps} 
          onSuggestionSelected={this.onSuggestionSelected}
          />
      );
    }
  }

  export default withRouter(SearchBar);
  
  