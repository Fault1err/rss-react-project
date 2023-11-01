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
      testError: false,
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

  ErrorClick = () => {
    this.setState({ testError: !this.state.testError });
    throw new Error('Test error!');
  };

  render() {
    const { testError } = this.state;

    if (testError) {
      console.error('This is an error:', testError);
      return (
        <div>
          <h1>Something went wrong. </h1>
        </div>
      );
    }

    return (
      <>
        <div className="App">
          <Search onSearch={this.saveSearch} />
          <button onClick={this.ErrorClick}>Test Error</button>
          <SearchResults searchTerm={this.state.searchTerm} />
        </div>
      </>
    );
  }
}

export default App;
