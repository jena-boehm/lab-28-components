import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title }) => (
  <div>
    <p>{title}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired
};

export default Article;
