import React from 'react';

const TracksList = ({ tracks, term }) => {
  const renderTracksList = () => {
    if (term === '') return null;
    else if (!tracks || tracks.items.length === 0) return <div>No results</div>;
    else {
      return tracks.items.map((item, index) => (
        <div key={index}>
          <div>{item.disc_number}</div>
        </div>
      ));
    }
  };

  return <div className="list-view">{renderTracksList()}</div>;
};

export default TracksList;
