import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_ALBUMS,
  FETCH_TRACKS,
  FETCH_ARTISTS,
} from './types';

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
