import React from 'react';
import NoResults from '../NoResults';
import unknonw from '../../utils/unknown.jpg';

const TracksList = ({ tracks, term, title }) => {
  console.log(tracks);
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

  return (
    <div className="title-filter">
      {title.toUpperCase()}
      <div className="list-view">{renderTracksList()}</div>
    </div>
  );
};

export default TracksList;
