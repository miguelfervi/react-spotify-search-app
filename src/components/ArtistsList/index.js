import React from 'react';
import NoResults from '../NoResults';

const ArtistsList = ({ artists, term }) => {
  console.log(artists);
  const renderArtistsList = () => {
    if (term === '') return null;
    else if (!artists || artists.items.length === 0) return <NoResults />;
    else {
      return artists.items.map((item, index) => (
        <div key={index}>
          <div>{`${item.followers.total} followers`}</div>
          <div>{item.name}</div>
        </div>
      ));
    }
  };

  return <div className="list-view">{renderArtistsList()}</div>;
};

export default ArtistsList;
