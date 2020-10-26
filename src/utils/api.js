import axios from 'axios';
import {
  addAlbums,
  addArtists,
  addTracks,
  fetchAlbums,
  fetchArtists,
  fetchTracks,
} from '../actions';

export const fetchData = (term) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem('params').split('&')[0].split('=')[1]
      }`,
    },
  };
  const res = await axios.get(
    `https://api.spotify.com/v1/search?query=${encodeURIComponent(
      term
    )}&type=album,track,artist`,
    config
  );
  const { albums, artists, tracks } = res.data;

  dispatch(fetchAlbums(albums));
  dispatch(fetchArtists(artists));
  dispatch(fetchTracks(tracks));
};

export const initiateLoadMoreAlbums = (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem('params').split('&')[0].split('=')[1]
      }`,
    },
  };
  return async (dispatch) => {
    const res = await axios.get(url, config);
    dispatch(addAlbums(res.data.albums));
  };
};

export const initiateLoadMoreTracks = (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem('params').split('&')[0].split('=')[1]
      }`,
    },
  };
  return async (dispatch) => {
    const res = await axios.get(url, config);

    dispatch(addTracks(res.data.tracks));
  };
};

export const initiateLoadMoreArtists = (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem('params').split('&')[0].split('=')[1]
      }`,
    },
  };
  return async (dispatch) => {
    const res = await axios.get(url, config);

    dispatch(addArtists(res.data.artists));
  };
};
