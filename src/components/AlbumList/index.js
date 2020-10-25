import React from 'react';

const AlbumsList = ({ albums, term }) => {
  const renderAlbumsList = () => {
    if (term === '') return null;
    else if (!albums || albums.items.length === 0) return <div>No results</div>;
    else {
      return albums.items.map((item, index) => (
        <div className="card-bordered" key={index}>
          <a
            target="_blank"
            href={item.external_urls.spotify}
            rel="noopener noreferrer"
          >
            <img src={item.images[0].url} alt=""></img>
          </a>

          <div className="info">{item.name}</div>
          <div className="info">{item.release_date.split('-')[0]}</div>
        </div>
      ));
    }
  };

  return <div className="list-view">{renderAlbumsList()}</div>;
};

export default AlbumsList;
