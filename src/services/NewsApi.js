/* eslint-disable max-len */
import fetch from 'node-fetch';
const API_KEY = process.env.API_KEY;

export const getArticles = () => {
  return fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(json => json.articles);
};
