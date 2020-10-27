import React from 'react';
import NoResults from '../NoResults';
import unknonw from '../../utils/unknown.png';

const AlbumsList = ({ albums, term, title, loadMore }) => {
  const renderAlbumsList = () => {
    if (term === '') return null;
    else if (!albums || albums.items.length === 0)
      return <NoResults className="title-center" />;
    else {
      return albums.items.map((item, index) => (
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
          <div className="info">{item.release_date.split('-')[0]}</div>
        </div>
      ));
    }
  };

  const loadMoreButton = () => {
    if (albums && albums.next)
      return (
        <button
          className="btn-more"
          type="button"
          onClick={() => loadMore(title)}
        >
          Load More
        </button>
      );
    else return null;
  };

  return (
    <>
      <p className="title-filter">{title.toUpperCase()}</p>
      <div className="list-view">{renderAlbumsList()}</div>
      {loadMoreButton()}
    </>
  );
};

export default AlbumsList;
