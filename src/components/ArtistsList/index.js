import React from 'react';

const ArtistsList = ({ artists, term }) => {
  console.log('kappa');
  console.log(artists);
  const renderArtistsList = () => {
    if (term === '') return null;
    else if (!artists || artists.items.length === 0)
      return <div>No results</div>;
    else {
      return artists.items.map((item, index) => (
        <div>
          <div>{`${item.followers.total} followers`}</div>
          <div>{item.name}</div>
        </div>
      ));
    }
  };

  return <div className="list-view">{renderArtistsList()}</div>;
};

export default ArtistsList;
