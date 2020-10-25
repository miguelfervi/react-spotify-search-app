import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_ALBUMS,
  FETCH_TRACKS,
  FETCH_ARTISTS,
} from './types';
import axios from 'axios';

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchAlbums = (res) => ({
  type: FETCH_ALBUMS,
  payload: res.data.albums,
});

export const fetchTracks = (res) => ({
  type: FETCH_TRACKS,
  payload: res.data.tracks,
});

export const fetchArtists = (res) => ({
  type: FETCH_ARTISTS,
  payload: res.data.artists,
});

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
  dispatch({ type: FETCH_ARTISTS, payload: res.data.artists });
  dispatch({ type: FETCH_TRACKS, payload: res.data.tracks });
  dispatch({ type: FETCH_ALBUMS, payload: res.data.albums });
};
