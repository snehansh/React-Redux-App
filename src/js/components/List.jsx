import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    articles: state.articles,
    message: state.message
  };
};

const ConnectedList = ({ articles, message }) => (
  <div>
    <ul className="list-group list-group-flush">
      {message.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.message}
        </li>
      ))}
    </ul>

      <ul className="list-group list-group-flush">
        {articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
