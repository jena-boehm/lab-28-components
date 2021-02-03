import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
  const renderArticles = articles.map(article => (
    <li key={article.title}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul>
      {renderArticles}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired
};

export default ArticleList;
