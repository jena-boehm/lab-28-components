import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/search/Search';
import { getArticles } from '../services/NewsApi';

export default class NewsSearch extends Component {
    state = {
      articles: [],
      loading: false,
      search: ''
    }

    componentDidMount() {
      getArticles()
        .then(articles => this.setState({ articles }));
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      const { articles } = this.state;

      return (
        <div>
          <Search />
          <ArticleList articles={articles} />  
        </div>
      );
    }
}
