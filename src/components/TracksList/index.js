import React from 'react';
import NoResults from '../NoResults';
import unknonw from '../../utils/unknown.png';

const TracksList = ({ tracks, term, title, loadMore }) => {
  const renderTracksList = () => {
    if (term === '') return null;
    else if (!tracks || tracks.items.length === 0) return <NoResults />;
    else {
      return tracks.items.map((item, index) => (
        <div className="card-bordered" key={index}>
          <a
            target="_blank"
            href={item.external_urls.spotify}
            rel="noopener noreferrer"
          >
            <img
              src={
                item.album.images.length > 0
                  ? item.album.images[0].url
                  : unknonw
              }
              alt=""
            ></img>
          </a>

          <div className="info">{item.name}</div>
        </div>
      ));
    }
  };

  const loadMoreButton = () => {
    if (tracks && tracks.next)
      return (
        <button type="button" onClick={() => loadMore(title)}>
          Load More
        </button>
      );
    else return null;
  };

  return (
    <div>
      {title.toUpperCase()}
      <div className="list-view">{renderTracksList()}</div>
      {loadMoreButton()}
    </div>
  );
};

export default TracksList;
