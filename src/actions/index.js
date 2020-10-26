import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_ALBUMS,
  FETCH_TRACKS,
  FETCH_ARTISTS,
  ADD_ALBUMS,
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

export const fetchAlbums = (albums) => ({
  type: FETCH_ALBUMS,
  payload: albums,
});

export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  payload: albums,
});

export const fetchTracks = (tracks) => ({
  type: FETCH_TRACKS,
  payload: tracks,
});

export const fetchArtists = (artists) => ({
  type: FETCH_ARTISTS,
  payload: artists,
});
