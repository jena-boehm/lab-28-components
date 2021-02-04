import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/search/Search';
import { getArticles } from '../services/NewsApi';
import { searchArticles } from '../services/searchArticles';

export default class NewsSearch extends Component {
    state = {
      articles: [],
      loading: false,
      search: ''
    }

    componentDidMount() {
      this.setState({ loading: true });
      
      getArticles()
        .then(articles => this.setState({ articles, loading: false }));
    }

    handleChange = ({ target }) => {
      this.setState({ search: target.value });
      searchArticles(target.value)
        .then(articles => this.setState({ articles }));
    }

    render() {
      const { articles, search } = this.state;

      return (
        <div>
          <Search search={search} onChange={this.handleChange} />
          <ArticleList articles={articles} />  
        </div>
      );
    }
}
