import React from 'react';
import { connect } from 'react-redux';
import BookSearchResultPanel from './BookSearchResultPanel';
import BookFormModal from './BookFormModal';

export const SearchResultsList = ({
  searchResults, searchTerm, error,
}) => (

  <div>
    <BookFormModal />
    {searchResults.length > 0 && (
      <h4 className="search-result-heading">
        Search results for
        {' '}
        {searchTerm}
      </h4>
    )}
    {searchResults.map(book => (
      <BookSearchResultPanel key={book.id} book={book} />
    ))}
    {
        error && (
        <h4>
          No results for
          {' '}
          {searchTerm}
        </h4>
        )
      }
  </div>
);

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  searchTerm: state.searchTerm,
  error: state.errors ? state.errors[0] : null,
});

export default connect(mapStateToProps)(SearchResultsList);
