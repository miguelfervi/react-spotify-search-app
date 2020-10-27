import React from 'react';
import NoResults from '../NoResults';
import unknonw from '../../utils/unknown.png';

const ArtistsList = ({ artists, term, title, loadMore }) => {
  const renderArtistsList = () => {
    if (term === '') return null;
    else if (!artists || artists.items.length === 0) return <NoResults />;
    else {
      return artists.items.map((item, index) => (
        <div className="card-bordered" key={index}>
          <a
            target="_blank"
            href={item.external_urls.spotify}
            rel="noopener noreferrer"
          >
            <img
              src={item.images.length > 0 ? item.images[0].url : unknonw}
              alt=""
            ></img>
          </a>

          <div className="info">{item.name}</div>
          <div className="info">{`${item.followers.total} followers`}</div>
        </div>
      ));
    }
  };

  const loadMoreButton = () => {
    if (term !== '' && artists && artists.next)
      return (
        <button
          type="button"
          className="btn-more"
          onClick={() => loadMore(title)}
        >
          Load More
        </button>
      );
    else return null;
  };

  return (
    <div>
      {title.toUpperCase()}
      <div className="list-view">{renderArtistsList()}</div>
      {loadMoreButton()}
    </div>
  );
};

export default ArtistsList;
