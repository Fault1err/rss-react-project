import { Component } from 'react';
import './App.css';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import { SearchState } from './interfaces/search-props';

class App extends Component<object, SearchState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {
    const savedTerm = localStorage.getItem('searchTerm');
    if (savedTerm) {
      this.setState({ searchTerm: savedTerm });
    } else {
      this.setState({ searchTerm: '' });
    }
  }

  saveSearch = (term: string) => {
    localStorage.setItem('searchTerm', term);
    this.setState({ searchTerm: term });
  };

  render() {
    return (
      <>
        <div className="App">
          <Search onSearch={this.saveSearch} />
          <SearchResults searchTerm={this.state.searchTerm} />
        </div>
      </>
    );
  }
}

export default App;
